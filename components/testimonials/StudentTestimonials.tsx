'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react';
import { KenteDivider, DecorativeUnderline, AfricaWatermark } from '../shared/HilltopBrand';

interface Testimonial {
  title: string;
  quote: string;
  name: string;
  affiliation: string;
}

const fallbackTestimonials: Testimonial[] = [
  {
    title: 'All Hail Hilltop',
    quote: 'On behalf of the University at Buffalo, thank you so much to Hilltop Group for planning, organizing and executing such a phenomenal experience abroad in Ghana! Our team was so impressed during our time there that we decided to make Hilltop our permanent partner for our annual trips where anywhere from 30-50 interdisciplinary students visit the African continent every winter semester. Special shout out to Honorable Osa for his amazing dance moves and Honorable Phil for his continued leadership. Between the two of them, UB students were still able to participate in a Fall 2020 virtual engagement despite flight cancellations caused by Covid. Truly a dream team that we highly recommend. Medase!',
    name: 'Sonya T.',
    affiliation: 'University at Buffalo',
  },
  {
    title: 'Above and beyond in Ghana',
    quote: 'Thank you so much for all your hard work organising this trip and making sure to check every detail. You really went above and beyond on this trip. I had so much fun and I want to thank you for taking care of us and helping us find good spots to make our trip memorable. You dealt with any problems with grace and made sure everything went as smoothly as possible. Thank you for all your recommendations! I hope your future travels go well and maybe we will run into each other when I return to Africa!',
    name: 'Theresa',
    affiliation: 'New York University (Ghana program)',
  },
  {
    title: 'A warm welcome to Ghana',
    quote: 'Thank you so much for giving us such a warm welcome to Ghana. I deeply appreciated my time here and you guys made me much more comfortable. I will be eating Ghanaian food more frequently and already found a restaurant I will be ordering from. Thank you so much for making this experience so enriching for us, as some of us were coming back for the first time. I have learned so much about myself and my family from this trip. Everything is starting to make sense now. I absolutely loved it in the Motherland and I now feel like a piece of me that was missing is found. I would love to come back… Thank you, Willow.',
    name: 'Willow',
    affiliation: 'New York University (Ghana program)',
  },
  {
    title: 'The Highlight of my MBA Experience!',
    quote: 'I had the privilege of being a part of the study abroad trip facilitated by Hilltop Global as part of Georgetown University\'s Global Business Experience. Hilltop planned and coordinated the whole trip, and twenty years from now, it will be the experience I remember most from my time as a business school student. What I thought set Hilltop Global apart from any other group I\'ve traveled with is the projects and clients they were able to connect us with. It was such a unique way to learn! Hilltop connected us with experts in their respective fields who were willing to teach us about their industries as well as the cultural context of those industries in Ghana.',
    name: 'Kelly B.',
    affiliation: 'Georgetown University',
  },
  {
    title: 'Excellent All-Rounded Program!',
    quote: 'As a student at Georgetown University, I had the opportunity to work with a client in Ghana and visit the beautiful country. The experience was unbelievable and I was surprised in a positive way at how well organized Hilltop was. Hilltop not just introduced us to our client and the project, but also planned cultural and immersion experiences for us for the entire duration. I thought that the excursions were very well planned and really helped me imbibe the Ghanaian culture and spirit. Special mention to Phil for being a wonderful host! He was extremely warm, friendly, helpful and a lot of fun!',
    name: 'Aakarsh C.',
    affiliation: 'Georgetown University',
  },
  {
    title: 'An eye-opening, amazing experience',
    quote: 'Hilltop Global Group arranged our Ghana trip for the Global Business Experience (GBE), a capstone course for second year Georgetown MBAs. The professional and cultural activities were simply incredible. Professionally, my team had an amazing time working with our client, ProFish, a start-up working to enhance the local market for fish and seafood. In terms of cultural immersion, we did an Accra city tour, as well as visited Kakum National Park, the Cocoa Research Institute of Ghana, Elmina Castle, and Jamestown. Phil and the rest of the Hilltop team did a wonderful job coordinating the logistics and programming and ensuring we had a great time.',
    name: 'Tory P.',
    affiliation: 'Georgetown University',
  },
  {
    title: 'Exceeded Expectations in Every Way',
    quote: 'Hilltop Global put together an immersive experience during a school trip to Ghana. From engaging with local entrepreneurs to touring the slave castles in Cape Coast. Our group was given a well rounded and well coordinated trip that elevated our educational experience. Big shout out to Osa for always providing thought provoking commentary, questions and empowering us to reflect on our experience. I would happily recommend Hilltop Global to anyone looking for a global educational experience!',
    name: 'Tim M.',
    affiliation: 'Georgetown University',
  },
  {
    title: 'Thank You Hilltop for the Experience',
    quote: 'Hilltop provided me with an in-depth experience of business and culture in Ghana. As someone from another west African country, Nigeria, I visited Ghana a few times before but only got a superficial understanding of the Ghanaian culture. With the global business experience, it was a complete immersion into the Ghanaian culture. Thanks to Hilltop, now I understand how and why Ghana leads the pack in the percentage of women that are entrepreneurs. Women in Ghana are more likely to be entrepreneurs than women in any other country in the world. That is a fact!',
    name: 'Olatunji F.',
    affiliation: 'Georgetown University',
  },
  {
    title: 'Personal and Professional Culmination',
    quote: 'Emerging market deep-dive, powerful professional skill building, and valuable cultural immersion. Thank you Hilltop Global Group for an unforgettable week! My MBA capstone week in Ghana was beyond complete. I had the opportunity of working side-by-side with deeply-invested Ghanaian startup founders and visiting local agriculture, history, manufacturing, and infrastructure landmarks in a distinctly well-organized and stress-free trip. Hilltop Global Group coordinated an engaging and eye-opening week in Ghana that I will never forget.',
    name: 'Audrey V.',
    affiliation: 'Georgetown University',
  },
  {
    title: 'Highlight of the MBA Program',
    quote: 'Georgetown\'s Global Business Experience in Accra, Ghana was the highlight of my MBA program and was made possible by Hilltop Global Group. Hilltop\'s curated speakers, cultural immersion activities, and expert client facilitation truly made my time in Ghana unforgettable.',
    name: 'Benjamin L.',
    affiliation: 'Georgetown University',
  },
];

const INTERVAL = 5000;

async function fetchWPTestimonials(): Promise<Testimonial[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) return [];
    const res = await fetch(`${apiUrl}/testimonials?_embed&per_page=50&status=publish`, {
      next: { revalidate: 120 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.map((t: any) => ({
      title: t.acf?.organization || t.acf?.program || 'Student Testimonial',
      quote: t.acf?.quote || t.content?.rendered?.replace(/<[^>]*>/g, '') || '',
      name: t.acf?.student_name || t.title?.rendered?.replace(/<[^>]*>/g, '').replace(' - Testimonial', '') || '',
      affiliation: t.acf?.organization || t.acf?.program || '',
    })).filter((t: Testimonial) => t.quote.trim().length > 0);
  } catch {
    return [];
  }
}

export default function StudentTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    fetchWPTestimonials().then(wpList => {
      if (wpList.length > 0) {
        const combined = [...fallbackTestimonials, ...wpList];
        const seen = new Set<string>();
        const deduped = combined.filter(t => {
          const key = t.name + t.quote.slice(0, 50);
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
        setTestimonials(deduped);
      }
    });
  }, []);

  const goTo = useCallback((index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent(c => (c + 1) % testimonials.length);
    setDirection(1);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
    setDirection(-1);
  }, [testimonials.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next]);

  const t = testimonials[current];
  if (!t) return null;

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
  };

  return (
    <section
      className="relative py-24 sm:py-32 overflow-hidden border-t border-gray-100 bg-gray-50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-12" aria-hidden>
        <AfricaWatermark className="w-72 md:w-96 h-auto" opacity={0.04} />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        <div className="mb-14">
          <KenteDivider className="mb-6" color="#F4A261" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Student Voices
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-serif font-extrabold text-black leading-none"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}
            >
              What{' '}
              <span className="relative inline-block whitespace-nowrap">
                Students
                <DecorativeUnderline />
              </span>
              {' '}Say
            </h2>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="border border-gray-200 bg-white p-8 sm:p-10 flex flex-col shadow-sm">
                <Quote size={28} className="mb-5 flex-shrink-0" style={{ color: '#F4A261' }} />

                <h3 className="font-serif font-bold text-xl sm:text-2xl mb-4 leading-snug" style={{ color: '#1D3160' }}>
                  {t.title}
                </h3>

                <p className="font-sans text-gray-600 text-sm sm:text-base leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                  <div
                    className="w-8 h-8 flex-shrink-0 flex items-center justify-center font-serif font-extrabold text-white text-sm"
                    style={{ backgroundColor: '#F4A261' }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-serif font-bold text-sm" style={{ color: '#1D3160' }}>{t.name}</p>
                    <p className="font-sans text-gray-400 text-xs mt-0.5">{t.affiliation}</p>
                  </div>
                  <div className="ml-auto font-sans text-gray-300 text-xs tabular-nums">
                    {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-11 h-11 flex items-center justify-center border border-gray-200 text-gray-400 hover:text-black hover:border-gray-400 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setPaused(p => !p)}
              className="w-11 h-11 flex items-center justify-center border transition-colors duration-200"
              style={paused
                ? { borderColor: '#F4A261', color: '#F4A261', backgroundColor: '#FFF8F3' }
                : { borderColor: '#e5e7eb', color: '#9ca3af' }}
              aria-label={paused ? 'Resume slideshow' : 'Pause slideshow'}
            >
              {paused ? <Play size={18} /> : <Pause size={18} />}
            </button>
            <button
              onClick={next}
              className="w-11 h-11 flex items-center justify-center border border-gray-200 text-gray-400 hover:text-black hover:border-gray-400 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap justify-end">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className="p-1.5 -m-1.5 flex items-center justify-center"
                aria-label={`Go to testimonial ${i + 1}`}
              >
                <span
                  className="block rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 20 : 6,
                    height: 6,
                    backgroundColor: i === current ? '#F4A261' : '#d1d5db',
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 h-[2px] bg-gray-200 overflow-hidden">
          {!paused && (
            <motion.div
              key={`progress-${current}`}
              className="h-full"
              style={{ backgroundColor: '#F4A261' }}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
            />
          )}
        </div>

      </div>
    </section>
  );
}
