export default function TestimonialsHero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-60" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
              Success Stories
            </span>
          </div>
          
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Testimonials
          </h1>
          
          <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto mb-8">
            Hear from students, partners, and universities about their experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">500+</p>
              <p className="text-sm text-white/70">Students Placed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">50+</p>
              <p className="text-sm text-white/70">Partner Organizations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">15+</p>
              <p className="text-sm text-white/70">University Partners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

