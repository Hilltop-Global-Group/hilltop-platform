'use client';

import { motion } from 'framer-motion';
import { KenteDivider, SectionBrushstroke } from '../shared/HilltopBrand';

export default function EmpoweringFutures() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <SectionBrushstroke color="#F4A261" opacity={0.04} className="w-[500px] -bottom-16 -left-24" flip />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <div className="mb-12">
          <h2
            className="font-serif font-extrabold text-black leading-none mb-8"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            What Working With Us<br className="hidden md:block" /> Looks Like
          </h2>
          <motion.p
            className="font-sans text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            Internship and education abroad programs matched to your academic focus, spanning fintech, public health, and agribusiness, with additional tracks built around the industries' driving opportunities on the continent.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
