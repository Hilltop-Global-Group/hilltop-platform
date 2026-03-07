'use client';

import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const included = [
  'Pre-vetted accommodation (twin-share)',
  'Professional placement matching',
  'Leadership workshops and mentorship',
  'Cultural excursions and activities',
  'On-ground coordinator support',
  'Pre-departure orientation (virtual)',
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: photo */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{ minHeight: 420 }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1D3160]/70 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 right-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-white/15 border border-white/25">
                <p className="text-white text-sm font-semibold">4-week in-country program</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">All placements</p>
              <p className="text-white font-serif font-bold text-xl">Cohort-based. Structured. Supported.</p>
            </div>
          </motion.div>

          {/* Right: what's included + not included */}
          <div>
            <FadeIn>
              <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-8" style={{ color: '#1D3160' }}>
                Program Details
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">What's Included</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} strokeWidth={2.5} />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Not Included</p>
              <div className="space-y-2">
                {notIncluded.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <X size={18} className="flex-shrink-0 mt-0.5 text-gray-400" strokeWidth={2.5} />
                    <span className="text-gray-500 text-sm">{item}</span>
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
