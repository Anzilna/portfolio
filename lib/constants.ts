// ─── Personal ────────────────────────────────────────────────────────────────
export const PERSONAL = {
  name: "Mohammed Anzil N A",
  shortName: "Anzil",
  title: "Full Stack Engineer (AI & Cloud)",
  location: "Dubai, UAE",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "anziln422@gmail.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+971588708813",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+971 58 870 8813",
  github: process.env.NEXT_PUBLIC_GITHUB ?? "https://github.com/Anzilna",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "https://linkedin.com/in/Anzil-na",
  aboutStatement:
    "Full Stack Engineer (AI & Cloud) with 3 years of combined professional and freelance experience delivering production-ready platforms — from React/Next.js frontends and NestJS/GraphQL backends to end-to-end RAG pipelines, containerized microservices, and GitOps CI/CD. Proven across a full-time role, client projects, and government-grade systems.",
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
      "End-to-end Next.js, PERN & MERN applications — SEO-ready SSR/ISR frontends, NestJS/GraphQL and RESTful backends, JWT auth, and payment systems (Stripe Connect, Razorpay).",
  },
  {
    title: "Distributed Systems",
    description:
      "Independently deployable microservices behind API Gateways, event-driven messaging with Kafka, RabbitMQ and BullMQ, Transactional Outbox, CDC pipelines, and Redis caching.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS (EKS, RDS, ElastiCache, S3), Terraform, Docker, Kubernetes HPA auto-scaling, and GitOps CI/CD with Argo CD and GitHub Actions — plus Nginx and Cloudflare at the edge.",
  },
  {
    title: "Web Security",
    description:
      "Row-Level Security for multi-tenant isolation, RBAC, JWT with HttpOnly cookies, webhook signature verification, idempotent payments, and AES-256 / HMAC-SHA256 data protection.",
  },
  {
    title: "AI Engineering",
    description:
      "End-to-end RAG pipelines — chunking, pgvector embeddings, hybrid search (dense + BM25), RRF fusion, and LLM streaming. LangGraph/LangChain orchestration, MCP tool registries, and multi-agent systems with the OpenAI API.",
  },
  {
    title: "GraphQL & API Design",
    description:
      "Schema-first GraphQL APIs with NestJS + TypeORM spanning 30+ business modules — multi-role auth, real-time Socket.IO notifications, and clean RESTful service contracts.",
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    company: "Odidor, Canada",
    role: "Full Stack Developer (Remote)",
    period: "Jun 2025 — Sep 2026",
    duration: "1 Yr 4 Mo",
    href: "",
    focus: "Next.js & PERN, MERN, Microservices, ERP Systems, Payment Integration (Stripe Connect, Razorpay), DevOps",
  },
  {
    company: "GDS Tech Cloud Services",
    role: "Full Stack Developer (Freelance)",
    period: "LIVE",
    duration: "",
    href: "https://www.getdirectsupport.com/",
    focus: "Career Services Platform & CRM — Next.js 16, TypeScript, PostgreSQL (Neon), Prisma 7, Auth.js v5, Razorpay, Resend, PDFKit",
  },
  {
    company: "Ama Kalakara",
    role: "Full Stack Developer (Freelance)",
    period: "LIVE",
    duration: "",
    href: "https://amakalakara.odisha.gov.in/",
    focus: "Cultural Troupe Management System (Odisha Government) — NestJS, GraphQL, Angular 20, BullMQ, Redis, AWS, AES-256 Security",
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
    title: "Folkshops — Multi-Tenant E-Commerce SaaS",
    subtitle: "Multi-tenant commerce platform with database-enforced tenant isolation, event-driven payments, and an MCP-powered AI shopping assistant.",
    description:
      "Tenant-scoped PostgreSQL Row-Level Security with server-side tenant context resolution; a Transactional Outbox + BullMQ workflow that persists payment state and order.paid events atomically; Redis cache-aside with tenant-aware keys and Set-based tag invalidation. Stripe Connect hosted onboarding and destination charges with webhook signature verification and idempotent payment initiation; read/write routing for read replicas; a PostgreSQL → Debezium → Kafka → Elasticsearch CDC pipeline for search. AI shopping assistant built on a typed MCP tool registry with Hexagonal Architecture, targeting AWS EKS, RDS, ElastiCache, Terraform, and Argo CD.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Drizzle ORM", "Redis", "BullMQ", "Stripe Connect", "Kafka", "MCP"],
    year: "2026",
    href: "",
  },
  {
    title: "DocAI — Agentic RAG Platform",
    subtitle: "SaaS platform for conversational PDF analysis — end-to-end RAG pipeline built from scratch.",
    description:
      "End-to-end RAG pipeline engineered from scratch — PDF ingestion, parsing, chunking, embedding, retrieval, context assembly, and generation. Hybrid retrieval (dense vector + BM25) fused with Reciprocal Rank Fusion; 384-dim BGE embeddings in pgvector with cosine similarity and IVFFlat indexing; page-level citations traced back to source PDF pages; end-to-end NDJSON LLM streaming across FastAPI → NestJS → Next.js. Local sentence-transformers embeddings avoid external API costs.",
    tags: ["FastAPI", "NestJS", "Next.js", "pgvector", "OpenAI API", "Groq", "SQLAlchemy", "MinIO", "Docker"],
    year: "2026",
    href: "https://github.com/Anzilna/DocAi-",
  },
  {
    title: "TaskFlow — K8s + GitOps Platform",
    subtitle: "Real-time distributed job-processing system with Kubernetes autoscaling, GitOps CI/CD, and a companion mobile app.",
    description:
      "BullMQ + Redis async job queue decoupling long-running work from API requests, with live Socket.IO status updates and no polling. Kubernetes HPA scales workers from 2 to 10 replicas for peaks of 50 concurrent jobs; Redis AOF persistence keeps queued jobs across pod restarts. GitOps CI/CD with GitHub Actions and Argo CD (lint → build → push → infra update). React dashboard plus a React Native (Expo) app with bearer-token auth, React Query, and a live Socket.IO task feed.",
    tags: ["Node.js", "React", "React Native", "BullMQ", "Socket.IO", "Kubernetes", "Argo CD", "GitHub Actions"],
    year: "2026",
    href: "",
  },
  {
    title: "Social Media — Backend Microservices",
    subtitle: "Backend-only social platform — independently deployable services, API gateway, and async inter-service messaging.",
    description:
      "5 independently deployable microservices behind an API Gateway with centralized routing and JWT authentication. RabbitMQ for event-driven inter-service communication, Redis caching for hot read paths, MongoDB persistence, Docker-containerized services, and Winston structured logging for tracing across the system.",
    tags: ["Node.js", "Express", "MongoDB", "Redis", "RabbitMQ", "JWT", "Docker", "API Gateway"],
    year: "2025",
    href: "https://github.com/Anzilna/Social-Media-Microservices",
  },
];

// ─── Freelancing ──────────────────────────────────────────────────────────────
export const FREELANCE_PROJECTS: Project[] = [
  {
    title: "GDS — Enterprise CRM",
    subtitle: "Career services platform and multi-role CRM — built solo, end-to-end, and running in production.",
    description:
      "Public marketing and payments site plus a multi-role CRM (Admin, Manager, HR, Expert, Client) for GDS Tech Cloud Services. Next.js 16 with Auth.js v5 and Prisma 7 on Neon PostgreSQL; a developer time-tracking system that derives payments directly from logged work sessions; Razorpay with international payments, webhook signature validation, and Winston audit logging; PDFKit invoicing, Google Drive–backed file storage, Zod validation, and Resend transactional email.",
    tags: ["Next.js 16", "Auth.js v5", "Prisma 7", "Razorpay", "Neon", "PDFKit", "Resend", "Zod"],
    year: "2026",
    href: "https://www.getdirectsupport.com/",
  },
  {
    title: "Ama Kalakara — Odisha Govt.",
    subtitle: "Government-grade platform for Odisha's cultural department — troupes, auditions, events, payments, and work orders.",
    description:
      "Schema-first GraphQL API with NestJS + TypeORM spanning 30+ business modules. A dual-secret Aadhaar security layer — client-side AES-256-CBC encryption before transmission, server-side re-encryption at rest with a random IV, and an HMAC-SHA256 token for duplicate detection. Capacity-based audition scheduling that auto-splits into 50-troupe Artform Groups, backed by a BullMQ + Redis SMS/Email pipeline with live job monitoring. Angular 20 frontends with Socket.IO notifications, Razorpay, Leaflet maps, ApexCharts, and AWS EC2/S3.",
    tags: ["Angular 20", "NestJS", "GraphQL", "TypeORM", "BullMQ", "Redis", "AWS", "AES-256"],
    year: "2025",
    href: "https://amakalakara.odisha.gov.in/",
  },
];

export const PERSONAL_PROJECTS: Project[] = [];

// ─── Education ────────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: "Full-Stack Development",
    institution: "Brototype",
    type: "Remote",
    period: "Jun 2024 — May 2025",
    focus: "Industry-led self-learning program with weekly code reviews by working professionals. Focus: Full-Stack (MERN/PERN), Microservices, DevOps, DSA, System Design.",
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    institution: "Nirmala College, Chalakudy",
    type: "",
    period: "2021 — 2024",
    focus: "",
  },
];
