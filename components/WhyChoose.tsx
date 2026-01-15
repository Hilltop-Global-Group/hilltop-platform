'use client';

import { Check, Play } from 'lucide-react';

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
              Why Choose Hilltop Global Group
            </h2>
            <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
              We design immersive, experience-driven programs across Africa that transform travel into purposeful learning. Our internships place you on real, project-driven teams in high-growth sectors so you gain practical skills and measurable impact. Whether onsite or virtual, we deliver expert-led cultural and professional immersion and manage logistics end to end so you can focus on growth.
            </p>

            <div className="mb-8">
              <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: '#1D3160' }}>
                Mission
              </h3>
              <p className="font-body text-gray-600 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              
              <ul className="space-y-3">
                {['Lorem ipsum dolor sit ame', 'Consectetur adipiscing eli', 'Nec ullamcorper mattis'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Check size={20} style={{ color: '#F4A261' }} />
                    <span className="font-body text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="inline-flex items-center gap-2 px-6 py-3 rounded font-heading font-bold text-sm tracking-wide hover:bg-opacity-90 transition-all" style={{ backgroundColor: '#F4A261', color: '#1D3160' }}>
              WATCH MORE
            </button>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                alt="Students"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform" style={{ backgroundColor: '#F4A261' }}>
                  <Play size={24} fill="#1D3160" style={{ color: '#1D3160' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



