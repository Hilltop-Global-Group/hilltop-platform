import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import WhyChoose from '@/components/WhyChoose';
import AfricanResidency from '@/components/AfricanResidency';
import BMCCFeatureBanner from '@/components/stories/BMCCFeatureBanner';
import ApplicationPopup from '@/components/internships/ApplicationPopup';
import NewsletterSignup from '@/components/news/NewsletterSignup';
import RiskManagementCTA from '@/components/shared/RiskManagementCTA';
import TestimonialsPartnersCTA from '@/components/shared/TestimonialsPartnersCTA';

export default function Home() {
  return (
    <main>
      <ApplicationPopup />
      <Hero />
      <StatsBar />
      <Services />
      <Partners />
      <WhyChoose />
      <BMCCFeatureBanner />
      <AfricanResidency />
      <RiskManagementCTA />
      <TestimonialsPartnersCTA />
      <NewsletterSignup />
    </main>
  );
}
