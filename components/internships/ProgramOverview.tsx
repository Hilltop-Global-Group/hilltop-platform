export default function ProgramOverview() {
  return (
    <section className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Left Column - Hook Headline */}
          <div className="md:col-span-4">
            <h2 className="font-serif font-bold text-3xl leading-tight" style={{ color: '#1D3160' }}>
              Real-World Experience in Africa's Most Dynamic Markets.
            </h2>
          </div>

          {/* Right Column - Body Text */}
          <div className="md:col-span-8 space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              The Hilltop Internship Program provides students with an opportunity to connect classroom learning with real-world experience in Africa's most dynamic markets. It enables emerging professionals to explore career interests, build networks, and develop globally relevant skills while engaging directly with organizations driving innovation and growth across the continent.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Hilltop collaborates with leading partners such as <span className="font-semibold" style={{ color: '#1D3160' }}>African Leadership University (Rwanda)</span> and other industry hosts across Africa to deliver high-impact internship experiences. Designed for meaningful, structured international exposure, Hilltop's programs combine professional placements with mentorship, cross-cultural learning, and guided reflection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
