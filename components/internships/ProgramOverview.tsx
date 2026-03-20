'use client';

import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { KenteDivider, DecorativeUnderline } from '../shared/HilltopBrand';

export default function ProgramOverview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo . framed with spacing, shadow, and reveal animation */}
          <motion.div
            className="relative overflow-hidden order-1"
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative overflow-hidden shadow-xl" style={{ minHeight: 460 }}>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('/images/hero-study-abroad.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="px-5 py-4"
                  style={{ backgroundColor: 'rgba(8,15,28,0.72)', backdropFilter: 'blur(6px)' }}
                >
                  <p className="text-white font-serif font-bold text-base leading-snug">
                    Structured placements. Real deliverables. Measurable outcomes.
                  </p>
                  <p className="text-white/60 text-sm mt-1">Accra, Ghana &amp; Kigali, Rwanda</p>
                </div>
              </div>
            </div>
            {/* Accent corner detail */}
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-l-[3px] border-b-[3px]" style={{ borderColor: '#F4A261' }} />
          </motion.div>

          {/* Text . right column */}
          <div className="order-2">
            <FadeIn>
              <KenteDivider className="mb-8" />
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
                How It Works
              </p>
              <h2
                className="font-serif font-extrabold text-black leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                How the{' '}
                <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
                  Program Works
                  <DecorativeUnderline color="#F4A261" />
                </span>
              </h2>
              <div className="space-y-4 mb-8">
                <p className="font-sans text-gray-600 text-base leading-relaxed">
                  Participants spend four weeks embedded in organizations across Accra or Kigali, contributing to structured, deliverable-based assignments alongside local teams. Each placement is designed to strengthen professional competencies, expand global networks, and deepen cross-cultural understanding through direct participation in Africa's professional ecosystems.
                </p>
                <p className="font-sans text-gray-600 text-base leading-relaxed">
                  Hilltop's 100+ vetted host organizations span fintech, agribusiness, healthcare, creative industries, and social enterprise. In Rwanda, students are paired with African Leadership University peers for collaborative learning. Every program includes pre-departure orientation, on-site mentorship, guided reflection sessions, and post-program impact documentation.
                </p>
              </div>
            </FadeIn>

            {/* Quick stats */}
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-3 divide-x divide-gray-200 border border-gray-100">
                {[
                  { value: '4', unit: 'weeks', label: 'in-country' },
                  { value: '2', unit: 'cities', label: 'GH & RW' },
                  { value: '50+', unit: 'hosts', label: 'partner orgs' },
                ].map((stat, i) => (
                  <div key={i} className="text-center py-5 px-2 sm:px-3">
                    <p className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                      {stat.value} <span className="text-sm font-normal text-gray-400">{stat.unit}</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
