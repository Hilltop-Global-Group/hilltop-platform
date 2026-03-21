'use client';

import { useState } from 'react';
import { Play, X } from 'lucide-react';
import { KenteDivider, DecorativeUnderline } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';

const videos = [
  {
    eyebrow: 'Ghana Program',
    title: 'Ghana Internship Experience 2024',
    description: 'Students share highlights from their journey of growth, learning, and cultural discovery.',
    thumbnail: '/images/summer2024.webp',
    embedUrl: 'https://player.vimeo.com/video/1009903690?h=a03fa111f9&autoplay=1',
    openInNewTab: true,
    href: 'https://player.vimeo.com/video/1009903690?h=a03fa111f9',
  },
  {
    eyebrow: 'Watch',
    title: 'Hilltop Internships: Global Connections Across Africa',
    description: 'A collective look at our programs, where learning meets culture and innovation.',
    thumbnail: '/images/all.webp',
    embedUrl: 'https://player.vimeo.com/video/1132264308?autoplay=1',
    openInNewTab: false,
    href: 'https://vimeo.com/1132264308',
  },
];

export default function InternshipVideos() {
  const [activeEmbed, setActiveEmbed] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <KenteDivider className="mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Programs Overview
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none mb-14"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            See the Programs{' '}
            <span className="relative inline-block whitespace-nowrap">
              in Action
              <DecorativeUnderline />
            </span>
          </h2>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group flex flex-col">
                {/* Thumbnail */}
                <div className="relative overflow-hidden mb-5 cursor-pointer" style={{ minHeight: 300 }}>
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${video.thumbnail}')` }}
                  />
                  <div className="absolute inset-0 bg-[#080f1c]/40 group-hover:bg-[#080f1c]/50 transition-colors duration-300" />

                  {/* Play button */}
                  <button
                    onClick={() => {
                      if (video.openInNewTab) {
                        window.open(video.href, '_blank');
                      } else {
                        setActiveEmbed(index);
                      }
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label={`Play ${video.title}`}
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white group-hover:bg-[#F4A261] transition-colors duration-300 shadow-lg">
                      <Play size={26} style={{ color: '#1D3160' }} fill="#1D3160" />
                    </div>
                  </button>

                  {/* Eyebrow + title overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5" style={{ background: 'linear-gradient(to top, rgba(8,15,28,0.80) 0%, transparent 100%)' }}>
                    <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-1" style={{ color: '#F4A261' }}>
                      {video.eyebrow}
                    </p>
                    <p className="font-serif font-bold text-white text-lg leading-snug">{video.title}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="font-sans text-gray-500 text-sm leading-relaxed">{video.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox embed */}
      {activeEmbed !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveEmbed(null)}
        >
          <div
            className="relative w-full max-w-4xl mx-4"
            style={{ aspectRatio: '16/9' }}
            onClick={e => e.stopPropagation()}
          >
            <iframe
              src={videos[activeEmbed].embedUrl}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              title={videos[activeEmbed].title}
            />
            <button
              onClick={() => setActiveEmbed(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white p-2"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
