import { Globe, TrendingUp, Users, ExternalLink, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RwandaProgramHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg')` 
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

        {/* ALU Collaboration Banner */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-4xl mx-auto shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-gray-600 whitespace-nowrap">In collaboration with</p>
              <Image
                src="/logos/alur.png"
                alt="African Leadership University"
                width={300}
                height={80}
                className="h-12 w-auto"
                priority
              />
            </div>
            <a
              href="https://www.alueducation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-full border-2 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{ borderColor: '#F4A261', color: '#F4A261' }}
            >
              Learn more
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            2026 Rwanda Internship Program
          </h1>
          
          <p className="text-xl text-white/90 mb-8">
            <span className="font-semibold">Dates:</span> June 22 – July 17, 2026 •{' '}
            <span className="font-semibold">Pre-departure:</span> June 15 – 17, 2026
          </p>

          <p className="text-lg text-white/90 max-w-3xl mx-auto mb-12">
            Interns gain access to ALU's innovation ecosystem, guest speakers, and selected campus facilities.
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
              Project-driven placements with African innovators and startups.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <TrendingUp size={40} className="text-white mb-4" strokeWidth={1.5} />
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Cross-cultural leadership
            </h3>
            <p className="text-white/80">
              Leadership sessions and cultural excursions to build adaptability.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
            <Users size={40} className="text-white mb-4" strokeWidth={1.5} />
            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Network & mentorship
            </h3>
            <p className="text-white/80">
              Connect with founders, sector leads and global alumni.
            </p>
          </div>
        </div>

        <p className="text-center text-white/90 mt-12 text-lg">
          <span className="font-semibold">Location:</span> Kigali, Rwanda •{' '}
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
