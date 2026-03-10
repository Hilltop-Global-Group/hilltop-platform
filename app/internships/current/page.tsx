import InternshipHero from '@/components/internships/InternshipHero';
import InternshipProgramsSection from '@/components/internships/InternshipProgramsSection';
import InternshipCTA from '@/components/internships/InternshipCTA';

export const metadata = {
  title: 'Current Internship Programs | Hilltop Global Group',
  description: 'View currently open internship programs in Ghana and Rwanda. Professional placements with real organizations in Africa\'s fastest-growing sectors.',
};

export default function CurrentInternshipsPage() {
  return (
    <main>
      <InternshipHero />
      <InternshipProgramsSection />
      <InternshipCTA />
    </main>
  );
}
