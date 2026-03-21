'use client';

import Link from 'next/link';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { KenteDivider, ArrowCTA, DecorativeUnderline } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';

const APPLICATION_URL = 'https://8xlyl7wsuni.typeform.com/to/ygqGReCF';

const programs = [
  {
    country: 'Ghana',
    city: 'Accra',
    href: '/internships/ghana',
    image: '/images/akwaaba-gh.jpeg',
    accent: '#1D3160',
    tagColor: '#10B981',
    tag: 'Applications Open',
    duration: '4 weeks in-country',
    deadline: 'April 15, 2026',
    description:
      'Embedded placements in Accra across fintech, agribusiness, healthcare, and creative industries. Work with vetted host organizations alongside a cohort of global peers.',
    highlights: ['Fintech & Technology', 'Agribusiness', 'Health & Social Impact', 'Creative Industries'],
  },
  {
    country: 'Rwanda',
    city: 'Kigali',
    href: '/internships/rwanda',
    image: '/images/kcc-scaled.webp',
    accent: '#F4A261',
    tagColor: '#10B981',
    tag: 'Applications Open',
    duration: '4 weeks in-country',
    deadline: 'April 15, 2026',
    description:
      'Project-driven placements in Kigali in partnership with African Leadership University. Placements span fintech, agritech, healthtech, and social innovation organizations.',
    highlights: ['Fintech & Digital Platforms', 'Agritech & Value Chains', 'Healthtech', 'Education & Social Innovation'],
  },
];

function ProgramCard({ prog, index }: { prog: typeof programs[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-500"
    >
      {/* Entire image + content block is the Link */}
      <Link
        href={prog.href}
        className="group flex-1 flex flex-col"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {/* Image */}
        <div className="relative h-64 overflow-hidden flex-shrink-0">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${prog.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/80 via-[#080f1c]/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1.5 text-white text-xs font-bold uppercase tracking-wider"
              style={{ backgroundColor: prog.tagColor }}
            >
              {prog.tag}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-1" style={{ color: prog.accent === '#1D3160' ? '#F4A261' : '#ffffff' }}>
              {prog.city}
            </p>
            <h3 className="font-serif font-extrabold text-2xl text-white">{prog.country} Internship Program</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="space-y-2.5 mb-5">
            <div className="flex items-center gap-3">
              <MapPin size={15} className="flex-shrink-0" style={{ color: prog.accent }} />
              <span className="font-sans text-gray-600 text-sm">{prog.city}, {prog.country}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock size={15} className="flex-shrink-0" style={{ color: prog.accent }} />
              <span className="font-sans text-gray-600 text-sm">{prog.duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={15} className="flex-shrink-0" style={{ color: prog.accent }} />
              <span className="font-sans text-gray-600 text-sm">
                Deadline: <span className="font-semibold" style={{ color: prog.accent }}>{prog.deadline}</span>
              </span>
            </div>
          </div>

          <p className="font-sans text-gray-500 text-sm leading-relaxed mb-5">{prog.description}</p>

          <div className="flex flex-wrap gap-2 mb-4 flex-1">
            {prog.highlights.map((h) => (
              <span
                key={h}
                className="self-start px-2.5 py-1 text-xs font-semibold border"
                style={{ borderColor: `${prog.accent}50`, color: prog.accent, backgroundColor: `${prog.accent}08` }}
              >
                {h}
              </span>
            ))}
          </div>

          <span
            className="inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] mt-auto pt-4 border-t border-gray-100"
            style={{ color: prog.accent }}
          >
            View Program Details
            <ArrowCTA color={prog.accent} />
          </span>
        </div>
      </Link>

      {/* Apply Now lives OUTSIDE the Link to avoid nested <a> */}
      <div className="px-6 pb-6">
        <a
          href={APPLICATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white transition-opacity duration-200 hover:opacity-80"
          style={{ backgroundColor: prog.accent }}
        >
          Apply Now
        </a>
      </div>
    </motion.div>
  );
}

export default function CurrentInternshipsGrid({ internships }: { internships: any[] }) {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <KenteDivider className="mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Open Programs
          </p>
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mb-14">
            <h2
              className="font-serif font-extrabold text-black leading-none flex-1"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              Current{' '}
              <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
                Internships
                <DecorativeUnderline color="#F4A261" />
              </span>
            </h2>
            <div className="hidden md:block w-px bg-gray-200 self-stretch flex-shrink-0" />
            <p className="font-sans text-gray-500 text-base max-w-sm leading-relaxed md:pt-1 flex-shrink-0">
              Explore our open internship programs across Africa&apos;s most dynamic markets. Deadline: April 15, 2026.
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((prog, index) => (
            <ProgramCard key={prog.country} prog={prog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


