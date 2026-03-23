import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import WhyChoose from '@/components/WhyChoose';
import AfricanResidency from '@/components/AfricanResidency';
import NewsletterSignup from '@/components/news/NewsletterSignup';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Services />
      <Partners />
      <WhyChoose />
      <AfricanResidency />
      <NewsletterSignup />
    </main>
  );
}
