import CurrentInternshipsGrid from './CurrentInternshipsGrid';

async function fetchCurrentInternships() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/internships?_embed&per_page=20&orderby=date&order=desc`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return [];
    const all = await res.json();
    return all.filter((i: any) => {
      const acfStatus = i.acf?.application_status;
      const metaStatus = i.meta?._internship_application_status;
      const status = acfStatus || metaStatus || 'open';
      return status !== 'closed';
    });
  } catch {
    return [];
  }
}

export default async function CurrentInternshipsOnly() {
  const current = await fetchCurrentInternships();
  return <CurrentInternshipsGrid internships={current} />;
}
