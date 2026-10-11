/**
 * Presentation defaults for internship cards.
 *
 * WordPress stores the program data (dates, cost, city, country, highlights) but not the
 * visual treatment. This maps a country to its accent colour, program page, and a
 * placeholder image used whenever an entry has no featured image set in WordPress.
 */

export interface InternshipPresentation {
  accent: string;
  image: string;
  href?: string;
}

/** Shape of a WordPress internship entry as returned by the REST API with _embed. */
export interface WpInternship {
  id: number;
  slug: string;
  title?: { rendered?: string };
  excerpt?: { rendered?: string };
  acf?: {
    country?: string;
    city?: string;
    start_date?: string;
    end_date?: string;
    duration?: string;
    cost?: string;
    cost_hybrid?: string;
    format?: string;
    application_deadline?: string;
    application_status?: string;
    application_url?: string;
    highlights?: string;
    overview_text?: string;
  };
  meta?: {
    _internship_start_date?: string;
    _internship_end_date?: string;
    _internship_duration?: string;
    _internship_application_deadline?: string;
    _internship_application_status?: string;
  };
  internship_locations?: Array<{ name: string }>;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url?: string }>;
  };
}

/** Used when the country has no specific mapping below. */
export const DEFAULT_PRESENTATION: InternshipPresentation = {
  accent: '#1D3160',
  image: '/images/hero-study-abroad.jpg',
};

const BY_COUNTRY: Record<string, InternshipPresentation> = {
  ghana: {
    accent: '#1D3160',
    image: '/images/akwaaba-gh.jpeg',
    href: '/internships/ghana',
  },
  rwanda: {
    accent: '#F4A261',
    image: '/images/kcc-scaled.webp',
    href: '/internships/rwanda',
  },
  kenya: {
    accent: '#1D3160',
    image: '/images/Continental Reach.jpg',
  },
  nigeria: {
    accent: '#1D3160',
    image: '/images/Continental Reach.jpg',
  },
};

export function presentationFor(country?: string): InternshipPresentation {
  if (!country) return DEFAULT_PRESENTATION;
  return BY_COUNTRY[country.trim().toLowerCase()] ?? DEFAULT_PRESENTATION;
}

/**
 * Resolve the image for a card: the WordPress featured image if one is set,
 * otherwise the country placeholder, otherwise the generic fallback.
 */
export function cardImage(featuredImage?: string, country?: string): string {
  if (featuredImage && featuredImage.trim() !== '') return featuredImage;
  return presentationFor(country).image;
}

/** Split the ACF "highlights" textarea (one per line) into an array. */
export function parseHighlights(raw?: string): string[] {
  if (!raw) return [];
  return raw
    .split('\n')
    .map((h) => h.trim())
    .filter(Boolean);
}

export function formatProgramDate(dateString?: string): string {
  if (!dateString) return '';
  try {
    const d = new Date(dateString);
    if (Number.isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  } catch {
    return dateString;
  }
}
