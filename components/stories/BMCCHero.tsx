'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Calendar, PlayCircle } from 'lucide-react';
import { AfricaWatermark, KenteDivider } from '../shared/HilltopBrand';

const facts = [
  { icon: MapPin, label: 'Ghana' },
  { icon: Calendar, label: '10 Days' },
  { icon: PlayCircle, label: '3-Part Series' },
];

export default function BMCCHero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#0d1a38' }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/akwaaba-gh.jpeg')", opacity: 0.28 }}
        aria-hidden
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(13,26,56,0.96) 0%, rgba(13,26,56,0.82) 55%, rgba(13,26,56,0.6) 100%)',
        }}
        aria-hidden
      />
      <AfricaWatermark
        className="absolute -right-16 top-0 h-full w-auto pointer-events-none hidden md:block"
        opacity={0.05}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-4xl"
        >
          <KenteDivider className="mb-6" count={5} />

          <p
            className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-6"
            style={{ color: '#F4A261' }}
          >
            Program Story . Borough of Manhattan Community College
          </p>

          <h1
            className="font-serif font-extrabold text-white leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5rem)' }}
          >
            A President Had a Vision.
            <br />
            We Built It in Ghana.
          </h1>

          <p className="font-sans text-white/70 text-lg leading-relaxed max-w-2xl mb-10">
            BMCC came to us with an idea for what Ghana could mean for their students. Ten days
            later it was a completed program, delivered on the ground, with the Urban Male
            Leadership Academy at its center. This is what happened.
          </p>

          {/* Fact strip */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-10">
            {facts.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2.5">
                <Icon size={16} style={{ color: '#F4A261' }} />
                <span className="font-sans text-sm font-medium text-white/85">{label}</span>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#watch"
              className="group inline-flex items-center gap-2.5 px-8 py-4 font-sans font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300"
              style={{ backgroundColor: '#F4A261', color: '#1D3160' }}
            >
              <PlayCircle size={16} />
              Watch the Series
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 font-sans font-semibold text-xs uppercase tracking-[0.15em] border border-white/30 text-white hover:bg-white/10 transition-all duration-300"
            >
              Build Your Program
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
