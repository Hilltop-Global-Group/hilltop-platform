'use client';

import { motion } from 'framer-motion';

const universities = [
  { name: 'Howard University', location: 'Washington, DC' },
  { name: 'Georgetown University', location: 'Washington, DC' },
  { name: 'American University', location: 'Washington, DC' },
  { name: 'African Leadership University', location: 'Kigali, Rwanda' },
  { name: 'University of Ghana', location: 'Accra, Ghana' },
  { name: 'KNUST', location: 'Kumasi, Ghana' },
  { name: 'University of Accra', location: 'Accra, Ghana' },
  { name: 'Spelman College', location: 'Atlanta, GA' },
  { name: 'Morehouse College', location: 'Atlanta, GA' },
  { name: 'Duke University', location: 'Durham, NC' },
  { name: 'UNC Chapel Hill', location: 'Chapel Hill, NC' },
  { name: 'Emory University', location: 'Atlanta, GA' },
];

export default function UniversityPartners() {
  return (
    <section className="relative overflow-hidden py-20 bg-gray-50">

      {/* Decorative: wavy top edge */}
      <motion.div className="pointer-events-none absolute top-0 left-0 right-0" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="50" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 28 C180 5, 360 50, 540 26 S900 3, 1080 28 S1350 50, 1440 28" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.12"/>
        </svg>
      </motion.div>

      {/* Decorative: concentric arcs — top right */}
      <motion.div className="pointer-events-none absolute -top-16 -right-16" aria-hidden initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="340" cy="0" r="280" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.11" />
          <circle cx="340" cy="0" r="200" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.08" />
          <circle cx="340" cy="0" r="120" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.05" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom left */}
      <motion.div className="pointer-events-none absolute bottom-8 left-8" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={14 + col * 28} cy={14 + row * 28} r="2.5" fill="#1D3160" opacity="0.14" />
          )))}
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Trusted by Leading Universities
          </h2>
          <p className="text-xl text-gray-600">
            Partnering with institutions committed to global education
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {universities.map((university, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-md transition-all duration-300 hover:-translate-y-1 text-center"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold"
                style={{ backgroundColor: index % 2 === 0 ? '#1D3160' : '#F4A261' }}
              >
                {university.name.charAt(0)}
              </div>
              <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                {university.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {university.location}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            And many more institutions worldwide...
          </p>
        </div>
      </div>
    </section>
  );
}

