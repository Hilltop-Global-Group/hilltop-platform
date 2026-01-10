export default function InternshipHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/IMG_4280-1-scaled-e1759312955679.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-90" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              Professional Development
            </span>
          </div>
          
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            The Hilltop Internship Program
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-5xl mx-auto leading-relaxed">
            Connect classroom learning with real-world experience in Africa's most dynamic markets. Explore career interests, build networks, and develop globally relevant skills while engaging directly with organizations driving innovation and growth across the continent.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path fill="#ffffff" d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"></path>
        </svg>
      </div>
    </section>
  );
}

