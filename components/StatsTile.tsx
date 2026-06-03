"use client";
import { motion } from "framer-motion";
import { TrendingUp, Clock, Award, Target } from "lucide-react";

const STATS = [
  { icon: Clock,      label: "Total Hours",   value: "142h",  color: "#00d4ff", delta: "+12%" },
  { icon: Target,     label: "Completion",    value: "78%",   color: "#10b981", delta: "+5%" },
  { icon: Award,      label: "Certificates",  value: "3",     color: "#f59e0b", delta: "new" },
  { icon: TrendingUp, label: "Rank",          value: "#42",   color: "#7c3aed", delta: "↑8" },
];

export default function StatsTile() {
  return (
    <article className="grain-overlay relative rounded-2xl border border-[#1e2832] bg-[#0d1117] p-5 overflow-hidden">
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#7c3aed]/6 rounded-full blur-2xl pointer-events-none" />
      <h2 className="text-sm font-semibold text-white mb-4">Overview</h2>
      <div className="grid grid-cols-2 gap-3">
        {STATS.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-[#131920] rounded-xl p-3 border border-[#1e2832]"
            >
              <div className="flex items-center justify-between mb-2">
                <Icon size={14} style={{ color: s.color }} />
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ color: s.color, background: `${s.color}15` }}>{s.delta}</span>
              </div>
              <p className="text-xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-[#4a5568] mt-0.5">{s.label}</p>
            </motion.div>
          );
        })}
      </div>
    </article>
  );
}