'use client';

export default function Partners() {
  const partners = [
    { name: 'Logoipsum', logo: 'PARTNER 1' },
    { name: 'ALU', logo: 'ALU' },
    { name: 'Partner 3', logo: 'PARTNER 3' },
    { name: 'Partner 4', logo: 'PARTNER 4' },
    { name: 'Partner 5', logo: 'PARTNER 5' },
    { name: 'Partner 6', logo: 'PARTNER 6' },
  ];

  const universityClients = [
    { name: 'Howard University', logo: 'HOWARD' },
    { name: 'Georgetown University', logo: 'GEORGETOWN' },
    { name: 'University of Michigan', logo: 'MICHIGAN' },
    { name: 'Stanford University', logo: 'STANFORD' },
    { name: 'Duke University', logo: 'DUKE' },
    { name: 'Yale University', logo: 'YALE' },
  ];

  const hostCompanies = [
    { name: 'Company 1', logo: 'HOST CO 1' },
    { name: 'Company 2', logo: 'HOST CO 2' },
    { name: 'Company 3', logo: 'HOST CO 3' },
    { name: 'Company 4', logo: 'HOST CO 4' },
    { name: 'Company 5', logo: 'HOST CO 5' },
    { name: 'Company 6', logo: 'HOST CO 6' },
  ];

  const ScrollingBanner = ({ 
    items, 
    title, 
    direction = 'left',
    bgColor = 'white'
  }: { 
    items: Array<{ name: string; logo: string }>; 
    title: string; 
    direction?: 'left' | 'right';
    bgColor?: string;
  }) => {
    return (
      <div className={`py-12 ${bgColor === 'gray' ? 'bg-gray-50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-serif font-semibold text-gray-500 text-sm tracking-widest uppercase mb-8">
            {title}
          </p>

          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-32 z-10"
              style={{ 
                background: `linear-gradient(to right, ${bgColor === 'gray' ? '#f9fafb' : '#ffffff'}, transparent)` 
              }}
            />
            <div 
              className="absolute right-0 top-0 bottom-0 w-32 z-10"
              style={{ 
                background: `linear-gradient(to left, ${bgColor === 'gray' ? '#f9fafb' : '#ffffff'}, transparent)` 
              }}
            />
            
            {/* Rolling banner container */}
            <div className="flex overflow-hidden">
              <div 
                className="flex animate-marquee"
                style={{ 
                  animationDirection: direction === 'right' ? 'reverse' : 'normal',
                  animationDuration: '40s'
                }}
              >
                {/* Duplicate sets for seamless infinite loop */}
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="flex">
                    {items.map((item, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className="flex items-center justify-center px-12 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
                        style={{ minWidth: '220px' }}
                      >
                        <span className="font-serif font-bold text-2xl text-gray-500 whitespace-nowrap">
                          {item.logo}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="border-y border-gray-200 overflow-hidden">
      {/* Our Partners - Scrolling LEFT */}
      <ScrollingBanner 
        items={partners} 
        title="Our Partners" 
        direction="left"
        bgColor="white"
      />

      {/* University Clients - Scrolling RIGHT (opposite direction) */}
      <ScrollingBanner 
        items={universityClients} 
        title="University Clients" 
        direction="right"
        bgColor="gray"
      />

      {/* Host Companies - Scrolling LEFT (opposite to university clients) */}
      <ScrollingBanner 
        items={hostCompanies} 
        title="Host Companies" 
        direction="left"
        bgColor="white"
      />
    </section>
  );
}


