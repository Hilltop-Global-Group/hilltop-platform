'use client';

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
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

