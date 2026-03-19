'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';

const highlights = [
  {
    title: 'Traditional Music & Dance',
    description: 'Cultural performances & heritage',
    image:
      'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
  },
  {
    title: 'Accra Arts Centre',
    description: 'Accra Arts Centre & creative streets',
    image:
      'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg',
  },
  {
    title: 'Makola Market',
    description: 'Markets and shopping for souvenirs',
    image:
      'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
  },
  {
    title: 'Cape Coast Castle',
    description: 'Historical landmarks',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
  },
  {
    title: 'Kakum National Park',
    description: 'Nature & wildlife',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg',
  },
  {
    title: 'Creative Hubs',
    description: 'Art galleries & design spaces',
    image:
      'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg',
  },
];

export default function GhanaCulturalHighlights() {
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
              Cultural{' '}
              <span className="relative inline-block whitespace-nowrap">
                Highlights
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6 mb-6" />
            <p className="font-sans text-gray-600 text-lg max-w-2xl mx-auto">
              These excursions connect your internship to Ghana&apos;s history,
              communities, and creative economies, deepening context and leadership
              learning.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <FadeIn key={index} delay={index * 0.08}>
              <div className="group relative overflow-hidden border border-gray-100 transition-all duration-500 hover:border-[#F4A261]/40">
                <div className="relative h-80">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${highlight.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/85 via-[#080f1c]/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif font-extrabold text-2xl mb-1">
                      {highlight.title}
                    </h3>
                    <p className="font-sans text-white/80 text-sm">
                      {highlight.description}
                    </p>
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
