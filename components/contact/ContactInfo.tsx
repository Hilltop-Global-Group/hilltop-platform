import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { KenteDivider } from '../shared/HilltopBrand';

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    details: ['+1 202-499-2284'],
    description: 'Monday – Friday, 9:00 AM – 6:00 PM EST',
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['support@hilltopglobalgroup.com'],
    description: 'We typically respond within one business day',
  },
  {
    icon: MapPin,
    title: 'Office',
    details: ['700 12th Street NW, Suite 700', 'Washington, DC 20005'],
    description: 'By appointment only',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: ['Monday – Friday: 9:00 AM – 6:00 PM', 'Saturday – Sunday: Closed'],
    description: 'Eastern Standard Time (EST)',
  },
];

export default function ContactInfo() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="mb-4">
          <KenteDivider count={5} color="#F4A261" />
        </div>
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
          Reach Us
        </p>
        <h2
          className="font-serif font-extrabold text-black leading-none mb-14"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
        >
          Contact Information
        </h2>

        <div className="border-t border-gray-200" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="py-10 pr-8 border-b border-gray-200 sm:border-b-0 sm:border-r last:border-r-0"
              >
                <div className="mb-5">
                  <Icon size={20} style={{ color: '#F4A261' }} strokeWidth={2} />
                </div>
                <p className="font-serif font-bold text-lg mb-3" style={{ color: '#1D3160' }}>
                  {detail.title}
                </p>
                <div className="space-y-0.5 mb-3">
                  {detail.details.map((line, i) => (
                    <p key={i} className="font-sans text-gray-800 text-sm font-medium leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
                <p className="font-sans text-gray-400 text-xs leading-relaxed">
                  {detail.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
