'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import { eligibility, program } from '@/lib/ghana-2027-data';

const photos = [
  // Item 12: these must not repeat any image used in Cultural Highlights.
  { src: '/images/intern.JPG', caption: 'Interns with their host organizations' },
  { src: '/images/innovation-center.jpg', caption: 'Innovation and enterprise hubs' },
  { src: '/images/cultural-procession.jpg', caption: 'Cultural immersion in Accra' },
];

export default function Ghana2027Overview() {
  return (
    <section id="overview" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {photos.map((photo) => (
              <div key={photo.src}>
                <div
                  role="img"
                  aria-label={photo.caption}
                  className="w-full h-64 bg-cover bg-center border border-gray-100"
                  style={{ backgroundImage: `url('${photo.src}')` }}
                />
                <p className="text-center text-gray-500 font-sans text-sm mt-3">{photo.caption}</p>
              </div>
            ))}
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

            <div
              className="border-l-4 p-6 mb-8"
              style={{ borderColor: '#F4A261', backgroundColor: '#FFF8F1' }}
            >
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                2027 Theme
              </p>
              <p className="font-serif font-extrabold text-xl sm:text-2xl" style={{ color: '#1D3160' }}>
                {program.theme}
              </p>
            </div>

            <p className="font-sans text-gray-700 text-lg leading-relaxed mb-6">
              {program.overview}
            </p>
            <p className="font-sans text-gray-700 text-lg leading-relaxed">
              Placements include fintech and technology, agribusiness, healthcare, creative industries
              and social enterprise. Monday to Thursday and Friday mornings are spent on site with your
              host company. Friday afternoons are given to a community service project, and weekends to
              guided cultural excursions and community engagement.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="font-serif font-extrabold text-2xl mb-6" style={{ color: '#1D3160' }}>
              Who can apply
            </h3>
            <div className="grid sm:grid-cols-3 gap-5">
              {eligibility.map((item) => (
                <div key={item.label} className="border border-gray-100 bg-gray-50/60 p-6 h-full">
                  <p className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-gray-400 mb-2">
                    {item.label}
                  </p>
                  <p className="font-sans text-gray-700 text-sm leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
