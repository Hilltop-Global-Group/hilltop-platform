'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutCTA() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      {/* Top and bottom gold borders */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{ backgroundColor: '#F4A261' }} />
      <div className="absolute bottom-0 left-0 right-0 h-2" style={{ backgroundColor: '#F4A261' }} />
      
      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gold-400/20 rounded-full blur-3xl animate-pulse" />
      
      <ScrollReveal animation="zoom-in">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-heading font-bold text-5xl sm:text-6xl mb-8" style={{ color: '#FFFFFF' }}>
            Take the Next Step with Us
          </h2>
          
          <p className="text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium" style={{ color: '#FFFFFF' }}>
            Join us in shaping your future today. Explore our education services, internship opportunities, and study abroad programs designed to enhance your experience and career prospects.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/internships"
              className="inline-flex items-center gap-3 px-10 py-5 font-heading font-bold text-lg tracking-wide rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ 
                color: '#000000',
                backgroundColor: '#F4A261',
                border: '4px solid #F4A261'
              }}
            >
              Explore Internships
              <ArrowRight size={24} />
            </Link>
            
            <Link
              href="/education"
              className="inline-flex items-center gap-3 px-10 py-5 font-heading font-bold text-lg tracking-wide bg-transparent rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 group"
              style={{ 
                color: '#FFFFFF',
                border: '4px solid #FFFFFF'
              }}
            >
              <span className="group-hover:text-[#1D3160] transition-colors">View Programs</span>
              <ArrowRight size={24} className="group-hover:text-[#1D3160] transition-colors" />
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

