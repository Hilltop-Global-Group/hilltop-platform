import EducationHero from '@/components/education/EducationHero';
import Partnership from '@/components/education/Partnership';
import AfricanResidency from '@/components/education/AfricanResidency';
import ProgramIncludes from '@/components/education/ProgramIncludes';
import ProgramBenefits from '@/components/education/ProgramBenefits';
import EducationCTA from '@/components/education/EducationCTA';

export const metadata = {
  title: 'Education Abroad Across Africa for Universities | Hilltop Global Group',
  description: 'Custom faculty-led education abroad programs in Ghana, Rwanda, and Kenya for U.S. universities. Deliverable-based projects, cultural immersion, and end-to-end program management by Hilltop.',
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

