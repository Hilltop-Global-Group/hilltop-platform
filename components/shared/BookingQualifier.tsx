'use client';

import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const PHIL_CALENDAR = 'https://calendar.app.google/EPR1BDJvevkNWKws5';
const NANYA_CALENDAR = 'https://calendar.app.google/Apdujo8FVsbXcWaz7';

interface Props {
  variant?: 'light' | 'dark';
  onClose?: () => void;
}

const roles = [
  {
    label: 'University Administrator, Faculty, or Institutional Partner',
    href: PHIL_CALENDAR,
  },
  {
    label: 'Student, Prospective Intern, or General Inquiry',
    href: NANYA_CALENDAR,
  },
];

export default function BookingQualifier({ variant = 'dark', onClose }: Props) {
  const isDark = variant === 'dark';

  return (
    <div className={`rounded-xl border p-6 ${isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'}`}>
      <div className="flex items-center justify-between mb-4">
        <p className={`font-sans text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          I am a...
        </p>
        {onClose && (
          <button onClick={onClose} className={`p-1 ${isDark ? 'text-white/40 hover:text-white' : 'text-gray-400 hover:text-gray-700'} transition-colors`}>
            <X size={16} />
          </button>
        )}
      </div>
      <div className="flex flex-col gap-3">
        {roles.map((role) => (
          <a
            key={role.label}
            href={role.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex items-center justify-between gap-3 px-5 py-4 border rounded-lg font-sans text-sm transition-all duration-200 ${
              isDark
                ? 'border-white/10 text-white/80 hover:border-[#F4A261] hover:bg-white/5'
                : 'border-gray-200 text-gray-700 hover:border-[#F4A261] hover:bg-white'
            }`}
          >
            <span>{role.label}</span>
            <ArrowRight size={16} className="flex-shrink-0 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" style={{ color: '#F4A261' }} />
          </a>
        ))}
      </div>
    </div>
  );
}

export function BookingButton({ variant = 'dark', className, style }: { variant?: 'light' | 'dark'; className?: string; style?: React.CSSProperties }) {
  const [open, setOpen] = useState(false);

  if (open) {
    return <BookingQualifier variant={variant} onClose={() => setOpen(false)} />;
  }

  return (
    <button
      onClick={() => setOpen(true)}
      className={className}
      style={style}
    >
      Book a Discovery Call
    </button>
  );
}
