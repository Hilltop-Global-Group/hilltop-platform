'use client';

import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { KenteDivider, DecorativeUnderline } from '../shared/HilltopBrand';

export default function ProgramOverview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Photo — framed with spacing, shadow, and reveal animation */}
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
                    Embedded with real organizations, working on real projects.
                  </p>
                  <p className="text-white/60 text-sm mt-1">Accra, Ghana &amp; Kigali, Rwanda</p>
                </div>
              </div>
            </div>
            {/* Accent corner detail */}
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-l-[3px] border-b-[3px]" style={{ borderColor: '#F4A261' }} />
          </motion.div>

          {/* Text — right column */}
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
                  Students spend four weeks embedded in organizations across Accra or Kigali, working on project-based assignments with real deliverables. It enables emerging professionals to explore career interests, build networks, and develop globally relevant skills.
                </p>
                <p className="font-sans text-gray-600 text-base leading-relaxed">
                  Hilltop collaborates with leading partners such as <span className="font-semibold" style={{ color: '#1D3160' }}>African Leadership University (Rwanda)</span> and industry hosts across Africa to deliver high-impact placements combining professional work, mentorship, and cross-cultural learning.
                </p>
              </div>
            </FadeIn>

            {/* Quick stats */}
            <FadeIn delay={0.15}>
              <div className="grid grid-cols-3 divide-x divide-gray-200 border border-gray-100">
                {[
                  { value: '4', unit: 'weeks', label: 'in-country' },
                  { value: '2', unit: 'cities', label: 'Accra & Kigali' },
                  { value: '50+', unit: 'hosts', label: 'partner orgs' },
                ].map((stat, i) => (
                  <div key={i} className="text-center py-5 px-3">
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
