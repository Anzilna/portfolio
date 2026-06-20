"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PERSONAL, SOCIALS } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Status = "idle" | "sending" | "success" | "error";

export default function Connect() {
  const [formOpen, setFormOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const body = (await res.json()) as { error?: string };
        setErrorMsg(body.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    background: "transparent",
    color: "#F5F2EC",
    borderBottom: "1px solid rgba(245,242,236,0.2)",
    outline: "none",
    width: "100%",
    paddingBottom: "10px",
    fontSize: "0.9rem",
    fontFamily: "inherit",
  };

  return (
    <section
      id="connect"
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#1A1A1A" }}
    >
      {/* Main content — vertically centered */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-24 text-center">

        {/* (Connect) label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-base font-semibold tracking-tight mb-8"
          style={{ color: "#F5F2EC" }}
        >
          (Connect)
        </motion.p>

        {/* "Let's talk" headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.06 }}
          className="leading-[0.9] tracking-tight mb-10"
          style={{
            fontSize: "clamp(4rem, 12vw, 13rem)",
            fontWeight: 700,
            color: "#F5F2EC",
            letterSpacing: "-0.03em",
          }}
        >
          Let&apos;s talk
        </motion.h2>

        {/* CTA pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.16 }}
        >
          <button
            onClick={() => setFormOpen((v) => !v)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border transition-colors duration-300 cursor-pointer"
            style={{
              backgroundColor: "#F5F2EC",
              color: "#1A1A1A",
              borderColor: "#F5F2EC",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = "#F5F2EC";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#F5F2EC";
              el.style.color = "#1A1A1A";
            }}
          >
            {formOpen ? "Close form" : "Get in touch ↗"}
          </button>
        </motion.div>

        {/* Contact form */}
        <AnimatePresence>
          {formOpen && (
            <motion.div
              key="contact-form"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="overflow-hidden w-full max-w-2xl mt-14 text-left"
            >
              <form onSubmit={handleSubmit} noValidate>
                <input type="text" name="website" tabIndex={-1} aria-hidden="true" autoComplete="off"
                  style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(245,242,236,0.4)" }}>Name</label>
                    <input id="name" name="name" type="text" required maxLength={100} placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(245,242,236,0.4)" }}>Email</label>
                    <input id="email" name="email" type="email" required maxLength={200} placeholder="your@email.com" style={inputStyle} />
                  </div>
                </div>

                <div className="mb-10">
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest mb-3" style={{ color: "rgba(245,242,236,0.4)" }}>Message</label>
                  <textarea id="message" name="message" required rows={4} maxLength={2000} placeholder="Tell me about your project…" style={{ ...inputStyle, resize: "none" }} />
                </div>

                <div className="flex items-center gap-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border transition-colors duration-300 disabled:opacity-50 cursor-pointer"
                    style={{ backgroundColor: "#F5F2EC", color: "#1A1A1A", borderColor: "#F5F2EC" }}
                    onMouseEnter={(e) => {
                      if (status !== "sending") { const el = e.currentTarget; el.style.backgroundColor = "transparent"; el.style.color = "#F5F2EC"; }
                    }}
                    onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = "#F5F2EC"; el.style.color = "#1A1A1A"; }}
                  >
                    {status === "sending" ? "Sending…" : "Send ↗"}
                  </button>
                  {status === "success" && (
                    <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-sm" style={{ color: "rgba(245,242,236,0.65)" }}>
                      Message sent — I&apos;ll be in touch soon.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="text-sm" style={{ color: "rgba(245,242,236,0.55)" }}>
                      {errorMsg}
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer — pinned to bottom */}
      <div className="px-6 md:px-12 py-8 border-t" style={{ borderColor: "rgba(245,242,236,0.1)" }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span className="text-sm font-semibold tracking-tight" style={{ color: "#F5F2EC" }}>
            {PERSONAL.name}
          </span>
          <div className="flex gap-5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} title={s.title} target="_blank" rel="noopener noreferrer"
                className="text-xs font-semibold tracking-wider uppercase underline underline-offset-4 transition-opacity duration-200 hover:opacity-40"
                style={{ color: "rgba(245,242,236,0.6)" }}>
                {s.label}
              </a>
            ))}
          </div>
          <span className="text-xs" style={{ color: "rgba(245,242,236,0.3)" }}>
            &copy; {new Date().getFullYear()} {PERSONAL.name}
          </span>
        </div>
      </div>
    </section>
  );
}
