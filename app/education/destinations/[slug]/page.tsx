import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, MapPin } from 'lucide-react';
import { focalCountries, getFocalCountryBySlug } from '@/lib/focal-destinations-data';
import { DESTINATION_FLAG_SRC } from '@/lib/destination-flags';
import { KenteDivider, DottedAfricaMap, AfricaWatermark } from '@/components/shared/HilltopBrand';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return focalCountries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const country = getFocalCountryBySlug(slug);
  if (!country) return { title: 'Destination | Hilltop Global Group' };
  return {
    title: `${country.name} | Focal Destinations | Hilltop Global Group`,
    description: country.description.slice(0, 155) + (country.description.length > 155 ? '…' : ''),
  };
}

export default async function FocalDestinationCountryPage({ params }: Props) {
  const { slug } = await params;
  const country = getFocalCountryBySlug(slug);
  if (!country) notFound();

  const flagSrc = DESTINATION_FLAG_SRC[country.code];

  return (
    <main>
      <section className="relative pt-44 pb-16 overflow-hidden" style={{ backgroundColor: '#080f1c' }}>
        <AfricaWatermark className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03]" />
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <Link
            href="/education/destinations"
            className="inline-flex items-center gap-2 font-sans text-sm text-white/50 hover:text-white transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            All focal destinations
          </Link>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {flagSrc && (
              <span className="relative h-14 w-20 flex-shrink-0 overflow-hidden rounded-sm border border-white/20 bg-white/5">
                <Image
                  src={flagSrc}
                  alt={`${country.name} flag`}
                  fill
                  className="object-contain object-center p-1"
                  sizes="80px"
                />
              </span>
            )}
            <div>
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] mb-1" style={{ color: '#F4A261' }}>
                {country.region}
              </p>
              <h1
                className="font-serif font-extrabold text-white leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {country.name}
              </h1>
              <p className="font-sans text-white/50 text-sm mt-2">{country.tagline}</p>
            </div>
            {country.active && (
              <span
                className="ml-auto px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
                style={{ backgroundColor: '#10B981' }}
              >
                Active programs
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
        <DottedAfricaMap color="#1D3160" opacity={0.04} className="absolute -right-16 top-20" />
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <KenteDivider className="mb-8" />
          <h2 className="font-serif font-bold text-xl mb-6" style={{ color: '#1D3160' }}>
            Why we work here
          </h2>
          <p className="font-sans text-gray-600 text-base leading-relaxed mb-8">{country.description}</p>
          <div className="flex flex-wrap gap-2 mb-10">
            {country.highlights.map((h) => (
              <span
                key={h}
                className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider border border-gray-200 text-gray-600"
              >
                {h}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            {country.internshipHref && (
              <Link
                href={country.internshipHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#1D3160' }}
              >
                <MapPin size={14} />
                View internship program
                <ArrowRight size={14} />
              </Link>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-sans font-semibold text-xs uppercase tracking-[0.12em] border transition-colors hover:bg-gray-50"
              style={{ color: '#1D3160', borderColor: '#1D3160' }}
            >
              Inquire about {country.name}
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
