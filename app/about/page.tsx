import AboutHero from '@/components/about/AboutHero';
import Journey from '@/components/about/Journey';
import EmpoweringFutures from '@/components/about/EmpoweringFutures';
import Team from '@/components/about/Team';
import Testimonials from '@/components/about/Testimonials';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'About Us - Hilltop Global Group',
  description: 'Our Journey: Innovating Education and Opportunities',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Journey />
      <EmpoweringFutures />
      <Team />
      <Testimonials />
      <AboutCTA />
    </main>
  );
}

