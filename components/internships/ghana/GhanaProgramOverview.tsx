'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';

export default function GhanaProgramOverview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-1">
              <img
                src="/images/business.webp"
                alt="Accra skyline & business districts"
                className="w-full h-64 object-cover border border-gray-100"
              />
              <p className="text-center text-gray-500 font-sans text-sm mt-3">
                Accra skyline &amp; business districts
              </p>
            </div>
            <div className="lg:col-span-1">
              <img
                src="/images/osu-castle.JPG"
                alt="Historical sites"
                className="w-full h-64 object-cover border border-gray-100"
              />
              <p className="text-center text-gray-500 font-sans text-sm mt-3">
                Historical sites
              </p>
            </div>
            <div className="lg:col-span-1">
              <img
                src="/images/Accra-Art-Centre-16.webp"
                alt="Markets & creative streets"
                className="w-full h-64 object-cover border border-gray-100"
              />
              <p className="text-center text-gray-500 font-sans text-sm mt-3">
                Markets &amp; creative streets
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-4xl mx-auto">
            <Eyebrow>Program Overview</Eyebrow>
            <h2
              className="font-serif font-extrabold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              About the{' '}
              <span className="relative inline-block whitespace-nowrap">
                Program
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mb-8" />
            <p className="font-sans text-gray-700 text-lg leading-relaxed">
              The Ghana program places participants inside Accra's professional ecosystems four days a week, with Fridays dedicated to leadership development, community-engaged learning, and cultural immersion. Placements span technology, finance, agribusiness, health, and creative sectors, with each intern contributing real deliverables to their host organization.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
