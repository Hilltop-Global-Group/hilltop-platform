/**
 * BMCC Ghana 2026 . three-part video series data.
 *
 * TO PUBLISH THE VIDEOS:
 * Replace each `youtubeId` below with the 11-character ID from your YouTube URL.
 * Example: https://www.youtube.com/watch?v=TePyT3KoOZk  ->  youtubeId: 'TePyT3KoOZk'
 *
 * Until an ID is replaced, that part renders a "coming soon" card instead of a
 * broken player, so the page is safe to deploy before the uploads are finished.
 */

export interface StoryVideo {
  part: number;
  eyebrow: string;
  title: string;
  description: string;
  /** 11-character YouTube video ID. Leave as the placeholder until uploaded. */
  youtubeId: string;
  /** Human-readable runtime, shown on the card. */
  duration: string;
  /** ISO 8601 duration for VideoObject structured data. */
  durationIso: string;
  /** Optional local fallback image used before a YouTube ID exists. */
  fallbackImage: string;
}

/** Placeholder sentinel. Any ID equal to this is treated as "not yet uploaded". */
export const PLACEHOLDER_ID = 'PENDING_UPLOAD';

export function isPublished(video: StoryVideo): boolean {
  return video.youtubeId !== PLACEHOLDER_ID && video.youtubeId.length > 0;
}

export const bmccVideos: StoryVideo[] = [
  {
    part: 1,
    eyebrow: 'Part One',
    title: 'From a Conversation to a Completed Program',
    description:
      'Three months after a visit to BMCC to speak with students about Ghana, President Anthony E. Munroe’s vision became a finished program on the ground. This is how Hilltop brought it to life.',
    youtubeId: 'YERPueiNyuk',
    duration: '6:11',
    durationIso: 'PT6M11S',
    fallbackImage: '/images/akwaaba-gh.jpeg',
  },
  {
    part: 2,
    eyebrow: 'Part Two',
    title: 'Judy at Kakum',
    description:
      'At 80 years old, vision and hearing impaired, Judy crossed all seven canopy bridges at Kakum. A woman who marched with Dr. Martin Luther King Jr. and is still working toward her degree. She did not miss a single thing on the itinerary.',
    youtubeId: 'zsaqw5WnKh8',
    duration: '3:55',
    durationIso: 'PT3M55S',
    fallbackImage: '/images/kakum.jpg',
  },
  {
    part: 3,
    eyebrow: 'Part Three',
    title: 'In Their Own Words',
    description:
      'Ten days in Ghana, then we handed them the microphone. Some found family. Some found a name. Some met a version of themselves for the first time. Sound on.',
    youtubeId: 'xjdenlTrJrQ',
    duration: '5:20',
    durationIso: 'PT5M20S',
    fallbackImage: '/images/cultural-procession.jpg',
  },
];

/** BMCC leadership and faculty who carried the program on the college side. */
export const bmccPartners = [
  { name: 'Anthony E. Munroe, EdD, MBA, MPH', role: 'President, BMCC' },
  { name: 'Sanjay Ramdath', role: 'BMCC' },
  { name: 'Daniel Katz, PhD', role: 'BMCC' },
  { name: 'Ashtian Holmes, EdD', role: 'BMCC' },
  { name: 'Marc Louis', role: 'BMCC' },
];

export const bmccMeta = {
  slug: 'bmcc-ghana',
  institution: 'Borough of Manhattan Community College',
  institutionShort: 'BMCC',
  system: 'CUNY',
  program: 'Urban Male Leadership Academy',
  destination: 'Ghana',
  durationDays: 10,
};
