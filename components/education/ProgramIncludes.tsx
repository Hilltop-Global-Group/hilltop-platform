'use client';

import { Briefcase, Landmark, Heart, Palmtree } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const includes = [
  {
    icon: Briefcase,
    title: 'Business Projects & Operations',
    description: 'Challenging business projects and exposure to business operations across various industries',
    color: '#1D3160',
  },
  {
    icon: Landmark,
    title: 'African History & Culture',
    description: 'Immersive exposure to African history, traditions, and contemporary cultural experiences',
    color: '#F4A261',
  },
  {
    icon: Heart,
    title: 'Social & Humanitarian Experiences',
    description: 'Meaningful engagement with local communities and impactful service projects',
    color: '#1D3160',
  },
  {
    icon: Palmtree,
    title: 'Leisure & Tourist Destinations',
    description: 'Opportunities to explore iconic landmarks, natural wonders, and vibrant local attractions',
    color: '#F4A261',
  },
];

export default function ProgramIncludes() {
  return (
    <section className="relative overflow-hidden py-20 bg-white">

      {/* Decorative: concentric rings — bottom right */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-20 -right-20" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="420" cy="420" r="360" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="420" cy="420" r="280" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.04" />
          <circle cx="420" cy="420" r="200" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: wavy path — top edge */}
      <motion.div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="50" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 28 C240 5, 480 50, 720 25 S1200 3, 1440 28" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.06"/>
        </svg>
      </motion.div>

      {/* Decorative: dot grid — top left */}
      <motion.div aria-hidden className="pointer-events-none absolute top-10 left-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3].map(row => [0,1,2,3].map(col => (
            <circle key={`${row}-${col}`} cx={12 + col * 26} cy={12 + row * 26} r="2.5" fill="#1D3160" opacity="0.09" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: diagonal lines — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-4 -right-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="200" y1="70"  x2="130" y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.07" />
          <line x1="200" y1="120" x2="80"  y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.05" />
          <line x1="200" y1="170" x2="30"  y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.04" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
              Each Study Abroad Program Includes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive experience combining education, culture, service, and adventure
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {includes.map((item, index) => {
            const Icon = item.icon;
            return (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-2 border-gray-100">
                  <div className="flex items-start gap-6">
                    <div 
                      className="flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon size={32} className="text-white" strokeWidth={2} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-2xl mb-3" style={{ color: item.color }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div 
                    className="absolute inset-0 border-2 border-transparent group-hover:border-current rounded-xl transition-all duration-500 pointer-events-none"
                    style={{ color: item.color }}
                  />
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

