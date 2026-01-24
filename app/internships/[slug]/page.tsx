import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Clock, DollarSign, ArrowLeft, Users, Globe, TrendingUp, Mail, Phone, Building } from 'lucide-react';

interface Internship {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  meta: {
    _internship_start_date?: string;
    _internship_end_date?: string;
    _internship_application_opens?: string;
    _internship_application_deadline?: string;
    _internship_duration?: string;
    _internship_gallery?: string;
    _internship_application_status?: string;
    _internship_hybrid_available?: string;
    _internship_hybrid_cost?: string;
    _internship_incountry_available?: string;
    _internship_incountry_cost?: string;
  };
  internship_locations?: Array<{ id: number; name: string }>;
  internship_fields?: Array<{ id: number; name: string }>;
  internship_programs?: Array<{ id: number; name: string }>;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{ id: number; name: string }>>;
  };
}

async function getInternship(slug: string): Promise<Internship | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/internships?slug=${slug}&_embed`,
      { 
        next: { revalidate: 60 }
      }
    );
    
    if (!res.ok) {
      return null;
    }
    
    const internships = await res.json();
    return internships[0] || null;
  } catch (error) {
    console.error('Error fetching internship:', error);
    return null;
  }
}

async function getGalleryImages(galleryData: string) {
  if (!galleryData) return [];
  
  try {
    // Parse the JSON data which contains array of {id, title} objects
    const galleryItems = JSON.parse(galleryData);
    
    if (!Array.isArray(galleryItems)) return [];
    
    const imagePromises = galleryItems.map(async (item: { id: number; title: string }) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/media/${item.id}`,
        { next: { revalidate: 3600 } }
      );
      if (res.ok) {
        const mediaData = await res.json();
        return {
          ...mediaData,
          customTitle: item.title // Add custom title from WordPress
        };
      }
      return null;
    });
    
    const images = await Promise.all(imagePromises);
    return images.filter(img => img !== null);
  } catch (error) {
    console.error('Error fetching gallery images:', error);
    return [];
  }
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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const internship = await getInternship(slug);
  
  if (!internship) {
    return {
      title: 'Internship Not Found - Hilltop Global Group',
    };
  }

  return {
    title: `${decodeHtmlEntities(internship.title.rendered.replace(/<[^>]*>/g, ''))} - Hilltop Global Group`,
    description: internship.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default async function InternshipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const internship = await getInternship(slug);

  if (!internship) {
    notFound();
  }

  const featuredImage = internship._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  
  // Get taxonomy terms from custom REST fields
  const locationTerms = internship.internship_locations || [];
  const fieldTerms = internship.internship_fields || [];
  const programTerms = internship.internship_programs || [];
  
  // Fetch gallery images
  const galleryImages = internship.meta._internship_gallery 
    ? await getGalleryImages(internship.meta._internship_gallery)
    : [];

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatShortDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#1D3160' }}>
        <div className="absolute inset-0">
          {featuredImage && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: `url('${featuredImage}')` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-[#27427a] to-primary-navy opacity-50" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/internships#internship-programs"
              className="inline-flex items-center gap-2 px-4 py-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Programs</span>
            </Link>
          </div>

          <div className="text-center mb-12">
            <h1 
              className="font-serif font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6"
              dangerouslySetInnerHTML={{ __html: internship.title.rendered }}
            />
            
            {(internship.meta._internship_start_date || internship.meta._internship_end_date) && (
              <p className="text-xl text-white/90 mb-8">
                {internship.meta._internship_start_date && internship.meta._internship_end_date && (
                  <>
                    <span className="font-semibold">Dates:</span> {formatShortDate(internship.meta._internship_start_date)} – {formatShortDate(internship.meta._internship_end_date)}
                  </>
                )}
              </p>
            )}

            <div 
              className="text-lg text-white/90 max-w-3xl mx-auto mb-12"
              dangerouslySetInnerHTML={{ __html: internship.excerpt.rendered }}
            />
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
              <Globe size={40} className="text-white mb-4" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-xl text-white mb-2">
                Gain global work experience
              </h3>
              <p className="text-white/80">
                Placements with innovators across finance, tech and creative sectors.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
              <TrendingUp size={40} className="text-white mb-4" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-xl text-white mb-2">
                Cross-cultural leadership
              </h3>
              <p className="text-white/80">
                Hands-on leadership modules and community engagement.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20">
              <Users size={40} className="text-white mb-4" strokeWidth={1.5} />
              <h3 className="font-serif font-bold text-xl text-white mb-2">
                Network & mentorship
              </h3>
              <p className="text-white/80">
                Connections with founders, investors and domestic accelerators.
              </p>
            </div>
          </div>

          {locationTerms.length > 0 && (
            <p className="text-center text-white/90 mt-12 text-lg">
              <span className="font-semibold">Location:</span> {locationTerms.map((l: any) => l.name).join(', ')} •{' '}
              <span className="font-semibold">Structure:</span> Mon–Thu placements, Fridays for leadership. Weekends: Cultural activities & immersion
            </p>
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
            <path fill="#ffffff" d="M0,50 Q360,0 720,50 T1440,50 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* About the Program */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#F4A261]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1D3160]/5 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#F4A261', color: 'white' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-sm font-bold uppercase tracking-wider">Program Overview</span>
            </div>
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4" style={{ color: '#1D3160' }}>
              About the Program
            </h2>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#F4A261' }} />
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-100">
            <div 
              className="prose prose-lg max-w-none
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                prose-headings:font-serif prose-headings:font-bold prose-headings:mb-4
                prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl
                prose-ul:space-y-3 prose-ul:my-6
                prose-li:text-gray-700 prose-li:pl-2
                prose-strong:font-bold
                prose-a:no-underline prose-a:font-semibold prose-a:transition-colors
                [&>h2]:text-[#1D3160] [&>h3]:text-[#1D3160] [&>h4]:text-[#1D3160]
                [&>strong]:text-[#1D3160]
                [&>a]:text-[#F4A261] hover:[&>a]:text-[#1D3160]
                [&>ul]:list-none [&>ul]:pl-0
                [&>ul>li]:relative [&>ul>li]:pl-8
                [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:top-2
                [&>ul>li]:before:w-5 [&>ul>li]:before:h-5 [&>ul>li]:before:rounded-full
                [&>ul>li]:before:flex [&>ul>li]:before:items-center [&>ul>li]:before:justify-center
                [&>ul>li]:before:text-white [&>ul>li]:before:text-xs [&>ul>li]:before:font-bold
                [&>ul>li]:before:bg-[#F4A261] [&>ul>li]:before:content-['✓']"
              dangerouslySetInnerHTML={{ __html: internship.content.rendered }}
            />
          </div>

          {/* Bottom accent */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1D3160' }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F4A261' }} />
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#1D3160' }} />
          </div>
        </div>
      </section>

      {/* Program Format & Pricing */}
      {(internship.meta._internship_hybrid_available === '1' || internship.meta._internship_incountry_available === '1') && (
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{ backgroundColor: '#1D3160', color: 'white' }}>
                <DollarSign size={18} />
                <span className="text-sm font-bold uppercase tracking-wider">Choose Your Format</span>
              </div>
              <h2 className="font-serif font-bold text-4xl md:text-5xl mb-4" style={{ color: '#1D3160' }}>
                Flexible Participation Options
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Select the format that best fits your schedule and goals
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* In-Country Format */}
              {internship.meta._internship_incountry_available === '1' && (
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#F4A261]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F4A261' }}>
                      <Building size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                        Full In-Country
                      </h3>
                      {internship.meta._internship_incountry_cost && (
                        <p className="text-3xl font-bold" style={{ color: '#F4A261' }}>
                          {internship.meta._internship_incountry_cost}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#F4A261' }}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700 flex-1">
                        <strong>Four weeks entirely in-country</strong> with full cultural immersion
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#F4A261' }}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700 flex-1">
                        Complete hands-on experience with host organizations
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#F4A261' }}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700 flex-1">
                        Maximum networking and community engagement opportunities
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 italic">
                      Ideal for students seeking deep cultural immersion and professional development
                    </p>
                  </div>
                </div>
              )}

              {/* Hybrid Format */}
              {internship.meta._internship_hybrid_available === '1' && (
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#1D3160]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#1D3160' }}>
                      <Globe size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-2xl" style={{ color: '#1D3160' }}>
                        Hybrid Format
                      </h3>
                      {internship.meta._internship_hybrid_cost && (
                        <p className="text-3xl font-bold" style={{ color: '#F4A261' }}>
                          {internship.meta._internship_hybrid_cost}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#1D3160' }}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700 flex-1">
                        <strong>Three weeks in-country</strong> plus one week remote orientation
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#1D3160' }}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700 flex-1">
                        Pre-departure virtual component to prepare for your experience
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mt-1" style={{ backgroundColor: '#1D3160' }}>
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <p className="text-gray-700 flex-1">
                        Flexible structure allowing remote work before joining the cohort on-site
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 italic">
                      Perfect balance of remote preparation and in-person experience
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Additional note if both are available */}
            {internship.meta._internship_hybrid_available === '1' && internship.meta._internship_incountry_available === '1' && (
              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg" style={{ backgroundColor: '#1D3160', color: 'white' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">You'll select your preferred format during the application process</span>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Key Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-4xl mb-12" style={{ color: '#1D3160' }}>
            Key Details
          </h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {internship.meta._internship_application_opens && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F4A261' }}>
                  <Calendar size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Applications Open:</p>
                  <p className="text-xl font-bold" style={{ color: '#1D3160' }}>
                    {formatDate(internship.meta._internship_application_opens)}
                  </p>
                </div>
              </div>
            )}

            {internship.meta._internship_application_deadline && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F4A261' }}>
                  <Calendar size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Application Deadline:</p>
                  <p className="text-xl font-bold" style={{ color: '#1D3160' }}>
                    {formatDate(internship.meta._internship_application_deadline)}
                  </p>
                </div>
              </div>
            )}

            {internship.meta._internship_start_date && internship.meta._internship_end_date && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1D3160' }}>
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Program Dates:</p>
                  <p className="text-xl font-bold" style={{ color: '#1D3160' }}>
                    {formatShortDate(internship.meta._internship_start_date)} – {formatShortDate(internship.meta._internship_end_date)}
                  </p>
                </div>
              </div>
            )}

            {internship.meta._internship_duration && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1D3160' }}>
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Duration:</p>
                  <p className="text-xl font-bold" style={{ color: '#1D3160' }}>
                    {internship.meta._internship_duration}
                  </p>
                </div>
              </div>
            )}

            {locationTerms.length > 0 && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F4A261' }}>
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Location:</p>
                  <p className="text-xl font-bold" style={{ color: '#1D3160' }}>
                    {locationTerms.map((l: any) => l.name).join(', ')}
                  </p>
                </div>
              </div>
            )}

            {fieldTerms.length > 0 && (
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1D3160' }}>
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Fields:</p>
                  <p className="text-xl font-bold" style={{ color: '#1D3160' }}>
                    {fieldTerms.map((f: any) => f.name).join(', ')}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 sm:p-12 shadow-md text-center">
            <div className="mb-8">
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white mb-6 shadow-lg" 
                style={{ 
                  backgroundColor: internship.meta._internship_application_status === 'closed' ? '#DC2626' : '#10B981' 
                }}
              >
                {internship.meta._internship_application_status === 'closed' ? 'Applications Closed' : 'Applications Open'}
              </span>
              <h2 className="font-serif font-bold text-3xl mb-4" style={{ color: '#1D3160' }}>
                Apply to this Program
              </h2>
              {internship.meta._internship_application_deadline && (
                <p className="text-gray-600 mb-6">
                  <span className="font-semibold">Application deadline:</span> {formatDate(internship.meta._internship_application_deadline)}
                </p>
              )}
              <p className="text-gray-600 mb-8">
                Spots are limited — early application is strongly advised.
              </p>
            </div>

            {internship.meta._internship_application_status === 'closed' ? (
              <button
                disabled
                className="inline-block px-10 py-4 font-serif font-bold text-white rounded-xl cursor-not-allowed opacity-60 shadow-lg"
                style={{ backgroundColor: '#6B7280' }}
              >
                Applications Closed - Check Back Later
              </button>
            ) : (
              <Link
                href="/internships#apply"
                className="inline-block px-10 py-4 font-serif font-bold text-white rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#1D3160' }}
              >
                Apply Now
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl mb-6" style={{ color: '#1D3160' }}>
            Payment Terms & Plan Options
          </h2>
          <ul className="space-y-3 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-2">
              <span style={{ color: '#F4A261' }}>•</span>
              <span>A non-refundable deposit is required upon acceptance to secure your place. The remaining balance is due 45 days before departure.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F4A261' }}>•</span>
              <span>Hilltop offers flexible payment plans for participants who wish to spread payments across multiple installments.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F4A261' }}>•</span>
              <span>For details on pricing and payment options, please apply or contact our team to discuss what works best for you.</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F4A261' }}>•</span>
              <span>All payments must be made before arrival.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sample Week */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-4xl mb-12 text-center" style={{ color: '#1D3160' }}>
            Sample Week
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="font-bold text-lg mb-3" style={{ color: '#1D3160' }}>Mon–Thu</div>
              <p className="text-gray-600">On-site internship, project work, and supervisor check-ins.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="font-bold text-lg mb-3" style={{ color: '#F4A261' }}>Fridays</div>
              <p className="text-gray-600">Leadership and development sessions or project-based sessions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="font-bold text-lg mb-3" style={{ color: '#1D3160' }}>Saturday & Sunday</div>
              <p className="text-gray-600">Cultural excursions, community engagement, or personal time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Highlights */}
      {galleryImages.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif font-bold text-4xl mb-4 text-center" style={{ color: '#1D3160' }}>
              Cultural Highlights
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Activities shown are representative of the program experience. Final excursions may vary depending on scheduling and availability.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image: any, index: number) => (
                <div 
                  key={image.id}
                  className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-64">
                    <Image
                      src={image.source_url}
                      alt={image.customTitle || image.alt_text || 'Cultural activity'}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="font-serif font-bold text-xl mb-2">
                        {image.customTitle || `Activity ${index + 1}`}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-4xl mb-6" style={{ color: '#1D3160' }}>
            Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We'd love to help you decide if this program is a good fit.
          </p>
          <p className="text-gray-600 mb-8">
            Reach our team anytime and we will get back to you as soon as possible.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="tel:+12024992284"
              className="inline-flex items-center gap-2 text-lg font-semibold"
              style={{ color: '#1D3160' }}
            >
              <Phone size={20} />
              +1 202-499-2284
            </a>
            <a 
              href="mailto:support@hilltopglobalgroup.com"
              className="inline-flex items-center gap-2 text-lg font-semibold"
              style={{ color: '#1D3160' }}
            >
              <Mail size={20} />
              support@hilltopglobalgroup.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Building size={20} />
            <span>700 12th Street NW, Suite 700. Washington, DC 20005</span>
          </div>
        </div>
      </section>
    </main>
  );
}
