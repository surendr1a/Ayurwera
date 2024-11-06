// constants/index.jsx

export const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      description:
        "High-quality wireless Bluetooth headphones with noise-canceling feature, deep bass, and up to 20 hours of battery life. Perfect for travel, work, and daily use.",
      price: 59.99,
      image: "/Images/products/1.jpeg",
      category: "Electronics",
      rating: 4.5,
      stock: 25,
      brand: "SoundBeat",
      features: [
        "Bluetooth 5.0",
        "Noise Cancelling",
        "20-hour Battery Life",
        "Comfortable Fit",
      ],
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      description:
        "Track your fitness levels with a sleek and lightweight smartwatch. Features heart rate monitoring, sleep tracking, and over 15 workout modes.",
      price: 89.99,
      image: "/Images/products/2.jpeg",
      category: "Wearables",
      rating: 4.3,
      stock: 15,
      brand: "FitPro",
      features: [
        "Heart Rate Monitor",
        "Sleep Tracking",
        "Water Resistant",
        "Customizable Watch Faces",
      ],
    },
    {
      id: 3,
      name: "4K Action Camera",
      description:
        "Capture your adventures with this 4K action camera. Waterproof, durable, and perfect for outdoor sports, with high-definition video recording and image stabilization.",
      price: 120.0,
      image: "/Images/products/3.jpeg",
      category: "Cameras",
      rating: 4.7,
      stock: 10,
      brand: "GoExtreme",
      features: [
        "4K Video Recording",
        "Image Stabilization",
        "Waterproof up to 30m",
        "Wide-Angle Lens",
      ],
    },
    {
      id: 4,
      name: "Ergonomic Office Chair",
      description:
        "An ergonomic chair designed for ultimate comfort and posture support. Ideal for long hours of work or gaming, with adjustable height and lumbar support.",
      price: 150.0,
      image: "/Images/products/4.jpeg",
      category: "Furniture",
      rating: 4.6,
      stock: 5,
      brand: "ComfortSeat",
      features: [
        "Adjustable Height",
        "Lumbar Support",
        "Breathable Mesh Back",
        "High-Density Foam Cushion",
      ],
    },
    {
      id: 5,
      name: "Portable Coffee Maker",
      description:
        "Enjoy fresh coffee anywhere with this portable coffee maker. Simple to use, lightweight, and compatible with ground coffee and coffee pods.",
      price: 34.99,
      image: "/Images/products/1.jpeg",
      category: "Home Appliances",
      rating: 4.4,
      stock: 30,
      brand: "BrewAnywhere",
      features: [
        "Lightweight Design",
        "Easy to Clean",
        "Compatible with Pods and Ground Coffee",
        "Eco-Friendly",
      ],
    },
    {
      id: 6,
      name: "Wireless Charging Pad",
      description:
        "Quickly charge your phone wirelessly with this sleek and compact charging pad. Compatible with most Qi-enabled devices and perfect for home or office use.",
      price: 19.99,
      image: "/Images/products/3.jpeg",
      category: "Accessories",
      rating: 4.2,
      stock: 40,
      brand: "PowerUp",
      features: [
        "Fast Charging",
        "Overheating Protection",
        "Compact Design",
        "LED Indicator",
      ],
    },
    // Add more products as needed
  ];


// reviews section data

export const reviews = [
  {
    id: 1,
    name: "Aarav Mehta",
    rating: 5,
    description: "An absolutely fantastic experience! This product has exceeded my expectations in every way. The quality is remarkable, and the features are genuinely helpful. Highly recommend to anyone considering a purchase.",
    longDescription: "I was skeptical at first, but after using it for a few weeks, I can confidently say it’s worth every penny. The attention to detail, from packaging to performance, is top-notch. Customer service was also very responsive, and the delivery was on time. I’ve been using it daily, and it has significantly improved my productivity. It's one of those products that makes you wonder how you managed without it before.",
    date: "October 12, 2024",
    photo: "/Images/profilelogo/1.jpg",
  },
  {
    id: 2,
    name: "Neha Singh",
    rating: 4,
    description: "Great product overall. Minor improvements could make it perfect, but I’m pleased with my purchase and would definitely recommend it to friends.",
    longDescription: "The product works exactly as described. I found the setup easy, and it’s been running smoothly since day one. There was a minor issue with the installation, but it was easily resolved by the support team. The quality is solid, and the design is stylish, fitting perfectly with my decor. I hope they release some additional features in future updates, but even now, it’s very functional.",
    date: "September 30, 2024",
    photo: "/Images/profilelogo/2.jpg",
  },
  {
    id: 3,
    name: "Rohan Verma",
    rating: 5,
    description: "Exceptional value for money! I am extremely satisfied and will definitely be a returning customer for future products.",
    longDescription: "From the very first use, it was clear that this product is built with quality in mind. The features included at this price point are unbeatable, and I feel like I got more than my money’s worth. It has been reliable, and I appreciate the little details that show thoughtfulness in design. It’s not often that I write reviews, but this one deserves recognition.",
    date: "August 25, 2024",
    photo: "/Images/profilelogo/3.webp",
  },
  {
    id: 4,
    name: "Meera Kapoor",
    rating: 3,
    description: "Good product, but could use some improvements. It meets basic expectations, but a few areas need work for it to reach its full potential.",
    longDescription: "After using it for a few weeks, I can see where improvements can be made. The product functions as advertised, but I had hoped for a smoother experience. It’s solid in quality, but a couple of features are not as user-friendly as they could be. Customer support was helpful, but I would like to see future updates that address these small issues.",
    date: "July 15, 2024",
    photo: "/Images/profilelogo/4.jpg",
  },
  {
    id: 5,
    name: "Amit Joshi",
    rating: 4,
    description: "Solid performance and quality, but a bit pricey. I’m happy with the purchase overall and would recommend it to those who don’t mind spending a bit extra for quality.",
    longDescription: "The product has been excellent in terms of functionality and reliability. It’s clear that a lot of thought went into the design, and it’s been a valuable addition to my daily routine. The only downside for me is the price; it’s a bit higher than similar options. However, I understand that quality comes at a cost, and I’m ultimately satisfied with my choice.",
    date: "June 10, 2024",
    photo: "/Images/profilelogo/5.jpg",
  },
];
