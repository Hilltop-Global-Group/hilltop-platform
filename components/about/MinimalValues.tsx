'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const values = [
  {
    id: 'excellence',
    number: '01',
    title: 'Excellence',
    tagline: 'Uncompromising Standards',
    description: 'We maintain the highest standards in everything we do. From program design to student support, excellence is not just a goal—it\'s our baseline. Every experience is crafted to be transformative and impactful.',
  },
  {
    id: 'integrity',
    number: '02',
    title: 'Integrity',
    tagline: 'Trust Through Transparency',
    description: 'We operate with complete transparency and honesty. Our relationships with students, partners, and institutions are built on trust, accountability, and unwavering ethical standards.',
  },
  {
    id: 'innovation',
    number: '03',
    title: 'Innovation',
    tagline: 'Forward-Thinking Solutions',
    description: 'We continuously innovate to break down barriers in education. Our forward-thinking approach creates unique pathways for students to gain global experience and cultural understanding.',
  },
  {
    id: 'impact',
    number: '04',
    title: 'Impact',
    tagline: 'Transforming Lives',
    description: 'Every program, every partnership, every decision is measured by its impact on students\' lives. We don\'t just facilitate placements—we create opportunities that change futures.',
  },
];

export default function MinimalValues() {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-900/10 rounded-full blur-3xl" />
      
      {/* Top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-navy-900" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gold-400" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-bold text-black uppercase tracking-wider mb-4 border-2 border-gold-400 px-6 py-2 rounded-full bg-gold-400">
              Our Values
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-navy-900 mb-4">
              What Defines Us
            </h2>
            <p className="text-lg text-black max-w-2xl mx-auto">
              The principles that guide every decision, every program, every partnership
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {values.map((value, index) => (
            <ScrollReveal
              key={value.id}
              animation="fade-up"
              delay={index * 100}
            >
              <div
                onMouseEnter={() => setHoveredValue(value.id)}
                onMouseLeave={() => setHoveredValue(null)}
                className={`relative rounded-lg overflow-hidden transition-all duration-500 cursor-pointer group border-4 ${
                  hoveredValue === value.id
                    ? 'shadow-lg shadow-gold-400/50 scale-[1.02] border-gold-400 bg-navy-900'
                    : 'shadow-lg hover:shadow-md border-navy-900 bg-white'
                }`}
              >
                {/* Left accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 transition-all duration-500 ${
                    hoveredValue === value.id ? 'w-4 bg-gold-400' : 'w-2 bg-navy-900'
                  }`}
                />

                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                    {/* Number */}
                    <div className="flex-shrink-0 relative">
                      {hoveredValue === value.id && (
                        <div className="absolute inset-0 bg-gold-400/30 blur-2xl" />
                      )}
                      <span
                        className={`relative font-serif font-bold transition-all duration-500 ${
                          hoveredValue === value.id
                            ? 'text-8xl text-gold-400'
                            : 'text-7xl text-gray-200'
                        }`}
                      >
                        {value.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className={`font-serif font-bold text-3xl mb-1 transition-colors duration-500 ${
                          hoveredValue === value.id ? 'text-white' : 'text-navy-900'
                        }`}>
                          {value.title}
                        </h3>
                        <p className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-500 ${
                          hoveredValue === value.id ? 'text-gold-400' : 'text-gold-400'
                        }`}>
                          {value.tagline}
                        </p>
                      </div>
                      
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          hoveredValue === value.id
                            ? 'max-h-40 opacity-100'
                            : 'max-h-0 md:max-h-40 opacity-0 md:opacity-100'
                        }`}
                      >
                        <p className={`leading-relaxed transition-colors duration-500 ${
                          hoveredValue === value.id ? 'text-white' : 'text-black'
                        }`}>
                          {value.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                          hoveredValue === value.id
                            ? 'bg-gold-400 border-gold-400 rotate-45'
                            : 'bg-transparent border-navy-900'
                        }`}
                      >
                        <svg
                          className={`w-6 h-6 transition-colors duration-500 ${
                            hoveredValue === value.id ? 'text-black' : 'text-navy-900'
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom border animation */}
                <div
                  className={`h-3 transition-all duration-500 ${
                    hoveredValue === value.id ? 'opacity-100 bg-gold-400' : 'opacity-0 bg-navy-900'
                  }`}
                />
                
                {/* Glow effect */}
                {hoveredValue === value.id && (
                  <div className="absolute inset-0 bg-gold-400/10 blur-2xl pointer-events-none" />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

