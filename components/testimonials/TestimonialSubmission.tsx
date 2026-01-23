'use client';

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
