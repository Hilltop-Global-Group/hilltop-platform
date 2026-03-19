'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, HighlightWord } from '@/components/shared/HilltopBrand';

const options = [
  {
    number: '01',
    title: 'Full In-Country',
    description: 'Four weeks in-country (full duration abroad)',
    accent: '#1D3160',
  },
  {
    number: '02',
    title: 'Hybrid Format',
    description: 'Three weeks in-country + one week remote (pre-departure virtual component)',
    accent: '#F4A261',
  },
];

export default function RwandaProgramFormat() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">

        <FadeIn>
          <div className="text-center mb-14">
            <KenteDivider className="mx-auto mb-6" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
              Flexible Options
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Program{' '}
              <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
                Format
                <DecorativeUnderline />
              </span>
            </h2>
            <p className="font-sans text-gray-500 text-lg">Two Flexible Participation Options:</p>
          </div>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {options.map((opt, i) => (
            <motion.div
              key={opt.number}
              className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="text-center mb-6">
                <div
                  className="w-14 h-14 flex items-center justify-center mx-auto mb-4 text-white font-sans text-sm font-bold"
                  style={{ backgroundColor: opt.accent }}
                >
                  {opt.number}
                </div>
                <h3 className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                  Option {parseInt(opt.number)}: {opt.title}
                </h3>
              </div>
              <p className="font-sans text-gray-600 text-center text-lg">
                {opt.description}
              </p>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="text-center font-sans text-gray-500 mt-10 italic">
            This flexible structure allows participants to begin their internship remotely before joining the cohort on-site for the in-country phase.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
