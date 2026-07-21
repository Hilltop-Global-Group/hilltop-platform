'use client';

import { ArrowCTA } from '@/components/shared/HilltopBrand';
import { UMBAS_REGISTER_URL } from '@/lib/umbas-ghana-2027';

interface Props {
  className?: string;
  variant?: 'primary' | 'accent' | 'outline';
  size?: 'sm' | 'lg';
}

export default function UmbasRegisterButton({
  className = '',
  variant = 'primary',
  size = 'lg',
}: Props) {
  const base =
    'group inline-flex items-center gap-3 font-serif font-extrabold text-white transition-opacity duration-300 hover:opacity-90';
  const sizes = size === 'lg' ? 'px-10 py-4 text-lg' : 'px-6 py-3 text-sm';
  const variants = {
    primary: 'bg-[#1D3160]',
    accent: 'bg-[#F4A261]',
    outline:
      'bg-transparent border border-white/40 text-white font-sans font-semibold text-sm uppercase tracking-[0.15em] hover:border-white',
  };

  return (
    <a
      href={UMBAS_REGISTER_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes} ${variants[variant]} ${className}`}
    >
      Register Now
      <ArrowCTA />
    </a>
  );
}
