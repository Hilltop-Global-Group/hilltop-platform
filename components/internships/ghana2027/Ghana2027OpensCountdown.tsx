'use client';

import { useEffect, useState } from 'react';
import { Clock } from 'lucide-react';
import { APPLICATIONS_OPEN, APPLICATIONS_OPEN_LABEL } from '@/lib/ghana-2027-data';

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function split(ms: number): Remaining {
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

/**
 * Live countdown to the moment applications open.
 *
 * Rendered only while the application window is still closed. The countdown is computed
 * on the client to avoid a server/client hydration mismatch, so it renders nothing on the
 * first paint and fills in immediately after.
 */
export default function Ghana2027OpensCountdown() {
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const tick = () => {
      const diff = APPLICATIONS_OPEN.getTime() - Date.now();
      setRemaining(diff > 0 ? split(diff) : null);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!remaining) return null;

  const units = [
    { label: 'days', value: remaining.days },
    { label: 'hrs', value: remaining.hours },
    { label: 'min', value: remaining.minutes },
    { label: 'sec', value: remaining.seconds },
  ];

  return (
    <div className="border border-gray-100 bg-white p-8 text-center mb-10">
      <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2">
        Applications open in
      </p>

      <div className="flex items-stretch justify-center gap-2 sm:gap-3 my-5">
        {units.map((u) => (
          <div
            key={u.label}
            className="flex-1 max-w-[90px] py-3"
            style={{ backgroundColor: '#1D3160' }}
          >
            <div className="font-mono font-bold text-white text-2xl sm:text-3xl leading-none tabular-nums">
              {String(u.value).padStart(2, '0')}
            </div>
            <div className="font-sans text-white/50 text-[10px] uppercase tracking-wider mt-1.5">
              {u.label}
            </div>
          </div>
        ))}
      </div>

      <p className="inline-flex items-center gap-2 font-sans text-sm text-gray-600">
        <Clock size={15} style={{ color: '#F4A261' }} aria-hidden />
        The application form opens {APPLICATIONS_OPEN_LABEL}
      </p>
    </div>
  );
}
