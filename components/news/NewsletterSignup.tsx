'use client';

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
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-navy to-[#27427a] rounded-3xl p-12 text-center shadow-2xl">
          <div 
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: '#F4A261' }}
          >
            <Mail size={40} className="text-white" />
          </div>

          <h2 className="font-heading font-bold text-4xl text-white mb-4">
            Stay in the Loop
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest program updates, success stories, and career tips delivered to your inbox monthly
          </p>

          {subscribed ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#F4A261' }}
              >
                <Send size={32} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
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
                className="px-8 py-4 font-heading font-bold rounded-xl text-primary-navy transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap"
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

