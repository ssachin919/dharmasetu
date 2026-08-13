import Image from "next/image";
import heroGhat from "@/public/hero-ghat.webp";

export function GhatBackdrop({ priority = false }: { priority?: boolean }) {
  return (
    <>
      <Image
        src={heroGhat}
        alt="Sunrise on the ghats: temples, floating diyas, and the river"
        fill
        priority={priority}
        placeholder="blur"
        sizes="100vw"
        quality={75}
        className="object-cover object-[78%_center] sm:object-[70%_center] lg:object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-setu-indigo via-setu-indigo/92 to-setu-indigo/60 max-md:via-setu-indigo/90 max-md:to-setu-indigo/70"
        aria-hidden
      />
    </>
  );
}
