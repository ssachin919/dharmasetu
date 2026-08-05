import Link from "next/link";
import { Logo } from "@/components/Logo";
import { sections } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="group flex items-center gap-2.5">
          <Logo
            variant="mark"
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="text-xl font-semibold tracking-tight text-maroon transition-colors group-hover:text-saffron-dark">
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
