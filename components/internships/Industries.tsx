'use client';

import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const ghana = {
  country: 'Ghana',
  code: 'GH',
  city: 'Accra',
  image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
  accent: '#1D3160',
  industries: [
    'Technology & Data',
    'Finance & Investment',
    'Agribusiness & Food Systems',
    'Health & Social Impact',
    'Creative & Marketing',
  ],
};

const rwanda = {
  country: 'Rwanda',
  code: 'RW',
  city: 'Kigali',
  image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
  accent: '#F4A261',
  industries: [
    'Fintech & Digital Platforms',
    'Agritech & Value Chains',
    'Healthtech',
    'Education & Social Innovation',
    'Creative & Cultural',
  ],
};

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
              Industries and Placements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Interns are matched to host organizations based on academic background and career interests across each country's key growth sectors.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {[ghana, rwanda].map((country, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">

                {/* Country photo header */}
                <div className="relative h-52 overflow-hidden flex-shrink-0">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${country.image}')` }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold ring-2 ring-white/30"
                      style={{ backgroundColor: country.accent }}
                    >
                      {country.code}
                    </div>
                    <div>
                      <p className="text-white font-serif font-bold text-2xl leading-none">{country.country}</p>
                      <p className="text-white/70 text-sm">{country.city}</p>
                    </div>
                  </div>
                </div>

                {/* Industries */}
                <div className="p-7 bg-white flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Key Industries</p>
                  <div className="flex flex-wrap gap-2">
                    {country.industries.map((industry, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full text-sm font-semibold border-2"
                        style={{
                          borderColor: country.accent,
                          color: country.accent,
                          backgroundColor: `${country.accent}10`,
                        }}
                      >
                        {industry}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500">
                      Placements confirmed before departure. Interns receive host profiles and work plans during pre-departure orientation.
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
