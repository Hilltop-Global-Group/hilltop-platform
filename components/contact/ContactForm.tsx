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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4" style={{ color: '#1D3160' }}>
            Send Us a Message
          </h2>
          <p className="text-gray-600 text-lg">
            Fill out the form below and we'll respond within 24 hours
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-3xl p-8 sm:p-12 shadow-lg">
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
                placeholder="John Doe"
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
                placeholder="john@example.com"
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
                placeholder="+1 (555) 000-0000"
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
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-heading font-bold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
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

