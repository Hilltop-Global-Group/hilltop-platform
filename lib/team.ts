export interface TeamMember {
  name: string;
  role: string;
  category: 'leadership' | 'staff';
  /** Omit when the team member prefers not to display a photo */
  image?: string;
  linkedin?: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Phil Agbeko',
    role: 'Founder & CEO',
    category: 'leadership',
    image: '/images/philnew-profile.jpeg',
    linkedin: 'https://www.linkedin.com/in/philagbeko/',
    bio: 'Visionary behind Hilltop Global Group and Georgetown EMBA alumnus, building bridges between U.S. institutions and Africa\'s most dynamic markets. Fulbright Specialist and The PIE 50 Voices Americas honoree (2025). His 25+ year career spans the World Bank Group, Fortune 500 executive leadership, and global strategy.',
  },
  {
    name: 'Osa Imohe',
    role: 'Co-Founder',
    category: 'leadership',
    image: '/images/osa.jpg',
    linkedin: 'https://www.linkedin.com/in/osaimohe/',
    bio: 'Healthcare technology and global education leader, co-founded Hilltop with Georgetown EMBA colleagues. Provides advice, leadership, and strategic support.',
  },
  {
    name: 'Nanya Osamor',
    role: 'Senior Project Consultant',
    category: 'staff',
    image: '/images/nanya-profile.jpeg',
    linkedin: 'https://www.linkedin.com/in/nanyaosamor/',
    bio: 'Manages partnership development and program logistics, ensuring seamless experiences for students and university partners.',
  },
  {
    name: 'Nkem Osamor',
    role: 'Project Consultant',
    category: 'staff',
    image: '/images/nkem-profile.jpeg',
    linkedin: 'https://www.linkedin.com/in/nkem-osamor-22572a226',
    bio: 'Supports program design and delivery, working with partners and participants to keep Hilltop engagements organized and on track.',
  },
  // Roles and bios as supplied by Phil, 30 October 2026. Both portraits are
  // cropped from the same team photograph taken in Accra, so they sit together
  // on the grid without looking mismatched.
  {
    name: 'Emelia Dabire',
    role: 'Senior Education Abroad Facilitator',
    category: 'staff',
    image: '/images/emelia-profile.jpg',
    bio: 'Facilitates education abroad programs across Ghana, from planning through delivery, keeping participants safe and the learning meaningful.',
  },
  {
    name: 'Rabania Alfani',
    role: 'Project Coordinator',
    category: 'staff',
    image: '/images/rabania-profile.jpg',
    bio: 'Coordinates travel, accommodation, and on-the-ground guest hospitality so every visit to Ghana feels seamless and personal.',
  },
];
