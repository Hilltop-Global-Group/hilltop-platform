import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    number: '1',
    title: 'Regional hub for finance & entrepreneurship',
    description: 'Accra is a leading West African center for startups, finance and growing tech ecosystems.',
  },
  {
    number: '2',
    title: 'Strong democratic governance & youthful population',
    description: 'Stable institutions and a young workforce create high-impact internship opportunities.',
  },
  {
    number: '3',
    title: 'Hospitality and cultural vibrancy',
    description: 'Warm communities, music and festivals enrich learning and cultural immersion.',
  },
  {
    number: '4',
    title: 'Opportunities in fintech, agribusiness & creative industries',
    description: 'Wide-ranging placements across sectors where Ghana is rapidly innovating.',
  },
];

export default function GhanaWhyChoose() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold"
                  style={{ backgroundColor: reason.number === '1' || reason.number === '3' ? '#1D3160' : '#F4A261' }}
                >
                  {reason.number}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl mb-3" style={{ color: '#1D3160' }}>
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {reason.description}
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
