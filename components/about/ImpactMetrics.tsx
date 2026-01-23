'use client';

import { useEffect, useRef, useState } from 'react';
import ScrollReveal from './ScrollReveal';

const metrics = [
  {
    value: 10,
    suffix: '+',
    label: 'Years of Excellence',
    description: 'Transforming education since 2014',
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Students Placed',
    description: 'Lives changed through our programs',
  },
  {
    value: 5,
    suffix: '+',
    label: 'African Countries',
    description: 'Expanding opportunities across the continent',
  },
  {
    value: 15,
    suffix: '+',
    label: 'Total Projects',
    description: 'Diverse programs tailored to student needs',
  },
];

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(end * easeOut));

      if (progress === 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return <div ref={ref}>{count}</div>;
}

export default function ImpactMetrics() {
  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #F4A261 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gold-400/10 rounded-full blur-3xl" />

      {/* Accent lines */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gold-400" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gold-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-black uppercase tracking-wider mb-4 border-2 border-gold-400 px-6 py-2 rounded-full bg-gold-400">
              Our Impact
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#F4A261' }}>
              Numbers That Tell Our Story
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#F4A261' }}>
              Every number represents a life touched, a dream realized, a future transformed
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <ScrollReveal
              key={metric.label}
              animation="fade-up"
              delay={index * 150}
            >
              <div className="relative group">
                {/* Card */}
                <div className="relative bg-white rounded-lg p-8 border-4 border-gold-400 hover:border-navy-900 transition-all duration-500 hover:-translate-y-2 overflow-hidden hover:shadow-lg hover:shadow-gold-400/50">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative text-center">
                    <div className="font-serif font-bold text-6xl mb-2" style={{ color: '#1D3160' }}>
                      <Counter end={metric.value} />
                      {metric.suffix}
                    </div>
                    <h3 className="font-serif font-bold text-xl mb-3" style={{ color: '#1D3160' }}>
                      {metric.label}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-navy-900/0 group-hover:border-navy-900 rounded-tr-2xl transition-all duration-500" />
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-navy-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gold-400/20 rounded-lg blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

