import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohammedanzil.in"),
  title: {
    default: "Mohammed Anzil — Full Stack, DevOps & AI Engineer",
    template: "%s | Mohammed Anzil",
  },
  description:
    "Mohammed Anzil — Full Stack, DevOps & AI Engineer with 2 years of experience delivering production-ready platforms. RAG pipelines, containerized microservices, GitOps CI/CD, Next.js/NestJS. Based in Kerala, India.",
  keywords: [
    "Mohammed Anzil",
    "Mohammed Anzil N A",
    "Anzil",
    "Full Stack AI Engineer",
    "DevOps Engineer",
    "RAG Pipeline",
    "MERN Stack",
    "Microservices",
    "Kubernetes",
    "React",
    "Next.js",
    "NestJS",
    "Node.js",
    "Docker",
    "Kerala",
    "India",
    "MongoDB",
    "TypeScript",
    "pgvector",
  ],
  authors: [{ name: "Mohammed Anzil N A" }],
  creator: "Mohammed Anzil N A",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammedanzil.in",
    title: "Mohammed Anzil — Full Stack, DevOps & AI Engineer",
    description:
      "Mohammed Anzil — Full Stack, DevOps & AI Engineer building production-ready platforms. Based in Kerala, India.",
    siteName: "Mohammed Anzil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Anzil — Full Stack, DevOps & AI Engineer",
    description: "Mohammed Anzil — Full Stack, DevOps & AI Engineer building production-ready platforms. Based in Kerala, India.",
    creator: "@anzildev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: "https://mohammedanzil.in" },
  verification: { google: "fP7Pcxlss5M9Yy8xU5U3ik-UDVxLm4IyqV3qrNKAfYA" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammed Anzil N A",
  alternateName: ["Mohammed Anzil", "Anzil", "Anzilna"],
  url: "https://mohammedanzil.in",
  jobTitle: "Full Stack, DevOps & AI Engineer",
  description:
    "Mohammed Anzil — Full Stack, DevOps & AI Engineer delivering production-ready RAG pipelines, microservices, and GitOps CI/CD systems. Based in Kerala, India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kerala",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/Anzilna",
    "https://linkedin.com/in/Anzil-na",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
