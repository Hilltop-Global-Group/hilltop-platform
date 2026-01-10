import { Globe, Briefcase, Users } from 'lucide-react';

const features = [
  {
    number: '01',
    title: 'Global Connections',
    description: 'Establish partnerships with organizations and institutions around the world to enhance your educational journey.',
    icon: Globe,
  },
  {
    number: '02',
    title: 'Diverse Opportunities',
    description: 'Explore various internship and study abroad programs tailored to your academic and career goals.',
    icon: Briefcase,
  },
  {
    number: '03',
    title: 'Supportive Community',
    description: 'Join a network of like-minded individuals and mentors committed to your success and personal development.',
    icon: Users,
  },
];

export default function EmpoweringFutures() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
            Empowering Global Futures
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.number}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-heading font-bold text-white text-xl"
                    style={{ backgroundColor: '#1D3160' }}
                  >
                    {feature.number}
                  </div>
                  <div 
                    className="flex-shrink-0 p-3 rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: '#F4A261' }}
                  >
                    <Icon size={28} className="text-white" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-2xl mb-3" style={{ color: '#1D3160' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div 
                  className="absolute inset-0 border-2 border-transparent group-hover:border-current rounded-2xl transition-all duration-500 pointer-events-none"
                  style={{ color: '#F4A261' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

