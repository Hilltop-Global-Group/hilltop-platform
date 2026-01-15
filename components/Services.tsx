'use client';

import Link from 'next/link';
import { ArrowRight, GraduationCap, Users, Briefcase, Heart } from 'lucide-react';

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
            Explore Our Key Services
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-3xl mx-auto">
            We offer tailored programs to help students gain invaluable experience abroad. Our services include international internships, study-abroad placements, and comprehensive support to make each global journey seamless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="relative h-56 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
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
                    className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-white text-lg shadow-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    {index + 1}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 transition-colors duration-300 group-hover:text-opacity-80" style={{ color: service.color }}>
                    {service.title}
                  </h3>
                  <p className="font-body text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                    {service.description}
                  </p>
                  
                  <Link
                    href="#learn-more"
                    className="inline-flex items-center gap-2 font-heading font-semibold text-sm transition-all duration-300 group-hover:gap-4"
                    style={{ color: service.color }}
                  >
                    Learn more
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                <div 
                  className="absolute inset-0 border-2 border-transparent group-hover:border-current rounded-2xl transition-all duration-500 pointer-events-none"
                  style={{ color: service.color }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}



