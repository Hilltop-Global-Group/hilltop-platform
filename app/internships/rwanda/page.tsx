import RwandaProgramHero from '@/components/internships/rwanda/RwandaProgramHero';
import RwandaCollabBanner from '@/components/internships/rwanda/RwandaCollabBanner';
import RwandaProgramOverview from '@/components/internships/rwanda/RwandaProgramOverview';
import RwandaProgramFormat from '@/components/internships/rwanda/RwandaProgramFormat';
import RwandaKeyDetails from '@/components/internships/rwanda/RwandaKeyDetails';
import RwandaWhyChoose from '@/components/internships/rwanda/RwandaWhyChoose';
import RwandaApplication from '@/components/internships/rwanda/RwandaApplication';
import RwandaSampleWeek from '@/components/internships/rwanda/RwandaSampleWeek';
import RwandaCulturalHighlights from '@/components/internships/rwanda/RwandaCulturalHighlights';
import RwandaContact from '@/components/internships/rwanda/RwandaContact';
import { fetchProgramData } from '@/lib/program-data';
import RiskManagementCTA from '@/components/shared/RiskManagementCTA';

export const metadata = {
  title: '2026 Rwanda Internship Program - Hilltop Global Group',
  description: 'Professional experience in Kigali with ALU collaboration across fintech, agritech, healthtech and more',
};

export default async function RwandaInternshipPage() {
  const program = await fetchProgramData('rwanda');

  return (
    <main>
      <RwandaProgramHero applicationUrl={program.applicationUrl} applicationStatus={program.applicationStatus} />
      <RwandaCollabBanner />
      <RwandaProgramOverview />
      <RwandaProgramFormat />
      <RwandaKeyDetails
        startDate={program.startDate}
        endDate={program.endDate}
        deadline={program.applicationDeadline}
        costFull={program.costFull}
        costHybrid={program.costHybrid}
      />
      <RwandaWhyChoose />
      <RwandaApplication
        deadline={program.applicationDeadline}
        applicationUrl={program.applicationUrl}
        applicationStatus={program.applicationStatus}
      />
      <RwandaSampleWeek />
      <RwandaCulturalHighlights />
      <RiskManagementCTA />
      <RwandaContact />
    </main>
  );
}
