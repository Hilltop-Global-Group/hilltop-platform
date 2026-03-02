export default function ContactMap() {
  return (
    <section className="relative overflow-hidden py-20 bg-white">

      {/* Decorative: large circle ring — top left */}
      <div className="pointer-events-none absolute -top-20 -left-20" aria-hidden>
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="350" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.06" />
          <circle cx="0" cy="0" r="270" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.04" />
          <circle cx="0" cy="0" r="190" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </div>

      {/* Decorative: dot grid — bottom right */}
      <div className="pointer-events-none absolute bottom-8 right-8" aria-hidden>
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={13 + col * 26} cy={13 + row * 26} r="2.5" fill="#1D3160" opacity="0.08" />
          )))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4" style={{ color: '#1D3160' }}>
            Visit Our Office
          </h2>
          <p className="text-gray-600 text-lg">
            Located in the heart of Washington, DC
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg border-4 border-gray-100">
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
            className="inline-block px-8 py-3 rounded-xl text-white font-serif font-bold hover:opacity-90 transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#F4A261' }}
          >
            Call to Schedule
          </a>
        </div>
      </div>
    </section>
  );
}







