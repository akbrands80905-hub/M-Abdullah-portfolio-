export type ProjectStatus = 'In Progress' | 'Live Demo Coming Soon';

export type CaseSection = {
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  featured: boolean;
  status: ProjectStatus;
  role: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  thumbnailLabel: string;
  thumbnailKind: 'hotel' | 'saas';
  summary: string;
  sections: CaseSection[];
};

export const projects: Project[] = [
  {
    slug: 'hotel-booking-system',
    title: 'Hotel Booking System',
    tagline: 'A booking platform for an independent boutique hotel — designed to replace spreadsheet reservations.',
    featured: true,
    status: 'In Progress',
    role: 'Solo Full-Stack Developer',
    tech: ['React', 'JavaScript', 'React Router', 'Tailwind CSS'],
    thumbnailLabel: 'Boutique hotel booking',
    thumbnailKind: 'hotel',
    summary:
      'A fictional independent boutique hotel currently manages reservations by hand. This project is a focused MVP: guest browsing and booking on the front, staff tools on the back, with a single source of truth for availability.',
    sections: [
      {
        heading: 'Problem',
        body: [
          'Manual reservation handling creates double-booking risk, weak availability visibility, and slow staff workflows. Guests cannot reliably check dates or confirm a stay without a back-and-forth process.',
          'The hotel needs a simple digital booking flow that guests can use independently, and that staff can trust when they also take reservations by phone or at the desk.',
        ],
      },
      {
        heading: 'Context',
        body: [
          'The product is scoped for a single-property boutique hotel — not a multi-property chain or a full property-management suite. The working name in the current frontend is Cyprus Luxury Stays.',
          'Guest-facing screens already exist for marketing, rooms, villas, gallery, services, contact, a booking search form, and sign-in/register layouts. These are UI foundations, not a finished booking engine.',
        ],
      },
      {
        heading: 'Constraints',
        body: [
          'Single property, limited budget, and a preference to avoid expensive recurring third-party booking platforms.',
          'Infrastructure should stay cost-effective. The MVP stays focused: rooms, dates, reservations, payments, and staff tools — not housekeeping, channel managers, or a large hotel-ops platform.',
        ],
      },
      {
        heading: 'Approach',
        body: [
          'Build a guest journey first: browse rooms, inspect details, select dates, and request a reservation. Add account access where it helps returning guests manage bookings.',
          'Run staff operations behind a protected admin area: view, create, modify, and cancel reservations, plus room and availability views.',
          'Treat guest bookings and staff-created reservations as the same domain. Both paths must share one server-side availability check so a phone booking cannot collide with an online booking.',
        ],
      },
      {
        heading: 'Key Technical Decisions',
        body: [
          'Frontend: React with client-side routing for a fast, page-based guest experience. The current UI uses Tailwind utility classes.',
          'Availability: planned as a server-side conflict validator — never trust the browser to decide if a room is free.',
          'Payments: planned Stripe Checkout for card payments and confirmation. Eligible refunds (free cancellation up to 48 hours before check-in) are intended to go through Stripe; inside 48 hours, bookings are non-refundable.',
          'Auth: sign-in and register screens exist as UI. Real session/account handling and a protected admin dashboard are planned, not implemented yet.',
        ],
      },
      {
        heading: 'Tradeoffs',
        body: [
          'A custom MVP is cheaper long-term than a full booking SaaS subscription, but it means owning availability, payments, and edge cases.',
          'Shipping a strong guest UI before the reservation engine lets the product look and feel real early, at the cost of not having live bookings yet.',
          'Single-property scope keeps the data model simpler (rooms, dates, reservations) instead of generalizing too soon.',
        ],
      },
      {
        heading: 'Challenges',
        body: [
          'Preventing double bookings when two channels (guest web + staff) write reservations.',
          'Encoding cancellation policy in payment logic rather than only in copy.',
          'Keeping the UI honest: login, booking, and admin cannot be presented as finished if they are still forms and layouts.',
        ],
      },
      {
        heading: 'How They Were Solved',
        body: [
          'Conflict rule (planned): one server-side availability transaction for both guest and staff writes. If a date range is taken, the request fails.',
          'Policy (specified, not yet wired): free cancellation until 48 hours before check-in; later cancellations are non-refundable; eligible refunds via Stripe.',
          'Current implementation: marketing and catalog pages, a date-search booking form, and static login/register screens. Remaining work is labeled In Progress rather than implied as live.',
        ],
      },
      {
        heading: 'Result',
        body: [
          'The project currently demonstrates a boutique-hotel frontend structure and a clear product spec for booking, payments, and admin operations.',
          'It is not a production booking system yet. There is no live demo and no claimed occupancy, revenue, or hotel-client outcome.',
        ],
      },
      {
        heading: 'What It Demonstrates',
        body: [
          'Product thinking for a real business workflow (availability, payments, staff vs guest).',
          'Frontend architecture for a multi-page hospitality experience.',
          'Honest scoping: MVP constraints, planned backend rules, and unfinished work called out in the open.',
        ],
      },
    ],
  },
  {
    slug: 'quoteflow-ai',
    title: 'QuoteFlow AI',
    tagline: 'A subscription SaaS that turns a client brief into proposals, quotations, and invoices.',
    featured: true,
    status: 'Live Demo Coming Soon',
    role: 'Solo Full-Stack Developer',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Prisma', 'PostgreSQL', 'Supabase', 'Stripe'],
    thumbnailLabel: 'Document SaaS workspace',
    thumbnailKind: 'saas',
    summary:
      'QuoteFlow AI is a document SaaS for service businesses: describe a client request, generate structured documents, manage them in an authenticated dashboard, and subscribe through Stripe. Public marketing pages and a full-stack architecture are in place; some dashboard surfaces still use sample UI data.',
    sections: [
      {
        heading: 'Problem',
        body: [
          'Freelancers and small agencies spend too long turning a messy client request into a proposal, quotation, and invoice. The work is repetitive, easy to underprice, and hard to keep consistent.',
          'A dedicated product can structure that workflow: capture the brief, analyze it, produce documents, and keep billing behind a subscription.',
        ],
      },
      {
        heading: 'Product context',
        body: [
          'QuoteFlow AI is a subscription product with public pages (landing, pricing, features, templates, FAQ, legal) and an authenticated app area (dashboard, document creation, documents, clients, settings, billing, analytics).',
          'The intended loop is: describe the client need → AI analysis → proposal / quotation / invoice → share or export → track status.',
        ],
      },
      {
        heading: 'Constraints',
        body: [
          'Solo-built product: keep the stack conventional (React + Vite frontend, Node API, Postgres via Prisma) so it can be deployed without a large ops team.',
          'Payments and plan limits must live on the server. The UI cannot be the source of truth for PRO vs FREE access.',
        ],
      },
      {
        heading: 'Architecture',
        body: [
          'Frontend: React, TypeScript, Vite, Tailwind CSS, React Router. Marketing routes are public; app routes sit behind a token check.',
          'Backend: Node/Express TypeScript API with JWT auth, Zod validation, and Prisma against PostgreSQL (Supabase-ready connection URLs).',
          'Documents, clients, usage counters, business profiles, and subscriptions are modeled in Prisma. Stripe Checkout, customer portal, and webhook handlers exist on the API.',
        ],
      },
      {
        heading: 'Database decisions',
        body: [
          'PostgreSQL with Prisma keeps users, subscriptions, usage, clients, and documents in a relational schema rather than ad-hoc JSON files.',
          'Supabase is used as the hosted Postgres option (pooler URL for app traffic, direct URL for migrations) without treating the product as “Supabase-only.”',
        ],
      },
      {
        heading: 'Authentication',
        body: [
          'Implemented: register and login with email/password, bcrypt password hashing, JWT session tokens, and protected frontend routes that require a stored token.',
          'Password reset token records exist in the schema and auth routes. Profile updates are modeled on the user and business-profile tables.',
        ],
      },
      {
        heading: 'Stripe integration',
        body: [
          'Implemented on the API: authenticated Checkout session creation for PRO and BUSINESS plans, Stripe customer portal sessions, and webhook handling for subscription lifecycle events.',
          'Plan access is intended to be enforced server-side (FREE / PRO / BUSINESS), not only in the UI. Stripe keys and price IDs are environment-configured; this is not presented as a live billed customer base.',
        ],
      },
      {
        heading: 'Important technical decisions',
        body: [
          'Keep AI analysis on the server with schema validation so a malformed model response cannot break document creation.',
          'When an OpenAI key is missing, the AI service returns a structured fallback instead of failing the whole request.',
          'Public document viewing is designed around a secure token route rather than exposing private IDs.',
        ],
      },
      {
        heading: 'Tradeoffs',
        body: [
          'A full custom SaaS is more work than a no-code form tool, but it owns auth, billing, and document data.',
          'Some dashboard and document-create screens still use sample/local UI data while the API and schema are in place. That ships a usable interface sooner, at the cost of not claiming every screen is live-backed yet.',
        ],
      },
      {
        heading: 'Challenges',
        body: [
          'Connecting Stripe events to local subscription rows without trusting the client.',
          'Separating marketing UI from authenticated product surfaces.',
          'Keeping AI output structured enough to fill proposals without inventing client facts.',
        ],
      },
      {
        heading: 'Result',
        body: [
          'The codebase is a working subscription-SaaS architecture: auth, Prisma data model, Stripe checkout/portal/webhooks, protected dashboard routes, and document-oriented product pages.',
          'A public live demo is not listed here. Dashboard metrics shown in the app UI include sample figures and should not be read as production traction.',
        ],
      },
      {
        heading: 'What it demonstrates',
        body: [
          'Full-stack product structure: marketing site + authenticated app + API + database + payments.',
          'Practical Stripe subscription design (checkout, portal, webhooks, plan guards).',
          'TypeScript across frontend and backend, with validation at the API boundary.',
        ],
      },
    ],
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

export const featuredProjects = projects.filter((project) => project.featured);
