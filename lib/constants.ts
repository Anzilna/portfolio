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
    period: "2026",
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

// ─── Selected Work ────────────────────────────────────────────────────────────
export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  href: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Multi-Tenant E-Commerce",
    description:
      "White-label e-commerce platform supporting multiple clients from a single configurable codebase — micro-frontend architecture via Webpack Module Federation, CI/CD with GitHub Actions, and Docker containerisation.",
    tags: ["Next.js", "Microservices", "Docker", "CI/CD", "Module Federation"],
    year: "2025",
    href: "",
  },
  {
    title: "Social Media – Microservices",
    description:
      "Scalable backend-only social platform built with 5 independently deployable microservices, API Gateway (JWT), Redis caching, RabbitMQ messaging, and Docker containerisation.",
    tags: ["Node.js", "Microservices", "Redis", "RabbitMQ", "Docker"],
    year: "2025",
    href: "",
  },
  {
    title: "PurelyYou",
    description:
      "Full-stack personal care e-commerce platform with Razorpay payments, wallet management, referral system, admin panel with sales reporting, and AWS EC2 deployment behind Nginx.",
    tags: ["Node.js", "MongoDB", "Razorpay", "AWS EC2", "Nginx"],
    year: "2024",
    href: "",
  },
  {
    title: "Chat App",
    description:
      "Real-time messaging platform with Socket.IO, message delivery/seen statuses, Cloudinary image uploads, Zustand state management, and multi-theme DaisyUI UI.",
    tags: ["React", "Socket.IO", "Zustand", "Cloudinary", "DaisyUI"],
    year: "2025",
    href: "", // add live Render URL here
  },
];

// ─── Personal / Mini Projects ──────────────────────────────────────────────────
// Shown in a separate "(Personal Work)" section.
// Auto-hides if empty — add entries here to make the section appear.
export const PERSONAL_PROJECTS: Project[] = [
  {
    title: "Netflix Clone",
    description:
      "Responsive movie streaming app using the TMDB API — trending/upcoming categorisation, JWT-based login, Zustand global state, Tailwind CSS.",
    tags: ["React", "TMDB API", "Zustand", "JWT"],
    year: "2025",
    href: "",
  },
  {
    title: "User Management System",
    description:
      "Admin dashboard built with the MERN stack featuring JWT authentication, CRUD operations, and role-based access control.",
    tags: ["React", "Node.js", "MongoDB", "JWT", "RBAC"],
    year: "2025",
    href: "",
  },
];
