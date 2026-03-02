'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    number: '01',
    title: 'Global Connections',
    description: 'Establish partnerships with organizations and institutions around the world to enhance your educational journey.',
  },
  {
    number: '02',
    title: 'Diverse Opportunities',
    description: 'Explore various internship and study abroad programs tailored to your academic and career goals.',
  },
  {
    number: '03',
    title: 'Supportive Community',
    description: 'Join a network of like-minded individuals and mentors committed to your success and personal development.',
  },
];

export default function EmpoweringFutures() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-navy-900" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gold-400" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-navy-900/10 rounded-full blur-3xl" />

      {/* Decorative: concentric arcs — top left */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-20 -left-20" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="350" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="0" cy="0" r="270" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.04" />
          <circle cx="0" cy="0" r="190" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom right */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-10 right-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={14 + col * 28} cy={14 + row * 28} r="2.5" fill="#1D3160" opacity="0.08" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: diagonal lines — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-6 -left-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="80"  x2="80"  y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.07" />
          <line x1="0" y1="130" x2="130" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.05" />
          <line x1="0" y1="180" x2="180" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.04" />
        </svg>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-black uppercase tracking-wider mb-4 border-2 border-gold-400 px-6 py-2 rounded-full bg-gold-400">
              What We Offer
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
              Empowering Global Futures
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <ScrollReveal
                key={feature.number}
                animation="fade-up"
                delay={index * 150}
              >
                <div className="group relative bg-white p-10 rounded-lg border-4 border-navy-900 hover:border-gold-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:shadow-gold-400/50 h-full flex flex-col">
                  {/* Large number background */}
                  <div className="absolute top-8 right-8 text-8xl font-serif font-bold text-gray-200 group-hover:text-gold-400/20 select-none transition-colors duration-500">
                    {feature.number}
                  </div>

                  <div className="relative flex-1 flex flex-col">
                    <h3 className="font-serif font-bold text-3xl mb-4 group-hover:text-black transition-colors" style={{ color: '#1D3160' }}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg flex-1">
                      {feature.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-6 h-2 w-16 group-hover:w-full transition-all duration-500 bg-gold-400" />
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-transparent group-hover:border-navy-900 rounded-tr-2xl transition-all duration-500" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}



