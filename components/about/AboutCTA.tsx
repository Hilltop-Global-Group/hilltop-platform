import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-90" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">
          Take the Next Step with Us
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Join us in shaping your future today. Explore our education services, internship opportunities, and study abroad programs designed to enhance your experience and career prospects.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 px-8 py-4 font-heading font-bold text-base tracking-wide text-primary-navy bg-white border-2 border-white rounded-full shadow-lg transition-all duration-300 hover:bg-primary-navy hover:text-white hover:scale-105"
          >
            Get Started
            <ArrowRight size={20} />
          </Link>
          
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 font-heading font-bold text-base tracking-wide text-white bg-white/10 border-2 border-white rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            Contact Us
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

