import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { PageHero } from "@/components/PageHero";
import { RitualCard } from "@/components/RitualCard";
import { ritualCategories, ritualsByCategory } from "@/lib/rituals";

export const metadata: Metadata = {
  title: "Rituals",
  description:
    "Phase 1 virtual sevas: Rudrabhishek, Maha Mrityunjaya Jaap, Kalsarp and Rahu-Ketu Shanti, Navgrah Shanti, Satyanarayan Katha, Laxmi-Kuber Vyapar Vriddhi, and Temple E-Chadhava — each with a personalised Sankalpa, video proof, and transparent price.",
};

export default function RitualsPage() {
  return (
    <main id="main">
      <PageHero priority>
        <Container>
          <p className="label-caps text-[11px] text-temple-saffron">
            Phase 1 · Virtual sevas
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[34px] font-semibold leading-[1.15] text-sacred-cream sm:text-5xl">
            Named rites, performed in your Name.
          </h1>
          <p className="mt-5 max-w-2xl text-sacred-cream/80">
            Remote Sankalpa at Kashi, Prayag, Haridwar, Ujjain, Vrindavan, and
            Ayodhya. Video proof on WhatsApp. E-Prasad, and a physical Prasad
            box or yantra where the seva includes it. Prices below are
            complete. No hidden charges.
          </p>
        </Container>
      </PageHero>
      <section className="bg-sacred-cream py-16 sm:py-20">
        <Container className="space-y-16">
          {ritualCategories.map((category) => {
            const items = ritualsByCategory(category.id);
            return (
              <div key={category.id}>
                <h2 className="font-display text-2xl font-semibold text-setu-indigo">
                  {category.label}
                </h2>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {items.map((ritual, i) => (
                    <FadeIn key={ritual.slug} delay={i * 0.04}>
                      <RitualCard ritual={ritual} />
                    </FadeIn>
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </section>
    </main>
  );
}
