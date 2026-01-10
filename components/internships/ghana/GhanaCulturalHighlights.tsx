const highlights = [
  {
    title: 'Traditional Music & Dance',
    description: 'Cultural performances & heritage',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg',
  },
  {
    title: 'Accra Arts Centre',
    description: 'Accra Arts Centre & creative streets',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg',
  },
  {
    title: 'Makola Market',
    description: 'Markets and shopping for souvenirs',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg',
  },
  {
    title: 'Cape Coast Castle',
    description: 'Historical landmarks',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
  },
  {
    title: 'Kakum National Park',
    description: 'Nature & wildlife',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/IMG_4280-1-scaled-e1759312955679.jpg',
  },
  {
    title: 'Creative Hubs',
    description: 'Art galleries & design spaces',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg',
  },
];

export default function GhanaCulturalHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-4xl mb-6 text-center" style={{ color: '#1D3160' }}>
          Cultural Highlights
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          These excursions connect your internship to Ghana history, communities, and creative economies, deepening context and leadership learning.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-80">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${highlight.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading font-bold text-2xl mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-white/90">
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

