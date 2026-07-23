'use client';

import FadeIn from '@/components/FadeIn';
import { KenteDivider, DecorativeUnderline, Eyebrow } from '@/components/shared/HilltopBrand';
import { UMBAS_REGISTER_URL } from '@/lib/umbas-ghana-2027';
import UmbasRegisterButton from './UmbasRegisterButton';

const steps = [
  {
    title: 'Apply via the Register Now link',
    body: 'Complete the registration form to express your interest and share your details.',
  },
  {
    title: 'We confirm receipt',
    body: 'Hilltop receives your details and confirms your registration.',
  },
  {
    title: 'We invoice your deposit',
    body: "You'll receive an invoice for the $500 deposit to secure your spot.",
  },
  {
    title: 'Complete payments over time',
    body: 'Pay the balance toward your $2,950 invoice on the suggested timeline, with the final payment due 45 days before departure.',
  },
  {
    title: 'Pre-departure orientation',
    body: 'Ahead of travel, all participants receive a pre-departure orientation and a detailed Pre-Departure Kit (safety guidance, what to pack, and emergency contacts).',
  },
];

export default function UmbasRegistration() {
  const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=1D3160&bgcolor=FFFFFF&data=${encodeURIComponent(UMBAS_REGISTER_URL)}`;

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <FadeIn>
          <div className="text-center mb-14">
            <Eyebrow className="text-center">Next Steps</Eyebrow>
            <h2
              className="font-serif font-extrabold"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#1D3160' }}
            >
              Registration{' '}
              <span className="relative inline-block whitespace-nowrap">
                Process
                <DecorativeUnderline />
              </span>
            </h2>
            <KenteDivider className="mx-auto mt-6" />
          </div>
        </FadeIn>

        <div className="space-y-5 mb-14">
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.06}>
              <div className="flex items-start gap-4 border border-gray-100 bg-gray-50/60 p-6">
                <span
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center font-serif font-extrabold text-white"
                  style={{ backgroundColor: i === 0 ? '#F4A261' : '#1D3160' }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-1" style={{ color: '#1D3160' }}>
                    {step.title}
                  </h3>
                  <p className="font-sans text-gray-600 text-sm leading-relaxed">{step.body}</p>
                  {i === 0 && (
                    <p className="font-sans text-gray-500 text-xs leading-relaxed mt-3 italic">
                      *If you have already applied or registered, you do not need to register again.
                    </p>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="border border-gray-100 bg-gray-50/60 p-10 text-center">
            <div className="w-44 h-44 mx-auto border border-gray-200 bg-white flex items-center justify-center mb-6 p-3">
              <img
                src={QR_SRC}
                alt="QR code — scan to register"
                width={176}
                height={176}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="font-sans text-gray-500 font-semibold mb-1">Scan to register</p>
            <p className="font-sans text-gray-400 text-xs mb-8">or click the button below</p>
            <UmbasRegisterButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
