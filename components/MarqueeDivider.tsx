"use client";

import { motion } from "framer-motion";

interface Props {
  label?: string;
}

export default function MarqueeDivider({ label = "Work" }: Props) {
  const TICKER_TEXT = `${label} • `;
  const segment = TICKER_TEXT.repeat(12);

  return (
    <div
      className="overflow-hidden border-y py-5 select-none"
      style={{
        backgroundColor: "rgb(var(--C-fg))",
        borderColor: "rgb(var(--C-fg))",
      }}
      aria-hidden="true"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((i) => (
          <span
            key={i}
            className="font-black uppercase pr-4"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              color: "rgb(var(--C-bg))",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            {segment}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
