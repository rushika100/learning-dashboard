"use client";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const weeks = Array.from({ length: 10 }, (_, wi) =>
  Array.from({ length: 7 }, (_, di) => ({
    val: Math.random() > 0.35 ? Math.floor(Math.random() * 4) + 1 : 0,
    label: `W${wi + 1} D${di + 1}`,
  }))
);

const COLORS = ["#1e2832", "#00d4ff25", "#00d4ff55", "#00d4ff90", "#00d4ff"];

export default function ActivityTile() {
  return (
    <article className="grain-overlay relative rounded-2xl border border-[#1e2832] bg-[#0d1117] p-5 overflow-hidden">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00d4ff]/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center gap-2 mb-4">
        <Activity size={16} className="text-[#00d4ff]" />
        <h2 className="text-sm font-semibold text-white">Learning Activity</h2>
        <span className="ml-auto text-xs text-[#4a5568] font-mono">Last 10 weeks</span>
      </div>

      <div className="flex gap-1">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day, di) => (
              <motion.div
                key={di}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (wi * 7 + di) * 0.005, type: "spring", stiffness: 300 }}
                className="w-3 h-3 rounded-sm cursor-pointer"
                style={{ background: COLORS[day.val] }}
                title={`${day.label}: ${day.val} sessions`}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-3">
        <span className="text-xs text-[#4a5568] font-mono">Less</span>
        {COLORS.map((c, i) => (
          <div key={i} className="w-3 h-3 rounded-sm" style={{ background: c }} />
        ))}
        <span className="text-xs text-[#4a5568] font-mono">More</span>
      </div>
    </article>
  );
}