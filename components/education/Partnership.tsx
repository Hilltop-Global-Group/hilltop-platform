import { Building2, Globe2, Users2, Lightbulb } from 'lucide-react';

export default function Partnership() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
              University Partnerships
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Hilltop partners with Universities to expand their international program footprint in Africa by facilitating unique and transformational turnkey experiences for their travel abroad programs.
              </p>
              <p>
                Services include accommodation, comprehensive in-country logistics, curated tours, business visits, student consulting project sourcing and design and more.
              </p>
              <p>
                Hilltop has validated that in a very organic way, these experiences in Africa enrich the business school experience for the students. In addition to the cultural and other experiences, they gain practical knowledge working on cross-industry projects that have a significant local impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#F4A261' }}>
                <Building2 size={28} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                Accommodation
              </h3>
              <p className="text-gray-600 text-sm">
                Comfortable and secure housing for all participants
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#1D3160' }}>
                <Globe2 size={28} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                In-Country Logistics
              </h3>
              <p className="text-gray-600 text-sm">
                Comprehensive support and coordination
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#F4A261' }}>
                <Users2 size={28} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                Business Visits
              </h3>
              <p className="text-gray-600 text-sm">
                Curated tours and corporate engagements
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: '#1D3160' }}>
                <Lightbulb size={28} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                Project Design
              </h3>
              <p className="text-gray-600 text-sm">
                Student consulting project sourcing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

