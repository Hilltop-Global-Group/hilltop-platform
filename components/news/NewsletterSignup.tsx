'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="relative overflow-hidden py-20 bg-gray-50">

      {/* Decorative: concentric arcs — top right */}
      <motion.div className="pointer-events-none absolute -top-16 -right-16" aria-hidden initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="340" height="340" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="340" cy="0" r="280" stroke="#1D3160" strokeWidth="2" fill="none" opacity="0.11" />
          <circle cx="340" cy="0" r="200" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.08" />
          <circle cx="340" cy="0" r="120" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.05" />
        </svg>
      </motion.div>

      {/* Decorative: dot grid — bottom left */}
      <motion.div className="pointer-events-none absolute bottom-8 left-8" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4].map(row => [0,1,2,3,4].map(col => (
            <circle key={`${row}-${col}`} cx={13 + col * 26} cy={13 + row * 26} r="2.5" fill="#1D3160" opacity="0.13" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: wavy top edge */}
      <motion.div className="pointer-events-none absolute top-0 left-0 right-0" aria-hidden initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="50" viewBox="0 0 1440 50" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 28 C240 5, 480 50, 720 25 S1200 3, 1440 28" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.12"/>
          <path d="M0 28 C240 5, 480 50, 720 25 S1200 3, 1440 28 L1440 0 L0 0 Z" fill="#1D3160" opacity="0.04"/>
        </svg>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-primary-navy to-[#27427a] rounded-lg p-12 text-center shadow-lg">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: '#F4A261' }}
          >
            <Mail size={40} className="text-white" />
          </div>

          <h2 className="font-serif font-bold text-4xl text-white mb-4">
            Dispatches from the Continent
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Program updates, partner spotlights, and stories from the ground. Delivered to your inbox twice a month.
          </p>

          {subscribed ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#F4A261' }}
              >
                <Send size={32} className="text-white" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-white mb-2">
                Thank You!
              </h3>
              <p className="text-white/80">
                You've been subscribed to our newsletter.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20"
              />
              <button
                type="submit"
                className="px-8 py-4 font-serif font-bold rounded-xl text-primary-navy transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
                style={{ backgroundColor: '#F4A261' }}
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-white/60 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}


