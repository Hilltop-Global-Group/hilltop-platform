import AboutHero from '@/components/about/AboutHero';
import FeaturedVideo from '@/components/about/FeaturedVideo';
import JourneyInteractive from '@/components/about/JourneyInteractive';
import ImpactMetrics from '@/components/about/ImpactMetrics';
import AboutCTA from '@/components/about/AboutCTA';
import NewsletterSignup from '@/components/news/NewsletterSignup';
import RiskManagementCTA from '@/components/shared/RiskManagementCTA';

export const metadata = {
  title: 'About Hilltop Global Group | Diaspora-Led Education Consulting for Africa',
  description: 'Founded by Georgetown EMBA alumni with roots across Africa. Hilltop designs education abroad programs, internships, and faculty development from Washington DC, Accra, and Nairobi.',
};

export default function AboutPage() {
  return (
    <main className="relative">
      <AboutHero />
      <FeaturedVideo />
      <JourneyInteractive />
      <ImpactMetrics />
      <RiskManagementCTA />
      <NewsletterSignup />
      <AboutCTA />
    </main>
  );
}

