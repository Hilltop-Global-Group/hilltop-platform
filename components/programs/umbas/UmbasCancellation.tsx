'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';

const penalties = [
  { window: '61–75 days before departure', retained: '15% of program fee retained' },
  { window: '31–60 days before departure', retained: '50% retained' },
  { window: 'Within 31 days of departure', retained: '100% retained (plus any committed non-refundable costs)' },
];

export default function UmbasCancellation() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Policy</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Cancellation{' '}
              <span className="relative inline-block whitespace-nowrap">
                Policy
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-gray-100 bg-white p-8 space-y-5">
            <p className="font-sans text-gray-700 leading-relaxed">
              The <strong>$500 deposit is non-refundable</strong>.
            </p>
            <p className="font-sans text-gray-700 leading-relaxed">
              All cancellations must be made in writing to your Hilltop account manager and may take up to 30
              days to process.
            </p>
            <div className="border-t border-gray-100 pt-6">
              <p className="font-serif font-bold mb-4" style={{ color: '#1D3160' }}>
                Penalties by timing before departure
              </p>
              <ul className="space-y-3">
                {penalties.map((p) => (
                  <li
                    key={p.window}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 font-sans text-sm border-b border-gray-50 pb-3 last:border-0"
                  >
                    <span className="text-gray-600">{p.window}</span>
                    <span className="font-semibold" style={{ color: '#1D3160' }}>
                      {p.retained}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
