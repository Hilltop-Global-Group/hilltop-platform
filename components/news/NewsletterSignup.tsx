'use client';

import { useState } from 'react';
import { KenteDivider, ArrowCTA } from '../shared/HilltopBrand';

export default function NewsletterSignup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, lastName }),
      });
      if (res.ok) {
        setStatus('sent');
        setFirstName('');
        setLastName('');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full px-0 py-3 font-sans text-base text-gray-900 placeholder-gray-400 border-0 border-b-2 border-gray-200 focus:outline-none focus:border-black transition-colors duration-200 bg-transparent";

  return (
    <section className="py-20 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

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
              Delivered to your inbox once a month.
            </p>
          </div>

          <div>
            {status === 'sent' ? (
              <div className="border border-gray-200 rounded-none p-8">
                <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
                  Subscribed
                </p>
                <p
                  className="font-serif font-extrabold text-black leading-none"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}
                >
                  Thank you &mdash; you&apos;re in.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First name"
                    className={inputClass}
                  />
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last name"
                    className={inputClass}
                  />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className={inputClass}
                />
                <div className="flex items-center justify-between pt-2">
                  <p className="font-sans text-gray-400 text-xs">
                    Unsubscribe at any time.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-black border-b-2 border-black pb-1 hover:opacity-60 transition-opacity duration-200 disabled:opacity-40"
                  >
                    {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
                    <ArrowCTA />
                  </button>
                </div>
                {status === 'error' && (
                  <p className="font-sans text-red-500 text-xs mt-1">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
