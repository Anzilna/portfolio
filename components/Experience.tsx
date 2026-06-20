"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-6 md:px-12 py-20 md:py-28 border-t"
      style={{
        backgroundColor: "rgb(var(--C-bg))",
        borderColor: "rgba(var(--C-fg), 0.12)",
      }}
    >
      <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24">
        {/* Left label */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: EASE }}
          className="md:w-56 lg:w-64 flex-shrink-0 mb-10 md:mb-0"
        >
          <p
            className="text-xs uppercase tracking-widest mb-2"
            style={{ color: "rgba(var(--C-fg), 0.45)" }}
          >
            (Experience)
          </p>
          <p className="text-xs" style={{ color: "rgba(var(--C-fg), 0.35)" }}>
            ~2 yrs
          </p>
        </motion.div>

        {/* Job rows */}
        <div className="flex-1 divide-y" style={{ borderColor: "rgba(var(--C-fg), 0.1)" }}>
          {EXPERIENCE.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              className="py-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="flex items-baseline gap-3 flex-wrap mb-1">
                    <h3
                      className="font-bold text-base leading-tight"
                      style={{ color: "rgb(var(--C-fg))" }}
                    >
                      {job.company}
                    </h3>
                    {job.duration && (
                      <span
                        className="text-xs"
                        style={{ color: "rgba(var(--C-fg), 0.35)" }}
                      >
                        {job.duration}
                      </span>
                    )}
                  </div>
                  <p
                    className="text-sm mb-2"
                    style={{ color: "rgba(var(--C-fg), 0.55)" }}
                  >
                    {job.role}
                  </p>
                  {job.focus && (
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(var(--C-fg), 0.38)" }}
                    >
                      {job.focus}
                    </p>
                  )}
                </div>

                <div className="flex-shrink-0 text-right">
                  <p
                    className="text-xs font-medium whitespace-nowrap"
                    style={{ color: "rgba(var(--C-fg), 0.45)" }}
                  >
                    {job.period}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
