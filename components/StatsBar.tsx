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
    { label: 'Total Projects', value: 50, suffix: '+' },
    { label: 'Years Served', value: 10, suffix: '+' },
    { label: 'African Countries', value: 7, suffix: '+' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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


