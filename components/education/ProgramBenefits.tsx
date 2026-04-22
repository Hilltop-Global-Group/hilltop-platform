'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { KenteDivider } from '../shared/HilltopBrand';

const benefits = [
  'Deliverable-based consulting experience with cross-industry organizations',
  'Cross-cultural professional fluency developed through guided immersion and reflection',
  'Direct access to Africa\'s professional networks: founders, executives, and institutional leaders',
  'Applied problem-solving in emerging-market contexts across fintech, agribusiness, healthcare, and more',
  'Cultural engagement co-designed with host communities, not performed for visitors',
  'Documented learning outcomes and a record of contributions suitable for academic and professional portfolios',
];

export default function ProgramBenefits() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <div className="mb-4">
                <KenteDivider count={5} color="#F4A261" />
              </div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
                PROGRAM OUTCOMES
              </p>
              <h2
                className="font-serif font-extrabold text-black leading-none mb-6"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
              >
                WHAT STUDENTS TAKE HOME
              </h2>
              <p className="font-sans text-gray-500 text-base leading-relaxed mb-10">
                What participants gain from a Hilltop program, measured through post-program evaluations and partner feedback.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                >
                  <CheckCircle2 
                    size={24} 
                    className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: '#F4A261' }}
                    strokeWidth={2.5}
                  />
                  <span className="text-gray-700 leading-relaxed">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="hidden sm:grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <FadeIn delay={0.2}>
                  <div className="h-48 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                      style={{
                        backgroundImage: `url('/images/nyu-sa9.jpg')`
                      }}
                    />
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="h-64 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                      style={{
                        backgroundImage: `url('/images/nyu-sa8.jpg')`
                      }}
                    />
                  </div>
                </FadeIn>
              </div>
              <div className="space-y-4 mt-8">
                <FadeIn delay={0.35}>
                  <div className="h-64 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                      style={{
                        backgroundImage: `url('/images/home.jpeg')`
                      }}
                    />
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="h-48 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                      style={{
                        backgroundImage: `url('/images/indi.jpeg')`
                      }}
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
