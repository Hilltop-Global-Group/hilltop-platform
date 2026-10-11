/**
 * End of the current featured cohort application window, used by the homepage banner and
 * the internships CTA banner. Program cards themselves read their deadline from WordPress.
 * Keep in sync with the live cycle's deadline in WordPress when you roll over to a new year.
 *
 * Current cycle: Ghana Summer 2027, applications close 2 April 2027.
 */
export const FEATURED_COHORT_APPLICATION_END = new Date('2027-04-02T23:59:59');

export function isFeaturedCohortApplicationDeadlinePassed(now = Date.now()): boolean {
  return now > FEATURED_COHORT_APPLICATION_END.getTime();
}

type WpInternshipLike = {
  acf?: { application_deadline?: string; application_status?: string };
  meta?: { _internship_application_deadline?: string; _internship_application_status?: string };
};

/** True when WordPress says open and the application deadline (if any) has not passed. */
export function isWordPressInternshipApplicationsOpen(internship: WpInternshipLike, now = Date.now()): boolean {
  const statusRaw = internship.meta?._internship_application_status ?? internship.acf?.application_status ?? '';
  const s = String(statusRaw).toLowerCase();
  if (s === 'closed' || s.includes('closed')) return false;

  const raw = internship.meta?._internship_application_deadline ?? internship.acf?.application_deadline;
  if (raw == null || String(raw).trim() === '') return true;

  const str = String(raw).trim();
  let endMs: number;
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) {
    endMs = new Date(`${str}T23:59:59`).getTime();
  } else {
    endMs = new Date(raw).getTime();
  }
  if (Number.isNaN(endMs)) return true;
  return now <= endMs;
}
