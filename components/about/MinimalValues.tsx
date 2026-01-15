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
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4 border border-gold-400/30 px-4 py-2 rounded-full">
              Our Values
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-navy-900 mb-4">
              What Defines Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer group ${
                  hoveredValue === value.id
                    ? 'shadow-2xl scale-[1.02]'
                    : 'shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Left accent bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 bg-navy-900 transition-all duration-500 ${
                    hoveredValue === value.id ? 'w-2' : ''
                  }`}
                />

                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <span
                        className={`font-heading font-bold transition-all duration-500 ${
                          hoveredValue === value.id
                            ? 'text-8xl text-navy-900'
                            : 'text-7xl text-gray-200'
                        }`}
                      >
                        {value.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="mb-3">
                        <h3 className="font-heading font-bold text-3xl text-navy-900 mb-1">
                          {value.title}
                        </h3>
                        <p className="text-sm text-gold-400 font-semibold uppercase tracking-wide">
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
                        <p className="text-gray-700 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-full border-2 border-navy-900 flex items-center justify-center transition-all duration-500 ${
                          hoveredValue === value.id
                            ? 'bg-navy-900 rotate-45'
                            : 'bg-transparent'
                        }`}
                      >
                        <svg
                          className={`w-5 h-5 transition-colors duration-500 ${
                            hoveredValue === value.id ? 'text-white' : 'text-navy-900'
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
                  className={`h-1 bg-gradient-to-r from-navy-900 via-gold-400 to-navy-900 transition-all duration-500 ${
                    hoveredValue === value.id ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

