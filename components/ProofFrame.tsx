import { Play } from "lucide-react";
import { GhatStill } from "@/components/GhatStill";

export function ProofFrame({
  name = "Your Name",
  gotra = "Your Gotra",
  place = "Dashashwamedh Ghat, Kashi",
}: {
  name?: string;
  gotra?: string;
  place?: string;
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-temple-saffron/30 bg-setu-indigo shadow-xl shadow-setu-indigo/20">
      <div className="relative">
        <GhatStill className="h-auto w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-setu-indigo via-setu-indigo/20 to-transparent" />
        <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sacred-cream/40 bg-setu-indigo/50 text-sacred-cream backdrop-blur-sm">
          <Play size={22} strokeWidth={1.5} fill="currentColor" aria-hidden />
          <span className="sr-only">Sample video proof</span>
        </div>
        <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <p className="label-caps text-[10px] text-temple-saffron">
            Sankalpa · spoken aloud
          </p>
          <p className="mt-2 font-display text-xl font-semibold text-sacred-cream sm:text-2xl">
            {name}
          </p>
          <p className="text-sm text-sacred-cream/80">Gotra: {gotra}</p>
          <p className="mt-2 text-xs text-sacred-cream/60">{place}</p>
        </figcaption>
      </div>
      <p className="border-t border-sacred-cream/10 px-5 py-3 text-xs text-sacred-cream/65 sm:px-7">
        Illustrative frame. Real proof is a recording of the Pandit at the ghat,
        sent to you within 24 hours.
      </p>
    </figure>
  );
}
