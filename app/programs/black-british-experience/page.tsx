import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/site';
import { BbeStickyNav } from '@/components/black-british/BbeInteractive';
import {
  BbeAbout,
  BbeFaq,
  BbeFinalCta,
  BbeHero,
  BbeIncluded,
  BbeItinerary,
  BbePricing,
  BbeSignature,
  BbeWhoShouldApply,
} from '@/components/black-british/BbeSections';

const PATH = '/programs/black-british-experience';

export const metadata: Metadata = {
  title: 'The Black British Experience | London and Oxford 2027 | Hilltop Global Group',
  description:
    'A five day Hilltop Global Group program in London and Oxford, 22 to 26 March 2027. Black British history, colonial heritage and community life, with cross-Atlantic connections to Black America. $1,850 per person, excluding airfare. Applications close 19 February 2027.',
  alternates: { canonical: PATH },
  openGraph: {
    title: 'The Black British Experience | London and Oxford 2027',
    description:
      'Five days in London and Oxford exploring diaspora history, colonial heritage and Black British life today.',
    url: `${SITE_URL}${PATH}`,
    type: 'website',
    // Share image still to be made at 1200 x 630. Until it exists this falls
    // back to the site default rather than pointing at a 404.
  },
};

export default function BlackBritishExperiencePage() {
  return (
    <main className="pt-[67px]">
      <BbeStickyNav />
      <BbeHero />
      <BbeAbout />
      <BbeSignature />
      <BbeItinerary />
      <BbeIncluded />
      <BbePricing />
      <BbeWhoShouldApply />
      <BbeFaq />
      <BbeFinalCta />
    </main>
  );
}
