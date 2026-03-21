'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Send } from 'lucide-react';
import { FaTiktok, FaXTwitter } from 'react-icons/fa6';
import { AfricaWatermark, KenteDivider } from './shared/HilltopBrand';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/hilltopglobally', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/hilltopglobally', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/hilltopglobally', label: 'Instagram' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@hilltopglobally', label: 'TikTok' },
  { icon: FaXTwitter, href: 'https://x.com/hilltopglobally', label: 'X (Twitter)' },
];

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Who We Are', href: '/about' },
  { label: 'Education', href: '/education' },
  { label: 'Internships', href: '/internships/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blogs & News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };
  return (
    <footer style={{ backgroundColor: '#080f1c' }} className="relative overflow-hidden">
      {/* Orange kente accent at top */}
      <div className="border-t-2" style={{ borderColor: '#F4A261' }} />

      {/* Africa continent watermark . right side */}
      <div className="pointer-events-none absolute -right-16 top-0 bottom-0 flex items-center opacity-100" aria-hidden>
        <AfricaWatermark className="w-72 h-auto" opacity={0.04} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top: CTA + form left, contact + social far right on desktop */}
        <div className="pt-16 pb-14 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          <div className="flex-1 max-w-xl">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-5">
              Get In Touch
            </p>
            <h2
              className="font-serif font-extrabold text-white leading-none mb-3"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Start a Conversation
            </h2>
            <p className="font-sans text-white/55 text-base leading-relaxed mb-8">
              Whether you are exploring a first partnership or expanding an existing program, our team in Washington, Accra, and Kigali is ready to talk.
            </p>

            {/* Contact Form */}
            {status === 'sent' ? (
              <div className="border border-white/10 p-6">
                <p className="font-sans text-white font-semibold mb-1">Message received!</p>
                <p className="font-sans text-white/50 text-sm">We will be in touch within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4A261] transition-colors duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4A261] transition-colors duration-200"
                  />
                </div>
                <textarea
                  placeholder="Tell us about your program or partnership interest…"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 font-sans text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4A261] transition-colors duration-200 resize-none"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center gap-3 px-7 py-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] border transition-colors duration-200 disabled:opacity-50"
                  style={{ borderColor: '#F4A261', color: '#F4A261' }}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                  <Send size={14} />
                </button>
                {status === 'error' && (
                  <p className="font-sans text-red-400 text-xs mt-1">Something went wrong. Please email us directly.</p>
                )}
              </form>
            )}

            {/* Kente divider */}
            <div className="mt-10">
              <KenteDivider count={6} color="#F4A261" />
            </div>
          </div>

          {/* Contact + social . far right on desktop */}
          <div className="lg:ml-auto lg:text-right space-y-5">
            <a
              href="tel:+12024992284"
              className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-200 lg:justify-end"
            >
              <Phone size={16} style={{ color: '#F4A261' }} className="flex-shrink-0" />
              <span className="font-sans text-sm">+1 202-499-2284</span>
            </a>
            <a
              href="mailto:support@hilltopglobalgroup.com"
              className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-200 lg:justify-end"
            >
              <Mail size={16} style={{ color: '#F4A261' }} className="flex-shrink-0" />
              <span className="font-sans text-sm">support@hilltopglobalgroup.com</span>
            </a>
            <div className="flex items-start gap-4 text-white/60 lg:justify-end">
              <MapPin size={16} style={{ color: '#F4A261' }} className="flex-shrink-0 mt-0.5" />
              <span className="font-sans text-sm leading-relaxed">
                700 12th Street NW, Suite 700<br />Washington, DC 20005
              </span>
            </div>
            {/* Social icons . beneath contact, same block */}
            <div className="flex items-center gap-4 pt-4 lg:justify-end">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 -m-2 text-white/40 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Middle: Map */}
        <div className="py-12">
          <div className="overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3105.102731919874!2d-77.027459!3d38.898766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b795ab298343%3A0x7fca3fbfe9beb021!2sMetro%20Offices!5e0!3m2!1sen!2suk!4v1769112077900!5m2!1sen!2suk"
              width="100%"
              height="320"
              style={{ border: 0, filter: 'grayscale(0.3) invert(0.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* Bottom: nav + copyright */}
        <div className="py-10 flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2 flex-1">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-xs text-white/40 hover:text-white/80 transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="font-sans text-xs text-white/30 flex-shrink-0">
            © {new Date().getFullYear()} Hilltop Global Group
          </p>
        </div>
      </div>
    </footer>
  );
}
