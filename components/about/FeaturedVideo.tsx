'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { KenteDivider } from '../shared/HilltopBrand';

export default function FeaturedVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              Featured Interview
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-none"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              He&apos;s Changing How the<br className="hidden md:block" /> World Sees Africa
            </h2>
          </div>
          <p className="font-sans text-gray-500 text-sm max-w-xs leading-relaxed">
            Watch our CEO share the vision behind Hilltop and how we&apos;re transforming education across Africa.
          </p>
        </div>
        <div className="border-t border-gray-200 mb-12" />

        {/* Video Container */}
        <div className="relative overflow-hidden shadow-lg" style={{ backgroundColor: '#1D3160' }}>
          
          {/* YouTube Embed - Responsive 16:9 */}
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            {!isPlaying ? (
              // Custom Thumbnail with Hilltop-branded Play Button
              <div 
                className="absolute inset-0 cursor-pointer group" 
                onClick={() => setIsPlaying(true)}
              >
                {/* YouTube Thumbnail */}
                <Image
                  src="https://img.youtube.com/vi/TePyT3KoOZk/maxresdefault.jpg"
                  alt="Phil Agbeko, Founder and CEO of Hilltop Global Group, speaking about African education"
                  fill
                  className="object-cover"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-[#1D3160]/40 group-hover:bg-[#1D3160]/30 transition-colors duration-300" />
                
                {/* Custom Hilltop Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    {/* Outer glow ring - gold */}
                    <div className="absolute inset-0 rounded-full blur-3xl scale-150 group-hover:scale-[1.8] transition-transform duration-500" style={{ backgroundColor: 'rgba(244, 162, 97, 0.4)' }} />
                    
                    {/* Play button circle - navy with gold border */}
                    <motion.div 
                      className="relative w-28 h-28 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300" 
                      style={{ 
                        background: 'linear-gradient(to bottom right, #1D3160, #0f1a3d)',
                        border: '4px solid #F4A261'
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {/* Play icon - gold */}
                      <Play className="w-12 h-12 ml-1" style={{ color: '#F4A261', fill: '#F4A261' }} strokeWidth={2} />
                    </motion.div>
                    
                    {/* Subtle pulse animation ring */}
                    <div className="absolute inset-0 rounded-full animate-ping" style={{ 
                      border: '2px solid rgba(244, 162, 97, 0.5)',
                      animationDuration: '2s' 
                    }} />
                  </motion.div>
                </div>
                
                {/* Watch hint */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-semibold bg-black/80 px-6 py-2">
                    Click to watch
                  </span>
                </div>
              </div>
            ) : (
              // YouTube iframe when playing
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/TePyT3KoOZk?autoplay=1"
                title="He's Changing How the World Sees Africa, One Student at a Time"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 border-l-4 pl-8 max-w-3xl" style={{ borderColor: '#F4A261' }}>
          <p
            className="font-serif font-bold text-black leading-snug mb-4"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
          >
            &ldquo;Shaping the African narrative is taking control of our story and showcasing it to the world.&rdquo;
          </p>
          <p className="font-sans text-gray-400 text-xs uppercase tracking-[0.2em]">
            Phil Agbeko &mdash; Founder and CEO, Hilltop Global Group
          </p>
        </div>
      </div>
    </section>
  );
}

