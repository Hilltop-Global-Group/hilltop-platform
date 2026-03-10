'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Cultural Immersion',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
    imageAlt: 'Hilltop participants engaging with local traditions and ceremonies in Ghana',
    description: 'Engage with local traditions, ceremonies, and creative communities on their terms.',
  },
  {
    title: 'Peer and Community Connection',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg',
    imageAlt: 'Hilltop cohort participants building lasting professional and personal bonds',
    description: 'Form professional and personal bonds that outlast the program itself.',
  },
  {
    title: 'Continental Reach',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
    imageAlt: 'Professionals and entrepreneurs from seven African countries connected through Hilltop',
    description: 'Connect with professionals and institutions spanning seven African countries.',
  },
];

export default function AfricanResidency() {
  return (
    <section className="py-24 sm:py-32" style={{ backgroundColor: '#080f1c' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top label */}
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-10" style={{ color: '#F4A261' }}>
          The Hilltop Residency
        </p>

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <h2
            className="font-serif font-extrabold text-white leading-none"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
          >
            Learning That Lives<br className="hidden md:block" /> Outside Lecture Halls
          </h2>
          <p className="font-sans text-white/50 text-base max-w-sm md:text-right leading-relaxed">
            Our residency programs bring students, executives, and faculty into direct contact with Africa's business and cultural landscape.
          </p>
        </div>

        {/* Thin divider */}
        <div className="border-t border-white/10 mb-12" />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="group relative overflow-hidden"
              style={{ height: 380 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${card.image}')` }}
                role="img"
                aria-label={card.imageAlt}
              />

              {/* Bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <h3 className="font-serif font-bold text-xl text-white mb-2">{card.title}</h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <Link
            href="/education"
            className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white border-b border-white/30 pb-1 hover:border-white transition-colors duration-200"
          >
            See the Residency in Action
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
