'use client';

import Link from 'next/link';
import Script from 'next/script';
import { Check, Clock } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import {
  KenteDivider,
  DecorativeUnderline,
  Eyebrow,
  ArrowCTA,
} from '@/components/shared/HilltopBrand';
import {
  APPLICATIONS_CLOSE_LABEL,
  APPLICATIONS_OPEN_LABEL,
  APPLICATION_ANCHOR,
  APPLICATION_INTRO,
  APPLICATION_FORM_EMBED_URL,
  APPLICATION_FORM_URL,
  APPLICATION_PRIVACY_NOTE,
  applicationChecklist,
  type ApplicationWindowState,
} from '@/lib/ghana-2027-data';
import Ghana2027ApplyButton from './Ghana2027ApplyButton';

interface Props {
  state: ApplicationWindowState;
  daysRemaining: number;
}

export default function Ghana2027Application({ state, daysRemaining }: Props) {
  const isOpen = state === 'open';
  const isClosed = state === 'closed';

  return (
    <section id={APPLICATION_ANCHOR} className="py-20 sm:py-28 bg-gray-50/60 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-12">
            <Eyebrow className="text-center">
              {isOpen ? 'Applications Open' : isClosed ? 'Applications Closed' : 'Applications Not Yet Open'}
            </Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Apply to Ghana{' '}
              <span className="relative inline-block whitespace-nowrap">
                2027
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        {isClosed ? (
          <FadeIn delay={0.1}>
            <div className="border border-gray-100 bg-white p-10 text-center">
              <p className="font-serif font-extrabold text-2xl mb-4" style={{ color: '#1D3160' }}>
                Applications are closed
              </p>
              <p className="font-sans text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
                Applications for the Ghana 2027 cohort closed on {APPLICATIONS_CLOSE_LABEL}. Get in touch
                and we will let you know when the next cycle opens.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 font-serif font-extrabold text-lg text-white bg-[#1D3160] hover:opacity-90 transition-opacity duration-300"
              >
                Contact Us
                <ArrowCTA />
              </Link>
            </div>
          </FadeIn>
        ) : (
          <>
            <FadeIn delay={0.1}>
              <p className="font-sans text-gray-700 text-lg leading-relaxed mb-10 text-center">
                {APPLICATION_INTRO}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="border border-gray-100 bg-white p-8 text-center mb-10">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">
                  Application deadline
                </p>
                <p
                  className="font-serif font-extrabold text-3xl sm:text-4xl"
                  style={{ color: '#F4A261' }}
                >
                  {APPLICATIONS_CLOSE_LABEL}
                </p>
                {daysRemaining > 0 && (
                  <p className="inline-flex items-center gap-2 font-sans text-sm text-gray-500 mt-4">
                    <Clock size={15} style={{ color: '#1D3160' }} aria-hidden />
                    {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} until applications close
                  </p>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border border-gray-100 bg-white p-8 mb-10">
                <h3 className="font-serif font-extrabold text-2xl mb-6" style={{ color: '#1D3160' }}>
                  What you&apos;ll need
                </h3>
                <ul className="space-y-4">
                  {applicationChecklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-sans text-gray-600 text-sm leading-relaxed"
                    >
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center bg-[#1D3160] text-white mt-0.5">
                        <Check size={12} strokeWidth={3} aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {isOpen && (
              <FadeIn delay={0.25}>
                <div className="border border-gray-100 bg-white p-4 sm:p-6 mb-10">
                  <iframe
                    data-tally-src={APPLICATION_FORM_EMBED_URL}
                    loading="lazy"
                    width="100%"
                    height={1100}
                    title="Ghana 2027 Internship Program application form"
                    className="w-full border-0"
                  />
                  <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
                  <p className="font-sans text-gray-500 text-xs mt-4 text-center">
                    Having trouble with the form?{' '}
                    <a
                      href={APPLICATION_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline"
                      style={{ color: '#1D3160' }}
                    >
                      Open it in a new tab
                    </a>
                    .
                  </p>
                </div>
              </FadeIn>
            )}

            <FadeIn delay={0.3}>
              <div className="text-center">
                {!isOpen && (
                  <p className="font-serif font-extrabold text-xl mb-6" style={{ color: '#1D3160' }}>
                    Applications open {APPLICATIONS_OPEN_LABEL}
                  </p>
                )}

                {!isOpen && (
                  <Ghana2027ApplyButton
                    state={state}
                    mode="form"
                    variant="primary"
                    size="xl"
                    className="w-full sm:w-auto"
                  />
                )}

                {!isOpen && (
                  <p className="font-sans text-gray-600 text-sm mt-6">
                    Want a reminder when the form goes live?{' '}
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-2 font-semibold underline"
                      style={{ color: '#1D3160' }}
                    >
                      Notify Me
                      <ArrowCTA />
                    </Link>
                  </p>
                )}

                <p className="font-sans text-gray-500 text-xs mt-8 max-w-md mx-auto leading-relaxed">
                  {APPLICATION_PRIVACY_NOTE}
                </p>
              </div>
            </FadeIn>
          </>
        )}
      </div>
    </section>
  );
}
