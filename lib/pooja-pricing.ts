export type PriceRange = {
  india: string;
  global: string;
  note?: string;
};

export type PoojaService = {
  nameHi: string;
  nameEn: string;
  pricing: PriceRange;
};

export type PoojaTier = {
  titleHi: string;
  titleEn: string;
  services: PoojaService[];
};

export type PricingModel = {
  id: "per-booking" | "subscription";
  titleHi: string;
  titleEn: string;
  descriptionHi: string;
  descriptionEn: string;
  tiers: PoojaTier[];
};

export const poojaPricing: PricingModel[] = [
  {
    id: "per-booking",
    titleHi: "प्रति-बुकिंग पूजा",
    titleEn: "Per-Booking",
    descriptionHi:
      "यह वन-टाइम सर्विस है, जिसमें पूजा के तुरंत बाद प्रसाद कोरियर द्वारा घर भेजा जाता है।",
    descriptionEn:
      "A one-time service where prasad is couriered to your home immediately after the pooja.",
    tiers: [
      {
        titleHi: "ज्योतिषी और संकट निवारण पूजा",
        titleEn: "Premium Tier",
        services: [
          {
            nameHi: "महामृत्युंजय जाप",
            nameEn: "Maha Mrityunjaya Jaap",
            pricing: {
              india: "₹11,000 – ₹21,000",
              global: "$199 – $399",
              note: "मंत्रों की संख्या के आधार पर / Based on number of mantras",
            },
          },
          {
            nameHi: "रुद्राभिषेक पूजा",
            nameEn: "Rudrabhishek Puja",
            pricing: {
              india: "₹2,100 – ₹5,100",
              global: "$79 – $129",
            },
          },
          {
            nameHi: "कालसर्प / मांगलिक दोष शांति",
            nameEn: "Dosha Nivaran",
            pricing: {
              india: "₹4,500 – ₹8,500",
              global: "$119 – $199",
            },
          },
          {
            nameHi: "पितृ दोष शांति और पिंड दान",
            nameEn: "Pind Daan / Tarpan",
            pricing: {
              india: "₹3,100 – ₹7,100",
              global: "$99 – $179",
              note: "तीर्थ स्थल के अनुसार / Based on pilgrimage site",
            },
          },
        ],
      },
      {
        titleHi: "गृह और व्यापारिक शुरुआत",
        titleEn: "High-End Custom Tier",
        services: [
          {
            nameHi: "ऑनलाइन गृह प्रवेश पूजा",
            nameEn: "Virtual Griha Pravesh",
            pricing: {
              india: "₹5,100 – ₹11,000",
              global: "$149 – $249",
              note: "डिजिटल स्क्रीन पर लाइव गाइडेंस शामिल / Includes live guidance on digital screen",
            },
          },
          {
            nameHi: "नया व्यापार / वास्तु शांति पूजा",
            nameEn: "Vastu & Business Puja",
            pricing: {
              india: "₹4,100 – ₹8,100",
              global: "$129 – $219",
            },
          },
        ],
      },
    ],
  },
  {
    id: "subscription",
    titleHi: "सब्सक्रिप्शन मॉडल",
    titleEn: "Subscription",
    descriptionHi:
      "इसे मंथली या एनुअल रिकरिंग रेवेन्यू के लिए डिज़ाइन किया गया है। इसमें प्रसाद महीने में एक बार या त्योहार पर ही कूरियर होता है।",
    descriptionEn:
      "Designed for monthly or annual recurring plans. Prasad is couriered once a month or on festivals.",
    tiers: [
      {
        titleHi: "व्यक्तिगत एवं पारिवारिक प्लान",
        titleEn: "Premium Retention",
        services: [
          {
            nameHi: "मासिक जन्म-नक्षत्र और जन्मदिन अर्जना",
            nameEn: "Family Birthday Plan",
            pricing: {
              india: "₹501 / महीना (या ₹5,001 सालाना)",
              global: "$19 / month (or $179 / year)",
            },
          },
          {
            nameHi: "प्रदोष व्रत और अमावस्या पैकेज",
            nameEn: "Monthly Ritual Plan",
            pricing: {
              india: "₹751 / महीना (साल में 24 पूजा)",
              global: "$25 / month",
            },
          },
        ],
      },
      {
        titleHi: "सामूहिक और कम बजट प्लान",
        titleEn: "Volume & Scalability",
        services: [
          {
            nameHi: "दैनिक नाम-गोत्र संकल्प और आरती",
            nameEn: "Daily Chanting Plan",
            pricing: {
              india: "₹199 – ₹299 / महीना",
              global: "$5 – $9 / month",
              note: "सबसे ज्यादा बिकने वाला प्लान / Best-selling plan",
            },
          },
          {
            nameHi: "मासिक सामूहिक सत्यनारायण कथा",
            nameEn: "Samoohik Purnima Katha",
            pricing: {
              india: "₹351 / बुकिंग (या ₹3,500 सालाना)",
              global: "$15 / booking (or $129 / year)",
            },
          },
          {
            nameHi: "त्योहार विशेष महा-सब्सक्रिप्शन",
            nameEn: "Navratri, Diwali, Shivratri Pack",
            pricing: {
              india: "₹2,500 – ₹5,000 सालाना",
              global: "$99 – $149 / year",
            },
          },
        ],
      },
    ],
  },
];
