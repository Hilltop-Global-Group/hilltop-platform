'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';

interface Props {
  startDate?: string;
  endDate?: string;
  deadline?: string;
  costFull?: string;
  costHybrid?: string;
}

export default function GhanaKeyDetails({
  startDate = 'June 22, 2026',
  endDate = 'July 17, 2026',
  deadline = 'April 15, 2026',
  costFull = '$6,050',
  costHybrid = '$5,250',
}: Props) {
  const details = [
    { label: 'Application Deadline:', value: deadline, accent: true },
    { label: 'Internship Dates:', value: `${startDate} – ${endDate}`, accent: false },
    { label: 'Cost (Full In-Country, 4 weeks):', value: costFull, accent: false, large: true },
    { label: 'Cost (Hybrid, 3 weeks):', value: costHybrid, accent: true, large: true },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Details</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Key{' '}
              <span className="relative inline-block whitespace-nowrap">
                Details
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {details.map((item, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="border border-gray-100 bg-gray-50/60 p-6">
                <p className="font-sans text-sm text-gray-500 mb-2">{item.label}</p>
                <p
                  className={`font-serif font-extrabold ${item.large ? 'text-2xl' : 'text-xl'}`}
                  style={{ color: item.accent ? '#F4A261' : '#1D3160' }}
                >
                  {item.value}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
