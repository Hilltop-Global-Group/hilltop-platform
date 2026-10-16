'use client';

import { ExternalLink } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import {
  FUNDING_CREDIT_CALLOUT,
  FUNDING_INSTALLMENTS_NOTE,
  FUNDING_INTRO,
  funders,
  type ApplicationWindowState,
} from '@/lib/ghana-2027-data';
import Ghana2027ApplyButton from './Ghana2027ApplyButton';
import { useApplicationWindow } from './useApplicationWindow';

interface Props {
  state: ApplicationWindowState;
}

export default function Ghana2027Funding({ state: serverState }: Props) {
  const { state } = useApplicationWindow(serverState);
  return (
    <section id="funding" className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-12">
            <Eyebrow className="text-center">Scholarships and Aid</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Funding Your{' '}
              <span className="relative inline-block whitespace-nowrap">
                Internship
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-sans text-gray-700 text-lg leading-relaxed mb-10">{FUNDING_INTRO}</p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            className="border-l-4 p-6 mb-12"
            style={{ borderColor: '#F4A261', backgroundColor: '#FFF8F1' }}
          >
            <p className="font-sans text-gray-700 text-sm leading-relaxed">{FUNDING_CREDIT_CALLOUT}</p>
          </div>
        </FadeIn>

        <div className="space-y-5 mb-12">
          {funders.map((funder, i) => (
            <FadeIn key={funder.name} delay={0.05 * i}>
              <div className="border border-gray-100 bg-white p-7 h-full transition-colors duration-300 hover:border-[#F4A261]/40">
                <h3 className="font-serif font-extrabold text-xl mb-3" style={{ color: '#1D3160' }}>
                  {funder.url ? (
                    <a
                      href={funder.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-start gap-2 hover:underline"
                      style={{ color: '#1D3160' }}
                    >
                      {funder.name}
                      <ExternalLink
                        size={15}
                        className="mt-1 flex-shrink-0"
                        style={{ color: '#F4A261' }}
                        aria-hidden
                      />
                    </a>
                  ) : (
                    funder.name
                  )}
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">{funder.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="border border-gray-100 bg-white p-7 mb-12">
            <p className="font-sans text-gray-700 text-sm leading-relaxed">
              {FUNDING_INSTALLMENTS_NOTE}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="text-center">
            <Ghana2027ApplyButton state={state} mode="anchor" variant="primary" size="lg" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
