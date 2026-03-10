'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { AfricaWatermark, KenteDivider } from '../shared/HilltopBrand';

const stats = [
  { value: 500, suffix: '+', label: 'Students Placed', note: 'Across Ghana and Rwanda' },
  { value: 50,  suffix: '+', label: 'Partner Organizations', note: 'Startups, NGOs, and enterprises' },
  { value: 15,  suffix: '+', label: 'University Partners', note: 'Leading institutions worldwide' },
  { value: 7,   suffix: '+', label: 'African Countries', note: 'Programs across the continent' },
];

function Counter({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const progress = Math.min((Date.now() - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOut));
      if (progress === 1) { clearInterval(timer); setCount(end); }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function ImpactStats() {
  return (
    <section className="relative py-20 sm:py-24 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      {/* Africa continent watermark */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center" aria-hidden>
        <AfricaWatermark className="w-72 md:w-96 h-auto" opacity={0.07} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-white/15 mb-14" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
            >
              <p
                className="font-serif font-extrabold text-white leading-none mb-3"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)' }}
              >
                <Counter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-sans text-white/80 text-sm sm:text-base font-semibold mb-1">
                {stat.label}
              </p>
              <p className="font-sans text-white/40 text-xs uppercase tracking-wider">
                {stat.note}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/15 mt-14" />

        {/* Kente accent */}
        <div className="flex justify-center mt-6">
          <KenteDivider count={8} color="#F4A261" />
        </div>
      </div>
    </section>
  );
}
