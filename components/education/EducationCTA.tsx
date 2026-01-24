'use client';

import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

export default function EducationCTA() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2025/09/performance-e1759310784853.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-90" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <FadeIn>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
              Ready to Expand Your Program?
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Partner with Hilltop to create transformational study abroad experiences in Africa for your students.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 font-serif font-bold text-lg tracking-wide text-primary-navy bg-white border-2 border-white rounded-full shadow-md transition-all duration-300 hover:bg-primary-navy hover:text-white"
                >
                  <Mail size={22} className="transition-transform duration-300 group-hover:scale-110" />
                  Contact Us
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-5 font-serif font-bold text-lg tracking-wide text-white bg-white/10 border-2 border-white rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                >
                  Learn More
                  <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-12 pt-12 border-t border-white/20">
              <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-6 font-semibold">
                Trusted by leading universities worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <span className="text-white/70 font-semibold text-sm uppercase tracking-[0.2em]">
                  Georgetown
                </span>
                <span className="text-white/70 font-semibold text-sm uppercase tracking-[0.2em]">
                  Howard
                </span>
                <span className="text-white/70 font-semibold text-sm uppercase tracking-[0.2em]">
                  ALU
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

