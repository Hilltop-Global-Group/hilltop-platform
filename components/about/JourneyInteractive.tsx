'use client';

import { useState } from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const journeySteps = [
  {
    id: 'foundation',
    year: '2014',
    title: 'The Foundation',
    description: 'Hilltop Global Group was founded with a vision to transform education access across Africa. What started as a small initiative quickly grew into a movement, driven by the belief that every student deserves access to world-class opportunities.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
    stats: [
      { label: 'Students', value: '50+' },
      { label: 'Partners', value: '3' },
    ]
  },
  {
    id: 'expansion',
    year: '2016-2018',
    title: 'Growth & Expansion',
    description: 'We expanded our programs to multiple African countries, establishing partnerships with leading universities and organizations. Our commitment to empowering learners became the cornerstone of every program we designed.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
    stats: [
      { label: 'Students', value: '500+' },
      { label: 'Countries', value: '5' },
    ]
  },
  {
    id: 'innovation',
    year: '2019-2021',
    title: 'Innovation Era',
    description: 'We introduced cutting-edge programs and innovative approaches to international education. From virtual internships to hybrid programs, we adapted to meet the evolving needs of students worldwide.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
    stats: [
      { label: 'Programs', value: '15+' },
      { label: 'Universities', value: '20+' },
    ]
  },
  {
    id: 'leadership',
    year: '2022-Present',
    title: 'Industry Leadership',
    description: 'Today, we are recognized as leaders in international education and cultural exchange programs. Our growth reflects our dedication to inclusive education and extending opportunities to diverse communities across the globe.',
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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#1D3160 1px, transparent 1px), linear-gradient(90deg, #1D3160 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4 border border-gold-400/30 px-4 py-2 rounded-full">
              Our Journey
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-navy-900 mb-4">
              A Decade of Transformation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Click through the chapters of our story to see how we've grown and evolved
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Navigation */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {journeySteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-500 ${
                  activeStep === index
                    ? 'bg-navy-900 text-white shadow-xl scale-110'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span className="relative z-10">{step.year}</span>
                {activeStep === index && (
                  <div className="absolute inset-0 bg-navy-900 rounded-full blur-xl opacity-30 animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content Area */}
        <div className="relative">
          {journeySteps.map((step, index) => (
            <div
              key={step.id}
              className={`transition-all duration-700 ${
                activeStep === index
                  ? 'opacity-100 scale-100 relative'
                  : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Image Side */}
                <div className="relative group">
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/20 to-transparent" />
                    
                    {/* Floating year badge */}
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                      <span className="font-heading font-bold text-2xl text-navy-900">
                        {step.year}
                      </span>
                    </div>

                    {/* Stats overlay */}
                    <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                      {step.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="flex-1 bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center"
                        >
                          <div className="font-heading font-bold text-2xl text-navy-900 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-600 font-semibold uppercase tracking-wide">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative border */}
                  <div className="absolute -inset-4 border-2 border-navy-900/10 rounded-2xl -z-10" />
                </div>

                {/* Content Side */}
                <div className="space-y-6">
                  <div>
                    <div className="inline-block mb-4">
                      <span className="text-7xl font-heading font-bold text-navy-900/5">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-4xl text-navy-900 mb-6">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Progress indicator */}
                  <div className="pt-8">
                    <div className="flex gap-2">
                      {journeySteps.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveStep(idx)}
                          className={`h-1 rounded-full transition-all duration-500 ${
                            idx === activeStep
                              ? 'w-16 bg-navy-900'
                              : 'w-8 bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Navigation arrows */}
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                      disabled={activeStep === 0}
                      className="px-6 py-3 rounded-full font-semibold border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setActiveStep(Math.min(journeySteps.length - 1, activeStep + 1))}
                      disabled={activeStep === journeySteps.length - 1}
                      className="px-6 py-3 rounded-full font-semibold bg-navy-900 text-white hover:bg-navy-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
                    >
                      Next Chapter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

