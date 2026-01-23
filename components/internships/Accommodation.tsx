import { 
  Clock, 
  Wifi, 
  Wind, 
  Coffee, 
  Users, 
  Shirt, 
  UtensilsCrossed, 
  Sparkles,
  Car,
  HeadphonesIcon
} from 'lucide-react';

const amenities = [
  { icon: Clock, text: '24-hour front desk & on-site security', description: 'Reputable hotels with round-the-clock staff and security presence' },
  { icon: Wifi, text: 'Complimentary high-speed Wi-Fi', description: 'Reliable connectivity for work & study' },
  { icon: Sparkles, text: 'Housekeeping & fresh linens', description: 'Room care and clean linens included' },
  { icon: Wind, text: 'Air-conditioning / reliable ventilation', description: 'Comfortable rooms suited to local climate' },
  { icon: Coffee, text: 'On-site breakfast or nearby café', description: 'Breakfast included or accessible local options' },
  { icon: Users, text: 'Common lounge / meeting areas', description: 'Spaces for cohort meetings and working groups' },
  { icon: Shirt, text: 'Laundry services (subject to fees)', description: 'Convenient on-site or nearby laundry options' },
  { icon: UtensilsCrossed, text: 'Access to on-site restaurant / dining', description: 'Multiple meal options for interns' },
  { icon: HeadphonesIcon, text: 'Support from Hilltop coordinators', description: 'Hotel-related assistance and coordination as needed' },
];

export default function Accommodation() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            Accommodation & Local Support
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Interns stay at Hilltop partner hotels, vetted for safety, comfort, and proximity to placement sites. Rooms are twin-share by default; single-room upgrades are limited and available on request.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: index % 2 === 0 ? '#1D3160' : '#F4A261' }}
                >
                  <Icon size={24} className="text-white" strokeWidth={2} />
                </div>
                <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>
                  {amenity.text}
                </h3>
                <p className="text-gray-600 text-sm">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>

        <div 
          className="bg-white rounded-lg p-8 shadow-lg mb-8"
          style={{ borderLeft: '4px solid #F4A261' }}
        >
          <p className="text-gray-700 text-sm">
            <span className="font-bold">Note:</span> All accommodation options are pre-vetted, comfortable, and meet international safety standards for visiting students.
          </p>
        </div>

        {/* Transport & Support */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#1D3160' }}
              >
                <Car size={28} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                Transport & Accessibility
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Interns use available ride-hailing apps (e.g., Bolt, Yango, Uber) or Hilltop-arranged shuttles for daily commutes and group activities.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span style={{ color: '#F4A261' }}>•</span>
                <span>Group transport for arrival, orientation, excursions and departures</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F4A261' }}>•</span>
                <span>Pre-Departure Pack includes commuting options, safety notes, and estimated daily transport costs</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: '#F4A261' }}
              >
                <HeadphonesIcon size={28} className="text-white" strokeWidth={2} />
              </div>
              <h3 className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                Local Support
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              Each destination has a dedicated Hilltop on-ground coordinator available 24/7 to:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span style={{ color: '#1D3160' }}>•</span>
                <span>Check in on intern well-being and respond to emergencies</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#1D3160' }}>•</span>
                <span>Liaise with hotel management for any concerns</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#1D3160' }}>•</span>
                <span>Facilitate cohort meetings, orientations, and safety briefings</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-8 italic">
          Final placements and hotel assignments are confirmed before departure. Interns receive host profiles and a full work plan during pre-departure orientation.
        </p>
      </div>
    </section>
  );
}

