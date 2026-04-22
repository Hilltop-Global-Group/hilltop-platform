'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { KenteDivider } from '../shared/HilltopBrand';

type JourneyStep = {
  id: string;
  year: string;
  title: string;
  description: string;
  image: string;
  stats: { label: string; value: string }[];
  links?: { label: string; href: string }[];
};

const journeySteps: JourneyStep[] = [
  {
    id: 'foundation',
    year: '',
    title: 'The Mission',
    description:
      "Hilltop was founded at Georgetown University, where we named a gap the industry had quietly accepted. Many industry publications consistently report that Africa accounts for less than 15% of all U.S. outbound programs. Europe, Asia, and Latin America claim the rest. We built Hilltop to close that gap, not as an experiment, but as a conviction that Africa's economies, institutions, and professional networks belong at the center of global education, not on its margins.",
    image: '/images/foundation.JPG',
    stats: [],
  },
  {
    id: 'leadership',
    year: '',
    title: 'Global Validation',
    description:
      "From a single program to a Pan-African operation, Hilltop has turned conviction into infrastructure. Teams from Ghana, Rwanda, Kenya, South Africa, and Namibia now support programs across the continent, and the footprint is still expanding. Phil S. Agbeko, Co-Founder and CEO of Hilltop Global Group and a Fulbright Specialist, was named to The PIE's 50 Voices Americas List for 2025, recognizing leaders shaping international education across the Americas. He is a featured speaker at AIEA, CCID, EMBAC, the Forum on Education Abroad, the DA Global Access Network, NAFSA-aligned events, and global business and development forums. Hilltop has designed and delivered transformative programs for more than 1,000 students, built collaborations with 100+ cross-industry partners, and works with institutions including Georgetown, Imperial College London, UConn, Emerson College, the University of Maryland, and more, alongside government recognition and ministry-level partnerships across the continent.",
    image: '/images/global_validation.JPG',
    stats: [
      { label: 'Students', value: '1000+' },
      { label: 'Programs Delivered', value: '50+' },
    ],
    links: [
      {
        label: 'The PIE: 50 Voices Americas List for 2025',
        href: 'https://thepienews.com/the-pie-reveals-50-voices-americas-list-for-2025/',
      },
    ],
  },
];

export default function JourneyInteractive() {
  const [activeStep, setActiveStep] = useState(0);
  const step = journeySteps[activeStep];

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mb-14">
          <div className="flex-1">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              Our Story
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-none"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              From One Idea<br className="hidden md:block" /> to a Continent
            </h2>
          </div>
          {/* Vertical divider: desktop only */}
          <div className="hidden md:block w-px bg-gray-200 self-stretch flex-shrink-0" />
          <p className="font-sans text-gray-500 text-base max-w-sm leading-relaxed md:pt-1 flex-shrink-0">
            Two chapters that define how Hilltop grew from a conviction into a pan-African operation.
          </p>
        </div>

        {/* Chapter tabs */}
        <div className="flex border-b border-gray-200 mb-12 overflow-x-auto">
          {journeySteps.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActiveStep(i)}
              className={`relative flex-shrink-0 px-6 pb-4 pt-2 font-sans font-semibold text-sm transition-colors duration-200 ${
                i === activeStep ? 'text-black' : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              {s.title}
              {i === activeStep && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                  style={{ backgroundColor: '#F4A261' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Active step content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Photo */}
              <div className="relative h-[400px] sm:h-[480px] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Stats */}
                {step.stats.length > 0 && (
                  <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                    {step.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 p-4"
                      >
                        <p className="font-serif font-extrabold text-white text-2xl leading-none mb-1">
                          {stat.value}
                        </p>
                        <p className="font-sans text-white/70 text-xs uppercase tracking-wider">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="pt-2">
                <p
                  className="font-serif font-extrabold leading-none mb-6 select-none"
                  style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', color: '#1D316008' }}
                >
                  0{activeStep + 1}
                </p>
                <h3
                  className="font-serif font-bold text-2xl sm:text-3xl mb-6 leading-snug"
                  style={{ color: '#1D3160' }}
                >
                  {step.title}
                </h3>
                <p className="font-sans text-gray-600 text-base leading-relaxed mb-6">
                  {step.description}
                </p>
                {step.links && step.links.length > 0 && (
                  <ul className="mb-8 space-y-2">
                    {step.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-sm font-semibold underline decoration-[#F4A261] decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
                          style={{ color: '#1D3160' }}
                        >
                          {link.label}
                          <span className="sr-only"> (opens in new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Progress dots + nav */}
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex gap-2">
                    {journeySteps.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveStep(idx)}
                        className={`h-[3px] rounded-full transition-all duration-400 ${
                          idx === activeStep ? 'w-10 bg-black' : 'w-4 bg-gray-300'
                        }`}
                        aria-label={`Go to chapter ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-6 ml-2">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="py-2 px-3 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-gray-400 hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      ← Prev
                    </button>
                    <button
                      onClick={() => setActiveStep(Math.min(journeySteps.length - 1, activeStep + 1))}
                      disabled={activeStep === journeySteps.length - 1}
                      className="py-2 px-3 font-sans text-sm font-semibold uppercase tracking-[0.15em] text-black hover:opacity-70 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      Next →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
