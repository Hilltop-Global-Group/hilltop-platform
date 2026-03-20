'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AfricaWatermark,
  DecorativeUnderline,
  KenteDivider,
  ArrowCTA,
  DottedAfricaMap,
  HighlightWord,
} from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';

const signals = [
  {
    title: 'Government Partnership',
    description:
      'Signed MOU with Ghana TVET Service (GTVETS), the national body responsible for all public technical and vocational education delivery.',
  },
  {
    title: 'U.S. Faculty Pipeline',
    description:
      'Facilitation agreement with the Community Colleges for International Development (CCID), a consortium of 90+ U.S. community and technical colleges.',
  },
  {
    title: 'Priority Growth Sectors',
    description:
      'Renewable energy, construction technology, digital systems, agro-processing, and advanced manufacturing, aligned to national economic priorities.',
  },
  {
    title: 'Scalable Impact Model',
    description:
      'Train-the-trainer approach that builds institutional capacity by equipping TVET instructors, reaching thousands of students through strengthened teaching.',
  },
];

export default function TVETSection() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-44 pb-32 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url('/images/seminar-session.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#080f1c]/80 via-[#080f1c]/50 to-[#080f1c]/70" />
        </div>

        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-12" aria-hidden>
          <AfricaWatermark className="w-64 md:w-80 h-auto" opacity={0.07} />
        </div>

        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#F4A261' }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Back link */}
          <Link
            href="/education"
            className="inline-flex items-center gap-2 font-sans text-sm text-white/50 hover:text-white transition-colors duration-200 mb-8"
          >
            ← Back to Education
          </Link>

          <motion.p
            className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5"
            style={{ color: '#F4A261' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Building Africa&apos;s Workforce
          </motion.p>
          <motion.h1
            className="font-serif font-extrabold text-white leading-none"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Technical &amp; Vocational{' '}
            <span className="relative inline-block whitespace-nowrap">
              Education
              <DecorativeUnderline />
            </span>
          </motion.h1>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <KenteDivider className="mb-6" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              Our Approach
            </p>
          </FadeIn>

          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16 mb-14">
            <FadeIn className="flex-1">
              <h2
                className="font-serif font-extrabold text-black leading-none"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                Closing the Skills <HighlightWord>Gap</HighlightWord>
              </h2>
            </FadeIn>
            <div className="hidden md:block w-px bg-gray-200 self-stretch flex-shrink-0" />
            <FadeIn delay={0.1} className="md:max-w-lg">
              <p className="font-sans text-gray-500 text-base leading-relaxed">
                Hilltop is partnering with national TVET authorities and U.S. community college networks to build
                capacity in Africa&apos;s technical and vocational education systems.
              </p>
            </FadeIn>
          </div>

          <div className="border-t border-gray-200 mb-12" />

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6 max-w-4xl">
            <FadeIn>
              <p className="font-sans text-gray-600 text-base leading-relaxed">
                Through curriculum co-design and faculty exchange, we are working to close the gap between the skills
                young Africans are learning and the skills their economies need.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="font-sans text-gray-600 text-base leading-relaxed">
                Our approach centers on training instructors, not just students, creating a multiplier effect that
                reaches thousands of learners through strengthened institutional capacity. Every trained instructor
                becomes a permanent asset within the national TVET system.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="md:col-span-2">
              <p className="font-sans text-gray-600 text-base leading-relaxed">
                This work is anchored by a formal Memorandum of Understanding with Ghana&apos;s TVET Service (GTVETS)
                and a facilitation agreement with the Community Colleges for International Development (CCID), a
                consortium of 90+ U.S. institutions. Hilltop has been designated by CCID as the lead organization for
                community college global workforce development programming in Africa.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Signal Cards ── */}
      <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
        <DottedAfricaMap color="#1D3160" opacity={0.04} className="absolute -right-10 bottom-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <FadeIn>
            <KenteDivider className="mb-6" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              Why It Works
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-none mb-12"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Four Pillars of Our TVET Model
            </h2>
          </FadeIn>

          <div className="border-t border-gray-200 mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-l border-gray-200">
            {signals.map((signal, i) => (
              <motion.div
                key={signal.title}
                className="border-r border-gray-200 p-7 flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#1D3160' }}
                >
                  <span className="font-serif font-extrabold text-white text-sm leading-none">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg leading-snug" style={{ color: '#1D3160' }}>
                  {signal.title}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed flex-1">
                  {signal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Split image + text ── */}
      <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Framed photo */}
            <motion.div
              className="relative order-1"
              initial={{ opacity: 0, x: -40, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative overflow-hidden shadow-xl" style={{ minHeight: 420 }}>
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url('/images/innovation-center.jpg')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="px-5 py-4" style={{ backgroundColor: 'rgba(8,15,28,0.72)', backdropFilter: 'blur(6px)' }}>
                    <p className="text-white font-serif font-bold text-base leading-snug">Instructor-Led Capacity Building</p>
                    <p className="text-white/60 text-sm mt-1">Training the trainers who train thousands</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 w-16 h-16 border-l-[3px] border-b-[3px]" style={{ borderColor: '#F4A261' }} />
            </motion.div>

            {/* Text */}
            <div className="order-2">
              <FadeIn>
                <KenteDivider className="mb-6" />
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
                  The Multiplier Effect
                </p>
                <h2
                  className="font-serif font-extrabold text-black leading-tight mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
                >
                  One Trained Instructor.<br />
                  <HighlightWord>Thousands</HighlightWord> of Students.
                </h2>
                <p className="font-sans text-gray-600 text-base leading-relaxed mb-4">
                  Rather than running one-off student workshops, Hilltop embeds change at the institutional level. U.S. technical college faculty work directly alongside African TVET instructors to co-develop and modernize curricula in high-demand fields.
                </p>
                <p className="font-sans text-gray-600 text-base leading-relaxed">
                  The result is a lasting upgrade to what gets taught inside TVET classrooms long after the initial exchange, delivering sustainable impact that compounds with every new cohort of students.
                </p>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ── Photo strip ── */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { src: '/images/international-programmes.jpg', caption: 'International Partnerships' },
              { src: '/images/consult1.jpg', caption: 'Curriculum Co-Design' },
              { src: '/images/seminar-session.jpg', caption: 'Faculty Exchange Sessions' },
            ].map((img, i) => (
              <motion.div
                key={img.src}
                className="group relative overflow-hidden border border-gray-100"
                style={{ height: 240 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${img.src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-sans text-white text-xs font-semibold uppercase tracking-wider">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 sm:py-28 border-t border-gray-100" style={{ backgroundColor: '#080f1c' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-end pr-4 md:pr-12 opacity-5" aria-hidden>
            <AfricaWatermark className="w-64 h-auto" opacity={1} />
          </div>
          <FadeIn>
            <KenteDivider className="mb-6" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              Get Involved
            </p>
            <h2
              className="font-serif font-extrabold text-white leading-none mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Interested in TVET{' '}
              <span className="relative inline-block whitespace-nowrap">
                Collaboration?
                <DecorativeUnderline />
              </span>
            </h2>
            <p className="font-sans text-white/50 text-base max-w-xl leading-relaxed mb-10">
              Whether you represent a funding organization, a technical college, or a government TVET authority,
              we would welcome a conversation about how this model can work in your context.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white border-b border-white/40 pb-1 hover:border-white transition-colors duration-200"
            >
              Get in Touch
              <ArrowCTA />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
