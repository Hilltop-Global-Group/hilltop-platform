'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    program: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      program: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative overflow-hidden py-20 bg-white">

      {/* Decorative: concentric arcs — top right */}
      <div className="pointer-events-none absolute -top-16 -right-16" aria-hidden>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="360" cy="0" r="300" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="360" cy="0" r="220" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.04" />
          <circle cx="360" cy="0" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </div>

      {/* Decorative: dot grid — bottom left */}
      <div className="pointer-events-none absolute bottom-8 left-8" aria-hidden>
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={13 + col * 26} cy={13 + row * 26} r="2.5" fill="#1D3160" opacity="0.08" />
          )))}
        </svg>
      </div>

      {/* Decorative: diagonal lines — top left */}
      <div className="pointer-events-none absolute -top-4 -left-4" aria-hidden>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="70"  x2="70"  y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.07" />
          <line x1="0" y1="120" x2="120" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.05" />
          <line x1="0" y1="170" x2="170" y2="0"   stroke="#1D3160" strokeWidth="1" opacity="0.04" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4" style={{ color: '#1D3160' }}>
            Send Us a Message
          </h2>
          <p className="text-gray-600 text-lg">
            Fill out the form below and we'll respond within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 sm:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3160] focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3160] focus:ring-opacity-50"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3160] focus:ring-opacity-50"
              />
            </div>

            <div>
              <label htmlFor="program" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
                Program Interest
              </label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3160] focus:ring-opacity-50"
              >
                <option value="">Select a program</option>
                <option value="ghana">Ghana Internship Program</option>
                <option value="rwanda">Rwanda Internship Program</option>
                <option value="education">Education Programs</option>
                <option value="custom">Custom Program</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3160] focus:ring-opacity-50"
              placeholder="What would you like to discuss?"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#1D3160' }}>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3160] focus:ring-opacity-50 resize-none"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-serif font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ backgroundColor: '#1D3160' }}
          >
            Send Message
            <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
}

