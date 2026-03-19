'use client';

import { Calendar, TrendingUp, MapPin } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';

const schedule = [
  {
    icon: Calendar,
    label: 'Mon–Thu',
    description: 'On-site internship, project work, and supervisor check-ins.',
    bg: '#1D3160',
  },
  {
    icon: TrendingUp,
    label: 'Fridays',
    description: 'Leadership and development sessions or project-based sessions.',
    bg: '#F4A261',
  },
  {
    icon: MapPin,
    label: 'Saturday & Sunday',
    description: 'Cultural excursions, community engagement, or personal time.',
    bg: '#1D3160',
  },
];

export default function GhanaSampleWeek() {
  return (
    <section className="py-20 sm:py-28 bg-[#080f1c]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Schedule</Eyebrow>
            <h2
              className="font-serif font-extrabold text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Sample{' '}
              <span className="relative inline-block whitespace-nowrap">
                Week
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {schedule.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border border-gray-700 bg-white/5 p-8">
                  <div
                    className="w-14 h-14 flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: item.bg }}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-serif font-extrabold text-xl mb-4 text-center text-white">
                    {item.label}
                  </h3>
                  <p className="font-sans text-gray-300 text-center">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
