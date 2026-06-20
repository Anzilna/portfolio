"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, FREELANCE_PROJECTS, type Project } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const inner = (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: EASE, delay: 0.08 + index * 0.1 }}
      className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 py-10 md:py-14"
    >
      <div>
        <div className="flex items-baseline gap-4 mb-4">
          <h3
            className="font-black uppercase leading-none tracking-tight transition-opacity duration-200 group-hover:opacity-60"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 4rem)",
              color: "rgb(var(--C-fg))",
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
            {project.href && (
              <ArrowUpRight size={18} className="ml-2 opacity-30 inline flex-shrink-0" />
            )}
          </h3>
          <span
            className="text-xs tracking-widest hidden sm:inline"
            style={{ color: "rgba(var(--C-fg), 0.3)" }}
          >
            {project.year}
          </span>
        </div>
        <p
          className="text-sm leading-relaxed max-w-xl"
          style={{ color: "rgba(var(--C-fg), 0.55)" }}
        >
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap md:flex-col gap-2 self-center md:items-end">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-medium border"
            style={{
              borderColor: "rgba(var(--C-fg), 0.2)",
              color: "rgba(var(--C-fg), 0.6)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block">
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="px-6 md:px-12 py-24 md:py-36"
      style={{ backgroundColor: "rgb(var(--C-bg))" }}
    >
      {/* Personal projects header */}
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="flex items-end justify-between mb-4 border-b pb-6"
        style={{ borderColor: "rgba(var(--C-fg), 0.12)" }}
      >
        <p
          className="text-xs uppercase tracking-widest"
          style={{ color: "rgba(var(--C-fg), 0.45)" }}
        >
          (Personal Projects)
        </p>
        <p
          className="text-xs tracking-wide"
          style={{ color: "rgba(var(--C-fg), 0.35)" }}
        >
          {PROJECTS.length} {PROJECTS.length === 1 ? "project" : "projects"}
        </p>
      </motion.div>

      <div
        className="divide-y mb-24"
        style={{ borderColor: "rgba(var(--C-fg), 0.1)" }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Freelancing header */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="flex items-end justify-between mb-4 border-b pb-6"
        style={{ borderColor: "rgba(var(--C-fg), 0.12)" }}
      >
        <p
          className="text-xs uppercase tracking-widest"
          style={{ color: "rgba(var(--C-fg), 0.45)" }}
        >
          (Freelancing)
        </p>
        <p
          className="text-xs tracking-wide"
          style={{ color: "rgba(var(--C-fg), 0.35)" }}
        >
          {FREELANCE_PROJECTS.length} projects
        </p>
      </motion.div>

      <div
        className="divide-y"
        style={{ borderColor: "rgba(var(--C-fg), 0.1)" }}
      >
        {FREELANCE_PROJECTS.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
