import Link from "next/link";
import type { Hub } from "@/lib/hubs";

export function HubCard({ hub }: { hub: Hub }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-setu-indigo/12 bg-cream-raised p-6">
      <p lang="hi" className="font-devanagari-serif text-sm text-tulsi-green">
        {hub.nameHi}
      </p>
      <h3 className="mt-1 font-display text-2xl font-semibold text-setu-indigo">
        {hub.name}
      </h3>
      <p className="mt-1 text-sm text-ink-indigo/60">{hub.deity}</p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-indigo/85">
        {hub.tagline}
      </p>
      <Link
        href={`/hubs/${hub.slug}`}
        className="mt-6 inline-flex text-sm font-semibold text-setu-indigo underline decoration-temple-saffron/50 underline-offset-4 hover:decoration-temple-saffron"
      >
        The hub story
      </Link>
    </article>
  );
}
