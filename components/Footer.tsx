import Link from "next/link";
import { Logo } from "@/components/Logo";
import { contact, navLinks, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-setu-indigo text-sacred-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo variant="mark" className="h-10 w-10 object-contain" />
            <p className="font-display text-lg font-semibold">Dharmasetu</p>
          </div>
          <p
            lang="hi"
            className="mt-4 font-devanagari-serif text-sm text-temple-saffron"
          >
            सर्वं खल्विदं ब्रह्म
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-sacred-cream/75">
            Your bridge to the divine. Authentic Vedic rituals at India&apos;s
            sacred hubs, with proof that the Sankalpa was yours.
          </p>
        </div>

        <div>
          <p className="label-caps text-[11px] text-temple-saffron">Explore</p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-sacred-cream/80 transition-colors hover:text-temple-saffron"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/book"
                className="text-sm text-sacred-cream/80 transition-colors hover:text-temple-saffron"
              >
                Book a Ritual
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="label-caps text-[11px] text-temple-saffron">Speak with us</p>
          <ul className="mt-4 space-y-2 text-sm text-sacred-cream/80">
            <li>
              <a
                href={whatsappUrl(
                  "Namaste. I would like to enquire about a ritual.",
                )}
                className="transition-colors hover:text-temple-saffron"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="transition-colors hover:text-temple-saffron"
              >
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.instagram}
                className="transition-colors hover:text-temple-saffron"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={contact.youtube}
                className="transition-colors hover:text-temple-saffron"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sacred-cream/10">
        <p className="mx-auto max-w-6xl px-5 py-6 text-center text-sm text-sacred-cream/70 sm:px-8">
          Har Har Mahadev. May your devotion reach the ghat.
          <span className="mt-1 block text-xs text-sacred-cream/45">
            © {new Date().getFullYear()} Dharmasetu
          </span>
        </p>
      </div>
    </footer>
  );
}
