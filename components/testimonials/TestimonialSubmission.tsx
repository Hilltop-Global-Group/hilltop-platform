'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function TestimonialSubmission() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    organization: '',
    program: '',
    year: '',
    testimonial: '',
    rating: '5',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to API)
    console.log('Testimonial submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        role: '',
        organization: '',
        program: '',
        year: '',
        testimonial: '',
        rating: '5',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative overflow-hidden py-20 bg-gray-50">

      {/* Decorative: concentric arcs — top left */}
      <motion.div className="pointer-events-none absolute -top-16 -left-16" aria-hidden initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="300" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.10" />
          <circle cx="0" cy="0" r="220" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.07" />
          <circle cx="0" cy="0" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.05" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom right */}
      <motion.div className="pointer-events-none absolute bottom-8 right-8" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={13 + col * 26} cy={13 + row * 26} r="2.5" fill="#1D3160" opacity="0.13" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: diagonal lines — top right */}
      <motion.div className="pointer-events-none absolute -top-4 -right-4" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="200" y1="70"  x2="130" y2="0" stroke="#1D3160" strokeWidth="1.5" opacity="0.12"/>
          <line x1="200" y1="120" x2="80"  y2="0" stroke="#1D3160" strokeWidth="1" opacity="0.09"/>
          <line x1="200" y1="170" x2="30"  y2="0" stroke="#1D3160" strokeWidth="1" opacity="0.06"/>
        </svg>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Share Your Story
          </h2>
          <p className="text-xl text-gray-600">
            Been part of a Hilltop program? We'd love to hear about your experience
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-lg shadow-md">
          {submitted ? (
            <div className="text-center py-12">
              <div 
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: '#F4A261' }}
              >
                <Send size={40} className="text-white" />
              </div>
              <h3 className="font-serif font-bold text-3xl mb-4" style={{ color: '#1D3160' }}>
                Thank You!
              </h3>
              <p className="text-gray-600 text-lg">
                Your testimonial has been submitted and will be reviewed by our team.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-navy focus:ring-2 focus:ring-primary-navy/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
                    Role *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-navy focus:ring-2 focus:ring-primary-navy/20 outline-none transition-all"
                    placeholder="Student / Intern / Partner"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
                    University / Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-navy focus:ring-2 focus:ring-primary-navy/20 outline-none transition-all"
                    placeholder="Howard University"
                  />
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
                    Program *
                  </label>
                  <select
                    id="program"
                    name="program"
                    required
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-navy focus:ring-2 focus:ring-primary-navy/20 outline-none transition-all"
                  >
                    <option value="">Select Program</option>
                    <option value="ghana">Ghana Internship</option>
                    <option value="rwanda">Rwanda Internship</option>
                    <option value="education">Education Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="year" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
                    Year Participated *
                  </label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    required
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-navy focus:ring-2 focus:ring-primary-navy/20 outline-none transition-all"
                    placeholder="2024"
                  />
                </div>

                <div>
                  <label htmlFor="rating" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
                    Rating *
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    required
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-navy focus:ring-2 focus:ring-primary-navy/20 outline-none transition-all"
                  >
                    <option value="5">⭐⭐⭐⭐⭐ (5 stars)</option>
                    <option value="4">⭐⭐⭐⭐ (4 stars)</option>
                    <option value="3">⭐⭐⭐ (3 stars)</option>
                    <option value="2">⭐⭐ (2 stars)</option>
                    <option value="1">⭐ (1 star)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="testimonial" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
                  Your Testimonial *
                </label>
                <textarea
                  id="testimonial"
                  name="testimonial"
                  required
                  value={formData.testimonial}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-navy focus:ring-2 focus:ring-primary-navy/20 outline-none transition-all resize-none"
                  placeholder="Share your experience with Hilltop Global Group..."
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 font-serif font-bold text-lg text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#1D3160' }}
              >
                Submit Testimonial
                <Send size={20} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
