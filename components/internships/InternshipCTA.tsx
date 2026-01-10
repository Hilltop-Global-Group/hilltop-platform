import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function InternshipCTA() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-90" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Apply Today, Transform Tomorrow
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to launch your internship journey? Spaces are limited, so don't wait—reach out today and let us guide you through the application process.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
          <a
            href="mailto:support@hilltopglobalgroup.com"
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: '#F4A261' }}
              >
                <Mail size={24} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/70 text-sm">Email us at</p>
                <p className="text-white font-bold">support@hilltopglobalgroup.com</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">Quick response within 24 hours · Expert guidance on applications</p>
          </a>

          <a
            href="tel:+12024992284"
            className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-3">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: '#F4A261' }}
              >
                <Phone size={24} className="text-white" />
              </div>
              <div className="text-left">
                <p className="text-white/70 text-sm">Call us at</p>
                <p className="text-white font-bold">+1 202-499-2284</p>
              </div>
            </div>
            <p className="text-white/80 text-sm">Speak directly with our team · Monday-Friday 9am-5pm EST</p>
          </a>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            className="group inline-flex items-center justify-center gap-3 px-12 py-5 font-heading font-bold text-lg tracking-wide text-primary-navy bg-white border-2 border-white rounded-full shadow-2xl transition-all duration-300 hover:bg-primary-navy hover:text-white hover:scale-105"
          >
            Start Your Application
            <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <p className="text-white/60 text-sm mt-6 max-w-2xl mx-auto">
            Application deadline: <span className="font-bold" style={{ color: '#F4A261' }}>March 14, 2026</span>
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-white/20 text-center">
          <p className="text-white/70 text-sm mb-6">
            Join students from leading universities worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <span className="text-white font-semibold text-lg">Georgetown</span>
            <span className="text-white font-semibold text-lg">Howard University</span>
            <span className="text-white font-semibold text-lg">ALU</span>
            <span className="text-white font-semibold text-lg">KNUST</span>
          </div>
        </div>
      </div>
    </section>
  );
}

