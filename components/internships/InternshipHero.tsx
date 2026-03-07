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
          className="absolute inset-0 bg-cover bg-center object-cover opacity-50"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg')` 
          }}
        />
        {/* Gradient Overlay for better text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/60 to-blue-900/80" />
      </div>

      {/* Decorative: white concentric rings — bottom right */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20 z-[1]" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="440" height="440" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="440" cy="440" r="380" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="440" cy="440" r="290" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.04" />
          <circle cx="440" cy="440" r="200" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: white dot grid — top left */}
      <motion.div aria-hidden className="pointer-events-none absolute top-14 left-10 z-[1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={12 + col * 24} cy={12 + row * 24} r="2.5" fill="#FFFFFF" opacity="0.08" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: white cross — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute top-16 right-16 z-[1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="25" y1="0" x2="25" y2="50" stroke="#FFFFFF" strokeWidth="1" opacity="0.18"/>
          <line x1="0" y1="25" x2="50" y2="25" stroke="#FFFFFF" strokeWidth="1" opacity="0.18"/>
          <circle cx="25" cy="25" r="4" fill="#FFFFFF" opacity="0.12"/>
        </svg>
      </motion.div>

      {/* Decorative: white diagonal lines — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-4 -left-4 z-[1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="60"  x2="60"  y2="0"   stroke="#FFFFFF" strokeWidth="1.5" opacity="0.07" />
          <line x1="0" y1="110" x2="110" y2="0"   stroke="#FFFFFF" strokeWidth="1" opacity="0.05" />
          <line x1="0" y1="160" x2="160" y2="0"   stroke="#FFFFFF" strokeWidth="1" opacity="0.04" />
        </svg>
      </motion.div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <FadeIn>
          <div className="text-center">
            {/* Pill Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
                Professional Development Programs
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-white mb-6">
              Internships in Africa
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Professional placements in Ghana and Rwanda. Work on real projects with startups, NGOs, and enterprises across the continent's fastest-growing sectors.
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
