'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../FadeIn';
import { KenteDivider, DottedAfricaMap, AfricaWatermark } from '../shared/HilltopBrand';
import { DESTINATION_FLAG_SRC } from '@/lib/destination-flags';

const regions = [
  {
    name: 'West Africa',
    countries: [
      {
        code: 'GH',
        name: 'Ghana',
        tagline: 'Hilltop\'s flagship destination',
        description: 'Africa\'s Gold Coast and one of the continent\'s most stable democracies. Ghana is Hilltop\'s top destination for education abroad, internships, and diaspora engagement. Our deep local presence in Accra ensures seamless cultural and professional immersion.',
        highlights: ['Internship Programs', 'Education Abroad', 'Faculty Development', 'Cultural Immersion'],
        href: '/internships/ghana',
        active: true,
      },
      {
        code: 'NG',
        name: 'Nigeria',
        tagline: 'Africa\'s largest economy',
        description: 'Africa\'s most populous country and one of its largest economies. Nigeria offers unparalleled exposure to Africa\'s entrepreneurial energy, fintech innovation, and cultural diversity.',
        highlights: ['Faculty-Led Programs', 'Business Immersions'],
        active: false,
      },
    ],
  },
  {
    name: 'East Africa',
    countries: [
      {
        code: 'RW',
        name: 'Rwanda',
        tagline: 'Innovation hub of East Africa',
        description: 'Known globally for its rapid development and innovation-driven economy. Rwanda offers a unique environment for students to engage with technology, governance, and social enterprise. Hilltop partners with ALU and leading Kigali-based organizations.',
        highlights: ['Internship Programs', 'Education Abroad', 'Tech & Innovation', 'Cultural Immersion'],
        href: '/internships/rwanda',
        active: true,
      },
      {
        code: 'KE',
        name: 'Kenya',
        tagline: 'East African economic hub',
        description: 'One of Africa\'s premier destinations and the East African economic and transportation hub. Hilltop has local presence in Nairobi to ensure a seamless cultural and professional experience.',
        highlights: ['Faculty-Led Programs', 'Business Immersions', 'Cultural Tourism'],
        active: false,
      },
    ],
  },
  {
    name: 'Southern Africa',
    countries: [
      {
        code: 'NA',
        name: 'Namibia',
        tagline: 'Mineral-rich southwestern Africa',
        description: 'A southwestern African nation with strong economic growth and rich mineral resources. Namibia offers unique perspectives on post-colonial development, conservation, and sustainable economic models.',
        highlights: ['Faculty-Led Programs', 'Cultural Immersions'],
        active: false,
      },
      {
        code: 'ZA',
        name: 'South Africa',
        tagline: 'Africa\'s most developed economy',
        description: 'One of Africa\'s largest and most developed economies with strong appeal for education, tourism, and trade. South Africa provides exposure to a complex, dynamic society with world-class institutions.',
        highlights: ['Faculty-Led Programs', 'Business Immersions', 'Cultural Tourism'],
        active: false,
      },
    ],
  },
];

export default function FocalDestinations() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-44 pb-24 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
        <AfricaWatermark className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <FadeIn>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] mb-4" style={{ color: '#F4A261' }}>
              Where We Operate
            </p>
            <h1
              className="font-serif font-extrabold text-white leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}
            >
              Focal Destinations
            </h1>
            <p className="font-sans text-white/50 text-base sm:text-lg max-w-2xl leading-relaxed">
              Hilltop operates across six countries spanning West, East, and Southern Africa,
              with active internship programs in Ghana and Rwanda.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Regions */}
      {regions.map((region, ri) => (
        <section
          key={region.name}
          className={`relative py-20 sm:py-24 overflow-hidden ${ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          {ri === 0 && <DottedAfricaMap color="#1D3160" opacity={0.04} className="absolute -right-10 top-0" />}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <FadeIn>
              <div className="mb-12">
                <KenteDivider className="mb-6" />
                <h2 className="font-serif font-extrabold text-2xl sm:text-3xl" style={{ color: '#1D3160' }}>
                  {region.name}
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {region.countries.map((country, ci) => (
                <FadeIn key={country.code} delay={ci * 0.08}>
                  <motion.div
                    className="flex flex-col h-full bg-white border border-gray-100 overflow-hidden group"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="p-6 pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="relative h-10 w-14 flex-shrink-0 overflow-hidden rounded-sm border border-gray-200 bg-gray-50">
                          <Image
                            src={DESTINATION_FLAG_SRC[country.code]}
                            alt={`${country.name} flag`}
                            fill
                            className="object-contain object-center p-0.5"
                            sizes="56px"
                          />
                        </span>
                        <div>
                          <h3 className="font-serif font-bold text-xl" style={{ color: '#080f1c' }}>
                            {country.name}
                          </h3>
                          <p className="font-sans text-xs text-gray-400">{country.tagline}</p>
                        </div>
                        {country.active && (
                          <span
                            className="ml-auto px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white"
                            style={{ backgroundColor: '#10B981' }}
                          >
                            Active
                          </span>
                        )}
                      </div>

                      <p className="font-sans text-gray-600 text-sm leading-relaxed">
                        {country.description}
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="px-6 pb-4 flex-1">
                      <div className="flex flex-wrap gap-1.5">
                        {country.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider border border-gray-200 text-gray-500"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-gray-100">
                      {country.href ? (
                        <Link
                          href={country.href}
                          className="group/link inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-[0.12em] transition-colors duration-200"
                          style={{ color: '#1D3160' }}
                        >
                          View Programs
                          <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
                        </Link>
                      ) : (
                        <Link
                          href="/contact"
                          className="group/link inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-[0.12em] text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        >
                          Inquire About Programs
                          <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform duration-200" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20" style={{ backgroundColor: '#080f1c' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <FadeIn>
            <h2 className="font-serif font-extrabold text-white text-2xl sm:text-3xl mb-4">
              Ready to Explore Africa?
            </h2>
            <p className="font-sans text-white/50 text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Whether you are a university looking to build a new program or a student seeking
              an immersive experience, Hilltop can connect you to the right destination.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-sans font-semibold text-xs uppercase tracking-[0.15em] text-white transition-opacity duration-200 hover:opacity-90"
                style={{ backgroundColor: '#F4A261' }}
              >
                Start a Conversation
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/education"
                className="inline-flex items-center gap-2 px-8 py-3.5 font-sans font-semibold text-xs uppercase tracking-[0.15em] text-white border border-white/25 hover:border-white/50 transition-all duration-200"
              >
                Explore Education Abroad
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
