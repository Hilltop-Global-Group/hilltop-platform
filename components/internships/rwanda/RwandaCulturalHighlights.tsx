'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, HighlightWord } from '@/components/shared/HilltopBrand';

const highlights = [
  {
    title: 'Cultural performances',
    description: 'Cultural performances & heritage',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
  },
  {
    title: 'Kigali Genocide Memorial',
    description: 'Historical sites & memorial',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg',
  },
  {
    title: 'Volcanoes National Park',
    description: 'Gorilla trekking & nature',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg',
  },
  {
    title: "Nyamirambo Women's Center",
    description: 'Community engagement',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
  },
  {
    title: 'Kigali Art & Fashion Scene',
    description: 'Creative industries & design',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg',
  },
  {
    title: 'Local markets & entrepreneurship',
    description: 'Business & trading culture',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
  },
];

export default function RwandaCulturalHighlights() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <FadeIn>
          <div className="text-center mb-14">
            <KenteDivider className="mx-auto mb-6" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
              Immersive Experiences
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Cultural <HighlightWord>Highlights</HighlightWord>
            </h2>
            <p className="font-sans text-gray-500 text-lg max-w-2xl mx-auto">
              Activities shown are representative of the program experience. Final excursions may vary depending on scheduling and availability.
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <div className="relative h-80">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${highlight.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/80 via-[#080f1c]/30 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif font-bold text-2xl mb-1">
                    {highlight.title}
                  </h3>
                  <p className="font-sans text-white/80 text-sm">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
