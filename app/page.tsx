import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionCard } from "@/components/SectionCard";
import { sections } from "@/lib/data";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-cream to-white px-6 py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-saffron/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-maroon/10 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-saffron-dark">
              Your Spiritual Bridge
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-maroon sm:text-6xl">
              Dharmasetu
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              Pilgrimage, rituals, Vedic shopping, philosophy, heritage, and the
              living traditions of our culture. All in one place.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/teertha-yatra"
                className="rounded-full bg-saffron px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-saffron-dark"
              >
                Explore Teertha Yatra
              </Link>
              <Link
                href="/know-your-dharma"
                className="rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-maroon hover:text-maroon"
              >
                Know Your Dharma
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-maroon sm:text-3xl">
              What We Offer
            </h2>
            <p className="mt-2 text-stone-500">
              Six pillars to guide your spiritual and cultural journey
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => (
              <SectionCard key={section.slug} section={section} />
            ))}
          </div>
        </section>

        <section className="border-t border-stone-200 bg-stone-50 px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-semibold text-maroon">
              Building Something Meaningful
            </h2>
            <p className="mt-4 text-stone-500">
              We are crafting each section with care. Every page you visit today
              shows what is on the way. Stay tuned for the full experience.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
