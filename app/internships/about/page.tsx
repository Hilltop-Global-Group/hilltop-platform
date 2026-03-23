import InternshipHero from '@/components/internships/InternshipHero';
import ProgramOverview from '@/components/internships/ProgramOverview';
import InternshipVideos from '@/components/internships/InternshipVideos';
import InternshipBenefits from '@/components/internships/InternshipBenefits';
import Industries from '@/components/internships/Industries';
import Accommodation from '@/components/internships/Accommodation';
import ProgramDetails from '@/components/internships/ProgramDetails';
import InternshipFAQ from '@/components/internships/InternshipFAQ';
import InternshipCTA from '@/components/internships/InternshipCTA';
import NewsletterSignup from '@/components/news/NewsletterSignup';
import InternshipCurrentCTABanner from '@/components/internships/InternshipCurrentCTABanner';

export const metadata = {
  title: 'About Our Internship Programs | Hilltop Global Group',
  description: 'Learn how Hilltop\'s Africa internship programs work — from program structure and industries to accommodation, support, and FAQs.',
};

export default function InternshipsAboutPage() {
  return (
    <main>
      <InternshipHero />
      <InternshipCurrentCTABanner variant="top" />
      <ProgramOverview />
      <InternshipVideos />
      <InternshipBenefits />
      <Industries />
      <InternshipCurrentCTABanner variant="middle" />
      <Accommodation />
      <ProgramDetails />
      <InternshipFAQ />
      <NewsletterSignup />
      <InternshipCTA />
    </main>
  );
}
