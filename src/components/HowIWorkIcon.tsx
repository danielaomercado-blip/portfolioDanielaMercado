"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, Search } from "lucide-react";

const ICONS = { search: Search, pen: PenTool, code: Code2 };

export default function HowIWorkIcon({ name }: { name: keyof typeof ICONS }) {
  const Icon = ICONS[name];

  return (
    <motion.div
      className="inline-flex text-accent"
      whileHover={{ scale: 1.15, rotate: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
    >
      <Icon size={36} strokeWidth={1.5} aria-hidden="true" />
    </motion.div>
  );
}
