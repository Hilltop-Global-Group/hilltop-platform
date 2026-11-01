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
    bio: 'Started with a conviction: Africa is not a frontier; it’s the future of global education. His 25-year career spans international development, information technology, and global education: the World Bank Group, leading Fortune 500 technology initiatives, and a Georgetown MBA. Fulbright Specialist, The PIE 50 Voices honoree, thought leader, and sought-after speaker, he’s the architect of partnerships spanning 7 African countries and still expanding.',
  },
  {
    name: 'Osa Imohe',
    role: 'Co-Founder',
    category: 'leadership',
    image: '/images/osa.jpg',
    linkedin: 'https://www.linkedin.com/in/osaimohe/',
    bio: 'The steady hand behind the bold moves. A healthcare technology leader and global education enthusiast, he co-founded Hilltop with his classmate Phil and helps shape the strategy that turns ambitious ideas into programs that actually run, providing advice, leadership, and strategic support along the way.',
  },
  {
    name: 'Nanya Osamor',
    role: 'Senior Project Consultant',
    category: 'staff',
    image: '/images/nanya-profile.jpeg',
    linkedin: 'https://www.linkedin.com/in/nanyaosamor/',
    bio: 'Walked in as an intern. Never really left. Years and many programs later, she’s the one opening the doors every Hilltop program walks through: building university partnerships from first hello to signed agreement, then leading on the ground so what was promised is exactly what happens. She’s seen a program from every seat in the house, and it shows.',
  },
  {
    name: 'Nkem Osamor',
    role: 'Project Consultant',
    category: 'staff',
    image: '/images/nkem-profile.jpeg',
    linkedin: 'https://www.linkedin.com/in/nkem-osamor-22572a226',
    bio: 'Watched her sister have entirely too much fun working at Hilltop and decided she wasn’t missing out. She’s been a rock star in her own right ever since: the engine room of every engagement, from itineraries to invoices to the hundred details nobody notices until they’re perfect. Partners feel momentum, never friction. That’s her signature.',
  },
  // Roles and bios as supplied by Phil, 30 October 2026. Both portraits are
  // cropped from the same team photograph taken in Accra, so they sit together
  // on the grid without looking mismatched.
  {
    name: 'Emelia Dabire',
    role: 'Senior Education Abroad Facilitator',
    category: 'staff',
    image: '/images/emelia-profile.jpg',
    bio: 'Your first hello on arrival and your biggest cheerleader through it all. She leads programs on the ground from touchdown to farewell: the one teaching you to say thank you in the local language, waving you into the dance circle you swore you’d only watch, and talking you into trying the dish you can’t pronounce (you’ll order it twice). Two things stay sacred on her watch: everyone stays safe, and everyone leaves changed.',
  },
  {
    name: 'Rabania Alfani',
    role: 'Project Coordinator',
    category: 'staff',
    image: '/images/rabania-profile.jpg',
    bio: 'Makes every guest feel like someone we’ve been expecting. Hotels confirmed, rides waiting, and a sixth sense for what you need before you ask. She’s also your secret weapon in the market: which stall has the best fabric, when the first price is just the opening act, and how to bargain with a smile like you were born there. Guests never see the effort, only the welcome.',
  },
];
