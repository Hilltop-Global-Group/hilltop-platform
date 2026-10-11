'use client';

import { BookMarked, Luggage, Plane, ShieldCheck, Stamp, Syringe, Video } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import { preDepartureRequirements, type PreDepartureRequirement } from '@/lib/ghana-2027-data';

const iconMap: Record<PreDepartureRequirement['icon'], LucideIcon> = {
  passport: BookMarked,
  visa: Stamp,
  vaccination: Syringe,
  flights: Plane,
  insurance: ShieldCheck,
  packing: Luggage,
  orientation: Video,
};

export default function Ghana2027PreDeparture() {
  return (
    <section id="pre-departure" className="py-20 sm:py-28 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Before You Travel</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Pre-Departure{' '}
              <span className="relative inline-block whitespace-nowrap">
                Requirements
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {preDepartureRequirements.map((requirement, index) => {
            const Icon = iconMap[requirement.icon];
            return (
              <motion.div
                key={requirement.title}
                className="bg-white border border-gray-100 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ backgroundColor: index % 2 === 0 ? '#1D3160' : '#F4A261' }}
                >
                  <Icon size={18} className="text-white" strokeWidth={2} aria-hidden />
                </div>
                <div>
                  <p className="font-serif font-bold text-base mb-1" style={{ color: '#1D3160' }}>
                    {requirement.title}
                  </p>
                  <p className="font-sans text-gray-500 text-sm leading-relaxed">
                    {requirement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
