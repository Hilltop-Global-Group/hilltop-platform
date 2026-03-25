import GhanaProgramHero from '@/components/internships/ghana/GhanaProgramHero';
import GhanaProgramOverview from '@/components/internships/ghana/GhanaProgramOverview';
import GhanaProgramFormat from '@/components/internships/ghana/GhanaProgramFormat';
import GhanaKeyDetails from '@/components/internships/ghana/GhanaKeyDetails';
import GhanaWhyChoose from '@/components/internships/ghana/GhanaWhyChoose';
import GhanaApplication from '@/components/internships/ghana/GhanaApplication';
import GhanaSampleWeek from '@/components/internships/ghana/GhanaSampleWeek';
import GhanaCulturalHighlights from '@/components/internships/ghana/GhanaCulturalHighlights';
import GhanaContact from '@/components/internships/ghana/GhanaContact';
import { fetchProgramData } from '@/lib/program-data';
import RiskManagementCTA from '@/components/shared/RiskManagementCTA';

export const metadata = {
  title: '2026 Ghana Internship Program - Hilltop Global Group',
  description: 'Professional experience in Accra across fintech, agritech, creative industries and more',
};

export default async function GhanaInternshipPage() {
  const program = await fetchProgramData('ghana');

  return (
    <main>
      <GhanaProgramHero applicationUrl={program.applicationUrl} />
      <GhanaProgramOverview overviewText={program.overviewText} />
      <GhanaProgramFormat />
      <GhanaKeyDetails
        startDate={program.startDate}
        endDate={program.endDate}
        deadline={program.applicationDeadline}
        costFull={program.costFull}
        costHybrid={program.costHybrid}
      />
      <GhanaWhyChoose />
      <GhanaApplication
        deadline={program.applicationDeadline}
        applicationUrl={program.applicationUrl}
        applicationStatus={program.applicationStatus}
      />
      <GhanaSampleWeek />
      <GhanaCulturalHighlights />
      <RiskManagementCTA />
      <GhanaContact />
    </main>
  );
}
