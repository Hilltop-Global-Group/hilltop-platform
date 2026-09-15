'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { KenteDivider, AfricaWatermark } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';
import { bmccPartners } from '@/lib/bmcc-ghana-data';

export default function BMCCAcknowledgments() {
  return (
    <>
      {/* Partners / thanks */}
      <section className="py-20 sm:py-24 bg-gray-50/60 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <KenteDivider className="mb-6" count={5} />
            <p
              className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ color: '#F4A261' }}
            >
              With Gratitude
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-tight mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)' }}
            >
              They carried this on the BMCC side.
            </h2>
            <p className="font-sans text-gray-500 text-base leading-relaxed max-w-2xl mb-12">
              A program like this does not happen without institutional champions who are willing to
              back the idea and do the work alongside us. Our thanks to the BMCC team, and to the
              Hilltop team who executed and delivered on the ground.
            </p>
          </FadeIn>

          <div className="border-t border-gray-200 mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {bmccPartners.map((person, idx) => (
              <FadeIn key={person.name} delay={idx * 0.06}>
                <div className="border-l-2 pl-5" style={{ borderColor: '#F4A261' }}>
                  <p
                    className="font-serif font-bold text-base leading-snug mb-1"
                    style={{ color: '#1D3160' }}
                  >
                    {person.name}
                  </p>
                  <p className="font-sans text-gray-400 text-xs uppercase tracking-[0.15em]">
                    {person.role}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
        <AfricaWatermark
          className="absolute -right-20 -top-10 h-[140%] w-auto pointer-events-none hidden md:block"
          opacity={0.06}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28">
          <FadeIn>
            <div className="max-w-3xl">
              <KenteDivider className="mb-6" count={5} />
              <h2
                className="font-serif font-extrabold text-white leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
              >
                If you have a vision for your students on the African continent, let us bring it to
                life.
              </h2>
              <p className="font-sans text-white/70 text-lg leading-relaxed mb-10 max-w-2xl">
                We design and deliver faculty-led programs, internships, and custom experiential
                learning across Ghana, Rwanda, Kenya, and beyond. You bring the academic vision. We
                handle everything on the ground.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 font-sans font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300"
                  style={{ backgroundColor: '#F4A261', color: '#1D3160' }}
                >
                  Start the Conversation
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                </Link>
                <Link
                  href="/education"
                  className="inline-flex items-center gap-2 px-8 py-4 font-sans font-semibold text-xs uppercase tracking-[0.15em] border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                >
                  Explore Our Programs
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
