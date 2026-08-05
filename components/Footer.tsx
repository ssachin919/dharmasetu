import Link from "next/link";
import { Logo } from "@/components/Logo";
import { sections } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo variant="mark" className="h-9 w-9 object-contain" />
              <p className="text-lg font-semibold text-maroon">Dharmasetu</p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-stone-500">
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
          © 2026 Dharmasetu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
