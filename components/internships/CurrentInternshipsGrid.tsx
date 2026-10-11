'use client';

import Link from 'next/link';
import { CalendarClock } from 'lucide-react';
import { KenteDivider, DecorativeUnderline } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';
import InternshipCard, { type InternshipCardData } from './InternshipCard';
import {
  presentationFor,
  cardImage,
  parseHighlights,
  formatProgramDate,
  type WpInternship,
} from '@/lib/internship-presentation';
import { isWordPressInternshipApplicationsOpen } from '@/lib/internship-application-status';

function wpToCardData(internship: WpInternship): InternshipCardData {
  const acf = internship.acf || {};
  const meta = internship.meta || {};
  const country = acf.country || '';
  const city = acf.city || '';
  const presentation = presentationFor(country);
  const featuredImage = internship._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  let location = city && country ? `${city}, ${country}` : '';
  if (!location && (internship.internship_locations?.length ?? 0) > 0) {
    location = internship.internship_locations!.map((l: { name: string }) => l.name).join(', ');
  }

  const description =
    acf.overview_text ||
    (internship.excerpt?.rendered ? internship.excerpt.rendered.replace(/<[^>]*>/g, '').trim() : '');

  return {
    title: (internship.title?.rendered || 'Internship Program').replace(/<[^>]*>/g, ''),
    eyebrow: city || location,
    city,
    country,
    href: presentation.href ?? `/internships/${internship.slug}`,
    image: cardImage(featuredImage, country),
    accent: presentation.accent,
    status: isWordPressInternshipApplicationsOpen(internship) ? 'open' : 'closed',
    duration: acf.duration || meta._internship_duration || '',
    deadline: formatProgramDate(acf.application_deadline || meta._internship_application_deadline),
    description,
    highlights: parseHighlights(acf.highlights),
    applyUrl: acf.application_url || '',
  };
}


export default function CurrentInternshipsGrid({ internships }: { internships: WpInternship[] }) {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <KenteDivider className="mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Open Programs
          </p>
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mb-14">
            <h2
              className="font-serif font-extrabold text-black leading-none flex-1"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              Current{' '}
              <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
                Internships
                <DecorativeUnderline color="#F4A261" />
              </span>
            </h2>
            <div className="hidden md:block w-px bg-gray-200 self-stretch flex-shrink-0" />
            <p className="font-sans text-gray-500 text-base max-w-sm leading-relaxed md:pt-1 flex-shrink-0">
              Explore our open internship programs across Africa&apos;s most dynamic markets. Each
              listing shows its own application deadline.
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        {internships.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {internships.map((internship: WpInternship, i: number) => (
              <InternshipCard key={internship.id} data={wpToCardData(internship)} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1D316010' }}>
              <CalendarClock size={28} style={{ color: '#1D3160' }} />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-3" style={{ color: '#1D3160' }}>
              No Open Programs Right Now
            </h3>
            <p className="font-sans text-gray-500 max-w-md mx-auto mb-6">
              Applications are currently closed. Browse our completed programs or get in touch about upcoming cycles.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/internships/past"
                className="inline-flex items-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-[0.15em] border transition-all duration-300"
                style={{ color: '#1D3160', borderColor: '#1D3160' }}
              >
                View Past Programs
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-[0.15em] text-white transition-opacity duration-300 hover:opacity-90"
                style={{ backgroundColor: '#1D3160' }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}


