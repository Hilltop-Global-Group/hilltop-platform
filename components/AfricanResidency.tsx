'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const cards = [
  {
    title: 'Cultural Immersion',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
    description: 'Experience authentic African culture firsthand'
  },
  {
    title: 'Community Bonding',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg',
    description: 'Build lasting connections with peers and locals'
  },
  {
    title: 'Global Network',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
    description: 'Expand your professional network across continents'
  }
];

export default function AfricanResidency() {
  return (
    <section className="py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-[#0a192f] to-[#0a192f] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-orange-400 uppercase tracking-[0.3em] text-sm font-bold mb-4 font-body">
              The Residency Experience
            </p>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6">
              Beyond the Classroom
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Experience executive education through immersive residencies that blend cultural exploration with professional development. Our programs place leaders in Africa's most dynamic business ecosystems.
            </p>
          </div>
        </FadeIn>

        {/* Cinematic Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div
                className="group relative h-[400px] rounded-xl overflow-hidden cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Image with zoom effect */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Border glow on hover */}
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-orange-400/50 transition-all duration-500 rounded-xl" />

                {/* Content at bottom with glass effect */}
                <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md bg-black/30 border-t border-white/10">
                  <h3 className="font-serif font-bold text-2xl text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-orange-400/20" />
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.7}>
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/education"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-serif font-bold text-lg tracking-wide border-2 border-white transition-all duration-300 hover:bg-white hover:text-[#0a192f] shadow-lg"
                style={{ backgroundColor: 'transparent', color: '#FFFFFF' }}
              >
                Discover the Experience
                <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
