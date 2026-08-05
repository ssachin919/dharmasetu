export type FeatureSection = {
  slug: string;
  title: string;
  tagline: string;
  items: string[];
};

export const sections: FeatureSection[] = [
  {
    slug: "teertha-yatra",
    title: "Teertha Yatra",
    tagline: "Sacred pilgrimage destinations across Bharat",
    items: [
      "Chardhama",
      "Ayodhya",
      "Mathura Vrindavan",
      "Kashi",
      "Prayagraj",
      "Chitrakoot",
      "Jyotirlinga",
      "Shaktipeetha",
    ],
  },
  {
    slug: "yagya-pooja",
    title: "Yagya & Pooja",
    tagline: "Vedic rituals, ceremonies, and spiritual services",
    items: [
      "Solah Sanskaras",
      "Bhagavad Katha",
      "Ramcharitmanas Path",
      "Sunderkand",
      "Rudrabhishekam",
      "Maha Mrityunjay Jap",
      "Sankeertan Seva",
      "Katha",
      "Grah Shanti",
      "Kundali",
      "Grih Pravesh",
    ],
  },
  {
    slug: "vedic-shopping",
    title: "Vedic Shopping",
    tagline: "Authentic samagri, art, and lifestyle products",
    items: [
      "Poojan Samagri",
      "Murti Frames",
      "Frames & Paintings",
      "Panchagavya Products",
      "Ethnic Wear",
      "Organic Food Products",
      "Books",
      "Calendar (Ritucharya)",
      "Vaidic Pots",
      "Handmade Craft Materials",
    ],
  },
  {
    slug: "know-your-dharma",
    title: "Know Your Dharma",
    tagline: "Philosophy, wisdom, and the path of righteous living",
    items: [
      "Nyaya",
      "Vaisheshika",
      "Samkhya",
      "Yoga",
      "Purva Mimansa",
      "Uttar Mimansa (Vedanta)",
      "Books & Videos on Hinduism",
      "Agriculture & Environment",
      "Kam & Statecraft",
    ],
  },
  {
    slug: "heritage",
    title: "Delve Into Your Heritage",
    tagline: "Science, arts, monuments, and living traditions",
    items: [
      "Science, Arts & Monuments",
      "Gurukula",
      "Ashrama",
      "Activity Details",
    ],
  },
  {
    slug: "culture",
    title: "Cornerstones of Our Culture",
    tagline: "The timeless professions that built our civilization",
    items: [
      "Purohita",
      "Singer",
      "Dancer",
      "Warriors",
      "Painter",
      "Sthapati",
      "Vaidya",
      "Jyotish",
      "Acharya",
      "Chefs",
      "Craft",
    ],
  },
];

export function getSection(slug: string): FeatureSection | undefined {
  return sections.find((s) => s.slug === slug);
}
