'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-4xl mb-4" style={{ color: '#1D3160' }}>
          Stay Updated with Us
        </h2>
        <p className="font-body text-gray-600 text-lg mb-8">
          Subscribe to our newsletter for the latest news and opportunities. Get insights on internships, study abroad programs, and upcoming events tailored just for you.
        </p>

        <form className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-6 py-3 rounded border border-gray-300 focus:outline-none focus:border-gray-400"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded font-heading font-bold text-sm tracking-wide text-white hover:bg-opacity-90 transition-all"
              style={{ backgroundColor: '#1D3160' }}
            >
              SUBSCRIBE
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            By joining, you agree to our Terms and Conditions.
          </p>
        </form>
      </div>
    </section>
  );
}



