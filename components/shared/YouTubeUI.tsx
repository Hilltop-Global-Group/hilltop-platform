import Image from 'next/image';

export const YT = {
  bg: '#0f0f0f',
  surface: '#212121',
  surfaceHover: '#272727',
  text: '#f1f1f1',
  textMuted: '#aaaaaa',
  link: '#3ea6ff',
  red: '#ff0000',
} as const;

export function YouTubePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 68 48" className={className} aria-hidden>
      <path
        d="M66.52 7.74a8.18 8.18 0 0 0-5.76-5.78C55.79.13 34 0 34 0S12.21.13 7.24 1.96A8.18 8.18 0 0 0 1.48 7.74 86.6 86.6 0 0 0 0 24a86.6 86.6 0 0 0 1.48 16.26 8.18 8.18 0 0 0 5.76 5.78C12.21 47.87 34 48 34 48s21.79-.13 26.76-1.96a8.18 8.18 0 0 0 5.76-5.78A86.6 86.6 0 0 0 68 24a86.6 86.6 0 0 0-1.48-16.26Z"
        fill="#f03"
      />
      <path d="M45 24 27 14v20Z" fill="#fff" />
    </svg>
  );
}

export function HilltopChannelAvatar({ size = 24 }: { size?: number }) {
  return (
    <div
      className="rounded-full overflow-hidden flex-shrink-0 bg-white flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <Image
        src="/logos/logo.png"
        alt="Hilltop Global Group"
        width={size}
        height={size}
        className="object-contain p-0.5"
      />
    </div>
  );
}

export function HilltopChannelRow({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 min-w-0 ${className}`}>
      <HilltopChannelAvatar size={36} />
      <div className="min-w-0">
        <p className="font-sans text-sm font-medium truncate" style={{ color: YT.text }}>
          Hilltop Global Group
        </p>
        <p className="font-sans text-xs truncate" style={{ color: YT.textMuted }}>
          BMCC Ghana · 3-part series
        </p>
      </div>
    </div>
  );
}
