'use client';

import { Clock, Wifi, Wind, Coffee, Users, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { KenteDivider, DecorativeUnderline, HighlightWord } from '../shared/HilltopBrand';

const amenities = [
  { icon: Clock,  text: '24-hour front desk',    description: 'Reputable hotels with round-the-clock staff and security' },
  { icon: Wifi,   text: 'High-speed Wi-Fi',       description: 'Reliable connectivity for work and study throughout the stay' },
  { icon: Wind,   text: 'Air-conditioned rooms',  description: 'Comfortable rooms suited to the local climate' },
  { icon: Coffee, text: 'Breakfast access',        description: 'On-site breakfast included or nearby options available' },
  { icon: Users,  text: 'Common lounge areas',    description: 'Shared spaces for cohort meetings and collaborative work' },
  { icon: Car,    text: 'Transport coordination',  description: 'Group transport for orientation, excursions, and departures' },
];

export default function Accommodation() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">

          {/* Photo: framed like ProgramOverview */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative overflow-hidden shadow-xl" style={{ minHeight: 420 }}>
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('/images/cocoa-farm.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="px-5 py-4" style={{ backgroundColor: 'rgba(8,15,28,0.72)', backdropFilter: 'blur(6px)' }}>
                  <p className="text-white font-serif font-bold text-base">Safe, comfortable accommodation.</p>
                  <p className="text-white/60 text-sm mt-1">Pre-vetted hotels near placement sites</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-l-[3px] border-b-[3px]" style={{ borderColor: '#F4A261' }} />
          </motion.div>

          {/* Text */}
          <FadeIn>
            <KenteDivider className="mb-8" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              Where You Stay
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Accommodation &{' '}
              <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
                Local Support
                <DecorativeUnderline color="#F4A261" />
              </span>
            </h2>
            <div className="space-y-4">
              <p className="font-sans text-gray-600 text-base leading-relaxed">
                Interns stay at Hilltop-vetted partner hotels, selected for safety, comfort, and proximity to placement sites. Rooms are twin-share by default; single-room upgrades are available on request.
              </p>
              <p className="font-sans text-gray-500 text-base leading-relaxed">
                A dedicated on-ground coordinator is present in each city to check in on intern well-being, liaise with the hotel, and facilitate orientations and safety briefings throughout the program.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Amenity grid */}
        <div className="border-t border-gray-200 pt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <motion.div
                  key={index}
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
                    <Icon size={18} className="text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-gray-800 text-sm mb-1">{amenity.text}</p>
                    <p className="font-sans text-gray-400 text-xs leading-relaxed">{amenity.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
