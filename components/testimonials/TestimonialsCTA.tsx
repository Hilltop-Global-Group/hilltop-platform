import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export default function TestimonialsCTA() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-90" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
          Ready to Write Your Own Success Story?
        </h2>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join hundreds of students who have transformed their careers through Hilltop's programs in Ghana and Rwanda
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/internships"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 font-serif font-bold text-lg tracking-wide text-primary-navy bg-white border-2 border-white rounded-full shadow-md transition-all duration-300 hover:bg-primary-navy hover:text-white hover:scale-105"
          >
            View Programs
            <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          
          <a
            href="mailto:support@hilltopglobalgroup.com"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 font-serif font-bold text-lg tracking-wide text-white bg-white/10 border-2 border-white rounded-full backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
          >
            <Mail size={22} />
            Contact Us
          </a>
        </div>

        <div className="pt-12 border-t border-white/20">
          <p className="text-white/70 text-sm mb-4">
            Questions about our programs?
          </p>
          <p className="text-white font-semibold">
            Email: support@hilltopglobalgroup.com | Phone: +1 202-499-2284
          </p>
        </div>
      </div>
    </section>
  );
}

