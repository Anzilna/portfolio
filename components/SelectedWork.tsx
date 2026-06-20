"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, PERSONAL_PROJECTS, type Project } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ─── Main project row ────────────────────────────────────────────────────────
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

// ─── Personal work card ──────────────────────────────────────────────────────
function PersonalCard({ project, index }: { project: Project; index: number }) {
  const inner = (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.06 + index * 0.07 }}
      className="group p-6 h-full"
      style={{
        backgroundColor: "rgb(var(--C-bg))",
        border: "1px solid rgba(var(--C-fg), 0.12)",
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <h4
          className="font-bold text-base leading-tight transition-opacity duration-200 group-hover:opacity-60"
          style={{ color: "rgb(var(--C-fg))" }}
        >
          {project.title}
        </h4>
        {project.href && (
          <span className="text-sm opacity-30 ml-2 flex-shrink-0">↗</span>
        )}
      </div>
      <p
        className="text-sm leading-relaxed mb-4"
        style={{ color: "rgba(var(--C-fg), 0.55)" }}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-full text-xs border"
            style={{
              borderColor: "rgba(var(--C-fg), 0.15)",
              color: "rgba(var(--C-fg), 0.5)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );

  if (project.href) {
    return (
      <a href={project.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    );
  }
  return <div className="h-full">{inner}</div>;
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function SelectedWork() {
  const hasPersonalWork = PERSONAL_PROJECTS.length > 0;

  return (
    <section
      id="work"
      className="px-6 md:px-12 py-24 md:py-36"
      style={{ backgroundColor: "rgb(var(--C-bg))" }}
    >
      {/* Header */}
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
          (Selected Work)
        </p>
        <p
          className="text-xs tracking-wide"
          style={{ color: "rgba(var(--C-fg), 0.35)" }}
        >
          {PROJECTS.length} projects
        </p>
      </motion.div>

      {/* Main project rows */}
      <div
        className="divide-y mb-24"
        style={{ borderColor: "rgba(var(--C-fg), 0.1)" }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectRow key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Personal Work — only renders when non-empty */}
      {hasPersonalWork && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex items-end justify-between mb-8 border-b pb-6"
            style={{ borderColor: "rgba(var(--C-fg), 0.12)" }}
          >
            <p
              className="text-xs uppercase tracking-widest"
              style={{ color: "rgba(var(--C-fg), 0.45)" }}
            >
              (Secondary Work)
            </p>
            <p
              className="text-xs tracking-wide"
              style={{ color: "rgba(var(--C-fg), 0.35)" }}
            >
              {PERSONAL_PROJECTS.length} projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERSONAL_PROJECTS.map((project, i) => (
              <PersonalCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
