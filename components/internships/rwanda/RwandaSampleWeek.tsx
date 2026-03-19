'use client';

import { Calendar, TrendingUp, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, HighlightWord } from '@/components/shared/HilltopBrand';

const weekdays = [
  {
    icon: Calendar,
    label: 'Mon–Thu',
    description: 'On-site internship, project work, and supervisor check-ins.',
    accent: '#1D3160',
  },
  {
    icon: TrendingUp,
    label: 'Fridays',
    description: 'Leadership and development sessions or project-based sessions.',
    accent: '#F4A261',
  },
  {
    icon: MapPin,
    label: 'Saturday & Sunday',
    description: 'Cultural immersion, excursions, or personal downtime.',
    accent: '#1D3160',
  },
];

export default function RwandaSampleWeek() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        <FadeIn>
          <div className="text-center mb-14">
            <KenteDivider className="mx-auto mb-6" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
              Weekly Structure
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Sample{' '}
              <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
                Week
                <DecorativeUnderline />
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        <div className="grid md:grid-cols-3 gap-6">
          {weekdays.map((day, i) => {
            const Icon = day.icon;
            return (
              <motion.div
                key={i}
                className="bg-white border border-gray-100 p-8 text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: day.accent }}
                >
                  <Icon size={28} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="font-serif font-bold text-xl mb-4" style={{ color: '#1D3160' }}>
                  {day.label}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">
                  {day.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
