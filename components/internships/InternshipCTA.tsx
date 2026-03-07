'use client';

import { Mail, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function InternshipCTA() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-90" />
      </div>

      {/* Decorative: concentric white rings — top left */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-24 -left-24" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="460" height="460" viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="400" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.06" />
          <circle cx="0" cy="0" r="310" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.04" />
          <circle cx="0" cy="0" r="220" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: white dot grid — bottom right */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-10 right-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={14 + col * 28} cy={14 + row * 28} r="2.5" fill="#FFFFFF" opacity="0.07" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: white diagonal lines — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-8 -right-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="240" y1="80" x2="160" y2="0" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.06"/>
          <line x1="240" y1="140" x2="100" y2="0" stroke="#FFFFFF" strokeWidth="1" opacity="0.05"/>
          <line x1="240" y1="200" x2="40" y2="0" stroke="#FFFFFF" strokeWidth="1" opacity="0.04"/>
        </svg>
      </motion.div>

      {/* Decorative: white horizontal rule accents — center */}
      <motion.div aria-hidden className="pointer-events-none absolute top-1/2 left-0 right-0 -translate-y-1/2" initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 1.4, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="4" viewBox="0 0 1440 4" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="2" x2="1440" y2="2" stroke="#FFFFFF" strokeWidth="1" opacity="0.04" strokeDasharray="8 16"/>
        </svg>
      </motion.div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Ready to Apply?
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Spaces in each cohort are limited. Reach out to learn what is currently available and start your application.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
          <a
            href="mailto:support@hilltopglobalgroup.com"
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: '#F4A261' }}
              >
                <Mail size={24} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/70 text-sm">Email us at</p>
                <p className="text-white font-bold">support@hilltopglobalgroup.com</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">Quick response within 24 hours · Expert guidance on applications</p>
          </a>

          <a
            href="tel:+12024992284"
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: '#F4A261' }}
              >
                <Phone size={24} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/70 text-sm">Call us at</p>
                <p className="text-white font-bold">+1 202-499-2284</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">Speak directly with our team · Monday-Friday 9am-5pm EST</p>
          </a>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            className="group inline-flex items-center justify-center gap-3 px-12 py-5 font-serif font-bold text-lg tracking-wide text-primary-navy bg-white border-2 border-white rounded-full shadow-lg transition-all duration-300 hover:bg-primary-navy hover:text-white hover:scale-105"
          >
            Start Your Application
            <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm mb-6">
            Join students from leading universities worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Georgetown</span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">Howard</span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">ALU</span>
            <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">KNUST</span>
          </div>
        </div>
      </div>
    </section>
  );
}

