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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-down">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-gold-400 uppercase tracking-wider mb-4 border border-gold-400/30 px-4 py-2 rounded-full">
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
                <div className="group relative bg-gray-50 p-10 rounded-2xl border-2 border-transparent hover:border-navy-900/10 transition-all duration-500 hover:-translate-y-2">
                  {/* Large number background */}
                  <div className="absolute top-8 right-8 text-8xl font-heading font-bold text-navy-900/5 select-none">
                    {feature.number}
                  </div>

                  <div className="relative">
                    <div className="mb-6">
                      <span className="inline-block w-12 h-12 rounded-full bg-navy-900 text-white font-heading font-bold text-lg flex items-center justify-center">
                        {feature.number}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-2xl text-navy-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="mt-6 w-16 h-1 bg-navy-900 group-hover:w-24 transition-all duration-500" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

