import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { ProofFrame } from "@/components/ProofFrame";
import { panchangWhatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "For NRIs",
  description:
    "Wherever you are, your devotion reaches home. Sankalpa at India's sacred hubs, video proof you can forward to the family group, prices in rupees and dollars.",
};

const cases = [
  {
    title: "A health scare, another timezone",
    body: "A Maha Mrityunjaya Jaap at Prayag, Haridwar, or Kashi can be completed while you sit in a waiting room. The video arrives the same day. We do not upsell around illness.",
  },
  {
    title: "A birthday or Purnima far from home",
    body: "Satyanarayan Katha at Kailash Ashram, Prayagraj — as a digital recitation, or a live sitting the family joins on Zoom. Prasad can follow to the door.",
  },
  {
    title: "A shop, a practice, a livelihood named",
    body: "Laxmi-Kuber Vyapar Vriddhi at Prayag or Vrindavan, with the firm’s name and the owner’s Gotra in the Sankalpa. Video proof, and a yantra or murti sent home.",
  },
  {
    title: "A simple offering at Ram’s or Shiva’s feet",
    body: "E-Chadhava at Ayodhya, Kashi, Mahakaleshwar, Prayag, or Vrindavan. A short video of the offering, forwarded to the family group.",
  },
];

export default function NriPage() {
  return (
    <main id="main">
      <section className="bg-setu-indigo py-16 text-sacred-cream sm:py-20">
        <Container className="max-w-3xl">
          <p className="label-caps text-[11px] text-temple-saffron">
            For the Connected NRI
          </p>
          <h1 className="mt-4 font-display text-[34px] font-semibold leading-[1.15] sm:text-5xl">
            Wherever you are, your devotion reaches home.
          </h1>
          <p className="mt-5 text-sacred-cream/80">
            Distance, visas, and night shifts should not decide whether your
            Name is spoken at the ghat. Dharmasetu is built for the devotee
            who still belongs to Kashi, even from another continent.
          </p>
        </Container>
      </section>

      <section className="bg-sacred-cream py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-semibold text-setu-indigo sm:text-3xl">
              Proof you can forward to the family group
            </h2>
            <p className="mt-4 leading-relaxed text-ink-indigo/90">
              The video is the gift you send home. Your Name and Gotra are in
              it. The ghat is in it. Elders who could not travel can still
              fold their hands at a phone, and know the Sankalpa was not
              generic.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink-indigo/85">
              <li>Performed in Indian muhurat; delivered to your timezone.</li>
              <li>Prices shown in ₹ and USD. No hidden charges.</li>
              <li>E-Prasad; Prasad or yantra couriered where the seva includes it.</li>
              <li>WhatsApp-first, because that is already the family channel.</li>
            </ul>
          </div>
          <ProofFrame name="Your Name" gotra="Your Gotra" place="Har Ki Pauri, Haridwar" />
        </Container>
      </section>

      <section className="border-y border-setu-indigo/10 bg-cream-raised py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-setu-indigo sm:text-3xl">
            When families call us
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {cases.map((item) => (
              <article key={item.title}>
                <h3 className="font-display text-xl font-semibold text-setu-indigo">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-indigo/85 sm:text-base">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sacred-cream py-16">
        <Container className="max-w-2xl text-center">
          <p className="font-display text-xl italic text-setu-indigo">
            Not just a puja. Proof it was yours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/book"
              className="rounded-md bg-temple-saffron px-5 py-3 text-sm font-semibold text-setu-indigo"
            >
              Book a Ritual
            </Link>
            <a
              href={panchangWhatsappUrl}
              className="rounded-md border border-tulsi-green px-5 py-3 text-sm font-semibold text-tulsi-green"
            >
              Daily Darshan on WhatsApp
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
