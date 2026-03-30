'use client';

import Image from 'next/image';
import { DESTINATION_FLAG_SRC } from '@/lib/destination-flags';

type Props = {
  code: keyof typeof DESTINATION_FLAG_SRC | string;
  label: string;
  className?: string;
  size?: 'sm' | 'md';
};

const sizeClass = {
  sm: 'h-5 w-7',
  md: 'h-6 w-9',
} as const;

export default function DestinationFlag({ code, label, className = '', size = 'md' }: Props) {
  const src = DESTINATION_FLAG_SRC[code as keyof typeof DESTINATION_FLAG_SRC];
  if (!src) return null;

  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      title={label}
    >
      <span className={`relative flex-shrink-0 overflow-hidden rounded-sm bg-gray-100 ${sizeClass[size]}`}>
        <Image
          src={src}
          alt={`${label} flag`}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 28px, 36px"
        />
      </span>
    </span>
  );
}
