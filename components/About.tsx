"use client";

import { motion } from "framer-motion";
import { PERSONAL, SOCIALS } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-12 py-24 md:py-36"
      style={{ backgroundColor: "rgb(var(--C-bg))" }}
    >
      <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex-1 mb-12 md:mb-0"
        >
          <p
            className="font-semibold leading-snug"
            style={{
              fontSize: "clamp(1.4rem, 2.8vw, 2.4rem)",
              color: "rgb(var(--C-fg))",
              maxWidth: "34ch",
            }}
          >
            {PERSONAL.aboutStatement}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className="md:w-56 lg:w-64 flex-shrink-0"
        >
          <p
            className="text-xs uppercase tracking-widest mb-10"
            style={{ color: "rgba(var(--C-fg), 0.45)" }}
          >
            (About Me)
          </p>
          <div className="flex gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.title}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold tracking-wider uppercase underline underline-offset-4 transition-opacity duration-200 hover:opacity-40"
                style={{ color: "rgb(var(--C-fg))" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
