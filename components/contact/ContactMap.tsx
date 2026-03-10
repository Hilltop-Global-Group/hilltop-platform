export default function ContactMap() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="mb-8">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-3 text-gray-400">
            Our Location
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
          >
            Washington, DC
          </h2>
        </div>

        <div className="overflow-hidden border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3105.102731919874!2d-77.027459!3d38.898766!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b795ab298343%3A0x7fca3fbfe9beb021!2sMetro%20Offices!5e0!3m2!1sen!2suk!4v1769112077900!5m2!1sen!2suk"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="mt-6 flex items-center justify-between flex-wrap gap-4">
          <p className="font-sans text-gray-500 text-sm">
            700 12th Street NW, Suite 700, Washington, DC 20005 &mdash; By appointment only.
          </p>
          <a
            href="tel:+12024992284"
            className="group inline-flex items-center gap-2 font-sans font-semibold text-xs uppercase tracking-[0.15em] pb-0.5 transition-opacity duration-200 hover:opacity-60"
            style={{ color: '#1D3160', borderBottom: '1px solid #1D3160' }}
          >
            Call to Schedule
          </a>
        </div>
      </div>
    </section>
  );
}
