'use client';

import Link from 'next/link';
import { ArrowCTA, KenteDivider } from '../shared/HilltopBrand';
import { isFeaturedCohortApplicationDeadlinePassed } from '@/lib/internship-application-status';

interface Props {
  variant?: 'top' | 'middle';
}

export default function InternshipCurrentCTABanner({ variant = 'top' }: Props) {
  const featuredClosed = isFeaturedCohortApplicationDeadlinePassed();

  if (variant === 'top') {
    return (
      <section className="py-10 border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-1" style={{ color: '#F4A261' }}>
              {featuredClosed ? 'Applications closed' : 'Applications Open'}
            </p>
            <p className="font-serif font-bold text-black text-lg leading-snug">
              {featuredClosed
                ? 'Summer 2026 Ghana and Rwanda internship applications are closed. Program pages still have full details.'
                : 'Summer 2026 internship programs across Ghana and Rwanda are now open.'}
            </p>
          </div>
          <Link
            href="/internships/current"
            className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-3.5 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white transition-opacity duration-200 hover:opacity-80"
            style={{ backgroundColor: '#F4A261' }}
          >
            View Internships
            <ArrowCTA color="#fff" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="flex justify-center mb-6">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
          Ready to Apply?
        </p>
        <h2
          className="font-serif font-extrabold text-black leading-none mb-4"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
        >
          Explore What&apos;s Available Right Now
        </h2>
        <p className="font-sans text-gray-500 text-base max-w-xl mx-auto mb-8">
          Browse currently open programs in Accra and Kigali and find your placement.
        </p>
        <Link
          href="/internships/current"
          className="inline-flex items-center gap-3 px-10 py-4 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white transition-opacity duration-200 hover:opacity-80"
          style={{ backgroundColor: '#1D3160' }}
        >
          View Current Internships
          <ArrowCTA color="#F4A261" />
        </Link>
      </div>
    </section>
  );
}
