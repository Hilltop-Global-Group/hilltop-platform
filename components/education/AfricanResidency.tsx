'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { KenteDivider, ArrowCTA } from '../shared/HilltopBrand';

const pillars = [
  {
    number: '01',
    title: 'Real Work Experience',
    description: 'Students are embedded in African businesses, NGOs, and startups, contributing to live projects from day one.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
  },
  {
    number: '02',
    title: 'Professional Network',
    description: 'Direct exposure to local founders, executives, and industry professionals builds a lasting global network.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
  },
  {
    number: '03',
    title: 'Cross-Cultural Fluency',
    description: 'Immersion in African work culture sharpens communication, adaptability, and global business instincts.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2025/09/performance-e1759310784853.jpg',
  },
];

export default function AfricanResidency() {
  return (
    <section className="relative overflow-hidden py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Header */}
        <FadeIn>
          <div className="mb-4">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
              The Program
            </p>
            <h2 className="font-serif font-extrabold leading-none mb-6" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', color: '#080f1c' }}>
              Internship Programs in Africa
            </h2>
            <KenteDivider className="mb-6" />
            <p className="text-gray-600 max-w-2xl text-base leading-relaxed">
              Hands-on placements in Ghana and Rwanda that give students real professional experience in Africa's most dynamic industries.
            </p>
          </div>
        </FadeIn>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 mt-14 mb-14">
          {pillars.map((pillar, index) => (
            <FadeIn key={index} delay={0.08 * index}>
              <div className="bg-white group overflow-hidden flex flex-col h-full">
                {/* Photo */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${pillar.image}')` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 font-serif font-bold text-3xl text-white/50 select-none">
                    {pillar.number}
                  </span>
                </div>

                {/* Text */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="w-8 h-[3px] mb-5" style={{ backgroundColor: '#F4A261' }} />
                  <h3 className="font-serif font-bold text-xl mb-3" style={{ color: '#080f1c' }}>
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1 text-sm">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Parallax Banner */}
        <FadeIn delay={0.3}>
          <div className="relative h-72 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080f1c]/80 via-[#080f1c]/60 to-[#080f1c]/40 flex items-center px-10 md:px-16">
              <div className="text-white max-w-xl">
                <h3 className="font-serif font-extrabold mb-3" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)' }}>
                  Launch Your Career on the Global Stage
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Return with experience that sets you apart.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-10">
            <Link
              href="/internships"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] border-b pb-1 transition-colors duration-200"
              style={{ color: '#080f1c', borderColor: '#080f1c' }}
            >
              View Internship Programs
              <ArrowCTA />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
