"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-setu-indigo text-sacred-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Logo
            variant="mark"
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight text-sacred-cream sm:text-xl">
            Dharmasetu
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-sacred-cream/85 transition-colors hover:text-temple-saffron"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="ml-3 rounded-md bg-temple-saffron px-4 py-2 text-sm font-semibold text-setu-indigo transition-colors hover:bg-saffron-deep hover:text-sacred-cream"
          >
            Book a Ritual
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-sacred-cream lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-sacred-cream/15 px-5 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-md px-2 py-2.5 text-sacred-cream/90"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/book"
                className="block rounded-md bg-temple-saffron px-4 py-3 text-center text-sm font-semibold text-setu-indigo"
                onClick={() => setOpen(false)}
              >
                Book a Ritual
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
