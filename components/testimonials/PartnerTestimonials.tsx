import { Quote, Building2 } from 'lucide-react';

const partnerTestimonials = [
  {
    name: "James K.",
    role: "CEO",
    company: "TechStart Ghana",
    quote: "Our company has hired three interns from Hilltop, and all were excellent additions. They came prepared, professional, and eager to contribute. The screening and matching process is top-notch.",
  },
  {
    name: "Anita B.",
    role: "Program Director",
    company: "Innovation Hub Kigali",
    quote: "They handle all the logistics perfectly, allowing us to focus on teaching and mentoring. The students are well-prepared and the support from Hilltop coordinators makes the entire process seamless.",
  },
  {
    name: "Dr. Patricia Mensah",
    role: "Director of International Programs",
    company: "Howard University",
    quote: "Hilltop has been an invaluable partner in expanding our Africa programs. Their on-ground support, cultural competency, and commitment to student success is unmatched.",
  },
  {
    name: "Samuel Nkrumah",
    role: "Founder",
    company: "AgriTech Solutions",
    quote: "Working with Hilltop interns has brought fresh perspectives to our team. The students are motivated, skilled, and genuinely interested in making an impact in African agriculture.",
  },
];

export default function PartnerTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Partner & University Feedback
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading organizations and universities worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {partnerTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-md transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: index % 2 === 0 ? '#1D3160' : '#F4A261' }}
                >
                  <Building2 size={32} className="text-white" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <p className="font-serif font-bold text-lg" style={{ color: '#1D3160' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <Quote size={32} style={{ color: '#F4A261' }} className="mb-4" />
              
              <p className="text-gray-700 text-lg leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

