'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import { accommodation } from '@/lib/ghana-2027-data';

export default function Ghana2027Accommodation() {
  return (
    <section id="accommodation" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative overflow-hidden shadow-xl" style={{ minHeight: 420 }}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${accommodation.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="px-5 py-4"
                  style={{ backgroundColor: 'rgba(8,15,28,0.72)', backdropFilter: 'blur(6px)' }}
                >
                  <p className="text-white font-serif font-bold text-base">
                    {accommodation.captionTitle}
                  </p>
                  <p className="text-white/60 text-sm mt-1">{accommodation.captionSubtitle}</p>
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-2 -left-2 w-16 h-16 border-l-[3px] border-b-[3px]"
              style={{ borderColor: '#F4A261' }}
              aria-hidden
            />
          </motion.div>

          <FadeIn delay={0.15}>
            <Eyebrow>Where You Stay</Eyebrow>
            <h2
              className="font-serif font-extrabold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Accommodation and Local{' '}
              <span className="relative inline-block whitespace-nowrap">
                Support
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mb-8" />
            <div className="space-y-4">
              {accommodation.paragraphs.map((paragraph) => (
                <p key={paragraph} className="font-sans text-gray-600 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
