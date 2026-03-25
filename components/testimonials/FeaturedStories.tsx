'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Quote } from 'lucide-react';
import { KenteDivider, DecorativeUnderline } from '../shared/HilltopBrand';

export default function FeaturedStories() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <div className="mb-14">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
            Hear From Our Students
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            A Student&apos;s{' '}
            <span className="relative inline-block whitespace-nowrap">
              Story
              <DecorativeUnderline />
            </span>
          </h2>
        </div>
        <div className="border-t border-gray-200 mb-14" />

        <motion.div
          className="flex flex-col lg:flex-row gap-12 items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Portrait video, constrained width so it doesn't stretch */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              <div className="relative rounded-sm overflow-hidden border border-gray-100 shadow-lg" style={{ aspectRatio: '9/16' }}>
                <video
                  ref={videoRef}
                  src="/images/testimonial1.mp4"
                  poster="/images/testimonial1-poster.jpg"
                  className="w-full h-full object-cover"
                  controls={playing}
                  playsInline
                  onEnded={() => setPlaying(false)}
                  preload="metadata"
                />
                {!playing && (
                  <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 group"
                    aria-label="Play video"
                  >
                    <div
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: '#F4A261' }}
                    >
                      <Play size={28} className="text-white ml-1" fill="white" />
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Quote / text side */}
          <div className="w-full lg:w-7/12">
            <Quote size={32} style={{ color: '#F4A261' }} className="mb-5" />
            <blockquote
              className="font-serif font-bold leading-snug mb-6"
              style={{ fontSize: 'clamp(1.2rem, 2vw, 1.65rem)', color: '#1D3160' }}
            >
              &ldquo;It really was a monumental trip for me. The highlight of the trip was the friendships that I made at the University of Ghana and I still have those friendships to this day.&rdquo;
            </blockquote>
            <p className="font-sans text-gray-600 text-base leading-relaxed mb-8">
              Hannah, a senior at Fisk University, traveled with Hilltop Global Group as a freshman to Ghana. Exploring three regions across the country, she found lasting connections and a transformative experience that she recommends to anyone even a little interested in studying abroad.
            </p>
            <div className="border-t border-gray-200 pt-5">
              <p className="font-serif font-bold text-lg" style={{ color: '#1D3160' }}>
                Hannah
              </p>
              <p className="font-sans text-gray-400 text-xs uppercase tracking-wider mt-1">
                Senior &middot; Fisk University &middot; Ghana Program
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
