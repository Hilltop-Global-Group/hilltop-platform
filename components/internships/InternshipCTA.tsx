'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { AfricaWatermark, KenteDivider, ArrowCTA } from '../shared/HilltopBrand';

export default function InternshipCTA() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
      {/* Orange kente top accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#F4A261' }} />

      {/* Africa continent watermark: right side */}
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
            Ready to Apply
          </motion.p>

          <motion.h2
            className="font-serif font-extrabold text-white leading-none mb-8"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            Take the First Step<br className="hidden sm:block" /> Towards Africa
          </motion.h2>

          <motion.p
            className="font-sans text-white/60 text-base sm:text-lg leading-relaxed mb-12 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            Spaces in each cohort are limited. Reach out to learn what is currently
            available and start your application.
          </motion.p>

          {/* Contact info */}
          <motion.div
            className="flex flex-col gap-3 mb-12 border-t border-white/10 pt-10"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <a
              href="mailto:support@hilltopglobalgroup.com"
              className="font-sans text-white/60 hover:text-white text-sm transition-colors duration-200"
            >
              <span style={{ color: '#F4A261' }} className="font-semibold">Email →</span>
              {' '}support@hilltopglobalgroup.com
            </a>
            <a
              href="tel:+12024992284"
              className="font-sans text-white/60 hover:text-white text-sm transition-colors duration-200"
            >
              <span style={{ color: '#F4A261' }} className="font-semibold">Phone →</span>
              {' '}+1 202-499-2284
            </a>
          </motion.div>

          {/* CTA links */}
          <motion.div
            className="flex flex-wrap gap-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              Contact Us
              <ArrowCTA />
            </Link>
            <Link
              href="/testimonials"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] pb-1 hover:opacity-70 transition-opacity duration-200"
              style={{ color: '#F4A261', borderBottom: '1px solid #F4A26160' }}
            >
              Read Student Stories
              <ArrowCTA />
            </Link>
          </motion.div>

          {/* University trust line */}
          <motion.p
            className="font-sans text-white/30 text-xs uppercase tracking-[0.2em] mt-14"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Students from Georgetown · Howard · ALU · KNUST and beyond
          </motion.p>
        </div>
      </div>
    </section>
  );
}
