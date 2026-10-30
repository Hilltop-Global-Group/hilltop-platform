/**
 * Spring Programs hub.
 *
 * Nanya asked for a Spring Programs tab under Education that the Black British
 * Experience sits inside. This list drives that hub page. Adding another spring
 * program is one more entry here, nothing else.
 *
 * The program pages themselves stay at /programs/<slug> so the URL people paste
 * into Instagram stays short. The hub is the way in from the Education menu.
 */
export interface SpringProgram {
  slug: string;
  href: string;
  name: string;
  location: string;
  dateLabel: string;
  durationLabel: string;
  priceLabel: string;
  summary: string;
  image: string;
  imageAlt: string;
  /** Shown as a small badge on the card. */
  status: 'Applications open' | 'Opening soon';
}

export const springProgramsIntro =
  'Short, faculty-friendly programs that run over the spring break window. Each one is built around a single question and a place that answers it, with Hilltop staff on the ground throughout.';

export const springPrograms: SpringProgram[] = [
  {
    slug: 'black-british-experience',
    href: '/programs/black-british-experience',
    name: 'The Black British Experience',
    location: 'London and Oxford, United Kingdom',
    dateLabel: '22 to 26 March 2027',
    durationLabel: '5 days, 4 nights',
    priceLabel: '$1,850 per person',
    summary:
      'Five days exploring diaspora history, colonial heritage and Black British life today, from the archives of Brixton to the colleges of Oxford.',
    image: '/images/black-british/bbe-black-cultural-archives.jpg',
    imageAlt: 'The Black Cultural Archives building on Windrush Square, Brixton',
    status: 'Opening soon',
  },
];
