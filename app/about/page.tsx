import AboutHero from '@/components/about/AboutHero';
import FeaturedVideo from '@/components/about/FeaturedVideo';
import JourneyInteractive from '@/components/about/JourneyInteractive';
import ImpactMetrics from '@/components/about/ImpactMetrics';
import MinimalValues from '@/components/about/MinimalValues';
import EmpoweringFutures from '@/components/about/EmpoweringFutures';
import Team from '@/components/about/Team';
import Testimonials from '@/components/about/Testimonials';
import AboutCTA from '@/components/about/AboutCTA';

export const metadata = {
  title: 'About Hilltop Global Group | Diaspora-Led Education Consulting for Africa',
  description: 'Founded by Georgetown EMBA alumni with roots across Africa. Hilltop designs study abroad programs, internships, and faculty development from Washington DC, Accra, and Nairobi.',
};

export default function AboutPage() {
  return (
    <main className="relative">
      <AboutHero />
      <FeaturedVideo />
      <JourneyInteractive />
      <ImpactMetrics />
      <MinimalValues />
      <EmpoweringFutures />
      <Team />
      <Testimonials />
      <AboutCTA />
    </main>
  );
}

