export interface TeamMember {
  name: string;
  role: string;
  category: 'leadership' | 'staff';
  image: string;
  linkedin: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Phil Agbeko',
    role: 'Founder & CEO',
    category: 'leadership',
    image: 'https://via.placeholder.com/400x480/1D3160/FFFFFF?text=PA',
    linkedin: 'https://www.linkedin.com/in/philagbeko/',
    bio: 'Georgetown EMBA alumnus and visionary behind Hilltop Global Group, building bridges between U.S. institutions and Africa\'s most dynamic markets.',
  },
  {
    name: 'Nanya Osamor',
    role: 'Project Consultant',
    category: 'staff',
    image: 'https://via.placeholder.com/400x480/1D3160/FFFFFF?text=NO',
    linkedin: 'https://www.linkedin.com/in/nanyaosamor/',
    bio: 'Manages partnership development and program logistics, ensuring seamless experiences for students and university partners.',
  },
  {
    name: 'Faata Faleera Adam',
    role: 'Africa Operations Manager',
    category: 'staff',
    image: 'https://via.placeholder.com/400x480/1D3160/FFFFFF?text=FA',
    linkedin: 'https://www.linkedin.com/in/faata-faleera-a-170683a1/',
    bio: 'Based across West Africa, Faata oversees on-the-ground operations in Ghana and Rwanda, coordinating with local partners and host organizations.',
  },
];
