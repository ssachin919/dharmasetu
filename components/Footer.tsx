import Link from "next/link";
import { sections } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-maroon">Dharmasetu</p>
            <p className="mt-2 text-sm leading-relaxed text-stone-500">
              A bridge to your spiritual journey, heritage, and dharma.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-800">Explore</p>
            <ul className="mt-3 space-y-2">
              {sections.slice(0, 3).map((section) => (
                <li key={section.slug}>
                  <Link
                    href={`/${section.slug}`}
                    className="text-sm text-stone-500 transition-colors hover:text-saffron-dark"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium text-stone-800">Discover</p>
            <ul className="mt-3 space-y-2">
              {sections.slice(3).map((section) => (
                <li key={section.slug}>
                  <Link
                    href={`/${section.slug}`}
                    className="text-sm text-stone-500 transition-colors hover:text-saffron-dark"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-stone-200 pt-6 text-center text-xs text-stone-400">
          © {new Date().getFullYear()} Dharmasetu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
