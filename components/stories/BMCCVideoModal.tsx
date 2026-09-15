'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { YouTubePlayIcon, HilltopChannelAvatar, YT } from '../shared/YouTubeUI';
import { bmccVideos, isPublished } from '@/lib/bmcc-ghana-data';

const STORAGE_KEY = 'hilltop-bmcc-ghana-modal-dismissed';

/**
 * Compact bottom-right popup promoting the BMCC Ghana three-part video series.
 * YouTube-style card; shows once per session until dismissed.
 */
export default function BMCCVideoModal() {
  const [open, setOpen] = useState(false);
  const lead = bmccVideos[0];
  const published = isPublished(lead);

  useEffect(() => {
    if (!published) return;
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === '1') return;
    } catch {
      // sessionStorage unavailable
    }
    const timer = window.setTimeout(() => setOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, [published]);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore
    }
  };

  if (!published) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="fixed bottom-4 right-4 z-[100] w-[calc(100vw-2rem)] max-w-[340px] rounded-xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.45)] border border-white/10"
          style={{ backgroundColor: YT.bg }}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          role="dialog"
          aria-modal="false"
          aria-labelledby="bmcc-popup-title"
        >
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
            <div className="flex items-center gap-2 min-w-0">
              <HilltopChannelAvatar size={24} />
              <span className="font-sans text-xs font-medium truncate" style={{ color: YT.text }}>
                Hilltop Global Group
              </span>
            </div>
            <button
              type="button"
              onClick={dismiss}
              className="p-1 rounded-full hover:bg-white/10 transition-colors duration-150 flex-shrink-0"
              style={{ color: YT.textMuted }}
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          <Link
            href="/news/bmcc-ghana#watch"
            onClick={dismiss}
            className="group flex gap-3 p-3 hover:bg-white/5 transition-colors duration-150"
          >
            <div className="relative flex-shrink-0 w-[120px] rounded-lg overflow-hidden" style={{ backgroundColor: YT.surface }}>
              <div className="relative" style={{ aspectRatio: '16 / 9' }}>
                <Image
                  src={`https://img.youtube.com/vi/${lead.youtubeId}/mqdefault.jpg`}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="120px"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                  <YouTubePlayIcon className="w-10 h-auto drop-shadow-md" />
                </div>
                <span className="absolute bottom-1 right-1 bg-black/85 text-white font-sans text-[10px] font-medium px-1 py-0.5 rounded-[2px] leading-none">
                  {lead.duration}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center min-w-0 flex-1">
              <p
                id="bmcc-popup-title"
                className="font-sans text-[13px] font-medium leading-snug line-clamp-2 mb-1 group-hover:text-white"
                style={{ color: YT.text }}
              >
                {lead.title}
              </p>
              <p className="font-sans text-[11px] line-clamp-1 mb-1.5" style={{ color: YT.textMuted }}>
                BMCC Ghana · Part 1 of 3
              </p>
              <span className="font-sans text-[11px] font-medium" style={{ color: YT.link }}>
                Watch full series →
              </span>
            </div>
          </Link>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
