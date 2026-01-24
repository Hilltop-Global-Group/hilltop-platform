'use client';

import { Building2, Globe2, Users2, Lightbulb } from 'lucide-react';
import FadeIn from '../FadeIn';

export default function Partnership() {
  const cards = [
    { icon: Building2, title: 'Accommodation', description: 'Comfortable and secure housing for all participants', color: '#F4A261' },
    { icon: Globe2, title: 'In-Country Logistics', description: 'Comprehensive support and coordination', color: '#1D3160' },
    { icon: Users2, title: 'Business Visits', description: 'Curated tours and corporate engagements', color: '#F4A261' },
    { icon: Lightbulb, title: 'Project Design', description: 'Student consulting project sourcing', color: '#1D3160' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <FadeIn>
            <div>
              <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
                University Partnerships
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Hilltop partners with Universities to expand their international program footprint in Africa by facilitating unique and transformational turnkey experiences for their travel abroad programs.
                </p>
                <p>
                  Services include accommodation, comprehensive in-country logistics, curated tours, business visits, student consulting project sourcing and design and more.
                </p>
                <p>
                  Hilltop has validated that in a very organic way, these experiences in Africa enrich the business school experience for the students. In addition to the cultural and other experiences, they gain practical knowledge working on cross-industry projects that have a significant local impact.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: card.color }}>
                      <Icon size={28} className="text-white" strokeWidth={2} />
                    </div>
                    <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {card.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

