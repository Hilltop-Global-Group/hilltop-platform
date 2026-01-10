import EducationHero from '@/components/education/EducationHero';
import Partnership from '@/components/education/Partnership';
import AfricanResidency from '@/components/education/AfricanResidency';
import ProgramIncludes from '@/components/education/ProgramIncludes';
import ProgramBenefits from '@/components/education/ProgramBenefits';
import EducationCTA from '@/components/education/EducationCTA';

export const metadata = {
  title: 'Education Programs - Hilltop Global Group',
  description: 'Transformational turnkey study abroad experiences in Africa',
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

