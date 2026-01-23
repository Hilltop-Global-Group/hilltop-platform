const reasons = [
  {
    number: '1',
    title: 'Benchmark for digital transformation',
    description: 'Rwanda is an African leader in digital policy and public-private innovation initiatives, making it ideal for tech placements.',
  },
  {
    number: '2',
    title: 'Kigali tech hubs & accelerators',
    description: 'Access incubators, accelerators and startup teams working on fintech, agritech and healthtech solutions.',
  },
  {
    number: '3',
    title: 'Safe, well-governed, investor-friendly',
    description: 'Strong governance and investor interest create a professional environment for meaningful internships.',
  },
  {
    number: '4',
    title: 'Modern infrastructure & strong business culture',
    description: 'Rwanda\'s modern cities and infrastructure enable efficient work + rich cultural experiences.',
  },
];

export default function RwandaWhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold"
                  style={{ backgroundColor: reason.number === '1' || reason.number === '3' ? '#1D3160' : '#F4A261' }}
                >
                  {reason.number}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-3" style={{ color: '#1D3160' }}>
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

