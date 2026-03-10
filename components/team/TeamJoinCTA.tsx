'use client';

import Link from 'next/link';
import FadeIn from '../FadeIn';
import { KenteDivider, AfricaWatermark, ArrowCTA } from '../shared/HilltopBrand';

export default function TeamJoinCTA() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
      {/* Africa watermark */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pr-8" aria-hidden>
        <AfricaWatermark className="w-72 h-auto" opacity={0.06} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <FadeIn>
          <KenteDivider className="mb-8" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
            Join Us
          </p>
          <h2
            className="font-serif font-extrabold text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Rediscover what<br className="hidden md:block" /> meaningful work looks like
          </h2>
          <p className="font-sans text-white/60 text-base max-w-xl leading-relaxed mb-10">
            At Hilltop, we combine passion with purpose. If you believe in the transformative power of Africa and global education, we want to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              Get in Touch
              <ArrowCTA />
            </Link>
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] pb-1 transition-colors duration-200"
              style={{ color: '#F4A261', borderBottom: '1px solid rgba(244,162,97,0.4)' }}
            >
              Our Story
              <ArrowCTA color="#F4A261" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
