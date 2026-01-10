export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-90" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
            About Hilltop Global Group
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
            Our Journey: Innovating Education and Opportunities
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

