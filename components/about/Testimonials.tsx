'use client';

import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

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
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-navy-900" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gold-400" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-navy-900/10 rounded-full blur-3xl" />

      {/* Decorative: concentric arcs — top right */}
      <div className="pointer-events-none absolute -top-16 -right-16" aria-hidden>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="360" cy="0" r="300" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.08" />
          <circle cx="360" cy="0" r="220" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.06" />
          <circle cx="360" cy="0" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
        </svg>
      </div>

      {/* Decorative: dot grid — bottom left */}
      <div className="pointer-events-none absolute bottom-10 left-10" aria-hidden>
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={14 + col * 28} cy={14 + row * 28} r="2.5" fill="#1D3160" opacity="0.09" />
          )))}
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <ScrollReveal animation="fade-down">
          <div className="text-center">
            <span className="inline-block text-sm font-bold text-black uppercase tracking-wider mb-4 border-2 border-gold-400 px-6 py-2 rounded-full bg-gold-400">
              Testimonials
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
              Trusted by Students & Partners
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We don't just facilitate placements; we build futures. See what our community has to say about the Hilltop experience.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden relative z-10"
        style={{ 
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Triple testimonials for seamless infinite loop */}
        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[450px] bg-white p-10 rounded-lg shadow-lg border-4 border-navy-900 hover:border-gold-400 transition-all duration-300"
          >
            <div className="mb-6">
              <div className="w-14 h-14 rounded-full bg-gold-400 flex items-center justify-center">
                <Quote size={28} className="text-navy-900" />
              </div>
            </div>
            
            <p className="text-black text-lg mb-8 leading-relaxed font-medium">
              "{testimonial.quote}"
            </p>
            
            <div className="border-t-4 border-gold-400 pt-6">
              <p className="font-serif font-bold text-xl text-navy-900 mb-1">
                {testimonial.name}
              </p>
              <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">
                {testimonial.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

