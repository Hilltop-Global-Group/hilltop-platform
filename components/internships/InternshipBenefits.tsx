'use client';

import { Users, Briefcase, Globe, TrendingUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { KenteDivider, DecorativeUnderline, HighlightWord } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';

const benefits = [
  {
    icon: Users,
    title: 'Develop cross-cultural professional fluency',
    description: 'Navigate workplace norms across cultures, communicate effectively in international teams, and build the adaptability that global employers actively recruit for.',
    image: '/images/nyu-sa14.jpg',
  },
  {
    icon: Briefcase,
    title: 'Deliver real work products to real organizations',
    description: 'Every placement is structured around deliverables. You leave with portfolio-ready output that your host organization actually uses, not an observation report.',
    image: '/images/real-work.jpg',
  },
  {
    icon: Globe,
    title: 'Work inside Africa\'s fastest-growing sectors',
    description: 'Placements span fintech, agritech, healthtech, creative industries, and social enterprise across organizations vetted by Hilltop\'s on-ground teams.',
    image: '/images/innovation-center.jpg',
  },
  {
    icon: TrendingUp,
    title: 'Build professional networks that last beyond the program',
    description: 'Direct mentorship from African founders, executives, and industry professionals. Leadership workshops designed to convert international experience into career-ready competencies.',
    image: '/images/professional-network.jpeg',
  },
  {
    icon: Heart,
    title: 'Engage with communities as a participant, not a spectator',
    description: 'Guided cultural immersions and reflection sessions connect your professional experience to the history, creative economies, and civic life of your host city.',
    image: '/images/spec1.jpg',
  },
];

export default function InternshipBenefits() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <FadeIn>
          <KenteDivider className="mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Why Intern With Hilltop
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none mb-14"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            What You Gain From a Hilltop <HighlightWord>Placement</HighlightWord>
          </h2>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className="relative h-44 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${benefit.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: '#F4A261' }}>
                      <Icon size={20} className="text-white" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-gray-500 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
