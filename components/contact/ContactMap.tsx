export default function ContactMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4" style={{ color: '#1D3160' }}>
            Visit Our Office
          </h2>
          <p className="text-gray-600 text-lg">
            Located in the heart of Washington, DC
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3105.102731919874!2d-77.027459!3d38.898766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b795ab298343%3A0x7fca3fbfe9beb021!2sMetro%20Offices!5e0!3m2!1sen!2suk!4v1769112077900!5m2!1sen!2suk" 
            width="100%" 
            height="500" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Please schedule an appointment before visiting our office.
          </p>
          <a
            href="tel:+12024992284"
            className="inline-block px-8 py-3 rounded-xl text-white font-heading font-bold hover:opacity-90 transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#F4A261' }}
          >
            Call to Schedule
          </a>
        </div>
      </div>
    </section>
  );
}

