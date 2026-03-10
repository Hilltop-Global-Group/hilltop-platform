'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Education', href: '/education' },
  { name: 'Internships', href: '/internships' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'News', href: '/news' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'border-b border-gray-100 shadow-sm' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/logos/logo.png"
              alt="Hilltop Global Group"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-sans text-sm font-medium transition-colors duration-200 pb-0.5 ${
                    isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
                      style={{ backgroundColor: '#F4A261' }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-[0.15em] border-b-2 pb-0.5 transition-colors duration-200"
              style={{ color: '#1D3160', borderColor: '#1D3160' }}
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2"
            style={{ color: '#1D3160' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`font-sans font-medium text-base transition-colors duration-200 ${
                      isActive ? 'text-black' : 'text-gray-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-gray-100">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-[0.15em]"
                  style={{ color: '#1D3160' }}
                >
                  Partner With Us →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
