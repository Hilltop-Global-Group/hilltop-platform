'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Users, Briefcase, GraduationCap, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: 500,
    suffix: '+',
    label: 'Students Placed',
    description: 'Across Ghana and Rwanda programs',
  },
  {
    icon: Briefcase,
    number: 50,
    suffix: '+',
    label: 'Partner Organizations',
    description: 'Startups, NGOs, and enterprises',
  },
  {
    icon: GraduationCap,
    number: 15,
    suffix: '+',
    label: 'University Partners',
    description: 'Leading institutions worldwide',
  },
  {
    icon: Globe,
    number: 5,
    suffix: '',
    label: 'African Countries',
    description: 'Programs across the continent',
  },
];

export default function ImpactStats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 bg-white">

      {/* Decorative: wavy top edge */}
      <motion.div className="pointer-events-none absolute top-0 left-0 right-0" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="50" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 28 C240 5, 480 50, 720 25 S1200 3, 1440 28" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.12"/>
        </svg>
      </motion.div>

      {/* Decorative: concentric arcs — top left */}
      <motion.div className="pointer-events-none absolute -top-16 -left-16" aria-hidden initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="300" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.10" />
          <circle cx="0" cy="0" r="220" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.07" />
          <circle cx="0" cy="0" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.05" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom right */}
      <motion.div className="pointer-events-none absolute bottom-8 right-8" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={14 + col * 28} cy={14 + row * 28} r="2.5" fill="#1D3160" opacity="0.13" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: diagonal lines — bottom left */}
      <motion.div className="pointer-events-none absolute -bottom-4 -left-4" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="70"  x2="70"  y2="0" stroke="#1D3160" strokeWidth="1.5" opacity="0.12"/>
          <line x1="0" y1="120" x2="120" y2="0" stroke="#1D3160" strokeWidth="1" opacity="0.09"/>
          <line x1="0" y1="170" x2="170" y2="0" stroke="#1D3160" strokeWidth="1" opacity="0.06"/>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Our Impact
          </h2>
          <p className="text-xl text-gray-600">
            Building futures, one student at a time
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-500"
                style={{
                  animation: hasAnimated ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: index % 2 === 0 ? '#1D3160' : '#F4A261' }}
                >
                  <Icon size={32} className="text-white" strokeWidth={2} />
                </div>
                
                <div className="text-5xl font-serif font-bold mb-2" style={{ color: '#1D3160' }}>
                  {hasAnimated ? stat.number : 0}{stat.suffix}
                </div>
                
                <div className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                  {stat.label}
                </div>
                
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

