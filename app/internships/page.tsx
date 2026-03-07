import InternshipHero from '@/components/internships/InternshipHero';
import ProgramOverview from '@/components/internships/ProgramOverview';
import VideoTestimonials from '@/components/internships/VideoTestimonials';
import InternshipProgramsSection from '@/components/internships/InternshipProgramsSection';
import InternshipBenefits from '@/components/internships/InternshipBenefits';
import Industries from '@/components/internships/Industries';
import Accommodation from '@/components/internships/Accommodation';
import ProgramDetails from '@/components/internships/ProgramDetails';
import InternshipFAQ from '@/components/internships/InternshipFAQ';
import InternshipCTA from '@/components/internships/InternshipCTA';

export const metadata = {
  title: 'Africa Internship Programs | Ghana & Rwanda | Hilltop Global Group',
  description: 'Professional internships in Accra and Kigali for university students. Placements in fintech, agritech, healthtech, and creative industries. Applications open now.',
};

export default function InternshipsPage() {
  return (
    <main>
      <InternshipHero />
      <ProgramOverview />
      <VideoTestimonials />
      <InternshipProgramsSection />
      <InternshipBenefits />
      <Industries />
      <Accommodation />
      <ProgramDetails />
      <InternshipFAQ />
      <InternshipCTA />
    </main>
  );
}

