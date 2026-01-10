import { Globe, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: Globe,
    title: 'Gain global work experience',
    description: 'Placements with innovators across finance, tech and creative sectors.',
  },
  {
    icon: TrendingUp,
    title: 'Cross-cultural leadership',
    description: 'Hands-on leadership modules and community engagement.',
  },
  {
    icon: Users,
    title: 'Network & mentorship',
    description: 'Connections with founders, investors and domestic accelerators.',
  },
];

export default function GhanaBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: '#F4A261' }}
                >
                  <Icon size={32} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2" style={{ color: '#1D3160' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center text-gray-700 text-lg">
          <p className="mb-2">
            <span className="font-semibold">Location:</span> Accra, Ghana
          </p>
          <p>
            <span className="font-semibold">Structure:</span> Mon–Thu placements, Fridays for leadership. Weekends: Cultural activities & immersion; free time.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230518_122404-scaled-e1695315573707.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <p className="text-white font-heading font-bold text-lg">Accra skyline & business districts</p>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_170109-scaled-e1759311926763.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <p className="text-white font-heading font-bold text-lg">Historical sites</p>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
              <p className="text-white font-heading font-bold text-lg">Markets & creative streets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

