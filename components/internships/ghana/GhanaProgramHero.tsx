import { Globe, TrendingUp, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function GhanaProgramHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/IMG_4280-1-scaled-e1759312955679.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/internships"
            className="inline-flex items-center gap-2 px-4 py-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} />
            <span className="font-semibold">Back to Programs</span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            2026 Ghana Internship Program
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            <span className="font-semibold">Dates:</span> June 22 – July 17, 2026 •{' '}
            <span className="font-semibold">Pre-departure:</span> June 15 – 17, 2026
          </p>

          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12">
            Gain professional experience in Accra placements across fintech, agritech, creative industries and more. Cultural immersion, leadership development and mentorship included.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <Globe size={40} className="text-white mb-4" strokeWidth={1.5} />
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Gain global work experience
            </h3>
            <p className="text-white/80">
              Placements with innovators across finance, tech and creative sectors.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <TrendingUp size={40} className="text-white mb-4" strokeWidth={1.5} />
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Cross-cultural leadership
            </h3>
            <p className="text-white/80">
              Hands-on leadership modules and community engagement.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <Users size={40} className="text-white mb-4" strokeWidth={1.5} />
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Network & mentorship
            </h3>
            <p className="text-white/80">
              Connections with founders, investors and domestic accelerators.
            </p>
          </div>
        </div>

        <p className="text-center text-white/90 mt-12 text-lg">
          <span className="font-semibold">Location:</span> Accra, Ghana •{' '}
          <span className="font-semibold">Structure:</span> Mon–Thu placements, Fridays for leadership. Weekends: Cultural activities & immersion
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path fill="#ffffff" d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
}

