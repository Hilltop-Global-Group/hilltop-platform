'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

export default function InternshipHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center object-cover"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg')` 
          }}
        />
        {/* Gradient Overlay for better text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/70 to-blue-900/90" />
      </div>

      {/* Decorative: concentric white rings — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-20 -right-20 z-[1]" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="440" height="440" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="440" cy="0" r="380" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.06" />
          <circle cx="440" cy="0" r="300" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.05" />
          <circle cx="440" cy="0" r="220" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.04" />
          <circle cx="440" cy="0" r="140" stroke="#FFFFFF" strokeWidth="0.75" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: white dot grid — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-10 left-10 z-[1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={13 + col * 26} cy={13 + row * 26} r="2.5" fill="#FFFFFF" opacity="0.08" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: diagonal white lines — bottom right corner */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-6 right-0 z-[1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="200" y1="60" x2="140" y2="0" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.07"/>
          <line x1="200" y1="110" x2="90" y2="0" stroke="#FFFFFF" strokeWidth="1" opacity="0.05"/>
          <line x1="200" y1="160" x2="40" y2="0" stroke="#FFFFFF" strokeWidth="1" opacity="0.04"/>
        </svg>
      </motion.div>

      {/* Decorative: white cross lines — top left */}
      <motion.div aria-hidden className="pointer-events-none absolute top-12 left-8 z-[1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="0" x2="30" y2="60" stroke="#FFFFFF" strokeWidth="1" opacity="0.15"/>
          <line x1="0" y1="30" x2="60" y2="30" stroke="#FFFFFF" strokeWidth="1" opacity="0.15"/>
          <circle cx="30" cy="30" r="4" fill="#FFFFFF" opacity="0.12"/>
        </svg>
      </motion.div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <FadeIn>
          <div className="text-center">
            {/* Pill Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
                Professional Development
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-white mb-6">
              Internship Programs
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Connect classroom learning with real-world experience in Africa's most dynamic markets.
            </p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#internship-programs"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-serif font-bold text-lg tracking-wide bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                View Open Internships
                <ArrowRight size={22} />
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
