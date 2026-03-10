'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { KenteDivider } from '../shared/HilltopBrand';

const benefits = [
  'Real-world business consulting experience',
  'Cross-cultural competency development',
  'Professional network expansion in Africa',
  'Practical problem-solving in international settings',
  'Cultural immersion and language exposure',
  'Resume-building international experience',
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
                Program Outcomes
              </p>
              <h2
                className="font-serif font-extrabold text-black leading-none mb-6"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
              >
                What Students Take Home
              </h2>
              <p className="font-sans text-gray-500 text-base leading-relaxed mb-10">
                What participants consistently report gaining from their time with Hilltop.
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <FadeIn delay={0.2}>
                  <div className="h-48 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                      style={{
                        backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg')`
                      }}
                    />
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="h-64 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                      style={{
                        backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg')`
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
                        backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg')`
                      }}
                    />
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="h-48 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                      style={{
                        backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg')`
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
