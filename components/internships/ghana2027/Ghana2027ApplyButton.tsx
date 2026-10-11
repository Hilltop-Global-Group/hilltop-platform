'use client';

import { ArrowCTA } from '@/components/shared/HilltopBrand';
import {
  APPLICATION_ANCHOR,
  GOOGLE_FORM_URL,
  type ApplicationWindowState,
} from '@/lib/ghana-2027-data';

type Variant = 'primary' | 'accent' | 'outline';
type Size = 'sm' | 'lg' | 'xl';

interface Props {
  /** Resolved on the server from the data file and passed down. */
  state: ApplicationWindowState;
  /**
   * 'form' links out to the Google Form in a new tab.
   * 'anchor' scrolls to the application section on this page.
   */
  mode?: 'form' | 'anchor';
  variant?: Variant;
  size?: Size;
  label?: string;
  className?: string;
}

const base =
  'group inline-flex items-center justify-center gap-3 font-serif font-extrabold transition-opacity duration-300';

const sizes: Record<Size, string> = {
  sm: 'px-6 py-3 text-sm',
  lg: 'px-10 py-4 text-lg',
  xl: 'px-12 py-5 text-xl',
};

const variants: Record<Variant, string> = {
  primary: 'bg-[#1D3160] text-white hover:opacity-90',
  accent: 'bg-[#F4A261] text-white hover:opacity-90',
  outline:
    'bg-transparent border border-white/40 text-white font-sans font-semibold uppercase tracking-[0.15em] hover:border-white',
};

export default function Ghana2027ApplyButton({
  state,
  mode = 'form',
  variant = 'primary',
  size = 'lg',
  label = 'Apply Now',
  className = '',
}: Props) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  // Anchor mode always works: it just moves the reader to the application section,
  // which carries the authoritative open / closed messaging.
  if (mode === 'anchor') {
    return (
      <a href={`#${APPLICATION_ANCHOR}`} className={classes}>
        {label}
        <ArrowCTA />
      </a>
    );
  }

  if (state !== 'open') {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        className={`${base} ${sizes[size]} bg-gray-200 text-gray-500 cursor-not-allowed ${className}`}
      >
        {label}
      </button>
    );
  }

  return (
    <a
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
    >
      {label}
      <ArrowCTA />
    </a>
  );
}
