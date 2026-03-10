'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
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
  { label: 'About', href: '/about' },
  { label: 'Education', href: '/education' },
  { label: 'Internships', href: '/internships' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#080f1c' }} className="relative overflow-hidden">
      {/* Orange kente accent at top */}
      <div className="border-t-2" style={{ borderColor: '#F4A261' }} />

      {/* Africa continent watermark — right side */}
      <div className="pointer-events-none absolute -right-16 top-0 bottom-0 flex items-center opacity-100" aria-hidden>
        <AfricaWatermark className="w-72 h-auto" opacity={0.04} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Top: CTA + contact */}
        <div className="pt-16 pb-14 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-white/40 mb-5">
              Get In Touch
            </p>
            <h2
              className="font-serif font-extrabold text-white leading-none mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Start a Conversation
            </h2>
            <p className="font-sans text-white/55 text-base leading-relaxed max-w-md">
              Whether you are exploring a first partnership or expanding an existing program, our team in Washington, Accra, and Kigali is ready to talk.
            </p>

            {/* Kente divider */}
            <div className="mt-8">
              <KenteDivider count={6} color="#F4A261" />
            </div>
          </div>

          <div className="space-y-5">
            <a
              href="tel:+12024992284"
              className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-200"
            >
              <Phone size={16} style={{ color: '#F4A261' }} className="flex-shrink-0" />
              <span className="font-sans text-sm">+1 202-499-2284</span>
            </a>
            <a
              href="mailto:support@hilltopglobalgroup.com"
              className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-200"
            >
              <Mail size={16} style={{ color: '#F4A261' }} className="flex-shrink-0" />
              <span className="font-sans text-sm">support@hilltopglobalgroup.com</span>
            </a>
            <div className="flex items-start gap-4 text-white/60">
              <MapPin size={16} style={{ color: '#F4A261' }} className="flex-shrink-0 mt-0.5" />
              <span className="font-sans text-sm leading-relaxed">
                700 12th Street NW, Suite 700<br />Washington, DC 20005
              </span>
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

        {/* Bottom: nav + copyright + social icons far right */}
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
          {/* Social icons — far right */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
