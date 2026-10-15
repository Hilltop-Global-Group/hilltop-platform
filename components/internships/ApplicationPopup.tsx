'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ArrowRight, MapPin } from 'lucide-react';
import {
  APPLICATIONS_OPEN,
  APPLICATIONS_CLOSE,
  APPLICATIONS_OPEN_LABEL,
  APPLICATIONS_CLOSE_LABEL,
  APPLICATION_FORM_URL,
  isFormReady,
  program,
} from '@/lib/ghana-2027-data';

const STORAGE_KEY = 'hilltop-ghana-2027-popup-dismissed';
const POPUP_IMAGE = '/images/akwaaba-gh.jpeg';

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
 * Bottom-right promo for the current Ghana application cycle.
 *
 * It does not disappear when applications open. It changes what it counts:
 *   before-open -> counts down to the opening date, CTA is "View Program"
 *   open        -> counts down to the closing deadline, CTA becomes "Apply Now"
 *   closed      -> stops rendering, since there is nothing left to act on
 *
 * The countdown is client-only to avoid a hydration mismatch, and the whole thing is
 * dismissible for the rest of the browser session.
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
  const badgeLabel = isBeforeOpen ? 'Opening Soon' : 'Applications Open';
  const badgeColor = isBeforeOpen ? '#F4A261' : '#10B981';
  const countdownLabel = isBeforeOpen ? 'Applications open in' : 'Applications close in';
  const dateLine = isBeforeOpen
    ? `Opens ${APPLICATIONS_OPEN_LABEL}`
    : `Deadline ${APPLICATIONS_CLOSE_LABEL}`;
  const canApply = !isBeforeOpen && isFormReady();

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
          className="
            fixed z-[100] overflow-hidden
            inset-x-3 bottom-3
            sm:inset-x-auto sm:right-5 sm:bottom-5 sm:w-[360px]
            shadow-[0_12px_40px_rgba(8,15,28,0.45)]
          "
          style={{ backgroundColor: '#1D3160', borderTop: `3px solid ${badgeColor}` }}
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97 }}
          transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          role="complementary"
          aria-labelledby="ghana-popup-title"
        >
          {/* Image header */}
          <div className="relative h-24 sm:h-32">
            <Image
              src={POPUP_IMAGE}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 360px"
              className="object-cover"
              aria-hidden
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(29,49,96,1) 0%, rgba(29,49,96,0.55) 45%, rgba(29,49,96,0.15) 100%)',
              }}
            />

            <span
              className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-[0.14em]"
              style={{ backgroundColor: badgeColor, color: '#1D3160' }}
            >
              {!reduceMotion && !isBeforeOpen && (
                <motion.span
                  className="inline-block w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: '#1D3160' }}
                  animate={{ opacity: [1, 0.25, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
              )}
              {badgeLabel}
            </span>

            <button
              type="button"
              onClick={dismiss}
              className="absolute top-2 right-2 p-1.5 text-white/70 hover:text-white hover:bg-black/30 transition-colors duration-150"
              aria-label="Dismiss"
            >
              <X size={16} />
            </button>

            <div className="absolute bottom-2.5 left-3 right-3">
              <p className="inline-flex items-center gap-1.5 font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">
                <MapPin size={11} style={{ color: '#F4A261' }} aria-hidden />
                {program.city}, {program.country}
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="px-4 pt-3 pb-4">
            <p
              id="ghana-popup-title"
              className="font-serif font-extrabold text-white text-lg sm:text-xl leading-tight mb-3"
            >
              {program.name}
            </p>

            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50 mb-2">
              {countdownLabel}
            </p>

            <div className="flex items-stretch gap-1.5 mb-2.5">
              {units.map((u) => (
                <div
                  key={u.label}
                  className="flex-1 py-2"
                  style={{ backgroundColor: 'rgba(255,255,255,0.09)' }}
                >
                  <div className="font-mono font-bold text-white text-lg sm:text-xl leading-none tabular-nums text-center">
                    {String(u.value).padStart(2, '0')}
                  </div>
                  <div className="font-sans text-white/45 text-[9px] uppercase tracking-wider mt-1 text-center">
                    {u.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="font-sans text-[11px] text-white/55 mb-3.5">{dateLine}</p>

            <div className="flex gap-2">
              {canApply && (
                <a
                  href={APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={dismiss}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 font-sans font-bold text-[11px] uppercase tracking-[0.12em] transition-opacity duration-200 hover:opacity-90"
                  style={{ backgroundColor: '#10B981', color: '#ffffff' }}
                >
                  Apply Now
                  <ArrowRight size={12} />
                </a>
              )}
              <Link
                href="/internships/ghana"
                onClick={dismiss}
                className={`${canApply ? 'flex-1' : 'w-full'} inline-flex items-center justify-center gap-1.5 py-2.5 font-sans font-bold text-[11px] uppercase tracking-[0.12em] transition-opacity duration-200 hover:opacity-90`}
                style={
                  canApply
                    ? { border: '1px solid rgba(255,255,255,0.3)', color: '#ffffff' }
                    : { backgroundColor: '#F4A261', color: '#1D3160' }
                }
              >
                View Program
                {!canApply && <ArrowRight size={12} />}
              </Link>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
