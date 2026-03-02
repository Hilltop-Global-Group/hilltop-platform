const culturalHighlights = [
  {
    title: 'Traditional Music & Dance',
    description: 'Cultural performances & heritage',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
  },
  {
    title: 'Accra Arts Centre',
    description: 'Accra Arts Centre & creative streets',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
  },
  {
    title: 'Makola Market',
    description: 'Makola Market and other markets to purchase souvenirs',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg',
  },
  {
    title: 'Kwame Nkrumah Memorial',
    description: 'Historical sites and monuments',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg',
  },
  {
    title: 'Cape Coast Castle',
    description: 'Historical heritage sites',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
  },
  {
    title: 'Kakum National Park',
    description: 'Nature and wildlife experiences',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2025/09/performance-e1759310784853.jpg',
  },
];

export default function GhanaCultural() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Cultural Highlights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These excursions connect your internship to Ghana history, communities, and creative economies, deepening context and leadership learning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {culturalHighlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${highlight.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif font-bold text-xl mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {highlight.description}
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

