export const contact = {
  whatsappNumber: "919289194055",
  email: "namaste@dharmasetu.in",
  // TODO: replace with live social URLs
  instagram: "https://instagram.com/dharmasetu",
  youtube: "https://youtube.com/@dharmasetu",
};

export const whatsappUrl = (text?: string) => {
  const base = `https://wa.me/${contact.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};

export const panchangWhatsappUrl = whatsappUrl(
  "Namaste. I would like to receive the daily Panchang and Darshan on WhatsApp.",
);

export const navLinks = [
  { href: "/rituals", label: "Rituals" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/hubs", label: "Sacred Hubs" },
  { href: "/nri", label: "For NRIs" },
  { href: "/about", label: "About" },
] as const;

export const steps = [
  {
    n: "01",
    title: "Choose your ritual and hub",
    body: "Rudrabhishek at Kashi. Maha Mrityunjaya at Prayag. Chadhava at Ayodhya. Select the seva and the sacred centre where it should be performed.",
  },
  {
    n: "02",
    title: "Enter your Name, Gotra, and wish",
    body: "Under two minutes. The Sankalpa is written in your Name and Gotra, with the Hetu you hold in your heart.",
  },
  {
    n: "03",
    title: "A verified Pandit performs it at the hub",
    body: "A Ved-pathshala Pandit, known to us, performs the ritual at the ghat or mandir — not in a studio, not as a shared crowd.",
  },
  {
    n: "04",
    title: "Video proof within 24 hours, E-Prasad to you",
    body: "You receive personalised video of your Sankalpa on WhatsApp. E-Prasad follows; some sevas also send a Prasad box, yantra, or murti to your door.",
  },
] as const;

export const pillars = [
  {
    title: "Individual Sankalpa Guarantee",
    body: "Every ritual is performed in your Name and Gotra. Not a shared hall. Not a list read in haste. The video shows the moment it was spoken.",
  },
  {
    title: "Standardised Vedic Excellence",
    body: "A clear Vedic standard, held by verified Ved-pathshala Pandits at Kashi, Prayag, Haridwar, Ujjain, Vrindavan, and Ayodhya. The method does not change with the mood of the day.",
  },
  {
    title: "Trust-First Faith Tech",
    body: "Personalised video within 24 hours. Prices you can see before you pay. No hidden charges. E-Prasad, and physical Prasad or yantra where the seva includes it. WhatsApp-first, because that is how families already speak.",
  },
] as const;

export const trustStats = [
  { value: "24 hrs", label: "Video proof of your Sankalpa" },
  { value: "6 hubs", label: "Kashi · Prayag · Haridwar · Ujjain · Vrindavan · Ayodhya" },
  { value: "2 min", label: "To enter Name, Gotra, and wish" },
  { value: "100%", label: "Transparent price. No hidden charges." },
] as const;

export const testimonials = [
  {
    quote:
      "I heard my father's Gotra spoken in the Rudrabhishek at Kashi. I was in Singapore. For a moment I was at Vishwanath.",
    name: "Ananya R.",
    place: "Singapore",
    ritual: "Rudrabhishek, Kashi",
  },
  {
    quote:
      "The Pandit said my son's name in the Maha Mrityunjaya. We watched the video together in the hospital waiting room. It was enough.",
    name: "Suresh K.",
    place: "Bengaluru",
    ritual: "Maha Mrityunjaya Jaap, Prayag",
    sensitive: true,
  },
  {
    quote:
      "We joined the Satyanarayan Katha from New Jersey. The Pandit said our Gotra; my mother folded her hands at the phone during Aarti.",
    name: "Meera D.",
    place: "New Jersey",
    ritual: "Satyanarayan Katha, Prayag",
  },
] as const;

export const comparison = [
  {
    label: "Sankalpa",
    mass: "Shared among many",
    local: "Personal, if they know your family",
    aggregator: "Often unclear",
    setu: "Your Name and Gotra, guaranteed",
  },
  {
    label: "Place",
    mass: "Hall or studio",
    local: "Your city, when you can reach",
    aggregator: "Varies",
    setu: "Kashi, Prayag, Haridwar, Ujjain, Vrindavan, Ayodhya",
  },
  {
    label: "Proof",
    mass: "Rarely given",
    local: "Memory and trust",
    aggregator: "A listing, sometimes a clip",
    setu: "Personalised video within 24 hours",
  },
  {
    label: "Price",
    mass: "A contribution, often opaque",
    local: "Spoken, not written",
    aggregator: "Fees appear later",
    setu: "Shown before you pay. No hidden charges.",
  },
] as const;
