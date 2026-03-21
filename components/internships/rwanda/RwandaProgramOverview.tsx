'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, HighlightWord } from '@/components/shared/HilltopBrand';

const images = [
  {
    src: '/images/kigali.webp',
    alt: 'Kigali cityscapes & innovation hubs',
    caption: 'Kigali cityscapes & innovation hubs',
  },
  {
    src: '/images/culture.webp',
    alt: 'Community immersion & cultural visits',
    caption: 'Community immersion & cultural visits',
  },
  {
    src: '/images/volcanoes.webp',
    alt: 'Nature & excursions (Volcanoes)',
    caption: 'Nature & excursions (Volcanoes)',
  },
];

export default function RwandaProgramOverview() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <p className="text-center font-sans text-gray-500 text-sm mt-3">{img.caption}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <KenteDivider className="mb-6" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
              Program Overview
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-tight mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              About the{' '}
              <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
                Program
                <DecorativeUnderline />
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="font-sans text-gray-600 text-lg leading-relaxed">
              The program offers professional experience in Kigali&apos;s innovation hub, across fintech, agritech, healthtech, and creative industries. Fridays are reserved for leadership and cultural immersion. Delivered in collaboration with ALU.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
