'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

export default function AfricanResidency() {
  return (
    <section className="py-20" style={{ backgroundColor: '#1D3160' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl sm:text-5xl text-white mb-6">
              Explore More About what Hilltop Does
            </h2>
            <h3 className="font-serif font-bold text-3xl mb-4" style={{ color: '#F4A261' }}>
              Hilltop's African Business Residency
            </h3>
            <p className="font-body text-white/80 text-lg max-w-3xl mx-auto">
              Experience executive education through immersive residencies that blend cultural exploration with professional development. Our programs place leaders in Africa's most dynamic business ecosystems for unparalleled learning and networking opportunities.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { 
              alt: 'Business professionals in Africa', 
              image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg'
            },
            { 
              alt: 'Students learning abroad', 
              image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg'
            },
            { 
              alt: 'Cultural immersion experience', 
              image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg'
            }
          ].map((item, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <motion.div 
                className="aspect-video bg-gray-300 rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <div className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#learn-more"
                className="inline-flex items-center gap-2 px-8 py-4 rounded font-serif font-bold text-sm tracking-wide hover:bg-opacity-90 transition-all"
                style={{ backgroundColor: '#F4A261', color: '#1D3160' }}
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}



