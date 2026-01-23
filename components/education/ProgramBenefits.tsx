import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Real-world business consulting experience',
  'Cross-cultural competency development',
  'Enhanced critical thinking skills',
  'Professional network expansion in Africa',
  'Unique perspective on global business',
  'Practical problem-solving in international settings',
  'Cultural immersion and language exposure',
  'Resume-building international experience',
];

export default function ProgramBenefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
              Why Choose Our Programs?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our study abroad programs provide students with tangible skills and experiences that set them apart in today's global marketplace.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                  style={{
                    animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
                  }}
                >
                  <CheckCircle2 
                    size={24} 
                    className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: '#F4A261' }}
                    strokeWidth={2.5}
                  />
                  <span className="text-gray-700 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                  <div
                    className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
                    style={{
                      backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/Copy-of-20230521_172314-scaled-e1759312776245.jpg')`
                    }}
                  />
                </div>
                <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                  <div
                    className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
                    style={{
                      backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg')`
                    }}
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                  <div
                    className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
                    style={{
                      backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/IMG_4280-1-scaled-e1759312955679.jpg')`
                    }}
                  />
                </div>
                <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                  <div
                    className="w-full h-full bg-cover bg-center transform transition-transform duration-700 hover:scale-110"
                    style={{
                      backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg')`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

