import AboutHero from '@/components/about/AboutHero';
import JourneyProgress from '@/components/about/JourneyProgress';
import JourneyConnector from '@/components/about/JourneyConnector';
import FeaturedVideo from '@/components/about/FeaturedVideo';
import JourneyInteractive from '@/components/about/JourneyInteractive';
import ImpactMetrics from '@/components/about/ImpactMetrics';
import MinimalValues from '@/components/about/MinimalValues';
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
    <main className="relative">
      {/* Progress bar at top */}
      <JourneyProgress />
      
      {/* Journey progress indicator on the left */}
      <JourneyConnector />
      
      {/* Main content with left padding to avoid sidebar overlap */}
      <div className="xl:pl-0">
        <AboutHero />
        <FeaturedVideo />
        <JourneyInteractive />
        <ImpactMetrics />
        <MinimalValues />
        <EmpoweringFutures />
        <Team />
        <Testimonials />
        <AboutCTA />
      </div>
    </main>
  );
}

