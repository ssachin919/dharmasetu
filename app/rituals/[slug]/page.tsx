import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { ProofFrame } from "@/components/ProofFrame";
import { TrustBadge } from "@/components/TrustBadge";
import { getHub, hubs } from "@/lib/hubs";
import { getRitual, rituals, startingSeva } from "@/lib/rituals";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return rituals.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ritual = getRitual(slug);
  if (!ritual) return { title: "Ritual" };
  return {
    title: ritual.name,
    description: ritual.short,
  };
}

export default async function RitualDetailPage({ params }: Props) {
  const { slug } = await params;
  const ritual = getRitual(slug);
  if (!ritual) notFound();

  const ritualHubs = ritual.hubSlugs
    .map((s) => getHub(s))
    .filter((h): h is NonNullable<typeof h> => Boolean(h));
  const from = startingSeva(ritual);

  return (
    <main id="main">
      <section
        className={
          ritual.sensitive
            ? "bg-setu-indigo/95 py-16 text-sacred-cream sm:py-20"
            : "bg-setu-indigo py-16 text-sacred-cream sm:py-20"
        }
      >
        <Container>
          <p className="label-caps text-[11px] text-temple-saffron">
            {ritual.sensitive ? "Offered with care" : "Ritual"}
          </p>
          <h1 className="mt-4 font-display text-[34px] font-semibold leading-[1.15] sm:text-5xl">
            {ritual.name}
          </h1>
          <p lang="hi" className="mt-2 font-devanagari-serif text-lg text-temple-saffron">
            {ritual.nameHi}
          </p>
          <p className="mt-5 max-w-2xl text-sacred-cream/80">{ritual.short}</p>
          {ritual.venueNote ? (
            <p className="mt-3 text-sm text-sacred-cream/65">{ritual.venueNote}</p>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-2">
            <TrustBadge onDark>Personalised Sankalpa</TrustBadge>
            <TrustBadge onDark>Video proof</TrustBadge>
            <TrustBadge onDark>E-Prasad</TrustBadge>
          </div>
        </Container>
      </section>

      <section className="bg-sacred-cream py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-setu-indigo sm:text-3xl">
              Significance
            </h2>
            <p className="mt-4 leading-relaxed text-ink-indigo/90">
              {ritual.significance}
            </p>

            <h2 className="mt-12 font-display text-2xl font-semibold text-setu-indigo sm:text-3xl">
              Forms of this seva
            </h2>
            <p className="mt-2 text-sm text-ink-indigo/70">
              Each amount is complete. No hidden charges.
            </p>
            <ul className="mt-6 space-y-5">
              {ritual.sevas.map((seva) => (
                <li
                  key={seva.slug}
                  className="rounded-lg border border-setu-indigo/12 bg-cream-raised p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-setu-indigo">
                      {seva.name}
                    </h3>
                    <p className="font-display text-xl font-bold text-setu-indigo">
                      {seva.priceInr}
                      <span className="ml-2 text-sm font-medium text-ink-indigo/60">
                        {seva.priceUsd}
                      </span>
                    </p>
                  </div>
                  {seva.live ? (
                    <p className="mt-1 text-xs font-medium text-tulsi-green">
                      Live stream for the family
                    </p>
                  ) : null}
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink-indigo/85">
                    {seva.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href={`/book?ritual=${ritual.slug}&seva=${seva.slug}`}
                    className={
                      ritual.sensitive
                        ? "mt-4 inline-flex text-sm font-semibold text-setu-indigo underline decoration-setu-indigo/30 underline-offset-4"
                        : "mt-4 inline-flex text-sm font-semibold text-setu-indigo underline decoration-temple-saffron/50 underline-offset-4"
                    }
                  >
                    Begin this seva
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-2xl font-semibold text-setu-indigo sm:text-3xl">
              Sacred hubs
            </h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {ritualHubs.map((hub) => (
                <li key={hub.slug}>
                  <Link
                    href={`/hubs/${hub.slug}`}
                    className="rounded-md border border-setu-indigo/15 bg-cream-raised px-3 py-2 text-sm text-setu-indigo"
                  >
                    {hub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside>
            <div className="rounded-lg border border-setu-indigo/12 bg-cream-raised p-6">
              <p className="label-caps text-[11px] text-tulsi-green">
                Transparent price
              </p>
              <p className="mt-2 font-display text-4xl font-bold text-setu-indigo">
                {from.priceInr}
              </p>
              <p className="mt-1 text-sm text-ink-indigo/70">
                Starting · {from.priceUsd} overseas · {from.name}
              </p>
              <p className="mt-2 text-sm text-ink-indigo/80">
                No hidden charges. Choose a form of the seva above; that is the
                amount you begin with.
              </p>
              <Link
                href={`/book?ritual=${ritual.slug}`}
                className={
                  ritual.sensitive
                    ? "mt-6 inline-flex rounded-md border border-setu-indigo/30 px-4 py-2.5 text-sm font-semibold text-setu-indigo"
                    : "mt-6 inline-flex rounded-md bg-temple-saffron px-4 py-2.5 text-sm font-semibold text-setu-indigo"
                }
              >
                Begin this Sankalpa
              </Link>
            </div>
            <div className="mt-8">
              <p className="mb-3 label-caps text-[11px] text-tulsi-green">
                Sample proof
              </p>
              <ProofFrame
                name="Your Name"
                gotra="Your Gotra"
                place={
                  hubs.find((h) => h.slug === ritual.hubSlugs[0])?.name ??
                  "Sacred hub"
                }
              />
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-t border-setu-indigo/10 bg-cream-raised py-16">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-setu-indigo">
            Questions
          </h2>
          <dl className="mt-8 max-w-3xl space-y-8">
            {ritual.faqs.map((faq) => (
              <div key={faq.q}>
                <dt className="font-display text-lg font-semibold text-setu-indigo">
                  {faq.q}
                </dt>
                <dd className="mt-2 leading-relaxed text-ink-indigo/85">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>
    </main>
  );
}
