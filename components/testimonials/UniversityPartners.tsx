const universities = [
  { name: 'Howard University', location: 'Washington, DC' },
  { name: 'Georgetown University', location: 'Washington, DC' },
  { name: 'American University', location: 'Washington, DC' },
  { name: 'African Leadership University', location: 'Kigali, Rwanda' },
  { name: 'University of Ghana', location: 'Accra, Ghana' },
  { name: 'KNUST', location: 'Kumasi, Ghana' },
  { name: 'University of Accra', location: 'Accra, Ghana' },
  { name: 'Spelman College', location: 'Atlanta, GA' },
  { name: 'Morehouse College', location: 'Atlanta, GA' },
  { name: 'Duke University', location: 'Durham, NC' },
  { name: 'UNC Chapel Hill', location: 'Chapel Hill, NC' },
  { name: 'Emory University', location: 'Atlanta, GA' },
];

export default function UniversityPartners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Trusted by Leading Universities
          </h2>
          <p className="text-xl text-gray-600">
            Partnering with institutions committed to global education
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {universities.map((university, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold"
                style={{ backgroundColor: index % 2 === 0 ? '#1D3160' : '#F4A261' }}
              >
                {university.name.charAt(0)}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                {university.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {university.location}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            And many more institutions worldwide...
          </p>
        </div>
      </div>
    </section>
  );
}

