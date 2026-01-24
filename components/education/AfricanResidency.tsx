'use client';

import { Target, Globe, TrendingUp, Users, Brain, Handshake } from 'lucide-react';
import FadeIn from '../FadeIn';

const objectives = [
  {
    icon: Target,
    text: 'Expose students to challenging business problems in Africa',
  },
  {
    icon: Brain,
    text: "Challenge students' assumptions about the African continent",
  },
  {
    icon: TrendingUp,
    text: 'Develop awareness about the business climate in Africa',
  },
  {
    icon: Users,
    text: 'Promote cultural appreciation and exchange',
  },
  {
    icon: Globe,
    text: 'Apply critical thinking and problem-solving skills in a unique global setting',
  },
  {
    icon: Handshake,
    text: 'Foster international collaboration with teams in Africa',
  },
];

export default function AfricanResidency() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
              African Business Residency
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship program designed to transform how students experience and understand business in Africa
            </p>
          </div>
        </FadeIn>

        <div className="mb-12">
          <FadeIn delay={0.2}>
            <h3 className="font-serif font-bold text-3xl mb-8 text-center" style={{ color: '#1D3160' }}>
              Program Objectives
            </h3>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <FadeIn key={index} delay={0.1 * index}>
                  <div className="group bg-transparent border-2 border-gray-200 p-6 rounded-xl hover:border-gray-300 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: index % 2 === 0 ? '#1D3160' : '#F4A261' }}
                      >
                        <Icon size={24} className="text-white" strokeWidth={2} />
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-1">
                        {objective.text}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* Parallax Banner */}
        <FadeIn delay={0.4}>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{
                backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg')`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/50 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h3 className="font-serif font-bold text-3xl sm:text-4xl mb-4">
                  Transform Your Students' Global Perspective
                </h3>
                <p className="text-xl text-white/95 max-w-2xl mx-auto font-medium">
                  Engage with Africa's dynamic business landscape through hands-on experience
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

