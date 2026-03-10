'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KenteDivider } from '../shared/HilltopBrand';

const faqs = [
  {
    question: 'What sectors can I work in?',
    answer: 'Placements span fintech, agritech, healthtech, creative industries, technology, finance, and NGOs. See the Industries section above for full details on available sectors in Ghana and Rwanda.',
  },
  {
    question: 'Is the internship paid?',
    answer: 'These are unpaid educational internships. They are structured as professional immersion experiences, and many participants earn academic credit through their home institution.',
  },
  {
    question: 'How can I earn academic credit?',
    answer: 'Hilltop provides hour logs, supervisor evaluations, and documentation to support credit applications at your home institution. Credit is ultimately awarded at your university\'s discretion.',
  },
  {
    question: "What's included in the program fee?",
    answer: "The fee covers pre-vetted accommodation, professional placement matching, leadership workshops, cultural excursions, on-ground coordinator support, airport pickup, and group transport. See the Program Details section for a full breakdown.",
  },
  {
    question: 'Where will I stay?',
    answer: 'Interns stay at Hilltop-vetted partner hotels selected for safety, comfort, and proximity to placement sites. Rooms are twin-share by default; single-room upgrades are available on request.',
  },
  {
    question: 'Do I need a visa?',
    answer: 'Visa requirements depend on your nationality. Hilltop provides detailed guidance on the visa process after acceptance, including timelines and application support.',
  },
  {
    question: 'Can I apply for both Ghana and Rwanda?',
    answer: 'Yes — you may apply to both programs. Placements are competitive and based on merit, fit, and stated preferences. Early application is recommended as cohort spaces fill on a first-come, first-served basis.',
  },
  {
    question: 'Is there a remote option?',
    answer: 'Our programs are designed as in-country experiences. Contact us to ask about current format availability if your circumstances require flexibility.',
  },
  {
    question: 'What are the payment terms?',
    answer: 'A deposit is due upon acceptance, with the balance due 45 days before the program departure date.',
  },
  {
    question: 'Who should I contact with questions?',
    answer: 'Email support@hilltopglobalgroup.com or call +1 202-499-2284. Our team typically responds within one business day.',
  },
];

export default function InternshipFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <div className="mb-16">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
            Common Questions
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            Frequently Asked<br className="hidden sm:block" /> Questions
          </h2>
        </div>

        <div className="border-t border-gray-200" />

        {/* Accordion */}
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left gap-6 focus:outline-none group"
              >
                <span
                  className="font-serif font-bold text-lg leading-snug group-hover:opacity-70 transition-opacity duration-200"
                  style={{ color: '#1D3160' }}
                >
                  {faq.question}
                </span>
                <motion.span
                  className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1v14M1 8h14" stroke="#F4A261" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-gray-600 text-sm leading-relaxed pb-6 max-w-2xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
