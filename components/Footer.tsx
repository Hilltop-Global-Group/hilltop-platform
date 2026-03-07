'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { FaTiktok, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/hilltopglobally',
      label: 'LinkedIn'
    },
    { 
      icon: Facebook, 
      href: 'https://www.facebook.com/hilltopglobally',
      label: 'Facebook'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/hilltopglobally',
      label: 'Instagram'
    },
    { 
      icon: FaTiktok, 
      href: 'https://www.tiktok.com/@hilltopglobally',
      label: 'TikTok',
      isReactIcon: true
    },
    { 
      icon: FaXTwitter, 
      href: 'https://x.com/hilltopglobally',
      label: 'X (Twitter)',
      isReactIcon: true
    },
  ];

  return (
    <footer style={{ backgroundColor: '#1D3160' }}>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl text-white mb-4">
              Start a Conversation
            </h2>
            <p className="font-body text-white/80 text-lg">
              Whether you are exploring a first partnership or expanding an existing program, our team in Washington, Accra, and Nairobi is ready to talk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="flex flex-col items-center gap-3">
              <Phone size={24} style={{ color: '#F4A261' }} />
              <a href="tel:+12024992284" className="hover:opacity-80 transition-opacity">
                +1 202-499-2284
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Mail size={24} style={{ color: '#F4A261' }} />
              <a href="mailto:support@hilltopglobalgroup.com" className="hover:opacity-80 transition-opacity">
                support@hilltopglobalgroup.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <MapPin size={24} style={{ color: '#F4A261' }} />
              <p>700 12th Street NW, Suite 700.<br />Washington, DC 20005</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label={social.label}
              >
                {social.isReactIcon ? (
                  <social.icon size={20} className="text-white" />
                ) : (
                  <social.icon size={20} className="text-white" />
                )}
              </a>
            ))}
          </div>

          {/* Google Maps Embed */}
          <div className="mt-12 max-w-5xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg border-4 border-white/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3105.102731919874!2d-77.027459!3d38.898766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b795ab298343%3A0x7fca3fbfe9beb021!2sMetro%20Offices!5e0!3m2!1sen!2suk!4v1769112077900!5m2!1sen!2suk" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="mt-16 pt-12 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="font-serif font-bold text-lg mb-4 text-white">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {['Home', 'About', 'Education', 'Internships'].map((link) => (
                    <li key={link}>
                      <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-lg mb-4 text-white">
                  Resources
                </h4>
                <ul className="space-y-2">
                  {['Testimonials', 'News', 'Contact'].map((link) => (
                    <li key={link}>
                      <Link href={`/${link.toLowerCase()}`} className="text-white/70 hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2">
                <h4 className="font-serif font-bold text-lg mb-4 text-white">
                  Stay Connected
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  Subscribe to our newsletter for updates on programs and opportunities.
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 rounded font-serif font-bold text-sm hover:bg-opacity-90 transition-all"
                    style={{ backgroundColor: '#F4A261', color: '#1D3160' }}
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Hilltop Global Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}



