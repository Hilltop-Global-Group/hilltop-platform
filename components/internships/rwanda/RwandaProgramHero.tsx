'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AfricaWatermark, DecorativeUnderline, ArrowCTA } from '../../shared/HilltopBrand';

export default function RwandaProgramHero({
  applicationUrl,
  applicationStatus = 'open',
}: {
  applicationUrl?: string;
  applicationStatus?: 'open' | 'closed';
}) {
  const applicationsOpen = applicationStatus === 'open';
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('/images/kigali-hero.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#080f1c]/85 via-[#080f1c]/55 to-[#080f1c]/70" />
      </div>
      
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-12" aria-hidden>
        <AfricaWatermark className="w-64 md:w-80 h-auto" opacity={0.07} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#F4A261' }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Link
          href="/internships/current"
          className="group inline-flex items-center gap-2 font-sans text-sm text-white/60 hover:text-white transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={16} />
          Back to Current Internships
        </Link>

        {/* ALU + Hilltop collaboration banner moved to section below hero */}

        <motion.p
          className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5"
          style={{ color: '#F4A261' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Rwanda Program &middot; Kigali
        </motion.p>
        <motion.h1
          className="font-serif font-extrabold text-white leading-none mb-6"
          style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Rwanda Internship{' '}
          <span className="relative inline-block whitespace-nowrap">
            Program
            <DecorativeUnderline />
          </span>
        </motion.h1>

        <motion.p
          className="font-sans text-white/60 text-base mb-8 max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Interns gain access to ALU&apos;s innovation ecosystem, guest speakers, and selected campus facilities. Project-driven placements with African innovators and startups.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {applicationsOpen ? (
            <a
              href={applicationUrl || 'https://8xlyl7wsuni.typeform.com/to/ygqGReCF'}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              Apply Now
              <ArrowCTA />
            </a>
          ) : (
            <span className="inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white/45 border-b border-white/15 pb-1 cursor-default">
              Applications closed
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
}
