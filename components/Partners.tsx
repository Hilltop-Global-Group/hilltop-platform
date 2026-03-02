'use client';

import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const universities = [
  'Howard University',
  'Georgetown University',
  'University of Michigan',
  'Stanford University',
  'Duke University',
  'Yale University',
  'Morehouse College',
  'Spelman College',
];

export default function Partners() {
  return (
    <section className="relative overflow-hidden py-16 bg-white border-y border-gray-100">

      {/* Decorative: concentric arcs — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-16 -right-16 z-[1]" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="320" cy="0" r="270" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.06" />
          <circle cx="320" cy="0" r="200" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
          <circle cx="320" cy="0" r="130" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-6 left-6 z-[1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3].map(row => [0,1,2,3].map(col => (
            <circle key={`${row}-${col}`} cx={12 + col * 26} cy={12 + row * 26} r="2" fill="#1D3160" opacity="0.08" />
          )))}
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <FadeIn>
          <p className="text-center text-xs font-bold uppercase tracking-[0.25em] mb-8" style={{ color: '#1D3160' }}>
            Trusted by Students from Leading Universities
          </p>
        </FadeIn>

        {/* University name badges */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {universities.map((name, i) => (
              <motion.span
                key={name}
                className="px-5 py-2 rounded-full text-sm font-semibold border border-gray-200 bg-gray-50 text-gray-600 hover:border-[#1D3160] hover:text-[#1D3160] transition-all duration-300 cursor-default"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {name}
              </motion.span>
            ))}
          </div>
        </FadeIn>

        {/* Divider + trust statements */}
        <FadeIn delay={0.35}>
          <div className="border-t border-gray-100 pt-10 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-serif font-bold text-2xl mb-1" style={{ color: '#1D3160' }}>7+</p>
              <p className="text-sm text-gray-500">African Countries</p>
            </div>
            <div>
              <p className="font-serif font-bold text-2xl mb-1" style={{ color: '#1D3160' }}>Ghana & Rwanda</p>
              <p className="text-sm text-gray-500">Active Internship Destinations</p>
            </div>
            <div>
              <p className="font-serif font-bold text-2xl mb-1" style={{ color: '#1D3160' }}>50+</p>
              <p className="text-sm text-gray-500">Host Organizations Across Africa</p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
