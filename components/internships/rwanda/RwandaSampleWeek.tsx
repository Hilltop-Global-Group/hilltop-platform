import { Calendar, TrendingUp, MapPin } from 'lucide-react';

export default function RwandaSampleWeek() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-4xl mb-12 text-center" style={{ color: '#1D3160' }}>
          Sample Week
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#1D3160' }}>
              <Calendar size={32} className="text-white" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-4 text-center" style={{ color: '#1D3160' }}>
              Mon–Thu
            </h3>
            <p className="text-gray-700 text-center">
              On-site internship, project work, and supervisor check-ins.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#F4A261' }}>
              <TrendingUp size={32} className="text-white" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-4 text-center" style={{ color: '#1D3160' }}>
              Fridays
            </h3>
            <p className="text-gray-700 text-center">
              Leadership and development sessions or project-based sessions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#1D3160' }}>
              <MapPin size={32} className="text-white" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-4 text-center" style={{ color: '#1D3160' }}>
              Saturday & Sunday
            </h3>
            <p className="text-gray-700 text-center">
              Cultural immersion, excursions, or personal downtime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

