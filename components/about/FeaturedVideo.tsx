'use client';

import { Play } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function FeaturedVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-600/10 rounded-full mb-4">
            <Play className="w-4 h-4 text-navy-600" />
            <span className="text-sm font-semibold text-navy-600 uppercase tracking-wide">
              Featured Interview
            </span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-navy-900 mb-4">
            He's Changing How the World Sees Africa – One Student at a Time
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch our CEO share the vision behind Hilltop Global Group and how we're 
            transforming education and opportunities across Africa.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-navy-900">
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Outer glow ring - gold */}
                    <div className="absolute inset-0 rounded-full bg-gold-400/40 blur-3xl scale-150 group-hover:scale-[1.8] transition-transform duration-500" />
                    
                    {/* Play button circle - navy with gold border */}
                    <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-gold-400">
                      {/* Play icon - gold */}
                      <Play className="w-12 h-12 text-gold-400 fill-gold-400 ml-1" strokeWidth={2} />
                    </div>
                    
                    {/* Subtle pulse animation ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-gold-400/50 animate-ping" style={{ animationDuration: '2s' }} />
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

        {/* Optional Caption/CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 italic">
            "Education is the most powerful weapon which you can use to change the world." 
            <span className="block mt-2 text-sm text-gray-500">— Nelson Mandela</span>
          </p>
        </div>
      </div>
    </section>
  );
}

