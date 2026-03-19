'use client';

import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { KenteDivider, DecorativeUnderline } from '../shared/HilltopBrand';

const included = [
  'Pre-vetted accommodation with on-site coordination',
  'Deliverable-based placement matching',
  'Leadership workshops and mentorship',
  'Guided cultural immersions and reflection sessions',
  'On-ground coordinator support',
  'Comprehensive pre-departure orientation',
  'Airport pickup and group transport',
  'Credit documentation support',
];

const notIncluded = [
  'International flights',
  'Personal travel insurance',
  'Meals (unless specified)',
];

export default function ProgramDetails() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: photo . framed consistently */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative overflow-hidden shadow-xl" style={{ minHeight: 440 }}>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('/images/innovation-center.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1D3160]/60 via-transparent to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 font-sans text-white text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: '#F4A261' }}>
                  4-week in-country program
                </span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="px-5 py-4" style={{ backgroundColor: 'rgba(8,15,28,0.72)', backdropFilter: 'blur(6px)' }}>
                  <p className="text-white/60 text-xs uppercase tracking-widest mb-1">All placements</p>
                  <p className="text-white font-serif font-bold text-lg">Cohort-based. Deliverable-driven. Fully supported.</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-l-[3px] border-b-[3px]" style={{ borderColor: '#F4A261' }} />
          </motion.div>

          {/* Right: what's included + not included */}
          <div>
            <FadeIn>
              <KenteDivider className="mb-8" />
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
                What You Get
              </p>
              <h2
                className="font-serif font-extrabold text-black leading-tight mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                Program{' '}
                <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
                  Details
                  <DecorativeUnderline color="#F4A261" />
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">What&apos;s Included</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center" style={{ backgroundColor: '#1D3160' }}>
                      <Check size={12} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="font-sans text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border-t border-gray-100 pt-6">
                <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Not Included</p>
                <div className="space-y-2">
                  {notIncluded.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <X size={14} className="flex-shrink-0 mt-0.5 text-gray-300" strokeWidth={2.5} />
                      <span className="font-sans text-gray-400 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
