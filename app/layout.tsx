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
    default: "Anzil — Full Stack Developer",
    template: "%s | Anzil",
  },
  description:
    "Full Stack Developer with nearly 2 years of experience building scalable MERN applications — microservices, DevOps, payment integrations, and real-time systems. Based in Kerala, India.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "Microservices",
    "React",
    "Next.js",
    "Node.js",
    "DevOps",
    "Docker",
    "Kerala",
    "India",
    "MongoDB",
    "TypeScript",
  ],
  authors: [{ name: "Mohammed Anzil N A" }],
  creator: "Mohammed Anzil N A",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mohammedanzil.in",
    title: "Anzil — Full Stack Developer",
    description:
      "Full Stack Developer (MERN + AI/ML) based in Kerala, India.",
    siteName: "Anzil",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anzil — Full Stack Developer",
    description: "Full Stack Developer (MERN + AI/ML) based in Kerala, India.",
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
  url: "https://mohammedanzil.in",
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specialising in MERN stack and AI/ML, based in Kerala, India.",
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
