'use client';

import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const videos = [
  {
    title: 'Ghana Internship Experience 2024',
    description: 'Students share highlights from their journey of growth, learning, and cultural discovery.',
    thumbnail: 'http://hilltopglobalgroup.com/wp-content/uploads/2025/10/summer2024.jpg',
    videoUrl: 'https://player.vimeo.com/video/1009903690?h=a03fa111f9',
  },
  {
    title: 'Hilltop Internships: Global Connections Across Africa',
    description: 'A collective look at our programs—where learning meets culture and innovation.',
    thumbnail: 'http://hilltopglobalgroup.com/wp-content/uploads/2025/10/all.jpg',
    videoUrl: 'https://vimeo.com/1132264308',
  },
];

export default function VideoTestimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <motion.a
              key={index}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="relative h-56 overflow-hidden cursor-pointer">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${video.thumbnail}')` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm transition-all duration-300"
                    style={{ backgroundColor: '#F4A261' }}
                    whileHover={{ scale: 1.15 }}
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
                <span className="mt-4 inline-block text-sm font-semibold hover:underline" style={{ color: '#F4A261' }}>
                  Watch →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

