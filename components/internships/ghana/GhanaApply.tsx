import { ArrowRight, QrCode } from 'lucide-react';

export default function GhanaApply() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-2 rounded-full mb-6" style={{ backgroundColor: '#F4A261', color: 'white' }}>
            <span className="font-bold text-sm uppercase tracking-wide">Applications Open</span>
          </div>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-4" style={{ color: '#1D3160' }}>
            Apply to the Ghana Program
          </h2>
        </div>

        <div className="bg-white p-12 rounded-lg shadow-lg text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="flex-1">
              <div 
                className="w-48 h-48 mx-auto mb-6 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#f3f4f6' }}
              >
                <QrCode size={120} style={{ color: '#1D3160' }} />
              </div>
              <p className="text-gray-600 font-semibold">Scan to apply</p>
            </div>

            <div className="flex-1 text-left">
              <p className="text-gray-700 text-lg mb-6">
                <span className="font-bold">Application deadline:</span> March 14, 2026
              </p>
              <p className="text-gray-600 mb-8">
                Spots are limited. Early application is strongly advised.
              </p>

              <button
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 font-serif font-bold text-lg text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-md"
                style={{ backgroundColor: '#1D3160' }}
              >
                Apply Now
                <ArrowRight size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Payment Terms */}
        <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="font-serif font-bold text-2xl mb-6 text-center" style={{ color: '#1D3160' }}>
            Payment Terms & Plan Options
          </h3>
          <ul className="space-y-3 text-gray-700 max-w-3xl mx-auto">
            <li className="flex items-start gap-3">
              <span style={{ color: '#F4A261' }}>•</span>
              <span>A non-refundable deposit is required upon acceptance to secure your place. The remaining balance is due 45 days before departure.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: '#F4A261' }}>•</span>
              <span>Hilltop offers flexible payment plans for participants who wish to spread payments across multiple installments.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: '#F4A261' }}>•</span>
              <span>For details on pricing and payment options, please apply or contact our team to discuss what works best for you.</span>
            </li>
            <li className="flex items-start gap-3">
              <span style={{ color: '#F4A261' }}>•</span>
              <span>All payments must be made before arrival in Ghana.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

