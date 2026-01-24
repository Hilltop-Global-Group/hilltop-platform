'use client';

import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const videos = [
  {
    title: 'See What Previous Participants Experienced',
    description: 'See past students\' transformative experiences across Africa. Discover the impact, growth, and connections made during their internship journeys.',
    thumbnail: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
  },
  {
    title: 'Ghana Internship Experience 2024',
    description: 'Students share highlights from their journey of growth, learning, and cultural discovery.',
    thumbnail: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg',
  },
  {
    title: 'Hilltop Internships: Global Connections Across Africa',
    description: 'A collective look at our programs—where learning meets culture and innovation.',
    thumbnail: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
  },
];

export default function VideoTestimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            >
              <div className="relative h-56 overflow-hidden cursor-pointer">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${video.thumbnail}')` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm transition-all duration-300"
                    style={{ backgroundColor: '#F4A261' }}
                    whileHover={{ scale: 1.15, brightness: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </motion.div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl mb-3" style={{ color: '#1D3160' }}>
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {video.description}
                </p>
                <button className="mt-4 text-sm font-semibold hover:underline" style={{ color: '#F4A261' }}>
                  Watch →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

