'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
    alt: 'Students participating in Hilltop study abroad program in Accra, Ghana',
    eyebrow: 'Focused In Africa',
    headline: 'Experiential\nLearning',
    sub: 'Transformative internships and cultural immersion in Africa.',
  },
  {
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg',
    alt: 'Hilltop Global Group participants during cultural immersion in Africa',
    eyebrow: 'University Partnerships',
    headline: 'Study Abroad\nin Africa',
    sub: 'Fully managed programs for U.S. university partners.',
  },
  {
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
    alt: 'Hilltop program cohort at a cultural heritage site in Africa',
    eyebrow: 'Professional Development',
    headline: 'Internships\nin Africa',
    sub: 'Real placements with startups, NGOs, and enterprises in Ghana and Rwanda.',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen overflow-hidden flex items-end" style={{ backgroundColor: '#080f1c' }}>

      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </AnimatePresence>

      {/* Gradient overlay — strong bottom, light top */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to top, rgba(8,15,28,0.95) 0%, rgba(8,15,28,0.55) 40%, rgba(8,15,28,0.2) 75%, rgba(8,15,28,0.1) 100%)',
        }}
      />

      {/* Content — bottom-left aligned like Dalberg */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 pt-40">

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.25em] text-white/60 mb-4">
              {slide.eyebrow}
            </p>

            {/* Headline — huge Barlow Condensed */}
            <h1
              className="font-serif font-extrabold text-white leading-none mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '-0.01em', whiteSpace: 'pre-line' }}
            >
              {slide.headline}
            </h1>

            {/* Sub */}
            <p className="font-sans text-white/70 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
              {slide.sub}
            </p>

            {/* CTA — Dalberg-style text link */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              Explore Our Programs
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators — bottom right */}
        <div className="absolute bottom-8 right-6 sm:right-8 lg:right-12 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[3px] rounded-full transition-all duration-400 ${i === current ? 'w-10 bg-white' : 'w-4 bg-white/35 hover:bg-white/60'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
