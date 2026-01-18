import { Facebook, Linkedin, Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const teamMembers = [
  {
    name: 'Phil Agbeko',
    role: 'Founder & CEO',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=PA',
  },
  {
    name: 'Team Member',
    role: 'Operations Director',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=TM',
  },
  {
    name: 'Team Member',
    role: 'Program Manager',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=TM',
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-black uppercase tracking-wider mb-4 border-2 border-gold-400 px-6 py-2 rounded-full bg-gold-400">
              The Team
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-navy-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Passionate professionals dedicated to transforming education across Africa
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal
              key={index}
              animation="zoom-in"
              delay={index * 100}
            >
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-4 border-navy-900 hover:border-gold-400">
                <div className="relative h-[500px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-sm font-bold mb-2 uppercase tracking-wide" style={{ color: '#F4A261' }}>
                      {member.role}
                    </p>
                    <h3 className="font-heading font-bold text-3xl mb-6" style={{ color: '#FFFFFF' }}>
                      {member.name}
                    </h3>
                    
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: '#F4A261' }}
                        aria-label="Facebook"
                      >
                        <Facebook size={20} style={{ color: '#1D3160' }} />
                      </a>
                      <a
                        href="#"
                        className="p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: '#F4A261' }}
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} style={{ color: '#1D3160' }} />
                      </a>
                      <a
                        href="#"
                        className="p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: '#F4A261' }}
                        aria-label="Instagram"
                      >
                        <Instagram size={20} style={{ color: '#1D3160' }} />
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

