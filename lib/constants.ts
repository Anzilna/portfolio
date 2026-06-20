// ─── Personal ────────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: "Mohammed Anzil N A",
  shortName: "Anzil",
  title: "Full Stack AI Engineer",
  location: "Kerala, India",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "anziln422@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "8589822730",
  github: process.env.NEXT_PUBLIC_GITHUB ?? "https://github.com/Anzilna",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "https://linkedin.com/in/Anzil-na",
  aboutStatement:
    "Full Stack Developer with nearly 2 years of hands-on experience building scalable web applications using the MERN stack — from multi-tenant systems and microservices backends to secure payment integrations and DevOps pipelines. Focused on clean, modular, production-ready architecture. AI Engineering is a new skill I'm actively building on top of this foundation.",
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Connect", href: "#connect" },
];

// ─── Socials ─────────────────────────────────────────────────────────────────
export const SOCIALS = [
  { label: "GitHub", href: PERSONAL.github, title: "GitHub" },
  { label: "LinkedIn", href: PERSONAL.linkedin, title: "LinkedIn" },
  { label: "Email", href: `mailto:${PERSONAL.email}`, title: "Email" },
  { label: "Phone", href: `tel:${PERSONAL.phone}`, title: "Phone" },
];

// ─── Services (What I Do) ────────────────────────────────────────────────────
export const SERVICES = [
  {
    title: "Full Stack Development",
    description:
      "End-to-end MERN & Next.js applications — RESTful APIs, authentication (JWT, OAuth), payment systems (Stripe, Razorpay), and Redis caching.",
  },
  {
    title: "Microservices Architecture",
    description:
      "Designing independently deployable services with API Gateways, RabbitMQ messaging, and structured logging using Winston.",
  },
  {
    title: "DevOps",
    description:
      "Docker containerisation, CI/CD pipelines via GitHub Actions, AWS EC2 deployment, and Nginx configuration for production environments.",
  },
  {
    title: "UI Implementation",
    description:
      "Pixel-precise React component systems using ShadCN/UI, DaisyUI, and RTK Query — with micro-frontend architecture via Webpack Module Federation.",
  },
  {
    title: "AI Engineering",
    description:
      "Integrating large language models, building AI-powered pipelines, and shipping intelligent features into production applications. (New skill.)",
  },
  {
    title: "AI Code Review",
    description:
      "Auditing and refactoring AI-generated code into production-grade quality — readable, secure, performant, and maintainable.",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    company: "Odidor",
    role: "Full Stack Developer (Remote)",
    period: "June 2025 — Present",
    duration: "",
    href: "",
    focus: "MERN & Next.js, Microservices, RESTful APIs, ERP Systems, Payment Integration",
  },
  {
    company: "Raabyt",
    role: "Frontend Architecture Consultant (Remote)",
    period: "Contract",
    duration: "Project-based",
    href: "",
    focus: "React Architecture, RTK Query, Frontend Performance, CRM Systems",
  },
  {
    company: "Brototype",
    role: "Full Stack Developer (Remote)",
    period: "Aug 2024 — Aug 2026",
    duration: "2 yrs",
    href: "",
    focus: "MERN, PERN, Microservices, DSA, Cloud Deployment, DevOps",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  href: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Production E-Commerce — Monorepo",
    description:
      "6-service Dockerized monorepo (Next.js 15 + Express + PostgreSQL + Redis + BullMQ) built with Clean Architecture across 11 modules and 15 database models. Stripe webhook-driven payments, runtime theme engine (DB → CSS custom properties enabling hot-swap templates without redeployment), RTK Query admin panel with shadcn/ui, Redis caching for product and theme read paths, and Next.js 15 ISR with dynamic sitemap.",
    tags: ["Next.js 15", "Express", "PostgreSQL", "Redis", "BullMQ", "Stripe", "Prisma", "Docker"],
    year: "2025",
    href: "",
  },
];

// ─── Freelancing ──────────────────────────────────────────────────────────────
export const FREELANCE_PROJECTS: Project[] = [
  {
    title: "GDS — Enterprise CRM",
    description:
      "Multi-role CRM for GDS Tech Cloud Services — manages clients, experts, invoices, and payments. Next.js 16 App Router with Auth.js v5 RBAC (5 roles), Prisma 7 on Neon PostgreSQL, Razorpay webhooks with GST/international billing and immutable currency rate snapshots, Google Drive API (service account) for invoice storage, and React Email + Resend for transactional notifications.",
    tags: ["Next.js 16", "Auth.js v5", "Prisma 7", "Razorpay", "Neon", "Google Drive API", "React Email"],
    year: "2026",
    href: "https://www.getdirectsupport.com/",
  },
  {
    title: "Cultural Troupe Management — Odisha Govt.",
    description:
      "Government web application for the state of Odisha managing cultural troupes, artists, agencies, and events. NestJS 10 GraphQL API with Angular 20 frontend, AES-256-CBC Aadhaar encryption with HMAC tokenization, multi-role registration workflows, Razorpay payment gateway, WebSocket real-time notifications, AWS RDS + S3, and bilingual UI (English + Odia).",
    tags: ["Angular 20", "NestJS 10", "GraphQL", "AWS RDS + S3", "Razorpay", "WebSockets", "AES-256"],
    year: "2025",
    href: "https://www.amakalakara.com/",
  },
];

export const PERSONAL_PROJECTS: Project[] = [];
