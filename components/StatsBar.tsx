'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useSpring, useTransform, motion } from 'framer-motion';

interface CounterProps { end: number; suffix?: string; }

function Counter({ end, suffix = '' }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [animated, setAnimated] = useState(false);
  const spring = useSpring(0, { duration: 2400, bounce: 0 });
  const display = useTransform(spring, v => Math.floor(v).toString());

  useEffect(() => {
    if (isInView && !animated) { setAnimated(true); spring.set(end); }
  }, [isInView, animated, end, spring]);

  return (
    <motion.span ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
      <motion.span>{display}</motion.span>{suffix}
    </motion.span>
  );
}

const stats = [
  { value: 50,   suffix: '+', label: 'Programs Delivered' },
  { value: 10,   suffix: '+', label: 'Years in Africa' },
  { value: 7,    suffix: '+', label: 'African Countries' },
  { value: 50,   suffix: '+', label: 'Host Organizations' },
  { value: 1000, suffix: '+', label: 'Students Placed' },
];

export default function StatsBar() {
  return (
    <section style={{ backgroundColor: '#1D3160' }} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Thin top rule */}
        <div className="border-t border-white/15 mb-14" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y-2 divide-white/10 sm:divide-y-0 sm:divide-x divide-white/15">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center px-4 sm:px-6 py-6 sm:py-0 last:col-span-2 last:sm:col-span-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              {/* Big number */}
              <p
                className="font-serif font-extrabold text-white leading-none mb-3"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4.5rem)' }}
              >
                <Counter end={s.value} suffix={s.suffix} />
              </p>
              {/* Label */}
              <p className="font-sans text-white/50 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Thin bottom rule */}
        <div className="border-t border-white/15 mt-14" />
      </div>
    </section>
  );
}
