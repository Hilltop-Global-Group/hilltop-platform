'use client';

import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

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
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft = scrollPosition;
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
            Trusted by Students & Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just facilitate placements; we build futures. See what our community has to say about the Hilltop experience.
          </p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ 
          scrollBehavior: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {/* Duplicate testimonials for seamless loop */}
        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[400px] bg-white p-8 rounded-2xl shadow-lg"
          >
            <div className="mb-4">
              <Quote size={40} style={{ color: '#F4A261' }} />
            </div>
            
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              {testimonial.quote}
            </p>
            
            <div className="border-t pt-4" style={{ borderColor: '#F4A261' }}>
              <p className="font-heading font-bold text-lg" style={{ color: '#1D3160' }}>
                {testimonial.name}
              </p>
              <p className="text-gray-600 text-sm">
                {testimonial.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

