'use client';

import { useEffect, useState } from 'react';

export default function JourneyProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-[80px] left-0 right-0 z-40 pointer-events-none">
      {/* Multi-layered progress bar */}
      <div className="relative h-2 bg-navy-900/20 backdrop-blur-sm">
        {/* Background shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent animate-shimmer" />
        
        {/* Main progress */}
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-navy-900 via-gold-400 to-navy-900 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/50 via-gold-400/50 to-navy-900/50 blur-sm" />
          
          {/* Animated glowing dot at the end */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute inset-0 w-4 h-4 bg-gold-400/70 rounded-full blur-md animate-pulse" />
              <div className="relative w-3 h-3 bg-gold-400 rounded-full shadow-lg shadow-gold-400/70 border-2 border-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Journey status badge */}
      {scrollProgress > 5 && (
        <div className="absolute top-6 right-6 bg-white/98 backdrop-blur-xl rounded-lg px-6 py-4 shadow-lg border-4 border-navy-900 pointer-events-auto">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-4 h-4 bg-gold-400 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-4 h-4 bg-gold-400 rounded-full blur-md" />
            </div>
            <div>
              <div className="text-xs font-bold text-gold-400 uppercase tracking-wider mb-1">
                Journey Progress
              </div>
              <div className="text-sm font-bold text-navy-900">
                {scrollProgress < 16.67 && 'Introduction'}
                {scrollProgress >= 16.67 && scrollProgress < 33.33 && 'Our Journey'}
                {scrollProgress >= 33.33 && scrollProgress < 50 && 'Impact Metrics'}
                {scrollProgress >= 50 && scrollProgress < 66.67 && 'Core Values'}
                {scrollProgress >= 66.67 && scrollProgress < 83.33 && 'Our Approach'}
                {scrollProgress >= 83.33 && scrollProgress < 95 && 'The Team'}
                {scrollProgress >= 95 && 'Complete ✓'}
              </div>
            </div>
            <div className="ml-2 px-4 py-2 bg-navy-900 text-gold-400 rounded-xl text-sm font-bold border-2 border-gold-400">
              {Math.round(scrollProgress)}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

