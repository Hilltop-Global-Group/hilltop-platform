'use client';

import { Users, Briefcase, Globe, TrendingUp, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: Users,
    title: 'Build cross-cultural skills and adaptability',
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
    title: 'Work alongside African innovators',
    description: 'Engage in project-driven placements across fintech, agritech, healthtech and creative industries. Build concrete skills, portfolios and networks that accelerate your career.',
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Benefits of Interning Abroad
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gain professional experience with innovators across Africa, develop cross-cultural leadership skills, and contribute to meaningful project-based work.
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

