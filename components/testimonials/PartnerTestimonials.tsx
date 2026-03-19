'use client';

import { Quote, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { KenteDivider, DecorativeUnderline, DottedAfricaMap } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';

const partnerTestimonials = [
  {
    name: "James K.",
    role: "CEO",
    company: "TechStart Ghana",
    quote: "Our company has hired three interns from Hilltop, and all were excellent additions. They came prepared, professional, and eager to contribute. The screening and matching process is top-notch.",
  },
  {
    name: "Anita B.",
    role: "Program Director",
    company: "Innovation Hub Kigali",
    quote: "They handle all the logistics perfectly, allowing us to focus on teaching and mentoring. The students are well-prepared and the support from Hilltop coordinators makes the entire process seamless.",
  },
  {
    name: "Dr. Patricia Mensah",
    role: "Director of International Programs",
    company: "Howard University",
    quote: "Hilltop has been an invaluable partner in expanding our Africa programs. Their on-ground support, cultural competency, and commitment to student success is unmatched.",
  },
  {
    name: "Samuel Nkrumah",
    role: "Founder",
    company: "AgriTech Solutions",
    quote: "Working with Hilltop interns has brought fresh perspectives to our team. The students are motivated, skilled, and genuinely interested in making an impact in African agriculture.",
  },
];

export default function PartnerTestimonials() {
  return (
    <section className="relative py-24 sm:py-32 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <DottedAfricaMap color="#1D3160" opacity={0.04} className="absolute -right-8 top-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <KenteDivider className="mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Partners & Universities
          </p>
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mb-14">
            <h2
              className="font-serif font-extrabold text-black leading-none flex-1"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              What Our{' '}
              <span className="relative inline-block whitespace-nowrap">
                Partners
                <DecorativeUnderline />
              </span>
              {' '}Say
            </h2>
            <div className="hidden md:block w-px bg-gray-200 self-stretch flex-shrink-0" />
            <p className="font-sans text-gray-500 text-base max-w-sm leading-relaxed md:pt-1 flex-shrink-0">
              Trusted by leading organizations and universities worldwide.
            </p>
          </div>
        </FadeIn>

        <div className="border-t border-gray-200 mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {partnerTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 p-7 hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
            >
              <Quote size={20} style={{ color: '#F4A261' }} className="mb-4" />
              <p className="font-sans text-gray-600 text-base leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: index % 2 === 0 ? '#1D3160' : '#F4A261' }}
                >
                  <Building2 size={16} className="text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-serif font-bold text-sm" style={{ color: '#1D3160' }}>
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-gray-400 text-xs">{testimonial.role} &middot; {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
