import TeamHero from '@/components/team/TeamHero';
import TeamGrid from '@/components/team/TeamGrid';
import TeamJoinCTA from '@/components/team/TeamJoinCTA';

export const metadata = {
  title: 'Meet Our Team | Hilltop Global Group',
  description: 'Meet the passionate professionals behind Hilltop Global Group, building bridges between students and Africa\'s most dynamic opportunities.',
};

export default function TeamPage() {
  return (
    <main className="relative">
      <TeamHero />
      <TeamGrid />
      <TeamJoinCTA />
    </main>
  );
}
