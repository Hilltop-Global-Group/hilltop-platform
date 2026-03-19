'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, HighlightWord } from '@/components/shared/HilltopBrand';

const reasons = [
  {
    number: '01',
    title: 'Benchmark for digital transformation',
    description: 'Rwanda is an African leader in digital policy and public-private innovation initiatives, making it ideal for tech placements.',
  },
  {
    number: '02',
    title: 'Kigali tech hubs & accelerators',
    description: 'Access incubators, accelerators and startup teams working on fintech, agritech and healthtech solutions.',
  },
  {
    number: '03',
    title: 'Safe, well-governed, investor-friendly',
    description: 'Strong governance and investor interest create a professional environment for meaningful internships.',
  },
  {
    number: '04',
    title: 'Modern infrastructure & strong business culture',
    description: "Rwanda's modern cities and infrastructure enable efficient work + rich cultural experiences.",
  },
];

export default function RwandaWhyChoose() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <FadeIn>
          <KenteDivider className="mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Why Rwanda
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-tight mb-14"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Why Choose <HighlightWord>Rwanda</HighlightWord>
          </h2>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.number}
              className="bg-white border border-gray-100 p-8 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-shrink-0 w-11 h-11 flex items-center justify-center text-white font-sans text-xs font-bold"
                  style={{ backgroundColor: i % 2 === 0 ? '#1D3160' : '#F4A261' }}
                >
                  {reason.number}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-3" style={{ color: '#1D3160' }}>
                    {reason.title}
                  </h3>
                  <p className="font-sans text-gray-500 text-sm leading-relaxed">
                    {reason.description}
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
