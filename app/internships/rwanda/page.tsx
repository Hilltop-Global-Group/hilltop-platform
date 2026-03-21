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

export const metadata = {
  title: '2026 Rwanda Internship Program - Hilltop Global Group',
  description: 'Professional experience in Kigali with ALU collaboration across fintech, agritech, healthtech and more',
};

export default function RwandaInternshipPage() {
  return (
    <main>
      <RwandaProgramHero />
      <RwandaCollabBanner />
      <RwandaProgramOverview />
      <RwandaProgramFormat />
      <RwandaKeyDetails />
      <RwandaWhyChoose />
      <RwandaApplication />
      <RwandaSampleWeek />
      <RwandaCulturalHighlights />
      <RwandaContact />
    </main>
  );
}
