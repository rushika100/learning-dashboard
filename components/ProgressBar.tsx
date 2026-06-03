"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props { value: number; color?: string; }

export default function ProgressBar({ value, color = "#00d4ff" }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-1.5 bg-[#1e2832] rounded-full overflow-hidden">
      <motion.div
        initial={{ width: "0%" }}
        animate={inView ? { width: `${value}%` } : { width: "0%" }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}80, ${color})` }}
      />
    </div>
  );
}