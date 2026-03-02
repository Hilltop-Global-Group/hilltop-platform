'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FeaturedVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden py-24 bg-white">

      {/* Decorative: quarter-arc — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-16 -right-16" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="380" cy="0" r="320" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="380" cy="0" r="240" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.04" />
          <circle cx="380" cy="0" r="160" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-10 left-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={15 + col * 30} cy={15 + row * 30} r="3" fill="#1D3160" opacity="0.08" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: diagonal lines — top left */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-6 -left-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="70"  x2="70"  y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.07" />
          <line x1="0" y1="120" x2="120" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.05" />
          <line x1="0" y1="170" x2="170" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.04" />
        </svg>
      </motion.div>

      {/* Decorative: soft blob — bottom right */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-10 right-1/4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: 350, height: 200, borderRadius: '50%', backgroundColor: '#1D3160', opacity: 0.025, filter: 'blur(70px)' }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gold-400 rounded-full mb-6 border-2 border-navy-900">
            <Play className="w-4 h-4 text-black" />
            <span className="text-sm font-bold text-black uppercase tracking-wide">
              Featured Interview
            </span>
          </div>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            He's Changing How the World Sees Africa – One Student at a Time
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Watch our CEO share the vision behind Hilltop Global Group and how we're 
            transforming education and opportunities across Africa.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-lg overflow-hidden shadow-lg bg-navy-900">
          {/* Decorative gradient overlay on edges */}
          <div className="absolute inset-0 bg-gradient-to-tr from-navy-600/20 via-transparent to-gold-400/20 pointer-events-none z-10" />
          
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
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/30 transition-colors duration-300" />
                
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
                  <span className="text-white text-sm font-semibold bg-navy-900/90 px-6 py-2 rounded-full border border-gold-400/30">
                    Click to watch
                  </span>
                </div>
              </div>
            ) : (
              // YouTube iframe when playing
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/TePyT3KoOZk?autoplay=1"
                title="He's Changing How the World Sees Africa – One Student at a Time"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-lg border-4 border-gold-400" style={{ backgroundColor: '#1D3160' }}>
            <p className="text-white text-xl font-semibold italic mb-4">
              "Shaping the African narrative is taking control of our story and showcasing it to the world."
            </p>
            <p className="text-white text-lg font-bold">— Phil Agbeko (CEO at Hilltop Global Group)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

