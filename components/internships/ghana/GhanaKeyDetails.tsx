'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';

const details = [
  { label: 'Applications Open:', value: 'October 31, 2025', accent: false },
  { label: 'Applications Close:', value: 'March 14, 2026', accent: true },
  { label: 'Pre-departure Sessions:', value: 'June 15 – 17, 2026', accent: false },
  { label: 'Internship Dates:', value: 'June 22 – July 17, 2026', accent: false },
  { label: 'Cost (Full In-Country, 4 weeks):', value: '$6,050', accent: false, large: true },
  { label: 'Cost (Hybrid, 3 weeks):', value: '$5,250', accent: true, large: true },
];

export default function GhanaKeyDetails() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Details</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Key{' '}
              <span className="relative inline-block whitespace-nowrap">
                Details
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {details.map((item, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="border border-gray-100 bg-gray-50/60 p-6">
                <p className="font-sans text-sm text-gray-500 mb-2">{item.label}</p>
                <p
                  className={`font-serif font-extrabold ${item.large ? 'text-2xl' : 'text-xl'}`}
                  style={{ color: item.accent ? '#F4A261' : '#1D3160' }}
                >
                  {item.value}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
