import { Check } from "lucide-react";

export function TrustBadge({
  children,
  onDark = false,
}: {
  children: string;
  onDark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
        onDark
          ? "border-tulsi-green/60 bg-tulsi-green/15 text-sacred-cream"
          : "border-tulsi-green/35 bg-tulsi-green/10 text-tulsi-green"
      }`}
    >
      <Check
        size={12}
        strokeWidth={1.75}
        aria-hidden
        className="text-tulsi-green"
      />
      {children}
    </span>
  );
}
