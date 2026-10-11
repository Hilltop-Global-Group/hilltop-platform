'use client';

/**
 * REVIEW: the FAQ answers rendered here come from `faqs` in
 * lib/ghana-2027-data.ts. They were drafted from the published program content
 * and still need a factual and legal read-through by the programs team before
 * launch, in particular the visa, insurance, payment and cancellation answers.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import FadeIn from '@/components/FadeIn';
import { faqs } from '@/lib/ghana-2027-data';

export default function Ghana2027FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="mb-12">
            <Eyebrow>Common Questions</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Frequently Asked{' '}
              <span className="relative inline-block whitespace-nowrap">
                Questions
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mt-6" />
          </div>
        </FadeIn>

        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const buttonId = `ghana-2027-faq-button-${index}`;
            const panelId = `ghana-2027-faq-panel-${index}`;
            return (
              <div key={faq.question} className="border-b border-gray-200">
                <h3 className="m-0">
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full py-6 flex items-center justify-between text-left gap-6 group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F4A261]"
                  >
                    <span
                      className="font-serif font-bold text-lg leading-snug group-hover:opacity-70 transition-opacity duration-200"
                      style={{ color: '#1D3160' }}
                    >
                      {faq.question}
                    </span>
                    <motion.span
                      className="flex-shrink-0 w-5 h-5 flex items-center justify-center"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      aria-hidden
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1v14M1 8h14" stroke="#F4A261" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
