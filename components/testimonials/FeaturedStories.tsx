import { Quote, MapPin } from 'lucide-react';

const featuredStories = [
  {
    name: "Sarah Mensah",
    role: "Business Intern",
    location: "Accra, Ghana",
    university: "Howard University",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video ID
    quote: "The internship placement was seamless. I gained real-world skills that I use daily. Working with a fintech startup in Accra opened my eyes to the innovation happening across Africa. This experience fundamentally changed my career trajectory.",
    fullStory: "Coming from Howard University, I thought I knew what to expect from an international internship. But Hilltop exceeded all expectations. The support, the placement, the cultural immersion – everything was exceptional.",
  },
  {
    name: "David Osei",
    role: "Tech Innovation Fellow",
    location: "Kigali, Rwanda",
    university: "Georgetown University",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video ID
    quote: "Hilltop Global provided exceptional support throughout my study abroad journey. The ALU collaboration gave me access to incredible resources and a network I'll leverage for years to come.",
    fullStory: "As a computer science major, I wanted hands-on experience with African tech innovation. The placement with a healthtech startup in Kigali was perfect. I learned agile development, worked with real clients, and contributed to a product that's now serving thousands.",
  },
  {
    name: "Kofi Agyeman",
    role: "Social Impact Intern",
    location: "Accra, Ghana",
    university: "KNUST",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual video ID
    quote: "An unforgettable experience that changed my career trajectory forever. I learned more in 4 weeks than I did in an entire semester. The mentorship, the projects, the cultural exposure – all world-class.",
    fullStory: "Working with a social enterprise focused on agricultural supply chains taught me about business, sustainability, and community impact. The Friday leadership sessions were incredible, and the cultural excursions helped me understand the broader context of development work in Ghana.",
  },
];

export default function FeaturedStories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Featured Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from students who transformed their careers through Hilltop programs
          </p>
        </div>

        <div className="space-y-12">
          {featuredStories.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-lg transition-all duration-500`}
            >
              {/* YouTube Video Section */}
              <div className="lg:w-1/2 w-full p-6 lg:p-8">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    src={story.videoUrl}
                    title={`${story.name} Testimonial Video`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-gray-600">
                  <MapPin size={16} style={{ color: '#F4A261' }} />
                  <span className="text-sm font-semibold">{story.location}</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">{story.university}</span>
                </div>
              </div>

              {/* Text Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                <Quote size={48} style={{ color: '#F4A261' }} className="mb-4" />
                
                <blockquote className="text-2xl font-serif font-semibold mb-6" style={{ color: '#1D3160' }}>
                  "{story.quote}"
                </blockquote>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {story.fullStory}
                </p>

                <div className="border-t pt-6" style={{ borderColor: '#F4A261' }}>
                  <p className="font-serif font-bold text-xl" style={{ color: '#1D3160' }}>
                    {story.name}
                  </p>
                  <p className="text-gray-600">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

