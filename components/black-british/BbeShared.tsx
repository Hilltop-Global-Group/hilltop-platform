import { BBE_GOLD, BBE_NAVY, APPLY_URL, isApplyReady, images } from '@/lib/black-british-data';

/**
 * Labelled grey box standing in for a final photo.
 *
 * Once a real image lands, set `src` on the entry in lib/black-british-data.ts
 * and this renders the photo at the same aspect ratio with the same alt text.
 * Nothing else has to change.
 */
export function Placeholder({
  id,
  className = '',
  /**
   * Hero and the final band place this inside their own relative container with
   * an overlay on top, so a figure wrapper and a caption below would break the
   * layout. `bare` renders the image alone and pins the credit into the corner
   * instead of stacking it underneath.
   */
  bare = false,
}: {
  id: string;
  className?: string;
  bare?: boolean;
}) {
  const img = images[id];
  if (!img) return null;

  if (img.src) {
    const picture = (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={img.src}
        alt={img.alt}
        loading={bare ? 'eager' : 'lazy'}
        decoding="async"
        className={`w-full object-cover ${className}`}
        style={{ aspectRatio: bare ? undefined : img.ratio, objectPosition: img.position ?? 'center center' }}
      />
    );

    if (bare) {
      return (
        <>
          {picture}
          {img.credit && (
            <span
              className="absolute bottom-2 right-3 z-10 font-sans text-[9px] uppercase tracking-[0.14em] text-white/55"
            >
              {img.credit}
            </span>
          )}
        </>
      );
    }

    return (
      <figure className="m-0">
        {picture}
        {img.credit && (
          <figcaption
            className="font-sans text-[10px] uppercase tracking-[0.14em] mt-2"
            style={{ color: '#9C978E' }}
          >
            {img.credit}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Placeholder for ${img.subject}`}
      className={`w-full flex flex-col items-center justify-center text-center px-6 border border-dashed ${className}`}
      style={{ aspectRatio: img.ratio, backgroundColor: '#E8E6E1', borderColor: '#BFBCB5' }}
    >
      <span
        className="font-sans text-[11px] font-bold uppercase tracking-[0.22em]"
        style={{ color: BBE_NAVY }}
      >
        {img.id}
      </span>
      <span className="font-sans text-xs mt-2 max-w-[22rem]" style={{ color: '#6B6760' }}>
        {img.subject}
      </span>
    </div>
  );
}

/** Small gold eyebrow used above each section heading. */
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="font-sans text-[11px] font-bold uppercase tracking-[0.28em] mb-4"
      style={{ color: BBE_GOLD }}
    >
      {children}
    </p>
  );
}

/** Section heading in the display serif, with a short gold rule under it. */
export function SectionHeading({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <>
      <h2
        className="font-bbe leading-[1.08]"
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: light ? '#FFFFFF' : BBE_NAVY,
        }}
      >
        {children}
      </h2>
      <div className="h-[3px] w-14 mt-5 mb-8" style={{ backgroundColor: BBE_GOLD }} />
    </>
  );
}

type ApplyProps = {
  /** `solid` is navy on cream, `gold` is gold on navy, `outline` is a bordered ghost. */
  variant?: 'solid' | 'gold' | 'outline';
  className?: string;
  children?: React.ReactNode;
};

/**
 * Every Apply Now on the page.
 *
 * The destination is not confirmed yet, so while APPLY_URL is still the
 * placeholder this renders a disabled button rather than a link that goes
 * nowhere. That is deliberate: a dead Apply button is worse than an obviously
 * pending one, and it makes the missing piece visible in review.
 */
export function ApplyButton({ variant = 'solid', className = '', children }: ApplyProps) {
  const ready = isApplyReady();
  const label = children ?? 'Apply Now';

  const base =
    'inline-flex items-center justify-center px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.18em] transition-opacity duration-200';

  const style =
    variant === 'gold'
      ? { backgroundColor: BBE_GOLD, color: BBE_NAVY }
      : variant === 'outline'
        ? { border: `1px solid ${BBE_NAVY}`, color: BBE_NAVY }
        : { backgroundColor: BBE_NAVY, color: '#FFFFFF' };

  if (!ready) {
    return (
      <span
        className={`${base} opacity-50 cursor-not-allowed ${className}`}
        style={style}
        aria-disabled="true"
        title="Application link to be supplied"
      >
        {label}
      </span>
    );
  }

  return (
    <a
      href={APPLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} hover:opacity-90 ${className}`}
      style={style}
      data-analytics="bbe-apply"
    >
      {label}
    </a>
  );
}
