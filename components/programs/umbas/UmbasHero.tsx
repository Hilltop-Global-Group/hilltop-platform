'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AfricaWatermark, DecorativeUnderline } from '@/components/shared/HilltopBrand';
import UmbasRegisterButton from './UmbasRegisterButton';

export default function UmbasHero() {
  const [miamiLogoOk, setMiamiLogoOk] = useState(true);

  return (
    <section className="relative pt-28 pb-20 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('/images/ghana-hero.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#080f1c]/85 via-[#080f1c]/55 to-[#080f1c]/70" />
      </div>

      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-12" aria-hidden>
        <AfricaWatermark className="w-64 md:w-80 h-auto" opacity={0.07} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#F4A261' }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Light plate so full-color logos (navy Hilltop + orange/green Miami) remain readable */}
        <motion.div
          className="inline-flex flex-wrap items-center gap-4 mb-10 bg-white px-5 py-3 shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="inline-flex items-center">
            <img
              src="/logos/logo.png"
              alt="Hilltop Global Group"
              className="h-9 sm:h-10 w-auto"
            />
          </Link>
          <span className="text-gray-300 text-2xl font-light select-none" aria-hidden>
            |
          </span>
          {miamiLogoOk ? (
            <img
              src="/logos/umbas-miami.png"
              alt="University of Miami"
              className="h-9 sm:h-10 w-auto object-contain"
              onError={() => setMiamiLogoOk(false)}
            />
          ) : (
            <p className="font-serif font-bold text-sm leading-tight" style={{ color: '#005030' }}>
              University of Miami
              <span className="block font-sans font-normal text-xs tracking-wide mt-0.5" style={{ color: '#F47321' }}>
                Black Alumni Society
              </span>
            </p>
          )}
        </motion.div>

        <motion.p
          className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5"
          style={{ color: '#F4A261' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          UMBAS Program &middot; Accra &amp; Cape Coast, Ghana
        </motion.p>

        <motion.h1
          className="font-serif font-extrabold text-white leading-[1.05] mb-6 max-w-4xl"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4.2rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          University of Miami Black Alumni Society — Ghana Experiential{' '}
          <span className="relative inline-block whitespace-nowrap">
            Learning Trip
            <DecorativeUnderline />
          </span>
        </motion.h1>

        <motion.p
          className="font-sans text-white/65 text-base sm:text-lg mb-8 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A 7-day, 6-night immersion through Ghana&apos;s history, culture, and community for UMBAS students and alumni.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span
            className="inline-flex items-center px-4 py-2 font-sans text-sm font-semibold border"
            style={{ borderColor: '#F4A261', color: '#F4A261' }}
          >
            March 6–12, 2027
          </span>
          <UmbasRegisterButton variant="outline" size="sm" />
        </motion.div>
      </div>
    </section>
  );
}
