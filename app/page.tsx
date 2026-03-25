import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import EducationAbroadBanner from '@/components/EducationAbroadBanner';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import WhyChoose from '@/components/WhyChoose';
import AfricanResidency from '@/components/AfricanResidency';
import NewsletterSignup from '@/components/news/NewsletterSignup';
import RiskManagementCTA from '@/components/shared/RiskManagementCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <EducationAbroadBanner />
      <StatsBar />
      <Services />
      <Partners />
      <WhyChoose />
      <AfricanResidency />
      <RiskManagementCTA />
      <NewsletterSignup />
    </main>
  );
}
