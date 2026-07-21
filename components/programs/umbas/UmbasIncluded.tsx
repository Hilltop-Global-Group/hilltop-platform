'use client';

import { Check, X } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import { umbasIncluded, umbasNotIncluded } from '@/lib/umbas-ghana-2027';

export default function UmbasIncluded() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Coverage</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              What&apos;s{' '}
              <span className="relative inline-block whitespace-nowrap">
                Included
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="border border-gray-100 bg-white p-8 h-full">
              <h3 className="font-serif font-extrabold text-xl mb-6" style={{ color: '#1D3160' }}>
                Included
              </h3>
              <ul className="space-y-4">
                {umbasIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-gray-600 text-sm leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center bg-[#1D3160] text-white mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border border-gray-100 bg-white p-8 h-full">
              <h3 className="font-serif font-extrabold text-xl mb-6" style={{ color: '#1D3160' }}>
                Not Included
              </h3>
              <ul className="space-y-4">
                {umbasNotIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-gray-600 text-sm leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center bg-gray-200 text-gray-500 mt-0.5">
                      <X size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
