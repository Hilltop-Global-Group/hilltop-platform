import { Mail } from 'lucide-react';

export default function GhanaContact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-4xl mb-6" style={{ color: '#1D3160' }}>
          Questions?
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          We'd love to help you decide if this program is a good fit.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Reach our team anytime and we will get back to you as soon as possible.
        </p>

        <a
          href="mailto:support@hilltopglobalgroup.com"
          className="inline-flex items-center gap-3 px-10 py-4 font-heading font-bold text-lg text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          style={{ backgroundColor: '#F4A261' }}
        >
          <Mail size={24} />
          support@hilltopglobalgroup.com
        </a>
      </div>
    </section>
  );
}

