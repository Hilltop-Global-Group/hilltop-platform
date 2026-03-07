import EducationHero from '@/components/education/EducationHero';
import Partnership from '@/components/education/Partnership';
import AfricanResidency from '@/components/education/AfricanResidency';
import ProgramIncludes from '@/components/education/ProgramIncludes';
import ProgramBenefits from '@/components/education/ProgramBenefits';
import EducationCTA from '@/components/education/EducationCTA';

export const metadata = {
  title: 'Study Abroad Programs in Africa for Universities | Hilltop Global Group',
  description: 'Turnkey study abroad programs in Ghana, Rwanda, and Kenya for U.S. universities. Business projects, cultural immersion, and full logistics managed by Hilltop\'s on-ground team.',
};

export default function EducationPage() {
  return (
    <main>
      <EducationHero />
      <Partnership />
      <AfricanResidency />
      <ProgramIncludes />
      <ProgramBenefits />
      <EducationCTA />
    </main>
  );
}

