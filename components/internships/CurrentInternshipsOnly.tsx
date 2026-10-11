import CurrentInternshipsGrid from './CurrentInternshipsGrid';
import { isWordPressInternshipApplicationsOpen } from '@/lib/internship-application-status';
import type { WpInternship } from '@/lib/internship-presentation';
import {
  program,
  sectors,
  APPLICATIONS_CLOSE,
} from '@/lib/ghana-2027-data';

async function fetchCurrentInternships(): Promise<WpInternship[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/internships?_embed&per_page=20&orderby=date&order=desc`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return [];
    const all = await res.json();
    return all.filter((i: WpInternship) => isWordPressInternshipApplicationsOpen(i));
  } catch {
    return [];
  }
}

/**
 * PREVIEW ONLY. Stand-in card for the Ghana 2027 program so the Current page can be
 * demonstrated before the WordPress entry is published on 16 October 2026.
 *
 * Gated on VERCEL_ENV === 'preview', which Vercel sets only on branch deployments.
 * On production VERCEL_ENV is 'production', so this can never render on the live site.
 *
 * REMOVE THIS once the WordPress entry is published. It is demo scaffolding, not a feature.
 */
function previewPlaceholder(): WpInternship {
  const deadlineIso = APPLICATIONS_CLOSE.toISOString().slice(0, 10);
  return {
    id: -1,
    slug: 'ghana',
    title: { rendered: program.name },
    acf: {
      country: program.country,
      city: program.city,
      duration: '3 weeks in-country',
      application_deadline: deadlineIso,
      application_status: 'open',
      application_url: '',
      overview_text: program.overview,
      highlights: sectors.map((s) => s.name).join('\n'),
    },
  };
}

export default async function CurrentInternshipsOnly() {
  const current = await fetchCurrentInternships();

  const isPreviewDeployment = process.env.VERCEL_ENV === 'preview';
  const showPlaceholder = isPreviewDeployment && current.length === 0;

  return (
    <CurrentInternshipsGrid internships={showPlaceholder ? [previewPlaceholder()] : current} />
  );
}
