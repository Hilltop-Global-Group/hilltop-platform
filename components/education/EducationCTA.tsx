import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export default function EducationCTA() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2025/09/performance-e1759310784853.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-90" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Ready to Expand Your Program?
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Partner with Hilltop to create transformational study abroad experiences in Africa for your students.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 font-heading font-bold text-lg tracking-wide text-primary-navy bg-white border-2 border-white rounded-full shadow-xl transition-all duration-300 hover:bg-primary-navy hover:text-white hover:scale-105 hover:shadow-2xl"
            >
              <Mail size={22} className="transition-transform duration-300 group-hover:scale-110" />
              Contact Us
            </Link>
            
            <Link
              href="/about"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 font-heading font-bold text-lg tracking-wide text-white bg-white/10 border-2 border-white rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              Learn More
              <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-12 pt-12 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">
              Trusted by leading universities worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <span className="text-white font-semibold text-lg">Georgetown</span>
              <span className="text-white font-semibold text-lg">Howard</span>
              <span className="text-white font-semibold text-lg">ALU</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

