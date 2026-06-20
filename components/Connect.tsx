"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PERSONAL, SOCIALS, NAV_LINKS } from "@/lib/constants";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const BG = "#1A1A1A";
const FG = "#F5F2EC";

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
    color: FG,
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
      style={{ backgroundColor: BG }}
    >
      {/* Main content — vertically centered */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-28 text-center md:px-12 md:py-36">

        {/* (Connect) label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14 text-base font-semibold tracking-tight md:mb-16 md:text-xl"
          style={{ color: FG }}
        >
          (Connect)
        </motion.p>

        {/* "Let's talk" headline */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.06 }}
          className="mb-12 leading-[0.86] md:mb-16"
          style={{
            fontSize: "clamp(4.75rem, 11.5vw, 14.5rem)",
            fontWeight: 600,
            color: FG,
            letterSpacing: "-0.065em",
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
            className="inline-flex items-center gap-2 rounded-full border px-8 py-4 text-sm font-semibold transition-colors duration-300 cursor-pointer md:px-10 md:text-base"
            style={{
              backgroundColor: FG,
              color: BG,
              borderColor: FG,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = FG;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = FG;
              el.style.color = BG;
            }}
          >
            {formOpen ? "Close form" : <span className="flex items-center gap-2">Get in touch <ArrowUpRight size={15} /></span>}
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
                    style={{ backgroundColor: FG, color: BG, borderColor: FG }}
                    onMouseEnter={(e) => {
                      if (status !== "sending") { const el = e.currentTarget; el.style.backgroundColor = "transparent"; el.style.color = FG; }
                    }}
                    onMouseLeave={(e) => { const el = e.currentTarget; el.style.backgroundColor = FG; el.style.color = BG; }}
                  >
                    {status === "sending" ? "Sending…" : <span className="flex items-center gap-2">Send <ArrowUpRight size={15} /></span>}
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
      <div className="px-6 md:px-12 border-t" style={{ borderColor: "rgba(245,242,236,0.1)" }}>
        {/* Top row: name + nav */}
        <div className="flex items-center justify-between py-6 border-b" style={{ borderColor: "rgba(245,242,236,0.06)" }}>
          <span className="text-xs sm:text-sm font-semibold tracking-tight" style={{ color: FG }}>
            {PERSONAL.name}
          </span>
          <nav className="flex gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-widest uppercase transition-opacity duration-200 hover:opacity-40"
                style={{ color: "rgba(245,242,236,0.55)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        {/* Bottom row: socials + copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-5">
          <div className="flex gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                title={s.title}
                {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-xs font-semibold tracking-wider uppercase underline underline-offset-4 transition-opacity duration-200 hover:opacity-40"
                style={{ color: "rgba(245,242,236,0.6)" }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
