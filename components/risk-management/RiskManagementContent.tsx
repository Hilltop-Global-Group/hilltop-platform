'use client';

import {
  Shield,
  AlertTriangle,
  ClipboardList,
  Eye,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, AfricaWatermark } from '@/components/shared/HilltopBrand';

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
      'Formal risk and operational governance with clear accountability from the CEO to on-site staff. Every program is assessed through a standardized risk framework at every stage.',
  },
  {
    icon: AlertTriangle,
    title: 'Incident Response',
    description:
      'Tiered incident classification with escalation protocols that activate on defined triggers. 24/7 emergency communication and committed response timeframes at every severity level.',
  },
  {
    icon: ClipboardList,
    title: 'Operational Readiness',
    description:
      'Comprehensive pre-departure, on-site, and post-program protocols ensure consistent execution. Our teams are practiced in every protocol and bring the training, experience, and judgment each situation requires.',
  },
  {
    icon: Eye,
    title: 'Intelligence & Compliance',
    description:
      'Proactive risk awareness across security, health, and environmental conditions, informed by local knowledge and available local information. Programs are built to operate within the compliance frameworks our university partners are accountable to, and to meet international standards for travel risk management.',
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
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Safety and Risk Management
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Hilltop maintains a comprehensive risk management infrastructure aligned with the Forum on Education Abroad (FEA) Standards and ISO 31030. Local teams, trusted partners, and continuous in-country monitoring stand behind every program. The safety of your students, faculty, and participants is where every program begins, and where every decision is tested.
            </p>
          </FadeIn>
        </div>
      </section>

      <KenteDivider className="mx-auto my-0" />

      {/* ── Full Infrastructure ── */}
      <section className="pb-20 md:py-28 pt-20 md:pt-28">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-14" style={{ color: C.navy }}>
              Full Infrastructure
            </h2>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-2">
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

      <KenteDivider className="mx-auto my-0" />

      {/* ── Compliance Alignment ── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-6" style={{ color: C.navy }}>
              Compliance alignment
            </h2>
            <p className="font-sans text-gray-600 text-center leading-relaxed mb-12">
              Our framework meets the leading international standards for education abroad, safety, and travel risk, and supports the regulatory obligations our university partners carry.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `${C.green}15` }}>
                <CheckCircle size={20} style={{ color: C.green }} />
              </div>
              <h3 className="font-serif text-base font-bold mb-2" style={{ color: C.dark }}>
                FERPA / Title IX / Clery Act
              </h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                Our processes are designed to support our university partners in meeting their FERPA, Title IX, and Clery Act obligations, including student data handled with care, incidents reported through institutional channels, and recordkeeping aligned with program-abroad contexts.
              </p>
            </div>
          </FadeIn>
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
              Let&apos;s Build Your Next Program in Africa.
            </h2>
            <p className="font-sans text-gray-300 mb-8 max-w-xl mx-auto leading-relaxed">
              Our risk management infrastructure is the foundation. The program your students remember is what we build on top of it. Tell us what you&apos;re trying to create, and we will walk you through what a Hilltop partnership looks like.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-sans font-semibold transition-colors"
              style={{ backgroundColor: C.accent, color: C.white }}
            >
              Book a Discovery Call
              <ArrowRight size={18} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
