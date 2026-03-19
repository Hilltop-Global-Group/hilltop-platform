'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { DecorativeUnderline, DottedAfricaMap, HighlightWord } from './shared/HilltopBrand';

const services = [
  {
    title: 'Design and Academics',
    description: "Custom faculty-led programs with contact hours and credit alignment built through faculty co-creation. Pre-departure orientation covering culture, logistics, and learning objectives.",
    cta: 'Learn More',
    href: '/education',
    images: [
      '/images/Turnkey-study-abroad3.jpg',
      '/images/Turnkey-study-abroad2.jpg',
      '/images/Turnkey-study-abroad1.JPG',
    ],
    imageAlt: 'Students participating in a Hilltop turnkey education abroad program in Africa',
  },
  {
    title: 'Projects and Partnerships',
    description: 'Live consulting and research sprints with cross-industry organizations. Curated corporate, startup, and innovation hub visits. Public and private sector briefings.',
    cta: 'Learn More',
    href: '/education',
    images: [
      '/images/hero-study-abroad.jpg',
      '/images/nkrumah-memorial.jpg',
      '/images/seminar-session.jpg',
    ],
    imageAlt: 'Faculty development program participants meeting with African academic leaders',
  },
  {
    title: 'Operations and Logistics',
    description: "Accommodation and ground transport with on-site coordinators. End-to-end event and schedule management. Risk management and duty-of-care protocols.",
    cta: 'Learn More',
    href: '/internships',
    images: [
      '/images/consult1.jpg',
      '/images/consult2.JPG',
      '/images/consult3.JPG',
    ],
    imageAlt: 'Interns working on a consulting project with an African fintech company',
  },
  {
    title: 'Culture, Impact, and Outcomes',
    description: "Curated cultural immersions and guided reflection sessions. Community-engaged projects co-created with local partners. Post-program impact reporting with measurable metrics.",
    cta: 'Learn More',
    href: '/education',
    images: [
      '/images/hero-cultural.jpg',
      '/images/cultural.jpg',
      '/images/cultural1.jpg',
    ],
    imageAlt: 'Hilltop program participants engaging with a local community in Ghana',
  },
];

const SLIDE_INTERVAL = 3200;
const TOTAL_SLIDES = 3;

export default function Services() {
  // Single shared index . all cards advance together
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % TOTAL_SLIDES);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <DottedAfricaMap color="#1D3160" opacity={0.04} className="absolute -right-10 bottom-0" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <div className="mb-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
            What We Deliver
          </p>
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10">
            <h2
              className="font-serif font-extrabold text-black leading-none flex-1"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              End-to-End Program{' '}
              <span className="relative inline-block whitespace-nowrap">
                Management
                <DecorativeUnderline />
              </span>
              <br className="hidden md:block" /> Across{' '}
              <HighlightWord>Africa</HighlightWord>
            </h2>
            {/* Vertical divider . desktop only */}
            <div className="hidden md:block w-px bg-gray-200 self-stretch flex-shrink-0" />
            <p className="font-sans text-gray-500 text-base max-w-sm leading-relaxed md:pt-1 flex-shrink-0">
              We architect learning experiences that place participants inside Africa's professional ecosystems, economic networks, and institutional frameworks.
            </p>
          </div>
        </div>

        {/* Thin divider */}
        <div className="border-t border-gray-200 mb-12" />

        {/* Service cards . all share the same slide index */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-gray-200">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group border-r border-gray-200 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              {/* Sliding photo */}
              <div className="relative overflow-hidden" style={{ height: 240 }}>
                <AnimatePresence mode="sync">
                  <motion.div
                    key={current}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${s.images[current]}')` }}
                    role="img"
                    aria-label={s.imageAlt}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />

                {/* Shared dot indicators */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
                  {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className="w-1.5 h-1.5 transition-all duration-300"
                      style={{ backgroundColor: idx === current ? '#F4A261' : 'rgba(255,255,255,0.45)' }}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 border-t border-gray-200">
                <h3 className="font-serif font-bold text-xl leading-tight mb-3" style={{ color: '#1D3160' }}>
                  {s.title}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {s.description}
                </p>
                <Link
                  href={s.href}
                  className="group/link inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-[0.15em] transition-colors duration-200"
                  style={{ color: '#1D3160' }}
                >
                  {s.cta}
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
