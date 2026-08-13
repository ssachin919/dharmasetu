import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Dharmasetu is the bridge of dharma — authentic Vedic rituals at India's sacred hubs, with personalised video proof and devotion treated as trust, not trade.",
};

const values = [
  {
    title: "Authenticity",
    body: "Verified Ved-pathshala Pandits. Living hubs. A Sankalpa that uses your Name and Gotra. We will not dress a studio as a ghat.",
  },
  {
    title: "Transparency",
    body: "Prices before you pay. No hidden charges. Video within 24 hours. If we cannot show it, we do not claim it.",
  },
  {
    title: "Devotional respect",
    body: "Health Jaaps are held without selling. The tone of a rite is part of the rite.",
  },
  {
    title: "Inclusivity",
    body: "The Connected NRI, the family that stayed, the household that no longer has a Purohit of its own — the Setu is for all who come with a Name and a Gotra.",
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <section className="bg-setu-indigo py-16 text-sacred-cream sm:py-20">
        <Container className="max-w-3xl">
          <p className="label-caps text-[11px] text-temple-saffron">About</p>
          <h1 className="mt-4 font-display text-[34px] font-semibold leading-[1.15] sm:text-5xl">
            Dharma, and the bridge that carries it.
          </h1>
          <p lang="hi" className="mt-4 font-devanagari-serif text-temple-saffron">
            सर्वं खल्विदं ब्रह्म
          </p>
        </Container>
      </section>

      <section className="bg-sacred-cream py-16 sm:py-20">
        <Container className="grid items-start gap-12 md:grid-cols-[8rem_1fr]">
          <Logo variant="full" className="h-auto w-28 object-contain" />
          <div className="max-w-2xl space-y-5 leading-relaxed text-ink-indigo/90">
            <p>
              City life, migration, and the thinning of joint families quietly
              distanced devotees from the family Purohit who once knew their
              Gotra, their festivals, and their dead. Rituals became
              appointments. Sankalpas were spoken by someone else, for someone
              else.
            </p>
            <p className="font-display text-xl italic text-setu-indigo">
              Dharmasetu — Dharma + Setu — exists to restore that thread.
            </p>
            <p>
              A verified Pandit at Kashi, Prayag, Haridwar, Ujjain, Vrindavan,
              or Ayodhya performs the ritual in the devotee&apos;s Name and
              Gotra. Personalised video proof returns within 24 hours.
              E-Prasad follows; some sevas also send Prasad or a yantra to
              the door.
            </p>
            <p>
              We are not a marketplace of priests. We are the Setu that lets a
              devotee stand, in faith, at the ghat.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-y border-setu-indigo/10 bg-cream-raised py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-setu-indigo sm:text-3xl">
            What we hold
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {values.map((v) => (
              <article key={v.title}>
                <h3 className="font-display text-xl font-semibold text-setu-indigo">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-indigo/85 sm:text-base">
                  {v.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-sacred-cream py-16">
        <Container className="max-w-2xl">
          <p className="text-ink-indigo/85">
            Har Har Mahadev. Jai Shri Ram. Har Har Gange. If this bridge is
            the one your house has been looking for, begin with a Name and a
            Gotra.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex rounded-md bg-temple-saffron px-5 py-3 text-sm font-semibold text-setu-indigo"
          >
            Book a Ritual
          </Link>
        </Container>
      </section>
    </main>
  );
}
