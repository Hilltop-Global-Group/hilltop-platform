'use client';

import { ShieldCheck } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import {
  AfricaWatermark,
  KenteDivider,
  DecorativeUnderline,
  Eyebrow,
} from '@/components/shared/HilltopBrand';
import { INSURANCE_INTRO, insuranceCoverage } from '@/lib/ghana-2027-data';

export default function Ghana2027Insurance() {
  return (
    <section id="insurance" className="relative py-20 sm:py-28 bg-[#080f1c] overflow-hidden">
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4"
        aria-hidden
      >
        <AfricaWatermark className="w-72 h-auto" opacity={0.05} />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Coverage</Eyebrow>
            <h2
              className="font-serif font-extrabold text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              <span className="relative inline-block whitespace-nowrap">
                Insurance
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6 mb-6" />
            <p className="font-sans text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
              {INSURANCE_INTRO}
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {insuranceCoverage.map((item, i) => (
            <FadeIn key={item} delay={0.06 * i}>
              <div className="flex items-start gap-4 border border-gray-700 bg-white/5 p-6 h-full">
                <span
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center"
                  style={{ backgroundColor: i % 2 === 0 ? '#1D3160' : '#F4A261' }}
                >
                  <ShieldCheck size={18} className="text-white" aria-hidden />
                </span>
                <p className="font-sans text-gray-200 text-sm leading-relaxed">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
