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
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Progress bar */}
      <div className="h-1 bg-gray-200/50 backdrop-blur-sm">
        <div
          className="h-full bg-gradient-to-r from-navy-600 via-gold-400 to-navy-600 transition-all duration-300 ease-out relative"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Glowing dot at the end */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gold-400 rounded-full shadow-lg shadow-gold-400/50 animate-pulse" />
        </div>
      </div>

      {/* Journey status text */}
      {scrollProgress > 5 && (
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-navy-900">
              {scrollProgress < 25 && 'Beginning the journey...'}
              {scrollProgress >= 25 && scrollProgress < 50 && 'Discovering our story...'}
              {scrollProgress >= 50 && scrollProgress < 75 && 'Exploring our values...'}
              {scrollProgress >= 75 && scrollProgress < 95 && 'Meeting the team...'}
              {scrollProgress >= 95 && 'Journey complete! 🎉'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

