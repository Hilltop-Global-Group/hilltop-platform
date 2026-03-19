'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';

export default function GhanaProgramFormat() {
  return (
    <section className="py-20 sm:py-28 bg-[#080f1c]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Program Format</Eyebrow>
            <h2
              className="font-serif font-extrabold text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Two Flexible{' '}
              <span className="relative inline-block whitespace-nowrap">
                Options
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="border border-gray-700 bg-white/5 p-8">
              <div className="text-center mb-6">
                <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold bg-[#1D3160]">
                  1
                </div>
                <h3 className="font-serif font-extrabold text-xl text-white">
                  Option 1: Full In-Country
                </h3>
              </div>
              <p className="font-sans text-gray-300 text-center text-lg">
                Four weeks in-country (full duration abroad)
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="border border-gray-700 bg-white/5 p-8">
              <div className="text-center mb-6">
                <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold bg-[#F4A261]">
                  2
                </div>
                <h3 className="font-serif font-extrabold text-xl text-white">
                  Option 2: Hybrid Format
                </h3>
              </div>
              <p className="font-sans text-gray-300 text-center text-lg">
                Three weeks in-country + one week remote (pre-departure virtual component)
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-gray-400 font-sans mt-10 italic">
            This flexible structure allows participants to begin their internship
            remotely before joining the cohort on-site for the in-country phase.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
