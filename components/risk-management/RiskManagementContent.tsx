'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Shield,
  FileCheck,
  AlertTriangle,
  ClipboardList,
  Monitor,
} from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import {
  KenteDivider,
  DottedAfricaMap,
  AfricaWatermark,
  Eyebrow,
} from '@/components/shared/HilltopBrand';

/* ─────────────────────────────── types ─────────────────────────────── */

interface ModuleData {
  number: number;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

/* ─────────────────────────────── palette ───────────────────────────── */

const C = {
  dark: '#080f1c',
  navy: '#1D3160',
  accent: '#F4A261',
  green: '#10B981',
  white: '#ffffff',
} as const;

/* ────────────────────── reusable sub-components ───────────────────── */

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-serif text-xl md:text-2xl font-bold mb-4" style={{ color: C.navy }}>
      {children}
    </h3>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-serif text-lg font-semibold mb-3" style={{ color: C.dark }}>
      {children}
    </h4>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return <p className="font-sans text-gray-700 leading-relaxed mb-4">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside space-y-1.5 font-sans text-gray-700 mb-4 pl-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 font-sans text-gray-700 mb-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1 flex-shrink-0 w-4 h-4 rounded border-2 border-gray-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="list-decimal list-inside space-y-1.5 font-sans text-gray-700 mb-4 pl-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm font-sans border border-gray-200 rounded-lg overflow-hidden">
        <thead>
          <tr style={{ backgroundColor: C.navy }}>
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-4 py-3 text-left text-white font-semibold text-xs uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={ri % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-4 py-3 border-t border-gray-100 text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GovernanceCard({
  role,
  responsibilities,
}: {
  role: string;
  responsibilities: string[];
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-shadow">
      <h5 className="font-serif font-bold text-base mb-3" style={{ color: C.navy }}>
        {role}
      </h5>
      <ul className="space-y-1.5 text-sm font-sans text-gray-600">
        {responsibilities.map((r, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: C.accent }} />
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────────────── Accordion wrapper for each module ──────────────── */

function ModuleAccordion({
  module,
  isOpen,
  onToggle,
}: {
  module: ModuleData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 md:px-8 md:py-6 text-left group hover:bg-gray-50/60 transition-colors"
      >
        <span
          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${C.navy}10`, color: C.navy }}
        >
          {module.icon}
        </span>
        <div className="flex-1 min-w-0">
          <span
            className="font-sans text-sm font-bold uppercase tracking-wider"
            style={{ color: C.accent }}
          >
            Module {module.number}
          </span>
          <h3 className="font-serif text-lg md:text-xl font-bold text-gray-900 truncate">
            {module.title}
          </h3>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 text-gray-400"
        >
          <ChevronDown size={24} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-gray-100">
              {module.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   RISK MATRIX - 5×5 color-coded
   ═══════════════════════════════════════════════════════════════════════ */

function RiskMatrix() {
  const levels = ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost Certain'];
  const impacts = ['Insignificant', 'Minor', 'Moderate', 'Major', 'Catastrophic'];

  type Rating = 'LOW' | 'MODERATE' | 'HIGH' | 'EXTREME' | 'CRITICAL';

  const matrix: Rating[][] = [
    ['LOW', 'LOW', 'MODERATE', 'HIGH', 'HIGH'],
    ['LOW', 'MODERATE', 'HIGH', 'HIGH', 'EXTREME'],
    ['MODERATE', 'HIGH', 'HIGH', 'EXTREME', 'EXTREME'],
    ['HIGH', 'HIGH', 'EXTREME', 'EXTREME', 'CRITICAL'],
    ['HIGH', 'EXTREME', 'EXTREME', 'CRITICAL', 'CRITICAL'],
  ];

  const colorMap: Record<Rating, string> = {
    LOW: '#10B981',
    MODERATE: '#FBBF24',
    HIGH: '#F97316',
    EXTREME: '#EF4444',
    CRITICAL: '#7F1D1D',
  };

  const textColorMap: Record<Rating, string> = {
    LOW: '#ffffff',
    MODERATE: '#1a1a1a',
    HIGH: '#ffffff',
    EXTREME: '#ffffff',
    CRITICAL: '#ffffff',
  };

  return (
    <div className="mb-6">
      <SubHeading>5×5 Risk Assessment Matrix</SubHeading>
      <div className="overflow-x-auto">
        <table className="w-full text-xs md:text-sm font-sans border-collapse">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300 bg-gray-100 text-left font-semibold" style={{ minWidth: 100 }}>
                Likelihood ↓ / Impact →
              </th>
              {impacts.map((imp, i) => (
                <th key={i} className="p-2 border border-gray-300 bg-gray-100 text-center font-semibold" style={{ minWidth: 90 }}>
                  {imp}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {levels.map((lvl, li) => (
              <tr key={li}>
                <td className="p-2 border border-gray-300 bg-gray-50 font-semibold">{lvl}</td>
                {matrix[li].map((rating, ci) => (
                  <td
                    key={ci}
                    className="p-2 border border-gray-300 text-center font-bold"
                    style={{
                      backgroundColor: colorMap[rating],
                      color: textColorMap[rating],
                    }}
                  >
                    {rating}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MODULE CONTENT COMPONENTS
   ═══════════════════════════════════════════════════════════════════════ */

function Module1Content() {
  return (
    <div className="space-y-8">
      {/* 1.1 Duty of Care */}
      <section>
        <SectionHeading>1.1 Duty of Care Statement</SectionHeading>
        <Paragraph>
          Hilltop Global Group ("Hilltop") recognizes its duty of care to every participant, faculty
          member, staff member, and partner stakeholder involved in its international education and
          global mobility programs. This duty reflects our legal, ethical, and organizational
          obligation to take reasonable steps to reduce foreseeable risks and respond effectively when
          incidents occur.
        </Paragraph>
        <Paragraph>Our commitment to duty of care is operationalized through:</Paragraph>
        <BulletList
          items={[
            'Pre-departure risk assessment and participant preparation',
            'On-site safety infrastructure and emergency response protocols',
            'Qualified and trained on-site staff with clear lines of authority',
            'Real-time monitoring and 24/7 emergency communication systems',
            'Incident documentation aligned with FEA standards',
            'Post-incident review and continuous improvement processes',
          ]}
        />
      </section>

      {/* 1.2 Risk Governance Structure */}
      <section>
        <SectionHeading>1.2 Risk Governance Structure</SectionHeading>
        <Paragraph>
          The following governance structure defines risk-related roles, authority, and accountability
          within Hilltop&rsquo;s programs:
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <GovernanceCard
            role="CEO / Managing Director"
            responsibilities={[
              'Ultimate risk owner for all Hilltop programs',
              'Approves risk management policies and frameworks',
              'Authorizes crisis-level responses and external communications',
              'Leads post-incident strategic review',
            ]}
          />
          <GovernanceCard
            role="Program Director"
            responsibilities={[
              'Oversees day-to-day risk management for assigned programs',
              'Conducts pre-departure risk assessments',
              'Manages incident escalation to CEO',
              'Coordinates with university partner liaison',
            ]}
          />
          <GovernanceCard
            role="On-Site Lead"
            responsibilities={[
              'First responder for all on-site incidents',
              'Manages immediate safety and welfare of participants',
              'Implements emergency protocols in real time',
              'Reports all incidents within required timeframes',
            ]}
          />
          <GovernanceCard
            role="In-Country Partners"
            responsibilities={[
              'Provide local emergency support and resources',
              'Assist with medical evacuation and hospital liaison',
              'Support cultural navigation and local authority engagement',
              'Maintain local emergency contact networks',
            ]}
          />
          <GovernanceCard
            role="University Partner Liaison"
            responsibilities={[
              'Primary communication bridge to sending institutions',
              'Ensures alignment with university risk policies',
              'Coordinates Title IX, Clery Act, and FERPA compliance',
              'Facilitates post-program reporting to partner institutions',
            ]}
          />
        </div>
      </section>

      {/* 1.3 Risk Appetite Statement */}
      <section>
        <SectionHeading>1.3 Risk Appetite Statement</SectionHeading>
        <Paragraph>
          Hilltop&rsquo;s risk appetite defines the level of risk the organization is willing to
          accept across key domains. Programs must operate within these boundaries.
        </Paragraph>
        <DataTable
          headers={['Risk Domain', 'Appetite Level', 'Parameters']}
          rows={[
            ['Health & Safety', 'Very Low', 'Zero tolerance for preventable harm; all programs require medical emergency plans and evacuation routes'],
            ['Sexual Misconduct', 'Zero Tolerance', 'Mandatory Title IX alignment; all incidents reported within 24 hours regardless of severity'],
            ['Financial Risk', 'Low–Moderate', 'Programs must carry contingency budgets ≥15% of total; all vendor contracts require cancellation clauses'],
            ['Reputational Risk', 'Low', 'No program activity should create foreseeable reputational harm to Hilltop or partner institutions'],
            ['Legal & Regulatory', 'Very Low', 'Full compliance with FERPA, Clery Act, Title IX, FEA Standards, and in-country regulations'],
            ['Operational Risk', 'Moderate', 'Acceptable within defined tolerances; mitigated through checklists, training, and redundancy planning'],
          ]}
        />
      </section>

      {/* 1.4 Risk Matrix */}
      <section>
        <SectionHeading>1.4 Risk Assessment Matrix</SectionHeading>
        <Paragraph>
          All identified risks are assessed using the following 5×5 matrix, scoring Likelihood (1–5)
          against Impact (1–5) to produce a composite risk rating:
        </Paragraph>
        <RiskMatrix />
      </section>

      {/* 1.5 Risk Level Response Requirements */}
      <section>
        <SectionHeading>1.5 Risk Level Response Requirements</SectionHeading>
        <DataTable
          headers={['Risk Level', 'Score Range', 'Required Response']}
          rows={[
            ['LOW (1–4)', '1–4', 'Monitor and document. Review during standard program debrief.'],
            ['MODERATE (5–9)', '5–9', 'Implement additional controls. Document mitigation actions. Review within 48 hours.'],
            ['HIGH (10–15)', '10–15', 'Escalate to Program Director. Implement immediate mitigation. Report to CEO within 24 hours.'],
            ['EXTREME (16–20)', '16–20', 'Escalate to CEO immediately. Activate crisis protocol. Notify university partners within 12 hours.'],
            ['CRITICAL (21–25)', '21–25', 'Full crisis activation. CEO assumes direct oversight. All stakeholders notified immediately. Consider program suspension.'],
          ]}
        />
      </section>

      {/* 1.6 Policy Review */}
      <section>
        <SectionHeading>1.6 Policy Review & Amendment</SectionHeading>
        <DataTable
          headers={['Review Type', 'Frequency', 'Responsible Party']}
          rows={[
            ['Full Policy Review', 'Annually (January)', 'CEO / Managing Director'],
            ['Post-Incident Review', 'Within 14 days of any HIGH+ incident', 'Program Director + CEO'],
            ['Regulatory Update Review', 'Within 30 days of regulatory change', 'University Partner Liaison'],
            ['Partner Feedback Integration', 'After each program cycle', 'Program Director'],
            ['Emergency Protocol Drill', 'Bi-annually (March, September)', 'On-Site Lead'],
          ]}
        />
      </section>
    </div>
  );
}

function Module2Content() {
  return (
    <div className="space-y-8">
      {/* 2.1 Partner Vetting */}
      <section>
        <SectionHeading>2.1 Partner Vetting Checklist</SectionHeading>
        <Paragraph>
          All prospective partners must be assessed against the following criteria before any program
          engagement is formalized. Each section must be fully completed and signed off by the
          Program Director.
        </Paragraph>

        <SubHeading>A. Legal & Regulatory Compliance</SubHeading>
        <CheckList
          items={[
            'Valid business registration in country of operation',
            'Tax compliance certificates current and verified',
            'Professional liability insurance in force',
            'No outstanding legal actions, sanctions, or debarments',
            'Compliance with local labor laws and employment standards',
            'Data protection and privacy policy aligned with FERPA requirements',
            'Anti-bribery and anti-corruption policy in place',
          ]}
        />

        <SubHeading>B. Safety & Security Infrastructure</SubHeading>
        <CheckList
          items={[
            'Documented emergency response plan',
            'Designated safety officer or emergency contact',
            '24/7 emergency communication capability',
            'First aid equipment and trained personnel on site',
            'Fire safety compliance (extinguishers, evacuation routes, drills)',
            'Transportation safety standards (licensed drivers, insured vehicles, maintained fleet)',
            'Background checks conducted on all staff interacting with participants',
          ]}
        />

        <SubHeading>C. Housing & Accommodation Standards</SubHeading>
        <CheckList
          items={[
            'Accommodations inspected within last 12 months',
            'Adequate security measures (locks, lighting, security personnel)',
            'Gender-appropriate housing arrangements available',
            'Accessibility accommodations available or documented limitations',
            'Clean water, sanitation, and hygiene (WASH) standards met',
            'Proximity to medical facilities documented',
            'Guest/visitor policies documented and enforced',
          ]}
        />

        <SubHeading>D. Operational Capacity</SubHeading>
        <CheckList
          items={[
            'Demonstrated experience hosting international groups',
            'References from at least 2 prior program partners',
            'Adequate staffing ratios for proposed program size',
            'Documented program delivery process with timelines',
            'Financial stability assessment (minimum 2 years operating history)',
            'Cultural competency training for staff interacting with participants',
            'Ability to accommodate dietary restrictions and medical needs',
          ]}
        />
      </section>

      {/* 2.2 Destination Risk Assessment */}
      <section>
        <SectionHeading>2.2 Destination Risk Assessment</SectionHeading>
        <Paragraph>
          Each program destination must undergo a comprehensive risk assessment covering the following
          categories. Assessments must be completed at least 60 days before program start and updated
          if conditions change.
        </Paragraph>
        <DataTable
          headers={['Risk Category', 'Assessment Elements']}
          rows={[
            ['Political Stability', 'Government stability, civil unrest history, election cycles, protest patterns'],
            ['Security Environment', 'Crime rates, terrorism threat level, travel advisories (US State Dept, UK FCDO), areas to avoid'],
            ['Health & Medical', 'Disease prevalence, vaccination requirements, quality of local healthcare, medical evacuation options'],
            ['Natural Hazards', 'Seasonal weather risks, seismic activity, flood zones, wildfire risk'],
            ['Transportation', 'Road safety standards, public transit reliability, air connectivity, emergency evacuation routes'],
            ['Legal Environment', 'Laws affecting participants (LGBTQ+ rights, drug laws, photography restrictions, press freedom)'],
            ['Cultural Considerations', 'Gender norms, religious practices, dress codes, social customs affecting participant behavior'],
            ['Communication Infrastructure', 'Mobile network coverage, internet reliability, emergency service numbers, embassy/consulate access'],
          ]}
        />
      </section>
    </div>
  );
}

function Module3Content() {
  return (
    <div className="space-y-8">
      {/* 3.1 Incident Taxonomy */}
      <section>
        <SectionHeading>3.1 FEA Standardized Incident Taxonomy</SectionHeading>
        <Paragraph>
          All incidents are classified using the Forum on Education Abroad (FEA) standardized
          taxonomy. This ensures consistency in reporting across programs and alignment with industry
          best practices.
        </Paragraph>
        <DataTable
          headers={['Category', 'Description', 'Reporting Instrument']}
          rows={[
            ['Death', 'Death of a participant, staff member, or closely associated person during program', 'Critical Incident Report + Immediate CEO Notification'],
            ['Sexual Assault', 'Any form of sexual violence, including rape, attempted rape, and sexual battery', 'Title IX Report + Critical Incident Report'],
            ['Other Sexual Misconduct', 'Sexual harassment, stalking, voyeurism, indecent exposure, non-consensual contact', 'Title IX Report + Standard Incident Report'],
            ['Physical Assault', 'Physical violence against or by a participant, including fights, attacks, and robbery with violence', 'Standard Incident Report + Police Report'],
            ['Significant Mental Health', 'Suicidal ideation, self-harm, psychotic episodes, severe anxiety/depression requiring intervention', 'Critical Incident Report + Medical Referral'],
            ['Hospitalization', 'Any inpatient medical admission, including emergency surgery and overnight observation', 'Critical Incident Report + Medical Documentation'],
            ['Significant Illness / Injury', 'Illness or injury requiring medical treatment beyond basic first aid but not hospitalization', 'Standard Incident Report + Medical Documentation'],
            ['Arrest / Detention', 'Detention by police or other authorities, including questioning, arrest, or imprisonment', 'Critical Incident Report + Legal Counsel Notification'],
            ['Missing Person', 'Participant unaccounted for and unreachable beyond established check-in protocols', 'Critical Incident Report + Local Authority Notification'],
            ['Property Crime', 'Theft, burglary, robbery (without violence), vandalism, or fraud affecting participants', 'Standard Incident Report + Police Report'],
            ['Transportation Incident', 'Vehicle accident, public transit incident, or other transportation-related event causing harm or significant disruption', 'Standard Incident Report'],
            ['Natural Disaster / Civil Unrest', 'Earthquakes, floods, political protests, coups, or other events requiring emergency shelter or evacuation', 'Critical Incident Report + Evacuation Protocol Activation'],
          ]}
        />
      </section>

      {/* 3.2 Tiered Escalation */}
      <section>
        <SectionHeading>3.2 Tiered Escalation Protocol</SectionHeading>
        <DataTable
          headers={['Tier', 'Severity', 'Notification Chain', 'Timeframe', 'Examples']}
          rows={[
            ['Tier 1', 'Low', 'On-Site Lead → Program Director', 'Document within 24 hours', 'Minor illness, lost property, cultural misunderstanding, minor schedule disruption'],
            ['Tier 2', 'Moderate', 'On-Site Lead → Program Director → CEO', 'Report within 12 hours', 'Significant illness, property crime, participant behavioral issue, transportation incident'],
            ['Tier 3', 'High', 'On-Site Lead → Program Director → CEO → University Partner', 'Report within 4 hours', 'Hospitalization, physical assault, arrest, significant mental health crisis, missing person'],
            ['Tier 4', 'Critical', 'On-Site Lead → CEO (Direct) → University Partner → Legal Counsel → Families', 'Immediate notification', 'Death, sexual assault, natural disaster, kidnapping, terrorism event, medical evacuation'],
          ]}
        />
      </section>

      {/* 3.3 Incident Reporting Workflow */}
      <section>
        <SectionHeading>3.3 Incident Reporting Workflow</SectionHeading>
        <Paragraph>
          The following 9-step workflow applies to all incidents regardless of severity. Steps must be
          followed in order, though in critical incidents Steps 1–3 may occur simultaneously.
        </Paragraph>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
          {[
            { step: 1, title: 'Discover', desc: 'Incident is identified or reported. First responder assesses immediate danger to life or safety.' },
            { step: 2, title: 'Classify', desc: 'Assign FEA incident category and determine escalation tier (1–4) using the taxonomy above.' },
            { step: 3, title: 'Escalate', desc: 'Notify the appropriate chain per the tiered escalation protocol within required timeframes.' },
            { step: 4, title: 'Secure', desc: 'Ensure immediate safety of all affected persons. Activate emergency services if needed. Secure the scene.' },
            { step: 5, title: 'Document', desc: 'Complete the appropriate incident report form with all available facts. Avoid speculation or opinion.' },
            { step: 6, title: 'Notify', desc: 'Inform external stakeholders per communication standards: university partners, families, authorities, insurers.' },
            { step: 7, title: 'Support', desc: 'Provide ongoing support to affected persons: medical care, counseling, accommodation, travel arrangements.' },
            { step: 8, title: 'Review', desc: 'Conduct post-incident review within 14 days. Identify root causes, contributing factors, and system gaps.' },
            { step: 9, title: 'Close', desc: 'Document lessons learned. Update policies, checklists, or training as needed. Archive all records securely.' },
          ].map((s) => (
            <div
              key={s.step}
              className="rounded-xl border border-gray-200 p-4 bg-gray-50/60"
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ backgroundColor: C.navy }}
                >
                  {s.step}
                </span>
                <span className="font-serif font-bold text-sm" style={{ color: C.dark }}>
                  {s.title}
                </span>
              </div>
              <p className="text-xs font-sans text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3.4 Communication Standards */}
      <section>
        <SectionHeading>3.4 Incident Communication Standards</SectionHeading>
        <Paragraph>
          All incident communications must adhere to the following standards to ensure accuracy,
          sensitivity, and legal compliance:
        </Paragraph>
        <DataTable
          headers={['Element', 'Standard']}
          rows={[
            ['Timeliness', 'Communications issued within timeframes specified by escalation tier. No delays for "more information."'],
            ['Accuracy', 'Only confirmed facts are communicated. Speculation, rumors, and unverified details are excluded.'],
            ['Confidentiality', 'Participant names are not shared beyond authorized stakeholders. FERPA compliance is mandatory.'],
            ['Sensitivity', 'Language must be trauma-informed, culturally appropriate, and free of blame or judgment.'],
            ['Chain of Communication', 'All external communications are approved by CEO or designated spokesperson. No unauthorized media contact.'],
            ['Documentation', 'All communications (calls, emails, messages) are logged with date, time, parties, and content summary.'],
            ['Family Notification', 'Families are notified by phone when possible, followed by written confirmation. Never notify by text or social media.'],
            ['Media Protocol', 'All media inquiries are directed to CEO. No staff member may issue public statements without authorization.'],
          ]}
        />
      </section>
    </div>
  );
}

function Module4Content() {
  return (
    <div className="space-y-8">
      {/* 4.1 Pre-Departure Checklist */}
      <section>
        <SectionHeading>4.1 Pre-Departure Checklist</SectionHeading>

        <SubHeading>A. Documentation & Compliance (30+ Days Before Departure)</SubHeading>
        <CheckList
          items={[
            'Participant emergency contact forms collected and verified',
            'Medical disclosure forms completed (allergies, medications, conditions)',
            'Travel insurance enrollment confirmed for all participants',
            'Passport validity verified (minimum 6 months beyond program end)',
            'Visa requirements researched and applications initiated',
            'Assumption of risk and liability waiver signed by all participants',
            'Code of conduct signed by all participants',
            'FERPA authorization forms completed',
            'Title IX resource information distributed',
            'Emergency contact card prepared for each participant',
            'Flight itineraries collected and logged',
            'Accommodation confirmations received and verified',
            'In-country partner agreements signed and countersigned',
            'Program budget finalized with 15% contingency reserve',
          ]}
        />

        <SubHeading>B. Participant Preparation (14+ Days Before Departure)</SubHeading>
        <CheckList
          items={[
            'Pre-departure orientation session completed (in-person or virtual)',
            'Cultural preparation materials distributed and reviewed',
            'Health and safety briefing delivered (including country-specific risks)',
            'Emergency protocol overview provided (including emergency numbers)',
            'Communication plan shared (check-in schedule, group chat setup)',
            'Packing guidelines distributed (appropriate attire, medications, tech)',
            'Travel day logistics confirmed (airport meeting point, ground transport)',
            'Buddy system or cohort groups assigned',
            'Mental health resources and support contacts shared',
            'Dietary needs and accommodations confirmed with in-country partners',
          ]}
        />

        <SubHeading>C. On-Site Readiness (7 Days Before Departure)</SubHeading>
        <CheckList
          items={[
            'On-site lead confirmed and briefed on all participant profiles',
            'Emergency response kit assembled (first aid, medications, documents)',
            'Local emergency numbers verified and programmed into staff phones',
            'Nearest hospital, police station, and embassy/consulate mapped',
            'Transportation arrangements confirmed (airport pickup, daily transit)',
            'Accommodation walk-through completed or confirmation received from partner',
            'Program schedule finalized and shared with all staff and partners',
            'Weather forecast reviewed and contingency plans updated',
            'Communication equipment tested (phones, WhatsApp groups, satellite phone if applicable)',
            'Cash and payment methods confirmed (local currency, backup cards)',
          ]}
        />
      </section>

      {/* 4.2 On-Site Emergency Pocket Guide */}
      <section>
        <SectionHeading>4.2 On-Site Emergency Pocket Guide</SectionHeading>
        <Paragraph>
          The following quick-reference protocols should be carried by all on-site staff at all times.
          These are immediate-action steps; full procedures are in the Incident Response System
          (Module 3).
        </Paragraph>

        <SubHeading>Medical Emergency</SubHeading>
        <NumberedList
          items={[
            'Ensure scene safety - do not put yourself at risk',
            'Call local emergency number (Ghana: 112/193; Rwanda: 912)',
            'Administer first aid if trained and safe to do so',
            'Do NOT move the person unless in immediate danger',
            'Contact On-Site Lead immediately (if not already present)',
            'Accompany participant to medical facility',
            'Notify Program Director within 1 hour',
            'Begin incident documentation immediately',
          ]}
        />

        <SubHeading>Missing Student Protocol</SubHeading>
        <NumberedList
          items={[
            'Attempt contact via phone, WhatsApp, and all known channels',
            'Contact roommate, buddy, and known associates',
            'Check last known location and planned itinerary',
            'If unaccounted for after 2 hours (or 1 hour after dark), notify Program Director',
            'If unaccounted for after 4 hours, notify local police and CEO',
            'Activate group check-in - account for all other participants',
            'Preserve any communications or location data',
            'Do not post on social media or contact media',
          ]}
        />

        <SubHeading>Sexual Assault Response</SubHeading>
        <NumberedList
          items={[
            'Believe and support the reporting person - do not question their account',
            'Ensure immediate physical safety',
            'Ask: "Do you need medical attention?" - offer to accompany to hospital',
            'Inform the person of their right to report to local police (do not pressure)',
            'Notify Program Director and CEO immediately (Tier 4 escalation)',
            'Preserve any physical evidence - advise not to shower, change clothes, or eat/drink',
            'Connect with Title IX coordinator at sending institution within 24 hours',
            'Provide access to counseling resources (local and remote)',
            'Document only with the consent of the affected person; maintain strict confidentiality',
          ]}
        />

        <SubHeading>Natural Disaster / Civil Unrest</SubHeading>
        <NumberedList
          items={[
            'Move all participants to nearest safe shelter',
            'Account for all participants immediately (roll call)',
            'Monitor official sources: local authorities, US Embassy, FCDO',
            'Notify CEO and Program Director immediately',
            'Implement communication plan - establish single point of contact for all external queries',
            'Assess need for evacuation - coordinate with embassy and in-country partners',
            'Do not allow participants to travel independently or leave the group',
            'Document all decisions and timeline for post-incident review',
          ]}
        />

        <SubHeading>Arrest or Detention</SubHeading>
        <NumberedList
          items={[
            'Remain calm - do not interfere with authorities',
            'Note the detaining authority, location, and stated reason',
            'Contact CEO and Program Director immediately (Tier 3/4 escalation)',
            'Contact nearest US Embassy or Consulate',
            'Engage local legal counsel (pre-identified in partner agreements)',
            'Do not advise the participant to make statements without legal counsel',
            'Notify university partner liaison',
            'Document all interactions with authorities',
          ]}
        />
      </section>

      {/* 4.3 Post-Program Review */}
      <section>
        <SectionHeading>4.3 Post-Program Review Checklist</SectionHeading>
        <Paragraph>
          The following review must be completed within 30 days of program conclusion:
        </Paragraph>
        <CheckList
          items={[
            'All incident reports finalized and filed',
            'Post-incident reviews completed for any HIGH+ incidents',
            'Participant satisfaction surveys collected and analyzed',
            'Partner performance evaluation completed',
            'Financial reconciliation completed (actual vs. budget)',
            'Insurance claims submitted (if applicable)',
            'Lessons learned document drafted',
            'Risk register updated with new findings',
            'Staff debrief conducted (all on-site personnel)',
            'University partner debrief conducted',
            'Policy amendments identified and scheduled',
            'Program report submitted to university partner within agreed timeframe',
          ]}
        />
      </section>
    </div>
  );
}

function Module5Content() {
  return (
    <div className="space-y-8">
      {/* 5.1 Real-Time Monitoring */}
      <section>
        <SectionHeading>5.1 Real-Time Monitoring Plan</SectionHeading>
        <Paragraph>
          Hilltop maintains continuous monitoring across the following domains throughout all program
          operations:
        </Paragraph>
        <DataTable
          headers={['Monitoring Domain', 'Tools & Sources', 'Frequency', 'Responsible Party']}
          rows={[
            ['Travel Advisories', 'US State Dept, UK FCDO, International SOS, local embassy alerts', 'Daily', 'Program Director'],
            ['Health Alerts', 'WHO, CDC, local Ministry of Health, International SOS', 'Daily', 'On-Site Lead'],
            ['Weather & Natural Hazards', 'National weather services, GDACS, ReliefWeb', 'Daily (hourly during events)', 'On-Site Lead'],
            ['Political & Security', 'Local news, embassy alerts, International Crisis Group', 'Daily', 'Program Director'],
            ['Participant Welfare', 'Daily check-ins, buddy system reports, staff observations', 'Daily (minimum)', 'On-Site Lead'],
            ['Social Media & Reputation', 'Google Alerts, social media monitoring for program mentions', 'Daily', 'CEO / Communications'],
          ]}
        />
      </section>

      {/* 5.2 Crisis Communication Protocol */}
      <section>
        <SectionHeading>5.2 Crisis Communication Protocol</SectionHeading>
        <Paragraph>
          In the event of a crisis (Tier 3 or 4 incident), the following communication chain is
          activated in priority order:
        </Paragraph>
        <DataTable
          headers={['Priority', 'Stakeholder', 'Method', 'Timeframe']}
          rows={[
            ['1', 'Emergency Services (local)', 'Phone - local emergency number', 'Immediate'],
            ['2', 'CEO / Managing Director', 'Phone + WhatsApp', 'Within 15 minutes'],
            ['3', 'US Embassy / Consulate', 'Phone', 'Within 30 minutes'],
            ['4', 'University Partner Liaison', 'Phone + Email', 'Within 1 hour'],
            ['5', 'Participant Families', 'Phone (primary) + Email (follow-up)', 'Within 2 hours'],
            ['6', 'Insurance Provider', 'Phone + Email', 'Within 4 hours'],
            ['7', 'Legal Counsel', 'Phone + Email', 'Within 4 hours'],
            ['8', 'Board / Advisors', 'Email + Phone', 'Within 12 hours'],
          ]}
        />

        <SubHeading>Crisis Communication Rules</SubHeading>
        <BulletList
          items={[
            'Single spokesperson: CEO or designated alternate. No other staff may make external statements.',
            'Facts only: No speculation, no preliminary conclusions, no blame assignment.',
            'FERPA compliance: No participant-identifying information shared without authorization.',
            'Documentation: Every communication is logged in the crisis communication log (date, time, parties, content).',
            'Social media blackout: No staff or participant social media posts about the incident until authorized by CEO.',
          ]}
        />
      </section>

      {/* 5.3 Regulatory Compliance Matrix */}
      <section>
        <SectionHeading>5.3 Regulatory Compliance Matrix</SectionHeading>
        <DataTable
          headers={['Regulation / Standard', 'Scope', 'Key Requirements', 'Hilltop Compliance Mechanism']}
          rows={[
            [
              'FERPA',
              'Student education records privacy',
              'No disclosure of student records without consent; secure data storage; right of access',
              'Data handling policy; encrypted storage; FERPA authorization forms; staff training',
            ],
            [
              'Title IX',
              'Sex-based discrimination and sexual violence',
              'Prompt response to reports; equitable investigation; supportive measures; no retaliation',
              'Title IX reporting protocol; trained staff; university coordinator liaison; survivor support resources',
            ],
            [
              'Clery Act',
              'Campus security and crime reporting',
              'Timely warnings; annual security report; crime statistics for program locations',
              'Incident reporting system; location-based crime data; annual compliance audit',
            ],
            [
              'FEA Standards',
              'Good practice in education abroad',
              'Health, safety, and security standards; incident reporting; organizational ethics',
              'FEA-aligned incident taxonomy; risk management framework; annual self-assessment',
            ],
            [
              'ISO 31030:2021',
              'Travel risk management',
              'Systematic approach to managing travel-related risks; duty of care framework',
              'Pre-travel risk assessment; monitoring plan; incident response system; continuous improvement',
            ],
          ]}
        />
      </section>

      {/* 5.4 Technology & Digital Infrastructure */}
      <section>
        <SectionHeading>5.4 Technology & Digital Infrastructure Requirements</SectionHeading>
        <Paragraph>
          Hilltop maintains the following technology capabilities for risk management across all
          programs:
        </Paragraph>
        <DataTable
          headers={['Capability', 'Tool / Platform', 'Purpose']}
          rows={[
            ['Emergency Communication', 'WhatsApp Business + SMS backup + Satellite phone (remote areas)', '24/7 reachable communication with all participants and staff'],
            ['Location Monitoring', 'Shared Google Maps / WhatsApp live location (opt-in during excursions)', 'Real-time location awareness during high-risk activities or travel days'],
            ['Incident Documentation', 'Standardized digital forms (Google Forms / Typeform) + cloud storage', 'Consistent, timestamped, and centralized incident records'],
            ['Document Management', 'Google Workspace / SharePoint with role-based access', 'Secure storage of waivers, medical forms, incident reports, partner agreements'],
            ['Monitoring & Alerts', 'International SOS / Travel Tracker subscription + custom alert feeds', 'Automated alerts for health, security, weather, and political developments'],
            ['Data Security', 'End-to-end encryption for participant data; 2FA for all staff accounts', 'FERPA-compliant data protection; breach prevention'],
          ]}
        />
      </section>

      {/* 5.5 Annual Compliance Calendar */}
      <section>
        <SectionHeading>5.5 Annual Compliance Calendar</SectionHeading>
        <DataTable
          headers={['Month', 'Activity', 'Responsible Party']}
          rows={[
            ['January', 'Annual policy review and update; risk register refresh', 'CEO + Program Director'],
            ['February', 'Staff training: incident response, Title IX, FERPA refresher', 'Program Director'],
            ['March', 'Emergency protocol drill (tabletop exercise)', 'On-Site Lead + Program Director'],
            ['April', 'Pre-summer program risk assessments and partner vetting', 'Program Director'],
            ['May', 'Technology audit: communication systems, data security, monitoring tools', 'CEO + IT Support'],
            ['June', 'Mid-year compliance checkpoint; summer program launch monitoring', 'CEO'],
            ['July', 'Active program monitoring and real-time risk management', 'On-Site Lead + Program Director'],
            ['August', 'Post-summer program reviews and lessons learned', 'Program Director'],
            ['September', 'Emergency protocol drill (tabletop exercise)', 'On-Site Lead + Program Director'],
            ['October', 'Partner performance reviews and contract renewals', 'Program Director + CEO'],
            ['November', 'Regulatory update review (FERPA, Title IX, Clery, FEA, ISO)', 'University Partner Liaison'],
            ['December', 'Annual compliance report; board briefing; insurance renewal', 'CEO'],
          ]}
        />
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */

export default function RiskManagementContent() {
  const [openModule, setOpenModule] = useState<number | null>(null);

  const toggle = (n: number) => setOpenModule(openModule === n ? null : n);

  const modules: ModuleData[] = [
    {
      number: 1,
      title: 'Policy & Governance Foundation',
      icon: <Shield size={22} />,
      content: <Module1Content />,
    },
    {
      number: 2,
      title: 'Due Diligence & Partner Assessment',
      icon: <FileCheck size={22} />,
      content: <Module2Content />,
    },
    {
      number: 3,
      title: 'Incident Reporting & Response System',
      icon: <AlertTriangle size={22} />,
      content: <Module3Content />,
    },
    {
      number: 4,
      title: 'Operational Checklists',
      icon: <ClipboardList size={22} />,
      content: <Module4Content />,
    },
    {
      number: 5,
      title: 'Technology & 2026 Compliance',
      icon: <Monitor size={22} />,
      content: <Module5Content />,
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden flex items-end"
        style={{ backgroundColor: C.dark, minHeight: '60vh' }}
      >
        <AfricaWatermark className="absolute right-0 top-0 h-full w-auto opacity-[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c] via-transparent to-transparent" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16 pt-40 md:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-4"
              style={{ color: C.accent }}
            >
              Hilltop Global Group
            </p>
            <h1
              className="font-serif font-extrabold text-white leading-[1.05] mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.2rem)' }}
            >
              Risk Management Infrastructure
            </h1>
            <p className="font-sans text-white/65 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              International Education &amp; Global Mobility Programs
            </p>

            <div className="flex flex-wrap gap-3">
              {['FEA Standards', 'ISO 31030:2021', 'FERPA / Title IX / Clery Act'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-wider border"
                  style={{
                    color: C.accent,
                    borderColor: `${C.accent}40`,
                    backgroundColor: `${C.accent}10`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── EXECUTIVE SUMMARY ─── */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        <DottedAfricaMap
          className="absolute right-8 top-12 hidden lg:block"
          opacity={0.05}
          color={C.navy}
        />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <div className="max-w-3xl">
              <Eyebrow>Executive Summary</Eyebrow>
              <h2
                className="font-serif text-3xl md:text-4xl font-bold mb-6"
                style={{ color: C.dark }}
              >
                A Comprehensive Framework for Participant Safety
              </h2>
              <KenteDivider className="mb-8" />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="max-w-3xl space-y-4 font-sans text-gray-700 leading-relaxed">
              <p>
                This Risk Management Infrastructure establishes Hilltop Global Group&rsquo;s
                comprehensive framework for identifying, assessing, mitigating, and responding to
                risks across all international education and global mobility programs. The framework
                is designed to meet or exceed the standards set by the Forum on Education Abroad
                (FEA), ISO 31030:2021 (Travel Risk Management), and applicable U.S. federal
                regulations including FERPA, Title IX, and the Clery Act.
              </p>
              <p>
                The infrastructure is organized into five integrated modules, each addressing a
                critical dimension of risk management:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                {[
                  { n: 1, label: 'Policy & Governance Foundation', icon: <Shield size={18} /> },
                  { n: 2, label: 'Due Diligence & Partner Assessment', icon: <FileCheck size={18} /> },
                  { n: 3, label: 'Incident Reporting & Response System', icon: <AlertTriangle size={18} /> },
                  { n: 4, label: 'Operational Checklists', icon: <ClipboardList size={18} /> },
                  { n: 5, label: 'Technology & 2026 Compliance', icon: <Monitor size={18} /> },
                ].map((m) => (
                  <button
                    key={m.n}
                    onClick={() => {
                      setOpenModule(m.n);
                      document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-start gap-3 text-left p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all bg-gray-50/50 group"
                  >
                    <span
                      className="flex-shrink-0 mt-0.5 text-white w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: C.navy }}
                    >
                      {m.icon}
                    </span>
                    <div>
                      <span
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: C.accent }}
                      >
                        Module {m.n}
                      </span>
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                        {m.label}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <p className="pt-4">
                Together, these modules provide Hilltop staff, university partners, and program
                stakeholders with actionable tools, clear protocols, and a governance structure that
                embeds safety into every phase of program design, delivery, and review.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── MODULE ACCORDIONS ─── */}
      <section
        id="modules"
        className="relative py-20 md:py-28"
        style={{ backgroundColor: '#f8f9fb' }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <Eyebrow>Framework Modules</Eyebrow>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold mb-10"
              style={{ color: C.dark }}
            >
              Complete Risk Management Framework
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {modules.map((mod) => (
              <FadeIn key={mod.number} delay={mod.number * 0.05}>
                <ModuleAccordion
                  module={mod}
                  isOpen={openModule === mod.number}
                  onToggle={() => toggle(mod.number)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOCUMENT CONTROL ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <FadeIn>
            <div
              className="rounded-2xl p-8 md:p-10 border"
              style={{
                backgroundColor: `${C.navy}05`,
                borderColor: `${C.navy}15`,
              }}
            >
              <h3 className="font-serif text-xl font-bold mb-6" style={{ color: C.navy }}>
                Document Control
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans text-sm">
                <div>
                  <p className="text-gray-500 font-medium mb-1">Document Title</p>
                  <p className="text-gray-900 font-semibold">
                    Risk Management Infrastructure
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium mb-1">Version</p>
                  <p className="text-gray-900 font-semibold">1.0</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium mb-1">Effective Date</p>
                  <p className="text-gray-900 font-semibold">March 25, 2026</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium mb-1">Classification</p>
                  <p className="text-gray-900 font-semibold">Internal - Confidential</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium mb-1">Owner</p>
                  <p className="text-gray-900 font-semibold">CEO / Managing Director</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium mb-1">Review Cycle</p>
                  <p className="text-gray-900 font-semibold">Annual (January)</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium mb-1">Next Review</p>
                  <p className="text-gray-900 font-semibold">January 2027</p>
                </div>
                <div>
                  <p className="text-gray-500 font-medium mb-1">Approved By</p>
                  <p className="text-gray-900 font-semibold">Hilltop Global Group Leadership</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t" style={{ borderColor: `${C.navy}15` }}>
                <p className="text-xs text-gray-500 font-sans leading-relaxed">
                  This document is the property of Hilltop Global Group and is classified as Internal
                  - Confidential. Distribution is limited to authorized Hilltop staff, contracted
                  partners with executed NDAs, and university partners under active program
                  agreements. Unauthorized reproduction or distribution is prohibited. All inquiries
                  should be directed to the CEO / Managing Director.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
