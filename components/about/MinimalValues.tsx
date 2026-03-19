'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { KenteDivider } from '../shared/HilltopBrand';

const values = [
  {
    id: 'excellence',
    number: '01',
    title: 'Excellence',
    tagline: 'Uncompromising Standards',
    description: 'We maintain the highest standards in everything we do. From program design to student support, excellence is not just a goal, it is our baseline.',
    image: '/images/hero-cultural.jpg',
    imageAlt: 'Hilltop students engaged in a business session in Accra, Ghana',
    accent: '#F4A261',
  },
  {
    id: 'integrity',
    number: '02',
    title: 'Integrity',
    tagline: 'Trust Through Transparency',
    description: 'We operate with complete transparency and honesty. Our relationships with students, partners, and institutions are built on trust, accountability, and unwavering ethical standards.',
    image: '/images/kente-market.jpg',
    imageAlt: 'Hilltop team members collaborating with African university partners',
    accent: '#1D3160',
  },
  {
    id: 'innovation',
    number: '03',
    title: 'Innovation',
    tagline: 'Forward-Thinking Solutions',
    description: 'We look for better ways to connect students to Africa\'s growth story. That means new program formats, new partnerships, and new destinations.',
    image: '/images/nkrumah-memorial.jpg',
    imageAlt: 'Hilltop interns working with an innovative African startup in Kigali, Rwanda',
    accent: '#F4A261',
  },
  {
    id: 'impact',
    number: '04',
    title: 'Impact',
    tagline: 'Transforming Lives',
    description: 'Every program, every partnership, every decision is measured by its impact on students\' lives. We do not just facilitate placements. We create opportunities that change futures.',
    image: '/images/innovation-center.jpg',
    imageAlt: 'Hilltop study abroad participants experiencing cultural immersion in Africa',
    accent: '#1D3160',
  },
];

function ValueRow({ value, index }: { value: typeof values[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isEven = index % 2 === 0;

  const textVariants = {
    hidden: { opacity: 0, x: isEven ? -60 : 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: isEven ? 60 : -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  };

  return (
    <div ref={ref} className="relative">
      {/* Connector line between rows */}
      {index < values.length - 1 && (
        <div
          className="absolute left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-gray-200 to-transparent"
          style={{ top: '100%', height: 48, zIndex: 1 }}
        />
      )}

      <div
        className={`grid md:grid-cols-2 gap-0 overflow-hidden rounded-2xl shadow-xl border border-gray-100 ${
          isEven ? '' : ''
        }`}
      >
        {/* Text Side */}
        <motion.div
          className={`flex flex-col justify-center px-12 py-16 bg-white relative overflow-hidden ${
            isEven ? 'md:order-1' : 'md:order-2'
          }`}
          variants={textVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Large ghost number */}
          <span
            className="absolute top-4 left-4 font-serif font-bold select-none pointer-events-none"
            style={{ fontSize: 120, color: '#F4F6FB', lineHeight: 1, zIndex: 0 }}
          >
            {value.number}
          </span>

          <div className="relative z-10 pr-4">
            {/* Tagline */}
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
              style={{ color: value.accent }}
            >
              {value.tagline}
            </p>

            {/* Title */}
            <h3 className="font-serif font-bold text-4xl mb-5" style={{ color: '#1D3160' }}>
              {value.title}
            </h3>

            {/* Animated accent line */}
            <motion.div
              className="h-1 rounded-full mb-6 origin-left"
              style={{ backgroundColor: value.accent, width: 64 }}
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            />

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              {value.description}
            </p>

            {/* Number badge */}
            <div
              className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full border-2 font-serif font-bold text-sm"
              style={{ borderColor: value.accent, color: value.accent }}
            >
              <span>{value.number}</span>
              <span className="text-gray-400 font-normal">/ 04</span>
            </div>
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className={`relative overflow-hidden ${
            isEven ? 'md:order-2' : 'md:order-1'
          }`}
          style={{ minHeight: 420 }}
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Background image with zoom on hover */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${value.image}')` }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: isEven
                ? 'linear-gradient(135deg, rgba(29,49,96,0.55) 0%, rgba(29,49,96,0.15) 60%, transparent 100%)'
                : 'linear-gradient(225deg, rgba(29,49,96,0.55) 0%, rgba(29,49,96,0.15) 60%, transparent 100%)',
            }}
          />

          {/* Decorative corner accent */}
          <div
            className={`absolute top-0 ${isEven ? 'left-0' : 'right-0'} w-20 h-20`}
            style={{
              borderTop: `5px solid ${value.accent}`,
              borderLeft: isEven ? `5px solid ${value.accent}` : 'none',
              borderRight: isEven ? 'none' : `5px solid ${value.accent}`,
              borderTopLeftRadius: isEven ? 16 : 0,
              borderTopRightRadius: isEven ? 0 : 16,
            }}
          />

          {/* Value label overlay — bottom of image */}
          <div className={`absolute bottom-6 ${isEven ? 'left-6' : 'right-6'} `}>
            <motion.div
              className="px-5 py-3 rounded-xl backdrop-blur-md"
              style={{ backgroundColor: 'rgba(29,49,96,0.75)', border: `1.5px solid ${value.accent}40` }}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <p className="text-white font-serif font-bold text-lg">{value.title}</p>
              <p className="text-xs uppercase tracking-widest mt-0.5" style={{ color: value.accent }}>
                {value.tagline}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function MinimalValues() {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="mb-4">
            <KenteDivider count={5} color="#F4A261" />
          </div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
            Our Values
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            What We Stand On
          </h2>
          <p className="font-sans text-gray-500 text-base mt-4 max-w-xl leading-relaxed">
            The principles that guide every decision, every program, every partnership
          </p>
        </motion.div>

        {/* Values Rows */}
        <div className="space-y-12 px-2 sm:px-4">
          {values.map((value, index) => (
            <ValueRow key={value.id} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
