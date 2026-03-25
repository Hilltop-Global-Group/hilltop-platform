import ValuesHero from '@/components/values/ValuesHero';
import MissionStatement from '@/components/values/MissionStatement';
import MinimalValues from '@/components/about/MinimalValues';
import EmpoweringFutures from '@/components/about/EmpoweringFutures';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'Mission & Values | Hilltop Global Group',
  description: 'The mission, core values, and principles behind every Hilltop program, built on excellence, integrity, innovation, and impact.',
};

export default function ValuesPage() {
  return (
    <main className="relative">
      <ValuesHero />
      <MissionStatement />
      <MinimalValues />
      <EmpoweringFutures />
      <AboutCTA />
    </main>
  );
}
