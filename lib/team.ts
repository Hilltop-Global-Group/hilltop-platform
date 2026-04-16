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
    image: '/images/Phil-profile.jpeg',
    linkedin: 'https://www.linkedin.com/in/philagbeko/',
    bio: 'Visionary behind Hilltop Global Group and Georgetown EMBA alumnus, building bridges between U.S. institutions and Africa\'s most dynamic markets.',
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
  {
    name: 'Sadick Achuli',
    role: 'Technology Transformation Lead',
    category: 'staff',
    image: '/images/sadick-profile.jpeg',
    linkedin: 'https://www.linkedin.com/in/sadick-achuli-81955b249/',
    bio: 'Leads technology transformation at Hilltop, modernizing digital infrastructure and systems that support programs across focal markets and global outreach.',
  },
  {
    name: 'Faata Faleera Adam',
    role: 'Africa Operations Manager',
    category: 'staff',
    linkedin: 'https://www.linkedin.com/in/faata-faleera-a-170683a1/',
    bio: 'Faata oversees Hilltop\'s on-the-ground operations across the organization\'s focal markets, coordinating with local partners and host organizations.',
  },
];
