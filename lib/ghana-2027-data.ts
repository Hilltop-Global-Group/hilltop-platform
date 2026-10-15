/**
 * Ghana 2027 Internship Program data.
 *
 * Single source of truth for the public page at /internships/ghana.
 * Keep all dates, fees, policy copy and the application gate here so that
 * components stay presentational and nothing is hardcoded in the UI.
 */

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

export interface ProgramSummary {
  name: string;
  theme: string;
  city: string;
  country: string;
  overview: string;
  durationInCountry: string;
  durationVirtual: string;
  feeUsd: number;
  feeLabel: string;
  depositUsd: number;
  depositLabel: string;
  contactHours: number;
}

export interface EligibilityItem {
  label: string;
  detail: string;
}

export interface KeyDate {
  /** Short label used in compact lists and the hero strip. */
  label: string;
  /** Human-readable date string. Never reformat this in a component. */
  value: string;
  /** Optional supporting line. */
  note?: string;
  /** Machine-readable date for JSON-LD. Omitted where the date is unconfirmed. */
  iso?: string;
  /** Whether the item belongs to the application window or the program itself. */
  group: 'application' | 'program';
}

export interface TimelineStage {
  stage: string;
  dates: string;
  description: string;
}

export interface SectorPlacement {
  role: string;
  description: string;
}

export interface Sector {
  id: string;
  name: string;
  blurb: string;
  placements: SectorPlacement[];
}

export interface SampleWeekBlock {
  label: string;
  time?: string;
  description: string;
}

export interface CurriculumComponent {
  title: string;
  description: string;
}

export interface CulturalHighlight {
  title: string;
  description: string;
  image: string;
}

export interface WhyGhanaReason {
  title: string;
  description: string;
}

export interface PaymentTerm {
  label: string;
  detail: string;
}

export interface CancellationTier {
  window: string;
  outcome: string;
}

export interface Funder {
  name: string;
  description: string;
  url?: string;
}

export interface PreDepartureRequirement {
  /** lucide-react icon name, mapped to a component in the UI. */
  icon:
    | 'passport'
    | 'visa'
    | 'vaccination'
    | 'flights'
    | 'insurance'
    | 'packing'
    | 'orientation';
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type ApplicationWindowState = 'before-open' | 'open' | 'closed';

/* ------------------------------------------------------------------ */
/* Application gate                                                   */
/* ------------------------------------------------------------------ */

/**
 * Replace with the live Google Form URL when it exists.
 * While this is the placeholder, the page renders the pre-open state so it is
 * safe to deploy before the form is built.
 */
export const APPLICATION_FORM_URL: string = 'https://tally.so/r/Y5El8d';

/** Embeddable variant of the same Tally form. */
export const APPLICATION_FORM_EMBED_URL: string =
  'https://tally.so/embed/Y5El8d?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1';

export const FORM_URL_PLACEHOLDER = 'PENDING_FORM_URL';

export function isFormReady(): boolean {
  return APPLICATION_FORM_URL.trim() !== '' && APPLICATION_FORM_URL !== FORM_URL_PLACEHOLDER;
}

export const APPLICATIONS_OPEN = new Date('2026-10-16T00:00:00');
export const APPLICATIONS_CLOSE = new Date('2027-04-02T23:59:59');

/** Display strings for the two gate boundaries. */
export const APPLICATIONS_OPEN_LABEL = 'Friday, October 16, 2026';
export const APPLICATIONS_CLOSE_LABEL = 'Friday, April 2, 2027';

/**
 * Resolves which application state the page should render.
 * Returns 'before-open' whenever the form URL is still a placeholder, so the
 * page never links out to a form that does not exist yet.
 */
export function getApplicationWindowState(now: Date = new Date()): ApplicationWindowState {
  if (!isFormReady()) return 'before-open';
  if (now.getTime() < APPLICATIONS_OPEN.getTime()) return 'before-open';
  if (now.getTime() > APPLICATIONS_CLOSE.getTime()) return 'closed';
  return 'open';
}

/** Whole days remaining until applications close. Zero once the window has passed. */
export function daysUntilApplicationsClose(now: Date = new Date()): number {
  const msPerDay = 1000 * 60 * 60 * 24;
  const remaining = Math.ceil((APPLICATIONS_CLOSE.getTime() - now.getTime()) / msPerDay);
  return remaining > 0 ? remaining : 0;
}

/* ------------------------------------------------------------------ */
/* Program                                                            */
/* ------------------------------------------------------------------ */

export const program: ProgramSummary = {
  name: 'Ghana 2027 Internship Program',
  theme: 'Social Innovation and Entrepreneurial Leadership in Africa',
  city: 'Accra',
  country: 'Ghana',
  overview:
    'A three-week in-country internship in Accra, Ghana, with a three-day virtual component on the front end. Participants deliver real work inside a vetted host organization while building a practical understanding of how social innovation and entrepreneurial leadership operate in an African market.',
  durationInCountry: 'Three weeks in Accra',
  durationVirtual: 'Three virtual days before travel',
  feeUsd: 4500,
  feeLabel: '$4,500',
  depositUsd: 500,
  depositLabel: '$500',
  contactHours: 157.5,
};

export const eligibility: EligibilityItem[] = [
  {
    label: 'Age',
    detail: 'Applicants must be 18 or older by the program start date.',
  },
  {
    label: 'Academic level',
    detail: 'Undergraduate level or above.',
  },
  {
    label: 'Where you study',
    detail: 'Open to students from anywhere. No partner-university affiliation is required.',
  },
];

/* ------------------------------------------------------------------ */
/* Dates                                                              */
/* ------------------------------------------------------------------ */

export const keyDates: KeyDate[] = [
  {
    label: 'Applications open',
    value: 'Friday, October 16, 2026',
    iso: '2026-10-16',
    group: 'application',
  },
  {
    label: 'Applications close',
    value: 'Friday, April 2, 2027',
    iso: '2027-04-02',
    group: 'application',
  },
  {
    label: 'Virtual pre-departure orientation',
    value: 'Tuesday, June 29, 2027',
    note: 'Mandatory',
    iso: '2027-06-29',
    group: 'program',
  },
  {
    label: 'Virtual company meet and greet',
    value: 'Thursday, July 1, 2027',
    note: 'Mandatory',
    iso: '2027-07-01',
    group: 'program',
  },
  {
    label: 'Virtual component days',
    value: 'Monday to Wednesday, July 5 to 7, 2027',
    note: 'Remote',
    iso: '2027-07-05',
    group: 'program',
  },
  {
    label: 'Arrive in Accra',
    value: 'Saturday, July 10, 2027',
    iso: '2027-07-10',
    group: 'program',
  },
  {
    label: 'Depart Accra',
    value: 'Saturday, July 31, 2027',
    iso: '2027-07-31',
    group: 'program',
  },
  {
    label: 'Post-program virtual reflection',
    value: 'August 2027',
    note: 'Date to be confirmed',
    group: 'program',
  },
];

/** The four dates surfaced in the hero strip. */
export const heroDates: KeyDate[] = [
  keyDates[0],
  keyDates[1],
  keyDates[5],
  keyDates[6],
];

export const timeline: TimelineStage[] = [
  {
    stage: 'Virtual pre-departure orientation',
    dates: 'Tuesday, June 29, 2027',
    description:
      'A mandatory live session covering program structure, health and safety, travel logistics, cultural context and professional expectations.',
  },
  {
    stage: 'Virtual company meet and greet',
    dates: 'Thursday, July 1, 2027',
    description:
      'A mandatory introduction to your host organization and supervisor, including an early look at your project brief.',
  },
  {
    stage: 'Virtual component (remote)',
    dates: 'Monday to Wednesday, July 5 to 7, 2027',
    description:
      'Three remote working days. You scope your deliverable with your supervisor, complete the preparatory curriculum and begin background research before you fly.',
  },
  {
    stage: 'Travel to Accra',
    dates: 'Saturday, July 10, 2027',
    description:
      'Arrival in Accra with airport pickup, accommodation check-in and a group welcome dinner.',
  },
  {
    stage: 'In-country internship',
    dates: 'Monday, July 12 to Friday, July 30, 2027',
    description:
      'Three weeks on site with your host organization, with weekly community-engaged learning, guided cultural immersion and regular coordinator check-ins.',
  },
  {
    stage: 'Departure',
    dates: 'Saturday, July 31, 2027',
    description:
      'Group debrief, final presentations and a farewell dinner before group transfer to the airport.',
  },
  {
    stage: 'Post-program virtual reflection',
    dates: 'August 2027, date to be confirmed',
    description:
      'A remote debrief session plus credit and scholarship documentation support once you are home.',
  },
];

/* ------------------------------------------------------------------ */
/* Why Ghana (copy carried over from the 2026 page)                   */
/* ------------------------------------------------------------------ */

export const whyGhana: WhyGhanaReason[] = [
  {
    title: 'Regional hub for finance and entrepreneurship',
    description:
      'Accra is a leading West African center for startups, finance and growing tech ecosystems.',
  },
  {
    title: 'Strong democratic governance and youthful population',
    description:
      'Stable institutions and a young workforce create high-impact internship opportunities.',
  },
  {
    title: 'Hospitality and cultural vibrancy',
    description:
      'Warm communities, music and festivals enrich learning and cultural immersion.',
  },
  {
    title: 'Opportunities in fintech, agribusiness and creative industries',
    description:
      'Wide-ranging placements across sectors where Ghana is rapidly innovating.',
  },
];

/* ------------------------------------------------------------------ */
/* Industries and placements                                          */
/* ------------------------------------------------------------------ */

/** Item 4: the explicit host-organization count was removed at Nanya's request. */
export const PLACEMENT_SOURCING_NOTE =
  'Placements are drawn from our network of vetted host organizations in Accra and matched to your academic background, career interests and each organization\u2019s capacity to supervise meaningful work.';

/** Item 5: the sector list is illustrative, not exhaustive. */
export const SECTORS_NOT_EXHAUSTIVE_NOTE =
  'These sectors are examples, not a complete list. Placements in other fields may be possible depending on your interests and host availability.';

/**
 * REVIEW: placement examples below are illustrative of the kind of work interns
 * take on. They are written generically on purpose, with no host organization
 * named. Confirm with the placements team before the page goes live.
 */
export const sectors: Sector[] = [
  {
    id: 'fintech-technology',
    name: 'Fintech and Technology',
    blurb:
      'Digital payments, lending platforms, data and software teams building for African markets.',
    placements: [
      {
        role: 'Product and user research',
        description:
          'Map an onboarding funnel for a mobile money product and recommend fixes for the biggest drop-off points.',
      },
      {
        role: 'Data and analytics',
        description:
          'Build a reporting dashboard from transaction data so the team can track adoption week to week.',
      },
      {
        role: 'Go-to-market support',
        description:
          'Research an adjacent West African market and draft an entry brief for the leadership team.',
      },
    ],
  },
  {
    id: 'agribusiness',
    name: 'Agribusiness',
    blurb:
      'Value chains, processing, logistics and smallholder support across cocoa, horticulture and staple crops.',
    placements: [
      {
        role: 'Value chain analysis',
        description:
          'Document a crop value chain from farm gate to buyer and identify where margin is lost.',
      },
      {
        role: 'Operations and logistics',
        description:
          'Review aggregation and cold chain practices and propose a lower-waste handling process.',
      },
      {
        role: 'Farmer engagement',
        description:
          'Design training materials that help smallholder suppliers meet buyer quality standards.',
      },
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    blurb:
      'Clinics, digital health platforms and public health organizations working on access and quality.',
    placements: [
      {
        role: 'Health systems research',
        description:
          'Compile a service-access review for a clinic network and summarize findings for management.',
      },
      {
        role: 'Digital health support',
        description:
          'Help test and document a patient records workflow and write the user guide for frontline staff.',
      },
      {
        role: 'Community health outreach',
        description:
          'Build a community education campaign plan around a priority prevention topic.',
      },
    ],
  },
  {
    id: 'creative-industries',
    name: 'Creative Industries',
    blurb:
      'Media, fashion, design, music and the studios and agencies that export Ghanaian creative work.',
    placements: [
      {
        role: 'Brand and content',
        description:
          'Produce a content calendar and a set of launch assets for a creative studio.',
      },
      {
        role: 'Audience growth',
        description:
          'Analyze channel performance for a media house and recommend where to focus next quarter.',
      },
      {
        role: 'Events and production',
        description:
          'Support planning and run-of-show for a live cultural or industry event.',
      },
    ],
  },
  {
    id: 'social-enterprise',
    name: 'Social Enterprise',
    blurb:
      'Mission-driven ventures, foundations and nonprofits building revenue models alongside impact.',
    placements: [
      {
        role: 'Impact measurement',
        description:
          'Define a small set of outcome indicators and build the template the team will report against.',
      },
      {
        role: 'Fundraising and partnerships',
        description:
          'Research grant and partner prospects and draft the case-for-support narrative.',
      },
      {
        role: 'Program design',
        description:
          'Pilot a new beneficiary intake process and document what worked for the next cohort.',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Sample week and curriculum                                         */
/* ------------------------------------------------------------------ */

export const sampleWeek: SampleWeekBlock[] = [
  {
    label: 'Monday to Thursday',
    time: 'Approximately 9:00 a.m. to 5:00 p.m.',
    description:
      'On-site internship work with your host company, including project work and supervisor check-ins.',
  },
  {
    label: 'Friday morning',
    description: 'On-site internship work with your host company.',
  },
  {
    label: 'Friday afternoon',
    description: 'Community service project (community-engaged learning).',
  },
  {
    label: 'Saturday and Sunday',
    description: 'Guided cultural excursions, community engagement, or personal time.',
  },
];

export const curriculum: CurriculumComponent[] = [
  {
    title: 'Deliverable-driven placement',
    description:
      'Every participant works to a scoped deliverable agreed with their host supervisor, so the work has a defined output rather than open-ended shadowing.',
  },
  {
    title: 'Virtual component',
    description:
      'Orientation, the company meet and greet and three remote working days front-load context, scoping and background research before travel.',
  },
  {
    title: 'Project supervision',
    description:
      'Your host-company supervisor directs the work on your project, and a Hilltop on-ground coordinator supports progress and check-ins throughout.',
  },
  {
    title: 'Community-engaged learning',
    description:
      'A weekly community service project connects the professional placement to the communities around it.',
  },
  {
    title: 'Guided cultural immersion',
    description:
      'Scheduled excursions with a dedicated guide place your work in Ghana’s historical, civic and creative context.',
  },
  {
    title: 'Reflection and documentation',
    description:
      'A post-program virtual reflection plus a syllabus outline, contact-hour log and supervisor evaluation to support credit and scholarship applications.',
  },
];

/* ------------------------------------------------------------------ */
/* Cultural highlights (carried over from the 2026 page)              */
/* ------------------------------------------------------------------ */

export const culturalHighlights: CulturalHighlight[] = [
  {
    title: 'Traditional Music and Dance',
    description: 'Cultural performances and heritage',
    image: '/images/cultural-ga.webp',
  },
  {
    title: 'Accra Arts Centre',
    description: 'Arts, crafts and cultural heritage',
    image: '/images/Accra-Art-Centre-16.webp',
  },
  {
    title: 'Makola Market',
    description: 'Markets and shopping for souvenirs',
    image: '/images/makola.webp',
  },
  {
    title: 'The Black Star Gate',
    description: 'Independence Square and national heritage',
    image: '/images/freedom.jpeg',
  },
  {
    title: 'Kakum National Park',
    description: 'Nature, wildlife and canopy walks',
    image: '/images/kakum.webp',
  },
  {
    title: 'Creative Hubs',
    description: 'Art galleries and design spaces',
    image: '/images/impacthub.webp',
  },
  {
    title: 'Accra Skyline and Business Districts',
    description: 'Urban growth and enterprise',
    image: '/images/business.webp',
  },
  {
    title: 'Historical Sites',
    description: 'Colonial landmarks and Ghanaian history',
    image: '/images/osu-castle.JPG',
  },
];

export const CULTURAL_INTRO =
  'Cultural programming is not an add-on. It is integral to the learning experience. These immersions connect your professional placement to Ghana’s history, civic institutions, and creative economies.';

/* ------------------------------------------------------------------ */
/* Included and not included                                          */
/* ------------------------------------------------------------------ */

export const included: string[] = [
  'Deliverable-based internship placement and company matching with a vetted host organization in Accra',
  'Dedicated host-company supervisor and on-ground Hilltop coordinator support',
  'Accommodation (same-sex, twin-share rooms at Hilltop-vetted partner hotels) with daily breakfast',
  'Airport pickup and group transportation to scheduled activities',
  'Transport credit for travel to internship sites',
  'Welcome and farewell dinners plus select meals as specified',
  'Virtual pre-departure orientation and virtual company meet and greet',
  'Weekly community-engaged learning and guided cultural immersion',
  'Scheduled cultural excursions and entrance fees with a dedicated guide',
  'Mandatory international insurance',
  'Post-program virtual reflection and credit-documentation support',
];

export const notIncluded: string[] = [
  'International flights to and from Ghana',
  'Visa fees and costs',
  'Meals not specified in the program',
  'Personal spending money and self-arranged tours or excursions',
  'Vaccinations and any required medical tests',
];

/* ------------------------------------------------------------------ */
/* Accommodation (carried over from the 2026 page)                    */
/* ------------------------------------------------------------------ */

export const accommodation = {
  image: '/images/accom.JPG',
  captionTitle: 'Safe, comfortable accommodation.',
  captionSubtitle: 'Pre-vetted hotels near placement sites',
  paragraphs: [
    'Interns stay at Hilltop-vetted partner hotels, selected for safety, comfort, and proximity to placement sites. Rooms are same-sex, twin-share by default, with daily breakfast included.',
    'A dedicated on-ground coordinator is present in Accra to check in on intern well-being, liaise with the hotel, and facilitate orientations and safety briefings throughout the program.',
  ],
};

/* ------------------------------------------------------------------ */
/* Cost, payment and cancellation                                     */
/* ------------------------------------------------------------------ */

export const COST_NOTES: string[] = [
  'Applications are reviewed and applicants are notified within four weeks.',
  'The $500 deposit counts toward the total program fee.',
];

export const paymentTerms: PaymentTerm[] = [
  {
    label: '$500 deposit on acceptance',
    detail: 'The deposit secures your place and is credited against the total fee.',
  },
  {
    label: 'Balance due 45 days before the program start',
    detail: 'The remaining balance must be paid in full no later than 45 days before the program starts.',
  },
  {
    label: 'Flexible installment plans',
    detail: 'Payments can be spread across installments between acceptance and the balance due date.',
  },
  {
    label: 'Late acceptances',
    detail: 'Participants accepted within 45 days of the start date pay the full fee on acceptance.',
  },
  {
    label: 'All payments completed before arrival',
    detail: 'No outstanding balance may remain at the point of travel.',
  },
];

export const cancellationTiers: CancellationTier[] = [
  {
    window: 'More than 90 days before the program start',
    outcome:
      'A $250 processing fee is retained and all other payments are refunded.',
  },
  {
    window: '45 to 90 days before the program start',
    outcome: '50% of the program fee is retained.',
  },
  {
    window: 'Within 45 days of the program start',
    outcome: 'No refund is available.',
  },
];

export const CANCELLATION_NOTES: string[] = [
  'All cancellations must be submitted in writing.',
  'Certain suppliers may have different cancellation terms, and participants are charged accordingly.',
];

/* ------------------------------------------------------------------ */
/* Insurance                                                          */
/* ------------------------------------------------------------------ */

export const insuranceCoverage: string[] = [
  'Comprehensive medical coverage for accident and illness, in-patient and out-patient',
  'Emergency medical evacuation and repatriation',
  '24/7 global medical and security assistance',
  'Mental-health support',
  'Security evacuation coverage',
  'Political and natural-disaster evacuation coverage',
];

export const INSURANCE_INTRO =
  'Mandatory international insurance is included in the program fee for every participant, for the full duration of the in-country component.';

/* ------------------------------------------------------------------ */
/* Funding Your Internship                                            */
/* ------------------------------------------------------------------ */

export const FUNDING_INTRO =
  "Many students fund their Hilltop internship through scholarships, grants and their university's financial aid. The national scholarships below support study and internships abroad. Eligibility rules and deadlines change each year, so please check each funder's website for the latest details, and speak to your study abroad or financial aid office early, as many awards require an advisor's approval.";

export const FUNDING_CREDIT_CALLOUT =
  'Academic credit: Several of these scholarships, including Gilman and the Fund for Education Abroad, require your internship to be credit-bearing. Academic credit is arranged through your own university, not through Hilltop. Talk to your study abroad office or academic advisor about earning credit before you apply. Hilltop will provide program documentation, including a syllabus outline and contact hours, to support your credit and scholarship applications.';

export const funders: Funder[] = [
  {
    name: 'Benjamin A. Gilman International Scholarship',
    description:
      'For U.S. citizens studying at undergraduate level who receive a Federal Pell Grant. Programs must be credit-bearing. Deadline for summer 2027 programs: February 25, 2027.',
    url: 'https://www.gilmanscholarship.org',
  },
  {
    name: 'Fund for Education Abroad (FEA)',
    description:
      'For U.S. undergraduates with financial need who are abroad for at least 14 days, earning academic credit, and have not studied abroad before. Applications for summer 2027 open in fall 2026.',
    url: 'https://www.fundforeducationabroad.org',
  },
  {
    name: 'Phi Kappa Phi Study Abroad Grants',
    description:
      '$1,000 grants for undergraduates with a GPA of 3.75 or above whose university has an active Phi Kappa Phi chapter. Membership is not required. The application deadline is usually in March.',
    url: 'https://www.phikappaphi.org',
  },
  {
    name: 'Go Overseas Study and Intern Abroad Scholarship',
    description:
      'A $500 scholarship open to students of any nationality taking part in a study or intern abroad program.',
    url: 'https://www.gooverseas.com',
  },
  {
    name: 'Your own university',
    description:
      'Many universities offer study abroad scholarships, departmental travel grants and research funding, and federal financial aid can often be applied to credit-bearing programs abroad. Ask your study abroad and financial aid offices what is available to you.',
  },
];

export const FUNDING_INSTALLMENTS_NOTE =
  'Paying in installments: Hilltop offers a payment plan. A $500 deposit secures your place on acceptance, and the balance can be paid in installments, with the final payment due 45 days before the program starts.';

/* ------------------------------------------------------------------ */
/* Pre-departure requirements                                         */
/* ------------------------------------------------------------------ */

export const preDepartureRequirements: PreDepartureRequirement[] = [
  {
    icon: 'passport',
    title: 'Valid passport',
    description:
      'Must be valid for at least 6 months beyond the program end date, with blank visa pages.',
  },
  {
    icon: 'visa',
    title: 'Ghana visa',
    description:
      'Required for most nationalities; participants arrange their own visa (Hilltop can provide an invitation/support letter).',
  },
  {
    icon: 'vaccination',
    title: 'Yellow Fever vaccination',
    description:
      'Required for entry to Ghana; proof of vaccination (carte jaune) needed. Other vaccines may be recommended.',
  },
  {
    icon: 'flights',
    title: 'Flights',
    description:
      'Participants book their own international flights to and from Accra.',
  },
  {
    icon: 'insurance',
    title: 'Insurance',
    description: 'Mandatory international insurance is included.',
  },
  {
    icon: 'packing',
    title: 'Packing and pre-departure kit',
    description:
      'Hilltop provides a pre-departure kit with packing, health, safety, and cultural guidance.',
  },
  {
    icon: 'orientation',
    title: 'Orientation',
    description:
      'Mandatory virtual pre-departure orientation and company meet and greet before travel.',
  },
];

/* ------------------------------------------------------------------ */
/* Application section                                                */
/* ------------------------------------------------------------------ */

export const APPLICATION_ANCHOR = 'apply';

export const APPLICATION_INTRO =
  'Applications are reviewed on a rolling basis and applicants are notified within four weeks. Places are limited, so applying early is strongly advised.';

/**
 * Mirrors exactly what the application form asks for. The CV is the only file upload,
 * so nothing else should be listed here as a document to prepare.
 */
export const applicationChecklist: string[] = [
  'Your CV or resume, as a PDF, Word document or image, up to 10MB',
  'Your current school, level of study and field of study',
  'Emergency contact details: name, relationship to you, phone and email',
  'Written answers to a few short questions, including a 250 to 300 word outline of the internship project you would design',
];


export const APPLICATION_PRIVACY_NOTE =
  'Your CV and application details are received securely and used only for application review.';

/* ------------------------------------------------------------------ */
/* FAQ                                                                */
/* ------------------------------------------------------------------ */

/**
 * REVIEW: FAQ answers below were drafted from the program content on this page.
 * They need a factual and legal read-through by the programs team before launch,
 * in particular the visa, insurance and payment answers.
 */
export const faqs: FaqItem[] = [
  {
    question: 'Do I need a visa for Ghana?',
    answer:
      'Most nationalities need a visa to enter Ghana. Participants arrange their own visa, and Hilltop can provide an invitation or support letter for your application. Requirements and processing times vary by country, so start early once you are accepted.',
  },
  {
    question: 'Who books my flights?',
    answer:
      'You book your own international flights to and from Accra. Flights are not included in the program fee. Plan to arrive on Saturday, July 10, 2027 and depart on Saturday, July 31, 2027. Airport pickup on arrival is included.',
  },
  {
    question: 'Is insurance included?',
    answer:
      'Yes. Mandatory international insurance is included in the program fee. Coverage includes medical care for accident and illness, emergency medical evacuation and repatriation, 24/7 global medical and security assistance, mental-health support, and security, political and natural-disaster evacuation coverage.',
  },
  {
    question: 'What does the program cost and how do I pay?',
    answer:
      'The fee is $4,500 per participant. A $500 deposit secures your place on acceptance and counts toward the total. The balance is due in full no later than 45 days before the program starts, and you can spread payments across installments in between. If you are accepted within 45 days of the start date, full payment is required on acceptance.',
  },
  {
    question: 'Who is eligible to apply?',
    answer:
      'You must be 18 or older and at undergraduate level or above. The program is open to students from anywhere, and no partner-university affiliation is required.',
  },
  {
    question: 'Can I earn academic credit?',
    answer:
      'Academic credit is arranged through your own university, not through Hilltop. Talk to your study abroad office or academic advisor before you apply. Hilltop provides program documentation, including a syllabus outline and contact hours, to support your credit and scholarship applications.',
  },
  {
    question: 'What happens if I need to cancel?',
    answer:
      'Cancellations more than 90 days before the start date are refunded in full apart from a $250 processing fee. Between 45 and 90 days, 50% of the fee is retained. Within 45 days, no refund is available. All cancellations must be submitted in writing, and certain suppliers may have different terms that are charged accordingly.',
  },
  {
    question: 'Where will I stay?',
    answer:
      'Accommodation is included: same-sex, twin-share rooms at Hilltop-vetted partner hotels, with daily breakfast. A dedicated on-ground coordinator is in Accra throughout the program.',
  },
];

/* ------------------------------------------------------------------ */
/* Contact                                                            */
/* ------------------------------------------------------------------ */

export const CONTACT_EMAIL = 'support@hilltopglobalgroup.com';
