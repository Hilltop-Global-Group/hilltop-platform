const memberships = [
  {
    src: '/images/nafsa_logo_blue.png',
    alt: 'NAFSA: Association of International Educators',
    displayHeight: 72,
  },
  {
    src: '/images/forum-logo-final.png',
    alt: 'The Forum on Education Abroad',
    displayHeight: 140,
  },
];

interface MembershipBadgesProps {
  /** 'dark' for footer/dark backgrounds, 'light' for white/light sections */
  variant?: 'dark' | 'light';
  label?: string;
}

export default function MembershipBadges({
  variant = 'light',
  label = 'Proud Member of',
}: MembershipBadgesProps) {
  const isDark = variant === 'dark';

  return (
    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
      <span
        className={`font-sans text-xs font-semibold uppercase tracking-[0.2em] flex-shrink-0 ${
          isDark ? 'text-white/40' : 'text-gray-400'
        }`}
      >
        {label}
      </span>
      <div className="flex items-center gap-6 sm:gap-8">
        {memberships.map((m) => (
          <div
            key={m.alt}
            className={`flex items-center justify-center rounded ${
              isDark ? 'bg-white px-5 py-3' : ''
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={m.src}
              alt={m.alt}
              style={{ height: `${m.displayHeight}px`, width: 'auto', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
