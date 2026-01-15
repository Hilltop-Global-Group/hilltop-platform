'use client';

import { useEffect, useState } from 'react';

export default function JourneyConnector() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-8 top-1/4 bottom-1/4 hidden lg:block z-10 pointer-events-none">
      {/* Background path */}
      <svg
        className="w-1 h-full"
        viewBox="0 0 4 100"
        preserveAspectRatio="none"
      >
        <path
          d="M2 0 L2 100"
          stroke="#E5E7EB"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      {/* Animated progress path */}
      <svg
        className="absolute top-0 left-0 w-1 h-full"
        viewBox="0 0 4 100"
        preserveAspectRatio="none"
      >
        <path
          d="M2 0 L2 100"
          stroke="url(#journeyGradient)"
          strokeWidth="4"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset={100 - scrollProgress}
          style={{ transition: 'stroke-dashoffset 0.1s ease-out' }}
        />
        <defs>
          <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1D3160" />
            <stop offset="50%" stopColor="#F4A261" />
            <stop offset="100%" stopColor="#1D3160" />
          </linearGradient>
        </defs>
      </svg>

      {/* Journey markers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full flex flex-col justify-between py-4">
        {[
          { label: 'Start', position: 0 },
          { label: 'Our Story', position: 20 },
          { label: 'Mission', position: 40 },
          { label: 'Team', position: 60 },
          { label: 'Impact', position: 80 },
          { label: 'Join Us', position: 100 },
        ].map((marker, index) => {
          const isActive = scrollProgress >= marker.position;
          return (
            <div
              key={marker.label}
              className="relative flex items-center gap-3 group"
              style={{ top: `${marker.position}%` }}
            >
              {/* Marker dot */}
              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                  isActive
                    ? 'bg-gold-400 border-gold-400 scale-125 shadow-lg shadow-gold-400/50'
                    : 'bg-white border-gray-300'
                }`}
              />
              
              {/* Label */}
              <span
                className={`text-xs font-semibold whitespace-nowrap transition-all duration-500 ${
                  isActive ? 'text-navy-900 opacity-100' : 'text-gray-400 opacity-60'
                }`}
              >
                {marker.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

