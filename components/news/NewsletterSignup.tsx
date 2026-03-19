'use client';

import { useState } from 'react';
import { KenteDivider, ArrowCTA } from '../shared/HilltopBrand';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: heading */}
          <div>
            <div className="mb-6">
              <KenteDivider count={5} color="#F4A261" />
            </div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
              Stay Connected
            </p>
            <h2
              className="font-serif font-extrabold text-black leading-none mb-5"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              Dispatches from<br className="hidden sm:block" /> the Continent
            </h2>
            <p className="font-sans text-gray-500 text-base leading-relaxed max-w-sm">
              Program updates, partner spotlights, and stories from the ground.
              Delivered to your inbox twice a month.
            </p>
          </div>

          {/* Right: form */}
          <div>
            {subscribed ? (
              <div className="border border-gray-200 rounded-none p-8">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
                  Subscribed
                </p>
                <p
                  className="font-serif font-extrabold text-black leading-none"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
                >
                  Thank you . you&apos;re in.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-0 py-4 font-sans text-base text-gray-900 placeholder-gray-400 border-0 border-b-2 border-gray-200 focus:outline-none focus:border-black transition-colors duration-200 bg-transparent"
                />
                <div className="flex items-center justify-between pt-2">
                  <p className="font-sans text-gray-400 text-xs">
                    Unsubscribe at any time.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-black border-b-2 border-black pb-1 hover:opacity-60 transition-opacity duration-200"
                  >
                    Subscribe
                    <ArrowCTA />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
