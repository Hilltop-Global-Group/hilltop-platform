'use client';

import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { KenteDivider, ArrowCTA } from '../shared/HilltopBrand';

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
    <section className="py-24 sm:py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              Video Highlights
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-none"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              See the Programs<br className="hidden md:block" /> in Action
            </h2>
          </div>
          <p className="font-sans text-gray-500 text-sm max-w-xs leading-relaxed">
            Real footage and reflections from our Ghana and Rwanda cohorts.
          </p>
        </div>
        <div className="border-t border-gray-200 mb-12" />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <motion.a
              key={index}
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-500 hover:-translate-y-1 block"
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
                <span
                  className="mt-4 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em]"
                  style={{ color: '#F4A261' }}
                >
                  Watch
                  <ArrowCTA color="#F4A261" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

