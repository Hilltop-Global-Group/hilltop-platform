'use client';

import Link from 'next/link';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { ArrowCTA } from '../shared/HilltopBrand';

export interface InternshipCardData {
  /** Headline shown over the image. */
  title: string;
  /** Small eyebrow above the title, usually the city. */
  eyebrow?: string;
  city?: string;
  country?: string;
  /** Program detail page. Card is not clickable when omitted. */
  href?: string;
  /** Already resolved by cardImage(), so this is never empty. */
  image: string;
  accent: string;
  status: 'open' | 'closed';
  /** Overrides the default badge text. */
  badgeLabel?: string;
  duration?: string;
  deadline?: string;
  /** Label before the date value. Defaults to "Deadline". */
  deadlineLabel?: string;
  description?: string;
  highlights?: string[];
  /** External application link. Only rendered when the program is open. */
  applyUrl?: string;
  /** Footer text for closed programs. */
  closedLabel?: string;
}

/**
 * The single internship card used on both Current and Past internship pages.
 * Open and closed programs render identically apart from the badge and footer.
 */
export default function InternshipCard({
  data,
  index = 0,
}: {
  data: InternshipCardData;
  index?: number;
}) {
  const isOpen = data.status === 'open';
  const badge = data.badgeLabel ?? (isOpen ? 'Applications Open' : 'Applications Closed');
  const badgeColor = isOpen ? '#10B981' : '#6B7280';
  const eyebrow = data.eyebrow ?? data.city;
  const location =
    data.city && data.country ? `${data.city}, ${data.country}` : data.city || data.country || '';

  const inner = (
    <>
      {/* Image */}
      <div className="relative h-64 overflow-hidden flex-shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url('${data.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/80 via-[#080f1c]/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1.5 text-white text-xs font-bold uppercase tracking-wider"
            style={{ backgroundColor: badgeColor }}
          >
            {badge}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          {eyebrow && (
            <p
              className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-1"
              style={{ color: data.accent === '#1D3160' ? '#F4A261' : '#ffffff' }}
            >
              {eyebrow}
            </p>
          )}
          <h3 className="font-serif font-extrabold text-2xl text-white line-clamp-2">{data.title}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="space-y-2.5 mb-5">
          {location && (
            <div className="flex items-center gap-3">
              <MapPin size={15} className="flex-shrink-0" style={{ color: data.accent }} />
              <span className="font-sans text-gray-600 text-sm">{location}</span>
            </div>
          )}
          {data.duration && (
            <div className="flex items-center gap-3">
              <Clock size={15} className="flex-shrink-0" style={{ color: data.accent }} />
              <span className="font-sans text-gray-600 text-sm">{data.duration}</span>
            </div>
          )}
          {data.deadline && (
            <div className="flex items-center gap-3">
              <Calendar size={15} className="flex-shrink-0" style={{ color: data.accent }} />
              <span className="font-sans text-gray-600 text-sm">
                {`${data.deadlineLabel ?? 'Deadline'}: `}
                <span className="font-semibold" style={{ color: data.accent }}>
                  {data.deadline}
                </span>
              </span>
            </div>
          )}
        </div>

        {data.description && (
          <p className="font-sans text-gray-500 text-sm leading-relaxed mb-5">{data.description}</p>
        )}

        {data.highlights && data.highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4 flex-1">
            {data.highlights.map((h) => (
              <span
                key={h}
                className="self-start px-2.5 py-1 text-xs font-semibold border"
                style={{
                  borderColor: `${data.accent}50`,
                  color: data.accent,
                  backgroundColor: `${data.accent}08`,
                }}
              >
                {h}
              </span>
            ))}
          </div>
        )}

        {data.href && (
          <span
            className="inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] mt-auto pt-4 border-t border-gray-100"
            style={{ color: data.accent }}
          >
            View Program Details
            <ArrowCTA color={data.accent} />
          </span>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-500"
    >
      {data.href ? (
        <Link
          href={data.href}
          className="group flex-1 flex flex-col"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          {inner}
        </Link>
      ) : (
        <div className="group flex-1 flex flex-col">{inner}</div>
      )}

      {/* Apply Now sits outside the Link to avoid nesting anchors */}
      <div className="px-6 pb-6">
        {isOpen && data.applyUrl ? (
          <a
            href={data.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white transition-opacity duration-200 hover:opacity-80"
            style={{ backgroundColor: data.accent }}
          >
            Apply Now
          </a>
        ) : (
          <p className="text-center py-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-gray-400 border border-gray-200">
            {isOpen ? 'Applications open soon' : data.closedLabel ?? 'Applications closed'}
          </p>
        )}
      </div>
    </motion.div>
  );
}
