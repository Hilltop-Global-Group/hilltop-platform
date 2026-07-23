'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';

export default function UmbasAccommodation() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeIn>
            <div className="relative overflow-hidden shadow-xl" style={{ minHeight: 420 }}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/umbas-lancaster-hotel.png')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="px-5 py-4"
                  style={{ backgroundColor: 'rgba(8,15,28,0.72)', backdropFilter: 'blur(6px)' }}
                >
                  <p className="text-white font-serif font-bold text-base">Lancaster Hotel, Accra</p>
                  <p className="text-white/60 text-sm mt-1">4-star accommodation (or similar)</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <Eyebrow>Stay</Eyebrow>
            <h2
              className="font-serif font-extrabold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Accommodation &amp; Room{' '}
              <span className="relative inline-block whitespace-nowrap">
                Occupancy
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mb-8" />
            <div className="space-y-4 font-sans text-gray-700 text-base leading-relaxed">
              <p>4-star hotel (Lancaster Hotel, Accra, or similar).</p>
              <p>
                <strong style={{ color: '#1D3160' }}>Students:</strong> shared double-occupancy rooms; two
                same-sex students paired per room.
              </p>
              <p>
                <strong style={{ color: '#1D3160' }}>Alumni:</strong> single-occupancy rooms.
              </p>
              <p>
                A single-room supplement applies where there is an odd number of participants.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
