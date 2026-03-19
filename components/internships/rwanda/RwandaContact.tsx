'use client';

import { Mail } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, ArrowCTA } from '@/components/shared/HilltopBrand';

export default function RwandaContact() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">

        <FadeIn>
          <KenteDivider className="mx-auto mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Get in Touch
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-tight mb-6"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
              Questions?
              <DecorativeUnderline />
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-sans text-gray-600 text-xl mb-4">
            We&apos;d love to help you decide if this program is a good fit.
          </p>
          <p className="font-sans text-gray-500 text-lg mb-10">
            Reach our team anytime and we will get back to you as soon as possible.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href="mailto:support@hilltopglobalgroup.com"
            className="group inline-flex items-center gap-3 px-10 py-4 font-sans font-bold text-sm uppercase tracking-wider text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#F4A261' }}
          >
            <Mail size={20} />
            support@hilltopglobalgroup.com
            <ArrowCTA />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
