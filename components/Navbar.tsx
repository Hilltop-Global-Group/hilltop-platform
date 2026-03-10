'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavChild {
  name: string;
  href: string;
  description?: string;
}

interface NavItem {
  name: string;
  href?: string;
  children?: NavChild[];
}

const navItems: NavItem[] = [
  {
    name: 'Who We Are',
    children: [
      { name: 'Our Story', href: '/about', description: 'How Hilltop was founded and what drives us' },
      { name: 'Meet Our Team', href: '/team', description: 'The people building bridges across Africa' },
      { name: 'Mission & Values', href: '/about#values', description: 'The principles that guide every program' },
    ],
  },
  { name: 'Education', href: '/education' },
  { name: 'Internships', href: '/internships' },
  { name: 'Testimonials', href: '/testimonials' },
  {
    name: 'Blogs & News',
    children: [
      { name: 'All Stories', href: '/news', description: 'The latest news, updates, and insights' },
      { name: 'Student Stories', href: '/news?category=students', description: 'First-hand accounts from program participants' },
      { name: 'Program Updates', href: '/news?category=programs', description: 'Announcements from our Ghana and Rwanda programs' },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  function isParentActive(item: NavItem): boolean {
    if (item.href) return pathname === item.href;
    if (item.children) return item.children.some(c => pathname === c.href || pathname.startsWith(c.href.split('?')[0]));
    return false;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'border-b border-gray-100 shadow-sm' : ''
      }`}
    >
      {/* Orange kente accent line at very top */}
      <div className="h-[3px] w-full" style={{ backgroundColor: '#F4A261' }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={dropdownRef}>
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
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const active = isParentActive(item);

              if (item.children) {
                const isOpen = openDropdown === item.name;
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                      className={`group relative flex items-center gap-1 font-sans text-sm font-medium transition-colors duration-200 pb-0.5 ${
                        active ? 'text-black' : 'text-gray-500 hover:text-black'
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                      {active && (
                        <span
                          className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
                          style={{ backgroundColor: '#F4A261' }}
                        />
                      )}
                    </button>

                    {/* Invisible bridge fills the mt-3 gap so hover doesn't break */}
                    <div className="absolute top-full left-0 right-0 h-3" />

                    {/* Dropdown panel */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-gray-100 shadow-lg transition-all duration-200 origin-top ${
                        isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
                      }`}
                    >
                      {/* Orange top accent */}
                      <div className="h-[3px] w-full" style={{ backgroundColor: '#F4A261' }} />
                      <div className="py-2">
                        {item.children.map((child) => {
                          const childActive = pathname === child.href || pathname === child.href.split('?')[0];
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-5 py-3 group transition-colors duration-150 ${
                                childActive ? 'bg-gray-50' : 'hover:bg-gray-50'
                              }`}
                            >
                              <span className={`font-sans text-sm font-medium block ${childActive ? 'text-black' : 'text-gray-700 group-hover:text-black'}`}>
                                {child.name}
                                {childActive && (
                                  <span className="ml-2 inline-block w-1.5 h-1.5 rounded-full align-middle" style={{ backgroundColor: '#F4A261' }} />
                                )}
                              </span>
                              {child.description && (
                                <span className="font-sans text-xs text-gray-400 mt-0.5 block leading-snug">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              // Plain link
              return (
                <Link
                  key={item.name}
                  href={item.href!}
                  className={`relative font-sans text-sm font-medium transition-colors duration-200 pb-0.5 ${
                    active ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {item.name}
                  {active && (
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
              className="group inline-flex items-center gap-2 font-sans font-semibold text-sm uppercase tracking-[0.15em] border-b-2 pb-0.5 transition-colors duration-200"
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
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isParentActive(item);

                if (item.children) {
                  const isAccordionOpen = openMobileAccordion === item.name;
                  return (
                    <div key={item.name}>
                      <button
                        onClick={() => setOpenMobileAccordion(isAccordionOpen ? null : item.name)}
                        className={`w-full flex items-center justify-between py-3 font-sans font-medium text-base transition-colors duration-200 ${
                          active ? 'text-black' : 'text-gray-600'
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${isAccordionOpen ? 'rotate-180' : ''}`}
                          style={{ color: '#F4A261' }}
                        />
                      </button>
                      {isAccordionOpen && (
                        <div className="pl-4 pb-2 flex flex-col gap-1 border-l-2" style={{ borderColor: '#F4A261' }}>
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`py-2 font-sans text-sm transition-colors duration-200 ${
                                pathname === child.href ? 'text-black font-semibold' : 'text-gray-500'
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href!}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-3 font-sans font-medium text-base transition-colors duration-200 ${
                      active ? 'text-black' : 'text-gray-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="pt-5 border-t border-gray-100 mt-3">
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
