export default function InternshipHero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/IMG_4280-1-scaled-e1759312955679.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-60" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              Professional Development
            </span>
          </div>
          
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-white mb-4">
            Internship Programs
          </h1>
          
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto">
            Connect classroom learning with real-world experience in Africa's most dynamic markets.
          </p>
        </div>
      </div>
    </section>
  );
}

