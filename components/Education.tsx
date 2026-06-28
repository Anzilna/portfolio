"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Education() {
  return (
    <section
      id="education"
      className="px-6 md:px-12 py-20 md:py-28 border-t"
      style={{
        backgroundColor: "rgb(var(--C-bg))",
        borderColor: "rgba(var(--C-fg), 0.12)",
      }}
    >
      <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: EASE }}
          className="md:w-56 lg:w-64 flex-shrink-0 mb-10 md:mb-0"
        >
          <p
            className="text-xs uppercase tracking-widest"
            style={{ color: "rgba(var(--C-fg), 0.45)" }}
          >
            (Education)
          </p>
        </motion.div>

        <div className="flex-1 divide-y" style={{ borderColor: "rgba(var(--C-fg), 0.1)" }}>
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="py-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3
                    className="font-bold text-base leading-tight mb-1"
                    style={{ color: "rgb(var(--C-fg))" }}
                  >
                    {edu.degree}
                  </h3>
                  <p
                    className="text-sm mb-1"
                    style={{ color: "rgba(var(--C-fg), 0.55)" }}
                  >
                    {edu.institution}
                    {edu.type && (
                      <span style={{ color: "rgba(var(--C-fg), 0.35)" }}> · {edu.type}</span>
                    )}
                  </p>
                  {edu.focus && (
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(var(--C-fg), 0.38)" }}
                    >
                      {edu.focus}
                    </p>
                  )}
                </div>
                <p
                  className="text-xs font-medium whitespace-nowrap flex-shrink-0"
                  style={{ color: "rgba(var(--C-fg), 0.45)" }}
                >
                  {edu.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
