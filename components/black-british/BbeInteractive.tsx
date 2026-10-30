'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { anchors, BBE_GOLD, BBE_NAVY } from '@/lib/black-british-data';
import { ApplyButton } from './BbeShared';

/**
 * Secondary sticky bar holding the section anchors and an Apply Now.
 *
 * The brief asked for a sticky header with the logo, the anchors and Apply.
 * The site's own fixed navbar already supplies the logo and is 67px tall
 * (h-16 plus the 3px kente rule), so this sits directly beneath it rather than
 * duplicating a second logo. On mobile the anchor list scrolls horizontally and
 * the button stays put, which is what the brief asked for.
 */
export function BbeStickyNav() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const sections = anchors
      .map((a) => document.getElementById(a.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      // Top offset clears the two stacked bars so a section counts as current
      // once its heading is actually under them, not when it first peeks in.
      { rootMargin: '-140px 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="sticky z-40 border-b"
      style={{ top: '67px', backgroundColor: '#FFFFFF', borderColor: '#E6E2DA' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4 h-14">
          <nav
            className="flex items-center gap-5 sm:gap-7 overflow-x-auto no-scrollbar"
            aria-label="Program sections"
          >
            {anchors.map((a) => {
              const active = activeId === a.id;
              return (
                <a
                  key={a.id}
                  href={`#${a.id}`}
                  className="relative whitespace-nowrap font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] py-2 transition-colors duration-200"
                  style={{ color: active ? BBE_NAVY : '#8A867E' }}
                  aria-current={active ? 'true' : undefined}
                >
                  {a.label}
                  {active && (
                    <span
                      className="absolute left-0 right-0 -bottom-[1px] h-[2px]"
                      style={{ backgroundColor: BBE_GOLD }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <ApplyButton className="flex-shrink-0 px-5 py-2.5 text-[10px]" />
        </div>
      </div>
    </div>
  );
}

interface AccordionItem {
  /** Small label shown on the left of the closed row, such as "Day 1". */
  tag?: string;
  title: string;
  body?: string;
  items?: string[];
}

/**
 * Shared accordion, used for both the itinerary and the FAQ.
 *
 * `defaultOpenFirst` opens the first row so the pattern is obvious on arrival,
 * which matters more on mobile where a stack of closed rows reads as a dead end.
 */
export function BbeAccordion({
  entries,
  defaultOpenFirst = false,
  idPrefix,
}: {
  entries: AccordionItem[];
  defaultOpenFirst?: boolean;
  idPrefix: string;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpenFirst ? 0 : null);

  return (
    <div className="border-t" style={{ borderColor: '#E0DCD3' }}>
      {entries.map((entry, i) => {
        const isOpen = open === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;
        return (
          <div key={entry.title} className="border-b" style={{ borderColor: '#E0DCD3' }}>
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-start gap-4 text-left py-5 group"
              >
                {entry.tag && (
                  <span
                    className="font-sans text-[11px] font-bold uppercase tracking-[0.18em] pt-1 w-16 flex-shrink-0"
                    style={{ color: BBE_GOLD }}
                  >
                    {entry.tag}
                  </span>
                )}
                <span
                  className="flex-1 font-bbe text-xl sm:text-2xl leading-snug"
                  style={{ color: BBE_NAVY }}
                >
                  {entry.title}
                </span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 mt-1 transition-transform duration-300"
                  style={{
                    color: BBE_NAVY,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                  aria-hidden
                />
              </button>
            </h3>

            {/* Grid trick animates to the content's own height without a fixed max-height guess. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className={entry.tag ? 'pb-6 pl-0 sm:pl-20' : 'pb-6'}>
                  {entry.body && (
                    <p className="font-sans text-[15px] leading-relaxed" style={{ color: '#4A4740' }}>
                      {entry.body}
                    </p>
                  )}
                  {entry.items && (
                    <ul className="space-y-2.5">
                      {entry.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className="mt-[9px] h-[5px] w-[5px] flex-shrink-0 rounded-full"
                            style={{ backgroundColor: BBE_GOLD }}
                          />
                          <span
                            className="font-sans text-[15px] leading-relaxed"
                            style={{ color: '#4A4740' }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
