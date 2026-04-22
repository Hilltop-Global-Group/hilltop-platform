'use client';

import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { KenteDivider, DecorativeUnderline, ArrowCTA } from '../shared/HilltopBrand';
import Link from 'next/link';
import DestinationFlag from '../shared/DestinationFlag';
import { focalCountryDetailPath } from '@/lib/focal-destinations-data';

const highlights = [
  'Contact hours and credit alignment co-designed with your faculty',
  'End-to-end logistics with dedicated on-site coordinators',
  'Curated industry visits, institutional briefings, and cultural immersions',
  'Deliverable-based projects across vetted host organizations',
];

export default function Partnership() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo: framed with margin, shadow, accent corner, animation */}
          <motion.div
            className="relative order-1"
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative overflow-hidden shadow-xl" style={{ minHeight: 480 }}>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('/images/intern.JPG')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="px-5 py-4" style={{ backgroundColor: 'rgba(8,15,28,0.72)', backdropFilter: 'blur(6px)' }}>
                  <p className="text-white font-serif font-bold text-base leading-snug">
                    University Partnership Programs
                  </p>
                  <p className="text-white/60 text-sm mt-1">Fully managed education abroad in Africa</p>
                </div>
              </div>
            </div>
            {/* Accent corner detail */}
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-l-[3px] border-b-[3px]" style={{ borderColor: '#F4A261' }} />
          </motion.div>

          {/* Text: right column */}
          <div className="order-2">
            <FadeIn>
              <KenteDivider className="mb-8" />
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
                UNIVERSITY PARTNERSHIPS
              </p>
              <h2
                className="font-serif font-extrabold text-black leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                University{' '}
                <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
                  Partnerships
                  <DecorativeUnderline color="#F4A261" />
                </span>
              </h2>
              <p className="font-sans text-gray-600 text-base leading-relaxed mb-4">
                Hilltop does not hand your faculty a pre-packaged itinerary. We co-create programs from the ground up: aligning contact hours with your curriculum, sourcing industry partners aligned with your learning objectives, and embedding your students within Africa&apos;s professional ecosystems.
              </p>
              <p className="font-sans text-gray-600 text-base leading-relaxed mb-8">
                Your institution provides the academic framework. Hilltop provides the continent, the access, and the operational infrastructure to make it rigorous, safe, and academically meaningful. Students return with deliverables, professional networks, and cross-cultural competencies that show up on resumes, not just in reflection journals.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-3 mb-10">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center" style={{ backgroundColor: '#1D3160' }}>
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="font-sans text-gray-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mb-8">
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">
                  Focal Destinations
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { code: 'GH', label: 'Ghana' },
                    { code: 'RW', label: 'Rwanda' },
                    { code: 'NG', label: 'Nigeria' },
                    { code: 'KE', label: 'Kenya' },
                    { code: 'NA', label: 'Namibia' },
                    { code: 'ZA', label: 'South Africa' },
                  ].map((loc) => (
                    <Link
                      key={loc.label}
                      href={focalCountryDetailPath(loc.code)}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-gray-200 text-xs font-sans text-gray-600 transition-colors hover:bg-gray-50 hover:border-gray-300"
                    >
                      <DestinationFlag code={loc.code} label={loc.label} size="sm" />
                      {loc.label}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] border-b pb-1 transition-colors duration-200"
                style={{ color: '#080f1c', borderColor: '#080f1c' }}
              >
                Design with Hilltop
                <ArrowCTA />
              </Link>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
