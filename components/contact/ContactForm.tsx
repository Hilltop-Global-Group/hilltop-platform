'use client';

import { useState } from 'react';
import { KenteDivider, ArrowCTA } from '../shared/HilltopBrand';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    program: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [loadedAt] = useState(() => Date.now());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, _t: loadedAt }),
      });
      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', phone: '', subject: '', program: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full px-0 py-4 font-sans text-base text-gray-900 placeholder-gray-400 border-0 border-b border-gray-200 focus:outline-none focus:border-black transition-colors duration-200 bg-transparent";
  const labelClass = "block font-sans text-xs font-semibold uppercase tracking-[0.15em] mb-2 text-gray-400";

  return (
    <section className="py-24 sm:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Left: heading block */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <KenteDivider count={5} color="#F4A261" />
            </div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              Get In Touch
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-none mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Send Us a Message
            </h2>
            <p className="font-sans text-gray-500 text-base leading-relaxed">
              Fill out the form and we&apos;ll respond within one business day.
            </p>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Honeypot field, invisible to humans */}
              <div className="absolute opacity-0 -z-10" style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" onChange={(e) => setFormData({ ...formData, website: e.target.value } as any)} />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Jane Smith" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="jane@university.edu" className={inputClass} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 202 000 0000" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="program" className={labelClass}>Program Interest</label>
                  <select id="program" name="program" value={formData.program} onChange={handleChange} className={inputClass}>
                    <option value="">Select a program</option>
                    <option value="ghana">Ghana Internship Program</option>
                    <option value="rwanda">Rwanda Internship Program</option>
                    <option value="education">Education Programs</option>
                    <option value="custom">Custom Program</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={labelClass}>Subject *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What would you like to discuss?" className={inputClass} />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us more about your inquiry..." className={`${inputClass} resize-none`} />
              </div>

              <div className="pt-4 border-t border-gray-100">
                {status === 'sent' ? (
                  <div className="py-4">
                    <p className="font-sans font-semibold text-sm" style={{ color: '#10B981' }}>
                      Message sent! We&apos;ll respond within one business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white px-10 py-4 transition-opacity duration-200 hover:opacity-80 disabled:opacity-50"
                      style={{ backgroundColor: '#1D3160' }}
                    >
                      {status === 'sending' ? 'Sending...' : 'Send Message'}
                      <ArrowCTA />
                    </button>
                    {status === 'error' && (
                      <p className="font-sans text-red-500 text-sm mt-3">
                        Something went wrong. Please email us directly at support@hilltopglobalgroup.com.
                      </p>
                    )}
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
