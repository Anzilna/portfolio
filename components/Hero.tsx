"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL, NAV_LINKS } from "@/lib/constants";
import ThemeToggle from "@/components/ThemeToggle";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const BG = "rgb(var(--C-bg))";
const FG = "rgb(var(--C-fg))";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <section id="hero" style={{ backgroundColor: BG }}>
        <div className="flex min-h-svh flex-col px-5 pb-7 pt-6 sm:px-8 sm:pb-9 md:min-h-[65svh] md:px-12 md:pt-8 lg:min-h-[38rem] lg:max-h-[50rem] lg:px-20 lg:pb-14">
          {/* Top nav */}
          <nav className="flex items-center justify-between">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-semibold tracking-tight sm:text-base"
              style={{ color: FG }}
            >
              {PERSONAL.name}
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2.5 sm:gap-3"
            >
              <ThemeToggle />
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 cursor-pointer sm:px-7 sm:py-3 sm:text-base"
                style={{ backgroundColor: FG, color: BG, borderColor: FG }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "transparent";
                  el.style.color = FG;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = FG;
                  el.style.color = BG;
                }}
              >
                Menu
              </button>
            </motion.div>
          </nav>

          {/* Headline */}
          <div className="flex flex-1 items-center py-12 sm:py-16">
            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.25 }}
              className="flex flex-col"
              style={{
                color: FG,
                fontSize: "clamp(2rem, 8.75vw, 11.2rem)",
                fontWeight: 600,
                letterSpacing: "-0.065em",
                lineHeight: 0.92,
              }}
            >
              <span>Mohammed Anzil</span>
              <span>Full Stack AI Engineer</span>
            </motion.h1>
          </div>

          {/* Bottom bar */}
          <div className="flex items-end justify-between gap-4">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-sm font-semibold sm:text-base md:text-xl"
              style={{ color: FG }}
            >
              ({PERSONAL.location})
            </motion.p>
            <motion.a
              href="#about"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-sm font-semibold sm:text-base md:text-xl"
              style={{ color: FG }}
            >
              ↘&nbsp; Scroll Down
            </motion.a>
          </div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.4 }}
          className="w-full relative overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          <Image
            src="/Anzil.jpg"
            alt="Mohammed Anzil N A — Full Stack AI Engineer"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Full-screen nav overlay — always dark */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ backgroundColor: "#1A1A1A" }}
          >
            <div className="flex items-center justify-between px-6 md:px-12 pt-8">
              <span className="text-sm font-semibold tracking-tight" style={{ color: "#F5F2EC" }}>
                {PERSONAL.name}
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="px-5 py-2 rounded-full text-sm font-medium border transition-colors duration-300 cursor-pointer"
                style={{ backgroundColor: "#F5F2EC", color: "#1A1A1A", borderColor: "#F5F2EC" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "transparent";
                  el.style.color = "#F5F2EC";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.backgroundColor = "#F5F2EC";
                  el.style.color = "#1A1A1A";
                }}
              >
                Close
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6 md:px-12">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: EASE }}
                  className="block border-b py-6 leading-none hover:opacity-50 transition-opacity duration-200"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 6rem)",
                    fontWeight: 800,
                    color: "#F5F2EC",
                    borderColor: "rgba(245,242,236,0.15)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
