'use client';

import { motion } from 'framer-motion';

export default function TestimonialsHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-60" />
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            className="mb-5"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              From Our Alumni
            </span>
          </motion.div>

          <motion.h1
            className="font-serif font-bold text-5xl sm:text-6xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            What They Took Home
          </motion.h1>

          <motion.p
            className="text-lg text-white/85 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Students, partners, and university leaders on what the Hilltop experience meant for them.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-10 sm:gap-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-serif font-bold text-white mb-1">500+</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Students Placed</p>
            </div>
            <div className="w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-serif font-bold text-white mb-1">50+</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60">Partner Organizations</p>
            </div>
            <div className="w-px bg-white/20 hidden sm:block" />
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-serif font-bold text-white mb-1">15+</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-white/60">University Partners</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
