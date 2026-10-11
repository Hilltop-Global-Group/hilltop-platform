/**
 * Canonical production origin, used for canonical tags, OpenGraph URLs,
 * structured data and the sitemap.
 *
 * This must be the domain the public actually visits. Pointing it at a Vercel
 * preview domain tells search engines the preview is authoritative.
 */
export const SITE_URL = 'https://www.hilltopglobalgroup.com';

/** Absolute URL for a site-relative path, e.g. absoluteUrl('/internships/ghana'). */
export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
