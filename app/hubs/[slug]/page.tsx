import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { RitualCard } from "@/components/RitualCard";
import { getHub, hubs } from "@/lib/hubs";
import { ritualsForHub } from "@/lib/rituals";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return hubs.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hub = getHub(slug);
  if (!hub) return { title: "Sacred Hub" };
  return {
    title: hub.name,
    description: hub.tagline,
  };
}

export default async function HubDetailPage({ params }: Props) {
  const { slug } = await params;
  const hub = getHub(slug);
  if (!hub) notFound();

  const available = ritualsForHub(hub.slug);

  return (
    <main id="main">
      <section className="bg-setu-indigo py-16 text-sacred-cream sm:py-20">
        <Container>
          <p lang="hi" className="font-devanagari-serif text-temple-saffron">
            {hub.nameHi}
          </p>
          <h1 className="mt-2 font-display text-[34px] font-semibold leading-[1.15] sm:text-5xl">
            {hub.name}
          </h1>
          <p className="mt-3 text-sacred-cream/75">{hub.deity}</p>
          <p className="mt-5 max-w-2xl text-lg text-sacred-cream/85">
            {hub.tagline}
          </p>
        </Container>
      </section>
      <section className="bg-sacred-cream py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-setu-indigo sm:text-3xl">
            The hub
          </h2>
          <p className="mt-4 leading-relaxed text-ink-indigo/90">{hub.story}</p>
          {hub.river ? (
            <p className="mt-4 text-sm text-ink-indigo/70">River: {hub.river}</p>
          ) : null}
        </Container>
      </section>
      <section className="border-t border-setu-indigo/10 bg-cream-raised py-16">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-setu-indigo">
            Rituals offered here
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {available.map((ritual) => (
              <RitualCard key={ritual.slug} ritual={ritual} />
            ))}
          </div>
          <Link
            href="/book"
            className="mt-10 inline-flex rounded-md bg-temple-saffron px-5 py-3 text-sm font-semibold text-setu-indigo"
          >
            Book a Ritual at {hub.name}
          </Link>
        </Container>
      </section>
    </main>
  );
}
