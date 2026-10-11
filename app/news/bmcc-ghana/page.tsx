import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import BMCCHero from '@/components/stories/BMCCHero';
import BMCCStoryStages from '@/components/stories/BMCCStoryStages';
import BMCCAcknowledgments from '@/components/stories/BMCCAcknowledgments';
import NewsletterSignup from '@/components/news/NewsletterSignup';
import RiskManagementCTA from '@/components/shared/RiskManagementCTA';
import { bmccVideos, isPublished } from '@/lib/bmcc-ghana-data';

import { SITE_URL } from '@/lib/site';

const PAGE_URL = `${SITE_URL}/news/bmcc-ghana`;

/** Publication date for the series. Adjust if the videos go live on a different date. */
const PUBLISH_DATE = '2026-08-15';

const TITLE =
  'BMCC in Ghana: A President Had a Vision, We Built It | Hilltop Global Group';
const DESCRIPTION =
  'How Hilltop Global Group turned a BMCC president’s vision into a completed 10-day education abroad program in Ghana for the Urban Male Leadership Academy. Watch the three-part film series.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'BMCC Ghana study abroad',
    'CUNY education abroad Africa',
    'Urban Male Leadership Academy Ghana',
    'community college study abroad Africa',
    'faculty-led programs Ghana',
    'education abroad in Africa',
    'Why Not Africa',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'article',
    url: PAGE_URL,
    title: 'BMCC in Ghana: A President Had a Vision. We Built It.',
    description: DESCRIPTION,
    siteName: 'Hilltop Global Group',
    publishedTime: PUBLISH_DATE,
    images: [
      {
        url: `${SITE_URL}/images/akwaaba-gh.jpeg`,
        width: 1200,
        height: 630,
        alt: 'BMCC students in Ghana with Hilltop Global Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMCC in Ghana: A President Had a Vision. We Built It.',
    description: DESCRIPTION,
    images: [`${SITE_URL}/images/akwaaba-gh.jpeg`],
  },
};

export default function BMCCGhanaPage() {
  const publishedVideos = bmccVideos.filter(isPublished);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'A President Had a Vision. We Built It in Ghana.',
    description: DESCRIPTION,
    datePublished: PUBLISH_DATE,
    image: `${SITE_URL}/images/akwaaba-gh.jpeg`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': PAGE_URL },
    author: { '@type': 'Organization', name: 'Hilltop Global Group', url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Hilltop Global Group',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logos/logo.png` },
    },
  };

  // Only emit VideoObject entries for videos that actually have a YouTube ID,
  // so we never publish structured data pointing at a nonexistent video.
  const videoLd = publishedVideos.map((v) => ({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${v.eyebrow}: ${v.title}`,
    description: v.description,
    thumbnailUrl: `https://img.youtube.com/vi/${v.youtubeId}/maxresdefault.jpg`,
    uploadDate: PUBLISH_DATE,
    duration: v.durationIso,
    embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
  }));

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      {videoLd.map((ld, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}

      <BMCCHero />
      <BMCCStoryStages />
      <BMCCAcknowledgments />
      <RiskManagementCTA />

      {/* Back to news */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2.5 font-sans text-xs font-semibold uppercase tracking-[0.15em] transition-opacity duration-200 hover:opacity-60"
            style={{ color: '#1D3160' }}
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-0.5 transition-transform duration-200"
            />
            Back to News and Stories
          </Link>
        </div>
      </section>

      <NewsletterSignup />
    </main>
  );
}
