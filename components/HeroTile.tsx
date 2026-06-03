"use client";
import { Flame, Calendar } from "lucide-react";

const STREAK = 14;

export default function HeroTile() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  return (
    <article className="grain-overlay relative col-span-2 rounded-2xl overflow-hidden border border-[#1e2832] bg-[#0d1117] p-6 flex flex-col justify-between min-h-[180px]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#00d4ff]/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-10 w-56 h-56 bg-[#7c3aed]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <p className="text-[#4a5568] text-sm font-mono tracking-widest uppercase mb-1">{greeting}</p>
        <h1 className="text-3xl font-bold text-white leading-tight">
          Rushika Poojari
          <span className="text-[#00d4ff]">.</span>
        </h1>
        <p className="text-[#64748b] mt-1 text-sm">Ready to continue your learning journey?</p>
      </div>

      <div className="relative z-10 flex items-center gap-4 mt-4">
        <div className="flex items-center gap-2 bg-[#131920] border border-[#1e2832] rounded-xl px-4 py-2.5">
          <Flame size={18} className="text-[#f59e0b]" />
          <div>
            <p className="text-xs text-[#4a5568] font-mono">Daily Streak</p>
            <p className="text-lg font-bold text-white leading-none">{STREAK} <span className="text-xs text-[#4a5568] font-normal">days</span></p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#131920] border border-[#1e2832] rounded-xl px-4 py-2.5">
          <Calendar size={18} className="text-[#10b981]" />
          <div>
            <p className="text-xs text-[#4a5568] font-mono">This Week</p>
            <p className="text-lg font-bold text-white leading-none">6h <span className="text-xs text-[#4a5568] font-normal">studied</span></p>
          </div>
        </div>
        <div className="flex gap-1 ml-auto">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i < 5 ? "bg-[#f59e0b]" : "bg-[#1e2832]"}`} />
          ))}
        </div>
      </div>
    </article>
  );
}