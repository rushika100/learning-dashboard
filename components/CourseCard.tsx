"use client";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { LucideProps } from "lucide-react";
import ProgressBar from "./ProgressBar";
import type { Course } from "@/types";

const CARD_COLORS = ["#00d4ff", "#7c3aed", "#10b981", "#f59e0b"];

interface Props { course: Course; index: number; }

export default function CourseCard({ course, index }: Props) {
  const color = CARD_COLORS[index % CARD_COLORS.length];
  const IconComponent = (Icons[course.icon_name as keyof typeof Icons] as React.ComponentType<LucideProps>) ?? Icons.BookOpen;

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="grain-overlay relative rounded-2xl border border-[#1e2832] bg-[#0d1117] p-5 flex flex-col gap-4 overflow-hidden cursor-pointer group"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(circle at top left, ${color}08 0%, transparent 60%)` }}
      />
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${color}30` }}
      />

      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${color}15`, border: `1px solid ${color}25` }}
        >
          <IconComponent size={18} style={{ color }} />
        </div>
        <span className="text-xs font-mono text-[#4a5568] bg-[#131920] px-2 py-1 rounded-lg border border-[#1e2832]">
          {course.progress}%
        </span>
      </div>

      <div>
        <h3 className="font-semibold text-white text-sm leading-snug mb-3">{course.title}</h3>
        <ProgressBar value={course.progress} color={color} />
        <p className="text-xs text-[#4a5568] mt-2 font-mono">
          {course.progress < 50 ? "In progress" : course.progress < 90 ? "Halfway there" : "Almost done!"}
        </p>
      </div>
    </motion.article>
  );
}