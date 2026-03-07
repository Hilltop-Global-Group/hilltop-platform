'use client';

import { motion } from 'framer-motion';

export default function ProgramOverview() {
  return (
    <section className="relative overflow-hidden py-20 bg-white border-t border-gray-200">

      {/* Decorative: quarter-circle arc — top right */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="340" cy="0" r="280" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.07" />
          <circle cx="340" cy="0" r="210" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="340" cy="0" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom left (desktop only) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-6 hidden md:block"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 1, 2, 3, 4].map(row =>
            [0, 1, 2, 3, 4].map(col => (
              <circle
                key={`${row}-${col}`}
                cx={14 + col * 28}
                cy={14 + row * 28}
                r="3"
                fill="#1D3160"
                opacity="0.08"
              />
            ))
          )}
        </svg>
      </motion.div>

      {/* Decorative: diagonal lines — bottom right */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-6 -right-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="80"  x2="80"  y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.07" />
          <line x1="0" y1="130" x2="130" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.05" />
          <line x1="0" y1="180" x2="180" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.04" />
        </svg>
      </motion.div>

      {/* Decorative: horizontal wave — top edge */}
      <motion.div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="45" viewBox="0 0 1440 45" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 25 C240 5, 480 45, 720 22 S1200 2, 1440 25" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.05"/>
        </svg>
      </motion.div>

      {/* Decorative: soft navy blob — center (desktop only, never behind text) */}
      <motion.div aria-hidden className="pointer-events-none absolute top-1/2 -left-16 -translate-y-1/2 hidden md:block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: 280, height: 280, borderRadius: '50%', backgroundColor: '#1D3160', opacity: 0.025, filter: 'blur(70px)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-start">

          {/* Left Column - Hook Headline with navy left accent */}
          <div className="md:col-span-4">
            <div className="flex gap-4 items-stretch">
              <motion.div
                className="hidden md:block w-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#1D3160' }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <h2 className="font-serif font-bold text-3xl leading-tight" style={{ color: '#1D3160' }}>
                Real-World Experience in Africa's Most Dynamic Markets.
              </h2>
            </div>
          </div>

          {/* Right Column - Body Text */}
          <div className="md:col-span-8 space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              The Hilltop Internship Program provides students with an opportunity to connect classroom learning with real-world experience in Africa's most dynamic markets. It enables emerging professionals to explore career interests, build networks, and develop globally relevant skills while engaging directly with organizations driving innovation and growth across the continent.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Hilltop collaborates with leading partners such as <span className="font-semibold" style={{ color: '#1D3160' }}>African Leadership University (Rwanda)</span> and other industry hosts across Africa to deliver high-impact internship experiences. Designed for meaningful, structured international exposure, Hilltop's programs combine professional placements with mentorship, cross-cultural learning, and guided reflection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
