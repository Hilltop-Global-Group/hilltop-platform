'use client';

import { motion } from 'framer-motion';

export default function ProgramOverview() {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <div>
            <div className="flex gap-4 items-stretch mb-8">
              <motion.div
                className="hidden md:block w-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#1D3160' }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <h2 className="font-serif font-bold text-3xl sm:text-4xl leading-tight" style={{ color: '#1D3160' }}>
                How the Program Works
              </h2>
            </div>

            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              <p>
                Students spend four weeks embedded in organizations across Accra or Kigali, working on project-based assignments with real deliverables. It enables emerging professionals to explore career interests, build networks, and develop globally relevant skills.
              </p>
              <p>
                Hilltop collaborates with leading partners such as <span className="font-semibold" style={{ color: '#1D3160' }}>African Leadership University (Rwanda)</span> and industry hosts across Africa to deliver high-impact placements combining professional work, mentorship, and cross-cultural learning.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: '4', unit: 'weeks', label: 'in-country' },
                { value: '2', unit: 'cities', label: 'Accra & Kigali' },
                { value: '50+', unit: 'hosts', label: 'partner orgs' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-serif font-bold text-3xl" style={{ color: '#1D3160' }}>
                    {stat.value} <span className="text-base font-normal text-gray-500">{stat.unit}</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-xl"
            style={{ minHeight: 420 }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-serif font-bold text-lg leading-snug">
                Embedded with real organizations, working on real projects.
              </p>
              <p className="text-white/70 text-sm mt-1">Accra, Ghana &amp; Kigali, Rwanda</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
