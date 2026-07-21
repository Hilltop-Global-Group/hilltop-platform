'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';

const timeline = [
  {
    label: '$500 non-refundable deposit to confirm your spot',
    date: 'Due [date TBC]',
  },
  {
    label: 'Recommended installments of ~$350/month thereafter',
    date: '[start date TBC] – [end date TBC]',
  },
  {
    label: 'Final balance due no later than 45 days before departure',
    date: 'Due [date TBC]',
  },
];

export default function UmbasPricing() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Investment</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Pricing &amp;{' '}
              <span className="relative inline-block whitespace-nowrap">
                Payment
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="border border-gray-100 bg-white p-8 text-center">
              <p className="font-sans text-sm text-gray-500 mb-2 uppercase tracking-wider">Program cost</p>
              <p className="font-serif font-extrabold text-4xl" style={{ color: '#1D3160' }}>
                $2,950
              </p>
              <p className="font-sans text-gray-500 text-sm mt-2">per participant</p>
            </div>
            <div className="border border-gray-100 bg-white p-8 text-center">
              <p className="font-sans text-sm text-gray-500 mb-2 uppercase tracking-wider">Deposit</p>
              <p className="font-serif font-extrabold text-4xl" style={{ color: '#F4A261' }}>
                $500
              </p>
              <p className="font-sans text-gray-500 text-sm mt-2">non-refundable — secures your spot</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div
            className="border-l-4 p-6 mb-10"
            style={{ borderColor: '#F4A261', backgroundColor: '#FFF8F1' }}
          >
            <p className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
              How billing works
            </p>
            <p className="font-sans text-gray-700 text-sm leading-relaxed">
              Hilltop Global Group contracts directly with the University of Miami Black Alumni Society, but
              each participant pays their own invoice individually. Every participant receives one invoice for
              the full $2,950 and may make multiple payments toward it over time until it&apos;s paid in full.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <h3 className="font-serif font-extrabold text-xl mb-6" style={{ color: '#1D3160' }}>
            Suggested payment timeline
          </h3>
          <div className="space-y-4 mb-8">
            {timeline.map((step, i) => (
              <div
                key={step.label}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border border-gray-100 bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-7 h-7 flex items-center justify-center font-serif font-bold text-sm text-white"
                    style={{ backgroundColor: '#1D3160' }}
                  >
                    {i + 1}
                  </span>
                  <p className="font-sans text-gray-700 text-sm leading-relaxed">{step.label}</p>
                </div>
                <p className="font-sans text-xs font-semibold uppercase tracking-wider sm:text-right pl-10 sm:pl-0" style={{ color: '#F4A261' }}>
                  {step.date}
                </p>
              </div>
            ))}
          </div>
          <p className="font-sans text-gray-500 text-sm leading-relaxed">
            Note: pricing is based on a minimum of 20 participants. If enrollment falls below 20, per-person
            cost may be adjusted and a revised invoice issued.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
