import { CheckCircle2 } from 'lucide-react';

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Industries & Sample Work
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We empower students through strategic matching. We match interns to host organizations based on academic background, skills, and career interests. Across both programs, participants gain hands-on experience in dynamic sectors that represent each country's growth and innovation priorities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Ghana */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: '#1D3160' }}
              >
                GH
              </div>
              <div>
                <h3 className="font-serif font-bold text-3xl" style={{ color: '#1D3160' }}>
                  Ghana's Key Industries
                </h3>
                <p className="text-gray-600">Accra & regional hubs</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: '#F4A261' }} strokeWidth={2.5} />
                <p className="text-gray-700"><span className="font-semibold">Technology & Data:</span> startups, software, analytics & digital innovation</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: '#F4A261' }} strokeWidth={2.5} />
                <p className="text-gray-700"><span className="font-semibold">Finance & Investment:</span> banking, fintech, investment advisory & microfinance</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: '#F4A261' }} strokeWidth={2.5} />
                <p className="text-gray-700"><span className="font-semibold">Agribusiness & Food Systems:</span> sustainable agriculture, processing & supply chain</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: '#F4A261' }} strokeWidth={2.5} />
                <p className="text-gray-700"><span className="font-semibold">Health & Social Impact:</span> NGOs, clinics & community services</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: '#F4A261' }} strokeWidth={2.5} />
                <p className="text-gray-700"><span className="font-semibold">Creative & Marketing:</span> media, fashion, design & communications</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-serif font-bold text-lg mb-4" style={{ color: '#1D3160' }}>
                Sample Work Projects
              </h4>
              <div className="space-y-2">
                {[
                  'Market research, trend analysis, competitor mapping',
                  'Product testing, UX feedback & user insights reports',
                  'Data cleaning, visualization & report generation',
                  'Drafting/editing proposals, decks & investor briefs',
                  'Design social calendars & support community events/partnerships',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="font-bold" style={{ color: '#F4A261' }}>{idx + 1}</span>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Hosts: startups, agencies, NGOs, fintechs
              </p>
            </div>
          </div>

          {/* Rwanda */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-16 h-16 rounded-lg flex items-center justify-center text-white text-2xl font-bold"
                style={{ backgroundColor: '#F4A261' }}
              >
                RW
              </div>
              <div>
                <h3 className="font-serif font-bold text-3xl" style={{ color: '#1D3160' }}>
                  Rwanda's Key Industries
                </h3>
                <p className="text-gray-600">Kigali & surrounding hubs</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: '#1D3160' }} strokeWidth={2.5} />
                <p className="text-gray-700"><span className="font-semibold">Fintech & Digital Platforms:</span> digital payments & inclusive finance</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: '#1D3160' }} strokeWidth={2.5} />
                <p className="text-gray-700"><span className="font-semibold">Agritech & Value Chains:</span> productivity & sustainability innovations</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: '#1D3160' }} strokeWidth={2.5} />
                <p className="text-gray-700"><span className="font-semibold">Healthtech:</span> data-driven solutions for service access</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: '#1D3160' }} strokeWidth={2.5} />
                <p className="text-gray-700"><span className="font-semibold">Education & Social Innovation:</span> youth development & learning access</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="flex-shrink-0 mt-1" style={{ color: '#1D3160' }} strokeWidth={2.5} />
                <p className="text-gray-700"><span className="font-semibold">Creative & Cultural:</span> design, film & creative media projects</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-serif font-bold text-lg mb-4" style={{ color: '#1D3160' }}>
                Sample Work Projects
              </h4>
              <div className="space-y-2">
                {[
                  'Customer discovery interviews & market mapping',
                  'Build process guides, SOPs & operational toolkits',
                  'Grant & partnership research for business development',
                  'Draft social content, brand storytelling & marketing assets',
                  'Collect data & prepare dashboards or analytics reports',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="font-bold" style={{ color: '#1D3160' }}>{idx + 1}</span>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Hosts: startups, accelerators & social enterprises
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-8 italic">
          Final placements are confirmed before departure; interns receive host profiles and work plans during pre-departure orientation.
        </p>
      </div>
    </section>
  );
}

