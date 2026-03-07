'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface CounterProps {
  end: number;
  suffix?: string;
}

function Counter({ end, suffix = '' }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const motionValue = useSpring(0, { 
    duration: 2000,
    bounce: 0
  });
  
  const display = useTransform(motionValue, (latest) => 
    Math.floor(latest).toString()
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      motionValue.set(end);
    }
  }, [isInView, hasAnimated, end, motionValue]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-2" 
      style={{ color: '#1D3160' }}
    >
      <motion.span>{display}</motion.span>{suffix}
    </motion.div>
  );
}

export default function StatsBar() {
  const stats = [
    { label: 'Programs Delivered', value: 50, suffix: '+' },
    { label: 'Years Shaping the Narrative', value: 10, suffix: '+' },
    { label: 'African Countries', value: 7, suffix: '+' },
  ];

  return (
    <section className="relative overflow-hidden py-12 bg-white">

      {/* Decorative: quarter-arc — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-16 -right-16" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="320" cy="0" r="280" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.06" />
          <circle cx="320" cy="0" r="210" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
          <circle cx="320" cy="0" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-2 left-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={12 + col * 24} cy={12 + row * 28} r="2.5" fill="#1D3160" opacity="0.09" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: diagonal lines — top left */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-4 -left-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="50"  x2="50"  y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.07" />
          <line x1="0" y1="90"  x2="90"  y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.05" />
          <line x1="0" y1="130" x2="130" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.04" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Counter end={stat.value} suffix={stat.suffix} />
              <div className="text-gray-600 font-body text-sm sm:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


