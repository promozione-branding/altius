export const categories = [
  {
    id: 1,
    name: "Concealed Lights",
    slug: "concealed-lights",
    image: "/category/ledconcel1.webp",
    description:
      "Elegant ceiling lights designed to bring a refined glow and contemporary character to your interiors.",
    products: [
      {
        id: 101,
        name: "Concealed Light",
        slug: "concealed-light",

        category: "Concealed Lights",
        categorySlug: "concealed-lights",

        price: 4999,
        oldPrice: 5999,
        currency: "₹",

        badge: "Featured",

        shortDescription:
          "A contemporary concealed LED light with a clean architectural profile and soft, consistent illumination.",

        description:
          "The Luna Modern Concealed Light combines contemporary aesthetics with efficient LED technology. Designed to sit seamlessly within modern ceilings, it delivers bright, uniform illumination while maintaining a minimal visual presence.",

        // Main product images

        image:"/light3.jpeg",
        images: [
          "/light3.jpeg",
          "/products/luna-ceiling-light-2.webp",
          "/products/luna-ceiling-light-3.webp",
        ],

        // Wattage options
        wattages: [
          {
            value: "12W",
            image: "/Round1.jpeg",
            price: 4999,
          },
          {
            value: "20W",
            image: "/light3.jpeg",
            price: 5499,
          },
          {
            value: "30W",
            image: "/Round1.jpeg",
            price: 5999,
          },
        ],

        // Product specifications
        specifications: {
          wattage: "12W / 20W / 30W",
          Warranty: "2 Years",
          Material: "Premium Aluminium",
          Voltage: "220-240V",
          "Light Source": "Integrated LED",
          "Beam Angle": "24° / 36°",
          "Ip Rating": "IP20",
        },

        // Features
        features: [
          {
            title: "Energy Efficient",
            text: "Advanced LED technology provides excellent brightness while consuming less energy.",
          },
          {
            title: "Long Lifespan",
            text: "High-quality LED components provide reliable performance for 50,000+ operating hours.",
          },
          {
            title: "Premium Build",
            text: "Durable aluminium construction with effective heat dissipation for dependable performance.",
          },
          {
            title: "Multiple Options",
            text: "Available in different wattages and color temperatures to suit different environments.",
          },
        ],

        // Applications

        // Why choose this product/company
        whyChoose: [
          {
            title: "Reliable Quality:",
            text: "Designed for consistent and dependable lighting performance.",
          },
          {
            title: "Energy Savings:",
            text: "Efficient LED technology helps reduce energy consumption and operating costs.",
          },
          {
            title: "Modern Design:",
            text: "A minimal architectural design that complements contemporary interiors.",
          },
          {
            title: "Long-Term Performance:",
            text: "Durable construction and quality components provide long-lasting value.",
          },
        ],

        // Image used in description section
        descriptionImage: "/products/luna-ceiling-light-detail.webp",

        // Additional product information
        sku: "ELS-CL-101",

        stock: true,

        stockText: "In Stock",

        brochure: "/brochure/product-brochure.pdf",

        // Shipping
        // shipping: {
        //   delivery:
        //     "Delivery within 3-7 working days across India.",
        //   international:
        //     "International delivery available on selected orders.",
        //   return:
        //     "Products can be returned within 7 days subject to our return policy.",
        // },

        // Reviews
        // reviews: {
        //   rating: 4.8,
        //   total: 24,

        //   items: [
        //     {
        //       id: 1,
        //       name: "Rahul Sharma",
        //       rating: 5,
        //       comment:
        //         "Excellent build quality and the light output is very good.",
        //       date: "12 Aug 2026",
        //     },
        //     {
        //       id: 2,
        //       name: "Amit Verma",
        //       rating: 5,
        //       comment:
        //         "Very clean design and perfect for our office interiors.",
        //       date: "05 Aug 2026",
        //     },
        //     {
        //       id: 3,
        //       name: "Neha Gupta",
        //       rating: 4,
        //       comment:
        //         "Good quality LED light with a premium finish.",
        //       date: "28 Jul 2026",
        //     },
        //   ],
        // },

        // Related products
        relatedProducts: [
          "aura-designer-concealed-light",
          "nova-cob-lens-light",
          "glowline-striker-light",
          "vertex-led-striker-light",
        ],
      },

      {
        id: 102,
        name: "Luna Modern Ceiling Light",
        slug: "luna-modern-ceiling-light",
        price: 4999,
        image: "/products/luna-ceiling-light.webp",
        shortDescription:
          "A contemporary ceiling light with a soft and elegant illumination.",
      },
      {
        id: 103,
        name: "Aura Designer Ceiling Light",
        slug: "aura-designer-ceiling-light",
        price: 6499,
        image: "/products/aura-ceiling-light.webp",
        shortDescription:
          "Minimal designer ceiling light perfect for modern living spaces.",
      },
    ],
  },

  {
    id: 2,
    name: "COB Lens Model",
    slug: "cob-lens-model",
    image: "/categories/pendant-lights.webp",
    description:
      "Statement pendant lights crafted to create a sophisticated focal point in any room.",
    products: [
      {
        id: 201,
        name: "Nova Glass Pendant",
        slug: "nova-glass-pendant",
        price: 3999,
        image: "/products/nova-pendant.webp",
        shortDescription:
          "A stylish glass pendant light with a premium contemporary finish.",
      },
      {
        id: 202,
        name: "Halo Hanging Pendant",
        slug: "halo-hanging-pendant",
        price: 5499,
        image: "/products/halo-pendant.webp",
        shortDescription:
          "Modern hanging pendant designed for elegant dining and living spaces.",
      },
    ],
  },

  {
    id: 3,
    name: "Striker",
    slug: "striker",
    image: "/categories/wall-lights.webp",
    description:
      "Decorative and functional wall lighting that adds warmth, depth, and style to your walls.",
    products: [
      {
        id: 301,
        name: "Glowline Wall Sconce",
        slug: "glowline-wall-sconce",
        price: 2499,
        image: "/products/glowline-wall-light.webp",
        shortDescription:
          "A sleek wall sconce offering a warm and ambient lighting experience.",
      },
      {
        id: 302,
        name: "Vertex LED Wall Light",
        slug: "vertex-led-wall-light",
        price: 2999,
        image: "/products/vertex-wall-light.webp",
        shortDescription:
          "Contemporary LED wall light with a clean architectural design.",
      },
    ],
  },
];
