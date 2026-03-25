'use client';

import Link from 'next/link';
import { Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  variant?: 'banner' | 'inline';
}

export default function RiskManagementCTA({ variant = 'banner' }: Props) {
  if (variant === 'inline') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="my-6"
      >
        <Link
          href="/risk-management"
          className="group inline-flex items-center gap-3 px-5 py-3 border border-gray-200 hover:border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all duration-300"
        >
          <Shield size={16} style={{ color: '#1D3160' }} />
          <span className="font-sans text-sm font-medium" style={{ color: '#1D3160' }}>
            View our Risk Management &amp; Safety Infrastructure
          </span>
          <ArrowRight size={14} className="text-gray-400 group-hover:translate-x-0.5 transition-transform duration-200" />
        </Link>
      </motion.div>
    );
  }

  return (
    <section className="border-y border-gray-100 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
        >
          <div className="flex items-start gap-4 flex-1">
            <div className="p-3 flex-shrink-0" style={{ backgroundColor: '#1D316010' }}>
              <Shield size={24} style={{ color: '#1D3160' }} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg mb-1" style={{ color: '#1D3160' }}>
                Safety &amp; Risk Management
              </h3>
              <p className="font-sans text-gray-500 text-sm leading-relaxed max-w-lg">
                Hilltop maintains a comprehensive risk management infrastructure aligned with
                FEA Standards, ISO 31030, and U.S. federal regulations. Your students&apos; safety is our foundation.
              </p>
            </div>
          </div>
          <Link
            href="/risk-management"
            className="group inline-flex items-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-[0.15em] border transition-all duration-300 flex-shrink-0 self-start sm:self-center"
            style={{ color: '#1D3160', borderColor: '#1D3160' }}
          >
            View Full Infrastructure
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
