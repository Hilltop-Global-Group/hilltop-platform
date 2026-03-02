'use client';

import Link from 'next/link';
import { ArrowRight, GraduationCap, Users, Briefcase, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './FadeIn';

const services = [
  {
    title: 'Turnkey Experiential Education Programs',
    description: 'Customizable study abroad, internship, and co-curricular experiences that connect participants to Africa\'s vibrant cultural, academic, and entrepreneurial ecosystems.',
    icon: GraduationCap,
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
    color: '#1D3160',
  },
  {
    title: 'Faculty Development and Training Initiatives',
    description: 'Tailored programs for educators to experience Africa firsthand, fostering curriculum internationalization and deeper institutional partnerships.',
    icon: Users,
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg',
    color: '#F4A261',
  },
  {
    title: 'Consulting Project Sourcing & Design',
    description: 'Cross-industry collaborations in key growth sectors, including business, technology, healthcare, and sustainability, designed to provide real-world learning and development opportunities.',
    icon: Briefcase,
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
    color: '#1D3160',
  },
  {
    title: 'Cultural & Humanitarian Experiences',
    description: 'Immersive cultural activities and impactful service projects that leave a lasting impact on participants and host communities.',
    icon: Heart,
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
    color: '#F4A261',
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-20 bg-gray-50">

      {/* Decorative: concentric arc — top left */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-20 -left-20" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="370" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="0" cy="0" r="290" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="0" cy="0" r="210" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom right */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-8 right-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4,5].map(row => [0,1,2,3,4,5].map(col => (
            <circle key={`${row}-${col}`} cx={13 + col * 27} cy={13 + row * 27} r="3" fill="#1D3160" opacity="0.09" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: wave top edge */}
      <motion.div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="50" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 28 C240 5, 480 50, 720 26 S1200 3, 1440 28" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.06"/>
        </svg>
      </motion.div>

      {/* Decorative: soft navy blob — center right */}
      <motion.div aria-hidden className="pointer-events-none absolute top-1/2 -right-20 -translate-y-1/2" initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: 340, height: 340, borderRadius: '50%', backgroundColor: '#1D3160', opacity: 0.03, filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
              Explore Our Key Services
            </h2>
            <p className="font-body text-gray-600 text-lg max-w-3xl mx-auto">
              We offer tailored programs to help students gain invaluable experience abroad. Our services include international internships, study-abroad placements, and comprehensive support to make each global journey seamless.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full"
                >
                  <div className="relative h-56 overflow-hidden rounded-t-xl">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 rounded-t-xl"
                      style={{ backgroundImage: `url('${service.image}')` }}
                    />
                    <div 
                      className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ background: `linear-gradient(to bottom, transparent, ${service.color})` }}
                    />
                    
                    <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <Icon size={24} style={{ color: service.color }} strokeWidth={2} />
                    </div>

                    <div 
                      className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-white text-lg shadow-lg"
                      style={{ backgroundColor: service.color }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif font-bold text-xl mb-3 transition-colors duration-300 group-hover:text-opacity-80" style={{ color: service.color }}>
                      {service.title}
                    </h3>
                    <p className="font-body text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                      {service.description}
                    </p>
                    
                    <Link
                      href="#learn-more"
                      className="inline-flex items-center gap-2 font-serif font-semibold text-sm transition-all duration-300 group-hover:gap-4"
                      style={{ color: service.color }}
                    >
                      Learn more
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div 
                    className="absolute inset-0 border-2 border-transparent group-hover:border-current rounded-lg transition-all duration-500 pointer-events-none"
                    style={{ color: service.color }}
                  />
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}



