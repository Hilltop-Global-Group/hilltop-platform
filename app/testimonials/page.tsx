import TestimonialsHero from '@/components/testimonials/TestimonialsHero';
import StudentTestimonials from '@/components/testimonials/StudentTestimonials';
import ImpactStats from '@/components/testimonials/ImpactStats';
import FeaturedStories from '@/components/testimonials/FeaturedStories';
import TestimonialSubmission from '@/components/testimonials/TestimonialSubmission';
import TestimonialsCTA from '@/components/testimonials/TestimonialsCTA';

export const metadata = {
  title: 'Student Stories | Education Abroad & Internships in Africa | Hilltop Global Group',
  description: 'Read what students from Georgetown, Howard, Spelman, and Duke say about their Hilltop internship and education abroad experience in Ghana and Rwanda.',
};

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialsHero />
      <StudentTestimonials />
      <ImpactStats />
      <FeaturedStories />
      <TestimonialSubmission />
      <TestimonialsCTA />
    </main>
  );
}
