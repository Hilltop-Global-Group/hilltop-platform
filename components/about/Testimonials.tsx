'use client';

import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { KenteDivider } from '../shared/HilltopBrand';

const testimonials = [
  {
    quote: "The internship placement was seamless. I gained real-world skills that I use daily.",
    name: "Sarah Mensah",
    title: "Intern, Ghana"
  },
  {
    quote: "Hilltop Global provided exceptional support throughout my study abroad journey.",
    name: "David Osei",
    title: "Student, KNUST"
  },
  {
    quote: "A truly professional organization that cares about the students' welfare.",
    name: "Grace Appiah",
    title: "Partner, Uni of Accra"
  },
  {
    quote: "Our company has hired three interns from Hilltop, and all were excellent additions.",
    name: "James K.",
    title: "CEO, TechStart"
  },
  {
    quote: "They handle all the logistics perfectly, allowing us to focus on teaching.",
    name: "Anita B.",
    title: "Program Director"
  },
  {
    quote: "An unforgettable experience that changed my career trajectory forever.",
    name: "Kofi A.",
    title: "Alumni"
  },
];

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      const maxScroll = scrollContainer.scrollWidth / 3; // Only scroll through one set
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-14">
        <ScrollReveal animation="fade-down">
          <div className="mb-4">
            <KenteDivider count={5} color="#F4A261" />
          </div>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
            Testimonials
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            Trusted by Students<br className="hidden md:block" /> &amp; Partners
          </h2>
        </ScrollReveal>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch' }}
      >
        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[380px] bg-gray-50 border border-gray-100 p-8"
          >
            <Quote size={24} style={{ color: '#F4A261' }} className="mb-5" />
            <p className="font-sans text-gray-700 text-base mb-6 leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="border-t border-gray-200 pt-5">
              <p className="font-serif font-bold text-base" style={{ color: '#1D3160' }}>
                {testimonial.name}
              </p>
              <p className="font-sans text-gray-400 text-xs uppercase tracking-wider mt-0.5">
                {testimonial.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

