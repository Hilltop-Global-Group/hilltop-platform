import { Play } from 'lucide-react';
import { KenteDivider } from '../shared/HilltopBrand';

const videos = [
  {
    title: 'Ghana 2024: Student Perspectives',
    description: 'Students share their transformative journey in Accra, from startup internships to cultural exploration.',
    duration: '3:45',
    thumbnail: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/6.jpg',
  },
  {
    title: 'Rwanda Innovation Hub Experience',
    description: 'Tech interns discuss working with Kigali\'s top startups and the ALU collaboration.',
    duration: '4:20',
    thumbnail: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/7A0B6637-94DF-4B8B-A888-04AE2A2917CD.jpg',
  },
  {
    title: 'Cultural Immersion Highlights',
    description: 'Experience the weekend excursions, community engagement, and leadership development sessions.',
    duration: '5:10',
    thumbnail: 'http://hilltopglobalgroup.com/wp-content/uploads/2025/09/performance-e1759310784853.jpg',
  },
];

export default function VideoTestimonials() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <div className="mb-14">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
            Video Highlights
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
          >
            See It for Yourself
          </h2>
        </div>

        <div className="border-t border-gray-200 mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group flex flex-col"
            >
              <div className="relative h-52 overflow-hidden cursor-pointer flex-shrink-0 mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${video.thumbnail}')` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-12 h-12 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 shadow-md"
                  >
                    <Play size={24} className="sm:w-8 sm:h-8" style={{ color: '#1D3160' }} fill="#1D3160" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  {video.duration}
                </div>
              </div>
              
              <div>
                <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                  {video.title}
                </h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

