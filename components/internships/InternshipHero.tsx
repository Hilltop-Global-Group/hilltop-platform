'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AfricaWatermark, DecorativeUnderline, ArrowCTA } from '../shared/HilltopBrand';

export default function InternshipHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
      {/* Background photo */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#080f1c]/80 via-[#080f1c]/50 to-[#080f1c]/70" />
      </div>

      {/* Africa continent watermark */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-12" aria-hidden>
        <AfricaWatermark className="w-64 md:w-80 h-auto" opacity={0.07} />
      </div>

      {/* Orange kente accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ backgroundColor: '#F4A261' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.p
          className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5"
          style={{ color: '#F4A261' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Professional Development Programs
        </motion.p>
        <motion.h1
          className="font-serif font-extrabold text-white leading-none mb-10"
          style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Internships in{' '}
          <span className="relative inline-block whitespace-nowrap">
            Africa
            <DecorativeUnderline />
          </span>
        </motion.h1>

        <motion.div
          className="flex flex-wrap gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/internships/current"
            className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
          >
            View Open Internships
            <ArrowCTA />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
