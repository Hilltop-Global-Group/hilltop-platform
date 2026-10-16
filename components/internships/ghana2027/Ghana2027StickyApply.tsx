'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Clock } from 'lucide-react';
import {
  APPLICATIONS_CLOSE_LABEL,
  APPLICATIONS_OPEN_LABEL,
  APPLICATION_ANCHOR,
  type ApplicationWindowState,
} from '@/lib/ghana-2027-data';
import Ghana2027ApplyButton from './Ghana2027ApplyButton';
import { useApplicationWindow } from './useApplicationWindow';

interface Props {
  state: ApplicationWindowState;
  daysRemaining: number;
}

const SHOW_AFTER_PX = 700;

export default function Ghana2027StickyApply({ state: serverState, daysRemaining: serverDays }: Props) {
  const { state, daysRemaining: liveDays } = useApplicationWindow(serverState);
  const daysRemaining = liveDays ?? serverDays;
  const [scrolledPast, setScrolledPast] = useState(false);
  const [applySectionVisible, setApplySectionVisible] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    function onScroll() {
      setScrolledPast(window.scrollY > SHOW_AFTER_PX);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById(APPLICATION_ANCHOR);
    if (!target || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setApplySectionVisible(entry.isIntersecting));
      },
      { rootMargin: '-10% 0px -10% 0px' }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPast && !applySectionVisible;

  const statusLine =
    state === 'open'
      ? daysRemaining > 0
        ? `${daysRemaining} ${daysRemaining === 1 ? 'day' : 'days'} left to apply`
        : `Applications close ${APPLICATIONS_CLOSE_LABEL}`
      : state === 'closed'
        ? 'Applications are closed'
        : `Applications open ${APPLICATIONS_OPEN_LABEL}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { y: 72, opacity: 0 }}
          animate={shouldReduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={shouldReduce ? { opacity: 0 } : { y: 72, opacity: 0 }}
          transition={{ duration: shouldReduce ? 0 : 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10"
          style={{ backgroundColor: 'rgba(8,15,28,0.95)', backdropFilter: 'blur(8px)' }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-4 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-serif font-extrabold text-white text-base leading-tight">
                Ghana 2027 Internship Program
              </p>
              <p className="inline-flex items-center gap-2 font-sans text-xs text-white/55 mt-1">
                <Clock size={13} style={{ color: '#F4A261' }} aria-hidden />
                {statusLine}
              </p>
            </div>
            <Ghana2027ApplyButton state={state} mode="anchor" variant="accent" size="sm" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
