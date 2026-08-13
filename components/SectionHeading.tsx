export function SectionHeading({
  eyebrow,
  title,
  kicker,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  kicker?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p
          className={`label-caps text-[11px] ${light ? "text-temple-saffron" : "text-tulsi-green"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-display text-[26px] font-semibold leading-[1.2] sm:text-[34px] md:text-[40px] ${light ? "text-sacred-cream" : "text-setu-indigo"}`}
      >
        {title}
      </h2>
      {kicker ? (
        <p
          className={`mt-4 text-[15px] leading-relaxed sm:text-base ${light ? "text-sacred-cream/80" : "text-ink-indigo/85"}`}
        >
          {kicker}
        </p>
      ) : null}
    </div>
  );
}
