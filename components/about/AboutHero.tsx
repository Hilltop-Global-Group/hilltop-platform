export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ 
            backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/IMG_4280-1-scaled-e1759312955679.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-60" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="font-heading font-bold text-5xl sm:text-6xl text-white">
            About Us
          </h1>
        </div>
      </div>
    </section>
  );
}

