import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const programs = [
  {
    country: 'Rwanda',
    city: 'Kigali',
    dates: 'June 22 – July 17, 2026',
    preDeparture: 'June 15 – June 17, 2026 (virtual)',
    deadline: 'March 14, 2026',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/2.jpg',
    description: 'In collaboration with African Leadership University (ALU), this program connects students with Kigali\'s innovation and entrepreneurial ecosystem. Placements across fintech, agritech, healthtech, creative industries, and more, with leadership sessions and cultural tours.',
    format: '4-week in-country or hybrid format · Mon–Thu placements, Fridays leadership · Weekends: Cultural activities · Cohort support.',
    color: '#1D3160',
  },
  {
    country: 'Ghana',
    city: 'Accra',
    dates: 'June 22 – July 17, 2026',
    preDeparture: 'June 15 – June 17, 2026 (virtual)',
    deadline: 'March 14, 2026',
    image: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/IMG_4280-1-scaled-e1759312955679.jpg',
    description: 'The Ghana Internship Program offers students a rich blend of professional growth and cultural exploration in one of West Africa\'s most vibrant economies. Placements across technology, finance, agriculture, creative industries, health, and more, with leadership sessions and cultural tours.',
    format: '4-week in-country or hybrid format · Mon–Thu placements, Fridays leadership · Weekends: Cultural activities · Cohort support.',
    color: '#F4A261',
  },
];

export default function Programs2026() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Explore Our 2026 Internships
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our 2026 Internship programs connect students to meaningful professional experiences across Ghana and Rwanda—Africa's leading innovation and cultural destinations. Each program blends workplace learning, leadership development, and cultural immersion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${program.image}')` }}
                />
                <div 
                  className="absolute inset-0 opacity-60"
                  style={{ background: `linear-gradient(to bottom, transparent, ${program.color})` }}
                />
                
                <div className="absolute top-4 left-4">
                  <span 
                    className="px-4 py-2 rounded-full text-white text-sm font-bold backdrop-blur-sm"
                    style={{ backgroundColor: program.color }}
                  >
                    Applications Open
                  </span>
                </div>

                <div className="absolute bottom-4 left-4">
                  <h3 className="font-heading font-bold text-3xl text-white">
                    2026 {program.country} Internship Program
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar size={20} className="flex-shrink-0 mt-0.5" style={{ color: program.color }} />
                    <div>
                      <p className="font-semibold text-gray-900">Program Dates</p>
                      <p className="text-gray-600">{program.dates}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="flex-shrink-0 mt-0.5" style={{ color: program.color }} />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">{program.city}, {program.country}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={20} className="flex-shrink-0 mt-0.5" style={{ color: program.color }} />
                    <div>
                      <p className="font-semibold text-gray-900">Pre-departure (virtual)</p>
                      <p className="text-gray-600">{program.preDeparture}</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {program.description}
                </p>

                <div 
                  className="p-4 rounded-xl mb-6"
                  style={{ backgroundColor: `${program.color}15` }}
                >
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">Flexible format:</span> {program.format}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/internships/${program.country.toLowerCase()}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 font-heading font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ backgroundColor: program.color }}
                  >
                    Learn more
                    <ArrowRight size={18} />
                  </Link>
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-gray-600">Application deadline</p>
                    <p className="font-bold" style={{ color: program.color }}>{program.deadline}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Have questions?{' '}
            <a href="#faq" className="font-semibold hover:underline" style={{ color: '#F4A261' }}>
              Jump to our FAQs →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

