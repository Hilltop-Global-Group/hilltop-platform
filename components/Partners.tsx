export default function Partners() {
  const partners = [
    { name: 'Logoipsum', logo: 'PARTNER 1' },
    { name: 'ALU', logo: 'ALU' },
    { name: 'Partner 3', logo: 'PARTNER 3' },
    { name: 'Partner 4', logo: 'PARTNER 4' },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-heading font-semibold text-gray-400 text-sm tracking-widest uppercase mb-12">
          Our Partners
        </p>

        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          {/* Rolling banner container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {partners.map((partner, index) => (
                <div
                  key={`first-${index}`}
                  className="flex items-center justify-center px-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
                  style={{ minWidth: '200px' }}
                >
                  <span className="font-heading font-bold text-2xl text-gray-400 whitespace-nowrap">
                    {partner.logo}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {partners.map((partner, index) => (
                <div
                  key={`second-${index}`}
                  className="flex items-center justify-center px-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
                  style={{ minWidth: '200px' }}
                >
                  <span className="font-heading font-bold text-2xl text-gray-400 whitespace-nowrap">
                    {partner.logo}
                  </span>
                </div>
              ))}
              {/* Third set for extra smooth scrolling */}
              {partners.map((partner, index) => (
                <div
                  key={`third-${index}`}
                  className="flex items-center justify-center px-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
                  style={{ minWidth: '200px' }}
                >
                  <span className="font-heading font-bold text-2xl text-gray-400 whitespace-nowrap">
                    {partner.logo}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


