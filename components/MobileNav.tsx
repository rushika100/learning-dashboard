"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutDashboard, BookOpen, BarChart2, Trophy, Settings } from "lucide-react";

const NAV = [
  { id: "dashboard", icon: LayoutDashboard, label: "Home" },
  { id: "courses",   icon: BookOpen,        label: "Courses" },
  { id: "analytics", icon: BarChart2,       label: "Stats" },
  { id: "achievements", icon: Trophy,       label: "Awards" },
  { id: "settings",  icon: Settings,        label: "Settings" },
];

export default function MobileNav() {
  const [active, setActive] = useState("dashboard");
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0d1117] border-t border-[#1e2832] z-50">
      <ul className="flex justify-around py-2">
        {NAV.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <button onClick={() => setActive(item.id)} className="flex flex-col items-center gap-1 px-3 py-1 relative">
                {isActive && (
                  <motion.div
                    layoutId="mobile-active"
                    className="absolute inset-0 rounded-xl bg-[#00d4ff]/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon size={20} className={`relative z-10 transition-colors ${isActive ? "text-[#00d4ff]" : "text-[#4a5568]"}`} />
                <span className={`text-[10px] relative z-10 transition-colors ${isActive ? "text-[#00d4ff]" : "text-[#4a5568]"}`}>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}