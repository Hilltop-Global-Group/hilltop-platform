'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import { HOST_ORGANIZATION_COUNT, sectors } from '@/lib/ghana-2027-data';

export default function Ghana2027Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const active = sectors[activeIndex];

  function focusTab(index: number) {
    const next = (index + sectors.length) % sectors.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        focusTab(index + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        focusTab(index - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusTab(0);
        break;
      case 'End':
        event.preventDefault();
        focusTab(sectors.length - 1);
        break;
      default:
        break;
    }
  }

  return (
    <section id="industries" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="mb-12">
            <Eyebrow>Where You Work</Eyebrow>
            <h2
              className="font-serif font-extrabold mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Industries and{' '}
              <span className="relative inline-block whitespace-nowrap">
                Placements
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mb-8" />
            <p className="font-sans text-gray-600 text-lg leading-relaxed max-w-3xl">
              Placements are drawn from {HOST_ORGANIZATION_COUNT} vetted host organizations in Accra and
              matched to your academic background, career interests and each organization&apos;s capacity to
              supervise meaningful work. Select a sector to see the kind of placements it offers.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            role="tablist"
            aria-label="Internship sectors"
            className="flex flex-wrap gap-3 mb-10"
          >
            {sectors.map((sector, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={sector.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`sector-tab-${sector.id}`}
                  aria-selected={isActive}
                  aria-controls={`sector-panel-${sector.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(i)}
                  onKeyDown={(event) => handleKeyDown(event, i)}
                  className="px-5 py-3 font-sans text-sm font-semibold border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F4A261]"
                  style={
                    isActive
                      ? { backgroundColor: '#1D3160', borderColor: '#1D3160', color: '#ffffff' }
                      : { backgroundColor: '#ffffff', borderColor: '#e5e7eb', color: '#1D3160' }
                  }
                >
                  {sector.name}
                </button>
              );
            })}
          </div>
        </FadeIn>

        <div
          role="tabpanel"
          id={`sector-panel-${active.id}`}
          aria-labelledby={`sector-tab-${active.id}`}
          className="border border-gray-100 bg-gray-50/60 p-8 sm:p-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h3 className="font-serif font-extrabold text-2xl mb-3" style={{ color: '#1D3160' }}>
                {active.name}
              </h3>
              <p className="font-sans text-gray-600 leading-relaxed mb-8 max-w-2xl">{active.blurb}</p>

              <p className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
                Example placements
              </p>
              <div className="grid md:grid-cols-3 gap-5">
                {active.placements.map((placement) => (
                  <div key={placement.role} className="border border-gray-100 bg-white p-6 h-full">
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowRight size={14} style={{ color: '#F4A261' }} aria-hidden />
                      <p className="font-serif font-bold text-base" style={{ color: '#1D3160' }}>
                        {placement.role}
                      </p>
                    </div>
                    <p className="font-sans text-gray-600 text-sm leading-relaxed">
                      {placement.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <FadeIn delay={0.2}>
          <p className="font-sans text-gray-500 text-sm mt-8 italic max-w-3xl">
            Placement examples are illustrative. Your exact scope is agreed with your host supervisor
            during the virtual component.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
