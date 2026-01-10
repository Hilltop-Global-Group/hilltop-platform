import { Calendar, DollarSign } from 'lucide-react';

export default function GhanaKeyDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-4xl mb-12 text-center" style={{ color: '#1D3160' }}>
          Key Details
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-2xl">
            <p className="text-sm text-gray-600 mb-2">Applications Open:</p>
            <p className="font-bold text-xl" style={{ color: '#1D3160' }}>October 31, 2025</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl">
            <p className="text-sm text-gray-600 mb-2">Applications Close:</p>
            <p className="font-bold text-xl" style={{ color: '#F4A261' }}>March 14, 2026</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl">
            <p className="text-sm text-gray-600 mb-2">Pre-departure Sessions:</p>
            <p className="font-bold text-xl" style={{ color: '#1D3160' }}>June 15 – 17, 2026</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl">
            <p className="text-sm text-gray-600 mb-2">Internship Dates:</p>
            <p className="font-bold text-xl" style={{ color: '#1D3160' }}>June 22 – July 17, 2026</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl">
            <p className="text-sm text-gray-600 mb-2">Cost (Full In-Country, 4 weeks):</p>
            <p className="font-bold text-2xl" style={{ color: '#1D3160' }}>$6,050</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl">
            <p className="text-sm text-gray-600 mb-2">Cost (Hybrid, 3 weeks):</p>
            <p className="font-bold text-2xl" style={{ color: '#F4A261' }}>$5,250</p>
          </div>
        </div>
      </div>
    </section>
  );
}
