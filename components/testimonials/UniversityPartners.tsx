'use client';

import { motion } from 'framer-motion';

const universities = [
  { name: 'Georgetown University', location: 'Washington, DC' },
  { name: 'American University', location: 'Washington, DC' },
  { name: 'African Leadership University', location: 'Kigali, Rwanda' },
  { name: 'University of Ghana', location: 'Accra, Ghana' },
  { name: 'KNUST', location: 'Kumasi, Ghana' },
  { name: 'And More', location: '' },
];

export default function UniversityPartners() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
          Our Partners
        </p>
        <h2
          className="font-serif font-extrabold text-black leading-none mb-14"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Trusted by Leading Universities
        </h2>

        <div className="border-t border-gray-200" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {universities.map((university, index) => (
            <motion.div
              key={university.name}
              className="py-8 pr-6 border-b border-r border-gray-200 last:border-r-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <p className="font-serif font-bold text-base mb-1" style={{ color: '#1D3160' }}>
                {university.name}
              </p>
              {university.location ? (
                <p className="font-sans text-gray-400 text-xs">{university.location}</p>
              ) : null}
            </motion.div>
          ))}
        </div>

        <p className="font-sans text-gray-400 text-xs mt-8 uppercase tracking-wider">
          Partner roster grows each cycle
        </p>
      </div>
    </section>
  );
}

