import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { Container } from "@/components/Container";
import { TrustBadge } from "@/components/TrustBadge";
import { rituals } from "@/lib/rituals";

export const metadata: Metadata = {
  title: "Book a Ritual",
  description:
    "Choose your ritual and hub, enter Name, Gotra, and wish in under two minutes. See the price before you pay. Confirm on WhatsApp.",
};

type Props = {
  searchParams: Promise<{ ritual?: string; seva?: string }>;
};

export default async function BookPage({ searchParams }: Props) {
  const { ritual, seva } = await searchParams;
  const matched = rituals.find((r) => r.slug === ritual);
  const initialRitual = matched?.slug ?? "";
  const initialSeva = matched?.sevas.some((s) => s.slug === seva)
    ? (seva ?? "")
    : "";

  return (
    <main id="main">
      <section className="bg-setu-indigo py-16 text-sacred-cream sm:py-20">
        <Container className="max-w-3xl">
          <p className="label-caps text-[11px] text-temple-saffron">
            Book a ritual
          </p>
          <h1 className="mt-4 font-display text-[34px] font-semibold leading-[1.15] sm:text-5xl">
            Under two minutes. Then the ghat does the rest.
          </h1>
          <p className="mt-5 text-sacred-cream/80">
            Pick the rite and the hub. Give your Name, Gotra, and wish. The
            starting price is shown before you continue. Confirmation is on
            WhatsApp.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <TrustBadge onDark>No hidden charges</TrustBadge>
            <TrustBadge onDark>Video proof in 24 hrs</TrustBadge>
            <TrustBadge onDark>Personalised Sankalpa</TrustBadge>
          </div>
        </Container>
      </section>
      <section className="bg-sacred-cream py-16 sm:py-20">
        <Container className="max-w-3xl">
          <BookingForm
            initialRitual={initialRitual}
            initialSeva={initialSeva}
          />
        </Container>
      </section>
    </main>
  );
}
