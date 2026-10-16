'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { AfricaWatermark, DecorativeUnderline } from '@/components/shared/HilltopBrand';
import {
  APPLICATIONS_CLOSE_LABEL,
  APPLICATIONS_OPEN_LABEL,
  heroDates,
  program,
  type ApplicationWindowState,
} from '@/lib/ghana-2027-data';
import Ghana2027ApplyButton from './Ghana2027ApplyButton';
import { useApplicationWindow } from './useApplicationWindow';

interface Props {
  state: ApplicationWindowState;
}

export default function Ghana2027Hero({ state: serverState }: Props) {
  const { state } = useApplicationWindow(serverState);
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('/images/ghana-hero.webp')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#080f1c]/85 via-[#080f1c]/55 to-[#080f1c]/70" />
      </div>

      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-12"
        aria-hidden
      >
        <AfricaWatermark className="w-64 md:w-80 h-auto" opacity={0.07} />
      </div>

      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#F4A261' }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <Link
          href="/internships/current"
          className="group inline-flex items-center gap-2 font-sans text-sm text-white/60 hover:text-white transition-colors duration-200 mb-8"
        >
          <ArrowLeft size={16} />
          Back to Current Internships
        </Link>

        <motion.p
          className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5"
          style={{ color: '#F4A261' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ghana 2027 &middot; {program.city}, {program.country}
        </motion.p>

        <motion.h1
          className="font-serif font-extrabold text-white leading-[1.05] mb-6 max-w-4xl"
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.6rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Ghana 2027 Internship{' '}
          <span className="relative inline-block whitespace-nowrap">
            Program
            <DecorativeUnderline />
          </span>
        </motion.h1>

        <motion.p
          className="font-sans text-sm font-semibold uppercase tracking-[0.18em] mb-6 text-white/70"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {program.theme}
        </motion.p>

        <motion.p
          className="font-sans text-white/65 text-base sm:text-lg mb-10 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A three-week internship in Accra with a three-day virtual component on the front end, built
          around a real deliverable for a vetted host organization.
        </motion.p>

        <motion.dl
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px mb-10 max-w-4xl bg-white/10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          {heroDates.map((date) => (
            <div key={date.label} className="bg-[#080f1c]/60 px-5 py-4">
              <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45 mb-2">
                {date.label}
              </dt>
              <dd className="font-serif font-extrabold text-base leading-snug" style={{ color: '#F4A261' }}>
                {date.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.div
          className="flex flex-wrap items-center gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Ghana2027ApplyButton state={state} mode="anchor" variant="accent" size="lg" />
          <p className="font-sans text-sm text-white/55">
            {state === 'open'
              ? `Applications close ${APPLICATIONS_CLOSE_LABEL}`
              : state === 'closed'
                ? 'Applications for the 2027 cohort are closed'
                : `Applications open ${APPLICATIONS_OPEN_LABEL}`}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
