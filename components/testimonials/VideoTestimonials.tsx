import { Play } from 'lucide-react';

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
    <section className="relative overflow-hidden py-20 bg-gray-50">

      {/* Decorative: concentric arcs — top right */}
      <div className="pointer-events-none absolute -top-16 -right-16" aria-hidden>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="360" cy="0" r="300" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.07" />
          <circle cx="360" cy="0" r="220" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="360" cy="0" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </div>

      {/* Decorative: diagonal lines — top left */}
      <div className="pointer-events-none absolute -top-6 -left-6" aria-hidden>
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="70"  x2="70"  y2="0" stroke="#1D3160" strokeWidth="1.5" opacity="0.08"/>
          <line x1="0" y1="120" x2="120" y2="0" stroke="#1D3160" strokeWidth="1" opacity="0.05"/>
          <line x1="0" y1="170" x2="170" y2="0" stroke="#1D3160" strokeWidth="1" opacity="0.04"/>
        </svg>
      </div>

      {/* Decorative: dot grid — bottom right */}
      <div className="pointer-events-none absolute bottom-8 right-8" aria-hidden>
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={13 + col * 26} cy={13 + row * 26} r="2.5" fill="#1D3160" opacity="0.1" />
          )))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Video Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            Watch our students share their Hilltop experience in their own words
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden cursor-pointer">
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
              
              <div className="p-3 sm:p-6">
                <h3 className="font-serif font-bold text-sm sm:text-xl mb-2 sm:mb-3" style={{ color: '#1D3160' }}>
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-xs sm:text-base">
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

