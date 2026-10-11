'use client';

import FadeIn from '@/components/FadeIn';
import {
  AfricaWatermark,
  KenteDivider,
  DecorativeUnderline,
  Eyebrow,
} from '@/components/shared/HilltopBrand';
import { timeline } from '@/lib/ghana-2027-data';

const formatCards = [
  {
    number: '3',
    unit: 'days',
    title: 'Virtual component',
    description:
      'Monday to Wednesday, July 5 to 7, 2027, worked remotely before travel, following a mandatory orientation and company meet and greet.',
    bg: '#F4A261',
  },
  {
    number: '3',
    unit: 'weeks',
    title: 'In country in Accra',
    description:
      'Saturday, July 10 to Saturday, July 31, 2027, on site with your host organization and immersed in the city.',
    bg: '#1D3160',
  },
];

export default function Ghana2027Format() {
  return (
    <section id="format" className="relative py-20 sm:py-28 bg-[#080f1c] overflow-hidden">
      <div
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4"
        aria-hidden
      >
        <AfricaWatermark className="w-72 h-auto" opacity={0.05} />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Format and Dates</Eyebrow>
            <h2
              className="font-serif font-extrabold text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Program Format and 2027{' '}
              <span className="relative inline-block whitespace-nowrap">
                Dates
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {formatCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <div className="border border-gray-700 bg-white/5 p-8 h-full">
                <div
                  className="w-16 h-16 flex flex-col items-center justify-center mb-6 text-white"
                  style={{ backgroundColor: card.bg }}
                >
                  <span className="font-serif font-extrabold text-2xl leading-none">{card.number}</span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.15em] mt-0.5">
                    {card.unit}
                  </span>
                </div>
                <h3 className="font-serif font-extrabold text-xl text-white mb-3">{card.title}</h3>
                <p className="font-sans text-gray-300 text-sm leading-relaxed">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <h3 className="font-serif font-extrabold text-2xl text-white mb-8">
            How the 2027 cycle runs
          </h3>
        </FadeIn>

        <ol className="relative border-l border-white/15 ml-3">
          {timeline.map((item, i) => (
            <FadeIn key={item.stage} delay={0.05 * i}>
              <li className="relative pl-8 pb-10 last:pb-0">
                <span
                  className="absolute left-0 top-1.5 -translate-x-1/2 w-3 h-3"
                  style={{ backgroundColor: '#F4A261' }}
                  aria-hidden
                />
                <p
                  className="font-sans text-xs font-semibold uppercase tracking-[0.18em] mb-2"
                  style={{ color: '#F4A261' }}
                >
                  {item.dates}
                </p>
                <h4 className="font-serif font-extrabold text-lg text-white mb-2">{item.stage}</h4>
                <p className="font-sans text-gray-300 text-sm leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>

        <FadeIn delay={0.3}>
          <p className="font-sans text-gray-400 text-sm mt-10 italic">
            A full day-by-day schedule is shared with accepted participants during pre-departure
            orientation.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
