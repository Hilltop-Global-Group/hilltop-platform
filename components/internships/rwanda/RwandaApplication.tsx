'use client';

import { QrCode, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, ArrowCTA, HighlightWord } from '@/components/shared/HilltopBrand';

const paymentTerms = [
  'A non-refundable deposit is required upon acceptance to secure your place. The remaining balance is due 45 days before departure.',
  'Hilltop offers flexible payment plans for participants who wish to spread payments across multiple installments.',
  'For details on pricing and payment options, please apply or contact our team to discuss what works best for you.',
  'All payments must be made before arrival in Rwanda.',
];

export default function RwandaApplication() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">

        <FadeIn>
          <KenteDivider className="mx-auto mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Applications Open
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-tight mb-10"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Apply to the{' '}
            <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
              Rwanda Program
              <DecorativeUnderline />
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="bg-gray-50 border border-gray-100 p-12 mb-10">
            <div className="w-48 h-48 mx-auto bg-white border border-gray-100 flex items-center justify-center mb-6">
              <QrCode size={120} style={{ color: '#1D3160' }} />
            </div>
            <p className="font-sans text-gray-500 font-semibold text-sm uppercase tracking-wider">Scan to apply</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-sans text-xl mb-6">
            <span className="text-gray-600">Application deadline:</span>{' '}
            <span className="font-bold" style={{ color: '#F4A261' }}>March 14, 2026</span>
          </p>
          <p className="font-sans text-gray-500 mb-10">
            Spots are limited. Early application is strongly advised.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-10 py-4 font-sans font-bold text-sm uppercase tracking-wider text-white transition-all duration-300 hover:opacity-90"
            style={{ backgroundColor: '#1D3160' }}
          >
            Apply Now
            <ArrowCTA />
          </a>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-16 border-t border-gray-200 pt-10 text-left">
            <h3 className="font-serif font-bold text-2xl mb-6" style={{ color: '#1D3160' }}>
              Payment Terms & Plan Options
            </h3>
            <div className="space-y-4">
              {paymentTerms.map((term, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center" style={{ backgroundColor: '#1D3160' }}>
                    <Check size={12} className="text-white" strokeWidth={3} />
                  </div>
                  <span className="font-sans text-gray-600 text-sm leading-relaxed">{term}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
