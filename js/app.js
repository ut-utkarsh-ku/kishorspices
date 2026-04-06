// ============================================================
// KISHOR SPICES — MAIN APP LOGIC
// ============================================================

var cart = [];
var detailProduct = null;

// ---- RENDER FEATURED (6 products) ----
function renderFeatured() {
  var featured = KS.products.filter(function(p){ return p.tag && p.status==='live'; }).slice(0,6);
  if(featured.length < 6) {
    var extras = KS.products.filter(function(p){ return p.status==='live' && !featured.includes(p); }).slice(0, 6-featured.length);
    featured = featured.concat(extras);
  }
  var el = document.getElementById('featuredProducts');
  if(!el) return;
  el.innerHTML = featured.map(productCard).join('');
}

// ---- RENDER ALL PRODUCTS ----
function renderAll() {
  var el = document.getElementById('allProducts');
  if(!el) return;
  var live = KS.products.filter(function(p){ return p.status==='live'; });
  el.innerHTML = live.map(productCard).join('');
}

function productCard(p) {

  var tag = '';
  if(p.tag){
    tag = '<div style="position:absolute;top:10px;left:10px;background:#E8820C;color:#fff;font-size:10px;padding:4px 10px;border-radius:20px">'+p.tag.toUpperCase()+'</div>';
  }

  return `
  <div style="
    background:#fff;
    border-radius:18px;
    padding:16px;
    box-shadow:0 8px 25px rgba(0,0,0,0.05);
    transition:0.3s;
    cursor:pointer;
  " onclick="openDetail(${p.id})"
  onmouseover="this.style.transform='translateY(-6px)'"
  onmouseout="this.style.transform='translateY(0)'"
  >

    <div style="position:relative;text-align:center;font-size:50px;margin-bottom:10px">
      ${p.emoji}
      ${tag}
    </div>

    <div style="font-weight:600;font-size:16px;margin-bottom:6px">
      ${p.name}
    </div>

    <div style="font-size:13px;color:#777;margin-bottom:12px">
      ${p.desc.substring(0,60)}...
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center">
      <div style="color:#E8820C;font-weight:700;font-size:16px">
        ₹${p.price}
      </div>

      <button onclick="event.stopPropagation();addToCart(${p.id})"
        style="background:#E8820C;color:#fff;border:none;padding:8px 14px;border-radius:20px;font-size:12px;cursor:pointer">
        Add
      </button>
    </div>

  </div>
  `;
}

// ---- RENDER BLOG ----
function renderBlog() {
  var el = document.getElementById('blogGrid');
  if(!el) return;
  var published = KS.posts.filter(function(p){ return p.status==='published'; }).slice(0,3);
  el.innerHTML = published.map(function(p) {
    return '<div class="blog-card">' +
      '<div class="blog-thumb">'+p.emoji+'</div>' +
      '<div class="blog-body">' +
        '<div class="blog-category">'+p.category+'</div>' +
        '<h3>'+p.title+'</h3>' +
        '<p>'+p.excerpt+'</p>' +
        '<div class="blog-meta"><span>'+p.author+'</span><span>'+p.date+'</span></div>' +
      '</div>' +
    '</div>';
  }).join('');
}

// ---- SHOP MODAL ----
function openShop() {
  document.getElementById('shopOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderAll();
}
function closeShop() {
  document.getElementById('shopOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ---- CART ----
function addToCart(id) {
  var p = KS.products.find(function(x){ return x.id===id; });
  if(!p) return;
  var existing = cart.find(function(x){ return x.id===id; });
  if(existing) existing.qty++;
  else cart.push({id:p.id, name:p.name, price:p.price, emoji:p.emoji, qty:1});
  showToast(p.name + ' added to cart!');
  renderCart();
  openCart();
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  document.getElementById('cartDrawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  document.getElementById('cartDrawer').classList.remove('open');
  document.body.style.overflow = '';
}

function changeQty(id, delta) {
  var item = cart.find(function(x){ return x.id===id; });
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(function(x){ return x.id!==id; });
  renderCart();
}

function renderCart() {
  var el = document.getElementById('cartItems');
  if(!cart.length) {
    el.innerHTML = '<div class="empty-cart">🛒<br><br>Your cart is empty.<br>Add some spices!</div>';
    document.getElementById('cartTotal').textContent = KS.currency+'0';
    return;
  }
  var total = 0;
  el.innerHTML = cart.map(function(item) {
    total += item.price * item.qty;
    return '<div class="cart-item">' +
      '<div class="cart-item-icon">'+item.emoji+'</div>' +
      '<div class="cart-item-info">' +
        '<div class="cart-item-name">'+item.name+'</div>' +
        '<div class="cart-item-price">'+KS.currency+item.price+'</div>' +
        '<div class="cart-qty">' +
          '<button class="qty-btn" onclick="changeQty('+item.id+',-1)">−</button>' +
          '<span style="font-size:13px;font-weight:500">'+item.qty+'</span>' +
          '<button class="qty-btn" onclick="changeQty('+item.id+',1)">+</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');
  document.getElementById('cartTotal').textContent = KS.currency+total;
}

function checkout() {
  if(!cart.length){ showToast('Your cart is empty!'); return; }
  var total = cart.reduce(function(s,i){ return s + i.price*i.qty; },0);
  var items = cart.map(function(i){ return i.name+' x'+i.qty; }).join(', ');
  var msg = encodeURIComponent('🛒 New Order from Kishor Spices Website!\n\nItems: '+items+'\nTotal: '+KS.currency+total+'\n\nPlease confirm my order.');
  window.open('https://wa.me/'+KS.whatsapp+'?text='+msg,'_blank');
  triggerNotification('New order: '+KS.currency+total+' — '+items);
}

// ---- PRODUCT DETAIL ----
function openDetail(id) {
  detailProduct = KS.products.find(function(p){ return p.id===id; });
  if(!detailProduct) return;
  document.getElementById('detailIcon').textContent = detailProduct.emoji;
  document.getElementById('detailName').textContent = detailProduct.name;
  document.getElementById('detailDesc').textContent = detailProduct.desc;
  document.getElementById('detailPrice').textContent = KS.currency + detailProduct.price;
  document.getElementById('detailOverlay').classList.add('open');
}
function closeDetail() {
  document.getElementById('detailOverlay').classList.remove('open');
}
function addFromDetail() {
  if(detailProduct) { addToCart(detailProduct.id); closeDetail(); }
}

// ---- CHATBOT ----
var chatOpen = false;
var botReplies = {
  "hi":     "Namaste! 🙏 How can I help you with Kishor Spices today?",
  "hello":  "Hello! Welcome to Kishor Spices 🌿 What would you like to know?",
  "price":  "Our spices range from ₹60 to ₹980. You can browse all 40 products by clicking 'Shop Now' on the top right!",
  "delivery": "We offer free delivery on orders above ₹499. Standard delivery takes 3–5 business days.",
  "order":  "To place an order, add items to your cart and click 'Proceed to checkout' — it'll connect you directly on WhatsApp!",
  "return": "We have a 7-day easy return policy. Just WhatsApp us at +91 98765 43210.",
  "organic": "All our spices are 100% natural with no artificial colours or preservatives. Several are also organically sourced.",
  "contact": "You can reach us at hello@kishorspices.com or WhatsApp +91 98765 43210 (Mon–Sat, 9am–6pm).",
  "bulk":   "Yes! We offer bulk and wholesale pricing. Please contact us at hello@kishorspices.com for a quote.",
  "track":  "To track your order, please WhatsApp us your order number at +91 98765 43210.",
  "default": "That's a great question! For detailed help, please WhatsApp us at +91 98765 43210 or email hello@kishorspices.com. We typically reply within the hour! 😊"
};

function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chatWindow').classList.toggle('open', chatOpen);
}

function sendMsg() {
  var input = document.getElementById('chatInput');
  var text = input.value.trim();
  if(!text) return;
  var msgs = document.getElementById('chatMsgs');
  msgs.innerHTML += '<div class="msg user">'+text+'</div>';
  input.value = '';
  msgs.scrollTop = msgs.scrollHeight;
  setTimeout(function() {
    var lower = text.toLowerCase();
    var reply = botReplies.default;
    for(var key in botReplies) {
      if(key !== 'default' && lower.includes(key)) { reply = botReplies[key]; break; }
    }
    msgs.innerHTML += '<div class="msg bot">'+reply+'</div>';
    msgs.scrollTop = msgs.scrollHeight;
  }, 700);
}

// ---- CONTACT FORM ----
function submitContact(e) {
  e.preventDefault();
  showToast('Message sent! We will reply soon. 🙏');
  var msg = encodeURIComponent('📩 New contact form message from Kishor Spices website!');
  triggerNotification('New contact form submission received!');
}

// ---- NOTIFICATIONS (WhatsApp + Telegram) ----
function triggerNotification(message) {
  // WhatsApp deep link for admin notification
  // In production this would call a backend webhook
  console.log('NOTIFY: ' + message);
  // Telegram bot webhook would be called here
}

// ---- TOAST ----
function showToast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function(){ t.classList.remove('show'); }, 2500);
}

// ---- MOBILE MENU ----
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', function() {
  renderFeatured();
  renderBlog();
  renderCart();
});
