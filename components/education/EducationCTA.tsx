'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const features = [
  {
    title: 'Customized Programs',
    description: 'Every itinerary is built around your institution\'s learning objectives, calendar, and budget.'
  },
  {
    title: 'Full-Service Management',
    description: 'From pre-departure briefings to in-country logistics to post-program reporting.'
  },
  {
    title: 'Proven Track Record',
    description: 'Trusted by Georgetown, Howard, Morehouse, Spelman, and Duke, among others.'
  }
];

export default function EducationCTA() {
  return (
    <section className="py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-[#0a192f] to-[#0a192f] relative overflow-hidden">
      {/* Decorative: ambient blobs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Decorative: white concentric rings — top left */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-24 -left-24" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="460" height="460" viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="400" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="0" cy="0" r="310" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.04" />
          <circle cx="0" cy="0" r="220" stroke="#FFFFFF" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: white dot grid — bottom right */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-10 right-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.25, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={13 + col * 26} cy={13 + row * 26} r="2.5" fill="#FFFFFF" opacity="0.07" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: white diagonal lines — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-6 -left-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="65"  x2="65"  y2="0"   stroke="#FFFFFF" strokeWidth="1.5" opacity="0.07" />
          <line x1="0" y1="115" x2="115" y2="0"   stroke="#FFFFFF" strokeWidth="1" opacity="0.05" />
          <line x1="0" y1="165" x2="165" y2="0"   stroke="#FFFFFF" strokeWidth="1" opacity="0.04" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-orange-400 uppercase tracking-[0.3em] text-sm font-bold mb-4 font-body">
              Partner With Us
            </p>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6">
              Let's Design Your Next Africa Program
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Partner with Hilltop to create transformational study abroad experiences in Africa for your students.
            </p>
          </div>
        </FadeIn>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <motion.div
                className="group relative h-[300px] rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {/* Border glow on hover */}
                <div className="absolute inset-0 ring-2 ring-transparent group-hover:ring-orange-400/50 transition-all duration-500 rounded-xl" />

                {/* Content centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="font-serif font-bold text-2xl text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
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
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-serif font-bold text-lg tracking-wide border-2 border-white transition-all duration-300 hover:bg-white hover:text-[#0a192f] shadow-lg"
                style={{ backgroundColor: 'transparent', color: '#FFFFFF' }}
              >
                Start a Program Conversation
                <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

