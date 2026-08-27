export const site = {
  name: 'M Abdullah',
  shortName: 'M ABDULLAH',
  role: 'Frontend Developer & Full-Stack Developer',
  headline: 'I design and build reliable web products — from polished interfaces to the systems behind them.',
  supporting:
    'I help businesses and founders turn product ideas into modern websites and full-stack applications. The work is practical: clear UX, maintainable code, and features that actually ship.',
  proof:
    'Current work includes React frontends, Node APIs, authentication, PostgreSQL with Prisma, and Stripe payment/subscription flows — with unfinished pieces labeled honestly as in progress.',
  github: 'https://github.com/akbrands80905-hub',
  linkedin: '',
  email: '',
  cvUrl: null as string | null,
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT ?? '',
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const;

export const skills = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  Backend: ['Node.js', 'REST APIs'],
  Database: ['PostgreSQL', 'Prisma', 'Supabase'],
  Payments: ['Stripe'],
  Tools: ['Git', 'GitHub', 'Vite'],
};
