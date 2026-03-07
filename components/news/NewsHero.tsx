'use client';

import { motion } from 'framer-motion';

export default function NewsHero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-60" />
      </div>

      {/* Decorative: white concentric rings — top right */}
      <motion.div className="pointer-events-none absolute -top-20 -right-20 z-[1]" aria-hidden initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="420" cy="0" r="360" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.12" />
          <circle cx="420" cy="0" r="280" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.08" />
          <circle cx="420" cy="0" r="200" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.06" />
        </svg>
      </motion.div>

      {/* Decorative: white dot grid — bottom left */}
      <motion.div className="pointer-events-none absolute bottom-8 left-8 z-[1]" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={11 + col * 22} cy={11 + row * 22} r="2.5" fill="#FFFFFF" opacity="0.15" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: white diagonal lines — bottom right */}
      <motion.div className="pointer-events-none absolute -bottom-4 -right-4 z-[1]" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="60"  x2="60"  y2="0" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.14"/>
          <line x1="0" y1="110" x2="110" y2="0" stroke="#FFFFFF" strokeWidth="1" opacity="0.10"/>
          <line x1="0" y1="160" x2="160" y2="0" stroke="#FFFFFF" strokeWidth="1" opacity="0.07"/>
        </svg>
      </motion.div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              Latest Updates
            </span>
          </div>
          
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-white mb-4">
            News & Stories
          </h1>
          
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto">
            Stay informed with the latest news and program updates.
          </p>
        </div>
      </div>
    </section>
  );
}

