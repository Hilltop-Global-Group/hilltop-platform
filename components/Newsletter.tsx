'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left . heading */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5 text-gray-400">
              Dispatches from the Continent
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-none mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Stay Close to the Work
            </h2>
            <p className="font-sans text-gray-500 text-base leading-relaxed max-w-sm">
              Program updates, partner spotlights, and stories from the ground. Delivered to your inbox twice a month.
            </p>
          </div>

          {/* Right . form */}
          <div>
            <form className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full px-5 py-4 border border-gray-200 font-sans text-base bg-gray-50 focus:outline-none focus:border-gray-400 focus:bg-white transition-colors duration-200"
              />
              <button
                type="submit"
                className="w-full px-5 py-4 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white transition-opacity duration-200 hover:opacity-85"
                style={{ backgroundColor: '#1D3160' }}
              >
                Join the List
              </button>
              <p className="font-sans text-xs text-gray-400 leading-relaxed">
                By joining, you agree to our Terms and Conditions. No spam, ever.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
