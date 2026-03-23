'use client';

import { Calendar, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { KenteDivider, DecorativeUnderline } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';

function decodeHtmlEntities(text: string) {
  const entities: { [key: string]: string } = {
    '&#8211;': '\u2013', '&#8212;': '\u2014', '&amp;': '&',
    '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#039;': "'", '&nbsp;': ' ',
  };
  return text.replace(/&#?\w+;/g, match => entities[match] || match);
}

function formatDate(dateString: string) {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function PastCard({ internship, index }: { internship: any; index: number }) {
  const featuredImage = internship._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  const city = internship.acf?.city || '';
  const country = internship.acf?.country || '';
  let location = city && country ? `${city}, ${country}` : 'Location TBD';
  if (location === 'Location TBD' && internship.internship_locations?.length > 0) {
    location = internship.internship_locations.map((t: any) => t.name).join(', ');
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white border border-gray-100 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center grayscale-[30%]"
          style={{
            backgroundImage: featuredImage
              ? `url('${featuredImage}')`
              : 'linear-gradient(135deg, #1D3160 0%, #F4A261 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/80 via-[#080f1c]/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 text-white text-xs font-bold uppercase tracking-wider bg-gray-500">
            Completed
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-serif font-bold text-lg text-white line-clamp-2">
            {decodeHtmlEntities(internship.title.rendered)}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-2 mb-4">
          {(internship.acf?.start_date || internship.meta?._internship_start_date) && (internship.acf?.end_date || internship.meta?._internship_end_date) && (
            <div className="flex items-center gap-3">
              <Calendar size={14} className="flex-shrink-0 text-gray-400" />
              <span className="font-sans text-gray-500 text-sm">
                {formatDate(internship.acf?.start_date || internship.meta._internship_start_date)} \u2013 {formatDate(internship.acf?.end_date || internship.meta._internship_end_date)}
              </span>
            </div>
          )}
          <div className="flex items-center gap-3">
            <MapPin size={14} className="flex-shrink-0 text-gray-400" />
            <span className="font-sans text-gray-500 text-sm">{location}</span>
          </div>
          {(internship.acf?.duration || internship.meta?._internship_duration) && (
            <div className="flex items-center gap-3">
              <Clock size={14} className="flex-shrink-0 text-gray-400" />
              <span className="font-sans text-gray-500 text-sm">{internship.acf?.duration || internship.meta._internship_duration}</span>
            </div>
          )}
        </div>
        <div className="pt-4 border-t border-gray-100">
          <p className="font-sans text-gray-400 text-xs uppercase tracking-wider">Program Ended</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PastInternshipsGrid({ internships }: { internships: any[] }) {
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship: any, index: number) => (
              <PastCard key={internship.id} internship={internship} index={index} />
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
