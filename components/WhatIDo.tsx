"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function WhatIDo() {
  return (
    <section
      id="services"
      className="px-6 py-20 md:px-12 md:py-28"
      style={{ backgroundColor: "rgb(var(--C-bg))" }}
    >
      <div
        className="grid border-y lg:grid-cols-[30%_70%]"
        style={{ borderColor: "rgba(var(--C-fg), 0.72)" }}
      >
        {/* Left label */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: EASE }}
          className="flex items-start justify-between px-1 py-10 md:py-14 lg:min-h-full lg:pr-14"
        >
          <p
            className="text-2xl font-semibold tracking-tight md:text-3xl"
            style={{ color: "rgb(var(--C-fg))" }}
          >
            (What I do)
          </p>
          <span
            className="text-4xl font-light md:text-5xl"
            style={{ color: "rgb(var(--C-fg))" }}
            aria-hidden="true"
          >
            ↘
          </span>
        </motion.div>

        {/* Services grid */}
        <div
          className="grid grid-cols-1 border-t md:grid-cols-2 lg:border-l lg:border-t-0"
          style={{ borderColor: "rgba(var(--C-fg), 0.72)" }}
        >
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.75, ease: EASE, delay: 0.08 + i * 0.07 }}
              className="border-b p-8 last:border-b-0 md:min-h-72 md:p-12 md:odd:border-r md:[&:nth-last-child(2)]:border-b-0"
              style={{
                backgroundColor: "rgb(var(--C-bg))",
                borderColor: "rgba(var(--C-fg), 0.72)",
              }}
            >
              <h3
                className="mb-6 text-2xl font-semibold leading-tight tracking-tight md:text-3xl lg:text-4xl"
                style={{ color: "rgb(var(--C-fg))" }}
              >
                {svc.title}
              </h3>
              <p
                className="max-w-md text-base leading-relaxed md:text-lg"
                style={{ color: "rgba(var(--C-fg), 0.62)" }}
              >
                {svc.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
