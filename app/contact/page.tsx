import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';

export const metadata = {
  title: 'Contact Us - Hilltop Global Group',
  description: 'Get in touch with us to learn more about our internship programs and study abroad opportunities.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
    </main>
  );
}


