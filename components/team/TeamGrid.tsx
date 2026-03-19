'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import FadeIn from '../FadeIn';
import { KenteDivider, DecorativeUnderline } from '../shared/HilltopBrand';
import { teamMembers, type TeamMember } from '@/lib/team';

type FilterCategory = 'all' | 'leadership' | 'staff';

const filters: { label: string; value: FilterCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Leadership', value: 'leadership' },
  { label: 'Staff', value: 'staff' },
];

export default function TeamGrid() {
  const [active, setActive] = useState<FilterCategory>('all');

  const filtered = active === 'all'
    ? teamMembers
    : teamMembers.filter((m) => m.category === active);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-4">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
                Our People
              </p>
              <h2
                className="font-serif font-extrabold leading-none"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', color: '#080f1c' }}
              >
                Dreamers, Builders,{' '}
              <span className="relative inline-block whitespace-nowrap">
                Doers
                <DecorativeUnderline />
              </span>
              </h2>
            </div>

            {/* Filter tabs . GlobalGlimpse style */}
            <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 p-1 self-start md:self-auto">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={`relative px-5 py-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-200 ${
                    active === f.value
                      ? 'bg-white text-black shadow-sm'
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {f.label}
                  {active === f.value && (
                    <span
                      className="absolute bottom-0 left-2 right-2 h-[2px]"
                      style={{ backgroundColor: '#F4A261' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
          <KenteDivider className="mb-12" />
        </FadeIn>

        {/* Team grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100"
          >
            {filtered.map((member: TeamMember, index: number) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <FadeIn delay={index * 0.1}>
      <div className="group bg-white overflow-hidden flex flex-col h-full">

        {/* Photo */}
        <div className="relative overflow-hidden" style={{ height: '320px' }}>
          <div
            className="absolute inset-0 bg-cover bg-top transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${member.image}')` }}
          />
          {/* Gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/70 via-transparent to-transparent" />

          {/* Role pill */}
          <div className="absolute top-4 left-4">
            <span
              className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5"
              style={{ backgroundColor: '#F4A261', color: '#080f1c' }}
            >
              {member.category === 'leadership' ? 'Leadership' : 'Staff'}
            </span>
          </div>
        </div>

        {/* Text content */}
        <div className="p-7 flex flex-col flex-1 border-t-0 border border-gray-100">
          <div className="w-6 h-[3px] mb-4" style={{ backgroundColor: '#F4A261' }} />
          <h3 className="font-serif font-bold text-xl mb-1" style={{ color: '#080f1c' }}>
            {member.name}
          </h3>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: '#F4A261' }}>
            {member.role}
          </p>
          {member.bio && (
            <p className="font-sans text-gray-500 text-sm leading-relaxed flex-1">
              {member.bio}
            </p>
          )}
          <div className="mt-5 pt-5 border-t border-gray-100">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 hover:text-black transition-colors duration-200"
              aria-label={`${member.name} on LinkedIn`}
            >
              <Linkedin size={14} />
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </FadeIn>
  );
}
