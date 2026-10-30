import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarDays, MapPin } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { Eyebrow, KenteDivider, DecorativeUnderline } from '@/components/shared/HilltopBrand';
import { springPrograms, springProgramsIntro } from '@/lib/spring-programs-data';
import { SITE_URL } from '@/lib/site';

const PATH = '/education/spring-programs';

export const metadata: Metadata = {
  title: 'Spring Programs | Hilltop Global Group',
  description:
    'Short Hilltop Global Group programs running over the spring break window, including The Black British Experience in London and Oxford, March 2027.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'Spring Programs | Hilltop Global Group',
    description:
      'Short Hilltop programs running over the spring break window, built around a single question and a place that answers it.',
    url: `${SITE_URL}${PATH}`,
    type: 'website',
  },
};

export default function SpringProgramsPage() {
  return (
    <main className="pt-[67px]">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <Eyebrow>Education Abroad</Eyebrow>
            <h1
              className="font-serif font-extrabold leading-none mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', color: '#080f1c' }}
            >
              Spring{' '}
              <span className="relative inline-block whitespace-nowrap">
                Programs
                <DecorativeUnderline />
              </span>
            </h1>
            <KenteDivider className="mb-8" />
            <p className="font-sans text-gray-600 text-lg leading-relaxed max-w-3xl">
              {springProgramsIntro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Program cards */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-gray-100 border border-gray-100">
            {springPrograms.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 0.1}>
                <Link href={p.href} className="group bg-white flex flex-col h-full">
                  <div className="relative overflow-hidden" style={{ height: '240px' }}>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${p.image}')` }}
                      role="img"
                      aria-label={p.imageAlt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/70 via-transparent to-transparent" />
                    <span
                      className="absolute top-4 left-4 font-sans text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5"
                      style={{ backgroundColor: '#F4A261', color: '#080f1c' }}
                    >
                      {p.status}
                    </span>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <h2
                      className="font-serif font-bold text-2xl mb-3 leading-tight"
                      style={{ color: '#080f1c' }}
                    >
                      {p.name}
                    </h2>

                    <ul className="space-y-2 mb-5">
                      <li className="flex items-center gap-2">
                        <MapPin size={14} style={{ color: '#F4A261' }} aria-hidden />
                        <span className="font-sans text-sm text-gray-500">{p.location}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CalendarDays size={14} style={{ color: '#F4A261' }} aria-hidden />
                        <span className="font-sans text-sm text-gray-500">
                          {p.dateLabel}, {p.durationLabel}
                        </span>
                      </li>
                    </ul>

                    <p className="font-sans text-gray-500 text-sm leading-relaxed flex-1">
                      {p.summary}
                    </p>

                    <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                      <span className="font-sans text-sm font-semibold" style={{ color: '#080f1c' }}>
                        {p.priceLabel}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 group-hover:text-black transition-colors duration-200">
                        View program
                        <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
