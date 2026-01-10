export default function Partners() {
  const partners = [
    { name: 'Logoipsum', logo: 'PARTNER 1' },
    { name: 'ALU', logo: 'ALU' },
    { name: 'Partner 3', logo: 'PARTNER 3' },
    { name: 'Partner 4', logo: 'PARTNER 4' },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center font-heading font-semibold text-gray-400 text-sm tracking-widest uppercase mb-12">
          Our Partners
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="font-heading font-bold text-xl text-gray-400">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


