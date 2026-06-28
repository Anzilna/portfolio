// ─── Personal ────────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: "Mohammed Anzil N A",
  shortName: "Anzil",
  title: "Full Stack, DevOps & AI Engineer",
  location: "Kerala, India",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "anziln422@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "8589822730",
  github: process.env.NEXT_PUBLIC_GITHUB ?? "https://github.com/Anzilna",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "https://linkedin.com/in/Anzil-na",
  aboutStatement:
    "Full Stack, DevOps & AI Engineer with 2 years of experience delivering production-ready platforms — from React/Next.js frontends and NestJS/GraphQL backends to end-to-end RAG pipelines, containerized microservices, and GitOps CI/CD. Proven across solo freelance builds, remote teams, and government-grade systems. Focused on shipping reliable, AI-powered products at scale.",
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
    title: "DevOps & GitOps",
    description:
      "Docker, Kubernetes, Argo CD, and GitHub Actions CI/CD — from containerised dev environments to K8s HPA auto-scaling in production.",
  },
  {
    title: "UI Implementation",
    description:
      "Pixel-precise React component systems using ShadCN/UI, DaisyUI, and RTK Query — with micro-frontend architecture via Webpack Module Federation.",
  },
  {
    title: "AI Engineering",
    description:
      "End-to-end RAG pipelines — chunking, pgvector embeddings, hybrid search (dense + BM25), RRF fusion, and LLM streaming via Groq/LangGraph. Built without black-box libraries.",
  },
  {
    title: "GraphQL & API Design",
    description:
      "Schema-first GraphQL APIs with NestJS + TypeORM spanning complex business domains — multi-role auth, real-time subscriptions, and RESTful service contracts.",
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
    focus: "MERN & Next.js, Microservices, RESTful APIs, ERP Systems, Payment Integration, DevOps",
  },
  {
    company: "Raabyt",
    role: "Frontend Architecture Lead (Remote)",
    period: "Contract",
    duration: "Project-based",
    href: "",
    focus: "React Architecture, RTK Query, Frontend Performance, Modular Design, DevOps",
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
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  href: string;
};

export const PROJECTS: Project[] = [
  {
    title: "DocAI — Agentic RAG Platform",
    subtitle: "SaaS platform to chat with any PDF — end-to-end RAG pipeline built from scratch.",
    description:
      "SaaS platform to chat with any PDF — full RAG pipeline engineered from scratch without black-box libraries. 384-dim embeddings in pgvector (cosine + IVFFlat), hybrid search (dense vector + BM25) with RRF fusion, end-to-end LLM streaming (ndjson) from FastAPI → NestJS → Next.js with page-level citations. Zero-cost local embeddings via sentence-transformers; production async Python with SQLAlchemy async sessions.",
    tags: ["FastAPI", "NestJS", "Next.js", "pgvector", "Groq", "MinIO", "Redis", "Docker", "Turborepo"],
    year: "2026",
    href: "",
  },
  {
    title: "TaskFlow — K8s + GitOps Platform",
    subtitle: "Real-time job-processing system — a DevOps showcase with Kubernetes auto-scaling and GitOps CI/CD.",
    description:
      "Real-time distributed job-processing system — a DevOps showcase deployed on Kubernetes with GitOps CI/CD. Redis + BullMQ async job queue with live Socket.IO status updates; K8s HPA auto-scaling workers from 2 to 10 replicas at 50 concurrent jobs. GitOps pipeline with Argo CD and GitHub Actions (lint → build → push → infra update); Redis AOF persistence so jobs survive pod restarts.",
    tags: ["Node.js", "React", "BullMQ", "Socket.IO", "Kubernetes", "Argo CD", "GitHub Actions", "Docker"],
    year: "2026",
    href: "",
  },
  {
    title: "Multi-Tenant E-Commerce — Monorepo",
    subtitle: "Configurable white-label storefront for multiple clients — multi-tenancy and micro-frontend architecture.",
    description:
      "6-service Dockerized monorepo (Next.js 15 + Express + PostgreSQL + Redis + BullMQ) built with Clean Architecture across 11 modules and 15 database models. Stripe webhook-driven payments, runtime theme engine (DB → CSS custom properties enabling hot-swap templates without redeployment), RTK Query admin panel with shadcn/ui, Redis caching for product and theme read paths, and Next.js 15 ISR with dynamic sitemap.",
    tags: ["Next.js 15", "Express", "PostgreSQL", "Redis", "BullMQ", "Stripe", "Prisma", "Docker"],
    year: "2025",
    href: "",
  },
  {
    title: "Social Media — Backend Microservices",
    subtitle: "Backend-only social platform — microservices, API gateway, and inter-service messaging.",
    description:
      "Backend-only social platform built as a microservices architecture showcase. 5 independently deployable services behind an API Gateway with JWT auth, Redis caching for hot read paths, and RabbitMQ for async inter-service messaging. Structured logging via Winston across all services.",
    tags: ["Node.js", "Express", "MongoDB", "Redis", "RabbitMQ", "JWT", "Docker", "API Gateway"],
    year: "2025",
    href: "",
  },
];

// ─── Freelancing ──────────────────────────────────────────────────────────────
export const FREELANCE_PROJECTS: Project[] = [
  {
    title: "GDS — Enterprise CRM",
    subtitle: "Career services platform and role-based CRM — built solo, end-to-end, for GDS Tech Cloud Services.",
    description:
      "Multi-role CRM for GDS Tech Cloud Services — manages clients, experts, invoices, and payments. Next.js 16 App Router with Auth.js v5 RBAC (5 roles), Prisma 7 on Neon PostgreSQL, Razorpay webhooks with GST/international billing and immutable currency rate snapshots, Google Drive API (service account) for invoice storage, and React Email + Resend for transactional notifications.",
    tags: ["Next.js 16", "Auth.js v5", "Prisma 7", "Razorpay", "Neon", "Google Drive API", "React Email"],
    year: "2026",
    href: "https://www.getdirectsupport.com/",
  },
  {
    title: "Cultural Troupe Management — Odisha Govt.",
    subtitle: "Government-grade platform for Odisha's cultural department — troupes, artist auditions, events, and payments.",
    description:
      "Government web application for the state of Odisha managing cultural troupes, artists, agencies, and events. NestJS 10 GraphQL API with Angular 20 frontend, AES-256-CBC Aadhaar encryption with HMAC tokenization, multi-role registration workflows, Razorpay payment gateway, WebSocket real-time notifications, AWS RDS + S3, and bilingual UI (English + Odia).",
    tags: ["Angular 20", "NestJS 10", "GraphQL", "AWS RDS + S3", "Razorpay", "WebSockets", "AES-256"],
    year: "2025",
    href: "https://www.amakalakara.com/",
  },
];

export const PERSONAL_PROJECTS: Project[] = [];

// ─── Education ────────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: "Full-Stack Development (MERN Stack)",
    institution: "Brototype",
    type: "Remote",
    period: "Aug 2024 — Aug 2026",
    focus: "Full-Stack, DSA, Computer Networking, Databases, Software Architecture — reviewed weekly by industry professionals.",
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    institution: "Nirmala College, Chalakudy",
    type: "",
    period: "2021 — 2024",
    focus: "",
  },
];
