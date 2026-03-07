'use client';

import { Target, Globe, TrendingUp, Users, Brain, Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const objectives = [
  {
    icon: Target,
    text: 'Gain hands-on experience at real African businesses and organizations',
  },
  {
    icon: Brain,
    text: 'Develop professional skills in an immersive international environment',
  },
  {
    icon: TrendingUp,
    text: 'Build an understanding of Africa\'s fast-growing industries and markets',
  },
  {
    icon: Users,
    text: 'Connect with local professionals and build a global network',
  },
  {
    icon: Globe,
    text: 'Apply classroom knowledge to real-world challenges across diverse sectors',
  },
  {
    icon: Handshake,
    text: 'Foster cross-cultural communication and collaboration skills',
  },
];

export default function AfricanResidency() {
  return (
    <section className="relative overflow-hidden py-20 bg-gray-50">

      {/* Decorative: concentric arcs — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-16 -right-16" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="380" cy="0" r="320" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.07" />
          <circle cx="380" cy="0" r="240" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="380" cy="0" r="160" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-8 left-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={14 + col * 28} cy={14 + row * 28} r="3" fill="#1D3160" opacity="0.1" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: horizontal wave — top */}
      <motion.div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="50" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 28 C240 5, 480 50, 720 26 S1200 3, 1440 28" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.06"/>
        </svg>
      </motion.div>

      {/* Decorative: soft blob — center right */}
      <motion.div aria-hidden className="pointer-events-none absolute top-1/3 -right-10 hidden md:block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: 300, height: 300, borderRadius: '50%', backgroundColor: '#1D3160', opacity: 0.03, filter: 'blur(70px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
              Internship Programs in Africa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hands-on internship placements that give students real-world professional experience across Africa's most dynamic industries
            </p>
          </div>
        </FadeIn>

        <div className="mb-12">
          <FadeIn delay={0.2}>
            <h3 className="font-serif font-bold text-3xl mb-8 text-center" style={{ color: '#1D3160' }}>
              Program Objectives
            </h3>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <FadeIn key={index} delay={0.1 * index}>
                  <div className="group bg-transparent border-2 border-gray-200 p-6 rounded-xl hover:border-gray-300 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: index % 2 === 0 ? '#1D3160' : '#F4A261' }}
                      >
                        <Icon size={24} className="text-white" strokeWidth={2} />
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-1">
                        {objective.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Parallax Banner */}
        <FadeIn delay={0.4}>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h3 className="font-serif font-bold text-3xl sm:text-4xl mb-4">
                  Launch Your Career on the Global Stage
                </h3>
                <p className="text-xl text-white/95 max-w-2xl mx-auto font-medium">
                  Intern across Africa's most exciting industries and return with experience that sets you apart
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/internships"
                className="inline-flex items-center gap-3 px-10 py-5 font-serif font-bold text-lg tracking-wide rounded-xl shadow-lg transition-all duration-300"
                style={{
                  color: '#000000',
                  backgroundColor: '#F4A261',
                  border: '4px solid #F4A261',
                }}
              >
                View Internship Programs
                <ArrowRight size={24} />
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

