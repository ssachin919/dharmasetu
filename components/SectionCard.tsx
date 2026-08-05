import Link from "next/link";
import type { FeatureSection } from "@/lib/data";

export function SectionCard({ section }: { section: FeatureSection }) {
  return (
    <Link
      href={`/${section.slug}`}
      className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-all hover:border-saffron/40 hover:shadow-md"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-maroon group-hover:text-saffron-dark transition-colors">
            {section.title}
          </h3>
          <p className="mt-1 text-sm text-stone-500">{section.tagline}</p>
        </div>
        <span className="shrink-0 rounded-full bg-saffron/10 px-2.5 py-1 text-xs font-medium text-saffron-dark">
          Coming Soon
        </span>
      </div>
      <ul className="flex flex-wrap gap-2">
        {section.items.map((item) => (
          <li
            key={item}
            className="rounded-lg bg-stone-50 px-2.5 py-1 text-xs text-stone-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </Link>
  );
}
