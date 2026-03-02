export default function GhanaProgramOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <img
              src="http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg"
              alt="Accra skyline & business districts"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <p className="text-center text-gray-600 text-sm">Accra skyline & business districts</p>
          </div>
          <div className="lg:col-span-1">
            <img
              src="http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg"
              alt="Historical sites"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <p className="text-center text-gray-600 text-sm">Historical sites</p>
          </div>
          <div className="lg:col-span-1">
            <img
              src="http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg"
              alt="Markets & creative streets"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <p className="text-center text-gray-600 text-sm">Markets & creative streets</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-4xl mb-6" style={{ color: '#1D3160' }}>
            About the Program
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The program blends professional growth and cultural exploration in Accra. Interns work across technology, finance, agribusiness, health, and creative sectors. Fridays feature leadership, community engagement, and cultural excursions.
          </p>
        </div>
      </div>
    </section>
  );
}

