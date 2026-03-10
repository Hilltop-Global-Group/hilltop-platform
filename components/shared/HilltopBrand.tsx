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

/**
 * DecorativeUnderline — a GlobalGlimpse-style SVG brushstroke underline.
 * Wrap a key word in a `relative inline-block` span and place this just after the text.
 * Example:
 *   <span className="relative inline-block whitespace-nowrap">
 *     Learning<DecorativeUnderline />
 *   </span>
 */
export function DecorativeUnderline({
  color = '#F4A261',
  className = '',
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden
      className={`absolute left-0 bottom-[-6px] w-full pointer-events-none ${className}`}
    >
      {/* Two staggered wavy strokes — the top one slightly thinner for a brushstroke feel */}
      <path
        d="M 2 8 C 30 3, 60 11, 100 7 C 140 3, 170 10, 198 6"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M 4 10 C 40 6, 80 12, 120 9 C 155 6, 180 11, 197 8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
    </svg>
  );
}

/**
 * SectionBrushstroke — a large abstract flowing arc used as a background
 * decorative element in content sections (inspired by GlobalGlimpse's
 * "We Have Stories That Inspire" section treatment).
 * Place it as an absolutely-positioned child inside a relative section.
 */
export function SectionBrushstroke({
  color = '#F4A261',
  opacity = 0.05,
  className = '',
  flip = false,
}: {
  color?: string;
  opacity?: number;
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 800 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      className={`absolute pointer-events-none ${className}`}
    >
      {/* Large sweeping arc — primary stroke */}
      <path
        d="M -60 350 C 80 200, 280 50, 500 120 C 680 180, 750 320, 860 280"
        stroke={color}
        strokeWidth="120"
        strokeLinecap="round"
        fill="none"
        opacity={opacity}
      />
      {/* Secondary thinner arc for depth */}
      <path
        d="M -40 380 C 100 220, 300 80, 520 150 C 700 210, 770 360, 880 310"
        stroke={color}
        strokeWidth="40"
        strokeLinecap="round"
        fill="none"
        opacity={opacity * 0.5}
      />
    </svg>
  );
}

/**
 * ArrowCTA — GlobalGlimpse-style animated arrow for CTA links.
 * The line extends 8px right on group-hover. Wrap parent `<a>` or `<button>` with `group`.
 * Example:
 *   <Link href="..." className="group inline-flex items-center gap-3 ...">
 *     Explore Our Programs <ArrowCTA />
 *   </Link>
 */
export function ArrowCTA({
  color = 'currentColor',
  className = '',
}: {
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center overflow-hidden ${className}`}
      aria-hidden
    >
      {/* Extending line */}
      <span
        className="inline-block h-px bg-current transition-all duration-300 group-hover:w-7 w-4"
        style={{ backgroundColor: color === 'currentColor' ? undefined : color }}
      />
      {/* Arrowhead */}
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 -ml-px"
        style={{ color }}
      >
        <path
          d="M1 5h8M5.5 1.5L9 5l-3.5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/**
 * DottedAfricaMap — Africa continent silhouette rendered as a dot-grid pattern.
 * Inspired by GlobalGlimpse's "Explore Our Destinations" decorative map.
 * Use as an absolute background element inside a relative section.
 */
export function DottedAfricaMap({
  color = '#1D3160',
  opacity = 0.08,
  className = '',
}: {
  color?: string;
  opacity?: number;
  className?: string;
}) {
  // A grid of dots clipped to an approximate Africa bounding shape
  const dots: { cx: number; cy: number }[] = [];
  const rows = 22;
  const cols = 16;
  const spacing = 14;

  // Rough Africa shape: defined by which (row, col) cells fall inside
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const inShape =
        (r <= 3 && c >= 5 && c <= 10) ||
        (r === 4 && c >= 4 && c <= 11) ||
        (r === 5 && c >= 3 && c <= 12) ||
        (r >= 6 && r <= 9 && c >= 2 && c <= 13) ||
        (r >= 10 && r <= 13 && c >= 2 && c <= 14) ||
        (r >= 14 && r <= 16 && c >= 3 && c <= 13) ||
        (r >= 17 && r <= 19 && c >= 4 && c <= 11) ||
        (r >= 20 && r <= 21 && c >= 5 && c <= 9);
      if (inShape) {
        dots.push({ cx: c * spacing + spacing / 2, cy: r * spacing + spacing / 2 });
      }
    }
  }

  const width = cols * spacing;
  const height = rows * spacing;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{ opacity }}
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r="2.8" fill={color} />
      ))}
    </svg>
  );
}

/**
 * HighlightWord — wraps a word/phrase in the GlobalGlimpse-style accent color.
 * Use inside headings: "We Have <HighlightWord>Stories</HighlightWord> That Inspire"
 */
export function HighlightWord({
  children,
  color = '#F4A261',
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return <span style={{ color }}>{children}</span>;
}
