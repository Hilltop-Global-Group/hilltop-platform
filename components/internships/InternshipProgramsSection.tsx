import InternshipTabs from './InternshipTabs';

async function fetchInternships() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/internships?_embed&per_page=20&orderby=date&order=desc`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return { current: [], past: [] };
    const all = await res.json();

    const current = all.filter((i: any) => i.meta._internship_is_past !== '1');
    const past = all
      .filter((i: any) => i.meta._internship_is_past === '1')
      .slice(0, 4);

    return { current, past };
  } catch {
    return { current: [], past: [] };
  }
}

export default async function InternshipProgramsSection() {
  const { current, past } = await fetchInternships();
  return <InternshipTabs currentInternships={current} pastInternships={past} />;
}
