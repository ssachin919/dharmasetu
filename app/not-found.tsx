import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <main id="main" className="bg-sacred-cream py-24">
      <Container className="max-w-xl text-center">
        <p className="label-caps text-[11px] text-tulsi-green">Namaste</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-setu-indigo sm:text-4xl">
          This path is not on the Setu.
        </h1>
        <p className="mt-4 text-ink-indigo/80">
          The page you asked for is not here. Begin again from home, or choose
          a ritual.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-temple-saffron px-5 py-3 text-sm font-semibold text-setu-indigo"
          >
            Home
          </Link>
          <Link
            href="/rituals"
            className="rounded-md border border-setu-indigo/25 px-5 py-3 text-sm font-semibold text-setu-indigo"
          >
            Rituals
          </Link>
        </div>
      </Container>
    </main>
  );
}
