'use client';

import { motion } from 'framer-motion';
import { DecorativeUnderline } from './shared/HilltopBrand';

const differentiators = [
  'Deliverable-Based Placements',
  '100+ Vetted Cross-Industry Partners',
  'Forum-Aligned Program Standards',
];

export default function WhyChoose() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top label */}
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-10" style={{ color: '#F4A261' }}>
          Why Universities Choose Hilltop
        </p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left . mission text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <h2
              className="font-serif font-extrabold text-black leading-none mb-8"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              We Are of Africa. Not{' '}
              <span className="relative inline-block whitespace-nowrap">
                Visiting It.
                <DecorativeUnderline />
              </span>
            </h2>

            <div className="border-l-2 pl-6 mb-8" style={{ borderColor: '#F4A261' }}>
              <p className="font-sans text-gray-700 text-base sm:text-lg leading-relaxed">
                Founded by Georgetown Executive MBA alumni with 25+ years spanning the World Bank Group, Fortune 500 leadership, and international development, Hilltop combines deep diaspora insight with institutional credibility few firms can match. Our teams in Accra, Kigali, Nairobi, and London do not facilitate visits. We architect learning experiences grounded in Africa's professional ecosystems and institutional frameworks.
              </p>
            </div>

            <div className="space-y-4">
              {differentiators.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.45 }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1D3160' }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="font-sans text-gray-700 text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right . photo */}
          <motion.div
            className="relative overflow-hidden"
            style={{ minHeight: 420 }}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/images/we-believe.JPG')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1D3160]/50 via-transparent to-transparent" />

            {/* Bottom caption . localised dark overlay only on the text block */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div
                className="rounded-sm px-5 py-4"
                style={{ backgroundColor: 'rgba(8,15,28,0.72)', backdropFilter: 'blur(6px)' }}
              >
                <p className="font-sans text-white/60 text-xs uppercase tracking-widest mb-1">Our approach</p>
                <p className="font-serif font-bold text-white text-lg leading-snug">
                  Diaspora insight means cultural fluency and authentic access few firms can match. 1,000+ students served. Six countries. The access others cannot replicate.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
