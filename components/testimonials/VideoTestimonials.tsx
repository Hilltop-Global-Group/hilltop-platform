import { Play } from 'lucide-react';

const videos = [
  {
    title: 'Ghana 2024: Student Perspectives',
    description: 'Students share their transformative journey in Accra, from startup internships to cultural exploration.',
    duration: '3:45',
    thumbnail: 'http://hilltopglobalgroup.com/wp-content/uploads/2023/09/IMG_4280-1-scaled-e1759312955679.jpg',
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Video Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            Watch our students share their Hilltop experience in their own words
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${video.thumbnail}')` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 shadow-xl"
                  >
                    <Play size={32} style={{ color: '#1D3160' }} fill="#1D3160" className="ml-1" />
                  </div>
                </div>

                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#1D3160' }}>
                  {video.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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

