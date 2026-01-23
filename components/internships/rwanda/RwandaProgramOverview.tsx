export default function RwandaProgramOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <img
              src="http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg"
              alt="Kigali cityscapes & innovation hubs"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <p className="text-center text-gray-600 text-sm">Kigali cityscapes & innovation hubs</p>
          </div>
          <div className="lg:col-span-1">
            <img
              src="http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg"
              alt="Community immersion & cultural visits"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <p className="text-center text-gray-600 text-sm">Community immersion & cultural visits</p>
          </div>
          <div className="lg:col-span-1">
            <img
              src="http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg"
              alt="Nature & excursions (Volcanoes)"
              className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <p className="text-center text-gray-600 text-sm">Nature & excursions (Volcanoes)</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-4xl mb-6" style={{ color: '#1D3160' }}>
            About the Program
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            The program offers professional experience in Kigali's innovation hub, across fintech, agritech, healthtech, and creative industries. Fridays are reserved for leadership and cultural immersion. Delivered in collaboration with ALU.
          </p>
        </div>
      </div>
    </section>
  );
}
