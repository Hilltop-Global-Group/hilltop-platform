export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
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
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-white mb-4">
            Get in Touch
          </h1>
          
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto">
            Have questions about our programs? We're here to help you start your journey to transformative experiences in Africa.
          </p>
        </div>
      </div>
    </section>
  );
}

