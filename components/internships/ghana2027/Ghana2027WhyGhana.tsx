'use client';

import { Check } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, Eyebrow } from '@/components/shared/HilltopBrand';
import { whyGhana } from '@/lib/ghana-2027-data';

export default function Ghana2027WhyGhana() {
  return (
    <section id="why-ghana" className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <Eyebrow>Why Ghana</Eyebrow>
          <KenteDivider className="mb-10" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {whyGhana.map((reason, i) => (
            <FadeIn key={reason.title} delay={i * 0.1}>
              <div className="border border-gray-100 bg-white p-8 h-full transition-colors duration-300 hover:border-[#F4A261]/40">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center bg-[#1D3160] text-white">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-serif font-extrabold text-xl mb-3" style={{ color: '#1D3160' }}>
                      {reason.title}
                    </h3>
                    <p className="font-sans text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
