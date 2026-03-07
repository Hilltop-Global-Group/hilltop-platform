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
    <section className="relative overflow-hidden py-20 bg-white">

      {/* Decorative: concentric arcs — bottom right */}
      <div className="pointer-events-none absolute -bottom-20 -right-20" aria-hidden>
        <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="420" cy="420" r="360" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="420" cy="420" r="280" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.04" />
          <circle cx="420" cy="420" r="200" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </div>

      {/* Decorative: dot grid — top left */}
      <div className="pointer-events-none absolute top-10 left-10" aria-hidden>
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={13 + col * 26} cy={13 + row * 26} r="2.5" fill="#1D3160" opacity="0.08" />
          )))}
        </svg>
      </div>

      {/* Decorative: diagonal lines — top right */}
      <div className="pointer-events-none absolute -top-4 -right-4" aria-hidden>
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="220" y1="75"  x2="145" y2="0" stroke="#1D3160" strokeWidth="1.5" opacity="0.07"/>
          <line x1="220" y1="130" x2="90"  y2="0" stroke="#1D3160" strokeWidth="1" opacity="0.05"/>
          <line x1="220" y1="185" x2="35"  y2="0" stroke="#1D3160" strokeWidth="1" opacity="0.04"/>
        </svg>
      </div>

      {/* Decorative: soft blob — center left */}
      <div className="pointer-events-none absolute top-1/3 -left-10 hidden md:block" aria-hidden
        style={{ width: 300, height: 300, borderRadius: '50%', backgroundColor: '#1D3160', opacity: 0.025, filter: 'blur(80px)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

