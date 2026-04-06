// ============================================================
// KISHOR SPICES — CART ENGINE (shared across all pages)
// ============================================================

var cart = JSON.parse(localStorage.getItem('ks_cart') || '[]');
var selectedVariants = {};

function saveCart(){ localStorage.setItem('ks_cart', JSON.stringify(cart)); }

function buildProductCard(p, basePath) {
  basePath = basePath || '';
  var tagHtml = '';
  if(p.tag==='hot') tagHtml='<span class="badge badge-hot">🔥 Hot</span>';
  else if(p.tag==='new') tagHtml='<span class="badge badge-new">✨ New</span>';
  else if(p.tag==='selling') tagHtml='<span class="badge badge-selling">⚡ Selling Fast</span>';
  else if(p.tag==='bestseller') tagHtml='<span class="badge badge-bestseller">⭐ Bestseller</span>';
  else if(p.tag==='premium') tagHtml='<span class="badge badge-premium">💎 Premium</span>';
  var compareHtml = p.compare_price>0 ? '<span class="product-compare">₹'+p.compare_price+'</span>' : '';
  var imgHtml = p.image
    ? '<img src="'+basePath+p.image+'" alt="'+p.name+'" loading="lazy">'
    : '<div class="product-placeholder">'+p.emoji+'</div>';
  var varHtml = p.variants && p.variants.length
    ? '<div class="product-variants">'+p.variants.map(function(v,i){
        return '<span class="variant-pill'+(i===0?' active':'') + '" onclick="event.stopPropagation();selectVariant(this,'+p.id+',\''+v+'\')">'+v+'</span>';
      }).join('')+'</div>'
    : '';
  return '<div class="product-card" onclick="openProductDetail('+p.id+')">' +
    '<div class="product-img-wrap">' +
      imgHtml +
      (tagHtml?'<div class="product-tag-wrap">'+tagHtml+'</div>':'') +
      '<div class="product-quick-add"><button class="pqa-btn" onclick="event.stopPropagation();quickAdd('+p.id+')" title="Add to cart">+</button></div>' +
    '</div>' +
    '<div class="product-body">' +
      '<div class="product-name">'+p.name+'</div>' +
      '<div style="font-size:12px;color:var(--muted);margin-bottom:2px" class="hindi">'+p.name_hi+'</div>' +
      '<div class="product-desc">'+p.desc+'</div>' +
      varHtml +
      '<div class="product-footer">' +
        '<div><span class="product-price">₹'+p.price+'</span>'+compareHtml+'</div>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function selectVariant(el, productId, variant){
  var parent = el.closest('.product-variants');
  parent.querySelectorAll('.variant-pill').forEach(function(pill){ pill.classList.remove('active'); });
  el.classList.add('active');
  selectedVariants[productId] = variant;
}

function quickAdd(id){
  var p = KS.products.find(function(x){return x.id===id;});
  if(!p) return;
  var variant = selectedVariants[id] || (p.variants && p.variants[0]) || '';
  addToCart(id, variant);
}

function addToCart(id, variant){
  var p = KS.products.find(function(x){return x.id===id;});
  if(!p) return;
  variant = variant || selectedVariants[id] || (p.variants && p.variants[0]) || '';
  var key = id + '_' + variant;
  var existing = cart.find(function(x){return x.key===key;});
  if(existing){ existing.qty++; }
  else { cart.push({key:key, id:id, name:p.name, price:p.price, emoji:p.emoji, image:p.image, variant:variant, qty:1}); }
  saveCart();
  updateCartUI();
  showToast('✓ '+p.name+(variant?' ('+variant+')':'')+' added to cart');
  openCart();
}

function removeFromCart(key){
  cart = cart.filter(function(x){return x.key!==key;});
  saveCart();
  updateCartUI();
}

function changeQty(key, delta){
  var item = cart.find(function(x){return x.key===key;});
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) removeFromCart(key);
  else { saveCart(); updateCartUI(); }
}

function updateCartUI(){
  var total = cart.reduce(function(s,i){return s+i.price*i.qty;},0);
  var count = cart.reduce(function(s,i){return s+i.qty;},0);
  var countEl = document.getElementById('cartCount');
  if(countEl){ countEl.textContent = count; countEl.style.display = count>0?'flex':'none'; }
  var bodyEl = document.getElementById('cartBody');
  if(bodyEl){
    if(!cart.length){
      bodyEl.innerHTML='<div class="cart-empty"><div class="cart-empty-icon">🛒</div>Your cart is empty.<br><a href="../shop/index.html" style="color:var(--saffron);font-size:13px;margin-top:8px;display:block">Browse spices →</a></div>';
    } else {
      bodyEl.innerHTML = cart.map(function(item){
        var imgHtml = item.image
          ? '<img src="'+item.image+'" alt="'+item.name+'">'
          : item.emoji;
        return '<div class="cart-row">' +
          '<div class="cart-img">'+imgHtml+'</div>' +
          '<div class="cart-info">' +
            '<div class="cart-pname">'+item.name+'</div>' +
            '<div class="cart-pvariant">'+item.variant+'</div>' +
            '<div class="cart-price-row">' +
              '<div class="cart-pprice">₹'+item.price+'</div>' +
              '<div class="qty-control">' +
                '<button class="qty-btn" onclick="changeQty(\''+item.key+'\',-1)">−</button>' +
                '<span class="qty-num">'+item.qty+'</span>' +
                '<button class="qty-btn" onclick="changeQty(\''+item.key+'\',1)">+</button>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('');
    }
  }
  var subtotalEl = document.getElementById('cartSubtotal');
  var totalEl = document.getElementById('cartTotal');
  if(subtotalEl) subtotalEl.textContent = '₹'+total;
  if(totalEl) totalEl.textContent = '₹'+total;
  var deliveryEl = document.getElementById('deliveryNote');
  if(deliveryEl){
    var remaining = KS.business.free_delivery_above - total;
    deliveryEl.innerHTML = remaining > 0
      ? 'Add <span>₹'+remaining+' more</span> for free delivery!'
      : '<span>✓ You qualify for free delivery!</span>';
  }
}

function openCart(){
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
}
function closeCart(){
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
}

function checkout(){
  if(!cart.length){ showToast('Your cart is empty!'); return; }
  var total = cart.reduce(function(s,i){return s+i.price*i.qty;},0);
  var lines = cart.map(function(i){return i.name+(i.variant?' ('+i.variant+')':'')+' x'+i.qty+' = ₹'+(i.price*i.qty);});
  var msg = '🛒 *New Order — Kishor Spices*\n\n' + lines.join('\n') + '\n\n*Total: ₹'+total+'*\n\nPlease confirm my order and share payment details.';
  window.open('https://wa.me/'+KS.business.whatsapp+'?text='+encodeURIComponent(msg),'_blank');
}

// Product detail modal
function openProductDetail(id){
  var p = KS.products.find(function(x){return x.id===id;});
  if(!p) return;
  var tagHtml = '';
  if(p.tag==='hot') tagHtml='<span class="badge badge-hot">🔥 Hot</span>';
  else if(p.tag==='new') tagHtml='<span class="badge badge-new">✨ New</span>';
  else if(p.tag==='selling') tagHtml='<span class="badge badge-selling">⚡ Selling Fast</span>';
  else if(p.tag==='bestseller') tagHtml='<span class="badge badge-bestseller">⭐ Bestseller</span>';
  else if(p.tag==='premium') tagHtml='<span class="badge badge-premium">💎 Premium</span>';
  var imgHtml = p.image
    ? '<img src="'+p.image+'" style="width:100%;height:100%;object-fit:cover" alt="'+p.name+'">'
    : '<div style="font-size:80px;display:flex;align-items:center;justify-content:center;height:100%">'+p.emoji+'</div>';
  var compareHtml = p.compare_price>0
    ? ' <span style="font-size:16px;color:var(--muted);text-decoration:line-through">₹'+p.compare_price+'</span>'
    : '';
  var varHtml = p.variants && p.variants.length
    ? '<div style="margin:12px 0"><div style="font-size:12px;font-weight:500;color:var(--muted);margin-bottom:8px">Choose size</div><div style="display:flex;gap:8px;flex-wrap:wrap">'+
      p.variants.map(function(v,i){
        return '<span class="variant-pill'+(i===0?' active':'') + '" onclick="selectVariant(this,'+p.id+',\''+v+'\')" style="padding:8px 16px;font-size:13px">'+v+'</span>';
      }).join('') + '</div></div>'
    : '';
  var modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(28,18,8,0.6);z-index:700;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px)';
  modal.innerHTML = '<div style="background:#fff;border-radius:20px;max-width:480px;width:100%;overflow:hidden;max-height:90vh;display:flex;flex-direction:column">' +
    '<div style="height:260px;background:var(--paper);position:relative;flex-shrink:0;overflow:hidden">'+imgHtml+
      '<button onclick="this.closest(\'[style*=fixed]\').remove()" style="position:absolute;top:14px;right:14px;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.9);border:none;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center">✕</button>' +
      (tagHtml?'<div style="position:absolute;top:14px;left:14px">'+tagHtml+'</div>':'') +
    '</div>' +
    '<div style="padding:24px;overflow-y:auto">' +
      '<div style="font-family:var(--f-display);font-size:11px;color:var(--muted);margin-bottom:4px;letter-spacing:1px;text-transform:uppercase">'+p.category+'</div>' +
      '<div style="font-family:var(--f-display);font-size:24px;font-weight:700;color:var(--ink);margin-bottom:4px">'+p.name+'</div>' +
      '<div style="font-family:var(--f-hindi);font-size:16px;color:var(--muted);margin-bottom:12px">'+p.name_hi+'</div>' +
      '<div style="font-size:14px;color:var(--muted);line-height:1.7;margin-bottom:16px">'+p.desc+'</div>' +
      varHtml +
      '<div style="display:flex;align-items:center;gap:8px;margin-bottom:20px">' +
        '<span style="font-family:var(--f-display);font-size:28px;font-weight:700;color:var(--saffron)">₹'+p.price+'</span>' +
        compareHtml +
      '</div>' +
      '<button onclick="quickAdd('+p.id+');this.closest(\'[style*=fixed]\').remove()" class="btn btn-dark" style="width:100%;justify-content:center">Add to Cart</button>' +
      '<div style="text-align:center;margin-top:10px;font-size:12px;color:var(--muted)">Free delivery above ₹'+KS.business.free_delivery_above+'</div>' +
    '</div>' +
  '</div>';
  modal.addEventListener('click', function(e){ if(e.target===modal) modal.remove(); });
  document.body.appendChild(modal);
}

function showToast(msg){
  var t = document.getElementById('toast');
  if(!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function(){ t.classList.remove('show'); }, 2500);
}

document.addEventListener('DOMContentLoaded', function(){
  updateCartUI();
});
