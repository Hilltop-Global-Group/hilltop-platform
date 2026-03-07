import TestimonialsHero from '@/components/testimonials/TestimonialsHero';
import StudentTestimonials from '@/components/testimonials/StudentTestimonials';
import VideoTestimonials from '@/components/testimonials/VideoTestimonials';
import ImpactStats from '@/components/testimonials/ImpactStats';
import FeaturedStories from '@/components/testimonials/FeaturedStories';
import PartnerTestimonials from '@/components/testimonials/PartnerTestimonials';
import UniversityPartners from '@/components/testimonials/UniversityPartners';
import TestimonialSubmission from '@/components/testimonials/TestimonialSubmission';
import TestimonialsCTA from '@/components/testimonials/TestimonialsCTA';

export const metadata = {
  title: 'Student Testimonials | Study Abroad & Internships in Africa | Hilltop Global Group',
  description: 'Read what students from Georgetown, Howard, Spelman, and Duke say about their Hilltop internship and study abroad experience in Ghana and Rwanda.',
};

export default function TestimonialsPage() {
  return (
    <main>
      <TestimonialsHero />
      <StudentTestimonials />
      <VideoTestimonials />
      <ImpactStats />
      <FeaturedStories />
      <PartnerTestimonials />
      <UniversityPartners />
      <TestimonialSubmission />
      <TestimonialsCTA />
    </main>
  );
}

