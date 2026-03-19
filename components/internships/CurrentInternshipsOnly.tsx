import CurrentInternshipsGrid from './CurrentInternshipsGrid';

async function fetchCurrentInternships() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/internships?_embed&per_page=20&orderby=date&order=desc`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return [];
    const all = await res.json();
    return all.filter((i: any) => i.meta._internship_is_past !== '1');
  } catch {
    return [];
  }
}

export default async function CurrentInternshipsOnly() {
  const current = await fetchCurrentInternships();
  return <CurrentInternshipsGrid internships={current} />;
}
