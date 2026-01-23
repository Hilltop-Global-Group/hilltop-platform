import { X, Check, FileText, Shield } from 'lucide-react';

export default function ProgramDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Program Details
          </h2>
          <p className="text-xl text-gray-600">
            What's included, how to apply, eligibility & safety
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <X size={32} className="mx-auto mb-3" style={{ color: '#F4A261' }} strokeWidth={2.5} />
            <p className="font-semibold text-gray-900">Flights not included</p>
            <p className="text-sm text-gray-600 mt-2">Students arrange flights independently. Hilltop provides assistance.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Check size={32} className="mx-auto mb-3" style={{ color: '#1D3160' }} strokeWidth={2.5} />
            <p className="font-semibold text-gray-900">4-week in-country</p>
            <p className="text-sm text-gray-600 mt-2">Full immersion experience with structured support</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Check size={32} className="mx-auto mb-3" style={{ color: '#1D3160' }} strokeWidth={2.5} />
            <p className="font-semibold text-gray-900">Cohort-based support</p>
            <p className="text-sm text-gray-600 mt-2">Community learning with peer groups</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <Check size={32} className="mx-auto mb-3" style={{ color: '#1D3160' }} strokeWidth={2.5} />
            <p className="font-semibold text-gray-900">Credit documentation</p>
            <p className="text-sm text-gray-600 mt-2">Support for academic credit verification</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={28} style={{ color: '#F4A261' }} strokeWidth={2} />
              <h3 className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                What's Included
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Pre-vetted accommodation (twin-share)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Professional placement matching</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Leadership workshops & mentorship</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Cultural excursions & activities</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>24/7 on-ground coordinator support</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Pre-departure orientation (virtual)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Airport pickup & group transport</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={28} style={{ color: '#F4A261' }} strokeWidth={2} />
              <h3 className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                Safety & Support
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Comprehensive safety orientation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>24/7 emergency contact line</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Secure, vetted accommodations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Regular check-ins with coordinators</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Medical support & clinic referrals</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Travel insurance guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Cohort community support network</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

