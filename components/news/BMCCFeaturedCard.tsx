'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { YouTubePlayIcon, HilltopChannelAvatar, YT } from '../shared/YouTubeUI';
import { bmccVideos, isPublished } from '@/lib/bmcc-ghana-data';

/**
 * YouTube-style featured playlist card on the News page.
 */
export default function BMCCFeaturedCard() {
  const lead = bmccVideos[0];
  if (!isPublished(lead)) return null;

  const totalDuration = '15:26';

  return (
    <motion.article
      className="mb-12 rounded-xl overflow-hidden border border-white/10 shadow-lg"
      style={{ backgroundColor: YT.bg }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Main thumbnail */}
        <Link
          href="/news/bmcc-ghana#watch"
          className="group relative lg:w-[42%] flex-shrink-0 overflow-hidden"
          style={{ aspectRatio: '16 / 9' }}
          aria-label="Watch the BMCC Ghana three-part video series"
        >
          <Image
            src={`https://img.youtube.com/vi/${lead.youtubeId}/maxresdefault.jpg`}
            alt="BMCC students in Ghana with Hilltop Global Group"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-200" />
          <div className="absolute inset-0 flex items-center justify-center">
            <YouTubePlayIcon className="w-16 sm:w-[72px] h-auto drop-shadow-lg opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-200" />
          </div>
          <span
            className="absolute top-3 left-3 font-sans text-[10px] font-medium uppercase tracking-wide px-2 py-1 rounded-sm"
            style={{ backgroundColor: 'rgba(0,0,0,0.8)', color: YT.text }}
          >
            Playlist · 3 videos
          </span>
          <span className="absolute bottom-2 right-2 bg-black/85 text-white font-sans text-xs font-medium px-1.5 py-0.5 rounded-[2px]">
            {totalDuration}
          </span>
        </Link>

        {/* Meta */}
        <div className="flex flex-col justify-center p-5 sm:p-6 lg:w-[58%]">
          <div className="flex items-center gap-2.5 mb-3">
            <HilltopChannelAvatar size={32} />
            <div className="min-w-0">
              <p className="font-sans text-sm font-medium truncate" style={{ color: YT.text }}>
                Hilltop Global Group
              </p>
              <p className="font-sans text-xs truncate" style={{ color: YT.textMuted }}>
                BMCC · Ghana · Urban Male Leadership Academy
              </p>
            </div>
          </div>

          <h3
            className="font-sans text-base sm:text-lg font-medium leading-snug mb-2"
            style={{ color: YT.text }}
          >
            A President Had a Vision. We Built It in Ghana.
          </h3>
          <p className="font-sans text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: YT.textMuted }}>
            {lead.title}. Plus Judy at Kakum, and the students in their own words. Three films from
            ten days on the ground.
          </p>

          {/* Mini thumbnails */}
          <div className="flex gap-2 mb-4">
            {bmccVideos.map((v) => (
              <Link
                key={v.part}
                href={`/news/bmcc-ghana#part-${v.part}`}
                className="group/thumb relative flex-1 max-w-[120px] rounded-md overflow-hidden"
                style={{ backgroundColor: YT.surface }}
              >
                <div className="relative" style={{ aspectRatio: '16 / 9' }}>
                  <Image
                    src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                    alt={v.title}
                    fill
                    className="object-cover opacity-75 group-hover/thumb:opacity-100 transition-opacity"
                    sizes="120px"
                  />
                  <span className="absolute bottom-0.5 right-0.5 bg-black/85 text-white font-sans text-[9px] px-1 rounded-[2px]">
                    {v.duration}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/news/bmcc-ghana#watch"
            className="self-start font-sans text-sm font-medium hover:underline"
            style={{ color: YT.link }}
          >
            Watch full series →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
