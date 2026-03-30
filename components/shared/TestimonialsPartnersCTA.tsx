'use client';

import Link from 'next/link';
import { Quote, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

/** Single-use-per-page strip: student stories + partner voices. Use sparingly (e.g. home, internships hub). */
export default function TestimonialsPartnersCTA() {
  return (
    <section className="border-y border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: '#F4A261' }}>
            Voices &amp; outcomes
          </p>
          <h3 className="font-serif font-bold text-xl sm:text-2xl mb-8" style={{ color: '#1D3160' }}>
            Hear from students and institutional partners
          </h3>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 p-6 border border-gray-100 bg-gray-50/40">
              <div className="p-3 flex-shrink-0 self-start" style={{ backgroundColor: '#1D316010' }}>
                <Quote size={22} style={{ color: '#1D3160' }} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif font-bold text-lg mb-2" style={{ color: '#080f1c' }}>
                  Student stories
                </h4>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-5">
                  Real reflections from participants on academics, placements, and life-changing moments across our programs.
                </p>
                <Link
                  href="/testimonials"
                  className="group inline-flex items-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-[0.15em] border transition-all duration-300"
                  style={{ color: '#1D3160', borderColor: '#1D3160' }}
                >
                  View student testimonials
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-5 p-6 border border-gray-100 bg-gray-50/40">
              <div className="p-3 flex-shrink-0 self-start" style={{ backgroundColor: '#1D316010' }}>
                <Building2 size={22} style={{ color: '#1D3160' }} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-serif font-bold text-lg mb-2" style={{ color: '#080f1c' }}>
                  Partners &amp; universities
                </h4>
                <p className="font-sans text-gray-500 text-sm leading-relaxed mb-5">
                  What schools and organizations say about co-designing programs, safety, and outcomes with Hilltop.
                </p>
                <Link
                  href="/testimonials/partners"
                  className="group inline-flex items-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-[0.15em] border transition-all duration-300"
                  style={{ color: '#1D3160', borderColor: '#1D3160' }}
                >
                  View partner testimonials
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
