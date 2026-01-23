'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const heroImages = [
  'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/IMG_4280-1-scaled-e1759312955679.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2025/09/performance-e1759310784853.jpg',
  'http://hilltopglobalgroup.com/wp-content/uploads/2021/12/2-5.png',
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

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

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 text-center py-20">
        {/* Eyebrow Badge */}
        <div className="mb-6 animate-fadeUp" style={{ animationDelay: '0.1s' }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
            Focused In Africa
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-5 animate-fadeUp leading-tight"
          style={{ 
            animationDelay: '0.2s',
            textShadow: '0 12px 32px rgba(0,0,0,0.35)',
            letterSpacing: '-0.015em'
          }}
        >
          Experiential Learning
        </h1>

        {/* Subtitle */}
        <p 
          className="text-lg sm:text-xl md:text-2xl font-semibold text-white max-w-3xl mx-auto mb-8 animate-fadeUp"
          style={{ 
            animationDelay: '0.35s',
            textShadow: '0 10px 28px rgba(0,0,0,0.35)'
          }}
        >
          Transformative internships and cultural immersion in Africa.
        </p>

        {/* CTA Button */}
        <div className="animate-fadeUp" style={{ animationDelay: '0.5s' }}>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-8 py-4 font-serif font-bold text-base tracking-wide text-primary-navy bg-white border-2 border-white rounded shadow-[0_8px_24px_rgba(255,255,255,0.18)] transition-all duration-300 hover:bg-primary-navy hover:text-white hover:border-primary-navy hover:-translate-y-1 hover:scale-105 hover:shadow-[0_15px_35px_rgba(29,49,96,0.4)]"
          >
            Learn more
            <svg 
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
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


