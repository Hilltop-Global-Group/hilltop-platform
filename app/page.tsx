import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import EducationAbroadBanner from '@/components/EducationAbroadBanner';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import WhyChoose from '@/components/WhyChoose';
import AfricanResidency from '@/components/AfricanResidency';
import BMCCFeatureBanner from '@/components/stories/BMCCFeatureBanner';
import BMCCVideoModal from '@/components/stories/BMCCVideoModal';
import NewsletterSignup from '@/components/news/NewsletterSignup';
import RiskManagementCTA from '@/components/shared/RiskManagementCTA';
import TestimonialsPartnersCTA from '@/components/shared/TestimonialsPartnersCTA';

export default function Home() {
  return (
    <main>
      <BMCCVideoModal />
      <Hero />
      <EducationAbroadBanner />
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
