'use client';

import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { KenteDivider, DecorativeUnderline, ArrowCTA } from '../shared/HilltopBrand';
import Link from 'next/link';

const highlights = [
  'Itineraries aligned to your curriculum and learning objectives',
  'Full in-country logistics from arrival to departure',
  'Curated business and cultural visits with local partners',
  'Student consulting project sourcing and coordination',
];

export default function Partnership() {
  return (
    <section className="bg-white overflow-hidden">
      {/* GlobalGlimpse "Beyond the Beaten Path" layout:
          Full-width photo left (~55%), text right (~45%).
          Mobile: image first (full width), text below. */}
      <div className="flex flex-col lg:flex-row min-h-[600px]">

        {/* Photo — full height, left column */}
        <motion.div
          className="relative w-full lg:w-[55%] flex-shrink-0 order-1"
          style={{ minHeight: 340 }}
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080f1c]/20" />
        </motion.div>

        {/* Text — right column */}
        <div className="w-full lg:w-[45%] flex-shrink-0 order-2 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-20" style={{ backgroundColor: '#ffffff' }}>
          <FadeIn>
            <KenteDivider className="mb-8" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              Education Programs
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
              Hilltop partners with universities to design and deliver turnkey study abroad experiences across Africa. We handle everything from accommodation and logistics to curated business visits and student consulting projects, so your faculty can focus on teaching.
            </p>
            <p className="font-sans text-gray-600 text-base leading-relaxed mb-8">
              Students who engage directly with African businesses and communities return with practical skills, sharpened cross-cultural awareness, and a fundamentally changed understanding of the continent.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-3 mb-10">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center"
                    style={{ backgroundColor: '#1D3160' }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-sans text-gray-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] border-b pb-1 transition-colors duration-200"
              style={{ color: '#080f1c', borderColor: '#080f1c' }}
            >
              Partner With Us
              <ArrowCTA />
            </Link>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
