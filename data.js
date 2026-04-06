// ============================================================
// KISHOR SPICES — DATA STORE
// This is the single source of truth for the entire website.
// Admin panel reads and writes to this object.
// In production this would be a database — for GitHub Pages,
// edit this file to update content across the whole site.
// ============================================================

var KS = {

  // ---- BUSINESS INFO (edit these) ----
  business: {
    name:       "Kishor Spices",
    tagline_en: "Pure. Bold. From the Heart of India.",
    tagline_hi: "शुद्ध। असली। दिल से।",
    address:    "Ghorawal, Sonbhadra, Uttar Pradesh",
    phone:      "+91 91200 07475",
    whatsapp:   "919120007475",
    email:      "kishormasalaudyog@gmail.com",
    instagram:  "#",
    facebook:   "#",
    youtube:    "#",
    founded:    "1998",
    free_delivery_above: 499
  },

  // ---- PRODUCTS ----
  // image: put the filename here after uploading (e.g. "turmeric.jpg")
  // If no image, leave "" and a styled placeholder shows instead
  products: [
    {
      id: 1,
      name: "Haldi Powder",
      name_hi: "हल्दी पाउडर",
      desc: "Sun-dried Lakadong turmeric, stone-ground fresh. Deep gold colour, rich earthy aroma.",
      price: 120,
      compare_price: 0,
      variants: ["100g","200g","500g"],
      tag: "bestseller",
      status: "live",
      stock: 200,
      image: "",
      emoji: "🟡",
      category: "Single Spices"
    },
    {
      id: 2,
      name: "Lal Mirch Powder",
      name_hi: "लाल मिर्च पाउडर",
      desc: "Byadagi chilli — vibrant colour, measured heat. The backbone of North Indian cooking.",
      price: 150,
      compare_price: 180,
      variants: ["100g","200g","500g"],
      tag: "hot",
      status: "live",
      stock: 160,
      image: "",
      emoji: "🌶️",
      category: "Single Spices"
    },
    {
      id: 3,
      name: "Garam Masala",
      name_hi: "गरम मसाला",
      desc: "Our signature 12-spice blend, slow-roasted and stone-ground. The heart of every great curry.",
      price: 210,
      compare_price: 250,
      variants: ["100g","200g","500g"],
      tag: "bestseller",
      status: "live",
      stock: 180,
      image: "",
      emoji: "🟠",
      category: "Masala Blends"
    },
    {
      id: 4,
      name: "Dhaniya Powder",
      name_hi: "धनिया पाउडर",
      desc: "Freshly roasted coriander seeds, coarsely ground. Nutty, citrusy, essential.",
      price: 90,
      compare_price: 0,
      variants: ["100g","200g","500g"],
      tag: "",
      status: "live",
      stock: 250,
      image: "",
      emoji: "🟤",
      category: "Single Spices"
    },
    {
      id: 5,
      name: "Biryani Masala",
      name_hi: "बिरयानी मसाला",
      desc: "Aromatic whole-spice blend for fragrant, layered biryanis. Restaurant taste at home.",
      price: 220,
      compare_price: 260,
      variants: ["100g","200g"],
      tag: "selling",
      status: "live",
      stock: 140,
      image: "",
      emoji: "🍚",
      category: "Masala Blends"
    },
    {
      id: 6,
      name: "Special House Masala",
      name_hi: "स्पेशल घर मसाला",
      desc: "Kishor Bhai's personal recipe — three generations of balance in every spoonful.",
      price: 260,
      compare_price: 300,
      variants: ["100g","200g","500g"],
      tag: "premium",
      status: "live",
      stock: 85,
      image: "",
      emoji: "🏠",
      category: "Masala Blends"
    },
    {
      id: 7,
      name: "Jeera Sabut",
      name_hi: "जीरा साबुत",
      desc: "Whole cumin from Rajasthan. Bold, earthy aroma that perfumes the whole kitchen.",
      price: 95,
      compare_price: 0,
      variants: ["100g","250g","500g"],
      tag: "",
      status: "live",
      stock: 300,
      image: "",
      emoji: "🌿",
      category: "Whole Spices"
    },
    {
      id: 8,
      name: "Kali Mirch Sabut",
      name_hi: "काली मिर्च साबुत",
      desc: "Premium Malabar black pepper. Maximum pungency, freshly processed.",
      price: 320,
      compare_price: 380,
      variants: ["50g","100g","250g"],
      tag: "premium",
      status: "live",
      stock: 120,
      image: "",
      emoji: "⚫",
      category: "Whole Spices"
    },
    {
      id: 9,
      name: "Elaichi Hari",
      name_hi: "इलायची हरी",
      desc: "Alleppey green cardamom. Rich, floral, intensely aromatic. Our most requested item.",
      price: 580,
      compare_price: 650,
      variants: ["25g","50g","100g"],
      tag: "premium",
      status: "live",
      stock: 80,
      image: "",
      emoji: "💚",
      category: "Whole Spices"
    },
    {
      id: 10,
      name: "Chai Masala",
      name_hi: "चाय मसाला",
      desc: "Ginger, cardamom, pepper, clove — the perfect masala chai blend. Morning sorted.",
      price: 160,
      compare_price: 0,
      variants: ["50g","100g","200g"],
      tag: "selling",
      status: "live",
      stock: 220,
      image: "",
      emoji: "☕",
      category: "Masala Blends"
    },
    {
      id: 11, name: "Chaat Masala", name_hi: "चाट मसाला", desc: "Tangy, spicy, zingy. Transforms any snack in seconds.", price: 150, compare_price: 0, variants: ["50g","100g"], tag: "selling", status: "live", stock: 190, image: "", emoji: "🍋", category: "Masala Blends" },
    { id: 12, name: "Hing Compounded", name_hi: "हींग", desc: "Strong, umami asafoetida — a pinch changes everything.", price: 340, compare_price: 0, variants: ["25g","50g","100g"], tag: "", status: "live", stock: 90, image: "", emoji: "🟤", category: "Single Spices" },
    { id: 13, name: "Sarson Rai", name_hi: "सरसों / राई", desc: "Small black mustard seeds. Essential for tadka in dals and South Indian dishes.", price: 75, compare_price: 0, variants: ["200g","500g"], tag: "", status: "live", stock: 400, image: "", emoji: "🔵", category: "Whole Spices" },
    { id: 14, name: "Methi Dana", name_hi: "मेथी दाना", desc: "Bitter fenugreek seeds that add depth to pickles, dals, and curries.", price: 65, compare_price: 0, variants: ["200g","500g"], tag: "", status: "live", stock: 350, image: "", emoji: "🟡", category: "Whole Spices" },
    { id: 15, name: "Tej Patta", name_hi: "तेज पत्ता", desc: "Dried Indian bay leaves. Subtle clove-cinnamon fragrance for biryanis and dals.", price: 60, compare_price: 0, variants: ["25g","50g"], tag: "", status: "live", stock: 500, image: "", emoji: "🍃", category: "Whole Spices" },
    { id: 16, name: "Laung Sabut", name_hi: "लौंग साबुत", desc: "Zanzibar cloves with high essential oil content. Warm and intensely aromatic.", price: 450, compare_price: 520, variants: ["25g","50g","100g"], tag: "premium", status: "live", stock: 100, image: "", emoji: "🟫", category: "Whole Spices" },
    { id: 17, name: "Dalchini", name_hi: "दालचीनी", desc: "Ceylon cinnamon sticks. Sweet, delicate — perfect for desserts and biryanis.", price: 280, compare_price: 0, variants: ["50g","100g","200g"], tag: "", status: "live", stock: 130, image: "", emoji: "🪵", category: "Whole Spices" },
    { id: 18, name: "Saunf Sabut", name_hi: "सौंफ साबुत", desc: "Sweet and cooling fennel seeds. Used in curries, chai, and as a mouth freshener.", price: 85, compare_price: 0, variants: ["200g","500g"], tag: "", status: "live", stock: 300, image: "", emoji: "💚", category: "Whole Spices" },
    { id: 19, name: "Ajwain", name_hi: "अजवाइन", desc: "Pungent carom seeds. Essential in parathas, pakoras, and digestive remedies.", price: 70, compare_price: 0, variants: ["100g","250g"], tag: "", status: "live", stock: 280, image: "", emoji: "⚪", category: "Whole Spices" },
    { id: 20, name: "Kalonji", name_hi: "कलौंजी", desc: "Nigella seeds with a subtle onion-oregano flavour. Loaded with health benefits.", price: 110, compare_price: 0, variants: ["100g","250g"], tag: "new", status: "live", stock: 160, image: "", emoji: "⚫", category: "Whole Spices" },
    { id: 21, name: "Amchur Powder", name_hi: "आमचूर पाउडर", desc: "Tangy dried mango powder — the secret to great chaat, curries, and marinades.", price: 130, compare_price: 0, variants: ["100g","200g"], tag: "", status: "live", stock: 190, image: "", emoji: "🥭", category: "Single Spices" },
    { id: 22, name: "Chicken Masala", name_hi: "चिकन मसाला", desc: "Restaurant-style chicken curry blend. Bold, deep, perfectly balanced.", price: 195, compare_price: 230, variants: ["100g","200g","500g"], tag: "bestseller", status: "live", stock: 175, image: "", emoji: "🍗", category: "Masala Blends" },
    { id: 23, name: "Paneer Masala", name_hi: "पनीर मसाला", desc: "Rich and creamy base for paneer dishes. Restaurant taste, home kitchen ease.", price: 185, compare_price: 0, variants: ["100g","200g"], tag: "new", status: "live", stock: 155, image: "", emoji: "🟠", category: "Masala Blends" },
    { id: 24, name: "Sambar Powder", name_hi: "सांभर पाउडर", desc: "Authentic South Indian sambar blend with roasted dal, tamarind, and spices.", price: 165, compare_price: 0, variants: ["100g","200g","500g"], tag: "", status: "live", stock: 130, image: "", emoji: "🟤", category: "Masala Blends" },
    { id: 25, name: "Pav Bhaji Masala", name_hi: "पाव भाजी मसाला", desc: "Mumbai's favourite street food spice. Buttery, bold, instantly recognisable.", price: 175, compare_price: 0, variants: ["100g","200g"], tag: "selling", status: "live", stock: 200, image: "", emoji: "🔴", category: "Masala Blends" },
    { id: 26, name: "Tandoori Masala", name_hi: "तंदूरी मसाला", desc: "Authentic tikka colour and smoky flavour. Perfect for grilling and marinades.", price: 190, compare_price: 220, variants: ["100g","200g","500g"], tag: "hot", status: "live", stock: 140, image: "", emoji: "🔴", category: "Masala Blends" },
    { id: 27, name: "Meat Masala", name_hi: "मीट मसाला", desc: "Deep, complex blend for slow-cooked mutton and lamb curries.", price: 200, compare_price: 0, variants: ["100g","200g","500g"], tag: "", status: "live", stock: 110, image: "", emoji: "🟤", category: "Masala Blends" },
    { id: 28, name: "Fish Curry Masala", name_hi: "मछली मसाला", desc: "Coastal-style blend with kokum undertones. Perfect for sea fish and river fish.", price: 210, compare_price: 0, variants: ["100g","200g"], tag: "", status: "live", stock: 90, image: "", emoji: "🐟", category: "Masala Blends" },
    { id: 29, name: "Kitchen King Masala", name_hi: "किचन किंग मसाला", desc: "The all-in-one masala for any vegetable, dal, or paneer dish. A true kitchen staple.", price: 230, compare_price: 270, variants: ["100g","200g","500g"], tag: "bestseller", status: "live", stock: 190, image: "", emoji: "👑", category: "Masala Blends" },
    { id: 30, name: "Rasam Powder", name_hi: "रसम पाउडर", desc: "Thin, peppery South Indian soup spice. Bold, warming, and comforting.", price: 145, compare_price: 0, variants: ["100g","200g"], tag: "", status: "live", stock: 120, image: "", emoji: "🟠", category: "Masala Blends" },
    { id: 31, name: "Pickle Masala", name_hi: "अचार मसाला", desc: "Classic achaar blend with mustard, fennel, and nigella. Ready to pickle.", price: 130, compare_price: 0, variants: ["100g","200g"], tag: "", status: "live", stock: 100, image: "", emoji: "🫙", category: "Masala Blends" },
    { id: 32, name: "Sabzi Masala", name_hi: "सब्ज़ी मसाला", desc: "Everyday vegetable spice blend. Fragrant, balanced, quick to use.", price: 170, compare_price: 0, variants: ["100g","200g","500g"], tag: "", status: "live", stock: 210, image: "", emoji: "🥬", category: "Masala Blends" },
    { id: 33, name: "Kesar Saffron", name_hi: "केसर", desc: "Pure A-grade Kashmiri saffron. A little goes a long way. Precious and real.", price: 980, compare_price: 1200, variants: ["1g","2g","5g"], tag: "premium", status: "live", stock: 40, image: "", emoji: "🟠", category: "Premium Range" },
    { id: 34, name: "Jaiphal Nutmeg", name_hi: "जायफल", desc: "Whole nutmeg — warm, spicy, perfect grated fresh over desserts or biryani.", price: 380, compare_price: 0, variants: ["25g","50g"], tag: "", status: "live", stock: 75, image: "", emoji: "🟤", category: "Premium Range" },
    { id: 35, name: "Javitri Mace", name_hi: "जावित्री", desc: "The delicate outer lace of nutmeg. More floral and refined in flavour.", price: 420, compare_price: 480, variants: ["25g","50g"], tag: "premium", status: "live", stock: 60, image: "", emoji: "🟠", category: "Premium Range" },
    { id: 36, name: "Chakri Phool", name_hi: "चक्री फूल", desc: "Star anise with a sweet anise-liquorice flavour. Beautiful in biryanis and chai.", price: 260, compare_price: 0, variants: ["50g","100g"], tag: "", status: "live", stock: 110, image: "", emoji: "⭐", category: "Whole Spices" },
    { id: 37, name: "Saunth Dry Ginger", name_hi: "सोंठ", desc: "Dry ginger powder — warming, medicinal, great in chai and winter curries.", price: 155, compare_price: 0, variants: ["100g","200g"], tag: "", status: "live", stock: 180, image: "", emoji: "🟡", category: "Single Spices" },
    { id: 38, name: "Kali Mirch Powder", name_hi: "काली मिर्च पाउडर", desc: "Freshly ground Malabar pepper. Bold bite, maximum flavour.", price: 290, compare_price: 340, variants: ["50g","100g","200g"], tag: "", status: "live", stock: 170, image: "", emoji: "⚫", category: "Single Spices" },
    { id: 39, name: "Jeera Powder", name_hi: "जीरा पाउडर", desc: "Roasted and stone-ground cumin. Rich, smoky, deeply flavourful.", price: 90, compare_price: 0, variants: ["100g","200g","500g"], tag: "", status: "live", stock: 240, image: "", emoji: "🟤", category: "Single Spices" },
    { id: 40, name: "Dhania Jeera Mix", name_hi: "धनिया जीरा मिक्स", desc: "The classic 2:1 coriander-cumin blend. The base of half of Indian cooking.", price: 100, compare_price: 0, variants: ["100g","200g","500g"], tag: "", status: "live", stock: 300, image: "", emoji: "🌿", category: "Masala Blends" }
  ],

  // ---- BLOG POSTS ----
  posts: [
    {
      id: 1,
      status: "published",
      title: "Why pure turmeric is the most important spice in your kitchen",
      title_hi: "हल्दी क्यों है आपकी रसोई की सबसे ज़रूरी मसाला",
      category: "Health & Wellness",
      emoji: "🌿",
      cover_image: "",
      excerpt: "Turmeric isn't just a colour — it's centuries of Ayurvedic wisdom. But most turmeric you buy is adulterated. Here's how to tell the difference.",
      content: "Write your full article here...",
      author: "Kishor Bhai",
      read_time: "4 min read",
      date: "Apr 1, 2025"
    },
    {
      id: 2,
      status: "published",
      title: "The secret to a perfect biryani is the spice layering",
      title_hi: "परफेक्ट बिरयानी का राज़ है मसाले की परत",
      category: "Recipes",
      emoji: "🍚",
      cover_image: "",
      excerpt: "It's not just about the rice or the meat. The magic of biryani lives entirely in how you layer your spices. We show you exactly how.",
      content: "Write your full article here...",
      author: "Chef Priya",
      read_time: "6 min read",
      date: "Apr 3, 2025"
    },
    {
      id: 3,
      status: "published",
      title: "5 spices that will completely change your morning chai",
      title_hi: "5 मसाले जो आपकी सुबह की चाय बदल देंगे",
      category: "Tips & Tricks",
      emoji: "☕",
      cover_image: "",
      excerpt: "Most chai is just ginger and cardamom. Add these three more and you'll never go back.",
      content: "Write your full article here...",
      author: "Kishor Bhai",
      read_time: "3 min read",
      date: "Apr 5, 2025"
    },
    {
      id: 4,
      status: "draft",
      title: "Our journey — from Ghorawal market to 50,000 kitchens",
      title_hi: "हमारा सफर — घोरावल बाज़ार से 50,000 रसोइयों तक",
      category: "Our Story",
      emoji: "🌾",
      cover_image: "",
      excerpt: "How a small family stall in Sonbhadra became a name trusted across India.",
      content: "Write your full article here...",
      author: "Kishor Bhai",
      read_time: "8 min read",
      date: "Apr 6, 2025"
    }
  ],

  // ---- ORDERS (live orders come here) ----
  orders: [],

  // ---- COUPONS ----
  coupons: [
    { code: "KISHOR10", type: "percent", value: 10, active: true, used: 0 },
    { code: "FIRST100", type: "flat", value: 100, active: true, used: 3 }
  ],

  // ---- MEDIA LIBRARY ----
  media: [],

  // ---- NOTIFICATION SETTINGS ----
  notifications: {
    whatsapp_orders: true,
    whatsapp_messages: true,
    whatsapp_contact: true,
    whatsapp_lowstock: true,
    telegram_orders: false,
    telegram_channel: ""
  }
};
