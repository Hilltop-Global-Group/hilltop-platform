'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline } from '@/components/shared/HilltopBrand';

interface Props {
  startDate?: string;
  endDate?: string;
  deadline?: string;
  costFull?: string;
  costHybrid?: string;
}

export default function RwandaKeyDetails({
  startDate = 'June 22, 2026',
  endDate = 'July 17, 2026',
  deadline = 'April 15, 2026',
  costFull = '$5,700',
  costHybrid = '$4,900',
}: Props) {
  const details = [
    { label: 'Application Deadline', value: deadline, color: '#F4A261' },
    { label: 'Internship Dates', value: `${startDate} – ${endDate}`, color: '#1D3160' },
    { label: 'Cost (Full In-Country, 4 weeks)', value: costFull, color: '#1D3160', large: true },
    { label: 'Cost (Hybrid, 3 weeks)', value: costHybrid, color: '#F4A261', large: true },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        <FadeIn>
          <div className="text-center mb-14">
            <KenteDivider className="mx-auto mb-6" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
              At a Glance
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Key{' '}
              <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
                Details
                <DecorativeUnderline />
              </span>
            </h2>
          </div>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {details.map((item, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 border border-gray-100 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 mb-2">{item.label}</p>
              <p
                className={`font-serif font-bold ${item.large ? 'text-2xl' : 'text-xl'}`}
                style={{ color: item.color }}
              >
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
