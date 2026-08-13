import Link from "next/link";
import { TrustBadge } from "@/components/TrustBadge";
import type { Ritual } from "@/lib/rituals";
import { startingSeva } from "@/lib/rituals";
import { hubs } from "@/lib/hubs";

export function RitualCard({ ritual }: { ritual: Ritual }) {
  const hubNames = ritual.hubSlugs
    .map((slug) => hubs.find((h) => h.slug === slug)?.name)
    .filter(Boolean)
    .join(" · ");
  const from = startingSeva(ritual);

  return (
    <article
      className={`flex h-full flex-col rounded-lg border p-6 ${
        ritual.sensitive
          ? "border-setu-indigo/15 bg-cream-raised"
          : "border-setu-indigo/12 bg-cream-raised"
      }`}
    >
      {ritual.sensitive ? (
        <p className="label-caps text-[10px] text-ink-indigo/55">
          Offered with care
        </p>
      ) : (
        <p className="label-caps text-[10px] text-tulsi-green">{hubNames}</p>
      )}
      <h3 className="mt-2 font-display text-xl font-semibold text-setu-indigo sm:text-2xl">
        {ritual.name}
      </h3>
      <p lang="hi" className="font-devanagari-serif text-sm text-ink-indigo/60">
        {ritual.nameHi}
      </p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-indigo/85">
        {ritual.short}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        <TrustBadge>Personalised Sankalpa</TrustBadge>
        <TrustBadge>Video proof</TrustBadge>
        <TrustBadge>E-Prasad</TrustBadge>
      </ul>
      <div className="mt-6 flex items-end justify-between gap-4 border-t border-setu-indigo/10 pt-4">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.1em] text-ink-indigo/50 uppercase">
            From
          </p>
          <p className="font-display text-2xl font-bold text-setu-indigo">
            {from.priceInr}
          </p>
          <p className="text-xs text-ink-indigo/55">
            {from.priceUsd} overseas · no hidden charges
          </p>
        </div>
        <Link
          href={`/rituals/${ritual.slug}`}
          className={`rounded-md px-4 py-2 text-sm font-semibold ${
            ritual.sensitive
              ? "border border-setu-indigo/25 text-setu-indigo hover:bg-setu-indigo hover:text-sacred-cream"
              : "bg-temple-saffron text-setu-indigo hover:bg-saffron-deep hover:text-sacred-cream"
          }`}
        >
          View ritual
        </Link>
      </div>
    </article>
  );
}
