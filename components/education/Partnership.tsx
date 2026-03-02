'use client';

import { Building2, Globe2, Users2, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

export default function Partnership() {
  const cards = [
    { icon: Building2, title: 'Accommodation', description: 'Comfortable and secure housing for all participants', color: '#F4A261' },
    { icon: Globe2, title: 'In-Country Logistics', description: 'Comprehensive support and coordination', color: '#1D3160' },
    { icon: Users2, title: 'Business Visits', description: 'Curated tours and corporate engagements', color: '#F4A261' },
    { icon: Lightbulb, title: 'Project Design', description: 'Student consulting project sourcing', color: '#1D3160' },
  ];

  return (
    <section className="relative overflow-hidden py-20 bg-white">

      {/* Decorative: quarter-arc — top left */}
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
      <motion.div aria-hidden className="pointer-events-none absolute -top-6 -right-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="220" y1="75"  x2="145" y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.07" />
          <line x1="220" y1="130" x2="90"  y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.05" />
          <line x1="220" y1="185" x2="35"  y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.04" />
        </svg>
      </motion.div>

      {/* Decorative: soft blob — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-10 left-1/4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: 380, height: 200, borderRadius: '50%', backgroundColor: '#1D3160', opacity: 0.025, filter: 'blur(70px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeIn>
            <div>
              <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
                University Partnerships
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Hilltop partners with Universities to expand their international program footprint in Africa by facilitating unique and transformational turnkey experiences for their travel abroad programs.
                </p>
                <p>
                  Services include accommodation, comprehensive in-country logistics, curated tours, business visits, student consulting project sourcing and design and more.
                </p>
                <p>
                  Hilltop has validated that in a very organic way, these experiences in Africa enrich the business school experience for the students. In addition to the cultural and other experiences, they gain practical knowledge working on cross-industry projects that have a significant local impact.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: card.color }}>
                      <Icon size={28} className="text-white" strokeWidth={2} />
                    </div>
                    <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {card.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

