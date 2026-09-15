'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { YouTubePlayIcon, HilltopChannelRow, YT } from '../shared/YouTubeUI';
import { bmccVideos, isPublished, type StoryVideo } from '@/lib/bmcc-ghana-data';

function VideoPlayer({
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
    <div className="rounded-xl overflow-hidden" style={{ backgroundColor: YT.surface }}>
      <div className="group relative overflow-hidden bg-black" style={{ aspectRatio: '16 / 9' }}>
        {isActive && published ? (
          <>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1&color=white`}
              title={`${video.eyebrow}: ${video.title}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors duration-200"
              aria-label="Close video"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <>
            {published ? (
              <Image
                src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                alt={`${video.eyebrow}: ${video.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${video.fallbackImage}')` }}
              />
            )}

            {published ? (
              <button
                onClick={onPlay}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors duration-200"
                aria-label={`Play ${video.eyebrow}: ${video.title}`}
              >
                <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.96 }}>
                  <YouTubePlayIcon className="w-[68px] h-auto drop-shadow-lg" />
                </motion.div>
              </button>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <span className="font-sans text-[11px] font-medium text-white bg-black/80 px-3 py-1.5 rounded-sm">
                  Coming Soon
                </span>
              </div>
            )}

            <span className="absolute bottom-2 right-2 bg-black/85 text-white font-sans text-xs font-medium px-1.5 py-0.5 rounded-[2px] leading-none">
              {video.duration}
            </span>
          </>
        )}
      </div>

      {/* YouTube-style metadata below player */}
      <div className="p-4 sm:p-5">
        <h3
          className="font-sans text-base sm:text-lg font-medium leading-snug mb-3"
          style={{ color: YT.text }}
        >
          {video.title}
        </h3>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 font-sans text-xs" style={{ color: YT.textMuted }}>
          <span>{video.eyebrow}</span>
          <span aria-hidden>·</span>
          <span>BMCC Ghana 2026</span>
          <span aria-hidden>·</span>
          <span>{video.duration}</span>
        </div>
        <HilltopChannelRow />
        <div
          className="mt-4 rounded-xl px-4 py-3 font-sans text-sm leading-relaxed"
          style={{ backgroundColor: YT.surfaceHover, color: YT.textMuted }}
        >
          {video.description}
        </div>
      </div>
    </div>
  );
}

interface StageProps {
  id: string;
  video: StoryVideo;
  isActive: boolean;
  onPlay: () => void;
  onClose: () => void;
  reverse?: boolean;
  children: React.ReactNode;
}

function Stage({ id, video, isActive, onPlay, onClose, reverse, children }: StageProps) {
  return (
    <article id={id} className="py-12 sm:py-16 scroll-mt-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
            reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
          }`}
        >
          <FadeIn className="min-w-0">{children}</FadeIn>
          <FadeIn delay={0.08} className="min-w-0">
            <VideoPlayer video={video} isActive={isActive} onPlay={onPlay} onClose={onClose} />
          </FadeIn>
        </div>
      </div>
    </article>
  );
}

export default function BMCCStoryStages() {
  const [activePart, setActivePart] = useState<number | null>(null);

  return (
    <div id="watch" style={{ backgroundColor: YT.bg }}>
      {/* Playlist header */}
      <section className="pt-12 sm:pt-16 pb-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-8">
              <HilltopChannelRow />
              <span
                className="inline-flex self-start sm:ml-auto font-sans text-[11px] font-medium uppercase tracking-wide px-2.5 py-1 rounded-sm"
                style={{ backgroundColor: YT.surface, color: YT.textMuted }}
              >
                Playlist · 3 videos
              </span>
            </div>

            <h2
              className="font-sans font-medium leading-tight mb-3"
              style={{ fontSize: 'clamp(1.35rem, 3vw, 1.75rem)', color: YT.text }}
            >
              BMCC in Ghana: A President Had a Vision. We Built It.
            </h2>
            <p className="font-sans text-sm leading-relaxed max-w-2xl" style={{ color: YT.textMuted }}>
              Three films from the ground in Ghana with Borough of Manhattan Community College and
              the Urban Male Leadership Academy. Read each chapter, then watch.
            </p>

            {/* Mini playlist strip */}
            <div className="flex gap-2 mt-6 overflow-x-auto pb-1">
              {bmccVideos.map((v) => (
                <a
                  key={v.part}
                  href={`#part-${v.part}`}
                  className="flex-shrink-0 group relative rounded-lg overflow-hidden w-[140px]"
                  style={{ backgroundColor: YT.surface }}
                >
                  <div className="relative" style={{ aspectRatio: '16 / 9' }}>
                    <Image
                      src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                      alt={v.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      sizes="140px"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/85 text-white font-sans text-[10px] px-1 py-0.5 rounded-[2px]">
                      {v.duration}
                    </span>
                    <span
                      className="absolute top-1 left-1 font-sans text-[10px] font-medium px-1.5 py-0.5 rounded-sm"
                      style={{ backgroundColor: 'rgba(0,0,0,0.75)', color: YT.text }}
                    >
                      {v.part}
                    </span>
                  </div>
                  <p
                    className="font-sans text-[11px] leading-snug p-2 line-clamp-2 group-hover:text-white transition-colors"
                    style={{ color: YT.textMuted }}
                  >
                    {v.title}
                  </p>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Part 1 */}
      <Stage
        id="part-1"
        video={bmccVideos[0]}
        isActive={activePart === 1}
        onPlay={() => setActivePart(1)}
        onClose={() => setActivePart(null)}
      >
        <p className="font-sans text-xs font-medium mb-2" style={{ color: YT.link }}>
          Part 1 · The Story
        </p>
        <h3
          className="font-sans font-medium leading-snug mb-5"
          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: YT.text }}
        >
          It began with a campus visit and a question.
        </h3>
        <div className="space-y-4 font-sans text-sm leading-relaxed" style={{ color: YT.textMuted }}>
          <p>
            Months before anyone boarded a plane, our CEO Phil Agbeko sat down with students at the
            Borough of Manhattan Community College to talk about a proposed trip to Ghana. The idea
            had started even earlier, when President Anthony E. Munroe shared his vision for what
            Ghana could mean for BMCC students, and specifically for the young men of the Urban
            Male Leadership Academy.
          </p>
          <p>
            A vision is the easy part. Turning it into a program that actually runs, with vetted
            accommodation, ground transport, cultural programming, academic content, and a risk
            management plan behind every hour of it, is the work. That is what Hilltop was brought
            in to do.
          </p>
          <p className="font-medium" style={{ color: YT.text }}>
            Last month, that vision became a finished program. Successfully concluded, on the
            ground, in Ghana.
          </p>
        </div>
      </Stage>

      {/* Part 2 */}
      <Stage
        id="part-2"
        video={bmccVideos[1]}
        isActive={activePart === 2}
        onPlay={() => setActivePart(2)}
        onClose={() => setActivePart(null)}
        reverse
      >
        <p className="font-sans text-xs font-medium mb-2" style={{ color: YT.link }}>
          Part 2 · The Story
        </p>
        <h3
          className="font-sans font-medium leading-snug mb-5"
          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: YT.text }}
        >
          Judy crossed all seven bridges.
        </h3>
        <div className="space-y-4 font-sans text-sm leading-relaxed" style={{ color: YT.textMuted }}>
          <p>
            Judy is 80 years old. She is both vision and hearing impaired. At Kakum National Park
            she crossed all seven canopy bridges, 350 meters of rope and plank swaying high above the
            rainforest floor. Others sat that one out.
          </p>
          <p>
            This is a woman who marched alongside Dr. Martin Luther King Jr., and who is still
            working toward her college degree today. With her smart glasses on and her AI-powered
            hearing aids in, she did not miss a single thing on the itinerary. Every activity,
            every day.
          </p>
          <p className="font-medium" style={{ color: YT.text }}>
            Age is just a number, and Judy is proof of that.
          </p>
        </div>
      </Stage>

      {/* Part 3 */}
      <Stage
        id="part-3"
        video={bmccVideos[2]}
        isActive={activePart === 3}
        onPlay={() => setActivePart(3)}
        onClose={() => setActivePart(null)}
      >
        <p className="font-sans text-xs font-medium mb-2" style={{ color: YT.link }}>
          Part 3 · The Story
        </p>
        <h3
          className="font-sans font-medium leading-snug mb-5"
          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', color: YT.text }}
        >
          In their own words.
        </h3>
        <div className="space-y-4 font-sans text-sm leading-relaxed" style={{ color: YT.textMuted }}>
          <p className="font-medium italic" style={{ color: YT.text }}>
            &ldquo;Some found family. Some found a name. Some met a version of themselves for the
            first time.&rdquo;
          </p>
          <p>
            The group spent ten days in Ghana. They walked through Assin Manso and Cape Coast. They
            crossed the canopy at Kakum. They sat with local hosts, ate in local homes, and traced
            a history that most of them had only ever read about.
          </p>
          <p>
            Then we handed them the microphone. We could describe what happened on this journey.
            Their words do it better. Sound on.
          </p>
        </div>
      </Stage>
    </div>
  );
}
