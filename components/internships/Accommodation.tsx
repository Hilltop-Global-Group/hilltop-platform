'use client';

import { 
  Clock, 
  Wifi, 
  Wind, 
  Coffee, 
  Users, 
  Car,
} from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const amenities = [
  { icon: Clock,  text: '24-hour front desk',        description: 'Reputable hotels with round-the-clock staff and security' },
  { icon: Wifi,   text: 'High-speed Wi-Fi',           description: 'Reliable connectivity for work and study throughout the stay' },
  { icon: Wind,   text: 'Air-conditioned rooms',      description: 'Comfortable rooms suited to the local climate' },
  { icon: Coffee, text: 'Breakfast access',           description: 'On-site breakfast included or nearby café options available' },
  { icon: Users,  text: 'Common lounge areas',        description: 'Shared spaces for cohort meetings and collaborative work' },
  { icon: Car,    text: 'Transport coordination',     description: 'Group transport for orientation, excursions, and departures' },
];

export default function Accommodation() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center mb-14">

          {/* Photo */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{ minHeight: 400 }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-serif font-bold text-lg">Safe, comfortable accommodation.</p>
              <p className="text-white/70 text-sm mt-1">Pre-vetted hotels near placement sites</p>
            </div>
          </motion.div>

          {/* Text */}
          <FadeIn>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-5" style={{ color: '#1D3160' }}>
              Accommodation and Local Support
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Interns stay at Hilltop-vetted partner hotels, selected for safety, comfort, and proximity to placement sites. Rooms are twin-share by default; single-room upgrades are available on request.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A dedicated on-ground coordinator is present in each city to check in on intern well-being, liaise with the hotel, and facilitate orientations and safety briefings throughout the program.
            </p>
          </FadeIn>
        </div>

        {/* Amenity grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
              >
                <div 
                  className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: index % 2 === 0 ? '#1D3160' : '#F4A261' }}
                >
                  <Icon size={22} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{amenity.text}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{amenity.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
