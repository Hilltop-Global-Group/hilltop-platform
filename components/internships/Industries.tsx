'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Industries() {
  return (
    <section className="relative overflow-hidden py-20 bg-slate-50">

      {/* Decorative: large quarter-arc — top left (navy on slate) */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-20 -left-20" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="0" cy="0" r="350" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.07" />
          <circle cx="0" cy="0" r="270" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.05" />
          <circle cx="0" cy="0" r="190" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom right (navy on slate) */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-8 right-8" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4,5].map(row => [0,1,2,3,4,5].map(col => (
            <circle key={`${row}-${col}`} cx={13 + col * 27} cy={13 + row * 27} r="3" fill="#1D3160" opacity="0.1" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: soft navy blob — mid top (navy on slate) */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-10 right-1/3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ width: 320, height: 320, borderRadius: '50%', backgroundColor: '#1D3160', opacity: 0.03, filter: 'blur(80px)' }}
      />

      {/* Decorative: horizontal wave — top edge */}
      <motion.div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="50" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 25 C240 0, 480 50, 720 25 S1200 0, 1440 25" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.06"/>
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold ring-2 ring-offset-2 ring-blue-100"
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
              <div className="space-y-4">
                {[
                  'Market research, trend analysis, competitor mapping',
                  'Product testing, UX feedback & user insights reports',
                  'Data cleaning, visualization & report generation',
                  'Drafting/editing proposals, decks & investor briefs',
                  'Design social calendars & support community events/partnerships',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} strokeWidth={2.5} />
                    <p className="text-gray-700">{item}</p>
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
                className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold ring-2 ring-offset-2 ring-blue-100"
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
              <div className="space-y-4">
                {[
                  'Customer discovery interviews & market mapping',
                  'Build process guides, SOPs & operational toolkits',
                  'Grant & partnership research for business development',
                  'Draft social content, brand storytelling & marketing assets',
                  'Collect data & prepare dashboards or analytics reports',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} strokeWidth={2.5} />
                    <p className="text-gray-700">{item}</p>
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

