'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const memberships = [
  {
    src: '/images/nafsa_logo_blue.png',
    alt: 'NAFSA: Association of International Educators',
    height: 72,
    offsetBottom: 0,
  },
  {
    src: '/images/forum-logo-final.png',
    alt: 'The Forum on Education Abroad',
    height: 120,
    offsetBottom: 10,
  },
];

interface MembershipBadgesProps {
  variant?: 'dark' | 'light';
  label?: string;
}

function TiltLogo({ m, isDark, index }: { m: typeof memberships[0]; isDark: boolean; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [18, -18]), { stiffness: 300, damping: 20 });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-18, 18]), { stiffness: 300, damping: 20 });
  const glowOpacity = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
    glowOpacity.set(1);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    glowOpacity.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.7, rotate: index === 0 ? -8 : 8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: 'spring',
        stiffness: 180,
        damping: 14,
        delay: 0.15 + index * 0.18,
      }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.93 }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d', position: 'relative' }}
        className={`flex items-center justify-center rounded cursor-pointer ${
          isDark ? 'bg-white px-5 pt-3 pb-2' : ''
        }`}
      >
        {/* Glow layer */}
        <motion.div
          className="absolute inset-0 rounded pointer-events-none"
          style={{
            opacity: glowOpacity,
            background: isDark
              ? 'radial-gradient(circle at 50% 50%, rgba(244,162,97,0.35) 0%, transparent 70%)'
              : 'radial-gradient(circle at 50% 50%, rgba(29,49,96,0.15) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={m.src}
          alt={m.alt}
          style={{ height: `${m.height}px`, width: 'auto', objectFit: 'contain', position: 'relative', zIndex: 1, marginBottom: `-${m.offsetBottom}px` }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function MembershipBadges({
  variant = 'light',
  label = 'Proud Member of',
}: MembershipBadgesProps) {
  const isDark = variant === 'dark';

  return (
    <div className="flex flex-col items-center gap-6">
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`font-sans text-xs font-semibold uppercase tracking-[0.2em] ${
          isDark ? 'text-white/40' : 'text-gray-400'
        }`}
      >
        {label}
      </motion.span>

      <div className="flex items-end justify-center gap-10 sm:gap-16 w-full">
        {memberships.map((m, i) => (
          <TiltLogo key={m.alt} m={m} isDark={isDark} index={i} />
        ))}
      </div>
    </div>
  );
}
