import Link from "next/link";
import { sections } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-saffron text-sm font-bold text-white">
            ॐ
          </span>
          <span className="text-xl font-semibold tracking-tight text-maroon group-hover:text-saffron-dark transition-colors">
            Dharmasetu
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {sections.map((section) => (
            <Link
              key={section.slug}
              href={`/${section.slug}`}
              className="rounded-lg px-3 py-2 text-sm text-stone-600 transition-colors hover:bg-stone-100 hover:text-maroon"
            >
              {section.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
