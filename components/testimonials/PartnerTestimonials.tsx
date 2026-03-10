import { Quote, Building2 } from 'lucide-react';
import { KenteDivider } from '../shared/HilltopBrand';

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
    <section className="py-24 sm:py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              Partners & Universities
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-none"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              What Our Partners Say
            </h2>
          </div>
          <p className="font-sans text-gray-500 text-base max-w-xs leading-relaxed">
            Trusted by leading organizations and universities worldwide.
          </p>
        </div>

        <div className="border-t border-gray-200 mb-12" />

        <div className="grid md:grid-cols-2 gap-6">
          {partnerTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-100 p-8">
              <Quote size={24} style={{ color: '#F4A261' }} className="mb-5" />
              <p className="font-sans text-gray-700 text-base leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: index % 2 === 0 ? '#1D316015' : '#F4A26115' }}
                >
                  <Building2 size={18} strokeWidth={2} style={{ color: index % 2 === 0 ? '#1D3160' : '#F4A261' }} />
                </div>
                <div>
                  <p className="font-serif font-bold text-base" style={{ color: '#1D3160' }}>
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-gray-400 text-xs">{testimonial.role} &middot; {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

