'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import { umbasItinerary } from '@/lib/umbas-ghana-2027';

export default function UmbasItinerary() {
  return (
    <section className="py-20 sm:py-28 bg-[#080f1c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Itinerary</Eyebrow>
            <h2
              className="font-serif font-extrabold text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Itinerary{' '}
              <span className="relative inline-block whitespace-nowrap">
                Highlights
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6 mb-6" />
            <p className="font-sans text-white/55 max-w-2xl mx-auto">
              A high-level day-by-day snapshot. Full logistics are shared with registered participants in the Pre-Departure Kit.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {umbasItinerary.map((item, i) => (
            <FadeIn key={item.day} delay={i * 0.06}>
              <div className="group border border-white/10 bg-white/5 overflow-hidden h-full flex flex-col">
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/80 to-transparent" />
                  <span
                    className="absolute top-3 left-3 font-sans text-xs font-semibold uppercase tracking-wider px-2 py-1"
                    style={{ backgroundColor: '#F4A261', color: '#080f1c' }}
                  >
                    {item.day}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <p className="font-sans text-white/40 text-xs uppercase tracking-wider mb-1">{item.date}</p>
                  <h3 className="font-serif font-extrabold text-white text-lg mb-2">{item.title}</h3>
                  {item.note && (
                    <p className="font-sans text-xs mb-2" style={{ color: '#F4A261' }}>
                      {item.note}
                    </p>
                  )}
                  <p className="font-sans text-white/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
