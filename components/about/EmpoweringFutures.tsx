'use client';

import { motion } from 'framer-motion';
import { KenteDivider, SectionBrushstroke } from '../shared/HilltopBrand';

const features = [
  {
    number: '01',
    title: 'Global Connections',
    description: "Access to Hilltop's network of host organizations, universities, and industry partners across seven African countries.",
  },
  {
    number: '02',
    title: 'Structured Pathways',
    description: 'Internship and study abroad programs matched to your academic focus, from fintech to public health to agribusiness.',
  },
  {
    number: '03',
    title: 'On-Ground Support',
    description: 'Dedicated coordinators in each destination, cohort-based learning, and mentorship from industry professionals.',
  },
];

export default function EmpoweringFutures() {
  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      {/* GlobalGlimpse-style section background brushstroke */}
      <SectionBrushstroke color="#F4A261" opacity={0.04} className="w-[500px] -bottom-16 -left-24" flip />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              What We Offer
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-none"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              What Working With Us<br className="hidden md:block" /> Looks Like
            </h2>
          </div>
          <p className="font-sans text-gray-500 text-base max-w-sm leading-relaxed">
            Every program is shaped by our experience on the ground and the trust of leading universities worldwide.
          </p>
        </div>

        <div className="border-t border-gray-200 mb-12" />

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-gray-200">
          {features.map((feature, i) => (
            <motion.div
              key={feature.number}
              className="group border-r border-gray-200 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
            >
              <div className="p-8 flex flex-col flex-1 border-b border-gray-200 md:border-b-0">
                <p
                  className="font-serif font-extrabold leading-none mb-6 select-none"
                  style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: '#F4A26120' }}
                >
                  {feature.number}
                </p>
                <div
                  className="w-8 h-[3px] rounded-full mb-5 transition-all duration-500 group-hover:w-16"
                  style={{ backgroundColor: '#F4A261' }}
                />
                <h3
                  className="font-serif font-bold text-xl mb-4 leading-snug"
                  style={{ color: '#1D3160' }}
                >
                  {feature.title}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
