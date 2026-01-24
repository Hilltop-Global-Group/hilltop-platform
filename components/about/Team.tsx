import { Linkedin } from 'lucide-react';
import FadeIn from '../FadeIn';

const teamMembers = [
  {
    name: 'Phil Agbeko',
    role: 'Founder & CEO',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=PA',
    linkedin: 'https://www.linkedin.com/in/philagbeko/',
  },
  {
    name: 'Osa Imohe',
    role: 'Co-Founder',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=OI',
    linkedin: 'https://www.linkedin.com/in/osaimohe/',
  },
  {
    name: 'Faata Faleera Adam',
    role: 'Africa Operations Manager',
    image: 'https://via.placeholder.com/400x400/1D3160/FFFFFF?text=FA',
    linkedin: 'https://www.linkedin.com/in/faata-faleera-a-170683a1/',
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-black uppercase tracking-wider mb-4 border-2 border-gold-400 px-6 py-2 rounded-full bg-gold-400">
              The Team
            </span>
            <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Passionate professionals dedicated to transforming education across Africa
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <FadeIn
              key={index}
              delay={index * 0.15}
            >
              <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-4 border-navy-900 hover:border-gold-400">
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
                    <h3 className="font-serif font-bold text-3xl mb-6" style={{ color: '#FFFFFF' }}>
                      {member.name}
                    </h3>
                    
                    <div className="flex gap-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: '#F4A261' }}
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin size={20} style={{ color: '#1D3160' }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

