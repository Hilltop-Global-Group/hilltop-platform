'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight } from 'lucide-react';
import { KenteDivider } from '../shared/HilltopBrand';
import { bmccVideos, isPublished } from '@/lib/bmcc-ghana-data';

/**
 * Homepage feature banner driving traffic to the BMCC Ghana story page.
 * Uses the Part 1 YouTube still once published, local image before that.
 */
export default function BMCCFeatureBanner() {
  const lead = bmccVideos[0];
  const published = isPublished(lead);

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#0d1a38' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Copy */}
          <div>
            <KenteDivider className="mb-5" count={5} />
            <p
              className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              style={{ color: '#F4A261' }}
            >
              Featured Story
            </p>
            <h2
              className="font-serif font-extrabold text-white leading-[1.02] mb-5"
              style={{ fontSize: 'clamp(1.9rem, 3.8vw, 3rem)' }}
            >
              A President Had a Vision.
              <br />
              We Built It in Ghana.
            </h2>
            <p className="font-sans text-white/65 text-base leading-relaxed mb-8 max-w-lg">
              Ten days on the ground with the Borough of Manhattan Community College and the Urban
              Male Leadership Academy. Watch the three-part series, including the 80-year-old
              participant who crossed all seven canopy bridges at Kakum.
            </p>
            <Link
              href="/news/bmcc-ghana"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 font-sans font-semibold text-xs uppercase tracking-[0.15em] transition-all duration-300"
              style={{ backgroundColor: '#F4A261', color: '#1D3160' }}
            >
              <PlayCircle size={15} />
              Watch the Series
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform duration-200"
              />
            </Link>
          </div>

          {/* Visual */}
          <Link
            href="/news/bmcc-ghana"
            className="group relative block overflow-hidden"
            style={{ aspectRatio: '16 / 9' }}
            aria-label="Watch the BMCC Ghana three-part series"
          >
            {published ? (
              <Image
                src={`https://img.youtube.com/vi/${lead.youtubeId}/maxresdefault.jpg`}
                alt="BMCC students in Ghana with Hilltop Global Group"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${lead.fallbackImage}')` }}
              />
            )}
            <div className="absolute inset-0 bg-[#080f1c]/40 group-hover:bg-[#080f1c]/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white group-hover:bg-[#F4A261] transition-colors duration-300 shadow-lg">
                <PlayCircle size={28} style={{ color: '#1D3160' }} />
              </div>
            </div>
            <span className="absolute bottom-4 left-5 font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              3 Films . 15 Minutes
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
