export const restaurant = {
  name: "L'Épicurien",
  tagline: "Where French Tradition Meets Kigali's Soul",
  description: "A sanctuary of refined French gastronomy nestled in the verdant heart of Kimihurura. Every dish is a testament to the art of living well — crafted with passion, served with grace.",
  phone: "0789 175 868",
  address: "22 KG 674 St, Kigali, Rwanda",
  mapEmbed: "https://maps.google.com/maps?q=-1.953958,30.0810721&z=15&output=embed",
  rating: "4.3",
  reviewCount: "455",
  priceRange: "$$$",
  hours: [
    { day: "Monday", open: "11:30", close: "22:00" },
    { day: "Tuesday", open: "11:30", close: "22:00" },
    { day: "Wednesday", open: "11:30", close: "22:00" },
    { day: "Thursday", open: "11:30", close: "22:00" },
    { day: "Friday", open: "11:30", close: "22:00" },
    { day: "Saturday", open: "17:00", close: "22:00" },
    { day: "Sunday", open: "11:30", close: "22:00" },
  ],
  amenities: ["Free Wi-Fi", "Outdoor Seating", "Garden", "Private Dining", "Wheelchair Accessible", "Parking"],
  atmosphere: ["Fine Dining", "Romantic", "Cozy Garden", "Upscale"],
  payments: ["Cash", "Visa", "Mastercard", "American Express"],
  serviceOptions: ["Dine-in", "Takeaway", "Reservations"],
};

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  image?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export const menuSections: MenuSection[] = [
  {
    title: "Les Entrées",
    items: [
      { name: "Escargots de Bourgogne", price: "RWF 4,000", description: "Classic Burgundy snails, garlic-parsley butter, crusty bread", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80" },
      { name: "Carpaccio de Crevettes", price: "RWF 4,500", description: "Delicate shrimp carpaccio, citrus vinaigrette, micro herbs", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80" },
      { name: "Gravlax de Truites", price: "RWF 4,500", description: "House-cured trout gravlax, dill crème fraîche, capers", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80" },
      { name: "Thon Mi-Cuit", price: "RWF 4,500", description: "Seared rare tuna, sesame crust, ponzu reduction", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
      { name: "Poulpe Grillé", price: "RWF 5,000", description: "Charred octopus tentacles, smoked paprika, olive tapenade", image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=600&q=80" },
      { name: "Velouté de Légumes", price: "RWF 3,500", description: "Silky seasonal vegetable velouté, truffle oil, croutons", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80" },
      { name: "Œufs Mimosa", price: "RWF 3,000", description: "Classic deviled eggs, smoked salmon, chive", image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80" },
    ],
  },
  {
    title: "Les Plats Principaux",
    items: [
      { name: "Filet de Bœuf", price: "RWF 14,500", description: "Prime beef fillet, pommes purée, seasonal vegetables, jus", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80" },
      { name: "Filet de Bœuf Rossini", price: "RWF 16,500", description: "Beef fillet crowned with seared foie gras, Périgord truffle sauce", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80" },
      { name: "Noix d'Entrecôte", price: "RWF 13,500", description: "Dry-aged ribeye, béarnaise sauce, hand-cut frites", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
      { name: "L'Agneau en Deux Préparations", price: "RWF 14,000", description: "Rack and shoulder of lamb, rosemary jus, ratatouille", image: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29?w=600&q=80" },
      { name: "Veau aux Morilles", price: "RWF 13,500", description: "Tender veal, wild morel mushroom cream, asparagus", image: "https://images.unsplash.com/photo-1432139509613-5c4255a1d1f6?w=600&q=80" },
      { name: "Gambas Grillées", price: "RWF 12,000", description: "Tiger prawns, garlic butter, saffron risotto", image: "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=600&q=80" },
      { name: "Dorade Royale", price: "RWF 11,000", description: "Pan-seared sea bream, saffron beurre blanc, fennel confit", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&q=80" },
    ],
  },
  {
    title: "Les Desserts",
    items: [
      { name: "Crème Brûlée au Citron", price: "RWF 4,000", description: "Lemon-infused custard, caramelized sugar crust, shortbread", image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80" },
      { name: "Mousse au Chocolat Noir", price: "RWF 3,500", description: "Valrhona dark chocolate mousse, candied orange zest", image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&q=80" },
      { name: "Mousse Chocolat-Caramel", price: "RWF 4,000", description: "Layered chocolate and salted caramel mousse, praline crunch", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80" },
      { name: "Café Gourmand", price: "RWF 3,500", description: "Espresso accompanied by a trio of petits fours", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80" },
    ],
  },
  {
    title: "Déjeuner d'Affaires",
    items: [
      { name: "Le Menu du Jour", price: "RWF 30,000", description: "Three-course chef's selection — entrée, plat, dessert — with coffee", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" },
    ],
  },
];

export const heroImages = {
  home: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
  menu: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80",
  about: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
  reservations: "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=1920&q=80",
  contact: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&q=80",
};

export const galleryImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600&q=80",
  "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80",
  "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
];
