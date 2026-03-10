'use client';

import { motion } from 'framer-motion';

const universities = [
  'Howard University',
  'Georgetown University',
  'University of Michigan',
  'Duke University',
  'Morehouse College',
  'Spelman College',
  'Emory University',
  'UNC Chapel Hill',
];

export default function Partners() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 mb-10">
          Trusted by Students from Leading Universities
        </p>

        {/* University names — horizontal scrollable on mobile */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-12">
          {universities.map((name, i) => (
            <motion.span
              key={name}
              className="font-serif font-bold text-gray-800 text-base sm:text-lg cursor-default select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
            >
              {name}
            </motion.span>
          ))}
        </div>

        {/* Thin divider */}
        <div className="border-t border-gray-100 pt-10">
          <div className="grid grid-cols-3 gap-4 text-left">
            {[
              { value: '7+',         label: 'African Countries' },
              { value: 'GH & RW',    label: 'Active Internship Destinations' },
              { value: '50+',        label: 'Host Organizations' },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-serif font-extrabold text-2xl sm:text-3xl mb-1" style={{ color: '#1D3160' }}>
                  {s.value}
                </p>
                <p className="font-sans text-gray-400 text-xs sm:text-sm uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
