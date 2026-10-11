'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import { COST_NOTES, paymentTerms, program } from '@/lib/ghana-2027-data';

export default function Ghana2027Cost() {
  return (
    <section id="cost" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Investment</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Cost, Deposit and Payment{' '}
              <span className="relative inline-block whitespace-nowrap">
                Terms
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="border border-gray-100 bg-gray-50/60 p-8 text-center">
              <p className="font-sans text-sm text-gray-500 mb-2 uppercase tracking-wider">Program fee</p>
              <p className="font-serif font-extrabold text-4xl" style={{ color: '#1D3160' }}>
                {program.feeLabel}
              </p>
              <p className="font-sans text-gray-500 text-sm mt-2">per participant</p>
            </div>
            <div className="border border-gray-100 bg-gray-50/60 p-8 text-center">
              <p className="font-sans text-sm text-gray-500 mb-2 uppercase tracking-wider">Deposit</p>
              <p className="font-serif font-extrabold text-4xl" style={{ color: '#F4A261' }}>
                {program.depositLabel}
              </p>
              <p className="font-sans text-gray-500 text-sm mt-2">
                due on acceptance, secures your place
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            className="border-l-4 p-6 mb-12"
            style={{ borderColor: '#F4A261', backgroundColor: '#FFF8F1' }}
          >
            <ul className="space-y-2">
              {COST_NOTES.map((note) => (
                <li key={note} className="font-sans text-gray-700 text-sm leading-relaxed">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h3 className="font-serif font-extrabold text-2xl mb-6" style={{ color: '#1D3160' }}>
            Payment terms
          </h3>
        </FadeIn>

        <div className="space-y-4">
          {paymentTerms.map((term, i) => (
            <FadeIn key={term.label} delay={0.05 * i}>
              <div className="flex items-start gap-4 border border-gray-100 bg-gray-50/60 p-6">
                <span
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center font-serif font-extrabold text-sm text-white"
                  style={{ backgroundColor: '#1D3160' }}
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-serif font-bold text-lg mb-1" style={{ color: '#1D3160' }}>
                    {term.label}
                  </p>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed">{term.detail}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
