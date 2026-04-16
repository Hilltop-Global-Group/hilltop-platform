'use client';

import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import FadeIn from '../FadeIn';
import { KenteDivider, ArrowCTA, DecorativeUnderline } from '../shared/HilltopBrand';
import { teamMembers } from '@/lib/team';

export default function Team() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="mb-4">
            <KenteDivider count={5} color="#F4A261" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
                The Team
              </p>
              <h2
                className="font-serif font-extrabold text-black leading-none"
                style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
              >
                Meet the People<br className="hidden md:block" /> Behind{' '}
              <span className="relative inline-block whitespace-nowrap">
                Hilltop
                <DecorativeUnderline />
              </span>
              </h2>
            </div>
            <p className="font-sans text-gray-500 text-base max-w-xs leading-relaxed">
              Dedicated professionals building bridges between students and opportunities across Africa.
            </p>
          </div>
          <div className="border-t border-gray-200 mb-12" />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.15}>
              {member.image ? (
                <div className="group relative bg-white overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                  <div className="relative h-[500px] overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${member.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-sm font-bold mb-2 uppercase tracking-wide" style={{ color: '#F4A261' }}>
                        {member.role}
                      </p>
                      <h3 className="font-serif font-bold text-3xl mb-6" style={{ color: '#FFFFFF' }}>
                        {member.name}
                      </h3>

                      {member.linkedin && (
                        <div className="flex gap-3">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                            style={{ backgroundColor: '#F4A261' }}
                            aria-label={`${member.name} LinkedIn`}
                          >
                            <Linkedin size={20} style={{ color: '#1D3160' }} />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="group relative bg-white overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 flex flex-col h-full min-h-[280px] p-8">
                  <span
                    className="self-start font-sans text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 mb-5"
                    style={{ backgroundColor: '#F4A261', color: '#080f1c' }}
                  >
                    {member.category === 'leadership' ? 'Leadership' : 'Staff'}
                  </span>
                  <p className="text-sm font-bold mb-2 uppercase tracking-wide" style={{ color: '#F4A261' }}>
                    {member.role}
                  </p>
                  <h3 className="font-serif font-bold text-3xl mb-6" style={{ color: '#080f1c' }}>
                    {member.name}
                  </h3>
                  {member.linkedin && (
                    <div className="mt-auto flex gap-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-full border border-gray-200 hover:border-[#1D3160] transition-all duration-300"
                        style={{ color: '#1D3160' }}
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  )}
                </div>
              )}
            </FadeIn>
          ))}
        </div>

        {/* Link to full team page */}
        <FadeIn delay={0.3}>
          <div className="mt-14 pt-10 border-t border-gray-200">
            <Link
              href="/team"
              className="group inline-flex items-center gap-3 font-sans font-semibold text-sm uppercase tracking-[0.15em] border-b pb-1 transition-colors duration-200"
              style={{ color: '#080f1c', borderColor: '#080f1c' }}
            >
              View Full Team Page
              <ArrowCTA />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
