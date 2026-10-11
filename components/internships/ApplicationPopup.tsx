'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Clock, ArrowRight } from 'lucide-react';
import {
  APPLICATIONS_OPEN,
  APPLICATIONS_CLOSE,
  APPLICATIONS_OPEN_LABEL,
  APPLICATIONS_CLOSE_LABEL,
  GOOGLE_FORM_URL,
  isFormReady,
  program,
} from '@/lib/ghana-2027-data';

const STORAGE_KEY = 'hilltop-ghana-2027-popup-dismissed';

type Phase = 'before-open' | 'open' | 'closed';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function split(ms: number): Countdown {
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

/**
 * Bottom-right popup promoting the current Ghana application cycle.
 *
 * Replaces the old full-width EducationAbroadBanner and the BMCC video popup.
 * All dates come from lib/ghana-2027-data so there is one source of truth.
 * The countdown is computed only on the client to avoid a hydration mismatch.
 */
export default function ApplicationPopup() {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<Phase | null>(null);
  const [countdown, setCountdown] = useState<Countdown | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const opensIn = APPLICATIONS_OPEN.getTime() - now;
      const closesIn = APPLICATIONS_CLOSE.getTime() - now;

      if (closesIn <= 0) {
        setPhase('closed');
        setCountdown(null);
        return;
      }
      if (opensIn > 0) {
        setPhase('before-open');
        setCountdown(split(opensIn));
        return;
      }
      setPhase('open');
      setCountdown(split(closesIn));
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (phase === null || phase === 'closed') return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === '1') return;
    } catch {
      // sessionStorage unavailable, show anyway
    }
    const t = window.setTimeout(() => setOpen(true), 1500);
    return () => window.clearTimeout(t);
  }, [phase]);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  };

  if (phase === null || phase === 'closed' || countdown === null) return null;

  const isBeforeOpen = phase === 'before-open';
  const heading = isBeforeOpen ? 'Applications open soon' : 'Applications are open';
  const subline = isBeforeOpen
    ? `Opens ${APPLICATIONS_OPEN_LABEL}`
    : `Closes ${APPLICATIONS_CLOSE_LABEL}`;
  const showApply = !isBeforeOpen && isFormReady();

  const units = [
    { label: 'days', value: countdown.days },
    { label: 'hrs', value: countdown.hours },
    { label: 'min', value: countdown.minutes },
    { label: 'sec', value: countdown.seconds },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="fixed bottom-4 right-4 z-[100] w-[calc(100vw-2rem)] max-w-[340px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
          style={{ backgroundColor: '#1D3160' }}
          initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: reduceMotion ? 0 : 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          role="complementary"
          aria-labelledby="ghana-popup-title"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 px-4 pt-4 pb-3">
            <div className="min-w-0">
              <p
                className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5"
                style={{ color: '#F4A261' }}
              >
                {heading}
              </p>
              <p id="ghana-popup-title" className="font-serif font-bold text-white text-lg leading-snug">
                {program.name}
              </p>
            </div>
            <button
              type="button"
              onClick={dismiss}
              className="p-1 -mt-1 -mr-1 text-white/50 hover:text-white transition-colors duration-150 flex-shrink-0"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>
          </div>

          {/* Countdown */}
          <div className="px-4 pb-3">
            <div className="flex items-center gap-1.5 mb-2.5">
              <Clock size={11} style={{ color: '#F4A261' }} />
              <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">
                {subline}
              </span>
            </div>
            <div className="flex items-stretch gap-1.5">
              {units.map((u) => (
                <div
                  key={u.label}
                  className="flex-1 py-2 text-center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                >
                  <div className="font-mono font-bold text-white text-lg leading-none tabular-nums">
                    {String(u.value).padStart(2, '0')}
                  </div>
                  <div className="font-sans text-white/40 text-[9px] uppercase tracking-wider mt-1">
                    {u.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="px-4 pb-4 flex gap-2">
            <Link
              href="/internships/ghana"
              onClick={dismiss}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 font-sans font-semibold text-[11px] uppercase tracking-[0.12em] transition-opacity duration-200 hover:opacity-90"
              style={{ backgroundColor: '#F4A261', color: '#1D3160' }}
            >
              View Program
              <ArrowRight size={12} />
            </Link>
            {showApply && (
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={dismiss}
                className="flex-1 inline-flex items-center justify-center py-2.5 font-sans font-semibold text-[11px] uppercase tracking-[0.12em] text-white transition-opacity duration-200 hover:opacity-90"
                style={{ backgroundColor: '#10B981' }}
              >
                Apply Now
              </a>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
