import InternshipHero from '@/components/internships/InternshipHero';
import ProgramOverview from '@/components/internships/ProgramOverview';
import VideoTestimonials from '@/components/internships/VideoTestimonials';
import Programs2026 from '@/components/internships/Programs2026';
import WordPressPrograms from '@/components/internships/WordPressPrograms';
import InternshipBenefits from '@/components/internships/InternshipBenefits';
import Industries from '@/components/internships/Industries';
import Accommodation from '@/components/internships/Accommodation';
import ProgramDetails from '@/components/internships/ProgramDetails';
import InternshipFAQ from '@/components/internships/InternshipFAQ';
import InternshipCTA from '@/components/internships/InternshipCTA';

export const metadata = {
  title: 'Internships - Hilltop Global Group',
  description: 'Connect classroom learning with real-world experience in Africa\'s most dynamic markets',
};

export default function InternshipsPage() {
  return (
    <main>
      <InternshipHero />
      <ProgramOverview />
      <VideoTestimonials />
      <Programs2026 />
      <WordPressPrograms />
      <InternshipBenefits />
      <Industries />
      <Accommodation />
      <ProgramDetails />
      <InternshipFAQ />
      <InternshipCTA />
    </main>
  );
}

