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
            <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3 sm:py-3.5">
              <div className="flex items-center justify-between gap-3 sm:gap-4">

                {/* Left: label + countdown */}
                <div className="flex items-center gap-3 sm:gap-5 flex-1 min-w-0 overflow-x-auto">
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Clock size={14} style={{ color: '#F4A261' }} />
                    <span className="font-sans text-[10px] sm:text-xs font-bold uppercase tracking-[0.12em] text-white whitespace-nowrap">
                      Ghana &amp; Rwanda Summer 2026
                    </span>
                  </div>

                  <div className="hidden sm:block w-px h-5 bg-white/20 flex-shrink-0" />

                  <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
                    {[
                      { label: 'd', value: countdown.days },
                      { label: 'h', value: countdown.hours },
                      { label: 'm', value: countdown.minutes },
                      { label: 's', value: countdown.seconds },
                    ].map((unit) => (
                      <div key={unit.label} className="flex items-baseline gap-px">
                        <span className="font-mono font-bold text-white text-sm sm:text-base tabular-nums">
                          {String(unit.value).padStart(2, '0')}
                        </span>
                        <span className="font-sans text-white/40 text-[9px] sm:text-[10px] uppercase">
                          {unit.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: CTAs + close */}
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  <Link
                    href="/internships/current"
                    className="inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 font-sans font-semibold text-[10px] sm:text-xs uppercase tracking-[0.1em] text-white transition-opacity duration-200 hover:opacity-90"
                    style={{ backgroundColor: '#F4A261' }}
                  >
                    Programs
                    <ArrowRight size={11} />
                  </Link>
                  <a
                    href="https://8xlyl7wsuni.typeform.com/to/ygqGReCF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 font-sans font-semibold text-[10px] sm:text-xs uppercase tracking-[0.1em] text-white transition-opacity duration-200 hover:opacity-90"
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
