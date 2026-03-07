'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const pillars = [
  {
    number: '01',
    title: 'Real Work Experience',
    description: 'Students are embedded in African businesses, NGOs, and startups, contributing to live projects from day one.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
    accent: '#F4A261',
  },
  {
    number: '02',
    title: 'Professional Network',
    description: 'Direct exposure to local founders, executives, and industry professionals builds a lasting global network.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
    accent: '#1D3160',
  },
  {
    number: '03',
    title: 'Cross-Cultural Fluency',
    description: 'Immersion in African work culture sharpens communication, adaptability, and global business instincts.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2025/09/performance-e1759310784853.jpg',
    accent: '#F4A261',
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
              Internship Programs in Africa
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hands-on placements in Ghana and Rwanda that give students real professional experience in Africa's most dynamic industries.
            </p>
          </div>
        </FadeIn>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">

                {/* Photo */}
                <div className="relative h-44 overflow-hidden flex-shrink-0">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${pillar.image}')` }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span
                    className="absolute top-4 right-4 font-serif font-bold text-3xl text-white/60 select-none"
                  >
                    {pillar.number}
                  </span>
                </div>

                {/* Text */}
                <div className="p-7 flex-1 flex flex-col">
                  <h3 className="font-serif font-bold text-xl mb-3" style={{ color: '#1D3160' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                  <div className="mt-5 h-1 rounded-full w-10" style={{ backgroundColor: pillar.accent }} />
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Parallax Banner */}
        <FadeIn delay={0.3}>
          <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/40 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h3 className="font-serif font-bold text-3xl sm:text-4xl mb-3">
                  Launch Your Career on the Global Stage
                </h3>
                <p className="text-lg text-white/90 max-w-xl mx-auto">
                  Return with experience that sets you apart.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="text-center mt-10">
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
