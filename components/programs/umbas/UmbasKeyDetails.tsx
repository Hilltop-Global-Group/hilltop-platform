'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import UmbasRegisterButton from './UmbasRegisterButton';

const details = [
  { label: 'Destination', value: 'Accra & Cape Coast, Ghana', accent: false },
  { label: 'Dates', value: 'March 6–12, 2027 (7 days, 6 nights)', accent: false },
  { label: 'Who', value: 'UMBAS students and alumni (min. 20 participants)', accent: false },
  { label: 'Accommodation', value: '4-star hotel — Lancaster Hotel, Accra (or similar)', accent: false },
  { label: 'Program cost', value: '$2,950 per participant', accent: true, large: true },
  { label: 'To secure a spot', value: '$500 non-refundable deposit', accent: true, large: true },
];

export default function UmbasKeyDetails() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50/60">
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

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {details.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.06}>
              <div className="border border-gray-100 bg-white p-6 h-full">
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

        <FadeIn delay={0.3}>
          <div className="text-center">
            <UmbasRegisterButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
