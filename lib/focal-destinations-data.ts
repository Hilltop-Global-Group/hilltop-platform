/** Single source for focal destination copy, used on /education/destinations and [slug] pages. */

export interface FocalCountry {
  code: string;
  slug: string;
  name: string;
  region: 'West Africa' | 'East Africa' | 'Southern Africa';
  tagline: string;
  description: string;
  highlights: string[];
  /** Active internship programming */
  active: boolean;
  /** Optional link to program detail page */
  internshipHref?: string;
}

export const focalCountries: FocalCountry[] = [
  {
    code: 'GH',
    slug: 'ghana',
    name: 'Ghana',
    region: 'West Africa',
    tagline: "Hilltop's flagship destination",
    description:
      "Africa's Gold Coast and one of the continent's most stable democracies. Ghana is Hilltop's top destination for education abroad, internships, and diaspora engagement. Our deep local presence in Accra ensures seamless cultural and professional immersion.",
    highlights: ['Internship Programs', 'Education Abroad', 'Faculty Development', 'Cultural Immersion'],
    active: true,
    internshipHref: '/internships/ghana',
  },
  {
    code: 'NG',
    slug: 'nigeria',
    name: 'Nigeria',
    region: 'West Africa',
    tagline: "Africa's largest economy",
    description:
      "Africa's most populous country and one of its largest economies. Nigeria offers unparalleled exposure to Africa's entrepreneurial energy, fintech innovation, and cultural diversity.",
    highlights: ['Faculty-Led Programs', 'Business Immersions'],
    active: false,
  },
  {
    code: 'RW',
    slug: 'rwanda',
    name: 'Rwanda',
    region: 'East Africa',
    tagline: 'Innovation hub of East Africa',
    description:
      "Known globally for its rapid development and innovation-driven economy. Rwanda offers a unique environment for students to engage with technology, governance, and social enterprise. Hilltop partners with ALU and leading Kigali-based organizations.",
    highlights: ['Internship Programs', 'Education Abroad', 'Tech & Innovation', 'Cultural Immersion'],
    active: true,
    internshipHref: '/internships/rwanda',
  },
  {
    code: 'KE',
    slug: 'kenya',
    name: 'Kenya',
    region: 'East Africa',
    tagline: 'East African economic hub',
    description:
      "One of Africa's premier destinations and the East African economic and transportation hub. Hilltop has local presence in Nairobi to ensure a seamless cultural and professional experience.",
    highlights: ['Faculty-Led Programs', 'Business Immersions', 'Cultural Tourism'],
    active: false,
  },
  {
    code: 'NA',
    slug: 'namibia',
    name: 'Namibia',
    region: 'Southern Africa',
    tagline: 'Mineral-rich southwestern Africa',
    description:
      'A southwestern African nation with strong economic growth and rich mineral resources. Namibia offers unique perspectives on post-colonial development, conservation, and sustainable economic models.',
    highlights: ['Faculty-Led Programs', 'Cultural Immersions'],
    active: false,
  },
  {
    code: 'ZA',
    slug: 'south-africa',
    name: 'South Africa',
    region: 'Southern Africa',
    tagline: "Africa's most developed economy",
    description:
      "One of Africa's largest and most developed economies with strong appeal for education, tourism, and trade. South Africa provides exposure to a complex, dynamic society with world-class institutions.",
    highlights: ['Faculty-Led Programs', 'Business Immersions', 'Cultural Tourism'],
    active: false,
  },
];

export function getFocalCountryBySlug(slug: string): FocalCountry | undefined {
  return focalCountries.find((c) => c.slug === slug);
}

export function focalCountryDetailPath(code: string): string {
  const c = focalCountries.find((x) => x.code === code);
  return c ? `/education/destinations/${c.slug}` : '/education/destinations';
}

export function groupFocalCountriesByRegion(): { name: string; countries: FocalCountry[] }[] {
  const order = ['West Africa', 'East Africa', 'Southern Africa'] as const;
  return order.map((regionName) => ({
    name: regionName,
    countries: focalCountries.filter((c) => c.region === regionName),
  }));
}
