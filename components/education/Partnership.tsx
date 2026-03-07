'use client';

import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const highlights = [
  'Itineraries aligned to your curriculum and learning objectives',
  'Full in-country logistics from arrival to departure',
  'Curated business and cultural visits with local partners',
  'Student consulting project sourcing and coordination',
];

export default function Partnership() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Photo side */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1"
            style={{ minHeight: 460 }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1D3160]/60 via-transparent to-transparent" />

            {/* Floating label */}
            <div className="absolute top-6 left-6">
              <div className="px-4 py-2 rounded-full backdrop-blur-md bg-white/15 border border-white/25">
                <p className="text-white text-sm font-semibold">University Partnership Programs</p>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <FadeIn>
              <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
                University Partnerships
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hilltop partners with universities to design and deliver turnkey study abroad experiences across Africa. We handle everything from accommodation and logistics to curated business visits and student consulting projects, so your faculty can focus on teaching.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Students who engage directly with African businesses and communities return with practical skills, sharpened cross-cultural awareness, and a fundamentally changed understanding of the continent.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-3">
                {highlights.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 w-5 h-5 rounded-full mt-0.5 flex items-center justify-center"
                      style={{ backgroundColor: '#F4A261' }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
