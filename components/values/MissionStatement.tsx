'use client';

import { motion } from 'framer-motion';
import { KenteDivider } from '../shared/HilltopBrand';

export default function MissionStatement() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <KenteDivider className="mb-8" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
            Our Mission
          </p>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <h2
              className="font-serif font-extrabold text-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)' }}
            >
              To expand global perspectives through{' '}
              <span style={{ color: '#F4A261' }}>authentic African experiences</span>.
            </h2>
            <div className="space-y-5 pt-2">
              <p className="font-sans text-gray-600 text-base leading-relaxed">
                Hilltop Global Group was founded on the belief that Africa's story is best told by those who live and work on the continent. We partner with U.S. universities and professionals to design immersive programs that create genuine exchange — not tourism.
              </p>
              <p className="font-sans text-gray-600 text-base leading-relaxed">
                Every program we run is rooted in relationships: with host organizations, local communities, and the students who return home transformed. Our mission is to make those connections possible at scale, with the rigor and care they deserve.
              </p>
              <div className="border-l-4 pl-5 pt-1" style={{ borderColor: '#F4A261' }}>
                <p className="font-serif font-bold text-gray-800 text-lg leading-snug">
                  "The continent's narrative belongs to those who know it best — and we are committed to making sure the world hears it."
                </p>
                <p className="font-sans text-sm text-gray-400 mt-2">Phil Agbeko, Founder & CEO</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
