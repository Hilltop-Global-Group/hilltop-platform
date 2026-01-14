'use client';

import { useState } from 'react';
import { Calendar, MapPin, Clock, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Internship {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  meta: {
    _internship_start_date?: string;
    _internship_end_date?: string;
    _internship_application_deadline?: string;
    _internship_cost?: string;
    _internship_duration?: string;
    _internship_format?: string;
  };
  internship_location?: number[];
  internship_field?: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{ id: number; name: string }>>;
  };
}

interface Location {
  id: number;
  name: string;
  count: number;
}

interface Field {
  id: number;
  name: string;
  count: number;
}

interface InternshipsListProps {
  internships: Internship[];
  locations: Location[];
  fields: Field[];
}

export default function InternshipsList({ internships, locations, fields }: InternshipsListProps) {
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [activeField, setActiveField] = useState<number | null>(null);

  const filteredInternships = internships.filter(internship => {
    const matchesLocation = !activeLocation || internship.internship_location?.includes(activeLocation);
    const matchesField = !activeField || internship.internship_field?.includes(activeField);
    return matchesLocation && matchesField;
  });

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>/g, '');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Location Filter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-3" style={{ color: '#1D3160' }}>
              Filter by Location
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveLocation(null)}
                className={`px-6 py-3 font-heading font-semibold text-sm rounded-full transition-all duration-300 ${
                  activeLocation === null
                    ? 'text-white shadow-lg'
                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: activeLocation === null ? '#1D3160' : undefined,
                }}
              >
                All Locations
              </button>
              {locations
                .filter(loc => loc.count > 0)
                .map((location) => (
                  <button
                    key={location.id}
                    onClick={() => setActiveLocation(location.id)}
                    className={`px-6 py-3 font-heading font-semibold text-sm rounded-full transition-all duration-300 ${
                      activeLocation === location.id
                        ? 'text-white shadow-lg'
                        : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                    }`}
                    style={{
                      backgroundColor: activeLocation === location.id ? '#1D3160' : undefined,
                    }}
                  >
                    {location.name} ({location.count})
                  </button>
                ))}
            </div>
          </div>

          {/* Field Filter */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-3" style={{ color: '#1D3160' }}>
              Filter by Field
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveField(null)}
                className={`px-6 py-3 font-heading font-semibold text-sm rounded-full transition-all duration-300 ${
                  activeField === null
                    ? 'text-white shadow-lg'
                    : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                }`}
                style={{
                  backgroundColor: activeField === null ? '#1D3160' : undefined,
                }}
              >
                All Fields
              </button>
              {fields
                .filter(field => field.count > 0)
                .map((field) => (
                  <button
                    key={field.id}
                    onClick={() => setActiveField(field.id)}
                    className={`px-6 py-3 font-heading font-semibold text-sm rounded-full transition-all duration-300 ${
                      activeField === field.id
                        ? 'text-white shadow-lg'
                        : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
                    }`}
                    style={{
                      backgroundColor: activeField === field.id ? '#1D3160' : undefined,
                    }}
                  >
                    {field.name} ({field.count})
                  </button>
                ))}
            </div>
          </div>
        </div>

        {/* Internships Grid */}
        {filteredInternships.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No internships found. Check back soon!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInternships.map((internship) => {
              const featuredImage = internship._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              const locationTerms = internship._embedded?.['wp:term']?.[0] || [];
              const fieldTerms = internship._embedded?.['wp:term']?.[1] || [];

              return (
                <article
                  key={internship.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden bg-gray-200">
                    {featuredImage ? (
                      <Image
                        src={featuredImage}
                        alt={internship.title.rendered}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url('http://hilltopglobalgroup.com/wp-content/uploads/2023/09/IMG_4280-1-scaled-e1759312955679.jpg')`,
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Location Badge */}
                    {locationTerms.length > 0 && (
                      <div className="absolute top-4 left-4">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1"
                          style={{ backgroundColor: '#F4A261' }}
                        >
                          <MapPin size={12} />
                          {locationTerms[0].name}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 
                      className="font-heading font-bold text-xl mb-3 line-clamp-2" 
                      style={{ color: '#1D3160' }}
                      dangerouslySetInnerHTML={{ __html: internship.title.rendered }}
                    />

                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      {internship.meta._internship_duration && (
                        <div className="flex items-center gap-2">
                          <Clock size={16} style={{ color: '#F4A261' }} />
                          <span>{internship.meta._internship_duration}</span>
                        </div>
                      )}
                      {internship.meta._internship_start_date && (
                        <div className="flex items-center gap-2">
                          <Calendar size={16} style={{ color: '#F4A261' }} />
                          <span>{formatDate(internship.meta._internship_start_date)}</span>
                        </div>
                      )}
                      {internship.meta._internship_cost && (
                        <div className="flex items-center gap-2">
                          <DollarSign size={16} style={{ color: '#F4A261' }} />
                          <span>{internship.meta._internship_cost}</span>
                        </div>
                      )}
                    </div>

                    {/* Field Tags */}
                    {fieldTerms.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {fieldTerms.slice(0, 2).map((field: any) => (
                          <span
                            key={field.id}
                            className="px-2 py-1 text-xs font-semibold rounded-full"
                            style={{ backgroundColor: '#F4F5F7', color: '#1D3160' }}
                          >
                            {field.name}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <Link
                        href={`/internships-cms/${internship.slug}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300 group-hover:gap-2"
                        style={{ color: '#1D3160' }}
                      >
                        Learn More
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

