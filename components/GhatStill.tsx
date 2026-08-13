/** Quiet ghat silhouette — a still, not a stock photograph. */
export function GhatStill({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 400"
      className={className}
      role="img"
      aria-label="Evening ghat: stone steps, a single diya, and the river"
    >
      <rect width="640" height="400" fill="#1B2A5B" />
      <rect width="640" height="210" fill="#16224a" />
      {/* far bank */}
      <path d="M0 168h640v12H0z" fill="#1B2A5B" />
      <path d="M40 150h28v18H40zm48 8h18v10H88zm220-14h36v22h-36zm280 6h44v16h-44z" fill="#243566" />
      {/* river */}
      <rect y="180" width="640" height="220" fill="#152048" />
      <path
        d="M0 210c80 18 140-8 220 4 90 14 150-16 240-4 70 10 120 4 180-8v178H0V210z"
        fill="#1a2754"
        opacity="0.9"
      />
      {/* reflected lamps */}
      <ellipse cx="168" cy="268" rx="6" ry="18" fill="#E38A29" opacity="0.35" />
      <ellipse cx="312" cy="290" rx="8" ry="22" fill="#E38A29" opacity="0.28" />
      <ellipse cx="470" cy="255" rx="5" ry="14" fill="#F6F1E4" opacity="0.2" />
      {/* ghat steps */}
      <path d="M0 232h640v14H0z" fill="#2a3a6e" />
      <path d="M0 246h640v12H0z" fill="#243566" />
      <path d="M0 258h640v12H0z" fill="#1e2e5c" />
      <path d="M0 270h640v16H0z" fill="#1B2A5B" />
      {/* diya on a step */}
      <g transform="translate(300 214)">
        <ellipse cx="20" cy="18" rx="16" ry="5" fill="#E38A29" opacity="0.5" />
        <path d="M6 16c2 8 26 8 28 0C32 10 8 10 6 16z" fill="#E38A29" />
        <path d="M20 4c4 4 3 9 0 12-3-3-4-8 0-12z" fill="#F6F1E4" />
      </g>
      {/* thin setu line across water */}
      <path
        d="M80 320c140-24 340-24 480 0"
        fill="none"
        stroke="#E38A29"
        strokeWidth="0.75"
        opacity="0.45"
      />
    </svg>
  );
}
