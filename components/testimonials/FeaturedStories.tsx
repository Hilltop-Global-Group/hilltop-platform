'use client';

import { motion } from 'framer-motion';
import { Quote, MapPin } from 'lucide-react';
import { KenteDivider } from '../shared/HilltopBrand';

const featuredStories = [
  {
    name: "Sarah Mensah",
    role: "Business Intern",
    location: "Accra, Ghana",
    university: "Howard University",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video ID
    quote: "The internship placement was seamless. I gained real-world skills that I use daily. Working with a fintech startup in Accra opened my eyes to the innovation happening across Africa. This experience fundamentally changed my career trajectory.",
    fullStory: "Coming from Howard University, I thought I knew what to expect from an international internship. But Hilltop exceeded all expectations. The support, the placement, the cultural immersion: everything was exceptional.",
  },
  {
    name: "David Osei",
    role: "Tech Innovation Fellow",
    location: "Kigali, Rwanda",
    university: "Georgetown University",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video ID
    quote: "Hilltop Global provided exceptional support throughout my study abroad journey. The ALU collaboration gave me access to incredible resources and a network I'll leverage for years to come.",
    fullStory: "As a computer science major, I wanted hands-on experience with African tech innovation. The placement with a healthtech startup in Kigali was perfect. I learned agile development, worked with real clients, and contributed to a product that's now serving thousands.",
  },
  {
    name: "Kofi Agyeman",
    role: "Social Impact Intern",
    location: "Accra, Ghana",
    university: "KNUST",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video ID
    quote: "An unforgettable experience that changed my career trajectory forever. I learned more in 4 weeks than I did in an entire semester. The mentorship, the projects, the cultural exposure: all world-class.",
    fullStory: "Working with a social enterprise focused on agricultural supply chains taught me about business, sustainability, and community impact. The Friday leadership sessions were incredible, and the cultural excursions helped me understand the broader context of development work in Ghana.",
  },
];

export default function FeaturedStories() {
  return (
    <section className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <div className="mb-14">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
            Student Stories
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            Featured Stories
          </h2>
        </div>
        <div className="border-t border-gray-200 mb-14" />

        <div className="space-y-14">
          {featuredStories.map((story, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-12 items-start`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* YouTube Video Section */}
              <div className="lg:w-1/2 w-full">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={story.videoUrl}
                    title={`${story.name} Testimonial Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-gray-600">
                  <MapPin size={16} style={{ color: '#F4A261' }} />
                  <span className="text-sm font-semibold">{story.location}</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">{story.university}</span>
                </div>
              </div>

              {/* Text Content Section */}
              <div className="lg:w-1/2">
                <Quote size={28} style={{ color: '#F4A261' }} className="mb-5" />
                <blockquote
                  className="font-serif font-bold leading-snug mb-6"
                  style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: '#1D3160' }}
                >
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <p className="font-sans text-gray-600 text-sm leading-relaxed mb-8">
                  {story.fullStory}
                </p>
                <div className="border-t border-gray-200 pt-5">
                  <p className="font-serif font-bold text-base" style={{ color: '#1D3160' }}>
                    {story.name}
                  </p>
                  <p className="font-sans text-gray-400 text-xs uppercase tracking-wider mt-0.5">
                    {story.role} &middot; {story.university}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

