'use client';

import { Briefcase, Sunrise, HeartHandshake, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import { sampleWeek } from '@/lib/ghana-2027-data';

const icons: LucideIcon[] = [Briefcase, Sunrise, HeartHandshake, MapPin];

export default function Ghana2027SampleWeek() {
  return (
    <section id="sample-week" className="py-20 sm:py-28 bg-[#080f1c]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Schedule</Eyebrow>
            <h2
              className="font-serif font-extrabold text-white"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Sample{' '}
              <span className="relative inline-block whitespace-nowrap">
                Week
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6 mb-6" />
            <p className="font-sans text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
              A typical in-country week. Exact timings are set with your host organization.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleWeek.map((block, i) => {
            const Icon = icons[i % icons.length];
            return (
              <FadeIn key={block.label} delay={i * 0.08}>
                <div className="border border-gray-700 bg-white/5 p-8 h-full">
                  <div
                    className="w-14 h-14 flex items-center justify-center mb-6"
                    style={{ backgroundColor: i % 2 === 0 ? '#1D3160' : '#F4A261' }}
                  >
                    <Icon size={26} className="text-white" aria-hidden />
                  </div>
                  <h3 className="font-serif font-extrabold text-xl mb-2 text-white">{block.label}</h3>
                  {block.time && (
                    <p
                      className="font-sans text-xs font-semibold uppercase tracking-[0.15em] mb-3"
                      style={{ color: '#F4A261' }}
                    >
                      {block.time}
                    </p>
                  )}
                  <p className="font-sans text-gray-300 text-sm leading-relaxed">{block.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
