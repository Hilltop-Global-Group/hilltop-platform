/**
 * The Black British Experience, London and Oxford, March 2027.
 *
 * Single source of truth for the one page program site. Built from Nanya
 * Osamor's designer brief of October 2026.
 *
 * Everything the brief lists as "to confirm before launch" is a constant at the
 * top of this file so it can be changed without touching a component: exact
 * dates, where Apply Now points, price, and the deadline line.
 */

/** Palette from the brief. Navy leads so the page sits with Hilltop's other programs. */
export const BBE_NAVY = '#213D68';
export const BBE_GOLD = '#C9A227';
export const BBE_CREAM = '#FAF7F2';

/**
 * Where every Apply Now goes. Header, hero, pricing and the final band all read
 * this one constant, so the switch is a one line change.
 *
 * Still to be supplied. While it is the placeholder below, the buttons render
 * disabled rather than linking somewhere wrong.
 */
export const APPLY_URL: string = 'https://tally.so/r/4aQQgr';
export const APPLY_URL_PLACEHOLDER = 'PENDING_APPLICATION_URL';

export function isApplyReady(): boolean {
  return APPLY_URL.trim() !== '' && APPLY_URL !== APPLY_URL_PLACEHOLDER;
}

export const program = {
  name: 'The Black British Experience',
  subtitle:
    'Five days in London and Oxford exploring diaspora history, colonial heritage and Black British life today.',
  /** Monday 22 to Friday 26 March 2027, confirmed by Nanya. */
  dateLabel: '22 to 26 March 2027',
  dateLabelLong: 'Monday 22 to Friday 26 March 2027',
  durationLabel: '5 days, 4 nights',
  locationLabel: 'London and Oxford',
  priceLabel: '$1,850 per person',
  priceNote: 'Excluding airfare. Based on double occupancy.',
  /**
   * Written out as a fixed string rather than formatted from a Date at render
   * time. A bare date formatted in the reader's own timezone is how the Ghana
   * 2027 page ended up showing a deadline a day early for anyone west of UTC.
   */
  applicationDeadlineLabel: 'Friday, February 19, 2027',
  depositLabel: '$500 deposit on acceptance',
  /**
   * 30 days before departure on 22 March 2027 is 20 February 2027. Written out
   * rather than computed, for the same timezone reason as the deadline above.
   *
   * It sits one day after the application deadline on purpose. Anyone applying
   * in the last days simply pays in full rather than in instalments. Confirmed
   * with Nanya on 30 October 2026.
   */
  balanceDueLabel: 'Saturday, February 20, 2027',
  paymentNote:
    'Pay in full or in instalments of your choosing. The full balance must clear by 20 February 2027, 30 days before departure.',
};

export const anchors = [
  { id: 'about', label: 'About' },
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'included', label: "What's Included" },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
];

export const intro =
  'Black history in Britain is centuries old, and much of it runs parallel to the story of Black America. This program takes students from the archives of Brixton to the colleges of Oxford to see how empire shaped Britain, how Black communities built it, and what connects us across the Atlantic.';

export const pillars = [
  {
    title: 'History and memory',
    body: 'Archives, museums and the legacy of the transatlantic slave trade.',
  },
  {
    title: 'Scholarship and access',
    body: 'A day in Oxford on Black excellence in British academia.',
  },
  {
    title: 'Culture and community',
    body: 'Brixton, food, music, and exchange with Black British students.',
  },
];

export const signatureExperiences = [
  {
    imageId: 'IMG-02',
    title: 'Black Cultural Archives, Brixton',
    body: "Britain's national home of Black history, with a guided tour and talk.",
  },
  {
    imageId: 'IMG-03',
    title: 'London, Sugar and Slavery gallery',
    body: "London's role in the transatlantic slave trade, inside a former sugar warehouse at Canary Wharf.",
  },
  {
    imageId: 'IMG-04',
    // Named academic removed at Nanya's instruction on 30 October 2026: his
    // consent to be named and pictured has not been obtained yet. Put the name
    // back here and in the Day 3 itinerary row once he agrees.
    title: 'A day in Oxford',
    body: 'A campus walk and candid conversation with an Oxford professor, plus the Pitt Rivers Museum.',
  },
  {
    imageId: 'IMG-05',
    title: 'London landmarks with a different lens',
    body: "A Thames river boat, a Blue Badge guided trail past Parliament and Buckingham Palace, and the British Museum's Africa collections.",
  },
];

export const itinerary = [
  {
    day: 'Day 1',
    title: 'Welcome to Brixton',
    items: [
      'Airport transfer and orientation',
      'Brixton heritage walk: Windrush Square, Electric Avenue, Brixton Market',
      'Welcome dinner of Caribbean and West African food',
    ],
  },
  {
    day: 'Day 2',
    title: 'How empire built London',
    items: [
      'Black Cultural Archives',
      'London Museum Docklands slavery gallery',
      'Thames river boat to Westminster',
      'Reflection circle',
    ],
  },
  {
    day: 'Day 3',
    title: 'Oxford: scholarship and reckoning',
    items: [
      'Train to Oxford',
      'Campus walk with an Oxford professor',
      'Group lunch',
      'Pitt Rivers Museum, with the Ashmolean optional',
    ],
  },
  {
    day: 'Day 4',
    title: 'Landmarks and dialogue',
    items: [
      'Blue Badge landmarks trail',
      'National Portrait Gallery',
      'Exchange with a Black British student society',
      'Farewell dinner with live music or spoken word',
    ],
  },
  {
    day: 'Day 5',
    title: 'Reflection and close',
    items: [
      "British Museum Africa collections",
      'Closing workshop',
      'Closing lunch and airport transfer',
    ],
  },
];

export const itineraryNote = 'Itinerary is a draft and subject to change.';

export const included = [
  '4 nights in a centrally located 3-star hotel, double occupancy, with daily breakfast',
  'Airport transfers',
  'Welcome dinner, farewell dinner and select lunches',
  'All guided tours and entry fees',
  'London travel card',
  'Return train to Oxford',
  'Dedicated Hilltop staff throughout',
];

export const notIncluded = [
  'International airfare',
  'Meals marked as own account',
  'Travel insurance',
  'UK entry authorization (ETA)',
];

export const whoShouldApply =
  'Open to college students and recent graduates in the U.S. and beyond. Ideal for students of history, art, politics, African and African American studies, and anyone curious about the global Black diaspora.';

export const faqs = [
  {
    q: 'Do I need a visa?',
    a: 'Most visitors, including U.S. citizens, need a UK Electronic Travel Authorisation (ETA) before travel. Participants arrange their own travel documents.',
  },
  {
    q: 'Are flights included?',
    a: 'No. Hilltop shares arrival guidance once you are accepted.',
  },
  {
    q: 'Where will we stay?',
    a: 'A centrally located 3-star hotel in London, in same-sex double rooms.',
  },
  {
    q: 'Is it safe?',
    a: 'A Hilltop team member is with the group on every activity, with a full pre-departure orientation.',
  },
  {
    q: 'How do I pay?',
    a: 'A $500 deposit is due on acceptance. After that you can pay the balance in one go or in instalments of your choosing, as long as the full amount has cleared by 20 February 2027, which is 30 days before departure. If you apply close to the deadline, expect to pay in full rather than in instalments.',
  },
];

/**
 * Image placeholders from section 4 of the brief. Each renders as a labelled
 * grey box at the right aspect ratio so final photos drop straight in: replace
 * `src` here and the component renders the photo instead.
 */
export interface BbePlaceholder {
  id: string;
  subject: string;
  /** CSS aspect-ratio value. */
  ratio: string;
  alt: string;
  src?: string;
  /** Rendered as a small caption under the image. Archive and press photographs need one. */
  credit?: string;
  /**
   * Set where the picture is cropped when the source does not match the slot's
   * aspect ratio. CSS object-position value.
   */
  position?: string;
}

/**
 * RIGHTS NOTE, read before launch.
 *
 * The five photographs wired in below came from Mustapha and are being treated
 * as cleared on his instruction. Four of them are archive or documentary press
 * images of a kind normally held by a picture agency (Getty, PA, Mirrorpix),
 * and this page is commercial: it sells a $1,850 program. Confirm a licence for
 * each before the page goes public, and put the real photographer or agency
 * into `credit`, which renders under the image.
 */
export const images: Record<string, BbePlaceholder> = {
  'IMG-01': {
    id: 'IMG-01',
    subject: 'Windrush Square or Brixton street scene',
    ratio: '16 / 9',
    src: '/images/black-british/bbe-black-cultural-archives.jpg',
    alt: 'The Black Cultural Archives building on Windrush Square, Brixton, at dusk',
    position: 'center 55%',
    credit: 'Credit to be confirmed',
  },
  'IMG-02': {
    id: 'IMG-02',
    subject: 'Black Cultural Archives building or archive materials',
    ratio: '4 / 3',
    src: '/images/black-british/bbe-bca-carnival-banner.jpg',
    alt: 'A Black Cultural Archives Museum banner carried through a Brixton street procession',
    // Pulled right so the 4:3 crop keeps the whole banner, including "MUSEUM".
    position: '68% center',
    credit: 'Credit to be confirmed',
  },
  'IMG-03': {
    id: 'IMG-03',
    subject: 'London Museum Docklands and West India Quay warehouses',
    ratio: '4 / 3',
    src: '/images/black-british/bbe-empire-windrush-london.jpg',
    alt: 'Passengers waving from the deck of the Empire Windrush on arrival in London',
    // Dropped slightly so the crop holds both the passengers on deck and the
    // "EMPIRE WINDRUSH LONDON" lettering on the hull, which is the whole point
    // of the picture.
    position: 'center 48%',
    credit: 'Credit to be confirmed',
  },
  'IMG-04': {
    id: 'IMG-04',
    subject: 'Oxford college quad or Radcliffe Camera',
    ratio: '4 / 3',
    src: '/images/black-british/bbe-oxford-tom-quad.jpg',
    alt: 'Tom Tower and the quadrangle at Christ Church, Oxford',
    credit: 'Credit to be confirmed',
  },
  'IMG-05': {
    id: 'IMG-05',
    // The brief asked for Westminster and Big Ben. The supplied photograph is
    // Tower Bridge, further east. Still the Thames and still a landmark the
    // river boat passes, so the card copy holds, but the alt text says what the
    // picture actually shows rather than what the brief asked for.
    subject: 'Thames and Westminster',
    ratio: '4 / 3',
    src: '/images/black-british/bbe-tower-bridge-thames.jpg',
    alt: 'Tower Bridge over the River Thames at sunset, with the Shard behind',
    position: 'center 55%',
    credit: 'Credit to be confirmed',
  },
  'IMG-06': {
    id: 'IMG-06',
    subject: 'Students in a group discussion or museum visit',
    ratio: '3 / 4',
    src: '/images/black-british/bbe-passengers-newspaper.jpg',
    alt: 'A group reading a newspaper together on the deck of a ship bound for Britain',
    position: 'center center',
    credit: 'Credit to be confirmed',
  },
  'IMG-07': {
    id: 'IMG-07',
    subject: 'Brixton Market or Thames skyline, faded background',
    ratio: '21 / 9',
    src: '/images/black-british/bbe-sound-system-crew.jpg',
    alt: '',
    position: 'center 45%',
  },
};
