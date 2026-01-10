'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AfricanResidency() {
  return (
    <section className="py-20" style={{ backgroundColor: '#1D3160' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">
            Explore More About what Hilltop Does
          </h2>
          <h3 className="font-heading font-bold text-3xl mb-4" style={{ color: '#F4A261' }}>
            Hilltop's African Business Residency
          </h3>
          <p className="font-body text-white/80 text-lg max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {['Clean Lines', 'Clean Lines', 'Clean Lines'].map((item, index) => (
            <div key={index} className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-${[
                  '1522071820-d9009062b19c',
                  '1523240795612-9a054b0db644',
                  '1517486808906-6ca8b3f04846'
                ][index]}?w=600&q=80`}
                alt={item}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#learn-more"
            className="inline-flex items-center gap-2 px-8 py-4 rounded font-heading font-bold text-sm tracking-wide hover:bg-opacity-90 transition-all"
            style={{ backgroundColor: '#F4A261', color: '#1D3160' }}
          >
            Learn More
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}


