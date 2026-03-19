'use client';

import { Mail } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow, ArrowCTA } from '@/components/shared/HilltopBrand';

export default function GhanaContact() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <FadeIn>
          <Eyebrow className="text-center">Get in Touch</Eyebrow>
          <h2
            className="font-serif font-extrabold mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
          >
            <span className="relative inline-block whitespace-nowrap">
              Questions?
              <DecorativeUnderline />
            </span>
          </h2>
          <KenteDivider className="mx-auto mt-4 mb-8" />
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-sans text-xl text-gray-700 mb-4">
            We&apos;d love to help you decide if this program is a good fit.
          </p>
          <p className="font-sans text-lg text-gray-500 mb-10">
            Reach our team anytime and we will get back to you as soon as possible.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href="mailto:support@hilltopglobalgroup.com"
            className="group inline-flex items-center gap-3 px-10 py-4 font-serif font-extrabold text-lg text-white transition-colors duration-300 hover:opacity-90 bg-[#F4A261]"
          >
            <Mail size={22} />
            support@hilltopglobalgroup.com
            <ArrowCTA />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
