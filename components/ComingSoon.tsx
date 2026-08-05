import Link from "next/link";
import type { FeatureSection } from "@/lib/data";

export function ComingSoon({ section }: { section: FeatureSection }) {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-saffron-dark">
        Coming Soon
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-maroon sm:text-5xl">
        {section.title}
      </h1>
      <p className="mt-4 text-lg text-stone-500">{section.tagline}</p>
      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {section.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-600"
          >
            {item}
          </span>
        ))}
      </div>
      <Link
        href="/"
        className="mt-12 inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-maroon-light"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
