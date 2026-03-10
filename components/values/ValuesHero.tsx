'use client';

import { motion } from 'framer-motion';
import { AfricaWatermark, DecorativeUnderline } from '../shared/HilltopBrand';

export default function ValuesHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
      {/* Background photo */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2025/09/performance-e1759310784853.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#080f1c]/85 via-[#080f1c]/55 to-[#080f1c]/70" />
      </div>

      {/* Africa watermark */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-12" aria-hidden>
        <AfricaWatermark className="w-64 md:w-80 h-auto" opacity={0.07} />
      </div>

      {/* Orange kente accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#F4A261' }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.p
          className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5"
          style={{ color: '#F4A261' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who We Are
        </motion.p>
        <motion.h1
          className="font-serif font-extrabold text-white leading-none"
          style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Mission &{' '}
          <span className="relative inline-block whitespace-nowrap">
            Values
            <DecorativeUnderline />
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
