'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import { curriculum, program } from '@/lib/ghana-2027-data';

export default function Ghana2027Curriculum() {
  return (
    <section id="curriculum" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Learning Design</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Curriculum and Contact{' '}
              <span className="relative inline-block whitespace-nowrap">
                Hours
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="border border-gray-100 bg-gray-50/60 p-8 sm:p-10 text-center mb-12">
            <p className="font-sans text-sm text-gray-500 uppercase tracking-[0.2em] mb-3">
              Total contact hours
            </p>
            <p className="font-serif font-extrabold text-5xl sm:text-6xl" style={{ color: '#1D3160' }}>
              {program.contactHours}
            </p>
            <p className="font-sans text-gray-600 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              The program is deliverable-driven, with approximately {program.contactHours} total contact
              hours across the virtual and in-country components. Hilltop provides a syllabus outline and a
              contact-hour record to support academic credit and scholarship applications.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculum.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07}>
              <div className="border border-gray-100 bg-white p-7 h-full transition-colors duration-300 hover:border-[#F4A261]/40">
                <span
                  className="inline-flex items-center justify-center w-8 h-8 font-serif font-extrabold text-sm text-white mb-5"
                  style={{ backgroundColor: i % 2 === 0 ? '#1D3160' : '#F4A261' }}
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h3 className="font-serif font-extrabold text-lg mb-3" style={{ color: '#1D3160' }}>
                  {item.title}
                </h3>
                <p className="font-sans text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
