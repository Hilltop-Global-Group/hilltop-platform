'use client';

import { motion } from 'framer-motion';

const signals = [
  {
    title: 'Government Partnership',
    description: 'Signed MOU with Ghana TVET Service (GTVETS), the national body responsible for all public technical and vocational education delivery.',
  },
  {
    title: 'U.S. Faculty Pipeline',
    description: 'Facilitation agreement with the Community Colleges for International Development (CCID), a consortium of 90+ U.S. community and technical colleges.',
  },
  {
    title: 'Priority Growth Sectors',
    description: 'Renewable energy, construction technology, digital systems, agro-processing, and advanced manufacturing, aligned to national economic priorities.',
  },
  {
    title: 'Scalable Impact Model',
    description: 'Train-the-trainer approach that builds institutional capacity by equipping TVET instructors, reaching thousands of students through strengthened teaching.',
  },
];

export default function TVETSection() {
  return (
    <section className="relative bg-white">
      {/* Hero */}
      <div className="relative bg-[#1B365D] text-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#C8922A] font-medium tracking-wider uppercase text-sm mb-4"
          >
            Building Africa&apos;s Workforce
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Technical and Vocational Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Strengthening technical education systems across the continent through
            institutional partnerships, curriculum co-design, and faculty exchange.
          </motion.p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Hilltop is partnering with national TVET authorities and U.S. community college
            networks to build capacity in Africa&apos;s technical and vocational education systems.
            Through curriculum co-design and faculty exchange, we are working to close the gap
            between the skills young Africans are learning and the skills their economies need.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our approach centers on training instructors, not just students, creating a multiplier
            effect that reaches thousands of learners through strengthened institutional capacity.
            Every trained instructor becomes a permanent asset within the national TVET system,
            delivering modernized curricula long after the initial intervention.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            This work is anchored by a formal Memorandum of Understanding with Ghana&apos;s TVET
            Service (GTVETS) and a facilitation agreement with the Community Colleges for
            International Development (CCID), a consortium of 90+ U.S. institutions. Hilltop has
            been designated by CCID as the lead organization for community college global
            workforce development programming in Africa.
          </p>
        </div>

        {/* Signal Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {signals.map((signal, index) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#1B365D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1B365D] mb-2">{signal.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{signal.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#1B365D] rounded-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Interested in TVET collaboration?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Whether you represent a funding organization, a technical college, or a government
              TVET authority, we would welcome a conversation about how this model can work in
              your context.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#C8922A] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#B07E24] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
