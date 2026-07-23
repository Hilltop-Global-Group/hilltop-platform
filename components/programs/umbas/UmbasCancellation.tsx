'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';

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
              All cancellations must be submitted in writing to your Hilltop account manager and may take up to
              30 days to process.
            </p>
            <div className="border-t border-gray-100 pt-6 space-y-4">
              <div className="border border-gray-100 bg-gray-50/60 p-5">
                <p className="font-serif font-bold mb-2" style={{ color: '#1D3160' }}>
                  Cancellations 45 or more days before departure
                </p>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  The $500 deposit is forfeited; any additional payments made may be refunded, less any
                  non-refundable costs already committed on your behalf.
                </p>
              </div>
              <div className="border border-gray-100 bg-gray-50/60 p-5">
                <p className="font-serif font-bold mb-2" style={{ color: '#1D3160' }}>
                  Cancellations within 45 days of departure
                </p>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">
                  100% of the program fee is non-refundable (the final balance is due at this point).
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
