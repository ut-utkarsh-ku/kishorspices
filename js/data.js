// ============================================================
// KISHOR SPICES — SHARED DATA
// Edit products, blog posts, and settings here.
// Changes reflect on BOTH the public site and admin dashboard.
// ============================================================

var KS = {

  // WHATSAPP & TELEGRAM — update these numbers/links
  whatsapp: "919876543210",        // Your WhatsApp number with country code, no +
  telegram: "KishorSpicesAdmin",   // Your Telegram username

  // SETTINGS
  freeDeliveryAbove: 499,
  currency: "₹",

  // ---- PRODUCTS (40 spices) ----
  products: [
    { id:1,  name:"Turmeric Powder",      emoji:"🟡", price:120, desc:"Pure Lakadong turmeric with 5.5% curcumin. Golden colour, earthy aroma.", tag:"bestseller", status:"live", stock:200 },
    { id:2,  name:"Kashmiri Red Chilli",  emoji:"🌶️", price:180, desc:"Vibrant red colour with mild heat. Perfect for curries and tandoor.", tag:"hot", status:"live", stock:150 },
    { id:3,  name:"Cumin Seeds",          emoji:"🌿", price:95,  desc:"Aromatic whole jeera sourced from Rajasthan. Bold and earthy.", tag:"", status:"live", stock:300 },
    { id:4,  name:"Coriander Powder",     emoji:"🟤", price:80,  desc:"Finely ground dhania with a fresh citrusy undertone.", tag:"", status:"live", stock:250 },
    { id:5,  name:"Garam Masala",         emoji:"🟠", price:210, desc:"Our signature 12-spice blend. The heart of every great curry.", tag:"bestseller", status:"live", stock:180 },
    { id:6,  name:"Black Pepper Whole",   emoji:"⚫", price:320, desc:"Bold Malabar black pepper. Freshly processed for maximum pungency.", tag:"hot", status:"live", stock:120 },
    { id:7,  name:"Cardamom Green",       emoji:"💚", price:580, desc:"Premium Alleppey green cardamom. Rich, floral, and intensely aromatic.", tag:"premium", status:"live", stock:80 },
    { id:8,  name:"Cloves Whole",         emoji:"🟫", price:450, desc:"Hand-picked Zanzibar cloves with high essential oil content.", tag:"", status:"live", stock:100 },
    { id:9,  name:"Cinnamon Sticks",      emoji:"🪵", price:280, desc:"True Ceylon cinnamon. Sweet, delicate, and perfect for desserts.", tag:"new", status:"live", stock:130 },
    { id:10, name:"Mustard Seeds Black",  emoji:"🔵", price:75,  desc:"Small and pungent. Essential for tadka and South Indian cooking.", tag:"", status:"live", stock:400 },
    { id:11, name:"Fenugreek Seeds",      emoji:"🟡", price:65,  desc:"Bitter methi seeds that add depth to pickles and dals.", tag:"", status:"live", stock:350 },
    { id:12, name:"Asafoetida (Hing)",    emoji:"🟤", price:340, desc:"Premium compounded hing. Strong, umami punch in every pinch.", tag:"hot", status:"live", stock:90 },
    { id:13, name:"Bay Leaves Tej Patta", emoji:"🍃", price:60,  desc:"Dried Indian bay leaves with a subtle clove-cinnamon fragrance.", tag:"", status:"live", stock:500 },
    { id:14, name:"Dried Red Chilli",     emoji:"🌶️", price:140, desc:"Whole Byadagi chillis — colour without extreme heat.", tag:"selling", status:"live", stock:200 },
    { id:15, name:"Star Anise",           emoji:"⭐", price:260, desc:"Eight-pointed spice with a sweet anise-liquorice flavour.", tag:"", status:"live", stock:110 },
    { id:16, name:"Nutmeg Whole",         emoji:"🟤", price:380, desc:"Warm and spicy. Perfect grated fresh over desserts or biryani.", tag:"", status:"live", stock:75 },
    { id:17, name:"Mace (Javitri)",       emoji:"🟠", price:420, desc:"The outer lace of nutmeg. More delicate and floral in flavour.", tag:"premium", status:"live", stock:60 },
    { id:18, name:"Fennel Seeds Saunf",   emoji:"💚", price:85,  desc:"Sweet and cooling. Used in curries, chai, and as a mouth freshener.", tag:"", status:"live", stock:300 },
    { id:19, name:"Ajwain (Carom Seeds)", emoji:"⚪", price:70,  desc:"Pungent and medicinal. Essential in parathas and pakoras.", tag:"", status:"live", stock:280 },
    { id:20, name:"Kalonji Nigella",      emoji:"⚫", price:110, desc:"Black seed with a subtle onion-oregano taste. Packed with benefits.", tag:"new", status:"live", stock:160 },
    { id:21, name:"Amchur Mango Powder",  emoji:"🟡", price:130, desc:"Tangy dried mango powder. The secret to great chaat and curries.", tag:"", status:"live", stock:190 },
    { id:22, name:"Chaat Masala",         emoji:"🟠", price:150, desc:"Tangy, spicy, and zingy. Transforms any snack instantly.", tag:"selling", status:"live", stock:210 },
    { id:23, name:"Chicken Masala",       emoji:"🔴", price:195, desc:"Perfectly balanced blend for restaurant-style chicken curries.", tag:"bestseller", status:"live", stock:175 },
    { id:24, name:"Biryani Masala",       emoji:"🟤", price:220, desc:"Aromatic whole-spice blend for layered, fragrant biryanis.", tag:"hot", status:"live", stock:145 },
    { id:25, name:"Sambar Powder",        emoji:"🟤", price:165, desc:"Authentic South Indian sambar blend with roasted dal and spices.", tag:"", status:"live", stock:130 },
    { id:26, name:"Rasam Powder",         emoji:"🟠", price:145, desc:"Thin, peppery South Indian soup spice — bold and comforting.", tag:"", status:"live", stock:120 },
    { id:27, name:"Pav Bhaji Masala",     emoji:"🔴", price:175, desc:"Mumbai's favourite street food spice. Rich, buttery, and bold.", tag:"selling", status:"live", stock:200 },
    { id:28, name:"Pickle Masala",        emoji:"🟡", price:130, desc:"Classic achaar spice blend with mustard, fennel, and nigella.", tag:"", status:"live", stock:100 },
    { id:29, name:"Paneer Masala",        emoji:"🟠", price:185, desc:"Rich and creamy base for paneer dishes. Restaurant style at home.", tag:"new", status:"live", stock:155 },
    { id:30, name:"Fish Curry Masala",    emoji:"🐟", price:210, desc:"Coastal-style blend with kokum and coconut. Perfect for sea fish.", tag:"", status:"live", stock:90 },
    { id:31, name:"Meat Masala",          emoji:"🟤", price:200, desc:"Deep, complex blend for slow-cooked mutton and beef curries.", tag:"", status:"live", stock:110 },
    { id:32, name:"Tandoori Masala",      emoji:"🔴", price:190, desc:"The authentic tikka colour and flavour. Smokeless, but bold.", tag:"hot", status:"live", stock:140 },
    { id:33, name:"Tea Masala Chai",      emoji:"☕", price:160, desc:"Ginger, cardamom, pepper, clove — perfect for masala chai.", tag:"bestseller", status:"live", stock:220 },
    { id:34, name:"Kesar Saffron",        emoji:"🟠", price:980, desc:"Pure A-grade Kashmiri saffron. 1g pack — a little goes a long way.", tag:"premium", status:"live", stock:40 },
    { id:35, name:"Pepper Powder",        emoji:"⚫", price:290, desc:"Freshly ground Malabar pepper. Coarser grind for a bold bite.", tag:"", status:"live", stock:170 },
    { id:36, name:"Cumin Powder",         emoji:"🟤", price:90,  desc:"Roasted and stone-ground. Rich, smoky jeera flavour.", tag:"", status:"live", stock:240 },
    { id:37, name:"Dry Ginger Powder",    emoji:"🟡", price:155, desc:"Sunth — warming and medicinal. Great in chai and winter dishes.", tag:"", status:"live", stock:180 },
    { id:38, name:"Kitchen King Masala",  emoji:"👑", price:230, desc:"The all-in-one masala for any vegetable or dal dish. A classic.", tag:"bestseller", status:"live", stock:190 },
    { id:39, name:"Sabzi Masala",         emoji:"🥬", price:170, desc:"Everyday vegetable spice blend. Balanced, fragrant, and quick.", tag:"", status:"live", stock:210 },
    { id:40, name:"Special House Masala", emoji:"🏠", price:260, desc:"Kishor's secret recipe. Passed down through three generations.", tag:"hot", status:"live", stock:85 }
  ],

  // ---- BLOG POSTS ----
  posts: [
    {
      id:1, status:"published",
      title:"Why turmeric is the king of your spice cabinet",
      category:"Health & Wellness",
      emoji:"🌿",
      excerpt:"Turmeric isn't just a colour — it's centuries of Ayurvedic wisdom in a jar. Here's why it belongs in every meal.",
      content:"Turmeric has been used in Indian cooking and medicine for over 4,000 years. The active compound, curcumin, is responsible for its signature golden colour and its powerful anti-inflammatory properties...",
      author:"Kishor Bhai",
      date:"Mar 28, 2025"
    },
    {
      id:2, status:"published",
      title:"The secret to a perfect biryani every single time",
      category:"Recipes",
      emoji:"🍚",
      excerpt:"It's not just about the rice. The magic of biryani lives in the spice layering — and we're going to show you exactly how.",
      content:"A great biryani is built in layers — not just rice and meat, but layers of flavour. Start by blooming whole spices in hot ghee...",
      author:"Chef Ramesh",
      date:"Apr 1, 2025"
    },
    {
      id:3, status:"published",
      title:"5 spices that will change your morning chai",
      category:"Tips & Tricks",
      emoji:"☕",
      excerpt:"Most chai is just ginger and cardamom. We'll show you how to add three more spices that take it to another level.",
      content:"The perfect masala chai is a blend of at least 5 spices. While ginger and cardamom are the foundation, adding star anise, black pepper, and a pinch of nutmeg transforms it completely...",
      author:"Priya Kitchen",
      date:"Apr 3, 2025"
    },
    {
      id:4, status:"draft",
      title:"How we source our Kashmiri saffron",
      category:"Behind the Scenes",
      emoji:"🌸",
      excerpt:"A trip to the saffron fields of Pampore — where our A-grade kesar comes from.",
      content:"Every October, the saffron fields of Pampore in Kashmir turn a breathtaking shade of purple...",
      author:"Kishor Bhai",
      date:"Apr 5, 2025"
    }
  ],

  // ---- ORDERS ----
  orders: [
    { id:"KS-1042", customer:"Ramesh Kumar",    phone:"9876543210", items:"Garam Masala x2, Turmeric x1", total:450, status:"new",      date:"Apr 5, 2025", address:"Mumbai, MH" },
    { id:"KS-1041", customer:"Priya Sharma",    phone:"9823456789", items:"Biryani Masala x1, Kesar x1",  total:1200, status:"shipped",  date:"Apr 4, 2025", address:"Delhi, DL" },
    { id:"KS-1040", customer:"Suresh Patel",    phone:"9712345678", items:"Kitchen King x3",               total:690,  status:"delivered",date:"Apr 3, 2025", address:"Ahmedabad, GJ" },
    { id:"KS-1039", customer:"Anjali Nair",     phone:"9645678901", items:"Cardamom x1, Cloves x2",       total:1030, status:"new",      date:"Apr 3, 2025", address:"Kochi, KL" },
    { id:"KS-1038", customer:"Mohammed Raza",   phone:"9534567890", items:"Chicken Masala x2",             total:390,  status:"shipped",  date:"Apr 2, 2025", address:"Hyderabad, TS" },
    { id:"KS-1037", customer:"Deepa Menon",     phone:"9423456789", items:"Special House Masala x2",      total:520,  status:"delivered",date:"Apr 1, 2025", address:"Bangalore, KA" }
  ],

  // ---- VISITORS / ANALYTICS ----
  analytics: {
    todayVisits: 348,
    weekVisits: 2140,
    monthVisits: 8920,
    topPages: ["Home","Shop","Biryani Blog","About"],
    topProducts: ["Garam Masala","Turmeric","Special House Masala"],
    recentSignups: 12,
    conversionRate: 4.2
  }
};
