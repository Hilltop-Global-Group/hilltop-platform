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
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #F4A261 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
      </div>

      {/* Accent shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-navy-900/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-black uppercase tracking-wider mb-4 border-2 border-gold-400 px-6 py-2 rounded-full bg-gold-400">
              Our Journey
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
              A Decade of Transformation
            </h2>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Click through the chapters of our story to see how we've grown and evolved
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Navigation */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {journeySteps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`relative px-8 py-4 rounded-xl font-bold transition-all duration-500 border-2 ${
                  activeStep === index
                    ? 'bg-gold-400 border-gold-400 text-black shadow-2xl shadow-gold-400/50 scale-110'
                    : 'bg-navy-900 border-navy-900 text-white hover:bg-navy-800 hover:border-gold-400'
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
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-gold-400">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Image Side */}
                  <div className="relative group">
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-navy-900">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      
                      {/* Floating year badge */}
                      <div className="absolute top-6 left-6 bg-gold-400 px-6 py-3 rounded-xl shadow-2xl border-2 border-black">
                        <span className="font-heading font-bold text-2xl text-black">
                          {step.year}
                        </span>
                      </div>

                      {/* Stats overlay */}
                      <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                        {step.stats.map((stat) => (
                          <div
                            key={stat.label}
                            className="flex-1 bg-white rounded-xl p-4 text-center border-2 border-gold-400"
                          >
                            <div className="font-heading font-bold text-3xl text-navy-900 mb-1">
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
                    <div className="absolute -inset-4 border-4 border-gold-400/30 rounded-2xl -z-10" />
                  </div>

                  {/* Content Side */}
                  <div className="space-y-6">
                    <div>
                      <div className="inline-block mb-4">
                        <span className="text-8xl font-heading font-bold text-gold-400/20">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-4xl text-navy-900 mb-6">
                        {step.title}
                      </h3>
                      <p className="text-lg text-black leading-relaxed">
                        {step.description}
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
                      <button
                        onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                        disabled={activeStep === 0}
                        className="px-8 py-4 rounded-xl font-bold border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setActiveStep(Math.min(journeySteps.length - 1, activeStep + 1))}
                        disabled={activeStep === journeySteps.length - 1}
                        className="px-8 py-4 rounded-xl font-bold bg-gold-400 text-black border-2 border-gold-400 hover:bg-black hover:text-gold-400 hover:border-black disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-300 shadow-xl shadow-gold-400/50"
                      >
                        Next Chapter
                      </button>
                    </div>
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

