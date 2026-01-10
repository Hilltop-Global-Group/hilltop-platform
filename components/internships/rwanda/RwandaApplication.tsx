import { QrCode, ArrowRight } from 'lucide-react';

export default function RwandaApplication() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white mb-6" style={{ backgroundColor: '#F4A261' }}>
            Applications open
          </span>
        </div>

        <h2 className="font-heading font-bold text-4xl mb-8" style={{ color: '#1D3160' }}>
          Apply to the Rwanda Program
        </h2>

        <div className="bg-gray-50 p-12 rounded-3xl shadow-lg mb-8">
          <div className="w-48 h-48 mx-auto bg-white rounded-2xl shadow-md flex items-center justify-center mb-6">
            <QrCode size={120} style={{ color: '#1D3160' }} />
          </div>
          <p className="text-gray-600 font-semibold">Scan to apply</p>
        </div>

        <p className="text-xl mb-8">
          <span className="text-gray-700">Application deadline:</span>{' '}
          <span className="font-bold" style={{ color: '#F4A261' }}>March 14, 2026</span>
        </p>

        <p className="text-gray-600 mb-8">
          Spots are limited — early application is strongly advised.
        </p>

        <button 
          className="inline-flex items-center gap-2 px-10 py-4 font-heading font-bold text-lg text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          style={{ backgroundColor: '#1D3160' }}
        >
          Apply Now
          <ArrowRight size={20} />
        </button>

        <div className="mt-16 p-8 bg-gray-50 rounded-2xl text-left">
          <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: '#1D3160' }}>
            Payment Terms & Plan Options
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>• A non-refundable deposit is required upon acceptance to secure your place. The remaining balance is due 45 days before departure.</li>
            <li>• Hilltop offers flexible payment plans for participants who wish to spread payments across multiple installments.</li>
            <li>• For details on pricing and payment options, please apply or contact our team to discuss what works best for you.</li>
            <li>• All payments must be made before arrival in Rwanda.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

