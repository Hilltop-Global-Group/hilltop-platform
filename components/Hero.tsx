'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import FadeIn from './FadeIn';

const heroImages = [
  'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2025/09/performance-e1759310784853.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2021/12/2-5.png',
];

const heroImageAlts = [
  'Students participating in Hilltop study abroad program in Accra, Ghana',
  'Hilltop Global Group participants during cultural immersion in Africa',
  'Hilltop students engaging with local communities in Rwanda',
  'Faculty development program participants in an African business setting',
  'Group of international interns at a partner organization in Ghana',
  'Hilltop program cohort at a cultural heritage site in Africa',
  'Performance and presentation by Hilltop study abroad participants',
  'Hilltop Global Group internship experience in Africa',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#1D3160' }}>
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-[2000ms] ${
              index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url('${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            role="img"
            aria-label={heroImageAlts[index]}
          />
        ))}
      </div>

      {/* Navy Gradient Overlay */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            radial-gradient(120% 70% at 50% 100%, rgba(29,49,96,0.55) 0%, rgba(29,49,96,0.0) 50%),
            linear-gradient(180deg, rgba(29,49,96,0.9) 0%, rgba(39,66,122,0.5) 55%, rgba(29,49,96,0.75) 100%)
          `
        }}
      />

      {/* Decorative: white concentric rings — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-20 -right-20 z-[1]" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="460" height="460" viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="460" cy="0" r="400" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="460" cy="0" r="310" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.04" />
          <circle cx="460" cy="0" r="220" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.03" />
          <circle cx="460" cy="0" r="130" stroke="#FFFFFF" strokeWidth="0.75" fill="none" opacity="0.02" />
        </svg>
      </motion.div>

      {/* Decorative: white dot grid — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-12 left-12 z-[1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={13 + col * 26} cy={13 + row * 26} r="2.5" fill="#FFFFFF" opacity="0.07" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: white diagonal lines — bottom right */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-6 -right-6 z-[1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="75"  x2="75"  y2="0"   stroke="#FFFFFF" strokeWidth="1.5" opacity="0.06" />
          <line x1="0" y1="130" x2="130" y2="0"   stroke="#FFFFFF" strokeWidth="1" opacity="0.04" />
          <line x1="0" y1="185" x2="185" y2="0"   stroke="#FFFFFF" strokeWidth="1" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: white cross marks — scattered */}
      <motion.div aria-hidden className="pointer-events-none absolute top-16 left-16 z-[1]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="25" y1="0" x2="25" y2="50" stroke="#FFFFFF" strokeWidth="1" opacity="0.14"/>
          <line x1="0" y1="25" x2="50" y2="25" stroke="#FFFFFF" strokeWidth="1" opacity="0.14"/>
          <circle cx="25" cy="25" r="3" fill="#FFFFFF" opacity="0.1"/>
        </svg>
      </motion.div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 text-center py-20">
        {/* Eyebrow Badge */}
        <FadeIn delay={0.1} className="mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
            Focused In Africa
          </span>
        </FadeIn>

        {/* Main Heading */}
        <FadeIn delay={0.2}>
          <h1
            className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-5 leading-tight"
            style={{
              textShadow: '0 12px 32px rgba(0,0,0,0.35)',
              letterSpacing: '-0.015em'
            }}
          >
            Experiential Learning
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.35}>
          <p
            className="text-lg sm:text-xl md:text-2xl font-semibold text-white max-w-3xl mx-auto mb-8"
            style={{
              textShadow: '0 10px 28px rgba(0,0,0,0.35)'
            }}
          >
            Transformative internships and cultural immersion in Africa.
          </p>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={0.5}>
          <motion.div
            initial={shouldReduce ? false : { scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 px-8 py-4 font-serif font-bold text-base tracking-wide text-primary-navy bg-white border-2 border-white rounded shadow-[0_8px_24px_rgba(255,255,255,0.18)] transition-all duration-300 hover:bg-primary-navy hover:text-white hover:border-primary-navy hover:shadow-[0_15px_35px_rgba(29,49,96,0.4)]"
            >
              Explore Our Programs
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </FadeIn>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImage ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] -mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full block">
          <path fill="#ffffff" d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
}
