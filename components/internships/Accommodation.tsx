'use client';

import { 
  Clock, 
  Wifi, 
  Wind, 
  Coffee, 
  Users, 
  Shirt, 
  UtensilsCrossed, 
  Sparkles,
  Car,
  HeadphonesIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

const amenities = [
  { icon: Clock, text: '24-hour front desk & on-site security', description: 'Reputable hotels with round-the-clock staff and security presence' },
  { icon: Wifi, text: 'Complimentary high-speed Wi-Fi', description: 'Reliable connectivity for work & study' },
  { icon: Sparkles, text: 'Housekeeping & fresh linens', description: 'Room care and clean linens included' },
  { icon: Wind, text: 'Air-conditioning / reliable ventilation', description: 'Comfortable rooms suited to local climate' },
  { icon: Coffee, text: 'On-site breakfast or nearby café', description: 'Breakfast included or accessible local options' },
  { icon: Users, text: 'Common lounge / meeting areas', description: 'Spaces for cohort meetings and working groups' },
  { icon: Shirt, text: 'Laundry services (subject to fees)', description: 'Convenient on-site or nearby laundry options' },
  { icon: UtensilsCrossed, text: 'Access to on-site restaurant / dining', description: 'Multiple meal options for interns' },
  { icon: HeadphonesIcon, text: 'Support from Hilltop coordinators', description: 'Hotel-related assistance and coordination as needed' },
];

export default function Accommodation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative overflow-hidden py-20 bg-slate-50">

      {/* Decorative: wave path — top edge */}
      <motion.div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="55" viewBox="0 0 1440 55" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 30 C180 0, 360 55, 540 28 S900 0, 1080 30 S1350 55, 1440 28" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.07"/>
          <path d="M0 42 C300 14, 600 60, 900 38 S1260 10, 1440 42" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04"/>
        </svg>
      </motion.div>

      {/* Decorative: concentric arcs — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-16 -right-16" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="360" cy="0" r="300" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="360" cy="0" r="230" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="360" cy="0" r="160" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
          <circle cx="360" cy="0" r="90"  stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-8 left-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={15 + col * 30} cy={15 + row * 30} r="3" fill="#1D3160" opacity="0.1" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: diagonal lines — bottom right */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-8 -right-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="80"  x2="80"  y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.07" />
          <line x1="0" y1="130" x2="130" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.05" />
          <line x1="0" y1="180" x2="180" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.04" />
          <line x1="30" y1="220" x2="220" y2="30" stroke="#1D3160" strokeWidth="1" opacity="0.03" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Accommodation & Local Support
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Interns stay at Hilltop partner hotels, vetted for safety, comfort, and proximity to placement sites. Rooms are twin-share by default; single-room upgrades are limited and available on request.
          </p>
        </div>

        {/* Amenities Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
                <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                variants={itemVariants}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: index % 2 === 0 ? '#1D3160' : '#F4A261' }}
                >
                  <Icon size={24} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                  {amenity.text}
                </h3>
                <p className="text-gray-600 text-sm">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <div 
          className="bg-white rounded-lg p-8 shadow-lg mb-8"
          style={{ borderLeft: '4px solid #F4A261' }}
        >
          <p className="text-gray-700 text-sm">
            <span className="font-bold">Note:</span> All accommodation options are pre-vetted, comfortable, and meet international safety standards for visiting students.
          </p>
        </div>

        {/* Transport & Support */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#1D3160' }}
              >
                <Car size={28} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                Transport & Accessibility
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Interns use available ride-hailing apps (e.g., Bolt, Yango, Uber) or Hilltop-arranged shuttles for daily commutes and group activities.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span style={{ color: '#F4A261' }}>•</span>
                <span>Group transport for arrival, orientation, excursions and departures</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F4A261' }}>•</span>
                <span>Pre-Departure Pack includes commuting options, safety notes, and estimated daily transport costs</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#F4A261' }}
              >
                <HeadphonesIcon size={28} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                Local Support
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Each destination has a dedicated Hilltop on-ground coordinator available to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span style={{ color: '#1D3160' }}>•</span>
                <span>Check in on intern well-being and respond to emergencies</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#1D3160' }}>•</span>
                <span>Liaise with hotel management for any concerns</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#1D3160' }}>•</span>
                <span>Facilitate cohort meetings, orientations, and safety briefings</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-8 italic">
          Final placements and hotel assignments are confirmed before departure. Interns receive host profiles and a full work plan during pre-departure orientation.
        </p>
      </div>
    </section>
  );
}

