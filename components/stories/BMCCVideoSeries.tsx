'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Clock, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { KenteDivider, DecorativeUnderline } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';
import { bmccVideos, isPublished, type StoryVideo } from '@/lib/bmcc-ghana-data';

function VideoCard({
  video,
  isActive,
  onPlay,
  onClose,
}: {
  video: StoryVideo;
  isActive: boolean;
  onPlay: () => void;
  onClose: () => void;
}) {
  const published = isPublished(video);

  return (
    <div className="group flex flex-col">
      <div
        className="relative overflow-hidden bg-[#1D3160]"
        style={{ aspectRatio: '16 / 9' }}
      >
        {isActive && published ? (
          <>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={`${video.eyebrow}: ${video.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-30 p-2 bg-black/70 hover:bg-black text-white transition-colors duration-200"
              aria-label="Close video"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <>
            {/* Thumbnail: YouTube still once published, local image before that */}
            {published ? (
              <Image
                src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                alt={`${video.eyebrow}: ${video.title}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${video.fallbackImage}')` }}
              />
            )}

            <div className="absolute inset-0 bg-[#080f1c]/45 group-hover:bg-[#080f1c]/35 transition-colors duration-300" />

            {/* Part number watermark */}
            <span
              className="absolute top-4 left-5 font-serif font-extrabold leading-none pointer-events-none select-none"
              style={{ fontSize: '3.5rem', color: 'rgba(255,255,255,0.16)' }}
              aria-hidden
            >
              {video.part}
            </span>

            {published ? (
              <button
                onClick={onPlay}
                className="absolute inset-0 flex items-center justify-center"
                aria-label={`Play ${video.eyebrow}: ${video.title}`}
              >
                <motion.div
                  className="w-16 h-16 sm:w-[72px] sm:h-[72px] flex items-center justify-center bg-white group-hover:bg-[#F4A261] transition-colors duration-300 shadow-lg"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                >
                  <Play size={24} style={{ color: '#1D3160' }} fill="#1D3160" className="ml-0.5" />
                </motion.div>
              </button>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-black/60 px-4 py-2">
                  Coming Soon
                </span>
              </div>
            )}

            {/* Runtime badge */}
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-black/75 text-white font-sans text-[11px] font-semibold px-2.5 py-1">
              <Clock size={11} />
              {video.duration}
            </span>
          </>
        )}
      </div>

      {/* Card text */}
      <div className="pt-5 flex flex-col flex-1">
        <p
          className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] mb-2"
          style={{ color: '#F4A261' }}
        >
          {video.eyebrow}
        </p>
        <h3
          className="font-serif font-bold text-xl leading-snug mb-3"
          style={{ color: '#1D3160' }}
        >
          {video.title}
        </h3>
        <p className="font-sans text-gray-500 text-sm leading-relaxed">{video.description}</p>
      </div>
    </div>
  );
}

export default function BMCCVideoSeries() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const anyPublished = bmccVideos.some(isPublished);

  return (
    <section id="watch" className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <KenteDivider className="mb-6" count={5} />
          <p
            className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: '#F4A261' }}
          >
            A Three-Part Series
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none mb-6"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            Watch the{' '}
            <span className="relative inline-block whitespace-nowrap">
              Journey
              <DecorativeUnderline />
            </span>
          </h2>
          <p className="font-sans text-gray-500 text-base leading-relaxed max-w-2xl mb-14">
            Three films, filmed on the ground in Ghana. Start with how the program was built, then
            meet the participant who redefined what is possible, then hear the students tell it
            themselves.
          </p>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {bmccVideos.map((video, index) => (
            <FadeIn key={video.part} delay={index * 0.1}>
              <VideoCard
                video={video}
                isActive={activeIndex === index}
                onPlay={() => setActiveIndex(index)}
                onClose={() => setActiveIndex(null)}
              />
            </FadeIn>
          ))}
        </div>

        {!anyPublished && (
          <p className="font-sans text-xs text-gray-400 mt-10 border-t border-gray-100 pt-6">
            Videos publish automatically once the YouTube IDs are added in
            lib/bmcc-ghana-data.ts
          </p>
        )}
      </div>
    </section>
  );
}
