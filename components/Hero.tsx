'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { DecorativeUnderline, ArrowCTA } from './shared/HilltopBrand';

const slides = [
  {
    image: '/images/hero-study-abroad.jpg',
    alt: 'Students participating in Hilltop education abroad program in Accra, Ghana',
    eyebrow: 'Education Abroad Across Africa',
    headline: 'Africa Is Not the Periphery. It Is the Future.',
    sub: 'Faculty-led programs, executive education, and experiential learning that create measurable academic and professional impact across the continent.',
    accentColor: '#F4A261',
  },
  {
    image: '/images/hero-cultural.jpg',
    alt: 'Hilltop Global Group participants during cultural immersion in Africa',
    eyebrow: 'For Universities and Institutions',
    headline: 'Your Faculty Brings the Pedagogy. Hilltop Brings the Continent.',
    sub: 'Custom-designed programs with credit alignment, contact hours, and faculty co-creation built into every engagement.',
    accentColor: '#ffffff',
  },
  {
    image: '/images/nkrumah-memorial.jpg',
    alt: 'Hilltop program cohort at a cultural heritage site in Africa',
    eyebrow: 'Deliverable-Based Programs',
    headline: 'Real Work Products. Real African Partners. Real Impact.',
    sub: 'Structured placements across Ghana and Rwanda where students leave with work products their host organizations actually use.',
    accentColor: '#F4A261',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(p => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen overflow-hidden flex items-end" style={{ backgroundColor: '#080f1c' }}>

      {/* Background images: cross-dissolve with cinematic blur */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${slide.image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ opacity: 0, scale: 1.06, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.02, filter: 'blur(4px)' }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </AnimatePresence>

      {/* Gradient overlay: strong bottom, light top */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to top, rgba(8,15,28,0.95) 0%, rgba(8,15,28,0.55) 40%, rgba(8,15,28,0.2) 75%, rgba(8,15,28,0.1) 100%)',
        }}
      />

      {/* Content: bottom-left aligned like Dalberg */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24 pt-40">

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Eyebrow */}
            <p className="text-xs sm:text-sm font-sans font-semibold uppercase tracking-[0.25em] text-white/60 mb-4">
              {slide.eyebrow}
            </p>

            {/* Headline: huge condensed serif with per-slide accent underline */}
            <h1
              className="font-serif font-extrabold text-white leading-none mb-6"
              style={{ fontSize: 'clamp(2.4rem, 6vw, 5.5rem)', letterSpacing: '-0.01em' }}
            >
              {slide.headline.split('\n').map((line, i, arr) => {
                const isLast = i === arr.length - 1;
                const words = line.split(' ');
                const lastWord = words[words.length - 1];
                const rest = words.slice(0, -1).join(' ');
                return (
                  <span key={i} className="block">
                    {rest && <>{rest} </>}
                    {isLast ? (
                      <span className="relative inline-block whitespace-nowrap">
                        {lastWord}
                        <DecorativeUnderline color={slide.accentColor} />
                      </span>
                    ) : lastWord}
                  </span>
                );
              })}
            </h1>

            {/* Sub */}
            <p className="font-sans text-white/70 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
              {slide.sub}
            </p>

            {/* CTA: Dalberg-style text link */}
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              Explore Our Programs
              <ArrowCTA />
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators: bottom right */}
        <div className="absolute bottom-8 right-6 sm:right-8 lg:right-12 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="p-3 -m-3 flex items-center justify-center"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span className={`block h-[3px] rounded-full transition-all duration-500 ${i === current ? 'w-10 bg-white' : 'w-4 bg-white/35 hover:bg-white/60'}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
