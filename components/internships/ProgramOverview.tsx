'use client';

import { motion } from 'framer-motion';
import FadeIn from '../FadeIn';
import { KenteDivider, DecorativeUnderline } from '../shared/HilltopBrand';

export default function ProgramOverview() {
  return (
    <section className="bg-white overflow-hidden border-t border-gray-100 pt-16 sm:pt-24">
      {/* Same GlobalGlimpse "Beyond the Beaten Path" split layout as education Partnership */}
      <div className="flex flex-col lg:flex-row min-h-[560px]">

        {/* Photo — full height, left column — mobile: first */}
        <motion.div
          className="relative w-full lg:w-[55%] flex-shrink-0 order-1"
          style={{ minHeight: 320 }}
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080f1c]/20" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-white font-serif font-bold text-base leading-snug drop-shadow">
              Embedded with real organizations, working on real projects.
            </p>
            <p className="text-white/70 text-sm mt-1 drop-shadow">Accra, Ghana &amp; Kigali, Rwanda</p>
          </div>
        </motion.div>

        {/* Text — right column */}
        <div className="w-full lg:w-[45%] flex-shrink-0 order-2 flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-20 bg-white">
          <FadeIn>
            <KenteDivider className="mb-8" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              How It Works
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              How the{' '}
              <span className="relative inline-block whitespace-nowrap" style={{ color: '#F4A261' }}>
                Program Works
                <DecorativeUnderline color="#F4A261" />
              </span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-sans text-gray-600 text-base leading-relaxed">
                Students spend four weeks embedded in organizations across Accra or Kigali, working on project-based assignments with real deliverables. It enables emerging professionals to explore career interests, build networks, and develop globally relevant skills.
              </p>
              <p className="font-sans text-gray-600 text-base leading-relaxed">
                Hilltop collaborates with leading partners such as <span className="font-semibold" style={{ color: '#1D3160' }}>African Leadership University (Rwanda)</span> and industry hosts across Africa to deliver high-impact placements combining professional work, mentorship, and cross-cultural learning.
              </p>
            </div>
          </FadeIn>

          {/* Quick stats */}
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-3 divide-x divide-gray-200 border border-gray-100">
              {[
                { value: '4', unit: 'weeks', label: 'in-country' },
                { value: '2', unit: 'cities', label: 'Accra & Kigali' },
                { value: '50+', unit: 'hosts', label: 'partner orgs' },
              ].map((stat, i) => (
                <div key={i} className="text-center py-5 px-3">
                  <p className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                    {stat.value} <span className="text-sm font-normal text-gray-400">{stat.unit}</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
