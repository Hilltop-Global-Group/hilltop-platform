'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function FeaturedVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-gold-400 rounded-full mb-6 border-2 border-navy-900">
            <Play className="w-4 h-4 text-black" />
            <span className="text-sm font-bold text-black uppercase tracking-wide">
              Featured Interview
            </span>
          </div>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-navy-900 mb-6">
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
                  <div className="relative">
                    {/* Outer glow ring - gold */}
                    <div className="absolute inset-0 rounded-full blur-3xl scale-150 group-hover:scale-[1.8] transition-transform duration-500" style={{ backgroundColor: 'rgba(244, 162, 97, 0.4)' }} />
                    
                    {/* Play button circle - navy with gold border */}
                    <div className="relative w-28 h-28 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ 
                      background: 'linear-gradient(to bottom right, #1D3160, #0f1a3d)',
                      border: '4px solid #F4A261'
                    }}>
                      {/* Play icon - gold */}
                      <Play className="w-12 h-12 ml-1" style={{ color: '#F4A261', fill: '#F4A261' }} strokeWidth={2} />
                    </div>
                    
                    {/* Subtle pulse animation ring */}
                    <div className="absolute inset-0 rounded-full animate-ping" style={{ 
                      border: '2px solid rgba(244, 162, 97, 0.5)',
                      animationDuration: '2s' 
                    }} />
                  </div>
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
              "Education is the most powerful weapon which you can use to change the world."
            </p>
            <p className="text-white text-lg font-bold">— Nelson Mandela</p>
          </div>
        </div>
      </div>
    </section>
  );
}

