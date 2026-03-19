import InternshipHero from '@/components/internships/InternshipHero';
import PastInternshipsOnly from '@/components/internships/PastInternshipsOnly';
import InternshipCTA from '@/components/internships/InternshipCTA';

export const metadata = {
  title: 'Past Internship Programs | Hilltop Global Group',
  description: 'Browse completed Hilltop internship programs in Ghana and Rwanda. See the organizations and industries our participants have worked with.',
};

export default function PastInternshipsPage() {
  return (
    <main>
      <InternshipHero />
      <PastInternshipsOnly />
      <InternshipCTA />
    </main>
  );
}
