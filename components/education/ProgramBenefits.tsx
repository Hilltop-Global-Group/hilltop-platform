'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const benefits = [
  'Real-world business consulting experience',
  'Cross-cultural competency development',
  'Professional network expansion in Africa',
  'Practical problem-solving in international settings',
  'Cultural immersion and language exposure',
  'Resume-building international experience',
];

export default function ProgramBenefits() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-50 to-white">

      {/* Decorative: concentric arcs — top left */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-20 -left-20" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="350" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="0" cy="0" r="270" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.04" />
          <circle cx="0" cy="0" r="190" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom right */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-8 right-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={14 + col * 28} cy={14 + row * 28} r="2.5" fill="#1D3160" opacity="0.08" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: diagonal lines — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-4 -right-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="220" y1="75"  x2="145" y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.07" />
          <line x1="220" y1="130" x2="90"  y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.05" />
          <line x1="220" y1="185" x2="35"  y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.04" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
                What Students Take Home
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                What participants consistently report gaining from their time with Hilltop.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <CheckCircle2 
                    size={24} 
                    className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: '#F4A261' }}
                    strokeWidth={2.5}
                  />
                  <span className="text-gray-700 leading-relaxed">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <FadeIn delay={0.2}>
                  <div className="h-48 rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
                      style={{
                        backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg')`
                      }}
                    />
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
                      style={{
                        backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg')`
                      }}
                    />
                  </div>
                </FadeIn>
              </div>
              <div className="space-y-4 mt-8">
                <FadeIn delay={0.35}>
                  <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
                      style={{
                        backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg')`
                      }}
                    />
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="h-48 rounded-xl overflow-hidden shadow-lg">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
                      style={{
                        backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg')`
                      }}
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

