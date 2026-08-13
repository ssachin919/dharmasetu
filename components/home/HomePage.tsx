import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { GhatBackdrop } from "@/components/GhatBackdrop";
import { HubCard } from "@/components/HubCard";
import { ProofFrame } from "@/components/ProofFrame";
import { RitualCard } from "@/components/RitualCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TrustBadge } from "@/components/TrustBadge";
import { hubs } from "@/lib/hubs";
import { rituals } from "@/lib/rituals";
import {
  comparison,
  panchangWhatsappUrl,
  pillars,
  steps,
  testimonials,
  trustStats,
} from "@/lib/site";

export function HomePage() {
  return (
    <main id="main">
      <Hero />
      <ProblemBridge />
      <HowItWorksPreview />
      <VideoProof />
      <WhyDharmasetu />
      <SacredHubs />
      <PopularRituals />
      <Diaspora />
      <TrustBand />
      <Testimonials />
      <DailyDarshan />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-setu-indigo text-sacred-cream">
      <GhatBackdrop priority />
      <Container className="relative py-16 sm:py-24 lg:py-28">
        <FadeIn className="max-w-xl lg:max-w-2xl">
          <p className="label-caps text-[11px] text-temple-saffron">
            Namaste
          </p>
          <h1 className="mt-4 font-display text-[34px] font-semibold leading-[1.15] text-sacred-cream sm:text-5xl md:text-[52px]">
            Your bridge to the divine.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-sacred-cream/85 sm:text-lg">
            Authentic Vedic rituals performed by verified Pandits in India&apos;s
            holiest centres, with your own Name and Gotra recited in the
            Sankalpa and personalised video proof delivered to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/book"
              className="rounded-md bg-temple-saffron px-5 py-3 text-sm font-semibold text-setu-indigo transition-colors hover:bg-saffron-deep hover:text-sacred-cream"
            >
              Book a Ritual
            </Link>
            <Link
              href="/how-it-works"
              className="rounded-md border border-sacred-cream/35 px-5 py-3 text-sm font-semibold text-sacred-cream transition-colors hover:border-temple-saffron hover:text-temple-saffron"
            >
              See How It Works
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <TrustBadge onDark>Personalised Sankalpa</TrustBadge>
            <TrustBadge onDark>Video proof in 24 hrs</TrustBadge>
            <TrustBadge onDark>Verified Ved-pathshala Pandit</TrustBadge>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function ProblemBridge() {
  return (
    <section className="bg-sacred-cream py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="The Setu"
            title="Distance fractured the thread. We rebuild it."
          />
          <div className="setu-line mt-8 mb-8 max-w-md" aria-hidden />
          <div className="max-w-3xl space-y-5 text-[16px] leading-relaxed text-ink-indigo sm:text-[17px]">
            <p>
              City life and migration quietly distanced devotees from the family
              Purohit who once knew their Gotra, their festivals, and their
              dead. Rituals became appointments. Sankalpas were spoken by
              someone else, for someone else.
            </p>
            <p className="font-display text-xl italic leading-snug text-setu-indigo sm:text-2xl">
              Dharmasetu is the bridge that lets you stand, in faith, at the
              ghat — even when you cannot travel.
            </p>
            <p>
              A verified Ved-pathshala Pandit at Kashi, Prayag, Haridwar,
              Ujjain, Vrindavan, or Ayodhya performs the ritual in your Name
              and Gotra. Personalised video proof returns within 24 hours.
              E-Prasad follows; some sevas also send Prasad or a yantra to
              the door.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function HowItWorksPreview() {
  return (
    <section className="border-y border-setu-indigo/10 bg-cream-raised py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="How it works"
            title="Four steps. Under two minutes to begin."
            kicker="From choosing the hub to receiving the video, the path is plain. WhatsApp stays open throughout."
          />
        </FadeIn>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2">
          {steps.map((step, i) => (
            <li key={step.n}>
              <FadeIn delay={i * 0.05} className="flex gap-4">
                <span className="font-display text-3xl font-bold text-temple-saffron">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-setu-indigo sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-indigo/85 sm:text-base">
                    {step.body}
                  </p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
        <FadeIn>
          <Link
            href="/how-it-works"
            className="mt-10 inline-flex text-sm font-semibold text-setu-indigo underline decoration-temple-saffron/50 underline-offset-4"
          >
            The full path, including the video-proof standard
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}

function VideoProof() {
  return (
    <section className="bg-setu-indigo py-16 text-sacred-cream sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <p className="label-caps text-[11px] text-temple-saffron">
            The centrepiece
          </p>
          <h2 className="mt-3 font-display text-[26px] font-semibold leading-[1.2] text-temple-saffron sm:text-[34px] md:text-[40px]">
            Not just a puja. Proof it was yours.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-sacred-cream/85 sm:text-lg">
            The emotional peak of Dharmasetu is not a listing. It is a Pandit
            at the ghat, speaking your Name and Gotra in the Sankalpa, while
            the river and the lamps are in the same frame.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-sacred-cream/75">
            That recording reaches you within 24 hours. You can sit with it.
            You can send it to the family group. You can know, without asking
            twice, that the rite was performed for you.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-sacred-cream/85">
            {[
              "Name and Gotra recited aloud",
              "Recorded at the sacred hub, not a studio",
              "Delivered on WhatsApp within 24 hours",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check
                  size={16}
                  strokeWidth={1.5}
                  className="mt-0.5 text-tulsi-green"
                />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.08}>
          <ProofFrame />
        </FadeIn>
      </Container>
    </section>
  );
}

function WhyDharmasetu() {
  return (
    <section className="bg-sacred-cream py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Why Dharmasetu"
            title="Three promises we keep in every seva."
          />
        </FadeIn>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.05}>
              <article>
                <p className="font-display text-3xl font-bold text-temple-saffron">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-setu-indigo sm:text-2xl">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-indigo/85 sm:text-base">
                  {pillar.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-16 overflow-x-auto">
            <p className="label-caps mb-4 text-[11px] text-tulsi-green">
              A calm comparison
            </p>
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-setu-indigo/15">
                  <th className="py-3 pr-4 font-semibold text-setu-indigo"> </th>
                  <th className="py-3 pr-4 font-medium text-ink-indigo/60">
                    Mass-group puja
                  </th>
                  <th className="py-3 pr-4 font-medium text-ink-indigo/60">
                    Local priest
                  </th>
                  <th className="py-3 pr-4 font-medium text-ink-indigo/60">
                    Generic aggregator
                  </th>
                  <th className="py-3 font-semibold text-setu-indigo">
                    Dharmasetu
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-b border-setu-indigo/10">
                    <th className="py-3 pr-4 font-semibold text-setu-indigo">
                      {row.label}
                    </th>
                    <td className="py-3 pr-4 text-ink-indigo/70">{row.mass}</td>
                    <td className="py-3 pr-4 text-ink-indigo/70">{row.local}</td>
                    <td className="py-3 pr-4 text-ink-indigo/70">
                      {row.aggregator}
                    </td>
                    <td className="py-3 font-medium text-tulsi-green">
                      {row.setu}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

function SacredHubs() {
  return (
    <section className="border-y border-setu-indigo/10 bg-cream-raised py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Sacred hubs"
            title="Five centres. Living ghats. Verified Pandits."
            kicker="Kashi, Prayag, Haridwar, Ujjain, Vrindavan, Ayodhya — chosen because the rites already belong there."
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hubs.map((hub, i) => (
            <FadeIn key={hub.slug} delay={i * 0.04}>
              <HubCard hub={hub} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

function PopularRituals() {
  return (
    <section className="bg-sacred-cream py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Rituals"
            title="Named rites. Transparent starting prices."
            kicker="Every seva includes a personalised Sankalpa and video proof. E-Prasad is included; some sevas also send a Prasad box or yantra home."
          />
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {rituals.map((ritual, i) => (
            <FadeIn key={ritual.slug} delay={i * 0.04}>
              <RitualCard ritual={ritual} />
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <p className="mt-8 text-center">
            <Link
              href="/rituals"
              className="text-sm font-semibold text-setu-indigo underline decoration-temple-saffron/50 underline-offset-4"
            >
              All rituals
            </Link>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

function Diaspora() {
  return (
    <section className="bg-setu-indigo py-16 text-sacred-cream sm:py-24">
      <Container className="max-w-3xl">
        <FadeIn>
          <p className="label-caps text-[11px] text-temple-saffron">
            For the diaspora
          </p>
          <h2 className="mt-3 font-display text-[26px] font-semibold leading-[1.2] text-sacred-cream sm:text-[34px] md:text-[40px]">
            Wherever you are, your devotion reaches home.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-sacred-cream/85 sm:text-lg">
            Timezones, distance, and a hospital corridor on another continent
            should not break the thread. A Connected NRI can have a Sankalpa
            spoken at Kashi at dawn, receive the video the same day, and
            forward it to the family group before night.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-sacred-cream/75">
            Health Jaaps, a birthday Katha, a Chadhava at Ayodhya you cannot
            stand in line for — we hold these with the same standard, and
            with extra quiet around the solemn ones.
          </p>
          <Link
            href="/nri"
            className="mt-8 inline-flex rounded-md border border-temple-saffron px-5 py-3 text-sm font-semibold text-temple-saffron transition-colors hover:bg-temple-saffron hover:text-setu-indigo"
          >
            For NRIs
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}

function TrustBand() {
  return (
    <section className="bg-sacred-cream py-16 sm:py-20">
      <Container>
        <FadeIn>
          <p className="label-caps text-center text-[11px] text-tulsi-green">
            Trust and transparency
          </p>
        </FadeIn>
        <dl className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustStats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.05}>
              <div className="text-center">
                <dt className="font-display text-4xl font-bold text-setu-indigo sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-indigo/75">
                  {stat.label}
                </dd>
              </div>
            </FadeIn>
          ))}
        </dl>
        <p className="mt-10 text-center text-sm text-ink-indigo/70">
          Authentic Vedic rituals · Verified Ved-pathshala Pandits · No hidden
          charges · E-Prasad
        </p>
      </Container>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="border-y border-setu-indigo/10 bg-cream-raised py-16 sm:py-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Devotee words"
            title="What it meant to be present."
            kicker="Illustrative voices while we gather recorded permissions. The feeling they describe is the one we work toward."
          />
        </FadeIn>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.05}>
              <blockquote className="h-full">
                <p className="font-display text-lg italic leading-snug text-setu-indigo">
                  {t.quote}
                </p>
                <footer className="mt-5 text-sm text-ink-indigo/70">
                  <cite className="not-italic font-medium text-setu-indigo">
                    {t.name}
                  </cite>
                  <span className="block">{t.place}</span>
                  <span className="mt-1 block text-xs text-ink-indigo/55">
                    {t.ritual}
                  </span>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DailyDarshan() {
  return (
    <section className="bg-sacred-cream py-16 sm:py-24">
      <Container className="max-w-2xl text-center">
        <FadeIn>
          <p lang="hi" className="font-devanagari-serif text-tulsi-green">
            पञ्चाङ्ग · दर्शन
          </p>
          <h2 className="mt-3 font-display text-[26px] font-semibold text-setu-indigo sm:text-[34px]">
            Daily Panchang and Darshan, freely.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-indigo/85 sm:text-base">
            Before you ever ask us for a ritual, receive the day&apos;s tithi,
            nakshatra, and a still from the ghat. A WhatsApp channel. No
            charge. Give before you ask.
          </p>
          <a
            href={panchangWhatsappUrl}
            className="mt-8 inline-flex rounded-md bg-tulsi-green px-5 py-3 text-sm font-semibold text-sacred-cream transition-colors hover:bg-setu-indigo"
          >
            Receive Daily Darshan on WhatsApp
          </a>
        </FadeIn>
      </Container>
    </section>
  );
}
