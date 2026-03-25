'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X, Clock, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const APPLICATION_DEADLINE = new Date('2026-04-15T23:59:59');

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

export default function EducationAbroadBanner() {
  const countdown = useCountdown(APPLICATION_DEADLINE);
  const [dismissed, setDismissed] = useState(false);

  const deadlinePassed =
    countdown.days === 0 &&
    countdown.hours === 0 &&
    countdown.minutes === 0 &&
    countdown.seconds === 0;

  if (deadlinePassed) return null;

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[60]"
        >
          <div style={{ backgroundColor: '#1D3160' }} className="shadow-[0_-4px_20px_rgba(0,0,0,0.25)]">
            {/* Close button: always top-right */}
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-2 right-2 sm:hidden p-1.5 text-white/40 hover:text-white transition-colors duration-200 z-10"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>

            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-2.5 sm:py-3">

              {/* Mobile: stacked two-row layout */}
              <div className="flex flex-col gap-2 sm:hidden">
                {/* Row 1: label + countdown */}
                <div className="flex items-center justify-between gap-2 pr-6">
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} style={{ color: '#F4A261' }} />
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-white">
                      Ghana &amp; Rwanda Summer 2026 Internship Program
                    </span>
                  </div>
                </div>
                {/* Row 2: deadline label + countdown + CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.1em] whitespace-nowrap" style={{ color: '#F4A261' }}>
                      Apply by:
                    </span>
                    {[
                      { label: 'd', value: countdown.days },
                      { label: 'h', value: countdown.hours },
                      { label: 'm', value: countdown.minutes },
                      { label: 's', value: countdown.seconds },
                    ].map((unit) => (
                      <div key={unit.label} className="flex items-baseline gap-px">
                        <span className="font-mono font-bold text-white text-base tabular-nums">
                          {String(unit.value).padStart(2, '0')}
                        </span>
                        <span className="font-sans text-white/40 text-[9px] uppercase">
                          {unit.label}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/internships/current"
                      className="inline-flex items-center gap-1 px-3 py-1.5 font-sans font-semibold text-[10px] uppercase tracking-[0.1em] text-white hover:opacity-90"
                      style={{ backgroundColor: '#F4A261' }}
                    >
                      Programs
                      <ArrowRight size={10} />
                    </Link>
                    <a
                      href="https://8xlyl7wsuni.typeform.com/to/ygqGReCF"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 font-sans font-semibold text-[10px] uppercase tracking-[0.1em] text-white hover:opacity-90"
                      style={{ backgroundColor: '#10B981' }}
                    >
                      Apply
                    </a>
                  </div>
                </div>
              </div>

              {/* Desktop: single-row layout */}
              <div className="hidden sm:flex items-center justify-between gap-4">
                <div className="flex items-center gap-5 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Clock size={14} style={{ color: '#F4A261' }} />
                    <span className="font-sans text-xs font-bold uppercase tracking-[0.12em] text-white whitespace-nowrap">
                      Ghana &amp; Rwanda Summer 2026 Internship Program
                    </span>
                  </div>

                  <div className="w-px h-5 bg-white/20 flex-shrink-0" />

                  <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.1em] flex-shrink-0 whitespace-nowrap" style={{ color: '#F4A261' }}>
                    Application Deadline:
                  </span>

                  <div className="flex items-center gap-2.5 flex-shrink-0">
                    {[
                      { label: 'd', value: countdown.days },
                      { label: 'h', value: countdown.hours },
                      { label: 'm', value: countdown.minutes },
                      { label: 's', value: countdown.seconds },
                    ].map((unit) => (
                      <div key={unit.label} className="flex items-baseline gap-px">
                        <span className="font-mono font-bold text-white text-base tabular-nums">
                          {String(unit.value).padStart(2, '0')}
                        </span>
                        <span className="font-sans text-white/40 text-[10px] uppercase">
                          {unit.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <Link
                    href="/internships/current"
                    className="inline-flex items-center gap-1 px-4 py-1.5 font-sans font-semibold text-xs uppercase tracking-[0.1em] text-white hover:opacity-90"
                    style={{ backgroundColor: '#F4A261' }}
                  >
                    View Programs
                    <ArrowRight size={12} />
                  </Link>
                  <a
                    href="https://8xlyl7wsuni.typeform.com/to/ygqGReCF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-4 py-1.5 font-sans font-semibold text-xs uppercase tracking-[0.1em] text-white hover:opacity-90"
                    style={{ backgroundColor: '#10B981' }}
                  >
                    Apply Now
                  </a>
                  <button
                    onClick={() => setDismissed(true)}
                    className="p-1.5 text-white/40 hover:text-white transition-colors duration-200"
                    aria-label="Dismiss"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
