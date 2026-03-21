'use client';

import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const includes = [
  {
    title: 'Professional Engagement and Deliverables',
    description: 'Participants contribute to live consulting projects, research sprints, and organizational deliverables with vetted industry partners across fintech, agribusiness, healthcare, and creative sectors.',
    image: '/images/professional-engagement.jpeg',
    accent: '#1D3160',
  },
  {
    title: 'History, Heritage, and Contemporary Culture',
    description: 'Guided engagement with historical landmarks, living traditions, and the creative economies shaping each destination today.',
    image: '/images/osu-castle.JPG',
    accent: '#F4A261',
  },
  {
    title: 'Community-Engaged Learning',
    description: 'Projects co-created with local organizations, designed so that host communities receive usable outcomes and students gain perspectives shaped by genuine reciprocal exchange.',
    image: '/images/nyu-sa11.jpg',
    accent: '#1D3160',
  },
  {
    title: 'Independent Exploration',
    description: 'Weekends to engage with national parks, heritage sites, local markets, and the everyday rhythms of your host city on your own terms.',
    image: '/images/kakum.jpg',
    accent: '#F4A261',
  },
];

export default function ProgramIncludes() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-14">
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
              Each Education Abroad Program Includes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured experience combining academic rigor, professional engagement, cultural immersion, and guided reflection.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-7">
          {includes.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Photo header */}
                <div className="relative h-44 overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${item.accent}CC 0%, ${item.accent}33 50%, transparent 100%)`,
                    }}
                  />
                </div>

                {/* Text content */}
                <div className="p-7">
                  <div
                    className="w-10 h-1 rounded-full mb-4"
                    style={{ backgroundColor: item.accent }}
                  />
                  <h3 className="font-serif font-bold text-xl mb-3" style={{ color: '#1D3160' }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
