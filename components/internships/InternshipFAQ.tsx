'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: 'What sectors can I work in?',
    answer: 'See Industries & Sample Work section for more info on sectors including fintech, agritech, healthtech, creative industries, technology, finance, NGOs, and more.',
  },
  {
    question: 'Is the internship paid?',
    answer: 'No, these are unpaid educational internships.',
  },
  {
    question: 'How can I gain credit?',
    answer: 'Hilltop provides hour logs, evaluations, and documentation.',
  },
  {
    question: "What's included in the fee?",
    answer: "See What's Included section for full details on accommodation, placements, support, and activities.",
  },
  {
    question: 'Where will I stay?',
    answer: 'See Accommodation & Local Support section for complete details on housing options.',
  },
  {
    question: 'Do I need a visa?',
    answer: 'Hilltop provides guidance post-acceptance.',
  },
  {
    question: 'Can I apply for both programs?',
    answer: 'Yes, you may apply to both programs. Placements are competitive and based on merit, fit, and stated preferences. Acceptance operates on a first-come, first-served basis, so early application is recommended.',
  },
  {
    question: 'Is there a remote option?',
    answer: 'Our programs are primarily in-country based. Contact us to ask about current format availability.',
  },
  {
    question: 'What are the payment terms?',
    answer: 'Deposit upon acceptance; balance due 45 days before departure.',
  },
  {
    question: 'Who can I contact?',
    answer: 'Email support@hilltopglobalgroup.com.',
  },
];

export default function InternshipFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden py-20 bg-white">

      {/* Decorative: wave path — top edge */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg width="100%" height="60" viewBox="0 0 1440 60" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 30 C180 0, 360 60, 540 30 S900 0, 1080 30 S1350 60, 1440 30 L1440 0 L0 0 Z"
            fill="#1D3160"
            opacity="0.04"
          />
          <path
            d="M0 40 C240 10, 480 60, 720 35 S1080 10, 1440 40"
            stroke="#1D3160"
            strokeWidth="1.5"
            fill="none"
            opacity="0.06"
          />
        </svg>
      </motion.div>

      {/* Decorative: large circle ring outline — bottom right */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" stroke="#1D3160" strokeWidth="2" opacity="0.06" />
          <circle cx="200" cy="200" r="130" stroke="#1D3160" strokeWidth="1.5" opacity="0.04" />
          <circle cx="200" cy="200" r="80"  stroke="#1D3160" strokeWidth="1"   opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — top left */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-16 left-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 1, 2, 3].map(row =>
            [0, 1, 2, 3].map(col => (
              <circle
                key={`${row}-${col}`}
                cx={10 + col * 26}
                cy={10 + row * 26}
                r="2.5"
                fill="#1D3160"
                opacity="0.1"
              />
            ))
          )}
        </svg>
      </motion.div>

      {/* Decorative: concentric arcs — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-16 -right-16" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="360" cy="0" r="300" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.06" />
          <circle cx="360" cy="0" r="220" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
          <circle cx="360" cy="0" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: diagonal lines — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute -bottom-6 -left-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="70"  x2="70"  y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.07" />
          <line x1="0" y1="120" x2="120" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.05" />
          <line x1="0" y1="170" x2="170" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.04" />
        </svg>
      </motion.div>

      {/* Decorative: soft blob — center left */}
      <motion.div aria-hidden className="pointer-events-none absolute top-1/2 -left-20 -translate-y-1/2 hidden md:block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: 300, height: 300, borderRadius: '50%', backgroundColor: '#1D3160', opacity: 0.025, filter: 'blur(70px)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our internship programs
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{
                borderLeft: openIndex === index ? '4px solid #1D3160' : '4px solid transparent',
                borderBottom: '1px solid #F3F4F6',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-serif font-bold text-lg pr-4" style={{ color: '#1D3160' }}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#F4A261' }}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
