'use client';

import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from './FadeIn';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const btnRef = useRef<HTMLButtonElement>(null);
  const isInView = useInView(btnRef, { once: true });

  return (
    <section className="relative overflow-hidden py-20 bg-gray-50">

      {/* Decorative: wavy top edge */}
      <motion.div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="55" viewBox="0 0 1440 55" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 C180 5, 360 55, 540 25 S900 5, 1080 30 S1350 55, 1440 28" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.07"/>
          <path d="M0 30 C180 5, 360 55, 540 25 S900 5, 1080 30 S1350 55, 1440 28 L1440 0 L0 0 Z" fill="#1D3160" opacity="0.03"/>
        </svg>
      </motion.div>

      {/* Decorative: concentric rings — bottom right */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="360" cy="360" r="300" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.06" />
          <circle cx="360" cy="360" r="220" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
          <circle cx="360" cy="360" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — top left */}
      <motion.div aria-hidden className="pointer-events-none absolute top-10 left-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3].map(row => [0,1,2,3].map(col => (
            <circle key={`${row}-${col}`} cx={12 + col * 26} cy={12 + row * 26} r="2.5" fill="#1D3160" opacity="0.1" />
          )))}
        </svg>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <h2 className="font-serif font-bold text-4xl mb-4" style={{ color: '#1D3160' }}>
            Dispatches from the Continent
          </h2>
          <p className="font-body text-gray-600 text-lg mb-8">
            Program updates, partner spotlights, and stories from the ground. Delivered to your inbox twice a month.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded border border-gray-300 focus:outline-none focus:border-gray-400"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <motion.button
                ref={btnRef}
                type="submit"
                className="px-8 py-3 rounded font-serif font-bold text-sm tracking-wide text-white hover:bg-opacity-90 transition-all"
                style={{ backgroundColor: '#1D3160' }}
                animate={isInView ? { scale: [1, 1.03, 1] } : {}}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join the List
              </motion.button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              By joining, you agree to our Terms and Conditions.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}



