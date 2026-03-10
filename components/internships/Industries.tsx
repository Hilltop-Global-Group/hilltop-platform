'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { KenteDivider, ArrowCTA } from '../shared/HilltopBrand';

const destinations = [
  {
    country: 'Ghana',
    city: 'Accra',
    flag: '🇬🇭',
    href: '/internships/ghana',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
    accent: '#1D3160',
    description: "Ghana\u2019s capital is a hub for tech startups, financial services, and creative industries \u2014 with a rich cultural heritage and a fast-growing entrepreneurial ecosystem.",
    industries: [
      'Technology & Data',
      'Finance & Investment',
      'Agribusiness & Food Systems',
      'Health & Social Impact',
      'Creative & Marketing',
    ],
    mapPath: 'M 42 10 C 50 8, 68 10, 80 22 C 90 32, 88 50, 82 62 C 76 74, 68 80, 56 84 C 44 88, 30 82, 22 70 C 14 58, 14 42, 22 30 C 30 18, 36 12, 42 10 Z',
  },
  {
    country: 'Rwanda',
    city: 'Kigali',
    flag: '🇷🇼',
    href: '/internships/rwanda',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
    accent: '#F4A261',
    description: "Kigali is East Africa\u2019s most dynamic innovation city \u2014 known for its fintech ecosystem, agritech startups, and the continent-renowned African Leadership University.",
    industries: [
      'Fintech & Digital Platforms',
      'Agritech & Value Chains',
      'Healthtech',
      'Education & Social Innovation',
      'Creative & Cultural',
    ],
    mapPath: 'M 50 8 C 62 8, 76 16, 82 30 C 88 44, 84 60, 74 70 C 64 80, 48 84, 36 76 C 24 68, 18 52, 22 38 C 26 24, 36 10, 50 8 Z',
  },
];

export default function Industries() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header with dotted Africa map beside it */}
        <FadeIn>
          <div className="flex items-start gap-8 mb-4">
            <div className="flex-1">
              <KenteDivider className="mb-6" />
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
                Where We Work
              </p>
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
                <h2
                  className="font-serif font-extrabold text-black leading-none flex-1"
                  style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
                >
                  Industries &{' '}
                  <span style={{ color: '#F4A261' }}>Placements</span>
                </h2>
                <div className="hidden md:block w-px bg-gray-200 self-stretch flex-shrink-0" />
                <p className="font-sans text-gray-500 text-base max-w-sm leading-relaxed md:pt-1 flex-shrink-0">
                  Interns are matched to host organizations based on academic background and career interests across each country's key growth sectors.
                </p>
              </div>
            </div>

            {/* Dotted Africa map — decorative, desktop only */}
            <div className="hidden lg:block flex-shrink-0 opacity-10" aria-hidden>
              <svg width="80" height="100" viewBox="0 0 100 120" fill="none">
                {/* Dotted Africa outline */}
                {Array.from({ length: 12 }).map((_, row) =>
                  Array.from({ length: 8 }).map((_, col) => {
                    const cx = 10 + col * 11;
                    const cy = 10 + row * 9;
                    // Simple bounding box clip for Africa shape
                    const inAfrica = (
                      (row >= 0 && row <= 2 && col >= 2 && col <= 5) ||
                      (row >= 3 && row <= 5 && col >= 1 && col <= 6) ||
                      (row >= 6 && row <= 8 && col >= 2 && col <= 6) ||
                      (row >= 9 && row <= 11 && col >= 3 && col <= 5)
                    );
                    return inAfrica ? (
                      <circle key={`${row}-${col}`} cx={cx} cy={cy} r="2.5" fill="#1D3160" />
                    ) : null;
                  })
                )}
              </svg>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 mb-12" />
        </FadeIn>

        {/* Destination cards — GlobalGlimpse "Explore Our Destinations" style */}
        <div className="grid md:grid-cols-2 gap-8">
          {destinations.map((dest, idx) => (
            <FadeIn key={idx} delay={idx * 0.12}>
              <div className="group border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">

                {/* Country photo */}
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${dest.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/80 via-[#080f1c]/30 to-transparent" />

                  {/* Country name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                    <div>
                      <p
                        className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-1"
                        style={{ color: dest.accent === '#1D3160' ? '#F4A261' : '#ffffff' }}
                      >
                        {dest.city}
                      </p>
                      <h3 className="font-serif font-extrabold text-white" style={{ fontSize: '2rem' }}>
                        {dest.country}
                      </h3>
                    </div>

                    {/* Country map SVG outline */}
                    <div className="opacity-60">
                      <svg width="56" height="56" viewBox="0 0 100 100" fill="none">
                        <path d={dest.mapPath} fill="white" fillOpacity="0.25" stroke="white" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-7 flex-1 flex flex-col bg-white">
                  <p className="font-sans text-gray-600 text-sm leading-relaxed mb-5">
                    {dest.description}
                  </p>

                  <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
                    Key Industries
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6 flex-1">
                    {dest.industries.map((industry: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs font-semibold border"
                        style={{
                          borderColor: `${dest.accent}50`,
                          color: dest.accent,
                          backgroundColor: `${dest.accent}08`,
                        }}
                      >
                        {industry}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={dest.href}
                    className="group/link inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] border-b pb-1 transition-colors duration-200 self-start mt-auto"
                    style={{ color: dest.accent, borderColor: `${dest.accent}60` }}
                  >
                    View {dest.country} Program
                    <ArrowCTA color={dest.accent} />
                  </Link>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
