'use client';

import { useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonialsColumn1 = [
  {
    name: "Grace Appiah",
    role: "Student",
    university: "University of Accra",
    rating: 5,
    quote: "A truly professional organization that cares about the students' welfare. Every detail was handled with care, from accommodation to placement to cultural activities.",
  },
  {
    name: "Michael Chen",
    role: "Intern",
    university: "Georgetown University",
    rating: 5,
    quote: "The leadership development sessions were as valuable as the internship itself. I learned about cross-cultural communication, project management, and professional networking.",
  },
  {
    name: "Amara Johnson",
    role: "Student",
    university: "Howard University",
    rating: 5,
    quote: "Hilltop helped me discover my passion for social entrepreneurship. The connections I made and the experience I gained have been instrumental in my career path.",
  },
  {
    name: "Emmanuel Kwame",
    role: "Intern",
    university: "KNUST",
    rating: 5,
    quote: "Working with a fintech startup in Accra gave me practical skills that set me apart. The mentorship from both Hilltop staff and my host organization was exceptional.",
  },
  {
    name: "Marcus Williams",
    role: "Graduate",
    university: "Duke University",
    rating: 5,
    quote: "The program exceeded my expectations. From the pre-departure prep to the on-ground support, everything was meticulously planned and executed.",
  },
];

const testimonialsColumn2 = [
  {
    name: "Lisa Thompson",
    role: "Graduate",
    university: "American University",
    rating: 5,
    quote: "The cultural immersion activities were perfectly balanced with professional development. I felt supported every step of the way and made lifelong friendships.",
  },
  {
    name: "Kwesi Boateng",
    role: "Alumnus",
    university: "University of Ghana",
    rating: 5,
    quote: "This program opened doors I didn't even know existed. The network of alumni, partners, and mentors continues to support my career growth years later.",
  },
  {
    name: "Jennifer Park",
    role: "Intern",
    university: "Spelman College",
    rating: 5,
    quote: "Working in Rwanda's tech ecosystem was transformative. The ALU partnership provided incredible resources and networking opportunities.",
  },
  {
    name: "Yaw Mensah",
    role: "Student",
    university: "University of Cape Coast",
    rating: 5,
    quote: "The Friday leadership sessions taught me more about myself and my capabilities than any classroom experience. Truly life-changing.",
  },
  {
    name: "Rachel Green",
    role: "Intern",
    university: "Emory University",
    rating: 5,
    quote: "From day one, I felt like part of a community. The cohort support and coordinator guidance made adapting to a new country seamless.",
  },
];

const testimonialsColumn3 = [
  {
    name: "Daniel Osei",
    role: "Graduate",
    university: "Morehouse College",
    rating: 5,
    quote: "The internship with an agritech startup taught me about sustainable development and social impact in ways no textbook could.",
  },
  {
    name: "Sophia Martinez",
    role: "Student",
    university: "UNC Chapel Hill",
    rating: 5,
    quote: "I came for the internship but left with a new perspective on Africa, business, and my own potential. The cultural excursions were highlights.",
  },
  {
    name: "Ibrahim Hassan",
    role: "Intern",
    university: "Howard University",
    rating: 5,
    quote: "The mentorship I received from both Hilltop staff and my host organization supervisor was invaluable. They genuinely invested in my growth.",
  },
  {
    name: "Emily Carter",
    role: "Alumnus",
    university: "Georgetown University",
    rating: 5,
    quote: "Three years later, I'm still connected with people I met through Hilltop. The network spans continents and industries.",
  },
  {
    name: "Kofi Asante",
    role: "Graduate",
    university: "KNUST",
    rating: 5,
    quote: "Working on real projects with tangible outcomes was incredible. I contributed to solutions that are now being used by thousands of people.",
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonialsColumn1[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[380px] bg-white p-4 sm:p-8 rounded-lg shadow-lg hover:shadow-md transition-shadow duration-300 mb-4 sm:mb-6">
      <div className="flex items-center gap-1 mb-3 sm:mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="sm:w-[18px] sm:h-[18px]" fill="#F4A261" style={{ color: '#F4A261' }} />
        ))}
      </div>

      <Quote size={28} className="sm:w-9 sm:h-9 mb-3 sm:mb-4" style={{ color: '#F4A261' }} />
      
      <p className="text-gray-700 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
        "{testimonial.quote}"
      </p>
      
      <div className="border-t pt-3 sm:pt-4" style={{ borderColor: '#F4A261' }}>
        <p className="font-serif font-bold text-base sm:text-lg" style={{ color: '#1D3160' }}>
          {testimonial.name}
        </p>
        <p className="text-gray-600 text-xs sm:text-sm">{testimonial.role}</p>
        <p className="text-gray-500 text-xs sm:text-sm">{testimonial.university}</p>
      </div>
    </div>
  );
}

export default function StudentTestimonials() {
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateColumn = (
      ref: React.RefObject<HTMLDivElement>,
      speed: number,
      direction: 'up' | 'down'
    ) => {
      const column = ref.current;
      if (!column) return;

      let position = direction === 'up' ? 0 : -column.scrollHeight / 2;
      
      const animate = () => {
        if (!column) return;
        
        if (direction === 'down') {
          position += speed;
          // Reset when first set has scrolled completely
          if (position >= 0) {
            position = -column.scrollHeight / 2;
          }
        } else {
          position -= speed;
          // Reset when scrolled back to top
          if (position <= -column.scrollHeight / 2) {
            position = 0;
          }
        }
        
        column.style.transform = `translateY(${position}px)`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    // Column 1: Down, Column 2: Up, Column 3: Down (each opposite to its left neighbor)
    animateColumn(column1Ref, 0.6, 'down');
    animateColumn(column2Ref, 0.6, 'up');
    animateColumn(column3Ref, 0.6, 'down');
  }, []);

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">

      {/* Decorative: concentric arcs — top right */}
      <div className="pointer-events-none absolute -top-16 -right-16 z-[1]" aria-hidden>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="360" cy="0" r="300" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.07" />
          <circle cx="360" cy="0" r="220" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="360" cy="0" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </div>

      {/* Decorative: wavy top edge */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-[1]" aria-hidden>
        <svg width="100%" height="50" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 28 C240 5, 480 50, 720 25 S1200 3, 1440 28" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.07"/>
          <path d="M0 28 C240 5, 480 50, 720 25 S1200 3, 1440 28 L1440 0 L0 0 Z" fill="#1D3160" opacity="0.03"/>
        </svg>
      </div>

      {/* Decorative: dot grid — bottom left */}
      <div className="pointer-events-none absolute bottom-10 left-10 z-[1]" aria-hidden>
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={12 + col * 24} cy={12 + row * 24} r="2.5" fill="#1D3160" opacity="0.1" />
          )))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-[2]">
        <div className="text-center">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            What Students Say
          </h2>
          <p className="text-xl text-gray-600">
            Unfiltered feedback from our program participants
          </p>
        </div>
      </div>

      <div className="flex gap-3 sm:gap-6 justify-center max-w-7xl mx-auto px-2 sm:px-4">
        {/* Column 1 - Scrolling Down */}
        <div className="overflow-hidden h-[600px] sm:h-[800px] w-full max-w-[300px] sm:max-w-[380px]">
          <div ref={column1Ref} className="flex flex-col">
            {[...testimonialsColumn1, ...testimonialsColumn1].map((testimonial, index) => (
              <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Column 2 - Scrolling Up (opposite to Column 1) */}
        <div className="overflow-hidden h-[600px] sm:h-[800px] w-full max-w-[300px] sm:max-w-[380px]">
          <div ref={column2Ref} className="flex flex-col">
            {[...testimonialsColumn2, ...testimonialsColumn2].map((testimonial, index) => (
              <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Column 3 - Scrolling Down (opposite to Column 2) - Hidden on mobile */}
        <div className="hidden md:block overflow-hidden h-[800px] w-full max-w-[380px]">
          <div ref={column3Ref} className="flex flex-col">
            {[...testimonialsColumn3, ...testimonialsColumn3].map((testimonial, index) => (
              <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

