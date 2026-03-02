'use client';

import { X, Check, FileText, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProgramDetails() {
  return (
    <section className="relative overflow-hidden py-20 bg-white">

      {/* Decorative: diagonal crossing lines — top left */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 -left-10"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="80"  x2="80"  y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.08" />
          <line x1="0" y1="130" x2="130" y2="0"   stroke="#1D3160" strokeWidth="1.5" opacity="0.06" />
          <line x1="0" y1="180" x2="180" y2="0"   stroke="#1D3160" strokeWidth="1"   opacity="0.05" />
          <line x1="0" y1="230" x2="230" y2="0"   stroke="#1D3160" strokeWidth="1"   opacity="0.04" />
          <line x1="30" y1="260" x2="260" y2="30" stroke="#1D3160" strokeWidth="1"   opacity="0.04" />
        </svg>
      </motion.div>

      {/* Decorative: soft navy blob — bottom right */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-20"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          width: 360,
          height: 360,
          borderRadius: '50%',
          backgroundColor: '#1D3160',
          opacity: 0.04,
          filter: 'blur(60px)',
        }}
      />

      {/* Decorative: small dot cluster — mid right */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <svg width="60" height="200" viewBox="0 0 60 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0, 1, 2].map(col =>
            [0, 1, 2, 3, 4, 5].map(row => (
              <circle
                key={`${col}-${row}`}
                cx={10 + col * 20}
                cy={16 + row * 32}
                r="3"
                fill="#1D3160"
                opacity="0.1"
              />
            ))
          )}
        </svg>
      </motion.div>

      {/* Decorative: concentric arc rings — top right */}
      <motion.div aria-hidden className="pointer-events-none absolute -top-16 -right-16" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="360" height="360" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="360" cy="0" r="300" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.06" />
          <circle cx="360" cy="0" r="220" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.04" />
          <circle cx="360" cy="0" r="140" stroke="#1D3160" strokeWidth="1" fill="none" opacity="0.03" />
        </svg>
      </motion.div>

      {/* Decorative: large dot grid — bottom left */}
      <motion.div aria-hidden className="pointer-events-none absolute bottom-8 left-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[0,1,2,3,4,5].map(row => [0,1,2,3,4,5].map(col => (
            <circle key={`${row}-${col}`} cx={13 + col * 27} cy={13 + row * 27} r="2.5" fill="#1D3160" opacity="0.09" />
          )))}
        </svg>
      </motion.div>

      {/* Decorative: wavy top edge */}
      <motion.div aria-hidden className="pointer-events-none absolute top-0 left-0 right-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}>
        <svg width="100%" height="45" viewBox="0 0 1440 45" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 25 C300 5, 600 45, 900 22 S1260 2, 1440 25" stroke="#1D3160" strokeWidth="1.5" fill="none" opacity="0.05"/>
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Program Details
          </h2>
          <p className="text-xl text-gray-600">
            What's included, how to apply, eligibility & safety
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg text-center hover:-translate-y-1 transition-all duration-300">
            <X size={32} className="mx-auto mb-3 text-gray-400" strokeWidth={2.5} />
            <p className="font-semibold text-gray-900">Flights not included</p>
            <p className="text-sm text-gray-600 mt-2">Students arrange flights independently. Hilltop provides assistance.</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center hover:-translate-y-1 transition-all duration-300">
            <Check size={32} className="mx-auto mb-3" style={{ color: '#1D3160' }} strokeWidth={2.5} />
            <p className="font-semibold text-gray-900">4-week in-country</p>
            <p className="text-sm text-gray-600 mt-2">Full immersion experience with structured support</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center hover:-translate-y-1 transition-all duration-300">
            <Check size={32} className="mx-auto mb-3" style={{ color: '#1D3160' }} strokeWidth={2.5} />
            <p className="font-semibold text-gray-900">Cohort-based support</p>
            <p className="text-sm text-gray-600 mt-2">Community learning with peer groups</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg text-center hover:-translate-y-1 transition-all duration-300">
            <Check size={32} className="mx-auto mb-3" style={{ color: '#1D3160' }} strokeWidth={2.5} />
            <p className="font-semibold text-gray-900">Credit documentation</p>
            <p className="text-sm text-gray-600 mt-2">Support for academic credit verification</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <FileText size={28} style={{ color: '#F4A261' }} strokeWidth={2} />
              <h3 className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                What's Included
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Pre-vetted accommodation (twin-share)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Professional placement matching</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Leadership workshops & mentorship</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Cultural excursions & activities</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>On-ground coordinator support</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Pre-departure orientation (virtual)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Airport pickup & group transport</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <Shield size={28} style={{ color: '#F4A261' }} strokeWidth={2} />
              <h3 className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                Safety & Support
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Comprehensive safety orientation</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Emergency contact line</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Secure, vetted accommodations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Regular check-ins with coordinators</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Medical support & clinic referrals</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Travel insurance guidance</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={20} className="flex-shrink-0 mt-0.5" style={{ color: '#1D3160' }} />
                <span>Cohort community support network</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
