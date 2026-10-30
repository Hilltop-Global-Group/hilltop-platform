import { Check, X } from 'lucide-react';
import {
  BBE_CREAM,
  BBE_GOLD,
  BBE_NAVY,
  faqs,
  included,
  intro,
  itinerary,
  itineraryNote,
  notIncluded,
  pillars,
  program,
  signatureExperiences,
  whoShouldApply,
} from '@/lib/black-british-data';
import { ApplyButton, Eyebrow, Placeholder, SectionHeading } from './BbeShared';
import { BbeAccordion } from './BbeInteractive';

/* ---------------------------------------------------------------- Hero ---- */

export function BbeHero() {
  const facts = [program.dateLabel, program.durationLabel, program.locationLabel, program.priceLabel];

  return (
    <section className="relative">
      <div className="relative">
        <Placeholder
          id="IMG-01"
          bare
          className="h-[62vh] min-h-[460px] sm:min-h-[560px] max-h-[760px]"
        />
        {/* Dark overlay so the headline holds up over any final photo. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(33,61,104,0.94) 0%, rgba(33,61,104,0.78) 45%, rgba(33,61,104,0.55) 100%)',
          }}
        />

        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12 sm:pb-16">
            <h1
              className="font-bbe text-white leading-[1.02] max-w-4xl"
              style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)' }}
            >
              {program.name}
            </h1>
            <p
              className="font-sans text-white/80 text-base sm:text-lg leading-relaxed mt-6 max-w-2xl"
            >
              {program.subtitle}
            </p>

            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8">
              {facts.map((fact, i) => (
                <li key={fact} className="flex items-center gap-5">
                  <span className="font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-white/90">
                    {fact}
                  </span>
                  {i < facts.length - 1 && (
                    <span className="h-3 w-px bg-white/30 hidden sm:block" aria-hidden />
                  )}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <ApplyButton variant="gold" />
              <a
                href="#itinerary"
                className="inline-flex items-center justify-center px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.18em] border border-white/45 text-white hover:bg-white/10 transition-colors duration-200"
              >
                View Itinerary
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- About ---- */

export function BbeAbout() {
  return (
    <section id="about" className="py-20 sm:py-28 scroll-mt-32" style={{ backgroundColor: BBE_CREAM }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <Eyebrow>About the program</Eyebrow>
          <SectionHeading>Two histories, one Atlantic</SectionHeading>
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#3E3B35' }}>
            {intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-px mt-16" style={{ backgroundColor: '#E0DCD3' }}>
          {pillars.map((p) => (
            <div key={p.title} className="p-8" style={{ backgroundColor: BBE_CREAM }}>
              <div className="h-[3px] w-8 mb-5" style={{ backgroundColor: BBE_GOLD }} />
              <h3 className="font-bbe text-2xl mb-3" style={{ color: BBE_NAVY }}>
                {p.title}
              </h3>
              <p className="font-sans text-[15px] leading-relaxed" style={{ color: '#5A564E' }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------- Signature experiences ---- */

export function BbeSignature() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <Eyebrow>Signature experiences</Eyebrow>
          <SectionHeading>What you will actually do</SectionHeading>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
          {signatureExperiences.map((exp) => (
            <article key={exp.title}>
              <Placeholder id={exp.imageId} />
              <h3 className="font-bbe text-2xl mt-6 mb-3" style={{ color: BBE_NAVY }}>
                {exp.title}
              </h3>
              <p className="font-sans text-[15px] leading-relaxed" style={{ color: '#5A564E' }}>
                {exp.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Itinerary ---- */

export function BbeItinerary() {
  return (
    <section
      id="itinerary"
      className="py-20 sm:py-28 scroll-mt-32"
      style={{ backgroundColor: BBE_CREAM }}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <Eyebrow>Itinerary</Eyebrow>
        <SectionHeading>Five days, day by day</SectionHeading>

        <BbeAccordion
          idPrefix="bbe-itinerary"
          defaultOpenFirst
          entries={itinerary.map((d) => ({ tag: d.day, title: d.title, items: d.items }))}
        />

        <p className="font-sans text-sm italic mt-6" style={{ color: '#8A867E' }}>
          {itineraryNote}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Included ---- */

export function BbeIncluded() {
  return (
    <section id="included" className="py-20 sm:py-28 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <Eyebrow>What&apos;s included</Eyebrow>
          <SectionHeading>Everything except the flight</SectionHeading>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <h3
              className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-6"
              style={{ color: BBE_NAVY }}
            >
              Included
            </h3>
            <ul className="space-y-4">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={17} className="flex-shrink-0 mt-[3px]" style={{ color: '#2F7D52' }} aria-hidden />
                  <span className="font-sans text-[15px] leading-relaxed" style={{ color: '#3E3B35' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="font-sans text-xs font-bold uppercase tracking-[0.2em] mb-6"
              style={{ color: '#8A867E' }}
            >
              Not included
            </h3>
            <ul className="space-y-4">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X size={17} className="flex-shrink-0 mt-[3px]" style={{ color: '#A9A49B' }} aria-hidden />
                  <span className="font-sans text-[15px] leading-relaxed" style={{ color: '#6B6760' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Pricing ---- */

export function BbePricing() {
  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 scroll-mt-32"
      style={{ backgroundColor: BBE_CREAM }}
    >
      <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <Eyebrow>Pricing</Eyebrow>
        <h2
          className="font-bbe leading-[1.08] mb-8"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: BBE_NAVY }}
        >
          One price, no surprises
        </h2>

        <div className="bg-white border p-10 sm:p-14" style={{ borderColor: '#E0DCD3' }}>
          <p
            className="font-bbe leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', color: BBE_NAVY }}
          >
            {program.priceLabel}
          </p>
          <p className="font-sans text-sm mt-4" style={{ color: '#6B6760' }}>
            {program.priceNote}
          </p>
          <div className="h-[3px] w-14 mx-auto my-8" style={{ backgroundColor: BBE_GOLD }} />
          <ApplyButton />
          <p className="font-sans text-sm mt-6" style={{ color: '#4A4740' }}>
            {program.depositLabel}. Applications close{' '}
            <strong style={{ color: BBE_NAVY }}>{program.applicationDeadlineLabel}</strong>
          </p>
          <p className="font-sans text-xs mt-2" style={{ color: '#8A867E' }}>
            {program.paymentNote}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ Who should apply -- */

export function BbeWhoShouldApply() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-[1fr_minmax(240px,340px)] gap-10 md:gap-16 items-center">
          <div>
            <Eyebrow>Who should apply</Eyebrow>
            <SectionHeading>This is built for you if</SectionHeading>
            <p className="font-sans text-lg leading-relaxed mb-10" style={{ color: '#3E3B35' }}>
              {whoShouldApply}
            </p>
            <ApplyButton variant="outline" />
          </div>
          <Placeholder id="IMG-06" />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- FAQ ---- */

export function BbeFaq() {
  return (
    <section id="faq" className="py-20 sm:py-28 scroll-mt-32" style={{ backgroundColor: BBE_CREAM }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <Eyebrow>FAQ</Eyebrow>
        <SectionHeading>Questions we get asked</SectionHeading>
        <BbeAccordion
          idPrefix="bbe-faq"
          entries={faqs.map((f) => ({ title: f.q, body: f.a }))}
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Final CTA --- */

export function BbeFinalCta() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: BBE_NAVY }}>
      {/* Faded background image behind the band. */}
      <div className="absolute inset-0 opacity-[0.18]" aria-hidden>
        <Placeholder id="IMG-07" bare className="h-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-28 text-center">
        <h2
          className="font-bbe text-white leading-[1.08] max-w-2xl mx-auto"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
        >
          Spaces are limited. Apply now for March 2027.
        </h2>
        <p className="font-sans text-sm text-white/70 mt-5">
          Applications close {program.applicationDeadlineLabel}
        </p>
        <div className="mt-10">
          <ApplyButton variant="gold" />
        </div>
      </div>
    </section>
  );
}
