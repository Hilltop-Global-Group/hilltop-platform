import type { Metadata } from 'next';
import Ghana2027Hero from '@/components/internships/ghana2027/Ghana2027Hero';
import Ghana2027Overview from '@/components/internships/ghana2027/Ghana2027Overview';
import Ghana2027Format from '@/components/internships/ghana2027/Ghana2027Format';
import Ghana2027WhyGhana from '@/components/internships/ghana2027/Ghana2027WhyGhana';
import Ghana2027Industries from '@/components/internships/ghana2027/Ghana2027Industries';
import Ghana2027SampleWeek from '@/components/internships/ghana2027/Ghana2027SampleWeek';
import Ghana2027Curriculum from '@/components/internships/ghana2027/Ghana2027Curriculum';
import Ghana2027Cultural from '@/components/internships/ghana2027/Ghana2027Cultural';
import Ghana2027Included from '@/components/internships/ghana2027/Ghana2027Included';
import Ghana2027Cost from '@/components/internships/ghana2027/Ghana2027Cost';
import Ghana2027Funding from '@/components/internships/ghana2027/Ghana2027Funding';
import Ghana2027Cancellation from '@/components/internships/ghana2027/Ghana2027Cancellation';
import Ghana2027Insurance from '@/components/internships/ghana2027/Ghana2027Insurance';
import Ghana2027Accommodation from '@/components/internships/ghana2027/Ghana2027Accommodation';
import Ghana2027PreDeparture from '@/components/internships/ghana2027/Ghana2027PreDeparture';
import Ghana2027FAQ from '@/components/internships/ghana2027/Ghana2027FAQ';
import Ghana2027Application from '@/components/internships/ghana2027/Ghana2027Application';
import Ghana2027StickyApply from '@/components/internships/ghana2027/Ghana2027StickyApply';
import GhanaContact from '@/components/internships/ghana/GhanaContact';
import RiskManagementCTA from '@/components/shared/RiskManagementCTA';
import {
  APPLICATIONS_CLOSE,
  APPLICATIONS_OPEN,
  daysUntilApplicationsClose,
  getApplicationWindowState,
  program,
} from '@/lib/ghana-2027-data';

import { SITE_URL } from '@/lib/site';

const PAGE_URL = `${SITE_URL}/internships/ghana`;
const OG_IMAGE = `${SITE_URL}/images/ghana-hero.webp`;

const TITLE = '2027 Ghana Internship Program | Accra | Hilltop Global Group';
const DESCRIPTION =
  'A three-week internship in Accra, Ghana, with a three-day virtual component. Social Innovation and Entrepreneurial Leadership in Africa. July 10 to 31, 2027. Open to undergraduate students and above from US universities.';

/**
 * The application window is date-gated, so this page must not be frozen as build-time
 * HTML. Client components resolve the window themselves, and this keeps the server-rendered
 * parts (metadata, structured data) fresh as well.
 */
export const revalidate = 1800;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Ghana internship program 2027',
    'Accra internship abroad',
    'internship in Africa for students',
    'social innovation Africa internship',
    'entrepreneurial leadership Africa',
    'summer internship abroad 2027',
    'Why Not Africa',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'Hilltop Global Group',
    title: '2027 Ghana Internship Program | Accra',
    description: DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Hilltop Global Group internship program in Accra, Ghana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '2027 Ghana Internship Program | Accra',
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function GhanaInternshipPage() {
  const state = getApplicationWindowState();
  const daysRemaining = daysUntilApplicationsClose();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalProgram',
    name: program.name,
    description: DESCRIPTION,
    url: PAGE_URL,
    programType: 'Internship',
    occupationalCategory: program.theme,
    educationalProgramMode: 'full-time',
    timeToComplete: 'P3W3D',
    applicationStartDate: APPLICATIONS_OPEN.toISOString().slice(0, 10),
    applicationDeadline: APPLICATIONS_CLOSE.toISOString().slice(0, 10),
    startDate: '2027-07-05',
    endDate: '2027-07-31',
    educationalCredentialAwarded:
      'Program documentation, including a syllabus outline and contact hours, to support academic credit awarded by the participant’s own university',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Hilltop Global Group',
      url: SITE_URL,
    },
    offers: [
      {
        '@type': 'Offer',
        category: 'Program fee',
        price: program.feeUsd,
        priceCurrency: 'USD',
        url: PAGE_URL,
      },
    ],
    location: {
      '@type': 'Place',
      name: `${program.city}, ${program.country}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: program.city,
        addressCountry: 'GH',
      },
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Ghana2027Hero state={state} />
      <Ghana2027Overview />
      <Ghana2027Format />
      <Ghana2027WhyGhana />
      <Ghana2027Industries />
      <Ghana2027SampleWeek />
      <Ghana2027Curriculum />
      <Ghana2027Cultural />
      <Ghana2027Included />
      <Ghana2027Cost />
      <Ghana2027Funding state={state} />
      <Ghana2027Cancellation />
      <Ghana2027Insurance />
      <RiskManagementCTA />
      <Ghana2027Accommodation />
      <Ghana2027PreDeparture />
      <Ghana2027FAQ />
      <Ghana2027Application state={state} daysRemaining={daysRemaining} />
      <GhanaContact />

      <Ghana2027StickyApply state={state} daysRemaining={daysRemaining} />
    </main>
  );
}
