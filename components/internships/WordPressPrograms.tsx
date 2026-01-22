import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

async function getInternships() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/internships?_embed&per_page=12&orderby=date&order=desc`,
      { next: { revalidate: 60 } }
    );
    
    if (!res.ok) return [];
    const allInternships = await res.json();
    
    // Filter for OPEN internships only
    return allInternships.filter((internship: any) => 
      internship.meta._internship_application_status !== 'closed'
    );
  } catch (error) {
    console.error('Error fetching WordPress internships:', error);
    return [];
  }
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').substring(0, 200) + '...';
}

function decodeHtmlEntities(text: string) {
  const entities: { [key: string]: string } = {
    '&#8211;': '–',
    '&#8212;': '—',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&nbsp;': ' ',
  };
  return text.replace(/&#?\w+;/g, match => entities[match] || match);
}

function formatDate(dateString: string) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
}

function formatDeadline(dateString: string) {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
}

export default async function WordPressPrograms() {
  const internships = await getInternships();
  
  if (internships.length === 0) {
    return null; // Don't show section if no WordPress internships exist
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6" style={{ color: '#1D3160' }}>
            More Internship Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore additional internship opportunities designed to provide meaningful professional experiences and cultural immersion across Africa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {internships.map((internship: any, index: number) => {
            const featuredImage = internship._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            
            // Get location from the custom REST field
            let location = 'Location TBD';
            if (internship.internship_locations && internship.internship_locations.length > 0) {
              location = internship.internship_locations.map((term: any) => term.name).join(', ');
            }
            const cardColor = index % 2 === 0 ? '#1D3160' : '#F4A261';
            const isClosed = internship.meta._internship_application_status === 'closed';
            
            const cardClassName = `bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-500 ${
              isClosed 
                ? 'opacity-75 cursor-not-allowed' 
                : 'group hover:shadow-2xl hover:-translate-y-2 cursor-pointer'
            }`;
            
            const cardContent = (
              <>
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ 
                      backgroundImage: featuredImage ? `url('${featuredImage}')` : 'linear-gradient(135deg, #1D3160 0%, #F4A261 100%)' 
                    }}
                  />
                  <div 
                    className="absolute inset-0 opacity-60"
                    style={{ background: `linear-gradient(to bottom, transparent, ${cardColor})` }}
                  />
                  
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-4 py-2 rounded-full text-white text-sm font-bold backdrop-blur-sm shadow-lg"
                      style={{ 
                        backgroundColor: isClosed ? '#DC2626' : '#10B981' 
                      }}
                    >
                      {isClosed ? 'Applications Closed' : 'Applications Open'}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-white line-clamp-2">
                      {decodeHtmlEntities(internship.title.rendered)}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    {internship.meta._internship_start_date && internship.meta._internship_end_date && (
                      <div className="flex items-start gap-3">
                        <Calendar size={20} className="flex-shrink-0 mt-0.5" style={{ color: cardColor }} />
                        <div>
                          <p className="font-semibold text-gray-900">Program Dates</p>
                          <p className="text-gray-600">
                            {formatDate(internship.meta._internship_start_date)} – {formatDate(internship.meta._internship_end_date)}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="flex-shrink-0 mt-0.5" style={{ color: cardColor }} />
                      <div>
                        <p className="font-semibold text-gray-900">Location</p>
                        <p className="text-gray-600">{location}</p>
                      </div>
                    </div>

                    {internship.meta._internship_duration && (
                      <div className="flex items-start gap-3">
                        <Clock size={20} className="flex-shrink-0 mt-0.5" style={{ color: cardColor }} />
                        <div>
                          <p className="font-semibold text-gray-900">Duration</p>
                          <p className="text-gray-600">{internship.meta._internship_duration}</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {internship.excerpt?.rendered && (
                    <p className="text-gray-700 leading-relaxed mb-4">
                      {stripHtml(internship.excerpt.rendered)}
                    </p>
                  )}

                  {internship.meta._internship_format && (
                    <div 
                      className="p-4 rounded-xl mb-6"
                      style={{ backgroundColor: `${cardColor}15` }}
                    >
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold">Format:</span>{' '}
                        {internship.meta._internship_format === 'in-country' && '4-week in-country program'}
                        {internship.meta._internship_format === 'hybrid' && 'Hybrid format: 3 weeks in-country + 1 week remote'}
                        {internship.meta._internship_format === 'virtual' && 'Virtual program'}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4">
                    {isClosed ? (
                      <button
                        disabled
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 font-heading font-bold text-white rounded-xl cursor-not-allowed opacity-50"
                        style={{ backgroundColor: '#6B7280' }}
                      >
                        Applications Closed
                      </button>
                    ) : (
                      <Link
                        href={`/internships/${internship.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 font-heading font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{ backgroundColor: cardColor }}
                      >
                        Learn more
                        <ArrowRight size={18} />
                      </Link>
                    )}
                    {internship.meta._internship_application_deadline && (
                      <div className="text-center sm:text-left">
                        <p className="text-sm text-gray-600">Application deadline</p>
                        <p className="font-bold" style={{ color: cardColor }}>
                          {formatDeadline(internship.meta._internship_application_deadline)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </>
            );
            
            return isClosed ? (
              <div key={internship.id} className={cardClassName}>
                {cardContent}
              </div>
            ) : (
              <Link key={internship.id} href={`/internships/${internship.slug}`} className={cardClassName}>
                {cardContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

