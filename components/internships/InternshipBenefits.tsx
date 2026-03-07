'use client';

import { Users, Briefcase, Globe, TrendingUp, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: Users,
    title: 'Build cross-cultural skills & adaptability',
    description: 'Work across cultures, adapt quickly, and develop communication strategies that make you an effective global team member.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
  },
  {
    icon: Briefcase,
    title: 'Contribute to meaningful, project-based work',
    description: 'Own real deliverables and see the tangible impact of your work with partner organisations and startups.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
  },
  {
    icon: Globe,
    title: 'Gain global work experience with African innovators',
    description: 'Engage in project-driven placements across fintech, agritech, healthtech and creative industries — build concrete skills, portfolios and networks that accelerate your career.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg',
  },
  {
    icon: TrendingUp,
    title: 'Develop leadership through professional development',
    description: 'Leadership workshops and mentoring help convert international experience into leadership capabilities employers seek.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg',
  },
  {
    icon: Heart,
    title: 'Experience cultural immersion through excursions',
    description: 'Curated excursions connect your learning to local history, art and community perspectives, enriching your personal and professional growth.',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2025/09/performance-e1759310784853.jpg',
  },
];

export default function InternshipBenefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative overflow-hidden py-20 bg-gray-50">

      {/* Decorative: concentric partial rings — top right (navy on gray) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="380" cy="0" r="320" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="380" cy="0" r="240" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="380" cy="0" r="160" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
          <circle cx="380" cy="0" r="80"  stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: 6x5 dot grid — bottom left (navy on gray) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg width="160" height="130" viewBox="0 0 160 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 1, 2, 3, 4].map(row =>
            [0, 1, 2, 3, 4, 5].map(col => (
              <circle
                key={`${row}-${col}`}
                cx={12 + col * 28}
                cy={12 + row * 26}
                r="3"
                fill="#1D3160"
                opacity="0.1"
              />
            ))
          )}
        </svg>
      </motion.div>

      {/* Decorative: soft navy blob — center left (navy on gray) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-24 hidden md:block"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: 300,
          height: 300,
          borderRadius: '50%',
          backgroundColor: '#1D3160',
          opacity: 0.03,
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Benefits of Interning Abroad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why choose our 2026 internships? Gain professional experience with innovators across Africa, develop cross-cultural leadership skills, and contribute to meaningful project-based work.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                variants={itemVariants}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${benefit.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: '#F4A261' }}
                    >
                      <Icon size={24} className="text-white" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl mb-3" style={{ color: '#1D3160' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

