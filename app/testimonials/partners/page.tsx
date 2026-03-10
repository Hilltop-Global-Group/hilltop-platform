import TestimonialsPartnersHero from '@/components/testimonials/TestimonialsPartnersHero';
import PartnerTestimonials from '@/components/testimonials/PartnerTestimonials';
import UniversityPartners from '@/components/testimonials/UniversityPartners';
import TestimonialSubmission from '@/components/testimonials/TestimonialSubmission';
import TestimonialsCTA from '@/components/testimonials/TestimonialsCTA';

export const metadata = {
  title: 'Partners & Universities | Hilltop Global Group',
  description: 'See what universities and host organizations say about their collaboration with Hilltop Global Group.',
};

export default function TestimonialsPartnersPage() {
  return (
    <main>
      <TestimonialsPartnersHero />
      <PartnerTestimonials />
      <UniversityPartners />
      <TestimonialSubmission />
      <TestimonialsCTA />
    </main>
  );
}
