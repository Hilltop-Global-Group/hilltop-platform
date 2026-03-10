'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { DecorativeUnderline } from './shared/HilltopBrand';

const services = [
  {
    title: 'Turnkey Study Abroad Programs',
    description: "Fully managed programs built around your institution's academic goals. Logistics, housing, and on-ground coordination across Ghana, Rwanda, and beyond.",
    cta: 'See How It Works',
    href: '/education',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
    imageAlt: 'Students participating in a Hilltop study abroad program in Accra, Ghana',
  },
  {
    title: 'Faculty Development Initiatives',
    description: 'Short-term immersions for faculty and academic leaders to engage directly with African institutions, industry, and culture.',
    cta: 'Design a Faculty Program',
    href: '/education',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg',
    imageAlt: 'Faculty development program participants meeting with African academic leaders',
  },
  {
    title: 'Consulting Project Sourcing',
    description: "Projects sourced in Africa's fastest-growing sectors: fintech, agribusiness, healthcare, and clean energy. Students work on real problems.",
    cta: 'View Project Examples',
    href: '/internships',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
    imageAlt: 'Interns working on a consulting project with an African fintech company',
  },
  {
    title: 'Cultural and Humanitarian Experiences',
    description: "Cultural programming and community engagement built alongside local partners, designed with the host community's voice at the center.",
    cta: 'Explore Cultural Programs',
    href: '/education',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
    imageAlt: 'Hilltop program participants engaging with a local community in Ghana',
  },
];

export default function Services() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section header */}
        <div className="mb-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
            What We Build With Partners
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="font-serif font-extrabold text-black leading-none"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
            >
              Programs That{' '}
              <span className="relative inline-block whitespace-nowrap">
                Move
                <DecorativeUnderline />
              </span>
              <br className="hidden md:block" /> People Forward
            </h2>
            <p className="font-sans text-gray-500 text-base max-w-sm md:text-right leading-relaxed">
              Every program starts with a question: what does your institution need from Africa, and what can Africa gain from your students?
            </p>
          </div>
        </div>

        {/* Thin divider */}
        <div className="border-t border-gray-200 mb-12" />

        {/* Service cards — Dalberg-style bordered grid */}
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
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: 240 }}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${s.image}')` }}
                  role="img"
                  aria-label={s.imageAlt}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
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
