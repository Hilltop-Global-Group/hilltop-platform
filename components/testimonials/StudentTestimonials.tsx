'use client';

import { useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';
import { KenteDivider, DecorativeUnderline, DottedAfricaMap } from '../shared/HilltopBrand';
import FadeIn from '../FadeIn';

const testimonialsColumn1 = [
  { name: "Grace Appiah", role: "Student", university: "University of Accra", rating: 5, quote: "A truly professional organization that cares about the students\u2019 welfare. Every detail was handled with care, from accommodation to placement to cultural activities." },
  { name: "Michael Chen", role: "Intern", university: "Georgetown University", rating: 5, quote: "The leadership development sessions were as valuable as the internship itself. I learned about cross-cultural communication, project management, and professional networking." },
  { name: "Amara Johnson", role: "Student", university: "Howard University", rating: 5, quote: "Hilltop helped me discover my passion for social entrepreneurship. The connections I made and the experience I gained have been instrumental in my career path." },
  { name: "Emmanuel Kwame", role: "Intern", university: "KNUST", rating: 5, quote: "Working with a fintech startup in Accra gave me practical skills that set me apart. The mentorship from both Hilltop staff and my host organization was exceptional." },
  { name: "Marcus Williams", role: "Graduate", university: "Duke University", rating: 5, quote: "The program exceeded my expectations. From the pre-departure prep to the on-ground support, everything was meticulously planned and executed." },
];

const testimonialsColumn2 = [
  { name: "Lisa Thompson", role: "Graduate", university: "American University", rating: 5, quote: "The cultural immersion activities were perfectly balanced with professional development. I felt supported every step of the way and made lifelong friendships." },
  { name: "Kwesi Boateng", role: "Alumnus", university: "University of Ghana", rating: 5, quote: "This program opened doors I didn\u2019t even know existed. The network of alumni, partners, and mentors continues to support my career growth years later." },
  { name: "Jennifer Park", role: "Intern", university: "Spelman College", rating: 5, quote: "Working in Rwanda\u2019s tech ecosystem was transformative. The ALU partnership provided incredible resources and networking opportunities." },
  { name: "Yaw Mensah", role: "Student", university: "University of Cape Coast", rating: 5, quote: "The Friday leadership sessions taught me more about myself and my capabilities than any classroom experience. Truly life-changing." },
  { name: "Rachel Green", role: "Intern", university: "Emory University", rating: 5, quote: "From day one, I felt like part of a community. The cohort support and coordinator guidance made adapting to a new country seamless." },
];

const testimonialsColumn3 = [
  { name: "Daniel Osei", role: "Graduate", university: "Morehouse College", rating: 5, quote: "The internship with an agritech startup taught me about sustainable development and social impact in ways no textbook could." },
  { name: "Sophia Martinez", role: "Student", university: "UNC Chapel Hill", rating: 5, quote: "I came for the internship but left with a new perspective on Africa, business, and my own potential. The cultural excursions were highlights." },
  { name: "Ibrahim Hassan", role: "Intern", university: "Howard University", rating: 5, quote: "The mentorship I received from both Hilltop staff and my host organization supervisor was invaluable. They genuinely invested in my growth." },
  { name: "Emily Carter", role: "Alumnus", university: "Georgetown University", rating: 5, quote: "Three years later, I\u2019m still connected with people I met through Hilltop. The network spans continents and industries." },
  { name: "Kofi Asante", role: "Graduate", university: "KNUST", rating: 5, quote: "Working on real projects with tangible outcomes was incredible. I contributed to solutions that are now being used by thousands of people." },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonialsColumn1[0] }) {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[360px] bg-white border border-gray-100 p-6 sm:p-7 hover:shadow-md transition-shadow duration-300 mb-4 sm:mb-5">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={14} fill="#F4A261" style={{ color: '#F4A261' }} />
        ))}
      </div>

      <Quote size={20} className="mb-3" style={{ color: '#F4A261' }} />

      <p className="font-sans text-gray-600 text-sm leading-relaxed mb-5">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div className="border-t border-gray-100 pt-4">
        <p className="font-serif font-bold text-base" style={{ color: '#1D3160' }}>
          {testimonial.name}
        </p>
        <p className="font-sans text-gray-400 text-xs mt-0.5">{testimonial.role} &middot; {testimonial.university}</p>
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
          if (position >= 0) position = -column.scrollHeight / 2;
        } else {
          position -= speed;
          if (position <= -column.scrollHeight / 2) position = 0;
        }
        column.style.transform = `translateY(${position}px)`;
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    };

    animateColumn(column1Ref, 0.5, 'down');
    animateColumn(column2Ref, 0.5, 'up');
    animateColumn(column3Ref, 0.5, 'down');
  }, []);

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden border-t border-gray-100">
      {/* Dotted Africa map as subtle background */}
      <DottedAfricaMap color="#1D3160" opacity={0.03} className="absolute right-0 top-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-14">
        <FadeIn>
          <KenteDivider className="mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Student Voices
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            What{' '}
            <span className="relative inline-block whitespace-nowrap">
              Students
              <DecorativeUnderline />
            </span>
            {' '}Say
          </h2>
        </FadeIn>
      </div>

      <div className="flex gap-4 sm:gap-5 justify-center max-w-7xl mx-auto px-2 sm:px-4">
        {/* Column 1 */}
        <div className="overflow-hidden h-[600px] sm:h-[800px] w-full max-w-[300px] sm:max-w-[360px]">
          <div ref={column1Ref} className="flex flex-col">
            {[...testimonialsColumn1, ...testimonialsColumn1].map((testimonial, index) => (
              <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Column 2 */}
        <div className="overflow-hidden h-[600px] sm:h-[800px] w-full max-w-[300px] sm:max-w-[360px]">
          <div ref={column2Ref} className="flex flex-col">
            {[...testimonialsColumn2, ...testimonialsColumn2].map((testimonial, index) => (
              <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Column 3 . hidden on mobile */}
        <div className="hidden md:block overflow-hidden h-[800px] w-full max-w-[360px]">
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
