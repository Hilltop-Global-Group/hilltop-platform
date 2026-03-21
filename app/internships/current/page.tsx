import InternshipHero from '@/components/internships/InternshipHero';
import CurrentInternshipsOnly from '@/components/internships/CurrentInternshipsOnly';
import InternshipCTA from '@/components/internships/InternshipCTA';

export const metadata = {
  title: 'Current Internship Programs | Hilltop Global Group',
  description: "View currently open internship programs in Ghana and Rwanda. Professional placements with real organizations in Africa's fastest-growing sectors.",
};

export default function CurrentInternshipsPage() {
  return (
    <main>
      <InternshipHero showCTA={false} />
      <CurrentInternshipsOnly />
      <InternshipCTA />
    </main>
  );
}
