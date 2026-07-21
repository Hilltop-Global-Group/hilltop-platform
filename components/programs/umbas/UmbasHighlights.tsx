'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import { umbasHighlights } from '@/lib/umbas-ghana-2027';

export default function UmbasHighlights() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Explore</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Cultural &amp; Historical{' '}
              <span className="relative inline-block whitespace-nowrap">
                Highlights
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6 mb-6" />
            <p className="font-sans text-gray-600 text-lg max-w-2xl mx-auto">
              Landmark experiences woven through Accra and Cape Coast — history, nature, craft, and community.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {umbasHighlights.map((highlight, index) => (
            <FadeIn key={highlight.title} delay={index * 0.06}>
              <div className="group relative overflow-hidden border border-gray-100 transition-all duration-500 hover:border-[#F4A261]/40 h-full">
                <div className="relative h-72">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${highlight.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/85 via-[#080f1c]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-serif font-extrabold text-xl mb-1">{highlight.title}</h3>
                    <p className="font-sans text-white/75 text-sm">{highlight.description}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
