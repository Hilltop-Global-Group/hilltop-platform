'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow, ArrowCTA } from '@/components/shared/HilltopBrand';
import { Check } from 'lucide-react';

interface Props {
  deadline?: string;
  applicationUrl?: string;
  applicationStatus?: 'open' | 'closed';
}

export default function GhanaApplication({
  deadline = 'April 15, 2026',
  applicationUrl = 'https://8xlyl7wsuni.typeform.com/to/ygqGReCF',
  applicationStatus = 'open',
}: Props) {
  const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=1D3160&bgcolor=FFFFFF&data=${encodeURIComponent(applicationUrl)}`;
  const isOpen = applicationStatus === 'open';

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <FadeIn>
          <Eyebrow className="text-center">{isOpen ? 'Applications Open' : 'Applications Closed'}</Eyebrow>
          <h2
            className="font-serif font-extrabold mb-8"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
          >
            Apply to the Ghana{' '}
            <span className="relative inline-block whitespace-nowrap">
              Program
              <DecorativeUnderline />
            </span>
          </h2>
          <KenteDivider className="mx-auto mb-10" />
        </FadeIn>

        {isOpen ? (
          <>
            <FadeIn delay={0.1}>
              <div className="border border-gray-100 bg-gray-50/60 p-12 mb-10">
                <div className="w-52 h-52 mx-auto border border-gray-200 bg-white flex items-center justify-center mb-6 p-3">
                  <img
                    src={QR_SRC}
                    alt="QR code — scan to apply"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="font-sans text-gray-500 font-semibold">Scan to apply</p>
                <p className="font-sans text-gray-400 text-xs mt-1">or click the button below</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-sans text-xl mb-8">
                <span className="text-gray-700">Application deadline:</span>{' '}
                <span className="font-bold" style={{ color: '#F4A261' }}>
                  {deadline}
                </span>
              </p>

              <p className="font-sans text-gray-500 mb-10">
                Spots are limited. Early application is strongly advised.
              </p>

              <a
                href={applicationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-4 font-serif font-extrabold text-lg text-white transition-colors duration-300 hover:opacity-90 bg-[#1D3160]"
              >
                Apply Now
                <ArrowCTA />
              </a>
            </FadeIn>
          </>
        ) : (
          <FadeIn delay={0.1}>
            <div className="border border-gray-100 bg-gray-50/60 p-12">
              <p className="font-sans text-gray-600 text-lg mb-4">
                Applications for this program cycle are currently closed.
              </p>
              <p className="font-sans text-gray-500">
                Check back soon for the next program cycle, or contact us for more information.
              </p>
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.3}>
          <div className="border-t border-gray-200 mt-16" />
          <div className="border border-gray-100 bg-gray-50/60 p-8 mt-10 text-left">
            <h3
              className="font-serif font-extrabold text-2xl mb-6"
              style={{ color: '#1D3160' }}
            >
              Payment Terms &amp; Plan Options
            </h3>
            <ul className="space-y-4">
              {[
                'A non-refundable deposit is required upon acceptance to secure your place. The remaining balance is due 45 days before departure.',
                'Hilltop offers flexible payment plans for participants who wish to spread payments across multiple installments.',
                'For details on pricing and payment options, please apply or contact our team to discuss what works best for you.',
                'All payments must be made before arrival in Ghana.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-gray-600">
                  <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center bg-[#1D3160] text-white mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
