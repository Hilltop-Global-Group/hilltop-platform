import {
  isFeaturedCohortApplicationDeadlinePassed,
  isWordPressInternshipApplicationsOpen,
} from '@/lib/internship-application-status';

export interface ProgramData {
  applicationDeadline: string;
  applicationUrl: string;
  startDate: string;
  endDate: string;
  costFull: string;
  costHybrid: string;
  duration: string;
  applicationStatus: 'open' | 'closed';
  overviewText: string;
  highlights: string[];
}

const DEFAULTS: Record<string, ProgramData> = {
  ghana: {
    applicationDeadline: 'April 15, 2026',
    applicationUrl: 'https://8xlyl7wsuni.typeform.com/to/ygqGReCF',
    startDate: 'June 22, 2026',
    endDate: 'July 17, 2026',
    costFull: '$6,050',
    costHybrid: '$5,250',
    duration: '4 weeks',
    applicationStatus: 'open',
    overviewText: 'The Ghana program places participants inside Accra\u2019s professional ecosystems four days a week, with Fridays dedicated to leadership development, community-engaged learning, and cultural immersion. Placements span technology, finance, agribusiness, health, and creative sectors, with each intern contributing real deliverables to their host organization.',
    highlights: ['Fintech & Technology', 'Agribusiness', 'Healthcare', 'Creative Industries', 'Social Enterprise'],
  },
  rwanda: {
    applicationDeadline: 'April 15, 2026',
    applicationUrl: 'https://8xlyl7wsuni.typeform.com/to/ygqGReCF',
    startDate: 'June 22, 2026',
    endDate: 'July 17, 2026',
    costFull: '$6,050',
    costHybrid: '$5,250',
    duration: '4 weeks',
    applicationStatus: 'open',
    overviewText: 'The Rwanda program places participants inside Kigali\u2019s professional ecosystems four days a week, in partnership with the African Leadership University (ALU). Placements span fintech, healthtech, agritech, and social enterprise sectors.',
    highlights: ['Fintech & Technology', 'Healthtech', 'Agritech', 'Social Enterprise', 'Innovation Hubs'],
  },
};

function formatWPDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

function withDeadlineResolvedStatus(data: ProgramData): ProgramData {
  if (isFeaturedCohortApplicationDeadlinePassed()) {
    return { ...data, applicationStatus: 'closed' };
  }
  return data;
}

export async function fetchProgramData(country: 'ghana' | 'rwanda'): Promise<ProgramData> {
  const defaults = DEFAULTS[country];

  try {
    const apiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;
    if (!apiUrl) return withDeadlineResolvedStatus(defaults);

    const res = await fetch(
      `${apiUrl}/internships?_embed&per_page=50&orderby=date&order=desc`,
      { next: { revalidate: 120 } }
    );
    if (!res.ok) return withDeadlineResolvedStatus(defaults);

    const internships = await res.json();

    const match = internships.find((i: any) => {
      const c = (i.acf?.country || '').toLowerCase();
      const status = i.acf?.application_status || i.meta?._internship_application_status || 'open';
      return c === country && status !== 'closed';
    }) || internships.find((i: any) => {
      return (i.acf?.country || '').toLowerCase() === country;
    });

    if (!match) return withDeadlineResolvedStatus(defaults);

    const acf = match.acf || {};
    const meta = match.meta || {};

    const hasDeadlineField = !!(acf.application_deadline || meta._internship_application_deadline);
    let applicationsOpen = isWordPressInternshipApplicationsOpen(match);
    if (!hasDeadlineField && isFeaturedCohortApplicationDeadlinePassed()) {
      applicationsOpen = false;
    }

    const merged: ProgramData = {
      applicationDeadline: acf.application_deadline ? formatWPDate(acf.application_deadline) : defaults.applicationDeadline,
      applicationUrl: acf.application_url || defaults.applicationUrl,
      startDate: acf.start_date ? formatWPDate(acf.start_date) : defaults.startDate,
      endDate: acf.end_date ? formatWPDate(acf.end_date) : defaults.endDate,
      costFull: acf.cost || meta._internship_cost || defaults.costFull,
      costHybrid: acf.cost_hybrid || defaults.costHybrid,
      duration: acf.duration || meta._internship_duration || defaults.duration,
      applicationStatus: applicationsOpen ? 'open' : 'closed',
      overviewText: acf.overview_text || defaults.overviewText,
      highlights: acf.highlights
        ? acf.highlights.split('\n').filter(Boolean)
        : defaults.highlights,
    };

    return merged;
  } catch {
    return withDeadlineResolvedStatus(defaults);
  }
}
