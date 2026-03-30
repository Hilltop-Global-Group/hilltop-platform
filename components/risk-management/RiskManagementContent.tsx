'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  FileCheck,
  AlertTriangle,
  ClipboardList,
  Monitor,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import {
  KenteDivider,
  DottedAfricaMap,
  AfricaWatermark,
} from '@/components/shared/HilltopBrand';

const C = {
  dark: '#080f1c',
  navy: '#1D3160',
  accent: '#F4A261',
  green: '#10B981',
  white: '#ffffff',
} as const;

const pillars = [
  {
    icon: Shield,
    title: 'Policy & Governance',
    description:
      'Formal risk governance with clear accountability from CEO to on-site staff. Every program is assessed through a standardized risk framework before approval.',
  },
  {
    icon: FileCheck,
    title: 'Due Diligence & Partner Assessment',
    description:
      'Every in-country partner, housing provider, and placement site undergoes rigorous vetting before any student-facing operations begin. Assessments are continuous, not one-time.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description:
      'FEA-aligned incident classification with tiered escalation protocols. 24/7 emergency communication and defined response timeframes for every severity level.',
  },
  {
    icon: ClipboardList,
    title: 'Operational Readiness',
    description:
      'Comprehensive pre-departure, on-site, and post-program protocols ensure consistent execution. Staff are equipped with emergency response training and real-time tools.',
  },
  {
    icon: Monitor,
    title: 'Technology & Compliance',
    description:
      'Real-time monitoring across security, health, and weather domains. Full regulatory compliance with FERPA, Title IX, Clery Act, and ISO 31030.',
  },
];

const highlights = [
  '24/7 Emergency Support',
  '5×5 Risk Assessment Matrix',
  'FEA-Aligned Protocols',
  'Continuous Partner Monitoring',
];

const complianceFrameworks = [
  {
    label: 'FEA Standards, 6th Edition',
    description:
      'Our risk management infrastructure is built on the Forum on Education Abroad\'s Standards of Good Practice, the benchmark for responsible international education.',
  },
  {
    label: 'ISO 31030:2021',
    description:
      'Travel risk management aligned with the international standard for organizational duty of care during business and educational travel.',
  },
  {
    label: 'FERPA / Title IX / Clery Act',
    description:
      'Full compliance with U.S. federal regulations governing student data privacy, gender equity protections, and campus security reporting, extended to abroad contexts.',
  },
];

export default function RiskManagementContent() {
  return (
    <main className="bg-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-28 md:py-36" style={{ background: C.dark }}>
        <AfricaWatermark className="absolute right-0 top-0 h-full w-[480px] opacity-[0.04] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <p className="font-sans text-sm uppercase tracking-[0.2em] mb-4" style={{ color: C.accent }}>
              Safety &amp; Compliance
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Risk Management Infrastructure
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              A comprehensive, standards-aligned framework ensuring the safety
              and security of every student, staff member, and institutional
              partner across our Africa-based programs.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {['FEA Standards 6th Ed.', 'ISO 31030:2021', 'FERPA / Title IX / Clery Act'].map(
                (badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-sans text-white backdrop-blur-sm"
                  >
                    <CheckCircle size={14} style={{ color: C.green }} />
                    {badge}
                  </span>
                ),
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <KenteDivider className="mx-auto my-0" />

      {/* ── Our Commitment ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6" style={{ color: C.navy }}>
              Our Commitment to Duty of Care
            </h2>
            <p className="font-sans text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Hilltop holds itself to the highest standards of participant
              safety and institutional accountability. Our risk management
              infrastructure is designed not as a formality, but as a living
              operational system, continuously reviewed, stress-tested, and
              improved to protect every stakeholder in our programs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Five Pillars ── */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: C.navy }}>
              Five Pillars of Risk Management
            </h2>
            <p className="font-sans text-gray-500 text-center max-w-2xl mx-auto mb-14">
              Every Hilltop program is governed by an integrated five-module
              framework covering policy, partners, incidents, operations, and
              technology.
            </p>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <FadeIn key={pillar.title} delay={i * 0.08}>
                  <div className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-lg h-full">
                    <div
                      className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${C.navy}10` }}
                    >
                      <Icon size={24} style={{ color: C.navy }} />
                    </div>
                    <h3 className="font-serif text-lg font-bold mb-3" style={{ color: C.dark }}>
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Key Highlights ── */}
      <section className="py-16" style={{ backgroundColor: '#f8f9fb' }}>
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex flex-col items-center text-center gap-3 rounded-xl bg-white p-6 shadow-sm border border-gray-100"
                >
                  <CheckCircle size={22} style={{ color: C.green }} />
                  <span className="font-sans text-sm font-semibold" style={{ color: C.navy }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Gated CTA ── */}
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: C.dark }}>
        <DottedAfricaMap className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[360px] opacity-[0.06] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Access the Full Framework
            </h2>
            <p className="font-sans text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Full risk management documentation, including detailed
              protocols, matrices, and operational playbooks, is available
              to institutional partners upon program engagement. Contact us
              to learn more.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-sans font-semibold text-white transition-colors"
              style={{ backgroundColor: C.accent }}
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <KenteDivider className="mx-auto my-0" />

      {/* ── Compliance Alignment ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: C.navy }}>
              Compliance Alignment
            </h2>
            <p className="font-sans text-gray-500 text-center max-w-2xl mx-auto mb-14">
              Our framework is mapped to the leading standards in
              international education safety and U.S. regulatory compliance.
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {complianceFrameworks.map((fw, i) => (
              <FadeIn key={fw.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm h-full">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `${C.green}15` }}>
                    <CheckCircle size={20} style={{ color: C.green }} />
                  </div>
                  <h3 className="font-serif text-base font-bold mb-2" style={{ color: C.dark }}>
                    {fw.label}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed">
                    {fw.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="pb-20 md:pb-28">
        <FadeIn>
          <div
            className="mx-auto max-w-4xl rounded-2xl px-8 py-14 text-center"
            style={{ backgroundColor: C.navy }}
          >
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Partner with Hilltop?
            </h2>
            <p className="font-sans text-gray-300 mb-8 max-w-xl mx-auto">
              Explore how our risk management infrastructure supports safe,
              impactful programming across the African continent.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-sans font-semibold transition-colors"
              style={{ backgroundColor: C.accent, color: C.white }}
            >
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
