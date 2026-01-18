import ScrollReveal from './ScrollReveal';

const features = [
  {
    number: '01',
    title: 'Global Connections',
    description: 'Establish partnerships with organizations and institutions around the world to enhance your educational journey.',
  },
  {
    number: '02',
    title: 'Diverse Opportunities',
    description: 'Explore various internship and study abroad programs tailored to your academic and career goals.',
  },
  {
    number: '03',
    title: 'Supportive Community',
    description: 'Join a network of like-minded individuals and mentors committed to your success and personal development.',
  },
];

export default function EmpoweringFutures() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-navy-900" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gold-400" />
      
      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-navy-900/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold text-black uppercase tracking-wider mb-4 border-2 border-gold-400 px-6 py-2 rounded-full bg-gold-400">
              What We Offer
            </span>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl text-navy-900 mb-4">
              Empowering Global Futures
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            return (
              <ScrollReveal
                key={feature.number}
                animation="fade-up"
                delay={index * 150}
              >
                <div className="group relative bg-white p-10 rounded-2xl border-4 border-navy-900 hover:border-gold-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-400/50">
                  {/* Large number background */}
                  <div className="absolute top-8 right-8 text-8xl font-heading font-bold text-gray-200 group-hover:text-gold-400/20 select-none transition-colors duration-500">
                    {feature.number}
                  </div>

                  <div className="relative">
                    <div className="mb-6">
                      <span className="inline-block w-16 h-16 rounded-xl bg-navy-900 text-gold-400 font-heading font-bold text-xl flex items-center justify-center shadow-lg group-hover:bg-gold-400 group-hover:text-black border-2 border-gold-400 group-hover:scale-110 transition-all duration-500">
                        {feature.number}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-3xl text-navy-900 mb-4 group-hover:text-black transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {feature.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-6 h-2 w-16 group-hover:w-full transition-all duration-500 bg-gold-400" />
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-transparent group-hover:border-navy-900 rounded-tr-2xl transition-all duration-500" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

