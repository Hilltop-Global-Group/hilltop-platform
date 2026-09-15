'use client';

import Image from 'next/image';
import { KenteDivider, SectionBrushstroke, HighlightWord } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';

export default function BMCCStory() {
  return (
    <section className="relative py-20 sm:py-28 bg-white border-t border-gray-100 overflow-hidden">
      <SectionBrushstroke
        color="#1D3160"
        opacity={0.025}
        className="w-[600px] -top-24 -right-40"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Narrative column */}
          <div className="lg:col-span-7">
            <FadeIn>
              <KenteDivider className="mb-6" count={5} />
              <p
                className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5"
                style={{ color: '#F4A261' }}
              >
                How It Happened
              </p>
              <h2
                className="font-serif font-extrabold text-black leading-tight mb-8"
                style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.9rem)' }}
              >
                It began with a campus visit and a question.
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6 font-sans text-gray-600 text-base leading-relaxed">
                <p>
                  Months before anyone boarded a plane, our CEO Phil Agbeko sat down with students
                  at the Borough of Manhattan Community College to talk about a proposed trip to
                  Ghana. The idea had started even earlier, when President Anthony E. Munroe shared
                  his vision for what Ghana could mean for BMCC students, and specifically for the
                  young men of the Urban Male Leadership Academy.
                </p>
                <p>
                  A vision is the easy part. Turning it into a program that actually runs, with
                  vetted accommodation, ground transport, cultural programming, academic content,
                  and a risk management plan behind every hour of it, is the work. That is what
                  Hilltop was brought in to do.
                </p>
                <p>
                  The group spent ten days in Ghana. They walked through Assin Manso and Cape Coast.
                  They crossed the canopy at Kakum. They sat with local hosts, ate in local homes,
                  and traced a history that most of them had only ever read about. The itinerary was
                  full. Nobody was a spectator.
                </p>
                <p className="font-medium" style={{ color: '#1D3160' }}>
                  Last month, that vision became a finished program. Successfully concluded, on the
                  ground, in Ghana.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Judy sidebar */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <div className="relative overflow-hidden mb-6" style={{ aspectRatio: '4 / 3' }}>
                <Image
                  src="/images/kakum.jpg"
                  alt="The canopy walkway at Kakum National Park, Ghana"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-[#080f1c]/15" />
              </div>

              <div className="border-l-4 pl-7 py-1" style={{ borderColor: '#F4A261' }}>
                <p
                  className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ color: '#F4A261' }}
                >
                  The Participant Everyone Remembers
                </p>
                <h3
                  className="font-serif font-bold leading-snug mb-4"
                  style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', color: '#1D3160' }}
                >
                  Judy crossed all seven bridges.
                </h3>
                <div className="space-y-4 font-sans text-gray-600 text-sm leading-relaxed">
                  <p>
                    Judy is 80 years old. She is both vision and hearing impaired. At Kakum National
                    Park she crossed all seven canopy bridges, 350 meters of rope and plank swaying
                    high above the rainforest floor. Others sat that one out.
                  </p>
                  <p>
                    This is a woman who marched alongside Dr. Martin Luther King Jr., and who is
                    still working toward her college degree today. With her smart glasses on and her
                    AI-powered hearing aids in, she did not miss a single thing on the itinerary.
                    Every activity, every day.
                  </p>
                  <p className="font-semibold" style={{ color: '#1D3160' }}>
                    Age is just a number, and Judy is proof of that.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Pull quote */}
        <FadeIn delay={0.15}>
          <div className="mt-20 pt-14 border-t border-gray-200 max-w-4xl">
            <blockquote
              className="font-serif font-bold text-black leading-snug mb-5"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}
            >
              &ldquo;Some found family. Some found a name. Some met a version of themselves for the{' '}
              <HighlightWord>first time</HighlightWord>.&rdquo;
            </blockquote>
            <p className="font-sans text-gray-400 text-xs uppercase tracking-[0.2em]">
              Ten days in Ghana, then we handed them the microphone
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
