'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="py-16" style={{ backgroundColor: '#1D3160' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-white mb-4">
              Get in Touch
            </h2>
            <p className="font-body text-white/80 text-lg">
              We're here to help you with any inquiries or support you may need. Reach out to us anytime.
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
            {[
              { icon: Linkedin, href: '#' },
              { icon: Facebook, href: '#' },
              { icon: Instagram, href: '#' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <social.icon size={20} className="text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="font-heading font-bold text-lg mb-4" style={{ color: '#1D3160' }}>
                Navigation Links
              </h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Education', 'Internships', 'Testimonials', 'News'].map((link) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase()}`} className="text-gray-600 hover:opacity-80 transition-opacity">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4" style={{ color: '#1D3160' }}>
                Contact Info
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>(123) 456-7890</li>
                <li>info@hilltopglobal.com</li>
                <li>700 12th Street NW, Suite 700.<br />Washington, DC 20005</li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4" style={{ color: '#1D3160' }}>
                Newsletter Signup
              </h4>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gray-400"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded font-heading font-bold text-sm text-white hover:bg-opacity-90 transition-all"
                  style={{ backgroundColor: '#1D3160' }}
                >
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Hilltop Global Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


