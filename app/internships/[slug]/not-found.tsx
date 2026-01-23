import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif font-bold text-6xl mb-4" style={{ color: '#1D3160' }}>
          404
        </h1>
        <h2 className="font-serif font-bold text-3xl mb-6" style={{ color: '#1D3160' }}>
          Internship Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the internship program you're looking for.
        </p>
        <Link
          href="/internships-cms"
          className="inline-flex items-center gap-2 px-8 py-4 font-serif font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
          style={{ backgroundColor: '#1D3160' }}
        >
          <ArrowLeft size={20} />
          Back to Internships
        </Link>
      </div>
    </main>
  );
}

