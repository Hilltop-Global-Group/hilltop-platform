import PastInternshipsGrid from './PastInternshipsGrid';
import { isWordPressInternshipApplicationsOpen } from '@/lib/internship-application-status';

async function fetchPastInternships() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/internships?_embed&per_page=20&orderby=date&order=desc`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return [];
    const all = await res.json();
    return all.filter((i: any) => !isWordPressInternshipApplicationsOpen(i));
  } catch {
    return [];
  }
}

export default async function PastInternshipsOnly() {
  const past = await fetchPastInternships();
  return <PastInternshipsGrid internships={past} />;
}
