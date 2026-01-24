'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

export default function InternshipHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center object-cover"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/IMG_4280-1-scaled-e1759312955679.jpg')` 
          }}
        />
        {/* Gradient Overlay for better text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-900/70 to-blue-900/90" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <FadeIn>
          <div className="text-center">
            {/* Pill Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
                Professional Development
              </span>
            </div>
            
            {/* Main Title */}
            <h1 className="font-serif font-bold text-5xl md:text-6xl text-white mb-6">
              Internship Programs
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              Connect classroom learning with real-world experience in Africa's most dynamic markets.
            </p>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#internship-programs"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-serif font-bold text-lg tracking-wide bg-white text-blue-900 hover:bg-blue-50 transition-all duration-300 shadow-lg"
              >
                View Open Internships
                <ArrowRight size={22} />
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
