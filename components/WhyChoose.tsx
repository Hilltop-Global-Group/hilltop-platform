'use client';

import { motion } from 'framer-motion';
import { DecorativeUnderline } from './shared/HilltopBrand';

const differentiators = [
  'Community-Led Cultural Programming',
  'Project-Based Industry Placements',
  'Cross-Continental Professional Networks',
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

          {/* Left — mission text */}
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
              Our Mission Is to Shape the{' '}
              <span className="relative inline-block whitespace-nowrap">
                African Narrative
                <DecorativeUnderline />
              </span>
            </h2>

            <div className="border-l-2 pl-6 mb-8" style={{ borderColor: '#F4A261' }}>
              <p className="font-sans text-gray-700 text-base sm:text-lg leading-relaxed">
                Founded by Georgetown EMBA alumni with roots across the African continent, we bring firsthand cultural knowledge to every program we design. Our team lives and works in the communities where your students will learn.
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

          {/* Right — photo */}
          <motion.div
            className="relative overflow-hidden rounded-xl"
            style={{ minHeight: 420 }}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1D3160]/50 via-transparent to-transparent" />

            {/* Bottom caption */}
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <div className="border-t border-white/20 pt-4">
                <p className="font-sans text-white/60 text-xs uppercase tracking-widest mb-1">Our approach</p>
                <p className="font-serif font-bold text-white text-xl leading-snug">
                  We believe the story of this continent should be told by the people who know it best.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
