export type Hub = {
  slug: string;
  name: string;
  nameHi: string;
  deity: string;
  river?: string;
  tagline: string;
  story: string;
};

export const hubs: Hub[] = [
  {
    slug: "kashi",
    name: "Kashi",
    nameHi: "काशी",
    deity: "Kashi Vishwanath — Lord Shiva",
    river: "Ganga",
    tagline: "The city where Shiva never leaves.",
    story:
      "Kashi is not visited so much as entered. The Ganga turns here, the ghats descend in stone, and the name of Vishwanath is spoken from before dawn until the last aarti lamp is set on the water. In this first phase, Rudrabhishek, the Maha Mrityunjaya Jaap, and E-Chadhava at Vishwanath are performed from this hub — your Name spoken in that continuity.",
  },
  {
    slug: "prayag",
    name: "Prayag",
    nameHi: "प्रयाग",
    deity: "Triveni — Ganga, Yamuna, and the unseen Saraswati",
    river: "Triveni Sangam",
    tagline: "Where three rivers meet, and many sevas are kept.",
    story:
      "At Prayag the waters join. This hub holds much of the first-phase menu: Rudrabhishek, Maha Mrityunjaya, Kalsarp and Rahu-Ketu shanti at Nag Vasuki, Navgrah Shanti and Satyanarayan Katha at Kailash Ashram, Laxmi-Kuber seva, and Chadhava at the Triveni. When you cannot stand at the confluence, a verified Pandit stands there in your Name.",
  },
  {
    slug: "haridwar",
    name: "Haridwar",
    nameHi: "हरिद्वार",
    deity: "Hari — the Ganga at Har Ki Pauri",
    river: "Ganga",
    tagline: "The gate where the Ganga enters the plains.",
    story:
      "Haridwar is the threshold. The Ganga leaves the hills and the lamps of Har Ki Pauri answer her. In this phase the hub is kept for the Maha Mrityunjaya Jaap — a fitting place for a Name spoken beside the river, when health is the Hetu.",
  },
  {
    slug: "ujjain",
    name: "Ujjain",
    nameHi: "उज्जैन",
    deity: "Mahakaleshwar — Lord Shiva as Time",
    river: "Shipra",
    tagline: "Mahakal's city, where time itself is worshipped.",
    story:
      "Ujjain keeps the old clock of Bharat. Mahakaleshwar faces south; the Shipra moves past the ghats. In this first phase, E-Chadhava is offered at Mahakaleshwar in your Name — a simple placing of oil, shringar, or bhog at the Jyotirlinga, with video proof sent to you.",
  },
  {
    slug: "vrindavan",
    name: "Vrindavan",
    nameHi: "वृन्दावन",
    deity: "Krishna — the groves of Braj",
    river: "Yamuna",
    tagline: "Where Lakshmi-Kuber seva and Chadhava meet Braj.",
    story:
      "Vrindavan is Krishna’s town of play and of household devotion. Here we keep the Laxmi-Kuber Vyapar Vriddhi Havan and E-Chadhava — so a shop’s name, or a simple offering, can be spoken in Braj when the family lives far from the Yamuna.",
  },
  {
    slug: "ayodhya",
    name: "Ayodhya",
    nameHi: "अयोध्या",
    deity: "Shri Ram",
    tagline: "Ram’s city, for a Name placed at His feet.",
    story:
      "Ayodhya is the house of Ram. In this phase the hub receives E-Chadhava — garland, shringar, or bhog offered in your Name at the shrine, with a short video so the family, wherever they sit, can see that the offering was made.",
  },
];

export function getHub(slug: string): Hub | undefined {
  return hubs.find((h) => h.slug === slug);
}
