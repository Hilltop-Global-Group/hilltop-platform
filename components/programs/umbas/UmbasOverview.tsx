'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';

const heroPhotos = [
  { src: '/images/business.webp', caption: 'Accra skyline' },
  { src: '/images/osu-castle.JPG', caption: 'Cape Coast heritage' },
  { src: '/images/makola.webp', caption: 'Cultural & market life' },
];

export default function UmbasOverview() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {heroPhotos.map((photo) => (
              <div key={photo.src}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-64 object-cover border border-gray-100"
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
            <p className="font-sans text-gray-700 text-lg leading-relaxed">
              An immersive experiential learning journey to Accra and Cape Coast blending Ghanaian history,
              cultural engagement, a community service project, and business/cultural visits — designed for
              UMBAS students and alumni. Operated end-to-end by Hilltop Global Group, an education-abroad and
              destination management firm specializing in Africa.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
