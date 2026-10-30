import { redirect } from 'next/navigation';

/**
 * TVET moved out from under Education and became a top level section at /tvet.
 *
 * next.config.ts holds a permanent (308) redirect for this path, which is what
 * search engines and old printed links actually hit, so this component rarely
 * runs. It stays as a second line of defence in case that config entry is ever
 * removed, and so the old route is never a 404.
 */
export default function LegacyTVETPage() {
  redirect('/tvet');
}
