import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ComingSoon } from "@/components/ComingSoon";
import { PoojaPricing } from "@/components/PoojaPricing";
import { getSection, sections } from "@/lib/data";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return sections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) return { title: "Not Found" };

  if (slug === "yagya-pooja") {
    return {
      title: `${section.title} Pricing | Dharmasetu`,
      description:
        "Per-booking and subscription pooja pricing for India and Global NRI devotees.",
    };
  }

  return {
    title: `${section.title} | Dharmasetu`,
    description: section.tagline,
  };
}

export default async function SectionPage({ params }: Props) {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) notFound();

  return (
    <>
      <Header />
      <main className="min-h-[60vh]">
        {slug === "yagya-pooja" ? (
          <PoojaPricing />
        ) : (
          <ComingSoon section={section} />
        )}
      </main>
      <Footer />
    </>
  );
}
