import type { Metadata } from 'next';
import UmbasHero from '@/components/programs/umbas/UmbasHero';
import UmbasOverview from '@/components/programs/umbas/UmbasOverview';
import UmbasKeyDetails from '@/components/programs/umbas/UmbasKeyDetails';
import UmbasItinerary from '@/components/programs/umbas/UmbasItinerary';
import UmbasHighlights from '@/components/programs/umbas/UmbasHighlights';
import UmbasIncluded from '@/components/programs/umbas/UmbasIncluded';
import UmbasAccommodation from '@/components/programs/umbas/UmbasAccommodation';
import UmbasPricing from '@/components/programs/umbas/UmbasPricing';
import UmbasRegistration from '@/components/programs/umbas/UmbasRegistration';
import UmbasCancellation from '@/components/programs/umbas/UmbasCancellation';
import UmbasContact from '@/components/programs/umbas/UmbasContact';
import RiskManagementCTA from '@/components/shared/RiskManagementCTA';

export const metadata: Metadata = {
  title: 'UMBAS Ghana 2027 | University of Miami Black Alumni Society | Hilltop Global Group',
  description:
    'A 7-day, 6-night experiential learning trip to Accra and Cape Coast, Ghana for University of Miami Black Alumni Society students and alumni. March 6–12, 2027.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function UmbasGhana2027Page() {
  return (
    <main>
      <UmbasHero />
      <UmbasOverview />
      <UmbasKeyDetails />
      <UmbasItinerary />
      <UmbasHighlights />
      <UmbasIncluded />
      <UmbasAccommodation />
      <UmbasPricing />
      <UmbasRegistration />
      <UmbasCancellation />
      <RiskManagementCTA />
      <UmbasContact />
    </main>
  );
}
