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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const markers = [
    { label: 'Introduction', sublabel: 'Who We Are', position: 0, number: '01' },
    { label: 'Our Journey', sublabel: 'The Story', position: 16.67, number: '02' },
    { label: 'Impact', sublabel: 'By Numbers', position: 33.33, number: '03' },
    { label: 'Core Values', sublabel: 'What Drives Us', position: 50, number: '04' },
    { label: 'Our Approach', sublabel: 'How We Work', position: 66.67, number: '05' },
    { label: 'The Team', sublabel: 'Who Makes It Happen', position: 83.33, number: '06' },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:block z-40 pointer-events-auto">
      <div className="relative bg-white/95 backdrop-blur-md shadow-2xl rounded-r-2xl border-r-4 border-navy-900 overflow-hidden">
        {/* Decorative top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-900 via-gold-400 to-navy-900" />
        
        <div className="py-8 px-4 pr-6">
          {/* Progress indicator line */}
          <div className="absolute left-4 top-8 bottom-8 w-0.5 bg-gray-200">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-navy-900 via-gold-400 to-navy-900 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            >
              {/* Active position glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-gold-400 rounded-full shadow-lg shadow-gold-400/50 animate-pulse" />
            </div>
          </div>

          {/* Milestones */}
          <div className="space-y-6 ml-8">
            {markers.map((marker) => {
              const isActive = scrollProgress >= marker.position;
              const isPast = scrollProgress > marker.position + 10;
              
              return (
                <div
                  key={marker.number}
                  className={`relative transition-all duration-500 ${
                    isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-40'
                  }`}
                >
                  {/* Connecting line to main progress bar */}
                  <div
                    className={`absolute left-0 top-4 w-8 h-0.5 transition-all duration-500 ${
                      isActive ? 'bg-navy-900' : 'bg-gray-300'
                    }`}
                  />

                  {/* Milestone dot */}
                  <div className="absolute -left-[31px] top-2.5">
                    <div className="relative">
                      {isActive && (
                        <div className="absolute inset-0 w-4 h-4 bg-gold-400/30 rounded-full blur-sm animate-pulse" />
                      )}
                      <div
                        className={`relative w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                          isActive
                            ? 'bg-navy-900 border-gold-400 shadow-lg'
                            : 'bg-white border-gray-300'
                        }`}
                      >
                        {isPast && (
                          <svg
                            className="absolute inset-0 w-full h-full text-gold-400 p-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pl-4">
                    {/* Number badge */}
                    <div
                      className={`inline-block mb-1 px-2 py-0.5 rounded text-[10px] font-bold transition-all duration-500 ${
                        isActive
                          ? 'bg-navy-900 text-gold-400'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {marker.number}
                    </div>
                    
                    {/* Label */}
                    <div
                      className={`font-heading font-bold text-xs transition-all duration-500 ${
                        isActive ? 'text-navy-900' : 'text-gray-500'
                      }`}
                    >
                      {marker.label}
                    </div>
                    
                    {/* Sublabel */}
                    <div
                      className={`text-[10px] font-medium transition-all duration-500 ${
                        isActive ? 'text-gray-600' : 'text-gray-400'
                      }`}
                    >
                      {marker.sublabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-900 via-gold-400 to-navy-900" />
      </div>
    </div>
  );
}

