'use client';

import { Quote, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { KenteDivider, DecorativeUnderline, DottedAfricaMap } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';

const partnerTestimonials = [
  {
    name: 'Happy Feet Youth Project & iThuba Innovation Hub',
    role: 'Community partners',
    company: 'Accra, Ghana',
    quote:
      'Our beneficiaries at Happy Feet Youth Project and iThuba Innovation Hub had a truly meaningful experience engaging with the students during their January visit, facilitated by Hilltop Global Group. We strongly believe in creating interactions that benefit both our learners and visiting groups, and this exchange was a powerful example of that. Our students felt inspired to share their stories, culture, and aspirations, while the visiting students brought openness, curiosity, and a genuine willingness to connect. This experience beautifully demonstrated the spirit of Ubuntu, the idea that we grow through one another, and reflected the kind of thoughtful, mutually beneficial global partnerships that Hilltop Global Group is committed to building. It reinforced for us the value of these collaborations in shaping young leaders and fostering deeper cross cultural understanding.',
  },
];

export default function PartnerTestimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <DottedAfricaMap color="#1D3160" opacity={0.04} className="absolute -right-8 top-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <KenteDivider className="mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Partners & Universities
          </p>
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mb-14">
            <h2
              className="font-serif font-extrabold text-black leading-none flex-1"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              What Our{' '}
              <span className="relative inline-block whitespace-nowrap">
                Partners
                <DecorativeUnderline />
              </span>
              {' '}Say
            </h2>
            <div className="hidden md:block w-px bg-gray-200 self-stretch flex-shrink-0" />
            <p className="font-sans text-gray-500 text-base max-w-sm leading-relaxed md:pt-1 flex-shrink-0">
              Voices from organizations that host and co-create experiences with Hilltop.
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        <div className="max-w-3xl mx-auto">
          {partnerTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 p-7 sm:p-10 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Quote size={20} style={{ color: '#F4A261' }} className="mb-4" />
              <p className="font-sans text-gray-600 text-base leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: index % 2 === 0 ? '#1D3160' : '#F4A261' }}
                >
                  <Building2 size={16} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-serif font-bold text-sm" style={{ color: '#1D3160' }}>
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-gray-400 text-xs">{testimonial.role} &middot; {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
