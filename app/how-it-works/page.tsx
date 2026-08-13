import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { ProofFrame } from "@/components/ProofFrame";
import { SectionHeading } from "@/components/SectionHeading";
import { steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Choose a ritual and hub, enter your Name and Gotra, and receive personalised video proof within 24 hours — plus E-Prasad, and a physical Prasad box or yantra where the seva includes it.",
};

const promises = [
  {
    title: "The video-proof standard",
    body: "Every seva includes a recording in which the Pandit recites your Name and Gotra in the Sankalpa. The ghat or mandir is visible. The file reaches you on WhatsApp within 24 hours of the rite.",
  },
  {
    title: "Who performs it",
    body: "Verified Ved-pathshala Pandits, known to us, at Kashi, Prayag, Haridwar, Ujjain, Vrindavan, or Ayodhya. We do not send a stranger from a listing.",
  },
  {
    title: "What you pay",
    body: "The starting price is shown on the ritual page and again before you confirm. Dakshina and samagri are included unless a note says otherwise. There are no hidden charges.",
  },
  {
    title: "Prasad",
    body: "Most sevas include E-Prasad. Where a physical Prasad box, yantra, or murti is part of the seva, it is sent to the address you give. Overseas addresses are welcome; timelines are shared on WhatsApp.",
  },
  {
    title: "Solemn rites",
    body: "Health Jaaps are held without upsell. You will not be asked to add another seva in the same conversation.",
  },
  {
    title: "WhatsApp-first",
    body: "Muhurat, the video, and any question you have travel on WhatsApp. That is how families already speak, and we will not make you learn a new portal for devotion.",
  },
];

export default function HowItWorksPage() {
  return (
    <main id="main">
      <PageHero priority>
        <Container>
          <p className="label-caps text-[11px] text-temple-saffron">
            How it works
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[34px] font-semibold leading-[1.15] text-sacred-cream sm:text-5xl">
            From your Name to the ghat, then back to you.
          </h1>
          <p className="mt-5 max-w-2xl text-sacred-cream/80">
            Under two minutes to give the Sankalpa. A verified Pandit at a
            sacred hub. Personalised video within 24 hours.
          </p>
        </Container>
      </PageHero>

      <section className="bg-sacred-cream py-16 sm:py-24">
        <Container>
          <ol className="space-y-14">
            {steps.map((step) => (
              <li key={step.n}>
                <FadeIn className="grid gap-4 md:grid-cols-[5rem_1fr] md:gap-8">
                  <span className="font-display text-4xl font-bold text-temple-saffron">
                    {step.n}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl font-semibold text-setu-indigo sm:text-3xl">
                      {step.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink-indigo/90">
                      {step.body}
                    </p>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-setu-indigo py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[26px] font-semibold text-temple-saffron sm:text-[34px]">
              Not just a puja. Proof it was yours.
            </h2>
            <p className="mt-4 text-sacred-cream/80">
              The recording is the standard, not an extra. If a frame cannot
              show the Sankalpa, we do not call it complete.
            </p>
          </div>
          <ProofFrame />
        </Container>
      </section>

      <section className="bg-sacred-cream py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Transparency"
            title="What we promise before you begin."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {promises.map((item) => (
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
          <Link
            href="/book"
            className="mt-12 inline-flex rounded-md bg-temple-saffron px-5 py-3 text-sm font-semibold text-setu-indigo"
          >
            Book a Ritual
          </Link>
        </Container>
      </section>
    </main>
  );
}
