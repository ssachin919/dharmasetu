import Image from "next/image";

type LogoProps = {
  /** Full logo includes the Sanskrit line; mark is the sun emblem only. */
  variant?: "full" | "mark";
  className?: string;
  priority?: boolean;
};

const assets = {
  full: {
    src: "/logo-transparent.png",
    width: 471,
    height: 555,
    alt: "Dharmasetu — सर्वं खल्विदं ब्रह्म",
  },
  mark: {
    src: "/logo-mark-transparent.png",
    width: 469,
    height: 469,
    alt: "Dharmasetu",
  },
} as const;

export function Logo({
  variant = "full",
  className = "",
  priority = false,
}: LogoProps) {
  const asset = assets[variant];

  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      className={className}
      priority={priority}
      unoptimized
    />
  );
}
