import AboutHero from '@/components/about/AboutHero';
import FeaturedVideo from '@/components/about/FeaturedVideo';
import JourneyInteractive from '@/components/about/JourneyInteractive';
import ImpactMetrics from '@/components/about/ImpactMetrics';
import AboutCTA from '@/components/about/AboutCTA';
import NewsletterSignup from '@/components/news/NewsletterSignup';
import RiskManagementCTA from '@/components/shared/RiskManagementCTA';
import MembershipBadges from '@/components/shared/MembershipBadges';

export const metadata = {
  title: 'Our Story | Who We Are | Hilltop Global Group',
  description: 'Diaspora-led education consulting led by Phil Agbeko, Fulbright Specialist, Co-Founder & CEO of Hilltop Global Group, and The PIE 50 Voices Americas honoree (2025). Hilltop designs education abroad programs, internships, and faculty development with teams in Washington DC, London, Accra, and Kigali.',
};

export default function AboutPage() {
  return (
    <main className="relative">
      <AboutHero />
      <FeaturedVideo />
      <JourneyInteractive />
      <ImpactMetrics />
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <MembershipBadges variant="light" />
        </div>
      </section>
      <RiskManagementCTA />
      <NewsletterSignup />
      <AboutCTA />
    </main>
  );
}

