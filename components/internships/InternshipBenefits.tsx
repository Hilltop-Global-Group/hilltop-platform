'use client';

import { Users, Briefcase, Globe, TrendingUp, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { KenteDivider, DecorativeUnderline, HighlightWord } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';

const benefits = [
  {
    icon: Users,
    title: 'Build cross-cultural skills and adaptability',
    description: 'Work across cultures, adapt quickly, and develop communication strategies that make you an effective global team member.',
    image: '/images/kente-market.jpg',
  },
  {
    icon: Briefcase,
    title: 'Contribute to meaningful, project-based work',
    description: 'Own real deliverables and see the tangible impact of your work with partner organisations and startups.',
    image: '/images/nkrumah-memorial.jpg',
  },
  {
    icon: Globe,
    title: 'Work alongside African innovators',
    description: 'Engage in project-driven placements across fintech, agritech, healthtech and creative industries.',
    image: '/images/innovation-center.jpg',
  },
  {
    icon: TrendingUp,
    title: 'Develop leadership through mentorship',
    description: 'Leadership workshops and mentoring help convert international experience into capabilities employers seek.',
    image: '/images/cocoa-farm.jpg',
  },
  {
    icon: Heart,
    title: 'Experience cultural immersion',
    description: 'Curated excursions connect your learning to local history, art, and community perspectives.',
    image: '/images/closing-dinner.jpg',
  },
];

export default function InternshipBenefits() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <FadeIn>
          <KenteDivider className="mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Why Intern With Us
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none mb-14"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            Benefits of Interning <HighlightWord>Abroad</HighlightWord>
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
