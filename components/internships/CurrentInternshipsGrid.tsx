'use client';

import Link from 'next/link';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { KenteDivider, ArrowCTA, DecorativeUnderline } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';

function decodeHtmlEntities(text: string) {
  const entities: { [key: string]: string } = {
    '&#8211;': '\u2013', '&#8212;': '\u2014', '&amp;': '&',
    '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#039;': "'", '&nbsp;': ' ',
  };
  return text.replace(/&#?\w+;/g, match => entities[match] || match);
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').substring(0, 180) + '...';
}

function formatDate(dateString: string) {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function detectCountry(internship: any): 'ghana' | 'rwanda' | 'other' {
  const title = (internship.title?.rendered || '').toLowerCase();
  const slug = (internship.slug || '').toLowerCase();
  if (title.includes('rwanda') || slug.includes('rwanda')) return 'rwanda';
  if (title.includes('ghana') || slug.includes('ghana')) return 'ghana';
  return 'other';
}

function InternshipCard({ internship, index }: { internship: any; index: number }) {
  const country = detectCountry(internship);
  const accent = country === 'rwanda' ? '#F4A261' : '#1D3160';

  const featuredImage = internship._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const fallbackImage = country === 'rwanda'
    ? '/images/kcc-scaled.webp'
    : country === 'ghana'
    ? '/images/akwaaba-gh.jpeg'
    : undefined;
  const cardImage = featuredImage || fallbackImage;

  const locationLabel = country === 'rwanda'
    ? 'Kigali, Rwanda'
    : country === 'ghana'
    ? 'Accra, Ghana'
    : internship.internship_locations?.map((t: any) => t.name).join(', ') || 'Location TBD';

  const detailHref = country === 'ghana'
    ? '/internships/ghana'
    : country === 'rwanda'
    ? '/internships/rwanda'
    : `/internships/${internship.slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={detailHref}
        className="group block bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {/* Image */}
        <div className="relative h-60 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: cardImage
                ? `url('${cardImage}')`
                : 'linear-gradient(135deg, #1D3160 0%, #F4A261 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/80 via-[#080f1c]/30 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 text-white text-xs font-bold uppercase tracking-wider" style={{ backgroundColor: '#10B981' }}>
              Applications Open
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-serif font-extrabold text-xl md:text-2xl text-white line-clamp-2">
              {decodeHtmlEntities(internship.title.rendered)}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-3 mb-5">
            {internship.meta._internship_start_date && internship.meta._internship_end_date && (
              <div className="flex items-center gap-3">
                <Calendar size={16} className="flex-shrink-0" style={{ color: accent }} />
                <span className="font-sans text-gray-600 text-sm">
                  {formatDate(internship.meta._internship_start_date)} to {formatDate(internship.meta._internship_end_date)}
                </span>
              </div>
            )}
            <div className="flex items-center gap-3">
              <MapPin size={16} className="flex-shrink-0" style={{ color: accent }} />
              <span className="font-sans text-gray-600 text-sm">{locationLabel}</span>
            </div>
            {internship.meta._internship_duration && (
              <div className="flex items-center gap-3">
                <Clock size={16} className="flex-shrink-0" style={{ color: accent }} />
                <span className="font-sans text-gray-600 text-sm">{internship.meta._internship_duration}</span>
              </div>
            )}
          </div>

          {internship.excerpt?.rendered && (
            <p className="font-sans text-gray-500 text-sm leading-relaxed mb-5">{stripHtml(internship.excerpt.rendered)}</p>
          )}

          {(internship.meta._internship_hybrid_available === '1' ||
            internship.meta._internship_incountry_available === '1') && (
            <div className="mb-5 space-y-2">
              <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Available Formats</p>
              {internship.meta._internship_incountry_available === '1' && (
                <div className="flex items-center justify-between py-2 px-3 border" style={{ borderColor: `${accent}30`, backgroundColor: `${accent}06` }}>
                  <div>
                    <p className="font-sans text-gray-800 text-sm font-semibold">Full In-Country</p>
                    <p className="font-sans text-gray-400 text-xs">4 weeks entirely in-country</p>
                  </div>
                  {internship.meta._internship_incountry_cost && (
                    <p className="font-serif font-bold text-lg" style={{ color: accent }}>{internship.meta._internship_incountry_cost}</p>
                  )}
                </div>
              )}
              {internship.meta._internship_hybrid_available === '1' && (
                <div className="flex items-center justify-between py-2 px-3 border" style={{ borderColor: `${accent}30`, backgroundColor: `${accent}06` }}>
                  <div>
                    <p className="font-sans text-gray-800 text-sm font-semibold">Hybrid Format</p>
                    <p className="font-sans text-gray-400 text-xs">3 weeks in-country + 1 week remote</p>
                  </div>
                  {internship.meta._internship_hybrid_cost && (
                    <p className="font-serif font-bold text-lg" style={{ color: accent }}>{internship.meta._internship_hybrid_cost}</p>
                  )}
                </div>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span
              className="inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em]"
              style={{ color: accent }}
            >
              View Program Details
              <ArrowCTA color={accent} />
            </span>
            {internship.meta._internship_application_deadline && (
              <span className="font-sans text-xs text-gray-400">
                Deadline:{' '}
                <span className="font-semibold" style={{ color: accent }}>
                  {formatDate(internship.meta._internship_application_deadline)}
                </span>
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CurrentInternshipsGrid({ internships }: { internships: any[] }) {
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
              Explore our open internship opportunities across Africa&apos;s most dynamic markets.
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        {internships.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {internships.map((internship: any, index: number) => (
              <InternshipCard key={internship.id} internship={internship} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1D316010' }}>
              <Calendar size={28} style={{ color: '#1D3160' }} />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-3" style={{ color: '#1D3160' }}>
              No Open Internships Right Now
            </h3>
            <p className="font-sans text-gray-500 max-w-md mx-auto mb-8">
              We are currently between program cycles. Check back soon or browse our past programs to see what we offer.
            </p>
            <Link
              href="/internships/past"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] border-b pb-1 transition-colors duration-200"
              style={{ color: '#1D3160', borderColor: '#1D316060' }}
            >
              View Past Programs
              <ArrowCTA />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

