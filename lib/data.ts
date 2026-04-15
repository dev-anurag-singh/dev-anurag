export type Experience = {
  company: string;
  url: string;
  role: string;
  duration: string;
  description: string;
  bullets: string[];
  tech: string[];
  color: string;
  dot: string;
};

export type Project = {
  id: number;
  title: string;
  company?: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  demoUrl?: string;
  githubUrl?: string | null;
  slug: string;
  highlights?: string[];
  featured?: boolean;
};

export const experiences: Experience[] = [
  {
    company: "Block Liquidity",
    url: "https://blockliquidity.xyz",
    role: "Frontend Developer",
    duration: "Sep 2025 – Mar 2026",
    description:
      "Built and shipped major product features on a crypto trading platform — contributed to the React→Next.js migration and built a complete trading terminal from scratch.",
    bullets: [
      "Worked on React → Next.js migration across core pages, including adapting Reown Web3 auth to work correctly in the Next.js environment",
      "Built a full trading terminal — TradingView Advanced Charts, real-time order system, and custom technical indicators (most complex work)",
      "Developed Trader Tracker enabling users to monitor other traders' live positions in real-time",
      "Shipped UI for Alerts, Telegram Connect, and API Keys management features",
    ],
    tech: ["Next.js", "React", "TypeScript", "TradingView", "Reown", "Tailwind CSS"],
    color: "from-cyan-500 to-purple-500",
    dot: "bg-cyan-400",
  },
  {
    company: "LegalWeave",
    url: "https://legalweave.com",
    role: "Frontend Developer",
    duration: "Apr 2025 – Aug 2025",
    description:
      "Worked across the full product — a Microsoft Word Add-in, the main Next.js app, and the Astro landing page — for an AI-powered legal document platform.",
    bullets: [
      "Built a Microsoft Word Add-in with AI features: document review, Q&A, drafting, spell check, and smart formatting",
      "Implemented real-time AI response streaming (ChatGPT-style), replacing a slow batch response system",
      "Improved Slate.js document editor for a smoother, more intuitive in-app editing experience",
      "Fixed Core Web Vitals issues (CLS, LCP, speed) on the Astro-based landing page",
    ],
    tech: ["Next.js", "Astro", "TypeScript", "Slate.js", "Tailwind CSS"],
    color: "from-purple-500 to-pink-500",
    dot: "bg-purple-400",
  },
];

export const featuredProject: Project = {
  id: 0,
  title: "Trading Terminal",
  company: "Block Liquidity",
  description:
    "A full-featured crypto trading terminal built from scratch — modelled after Hyperliquid. Includes a real-time price chart, order system, and custom technical indicators built on TradingView Advanced Charts.",
  image: "/trading.jpeg",
  tags: ["Next.js", "React", "TypeScript", "TradingView", "Tailwind CSS"],
  liveUrl: "https://blockliquidity.xyz",
  githubUrl: null,
  slug: "trading-terminal",
  featured: true,
  highlights: [
    "TradingView Advanced Charts integration",
    "Real-time order & trading system",
    "Custom technical indicators",
    "Trader position tracking",
  ],
};

export const personalProjects: Project[] = [
  {
    id: 1,
    title: "Kanban Board",
    description:
      "Kanban-style task manager with real-time updates, authentication, and a responsive UI for organizing tasks across boards and columns.",
    image: "/kanban-preview.jpg",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "React Query"],
    demoUrl: "https://kanban.anuragkumar.dev",
    githubUrl: "https://github.com/dev-anurag-singh/kanban-task-manager",
    slug: "kanban-board",
  },
  {
    id: 2,
    title: "Devlinks",
    description:
      "Custom link-sharing app — create a profile and share all your social links via a single digital card. Built with Supabase auth and real-time database.",
    image: "/devlink-preview.jpg",
    tags: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    demoUrl: "https://devlinks.anuragkumar.dev",
    githubUrl: "https://github.com/dev-anurag-singh/devlinks",
    slug: "devlinks",
  },
  {
    id: 3,
    title: "Invoice Manager",
    description:
      "Invoice management tool to create, update, and filter invoices by status. Includes light/dark mode and a clean, accessible interface.",
    image: "/invoice-preview.jpg",
    tags: ["React", "Next.js", "TypeScript", "Zod", "Radix UI"],
    demoUrl: "https://invoices.anuragkumar.dev",
    githubUrl: "https://github.com/dev-anurag-singh/invoice-manager",
    slug: "invoice-manager",
  },
  {
    id: 4,
    title: "Finance Dashboard",
    description:
      "Personal finance tracker to monitor income, expenses, and financial health with an intuitive dashboard and spending insights.",
    image: "/finify-preview.png",
    tags: ["Next.js", "TypeScript", "Drizzle", "PostgreSQL", "Recharts"],
    demoUrl: "https://finify.anuragkumar.dev",
    githubUrl: "https://github.com/dev-anurag-singh/finify",
    slug: "finance-dashboard",
  },
];
