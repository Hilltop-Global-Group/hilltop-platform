'use client';

import { Calendar } from 'lucide-react';
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

function decodeHtmlEntities(text: string) {
  const entities: { [key: string]: string } = {
    '&#8211;': '–', '&#8212;': '—', '&amp;': '&',
    '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#039;': "'", '&nbsp;': ' ',
  };
  return text.replace(/&#?\w+;/g, match => entities[match] || match);
}

function toCardData(internship: WpInternship): InternshipCardData {
  const acf = internship.acf || {};
  const meta = internship.meta || {};
  const country = acf.country || '';
  const city = acf.city || '';
  const presentation = presentationFor(country);

  const featuredImage = internship._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  const start = formatProgramDate(acf.start_date || meta._internship_start_date);
  const end = formatProgramDate(acf.end_date || meta._internship_end_date);
  const ran = start && end ? `${start} – ${end}` : start || end || '';

  let location = city && country ? `${city}, ${country}` : '';
  if (!location && (internship.internship_locations?.length ?? 0) > 0) {
    location = internship.internship_locations!.map((t: { name: string }) => t.name).join(', ');
  }

  const description =
    acf.overview_text ||
    (internship.excerpt?.rendered
      ? decodeHtmlEntities(internship.excerpt.rendered.replace(/<[^>]*>/g, '')).trim()
      : '');

  return {
    title: decodeHtmlEntities(internship.title?.rendered || 'Internship Program'),
    eyebrow: city || location,
    city,
    country,
    // Completed programs link to their own archived record, not the live program page,
    // which now carries the current cycle's content.
    href: `/internships/${internship.slug}`,
    image: cardImage(featuredImage, country),
    accent: presentation.accent,
    status: 'closed',
    badgeLabel: 'Completed',
    duration: acf.duration || meta._internship_duration || '',
    deadline: ran,
    deadlineLabel: 'Ran',
    description,
    highlights: parseHighlights(acf.highlights),
    closedLabel: 'Program ended',
  };
}

export default function PastInternshipsGrid({ internships }: { internships: WpInternship[] }) {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <KenteDivider className="mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Completed Programs
          </p>
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mb-14">
            <h2
              className="font-serif font-extrabold text-black leading-none flex-1"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              Past{' '}
              <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
                Internships
                <DecorativeUnderline color="#F4A261" />
              </span>
            </h2>
            <div className="hidden md:block w-px bg-gray-200 self-stretch flex-shrink-0" />
            <p className="font-sans text-gray-500 text-base max-w-sm leading-relaxed md:pt-1 flex-shrink-0">
              Browse completed Hilltop programs. Past programs will appear here once they have concluded.
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        {internships.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {internships.map((internship: WpInternship, index: number) => (
              <InternshipCard key={internship.id} data={toCardData(internship)} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1D316010' }}>
              <Calendar size={28} style={{ color: '#1D3160' }} />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-3" style={{ color: '#1D3160' }}>
              No Past Internships Yet
            </h3>
            <p className="font-sans text-gray-500 max-w-md mx-auto">
              Past programs will appear here once they have concluded.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
