'use client';

import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';

const includes = [
  {
    title: 'Business Projects and Operations',
    description: 'Students work on real consulting engagements with local firms across sectors like fintech, agribusiness, and healthcare.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
    accent: '#1D3160',
  },
  {
    title: 'African History and Culture',
    description: 'Guided engagement with historical sites, living traditions, and the contemporary creative scene in each destination.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2025/09/performance-e1759310784853.jpg',
    accent: '#F4A261',
  },
  {
    title: 'Community Engagement',
    description: 'Service projects designed in partnership with local organizations, focused on outcomes that matter to the host community.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
    accent: '#1D3160',
  },
  {
    title: 'Exploration and Leisure',
    description: 'Weekends to explore national parks, heritage sites, markets, and the everyday life of your host city.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
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
              Each Study Abroad Program Includes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive experience combining education, culture, service, and adventure.
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
