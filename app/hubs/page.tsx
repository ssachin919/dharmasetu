import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { HubCard } from "@/components/HubCard";
import { PageHero } from "@/components/PageHero";
import { hubs } from "@/lib/hubs";

export const metadata: Metadata = {
  title: "Sacred Hubs",
  description:
    "Kashi, Prayag, Haridwar, Ujjain, Vrindavan, and Ayodhya — the centres where Dharmasetu's verified Pandits perform your Sankalpa.",
};

export default function HubsPage() {
  return (
    <main id="main">
      <PageHero priority>
        <Container>
          <p className="label-caps text-[11px] text-temple-saffron">
            Sacred hubs
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[34px] font-semibold leading-[1.15] text-sacred-cream sm:text-5xl">
            India&apos;s living centres of rite.
          </h1>
          <p className="mt-5 max-w-2xl text-sacred-cream/80">
            We do not invent new temples. We stand where Vishwanath, the
            Sangam, Mahakal, Braj, and Ayodhya already receive names.
          </p>
        </Container>
      </PageHero>
      <section className="bg-sacred-cream py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hubs.map((hub, i) => (
              <FadeIn key={hub.slug} delay={i * 0.04}>
                <HubCard hub={hub} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
