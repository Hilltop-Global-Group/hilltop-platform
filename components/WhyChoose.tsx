'use client';

import { Check, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-20 bg-white">

      {/* Decorative: diagonal lines — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-6 -right-6" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="260" y1="80"  x2="180" y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.07" />
          <line x1="260" y1="140" x2="120" y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.05" />
          <line x1="260" y1="200" x2="60"  y2="0"   stroke="#1D3160" strokeWidth="1"   opacity="0.04" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-8 left-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={14 + col * 28} cy={14 + row * 28} r="2.5" fill="#1D3160" opacity="0.08" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: large circle ring — center left */}
      <motion.div aria-hidden className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="180" cy="180" r="160" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.04" />
          <circle cx="180" cy="180" r="110" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: soft blob — top center */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: 400, height: 200, borderRadius: '50%', backgroundColor: '#1D3160', opacity: 0.02, filter: 'blur(70px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div>
              <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
                Why You Should Choose Hilltop Global Group
              </h2>
              <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
                We design immersive, experience-driven programs across Africa that transform travel into purposeful learning. Our internships place you on real, project-driven teams in high-growth sectors so you gain practical skills and measurable impact. Whether onsite or virtual, we deliver expert-led cultural and professional immersion and manage logistics end to end so you can focus on growth.
              </p>

              <div className="mb-8">
                <h3 className="font-serif font-bold text-2xl mb-4" style={{ color: '#1D3160' }}>
                  Mission
                </h3>
                <p className="font-body text-gray-600 leading-relaxed mb-6">
                  We create transformative educational experiences that connect students and professionals to Africa's dynamic growth story. Through immersive programs, we bridge cultures and build the next generation of global leaders.
                </p>
                
                <ul className="space-y-3">
                  {['Cultural Immersion', 'Corporate Placement', 'Global Networking'].map((item, index) => (
                    <motion.li 
                      key={item} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <Check size={20} style={{ color: '#F4A261' }} />
                      <span className="font-body text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.button 
                className="inline-flex items-center gap-2 px-6 py-3 rounded font-serif font-bold text-sm tracking-wide hover:bg-opacity-90 transition-all" 
                style={{ backgroundColor: '#F4A261', color: '#1D3160' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WATCH MORE
              </motion.button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                  alt="Students"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <motion.button 
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-transform" 
                    style={{ backgroundColor: '#F4A261' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play size={24} fill="#1D3160" style={{ color: '#1D3160' }} />
                  </motion.button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}



