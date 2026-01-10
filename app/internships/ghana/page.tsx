import GhanaProgramHero from '@/components/internships/ghana/GhanaProgramHero';
import GhanaProgramOverview from '@/components/internships/ghana/GhanaProgramOverview';
import GhanaProgramFormat from '@/components/internships/ghana/GhanaProgramFormat';
import GhanaKeyDetails from '@/components/internships/ghana/GhanaKeyDetails';
import GhanaWhyChoose from '@/components/internships/ghana/GhanaWhyChoose';
import GhanaApplication from '@/components/internships/ghana/GhanaApplication';
import GhanaSampleWeek from '@/components/internships/ghana/GhanaSampleWeek';
import GhanaCulturalHighlights from '@/components/internships/ghana/GhanaCulturalHighlights';
import GhanaContact from '@/components/internships/ghana/GhanaContact';

export const metadata = {
  title: '2026 Ghana Internship Program - Hilltop Global Group',
  description: 'Professional experience in Accra across fintech, agritech, creative industries and more',
};

export default function GhanaInternshipPage() {
  return (
    <main>
      <GhanaProgramHero />
      <GhanaProgramOverview />
      <GhanaProgramFormat />
      <GhanaKeyDetails />
      <GhanaWhyChoose />
      <GhanaApplication />
      <GhanaSampleWeek />
      <GhanaCulturalHighlights />
      <GhanaContact />
    </main>
  );
}
