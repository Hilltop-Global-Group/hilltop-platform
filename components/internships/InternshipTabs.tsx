'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowRight, History, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function decodeHtmlEntities(text: string) {
  const entities: { [key: string]: string } = {
    '&#8211;': '–',
    '&#8212;': '—',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&nbsp;': ' ',
  };
  return text.replace(/&#?\w+;/g, match => entities[match] || match);
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').substring(0, 180) + '...';
}

function formatDate(dateString: string) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function formatDeadline(dateString: string) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function InternshipCard({ internship, index, isPast = false }: { internship: any; index: number; isPast?: boolean }) {
  const cardColor = index % 2 === 0 ? '#1D3160' : '#F4A261';
  const featuredImage = internship._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  let location = 'Location TBD';
  if (internship.internship_locations && internship.internship_locations.length > 0) {
    location = internship.internship_locations.map((term: any) => term.name).join(', ');
  }

  const cardContent = (
    <>
      {/* Image Header */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: featuredImage
              ? `url('${featuredImage}')`
              : 'linear-gradient(135deg, #1D3160 0%, #F4A261 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: `linear-gradient(to bottom, transparent, ${cardColor})` }}
        />
        <div className="absolute top-4 left-4">
          <span
            className="px-4 py-2 rounded-full text-white text-sm font-bold backdrop-blur-sm shadow-lg"
            style={{ backgroundColor: isPast ? '#6B7280' : '#10B981' }}
          >
            {isPast ? 'Past Program' : 'Applications Open'}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif font-bold text-2xl md:text-3xl text-white line-clamp-2">
            {decodeHtmlEntities(internship.title.rendered)}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="space-y-4 mb-6">
          {internship.meta._internship_start_date && internship.meta._internship_end_date && (
            <div className="flex items-start gap-3">
              <Calendar size={20} className="flex-shrink-0 mt-0.5" style={{ color: cardColor }} />
              <div>
                <p className="font-semibold text-gray-900">Program Dates</p>
                <p className="text-gray-600">
                  {formatDate(internship.meta._internship_start_date)} –{' '}
                  {formatDate(internship.meta._internship_end_date)}
                </p>
              </div>
            </div>
          )}
          <div className="flex items-start gap-3">
            <MapPin size={20} className="flex-shrink-0 mt-0.5" style={{ color: cardColor }} />
            <div>
              <p className="font-semibold text-gray-900">Location</p>
              <p className="text-gray-600">{location}</p>
            </div>
          </div>
          {internship.meta._internship_duration && (
            <div className="flex items-start gap-3">
              <Clock size={20} className="flex-shrink-0 mt-0.5" style={{ color: cardColor }} />
              <div>
                <p className="font-semibold text-gray-900">Duration</p>
                <p className="text-gray-600">{internship.meta._internship_duration}</p>
              </div>
            </div>
          )}
        </div>

        {internship.excerpt?.rendered && (
          <p className="text-gray-700 leading-relaxed mb-6">{stripHtml(internship.excerpt.rendered)}</p>
        )}

        {/* Format Options with Pricing */}
        {(internship.meta._internship_hybrid_available === '1' ||
          internship.meta._internship_incountry_available === '1') && (
          <div className="mb-6 space-y-3">
            <p className="text-sm font-bold text-gray-900 mb-3">Available Formats:</p>
            {internship.meta._internship_incountry_available === '1' && (
              <div
                className="p-3 rounded-lg border-2"
                style={{ borderColor: cardColor, backgroundColor: `${cardColor}08` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">Full In-Country</p>
                    <p className="text-xs text-gray-600">4 weeks entirely in-country</p>
                  </div>
                  {internship.meta._internship_incountry_cost && (
                    <p className="font-bold text-lg" style={{ color: cardColor }}>
                      {internship.meta._internship_incountry_cost}
                    </p>
                  )}
                </div>
              </div>
            )}
            {internship.meta._internship_hybrid_available === '1' && (
              <div
                className="p-3 rounded-lg border-2"
                style={{ borderColor: cardColor, backgroundColor: `${cardColor}08` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">Hybrid Format</p>
                    <p className="text-xs text-gray-600">3 weeks in-country + 1 week remote</p>
                  </div>
                  {internship.meta._internship_hybrid_cost && (
                    <p className="font-bold text-lg" style={{ color: cardColor }}>
                      {internship.meta._internship_hybrid_cost}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4">
          {isPast ? (
            <div
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 font-serif font-bold text-white rounded-xl cursor-not-allowed opacity-50"
              style={{ backgroundColor: '#6B7280' }}
            >
              Program Ended
            </div>
          ) : (
            <div
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 font-serif font-bold text-white rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
              style={{ backgroundColor: cardColor }}
            >
              Learn more
              <ArrowRight size={18} />
            </div>
          )}
          {internship.meta._internship_application_deadline && !isPast && (
            <div className="text-center sm:text-left">
              <p className="text-sm text-gray-600">Application deadline</p>
              <p className="font-bold" style={{ color: cardColor }}>
                {formatDeadline(internship.meta._internship_application_deadline)}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );

  if (isPast) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        className="bg-white rounded-lg overflow-hidden shadow-md opacity-80"
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        href={`/internships/${internship.slug}`}
        className="block bg-white rounded-lg overflow-hidden shadow-md transition-all duration-500 group hover:shadow-lg hover:-translate-y-2"
      >
        {cardContent}
      </Link>
    </motion.div>
  );
}

type Props = {
  currentInternships: any[];
  pastInternships: any[];
};

export default function InternshipTabs({ currentInternships, pastInternships }: Props) {
  const hasCurrent = currentInternships.length > 0;
  const hasPast = pastInternships.length > 0;
  const [activeTab, setActiveTab] = useState<'current' | 'past'>(hasCurrent ? 'current' : 'past');

  useEffect(() => {
    if (!hasCurrent && hasPast) {
      setActiveTab('past');
    }
  }, [hasCurrent, hasPast]);

  if (!hasCurrent && !hasPast) return null;

  return (
    <section id="internship-programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
            Internship Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our internship opportunities across Africa's most dynamic markets.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl border-2 gap-1" style={{ borderColor: '#1D3160', backgroundColor: '#F8F9FA' }}>
            <button
              onClick={() => setActiveTab('current')}
              className="flex items-center gap-2 px-7 py-3 rounded-lg font-serif font-bold text-base transition-all duration-300"
              style={{
                backgroundColor: activeTab === 'current' ? '#1D3160' : 'transparent',
                color: activeTab === 'current' ? '#FFFFFF' : '#1D3160',
              }}
            >
              <Zap size={18} />
              Current Internships
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className="flex items-center gap-2 px-7 py-3 rounded-lg font-serif font-bold text-base transition-all duration-300"
              style={{
                backgroundColor: activeTab === 'past' ? '#1D3160' : 'transparent',
                color: activeTab === 'past' ? '#FFFFFF' : '#1D3160',
              }}
            >
              <History size={18} />
              Past Internships
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'current' && (
            <motion.div
              key="current"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {hasCurrent ? (
                <div className="grid lg:grid-cols-2 gap-8">
                  {currentInternships.map((internship, index) => (
                    <InternshipCard key={internship.id} internship={internship} index={index} isPast={false} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1D316015' }}>
                    <Zap size={28} style={{ color: '#1D3160' }} />
                  </div>
                  <h3 className="font-serif font-bold text-2xl mb-2" style={{ color: '#1D3160' }}>
                    No Current Internships
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    There are no open internships at the moment. Check back soon or view our past programs below.
                  </p>
                  <button
                    onClick={() => setActiveTab('past')}
                    className="inline-flex items-center gap-2 px-8 py-4 font-serif font-bold rounded-xl text-white transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: '#1D3160' }}
                  >
                    View Past Internships
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {activeTab === 'past' && (
            <motion.div
              key="past"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              {hasPast ? (
                <>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {pastInternships.map((internship, index) => (
                      <InternshipCard key={internship.id} internship={internship} index={index} isPast={true} />
                    ))}
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-8">
                    Showing the 4 most recent past programs.
                  </p>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#1D316015' }}>
                    <History size={28} style={{ color: '#1D3160' }} />
                  </div>
                  <h3 className="font-serif font-bold text-2xl mb-2" style={{ color: '#1D3160' }}>
                    No Past Internships Yet
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto">
                    Past programs will appear here once they've concluded.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
