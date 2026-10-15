import CurrentInternshipsGrid from './CurrentInternshipsGrid';
import { isWordPressInternshipApplicationsOpen } from '@/lib/internship-application-status';
import type { WpInternship } from '@/lib/internship-presentation';
import { APPLICATIONS_OPEN, APPLICATIONS_OPEN_LABEL } from '@/lib/ghana-2027-data';

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

export default async function CurrentInternshipsOnly() {
  const current = await fetchCurrentInternships();

  // Programs are listed as soon as they are published. Before the opening date the card
  // shows "Applications Open Soon"; afterwards it switches to Apply Now by itself.
  return (
    <CurrentInternshipsGrid
      internships={current}
      opensAt={APPLICATIONS_OPEN}
      opensAtLabel={APPLICATIONS_OPEN_LABEL}
    />
  );
}
