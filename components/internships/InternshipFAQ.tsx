'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    question: 'What\'s included in the fee?',
    answer: 'See What\'s Included section for full details on accommodation, placements, support, and activities.',
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
    answer: 'The 2026 programs are in-country only.',
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
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
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
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-heading font-bold text-lg pr-4" style={{ color: '#1D3160' }}>
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
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
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

