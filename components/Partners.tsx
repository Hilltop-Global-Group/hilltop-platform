'use client';

import { motion } from 'framer-motion';
import { DottedAfricaMap } from './shared/HilltopBrand';
import MembershipBadges from './shared/MembershipBadges';

const universities = [
  'Georgetown University',
  'New York University',
  'University of Connecticut (UCONN)',
  'Emerson College',
  'Imperial College London',
  'Florida Atlantic University (FAU)',
  'Fisk University',
  'University of Maryland (UMD)',
  'Wake Forest University',
  'TNCIS Colleges',
  'Kirkwood Community College',
  'And More',
];

export default function Partners() {
  return (
    <section className="relative py-16 bg-white border-y border-gray-100 overflow-hidden">
      <DottedAfricaMap color="#1D3160" opacity={0.05} className="absolute -right-8 top-1/2 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 mb-10">
          Trusted by Students from Leading Universities
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-3 mb-12">
          {universities.map((name, i) => (
            <motion.span
              key={name}
              className="font-serif font-bold text-gray-800 text-base cursor-default select-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.04, duration: 0.4 }}
            >
              {name}
            </motion.span>
          ))}
        </div>

        {/* Industry memberships */}
        <div className="border-t border-gray-100 pt-8 mb-10">
          <MembershipBadges variant="light" />
        </div>

        {/* Stats divider */}
        <div className="border-t border-gray-100 pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 text-center">
            {[
              { value: '7+',       label: 'African Countries' },
              { value: 'Ghana & Rwanda', label: 'Active Internship Destinations' },
              { value: '50+',      label: 'Host Organizations' },
            ].map((s, i) => (
              <div key={i} className="px-4 sm:px-8 py-4 sm:py-0">
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

