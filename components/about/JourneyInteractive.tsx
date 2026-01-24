'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

const journeySteps = [
  {
    id: 'foundation',
    year: '2014',
    title: 'The Foundation',
    description: 'It started by accident at Georgetown University. When our founders looked for MBA study-abroad options, they found programs in Europe, Asia, and Latin America—but nothing for Africa. Hilltop was born to fill that void, launching with a single mission: to prove that Africa is not a "non-traditional" destination, but a vital classroom for the future.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
    stats: [
      { label: 'Students', value: '50+' },
      { label: 'Partners', value: '3' },
    ]
  },
  {
    id: 'expansion',
    year: '2016-2018',
    title: 'Beyond Tourism',
    description: 'We moved beyond simple tours to deep academic integration. Recognizing that "visits" weren\'t enough to change narratives, we began co-creating curriculum with US faculty and launching our first Faculty Development workshops—pairing Western educators with African peers to build long-term institutional bridges.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
    stats: [
      { label: 'Students', value: '500+' },
      { label: 'Countries', value: '5' },
    ]
  },
  {
    id: 'innovation',
    year: '2019-2021',
    title: 'The Workforce Pivot',
    description: 'As the world shifted to remote work, we saw a new opportunity: Africa as the source of the next global workforce. We launched our Internship Division, moving from short-term study trips to month-long professional placements, proving that African talent and infrastructure could support global business needs.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
    stats: [
      { label: 'Programs', value: '15+' },
      { label: 'Universities', value: '20+' },
    ]
  },
  {
    id: 'leadership',
    year: '2022-Present',
    title: 'Global Validation',
    description: 'From a small initiative to a Pan-African force now operating in 6 countries. Our approach was validated when our founder was named a U.S. State Department Fulbright Specialist in Global Education. Today, we aren\'t just facilitating travel; we are shaping the African narrative through high-level institutional partnerships and government-backed expertise.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
    stats: [
      { label: 'Students', value: '1000+' },
      { label: 'Projects', value: '15+' },
    ]
  },
];

export default function JourneyInteractive() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #1D3160 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
      </div>

      {/* Accent shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-navy-900/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-black uppercase tracking-wider mb-4 border-2 border-gold-400 px-6 py-2 rounded-full bg-gold-400">
              Our Journey
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
              A Decade of Transformation
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Click through the chapters of our story to see how we've grown and evolved
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Navigation */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-16" suppressHydrationWarning>
            {journeySteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                suppressHydrationWarning
                style={activeStep === index ? {} : { backgroundColor: '#FFFFFF', color: '#1D3160', borderColor: '#1D3160' }}
                className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-500 border-2 hover:opacity-90 ${
                  activeStep === index
                    ? 'bg-gold-400 border-gold-400 text-black shadow-lg shadow-gold-400/50 scale-110'
                    : ''
                }`}
              >
                <span className="relative z-10 text-sm">{step.year}</span>
                {activeStep === index && (
                  <div className="absolute inset-0 bg-gold-400 rounded-xl blur-xl opacity-50 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg border-4 border-gold-400">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="relative group">
                  <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg border-4 border-navy-900">
                    <Image
                      src={journeySteps[activeStep].image}
                      alt={journeySteps[activeStep].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    
                    {/* Floating year badge */}
                    <div className="absolute top-6 left-6 bg-gold-400 px-6 py-3 rounded-xl shadow-lg border-2 border-white">
                      <span className="font-serif font-bold text-2xl text-white">
                        {journeySteps[activeStep].year}
                      </span>
                    </div>

                    {/* Stats overlay */}
                    <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                      {journeySteps[activeStep].stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex-1 bg-white rounded-xl p-4 text-center border-2 border-gold-400"
                        >
                          <div className="font-serif font-bold text-3xl text-navy-900 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-black font-semibold uppercase tracking-wide">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative border */}
                  <div className="absolute -inset-4 border-4 border-gold-400/30 rounded-lg -z-10" />
                </div>

                {/* Content Side */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-block mb-4">
                      <span className="text-8xl font-serif font-bold text-gold-400/20">
                        0{activeStep + 1}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-4xl text-navy-900 mb-6">
                      {journeySteps[activeStep].title}
                    </h3>
                    <p className="text-lg text-black leading-relaxed">
                      {journeySteps[activeStep].description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="pt-8">
                    <div className="flex gap-3">
                      {journeySteps.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveStep(idx)}
                          className={`h-2 rounded-full transition-all duration-500 ${
                            idx === activeStep
                              ? 'w-20 bg-gold-400 shadow-lg shadow-gold-400/50'
                              : 'w-10 bg-gray-300 hover:bg-navy-900'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex gap-4 pt-4">
                    <motion.button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="group px-8 py-4 rounded-xl font-bold border-2 border-navy-900 text-navy-900 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
                      style={{
                        backgroundColor: 'transparent'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={(e) => {
                        if (activeStep !== 0) {
                          e.currentTarget.style.backgroundColor = '#1D3160';
                          e.currentTarget.style.color = 'white';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#1D3160';
                      }}
                    >
                      Previous
                    </motion.button>
                    <motion.button
                      onClick={() => setActiveStep(Math.min(journeySteps.length - 1, activeStep + 1))}
                      disabled={activeStep === journeySteps.length - 1}
                      className="group px-8 py-4 rounded-xl font-bold bg-gold-400 text-black border-2 border-gold-400 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 shadow-md shadow-gold-400/50"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onMouseEnter={(e) => {
                        if (activeStep !== journeySteps.length - 1) {
                          e.currentTarget.style.backgroundColor = 'black';
                          e.currentTarget.style.color = '#F4A261';
                          e.currentTarget.style.borderColor = 'black';
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#F4A261';
                        e.currentTarget.style.color = 'black';
                        e.currentTarget.style.borderColor = '#F4A261';
                      }}
                    >
                      Next Chapter
                    </motion.button>
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

