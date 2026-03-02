'use client';

import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const teamMembers = [
  {
    name: 'Phil Agbeko',
    role: 'Founder & CEO',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=PA',
    linkedin: 'https://www.linkedin.com/in/philagbeko/',
  },
  {
    name: 'Nanya Osamor',
    role: 'Project Consultant',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=NO',
    linkedin: 'https://www.linkedin.com/in/nanyaosamor/',
  },
  {
    name: 'Faata Faleera Adam',
    role: 'Africa Operations Manager',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=FA',
    linkedin: 'https://www.linkedin.com/in/faata-faleera-a-170683a1/',
  },
];

export default function Team() {
  return (
    <section className="relative overflow-hidden py-24 bg-gray-50">

      {/* Decorative: wave path — top edge */}
      <motion.div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="55" viewBox="0 0 1440 55" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 C180 5, 360 55, 540 28 S900 5, 1080 30 S1350 55, 1440 28" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.07"/>
          <path d="M0 30 C180 5, 360 55, 540 28 S900 5, 1080 30 S1350 55, 1440 28 L1440 0 L0 0 Z" fill="#1D3160" opacity="0.03"/>
        </svg>
      </motion.div>

      {/* Decorative: concentric arcs — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-16 -right-16" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="360" cy="0" r="300" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.07" />
          <circle cx="360" cy="0" r="220" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="360" cy="0" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-10 left-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={14 + col * 28} cy={14 + row * 28} r="2.5" fill="#1D3160" opacity="0.09" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: soft blob — center */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: 500, height: 200, borderRadius: '50%', backgroundColor: '#1D3160', opacity: 0.025, filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-black uppercase tracking-wider mb-4 border-2 border-gold-400 px-6 py-2 rounded-full bg-gold-400">
              The Team
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Passionate professionals dedicated to transforming education across Africa
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <FadeIn
              key={index}
              delay={index * 0.15}
            >
              <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-4 border-navy-900 hover:border-gold-400">
                <div className="relative h-[500px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-sm font-bold mb-2 uppercase tracking-wide" style={{ color: '#F4A261' }}>
                      {member.role}
                    </p>
                    <h3 className="font-serif font-bold text-3xl mb-6" style={{ color: '#FFFFFF' }}>
                      {member.name}
                    </h3>
                    
                    <div className="flex gap-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: '#F4A261' }}
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin size={20} style={{ color: '#1D3160' }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

