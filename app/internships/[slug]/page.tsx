import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, Clock, DollarSign, ArrowLeft, Users, Globe, TrendingUp, Mail, Phone, Building, Check } from 'lucide-react';
import { KenteDivider, ArrowCTA, DecorativeUnderline, AfricaWatermark } from '@/components/shared/HilltopBrand';
import { isWordPressInternshipApplicationsOpen } from '@/lib/internship-application-status';

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
  acf?: {
    start_date?: string;
    end_date?: string;
    application_deadline?: string;
    cost?: string;
    duration?: string;
    format?: string;
    application_status?: string;
    application_url?: string;
    country?: string;
    city?: string;
    highlights?: string;
  };
  internship_locations?: Array<{ id: number; name: string }>;
  internship_fields?: Array<{ id: number; name: string }>;
  internship_programs?: Array<{ id: number; name: string }>;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string }>>;
  };
}

function getField(internship: Internship, field: string): string {
  const acfMap: Record<string, string> = {
    start_date: 'start_date',
    end_date: 'end_date',
    application_deadline: 'application_deadline',
    duration: 'duration',
    application_status: 'application_status',
    application_url: 'application_url',
    gallery: '_internship_gallery',
  };
  const metaMap: Record<string, string> = {
    start_date: '_internship_start_date',
    end_date: '_internship_end_date',
    application_deadline: '_internship_application_deadline',
    duration: '_internship_duration',
    application_status: '_internship_application_status',
    gallery: '_internship_gallery',
  };
  const acfKey = acfMap[field];
  const metaKey = metaMap[field];
  if (acfKey && internship.acf?.[acfKey as keyof typeof internship.acf]) {
    return internship.acf[acfKey as keyof typeof internship.acf] || '';
  }
  if (metaKey && internship.meta?.[metaKey as keyof typeof internship.meta]) {
    return internship.meta[metaKey as keyof typeof internship.meta] || '';
  }
  return '';
}

async function getInternship(slug: string): Promise<Internship | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/internships?slug=${slug}&_embed`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;
    const internships = await res.json();
    return internships[0] || null;
  } catch {
    return null;
  }
}

async function getGalleryImages(galleryData: string) {
  if (!galleryData) return [];
  try {
    const galleryItems = JSON.parse(galleryData);
    if (!Array.isArray(galleryItems)) return [];
    const imagePromises = galleryItems.map(async (item: { id: number; title: string }) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/media/${item.id}`,
        { next: { revalidate: 3600 } }
      );
      if (res.ok) {
        const mediaData = await res.json();
        return { ...mediaData, customTitle: item.title };
      }
      return null;
    });
    const images = await Promise.all(imagePromises);
    return images.filter(img => img !== null);
  } catch {
    return [];
  }
}

function decodeHtmlEntities(text: string) {
  const entities: { [key: string]: string } = {
    '&#8211;': '\u2013', '&#8212;': '\u2014', '&amp;': '&',
    '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#039;': "'", '&nbsp;': ' ',
  };
  return text.replace(/&#?\w+;/g, match => entities[match] || match);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const internship = await getInternship(slug);
  if (!internship) return { title: 'Internship Not Found - Hilltop Global Group' };
  return {
    title: `${decodeHtmlEntities(internship.title.rendered.replace(/<[^>]*>/g, ''))} - Hilltop Global Group`,
    description: internship.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160),
  };
}

export default async function InternshipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const internship = await getInternship(slug);
  if (!internship) notFound();

  const featuredImage = internship._embedded?.['wp:featuredmedia']?.[0]?.source_url;
  const locationTerms = internship.internship_locations || [];
  const fieldTerms = internship.internship_fields || [];
  const galleryData = getField(internship, 'gallery');
  const galleryImages = galleryData ? await getGalleryImages(galleryData) : [];

  const startDate = getField(internship, 'start_date');
  const endDate = getField(internship, 'end_date');
  const deadline = getField(internship, 'application_deadline');
  const duration = getField(internship, 'duration');
  const appUrl = internship.acf?.application_url || '';
  const highlights = internship.acf?.highlights
    ? internship.acf.highlights.split('\n').filter(Boolean)
    : [];

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const formatShortDate = (dateString: string) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const applicationsOpen = isWordPressInternshipApplicationsOpen(internship);
  const isPast = !applicationsOpen;

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
        <div className="absolute inset-0">
          {featuredImage && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{ backgroundImage: `url('${featuredImage}')` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-[#080f1c]/85 via-[#080f1c]/55 to-[#080f1c]/70" />
        </div>

        <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center pr-4 md:pr-12" aria-hidden>
          <AfricaWatermark className="w-64 md:w-80 h-auto" opacity={0.07} />
        </div>
        
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: '#F4A261' }} />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Back link */}
            <Link
            href="/internships/current"
            className="group inline-flex items-center gap-2 font-sans text-sm text-white/60 hover:text-white transition-colors duration-200 mb-8"
            >
            <ArrowLeft size={16} />
            Back to Current Internships
            </Link>

          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: '#F4A261' }}>
            {isPast ? 'Completed Program' : 'Applications Open'}
          </p>

            <h1 
            className="font-serif font-extrabold text-white leading-none mb-6"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
              dangerouslySetInnerHTML={{ __html: internship.title.rendered }}
            />
            
          {(startDate && endDate) && (
            <p className="font-sans text-white/60 text-base mb-6">
              {formatShortDate(startDate)} \u2013 {formatShortDate(endDate)}
              {locationTerms.length > 0 && <> &middot; {locationTerms.map((l: any) => l.name).join(', ')}</>}
              </p>
            )}

            <div 
            className="font-sans text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed [&>p]:mb-0"
              dangerouslySetInnerHTML={{ __html: internship.excerpt.rendered }}
            />
          </div>
      </section>

      {/* ── Feature cards ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: Globe, title: 'Gain global work experience', desc: 'Placements with innovators across finance, tech, and creative sectors.' },
              { Icon: TrendingUp, title: 'Cross-cultural leadership', desc: 'Hands-on leadership modules and community engagement.' },
              { Icon: Users, title: 'Network & mentorship', desc: 'Connections with founders, investors, and accelerators.' },
            ].map((card, i) => (
              <div key={i} className="border border-gray-100 p-6 hover:shadow-md transition-all duration-300">
                <card.Icon size={28} className="mb-4" style={{ color: i % 2 === 0 ? '#1D3160' : '#F4A261' }} strokeWidth={1.5} />
                <h3 className="font-serif font-bold text-lg mb-2" style={{ color: '#1D3160' }}>{card.title}</h3>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About the Program ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <KenteDivider className="mb-6" />
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
            Program Overview
          </p>
          <h2
            className="font-serif font-extrabold text-black leading-none mb-10"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            About the Program
          </h2>
          <div className="border-t border-gray-200 mb-10" />

          <div 
            className="prose prose-lg max-w-none
              prose-p:font-sans prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5
              prose-headings:font-serif prose-headings:font-bold
              prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg
              [&>h2]:text-[#1D3160] [&>h3]:text-[#1D3160] [&>h4]:text-[#1D3160]
              prose-ul:space-y-2 prose-ul:my-5
              prose-li:text-gray-600 prose-li:text-base
              prose-strong:text-[#1D3160] prose-strong:font-bold
              prose-a:text-[#F4A261] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: internship.content.rendered }}
          />
        </div>
      </section>

      {/* ── Format & Pricing ── */}
      {(internship.meta?._internship_hybrid_available === '1' || internship.meta?._internship_incountry_available === '1') && (
        <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <KenteDivider className="mb-6" />
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: '#F4A261' }}>
              Choose Your Format
            </p>
            <h2 className="font-serif font-extrabold text-black leading-none mb-10" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              Flexible Participation Options
            </h2>
            <div className="border-t border-gray-200 mb-10" />

            <div className="grid md:grid-cols-2 gap-6">
              {internship.meta?._internship_incountry_available === '1' && (
                <div className="bg-white border border-gray-100 p-7 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F4A261' }}>
                      <Building size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl" style={{ color: '#1D3160' }}>Full In-Country</h3>
                      {internship.meta?._internship_incountry_cost && (
                        <p className="font-serif font-bold text-2xl" style={{ color: '#F4A261' }}>{internship.meta._internship_incountry_cost}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {['Four weeks entirely in-country with full cultural immersion', 'Complete hands-on experience with host organizations', 'Maximum networking and community engagement'].map((t, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center" style={{ backgroundColor: '#F4A261' }}>
                          <Check size={12} className="text-white" strokeWidth={3} />
                        </div>
                        <p className="font-sans text-gray-600 text-sm">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {internship.meta?._internship_hybrid_available === '1' && (
                <div className="bg-white border border-gray-100 p-7 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1D3160' }}>
                      <Globe size={22} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-xl" style={{ color: '#1D3160' }}>Hybrid Format</h3>
                      {internship.meta?._internship_hybrid_cost && (
                        <p className="font-serif font-bold text-2xl" style={{ color: '#F4A261' }}>{internship.meta._internship_hybrid_cost}</p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {['Three weeks in-country plus one week remote orientation', 'Pre-departure virtual component to prepare', 'Flexible structure for remote work before joining on-site'].map((t, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center" style={{ backgroundColor: '#1D3160' }}>
                          <Check size={12} className="text-white" strokeWidth={3} />
                        </div>
                        <p className="font-sans text-gray-600 text-sm">{t}</p>
                      </div>
                    ))}
              </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ── Key Details ── */}
      <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <KenteDivider className="mb-6" />
          <h2 className="font-serif font-extrabold text-black leading-none mb-10" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Key Details
          </h2>
          <div className="border-t border-gray-200 mb-10" />

          <div className="grid md:grid-cols-2 gap-8">
            {[
              deadline && { icon: Calendar, label: 'Application Deadline', value: formatDate(deadline), accent: '#F4A261' },
              (startDate && endDate) && { icon: Clock, label: 'Program Dates', value: `${formatShortDate(startDate)} \u2013 ${formatShortDate(endDate)}`, accent: '#1D3160' },
              duration && { icon: Clock, label: 'Duration', value: duration, accent: '#1D3160' },
              locationTerms.length > 0 && { icon: MapPin, label: 'Location', value: locationTerms.map((l: any) => l.name).join(', '), accent: '#F4A261' },
              fieldTerms.length > 0 && { icon: TrendingUp, label: 'Fields', value: fieldTerms.map((f: any) => f.name).join(', '), accent: '#1D3160' },
            ].filter(Boolean).map((detail: any, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: detail.accent }}>
                  <detail.icon size={18} className="text-white" />
              </div>
              <div>
                  <p className="font-sans text-gray-400 text-xs uppercase tracking-wider mb-1">{detail.label}</p>
                  <p className="font-serif font-bold text-lg" style={{ color: '#1D3160' }}>{detail.value}</p>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Apply ── */}
      <section className="relative overflow-hidden py-20 sm:py-28 border-t border-gray-100" style={{ backgroundColor: '#080f1c' }}>
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <AfricaWatermark className="absolute right-0 top-0 w-64 h-auto opacity-5" />
          <span
            className="inline-block px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider text-white mb-6"
            style={{ backgroundColor: isPast ? '#6B7280' : '#10B981' }}
          >
            {isPast ? 'Applications Closed' : 'Applications Open'}
              </span>
          <h2 className="font-serif font-extrabold text-white leading-none mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Apply to This Program
              </h2>
          {deadline && (
            <p className="font-sans text-white/50 text-sm mb-6">
              Deadline: <span className="text-white/80 font-semibold">{formatDate(deadline)}</span>
                </p>
              )}
          <p className="font-sans text-white/50 text-base mb-10">
            Spots are limited. Early application is strongly advised.
          </p>
          {isPast ? (
            <span className="inline-block px-10 py-4 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white/40 border border-white/15 cursor-not-allowed">
              Applications Closed
            </span>
          ) : appUrl ? (
            <a
              href={appUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-4 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white border border-white/40 hover:border-white transition-colors duration-200"
            >
              Apply Now
              <ArrowCTA />
            </a>
          ) : (
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-10 py-4 font-sans font-semibold text-sm uppercase tracking-[0.15em] text-white border border-white/40 hover:border-white transition-colors duration-200"
            >
              Apply Now
              <ArrowCTA />
            </Link>
          )}
        </div>
      </section>

      {/* ── Payment ── */}
      <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <KenteDivider className="mb-6" />
          <h2 className="font-serif font-extrabold text-black leading-none mb-10" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Payment Terms
          </h2>
          <div className="border-t border-gray-200 mb-10" />
          <div className="space-y-4">
            {[
              'A non-refundable deposit is required upon acceptance to secure your place. The remaining balance is due 45 days before departure.',
              'Hilltop offers flexible payment plans for participants who wish to spread payments across multiple installments.',
              'For details on pricing and payment options, please apply or contact our team to discuss what works best for you.',
              'All payments must be made before arrival.',
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-1.5 h-1.5 mt-2" style={{ backgroundColor: '#F4A261' }} />
                <p className="font-sans text-gray-600 text-base leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sample Week ── */}
      <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <KenteDivider className="mb-6" />
          <h2 className="font-serif font-extrabold text-black leading-none mb-10" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Sample Week
          </h2>
          <div className="border-t border-gray-200 mb-10" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { day: 'Mon\u2013Thu', desc: 'On-site internship, project work, and supervisor check-ins.', accent: '#1D3160' },
              { day: 'Fridays', desc: 'Leadership and development sessions or project-based sessions.', accent: '#F4A261' },
              { day: 'Weekends', desc: 'Cultural excursions, community engagement, or personal time.', accent: '#1D3160' },
            ].map((item, i) => (
              <div key={i} className="border border-gray-100 bg-white p-6">
                <p className="font-serif font-bold text-lg mb-2" style={{ color: item.accent }}>{item.day}</p>
                <p className="font-sans text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      {galleryImages.length > 0 && (
        <section className="py-20 sm:py-28 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <KenteDivider className="mb-6" />
            <h2 className="font-serif font-extrabold text-black leading-none mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
              Cultural Highlights
            </h2>
            <p className="font-sans text-gray-500 text-sm mb-10">
              Activities shown are representative of the program experience. Final excursions may vary.
            </p>
            <div className="border-t border-gray-200 mb-10" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {galleryImages.map((image: any, index: number) => (
                <div key={image.id} className="group relative overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="relative h-56">
                    <Image src={image.source_url} alt={image.customTitle || image.alt_text || 'Cultural activity'} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080f1c]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-serif font-bold text-white text-base">{image.customTitle || `Activity ${index + 1}`}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Contact ── */}
      <section className="py-20 sm:py-28 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <KenteDivider className="mb-6 flex justify-center" />
          <h2 className="font-serif font-extrabold text-black leading-none mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}>
            Questions?
          </h2>
          <p className="font-sans text-gray-500 text-base mb-10">
            We&apos;d love to help you decide if this program is a good fit. Reach our team anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="tel:+12024992284" className="inline-flex items-center gap-2 font-sans font-semibold text-sm" style={{ color: '#1D3160' }}>
              <Phone size={16} style={{ color: '#F4A261' }} /> +1 202-499-2284
            </a>
            <a href="mailto:support@hilltopglobalgroup.com" className="inline-flex items-center gap-2 font-sans font-semibold text-sm" style={{ color: '#1D3160' }}>
              <Mail size={16} style={{ color: '#F4A261' }} /> support@hilltopglobalgroup.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 font-sans text-gray-400 text-sm">
            <MapPin size={14} style={{ color: '#F4A261' }} />
            700 12th Street NW, Suite 700. Washington, DC 20005
          </div>
        </div>
      </section>

    </main>
  );
}
