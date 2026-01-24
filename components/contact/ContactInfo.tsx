import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 202-499-2284'],
      description: 'Monday - Friday, 9:00 AM - 6:00 PM EST',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['support@hilltopglobalgroup.com'],
      description: 'We typically respond within 24 hours',
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
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday - Sunday: Closed'],
      description: 'Eastern Standard Time (EST)',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-4" style={{ color: '#1D3160' }}>
            Contact Information
          </h2>
          <p className="text-gray-600 text-lg">
            Multiple ways to reach us
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactDetails.map((detail, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#F4A261' }}
              >
                <detail.icon size={28} className="text-white" />
              </div>

              <h3 className="font-serif font-bold text-xl mb-3" style={{ color: '#1D3160' }}>
                {detail.title}
              </h3>

              <div className="space-y-1 mb-3">
                {detail.details.map((line, i) => (
                  <p key={i} className="text-gray-700 font-semibold">
                    {line}
                  </p>
                ))}
              </div>

              <p className="text-gray-600 text-sm">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


