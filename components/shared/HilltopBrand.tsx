/**
 * Hilltop Brand SVG Components
 * Reusable Africa-specific decorative elements for the Hilltop design system.
 */

/** Africa continent silhouette — used as a background watermark on dark sections */
export function AfricaWatermark({ className = '', opacity = 0.06 }: { className?: string; opacity?: number }) {
  return (
    <svg
      viewBox="0 0 360 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M 162 18
           C 178 10, 205 8, 232 12
           C 258 16, 280 26, 298 45
           C 316 63, 322 88, 318 112
           C 314 132, 325 152, 332 175
           C 339 198, 335 222, 348 244
           C 360 264, 357 290, 342 314
           C 327 337, 308 357, 285 374
           C 262 391, 235 404, 207 407
           C 180 410, 156 400, 134 383
           C 113 366, 97 342, 88 313
           C 80 287, 85 260, 90 234
           C 94 215, 76 193, 68 168
           C 60 144, 66 116, 78 91
           C 90 68, 108 49, 131 33
           C 148 20, 155 24, 162 18 Z"
        fill="white"
        fillOpacity={opacity}
      />
      {/* Horn of Africa detail */}
      <path
        d="M 318 112 C 332 120, 345 130, 348 144 C 340 138, 330 128, 318 112 Z"
        fill="white"
        fillOpacity={opacity * 0.8}
      />
    </svg>
  );
}

/** Kente-inspired diamond divider — a row of orange diamonds as a decorative section border */
export function KenteDivider({ color = '#F4A261', count = 8, className = '' }: { color?: string; count?: number; className?: string }) {
  const size = 8;
  const gap = 18;
  const width = count * gap;
  return (
    <svg
      width={width}
      height={size + 4}
      viewBox={`0 0 ${width} ${size + 4}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => (
        <rect
          key={i}
          x={i * gap + gap / 2 - size / 2}
          y={2}
          width={size}
          height={size}
          fill={color}
          fillOpacity={0.85}
          transform={`rotate(45 ${i * gap + gap / 2} ${size / 2 + 2})`}
        />
      ))}
    </svg>
  );
}

/** Orange vertical accent bar — used on left side of featured quotes or callout blocks */
export function AccentBar({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex-shrink-0 w-1 rounded-full ${className}`}
      style={{ backgroundColor: '#F4A261' }}
      aria-hidden
    />
  );
}

/** Location badge for Ghana or Rwanda */
export function LocationBadge({ country, city }: { country: 'GH' | 'RW'; city: string }) {
  const color = country === 'GH' ? '#1D3160' : '#F4A261';
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider"
      style={{ backgroundColor: `${color}20`, color, border: `1.5px solid ${color}40` }}
    >
      <span
        className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[8px] font-bold leading-none"
        style={{ backgroundColor: color }}
      >
        {country}
      </span>
      {city}
    </span>
  );
}

/** Section eyebrow label — small ALL-CAPS label with wide tracking */
export function Eyebrow({ children, color = '#F4A261', className = '' }: { children: React.ReactNode; color?: string; className?: string }) {
  return (
    <p
      className={`font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5 ${className}`}
      style={{ color }}
    >
      {children}
    </p>
  );
}
