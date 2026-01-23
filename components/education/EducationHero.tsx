export default function EducationHero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-60" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              Study Abroad Programs
            </span>
          </div>
          
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-white mb-4">
            Education Programs
          </h1>
          
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto">
            Transformational study abroad experiences that expand your university's international program footprint in Africa.
          </p>
        </div>
      </div>
    </section>
  );
}

