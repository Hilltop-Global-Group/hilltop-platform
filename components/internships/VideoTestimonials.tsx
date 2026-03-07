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
    description: 'A collective look at our programs, where learning meets culture and innovation.',
    thumbnail: 'http://hilltopglobalgroup.com/wp-content/uploads/2025/10/all.jpg',
    videoUrl: 'https://vimeo.com/1132264308',
  },
];

export default function VideoTestimonials() {
  return (
    <section className="relative overflow-hidden py-20 bg-gray-50">

      {/* Decorative: diagonal crossing stripes — top left (navy on gray) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-8 -left-8"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="60"  x2="60"  y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.07" />
          <line x1="0" y1="100" x2="100" y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.06" />
          <line x1="0" y1="140" x2="140" y2="0"   stroke="#1D3160" strokeWidth="1"   opacity="0.05" />
          <line x1="0" y1="180" x2="180" y2="0"   stroke="#1D3160" strokeWidth="1"   opacity="0.04" />
          <line x1="20" y1="220" x2="220" y2="20" stroke="#1D3160" strokeWidth="1"   opacity="0.04" />
          <line x1="60" y1="240" x2="240" y2="60" stroke="#1D3160" strokeWidth="1"   opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: large quarter-arc — bottom right (navy on gray) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="360" cy="360" r="300" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="360" cy="360" r="220" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="360" cy="360" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — top right (navy on gray) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-10 right-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 1, 2].map(row =>
            [0, 1, 2, 3].map(col => (
              <circle
                key={`${row}-${col}`}
                cx={12 + col * 26}
                cy={12 + row * 28}
                r="2.5"
                fill="#1D3160"
                opacity="0.1"
              />
            ))
          )}
        </svg>
      </motion.div>

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

