'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AfricaWatermark, KenteDivider, ArrowCTA } from '../shared/HilltopBrand';

export default function TestimonialsCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
      {/* Orange kente top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#F4A261' }} />

      {/* Africa continent watermark . right side */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-8" aria-hidden>
        <AfricaWatermark className="w-72 md:w-96 h-auto" opacity={0.06} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-8">
            <KenteDivider count={6} color="#F4A261" />
          </div>

          <motion.p
            className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-6"
            style={{ color: '#F4A261' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Your Turn
          </motion.p>

          <motion.h2
            className="font-serif font-extrabold text-white leading-none mb-8"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Write Your Own<br className="hidden sm:block" /> Success Story
          </motion.h2>

          <motion.p
            className="font-sans text-white/60 text-base sm:text-lg leading-relaxed mb-12 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Join hundreds of students who have transformed their careers through
            Hilltop&apos;s programs in Ghana and Rwanda.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/internships"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              View Programs
              <ArrowCTA />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] pb-1 hover:opacity-70 transition-opacity duration-200"
              style={{ color: '#F4A261', borderBottom: '1px solid #F4A26160' }}
            >
              Contact Us
              <ArrowCTA />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
