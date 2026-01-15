import { Facebook, Linkedin, Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const teamMembers = [
  {
    name: 'Phil Agbeko',
    role: 'Founder',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=PA',
  },
  {
    name: 'Phil Agbeko',
    role: 'Founder',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=PA',
  },
  {
    name: 'Phil Agbeko',
    role: 'Founder',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=PA',
  },
  {
    name: 'Phil Agbeko',
    role: 'Founder',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=PA',
  },
  {
    name: 'Phil Agbeko',
    role: 'Founder',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=PA',
  },
  {
    name: 'Phil Agbeko',
    role: 'Founder',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=PA',
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">Our People</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal
              key={index}
              animation="zoom-in"
              delay={index * 100}
            >
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${member.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold mb-1" style={{ color: '#F4A261' }}>
                    {member.role}
                  </p>
                  <h3 className="font-heading font-bold text-2xl mb-4">
                    {member.name}
                  </h3>
                  
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      aria-label="Facebook"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

