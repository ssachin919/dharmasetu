export type SevaForm = {
  slug: string;
  name: string;
  priceInr: string;
  priceUsd: string;
  deliverables: string[];
  pandits?: string;
  live?: boolean;
};

export type RitualCategory = "mahadev" | "jyotish" | "family" | "chadhava";

export type Ritual = {
  slug: string;
  name: string;
  nameHi: string;
  category: RitualCategory;
  hubSlugs: string[];
  venueNote?: string;
  /** Health Jaap — quieter treatment, no upsell. */
  sensitive?: boolean;
  short: string;
  significance: string;
  faqs: { q: string; a: string }[];
  sevas: SevaForm[];
};

export const ritualCategories: { id: RitualCategory; label: string }[] = [
  { id: "mahadev", label: "Mahadev & Protection" },
  { id: "jyotish", label: "Jyotish & Dosh Shanti" },
  { id: "family", label: "Family & Vyapar" },
  { id: "chadhava", label: "E-Chadhava & E-Prasad" },
];

export const rituals: Ritual[] = [
  {
    slug: "rudrabhishek",
    name: "Rudrabhishek",
    nameHi: "रुद्राभिषेक",
    category: "mahadev",
    hubSlugs: ["kashi", "prayag"],
    venueNote: "Kashi Vishwanath hub or Prayag hub",
    short:
      "Remote Abhishek of Lord Shiva, with your Name and Gotra recited on camera at Kashi or Prayag.",
    significance:
      "Rudrabhishek is the bathing of Shiva with sacred liquids and the hymns of the Rudram. In this first phase the rite is performed at the Kashi Vishwanath or Prayag hub: you are not asked to travel, and the Sankalpa is still spoken in your Name. Choose the individual seva, a family Sankalpa of up to five names, or a Rudra Havan you may join by live stream.",
    sevas: [
      {
        slug: "individual",
        name: "Individual Sankalpa",
        priceInr: "₹851",
        priceUsd: "$19",
        deliverables: [
          "Personal Name and Gotra recited on camera",
          "1–2 minute personalised HD video on WhatsApp",
          "Digital blessings card and E-Prasad",
        ],
      },
      {
        slug: "family",
        name: "Family Sankalpa (up to 5 names)",
        priceInr: "₹1,500",
        priceUsd: "$35",
        deliverables: [
          "Up to five family names recited in the Sankalpa",
          "Panchamrit and Bilva Patra offering",
          "3–5 minute video proof and a digital certificate",
        ],
      },
      {
        slug: "rudra-havan",
        name: "Rudra Havan (live)",
        priceInr: "₹3,500",
        priceUsd: "$69",
        live: true,
        deliverables: [
          "Full Abhishekam and 108 Ahuti Havan",
          "Private live link (Zoom or YouTube) for the family",
          "Physical Prasad box shipped home",
        ],
      },
    ],
    faqs: [
      {
        q: "Which hub should we choose?",
        a: "Kashi for Vishwanath; Prayag when your house already turns to the Sangam. Both are performed by verified Pandits at the hub, with your Sankalpa on camera.",
      },
      {
        q: "Will my Gotra be spoken aloud?",
        a: "Yes. The Sankalpa includes your Name and Gotra. That moment is in the video we send you.",
      },
    ],
  },
  {
    slug: "maha-mrityunjaya-jaap",
    name: "Maha Mrityunjaya Jaap",
    nameHi: "महामृत्युंजय जाप",
    category: "mahadev",
    hubSlugs: ["prayag", "haridwar", "kashi"],
    sensitive: true,
    short:
      "Dedicated chanting of the Maha Mrityunjaya for health, longevity, and mental strength, offered in the Name you hold in prayer.",
    significance:
      "This Jaap is asked for in illness, in fear, and in the long watches of recovery. We treat it without haste and without selling. A verified Pandit recites at Prayag, Haridwar, or Kashi. You choose the count of mantras; the price of that count is the price you pay.",
    sevas: [
      {
        slug: "1100",
        name: "1,100 chants",
        priceInr: "₹1,250",
        priceUsd: "$29",
        pandits: "1 Pandit",
        deliverables: [
          "1,100 recitations of the Maha Mrityunjaya",
          "Sankalpa in the Name and Gotra you give",
          "Video proof on WhatsApp",
          "1 Pandit",
        ],
      },
      {
        slug: "11000",
        name: "11,000 chants with Havan",
        priceInr: "₹3,500",
        priceUsd: "$79",
        pandits: "3 Pandits",
        deliverables: [
          "11,000 recitations with Havan",
          "Sankalpa in the Name and Gotra you give",
          "Video proof on WhatsApp",
          "3 Pandits",
        ],
      },
      {
        slug: "21000",
        name: "21,000 chants (live)",
        priceInr: "₹6,500",
        priceUsd: "$129",
        pandits: "5 Pandits",
        live: true,
        deliverables: [
          "21,000 recitations",
          "Live stream for the family",
          "Sankalpa in the Name and Gotra you give",
          "5 Pandits",
        ],
      },
    ],
    faqs: [
      {
        q: "Can this be done for someone who cannot be present?",
        a: "Yes. The Sankalpa is made in their Name and Gotra. The video is sent to you, and you may share it with the family.",
      },
      {
        q: "How is the count decided?",
        a: "You choose 1,100, 11,000, or 21,000. That seva and its price are shown before you confirm. We will not ask you to add another rite.",
      },
    ],
  },
  {
    slug: "kalsarp-rahu-ketu",
    name: "Kalsarp Dosh & Rahu-Ketu Shanti",
    nameHi: "कालसर्प दोष · राहु-केतु शांति",
    category: "jyotish",
    hubSlugs: ["prayag"],
    venueNote: "Nag Vasuki temple, Prayag",
    short:
      "Remote planetary shanti at Nag Vasuki, Prayag, for obstacles of career, delay, and financial stress.",
    significance:
      "Kalsarp and Rahu-Ketu shanti are asked when a chart is heavy with those grahas. The seva is performed at Nag Vasuki, Prayag — a temple long associated with Naga and Rahu-Ketu rites — with an individual Sankalpa. The video is yours; a silver Rahu-Ketu Yantra follows to the door.",
    sevas: [
      {
        slug: "individual",
        name: "Individual Dosh Shanti",
        priceInr: "₹1,800",
        priceUsd: "$39",
        deliverables: [
          "Naag-Nagin Pratima Pujan with individual Sankalpa",
          "Video proof clip on WhatsApp",
          "Silver Rahu-Ketu Yantra shipped home",
        ],
      },
      {
        slug: "family-havan",
        name: "Family Rahu-Ketu Havan",
        priceInr: "₹3,500",
        priceUsd: "$69",
        pandits: "2 Pandits",
        deliverables: [
          "Havan for the household",
          "Sankalpa with the names you give",
          "Video proof",
          "2 Pandits",
        ],
      },
    ],
    faqs: [
      {
        q: "Must we send a kundli?",
        a: "If you have one, share it on WhatsApp. If you do not, the Pandit will still perform the shanti in the Name and Gotra you give.",
      },
    ],
  },
  {
    slug: "navgrah-shanti",
    name: "Navgrah Shanti Puja",
    nameHi: "नवग्रह शांति",
    category: "jyotish",
    hubSlugs: ["prayag"],
    venueNote: "Kailash Ashram, Prayagraj",
    short:
      "Mantras for all nine planets, performed at Kailash Ashram, Prayagraj, with your wish named in the Sankalpa.",
    significance:
      "Navgrah Shanti is asked for steadiness — when the nine grahas need to be named and pacified together. The rite is held at Kailash Ashram, Prayagraj. The basic seva is a pujan with video proof; the fuller seva is a nine-planet Havan you may watch live or receive as an unedited recording.",
    sevas: [
      {
        slug: "basic",
        name: "Navgrah Pujan",
        priceInr: "₹1,200",
        priceUsd: "$25",
        deliverables: [
          "Mantras for all nine planets with your personalised wish",
          "HD video proof on WhatsApp",
        ],
      },
      {
        slug: "havan",
        name: "Nine-planet Havan",
        priceInr: "₹2,800",
        priceUsd: "$55",
        live: true,
        deliverables: [
          "Individual planet samit offerings",
          "Live stream link, or an unedited HD recording",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this instead of a local Jyotish?",
        a: "It can stand alone, or sit beside advice you already have. We perform the Vedic shanti; we do not replace a Jyotishi's reading.",
      },
    ],
  },
  {
    slug: "satyanarayan-katha",
    name: "Satyanarayan Katha",
    nameHi: "सत्यनारायण कथा",
    category: "family",
    hubSlugs: ["prayag"],
    venueNote: "Kailash Ashram, Prayagraj",
    short:
      "The five-chapter Katha of Lord Satyanarayan, recited at Kailash Ashram, Prayagraj, for house peace, birthdays, and Purnima.",
    significance:
      "Families keep this Katha after a wish fulfilled, on a birthday, or on Purnima. In this phase it is recited at Kailash Ashram, Prayagraj: either as a complete digital Katha with your Sankalpa on video, or as a live sitting of about two hours in which the family may join the Aarti.",
    sevas: [
      {
        slug: "digital",
        name: "Digital Katha",
        priceInr: "₹999",
        priceUsd: "$22",
        deliverables: [
          "Complete Katha recitation and Aarti",
          "Individual Name and Gotra Sankalpa on video",
          "HD video proof and E-Prasad",
        ],
      },
      {
        slug: "live",
        name: "Live Katha with the family",
        priceInr: "₹2,500",
        priceUsd: "$49",
        live: true,
        deliverables: [
          "Interactive sitting of about two hours on Zoom",
          "Family joins live to perform Aarti",
          "Physical Prasad box shipped home",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we watch from another country?",
        a: "Yes. The digital Katha arrives as video within 24 hours. The live Katha is joined on Zoom, across timezones.",
      },
    ],
  },
  {
    slug: "laxmi-kuber-vyapar",
    name: "Laxmi-Kuber Vyapar Vriddhi",
    nameHi: "लक्ष्मी-कुबेर व्यापार वृद्धि",
    category: "family",
    hubSlugs: ["prayag", "vrindavan"],
    short:
      "A seva for livelihood and business, with the firm’s name and the owner’s Gotra recited in the Sankalpa at Prayag or Vrindavan.",
    significance:
      "This Havan is asked when a shop, a practice, or a household livelihood needs to be named before Lakshmi and Kuber. The Kanakdhara Stotram and lotus-seed offerings belong to this rite. The simpler seva sends video proof and a Kuber Yantra; the fuller Havan of 1,008 Kamal Gatta Ahutis may be watched live, and a brass Kuber murti is sent home.",
    sevas: [
      {
        slug: "pujan",
        name: "Vyapar Vriddhi Pujan",
        priceInr: "₹1,800",
        priceUsd: "$39",
        deliverables: [
          "Business name and owner’s Gotra recited in the Sankalpa",
          "HD video proof",
          "Kuber Yantra shipped home",
        ],
      },
      {
        slug: "havan",
        name: "Laxmi Havan (live)",
        priceInr: "₹3,800",
        priceUsd: "$79",
        live: true,
        deliverables: [
          "1,008 Kamal Gatta Ahuti Havan",
          "Live stream access",
          "Brass Kuber murti shipped home",
        ],
      },
    ],
    faqs: [
      {
        q: "Do we give the shop’s name or only the person’s?",
        a: "Both, if you wish. The Sankalpa can hold the owner’s Name and Gotra and the name of the vyapar.",
      },
    ],
  },
  {
    slug: "e-chadhava",
    name: "Sacred Temple E-Chadhava",
    nameHi: "ई-चढ़ावा",
    category: "chadhava",
    hubSlugs: ["prayag", "kashi", "ujjain", "ayodhya", "vrindavan"],
    venueNote:
      "Triveni Prayag, Kashi Vishwanath, Mahakaleshwar, Ayodhya, or Vrindavan",
    short:
      "Floral garlands, mustard oil, shringar, or bhog offered at a prominent shrine in your Name — without the journey.",
    significance:
      "Chadhava is the simple act of placing an offering at the deity’s feet. When you cannot stand in the queue, a Pandit at Triveni Prayag, Kashi Vishwanath, Mahakaleshwar, Ayodhya, or Vrindavan makes that offering in your Name. You receive a short video; some sevas also send a portion of Prasad, kumkum, or moli home.",
    sevas: [
      {
        slug: "shani-oil",
        name: "Shani mustard-oil offering",
        priceInr: "₹251",
        priceUsd: "$6",
        deliverables: [
          "Your Name chanted while the oil is offered",
          "30-second WhatsApp video clip",
        ],
      },
      {
        slug: "devi-shringar",
        name: "Devi Shringar & Chunri Seva",
        priceInr: "₹451",
        priceUsd: "$10",
        deliverables: [
          "Chunri or saree offered at a Devi shrine",
          "HD video clip",
          "Kumkum and moli shipped home",
        ],
      },
      {
        slug: "mahabhog",
        name: "Mahabhog offering",
        priceInr: "₹751",
        priceUsd: "$16",
        deliverables: [
          "Sweet box offered to the deity",
          "Video proof",
          "A portion of dry Prasad shipped home",
        ],
      },
    ],
    faqs: [
      {
        q: "Which shrine will receive the offering?",
        a: "You choose among Triveni Prayag, Kashi Vishwanath, Mahakaleshwar, Ayodhya, and Vrindavan when you begin the Sankalpa.",
      },
    ],
  },
];

export function getRitual(slug: string): Ritual | undefined {
  return rituals.find((r) => r.slug === slug);
}

export function startingSeva(ritual: Ritual): SevaForm {
  return ritual.sevas[0];
}

export function getSeva(ritual: Ritual, sevaSlug: string): SevaForm | undefined {
  return ritual.sevas.find((s) => s.slug === sevaSlug);
}

export function ritualsForHub(hubSlug: string): Ritual[] {
  return rituals.filter((r) => r.hubSlugs.includes(hubSlug));
}

export function ritualsByCategory(category: RitualCategory): Ritual[] {
  return rituals.filter((r) => r.category === category);
}
