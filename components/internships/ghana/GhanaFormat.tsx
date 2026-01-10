export default function GhanaFormat() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-12 text-center" style={{ color: '#1D3160' }}>
          Program Format
        </h2>

        <p className="text-gray-700 text-xl mb-8 text-center font-semibold">
          Two Flexible Participation Options:
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-current transition-all duration-300" style={{ color: '#1D3160' }}>
            <div className="text-center mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold"
                style={{ backgroundColor: '#1D3160' }}
              >
                1
              </div>
              <h3 className="font-heading font-bold text-2xl mb-2" style={{ color: '#1D3160' }}>
                Option 1: Full In-Country
              </h3>
            </div>
            <p className="text-gray-700 text-lg text-center">
              Four weeks in-country (full duration abroad)
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-lg border-2 border-transparent hover:border-current transition-all duration-300" style={{ color: '#F4A261' }}>
            <div className="text-center mb-4">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold"
                style={{ backgroundColor: '#F4A261' }}
              >
                2
              </div>
              <h3 className="font-heading font-bold text-2xl mb-2" style={{ color: '#1D3160' }}>
                Option 2: Hybrid Format
              </h3>
            </div>
            <p className="text-gray-700 text-lg text-center">
              Three weeks in-country + one week remote (pre-departure virtual component)
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-center mt-8 italic">
          This flexible structure allows participants to begin their internship remotely before joining the cohort on-site for the in-country phase.
        </p>
      </div>
    </section>
  );
}

