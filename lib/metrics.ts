export interface SiteMetrics {
  programs_delivered: number;
  years_in_africa: number;
  african_countries: number;
  host_organizations: number;
  students_placed: number;
}

const DEFAULTS: SiteMetrics = {
  programs_delivered: 50,
  years_in_africa: 10,
  african_countries: 7,
  host_organizations: 50,
  students_placed: 1000,
};

export async function fetchMetrics(): Promise<SiteMetrics> {
  const apiUrl = process.env.NEXT_PUBLIC_HILLTOP_API_URL;
  if (!apiUrl) return DEFAULTS;

  try {
    const res = await fetch(`${apiUrl}/metrics`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return DEFAULTS;
    const data = await res.json();
    return {
      programs_delivered: data.programs_delivered ?? DEFAULTS.programs_delivered,
      years_in_africa: data.years_in_africa ?? DEFAULTS.years_in_africa,
      african_countries: data.african_countries ?? DEFAULTS.african_countries,
      host_organizations: data.host_organizations ?? DEFAULTS.host_organizations,
      students_placed: data.students_placed ?? DEFAULTS.students_placed,
    };
  } catch {
    return DEFAULTS;
  }
}

export function toStatsArray(m: SiteMetrics) {
  return [
    { value: m.programs_delivered, suffix: '+', label: 'Programs Delivered' },
    { value: m.years_in_africa, suffix: '+', label: 'Years in Africa' },
    { value: m.african_countries, suffix: '+', label: 'African Countries' },
    { value: m.host_organizations, suffix: '+', label: 'Host Organizations' },
    { value: m.students_placed, suffix: '+', label: 'Students Placed' },
  ];
}
