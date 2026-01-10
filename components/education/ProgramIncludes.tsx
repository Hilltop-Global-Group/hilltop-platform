import { Briefcase, Landmark, Heart, Palmtree } from 'lucide-react';

const includes = [
  {
    icon: Briefcase,
    title: 'Business Projects & Operations',
    description: 'Challenging business projects and exposure to business operations across various industries',
    color: '#1D3160',
  },
  {
    icon: Landmark,
    title: 'African History & Culture',
    description: 'Immersive exposure to African history, traditions, and contemporary cultural experiences',
    color: '#F4A261',
  },
  {
    icon: Heart,
    title: 'Social & Humanitarian Experiences',
    description: 'Meaningful engagement with local communities and impactful service projects',
    color: '#1D3160',
  },
  {
    icon: Palmtree,
    title: 'Leisure & Tourist Destinations',
    description: 'Opportunities to explore iconic landmarks, natural wonders, and vibrant local attractions',
    color: '#F4A261',
  },
];

export default function ProgramIncludes() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Each Study Abroad Program Includes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive experience combining education, culture, service, and adventure
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {includes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon size={32} className="text-white" strokeWidth={2} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-2xl mb-3" style={{ color: item.color }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div 
                  className="absolute inset-0 border-2 border-transparent group-hover:border-current rounded-2xl transition-all duration-500 pointer-events-none"
                  style={{ color: item.color }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

