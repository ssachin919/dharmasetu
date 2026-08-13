import type { ReactNode } from "react";
import { GhatBackdrop } from "@/components/GhatBackdrop";

export function PageHero({
  children,
  priority = false,
}: {
  children: ReactNode;
  priority?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-setu-indigo text-sacred-cream">
      <GhatBackdrop priority={priority} />
      <div className="relative py-16 sm:py-20">{children}</div>
    </section>
  );
}
