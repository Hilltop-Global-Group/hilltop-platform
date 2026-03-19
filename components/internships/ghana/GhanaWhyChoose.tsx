'use client';

import { Check } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, Eyebrow } from '@/components/shared/HilltopBrand';

const reasons = [
  {
    title: 'Regional hub for finance & entrepreneurship',
    description:
      'Accra is a leading West African center for startups, finance and growing tech ecosystems.',
  },
  {
    title: 'Strong democratic governance & youthful population',
    description:
      'Stable institutions and a young workforce create high-impact internship opportunities.',
  },
  {
    title: 'Hospitality and cultural vibrancy',
    description:
      'Warm communities, music and festivals enrich learning and cultural immersion.',
  },
  {
    title: 'Opportunities in fintech, agribusiness & creative industries',
    description:
      'Wide-ranging placements across sectors where Ghana is rapidly innovating.',
  },
];

export default function GhanaWhyChoose() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <Eyebrow>Why Ghana</Eyebrow>
          <KenteDivider className="mb-10" />
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="border border-gray-100 bg-white p-8 transition-colors duration-300 hover:border-[#F4A261]/40">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center bg-[#1D3160] text-white">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <div>
                    <h3
                      className="font-serif font-extrabold text-xl mb-3"
                      style={{ color: '#1D3160' }}
                    >
                      {reason.title}
                    </h3>
                    <p className="font-sans text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
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
