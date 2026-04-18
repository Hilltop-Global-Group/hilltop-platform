'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';
import { KenteDivider } from '../shared/HilltopBrand';

export default function TestimonialSubmission() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    organization: '',
    program: '',
    year: '',
    testimonial: '',
    rating: '5',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/testimonial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          student_name: formData.name,
          email: formData.email,
          role: formData.role,
          organization: formData.organization,
          program: formData.program,
          year: formData.year,
          quote: formData.testimonial,
          rating: formData.rating,
          website: (formData as any).website || '',
          _t: Date.now(),
        }),
      });
      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', role: '', organization: '', program: '', year: '', testimonial: '', rating: '5' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <div className="mb-12">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
            Tell Us Your Story
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            Share Your Experience
          </h2>
          <p className="font-sans text-gray-500 text-base leading-relaxed">
            Been part of a Hilltop program? We&apos;d love to hear about your experience.
          </p>
        </div>

        <div className="border-t border-gray-200 mb-12" />

        <div>
          {status === 'sent' ? (
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
              <div className="absolute opacity-0 -z-10" style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label htmlFor="t_website">Website</label>
                <input type="text" id="t_website" name="t_website" tabIndex={-1} autoComplete="off" onChange={(e) => setFormData({ ...formData, website: e.target.value } as any)} />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
              <div>
                  <label htmlFor="name" className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] mb-2 text-gray-400" style={{ color: '#1D3160' }}>
                    Full Name *
                </label>
                <input
                  type="text"
                    id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors duration-200 bg-transparent font-sans text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                  <label htmlFor="email" className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] mb-2 text-gray-400" style={{ color: '#1D3160' }}>
                    Email *
                </label>
                <input
                  type="email"
                    id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors duration-200 bg-transparent font-sans text-base"
                    placeholder="you@example.com"
                />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
              <div>
                  <label htmlFor="role" className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] mb-2 text-gray-400" style={{ color: '#1D3160' }}>
                    Role *
                </label>
                <input
                  type="text"
                    id="role"
                  name="role"
                    required
                  value={formData.role}
                  onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors duration-200 bg-transparent font-sans text-base"
                    placeholder="Student / Intern / Partner"
                />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
              <div>
                  <label htmlFor="organization" className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] mb-2 text-gray-400" style={{ color: '#1D3160' }}>
                    University / Organization *
                </label>
                <input
                  type="text"
                    id="organization"
                  name="organization"
                    required
                  value={formData.organization}
                  onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors duration-200 bg-transparent font-sans text-base"
                    placeholder="Your university"
                />
              </div>

              <div>
                  <label htmlFor="program" className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] mb-2 text-gray-400" style={{ color: '#1D3160' }}>
                    Program *
                </label>
                <select
                    id="program"
                  name="program"
                    required
                  value={formData.program}
                  onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors duration-200 bg-transparent font-sans text-base"
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
                  <label htmlFor="year" className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] mb-2 text-gray-400" style={{ color: '#1D3160' }}>
                    Year Participated *
                </label>
                <input
                  type="text"
                    id="year"
                  name="year"
                    required
                  value={formData.year}
                  onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors duration-200 bg-transparent font-sans text-base"
                  placeholder="2024"
                />
                </div>

                <div>
                  <label htmlFor="rating" className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] mb-2 text-gray-400" style={{ color: '#1D3160' }}>
                    Rating *
                  </label>
                  <select
                    id="rating"
                    name="rating"
                    required
                    value={formData.rating}
                    onChange={handleChange}
                    className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors duration-200 bg-transparent font-sans text-base"
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
                <label htmlFor="testimonial" className="block font-sans text-xs font-semibold uppercase tracking-[0.15em] mb-2 text-gray-400" style={{ color: '#1D3160' }}>
                Your Testimonial *
              </label>
              <textarea
                  id="testimonial"
                name="testimonial"
                required
                value={formData.testimonial}
                onChange={handleChange}
                rows={6}
                  className="w-full px-0 py-3 border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors duration-200 bg-transparent font-sans text-base resize-none"
                  placeholder="Share your experience with Hilltop Global Group..."
              />
            </div>

            <button
              type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white transition-opacity duration-200 hover:opacity-80 disabled:opacity-50"
              style={{ backgroundColor: '#1D3160' }}
            >
                {status === 'sending' ? 'Submitting...' : 'Submit Testimonial'}
                <Send size={16} />
            </button>
              {status === 'error' && (
                <p className="font-sans text-red-500 text-sm mt-3 text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
          </form>
        )}
        </div>
      </div>
    </section>
  );
}
