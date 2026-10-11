'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import { CANCELLATION_NOTES, cancellationTiers } from '@/lib/ghana-2027-data';

export default function Ghana2027Cancellation() {
  return (
    <section id="cancellation" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Policy</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Cancellation and Refund{' '}
              <span className="relative inline-block whitespace-nowrap">
                Policy
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="space-y-4 mb-10">
          {cancellationTiers.map((tier, i) => (
            <FadeIn key={tier.window} delay={0.07 * i}>
              <div className="border border-gray-100 bg-gray-50/60 p-6">
                <p className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                  {tier.window}
                </p>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">{tier.outcome}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div
            className="border-l-4 p-6"
            style={{ borderColor: '#F4A261', backgroundColor: '#FFF8F1' }}
          >
            <ul className="space-y-2">
              {CANCELLATION_NOTES.map((note) => (
                <li key={note} className="font-sans text-gray-700 text-sm leading-relaxed">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
