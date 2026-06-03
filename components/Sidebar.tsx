"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, BookOpen, BarChart2, Trophy,
  Settings, ChevronLeft, Zap,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { id: "courses",   label: "My Courses", icon: BookOpen,        href: "/courses" },
  { id: "analytics", label: "Analytics",  icon: BarChart2,       href: "/analytics" },
  { id: "achievements", label: "Achievements", icon: Trophy,     href: "/achievements" },
  { id: "settings", label: "Settings",   icon: Settings,         href: "/settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("dashboard");

  return (
    <motion.nav
      animate={{ width: collapsed ? 64 : 220 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative hidden md:flex flex-col shrink-0 h-screen bg-[#0d1117] border-r border-[#1e2832] overflow-hidden"
    >
      <div className="flex items-center gap-3 px-4 py-5 border-b border-[#1e2832]">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] flex items-center justify-center shrink-0">
          <Zap size={16} className="text-white" />
        </div>
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="font-bold text-white text-lg tracking-tight whitespace-nowrap"
            >
              LearnOS
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <ul className="flex flex-col gap-1 p-2 flex-1 mt-2">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <button
                onClick={() => setActive(item.id)}
                className="relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors duration-150 group"
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#00d4ff]/10 to-[#7c3aed]/10 border border-[#00d4ff]/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon
                  size={18}
                  className={`shrink-0 relative z-10 transition-colors ${isActive ? "text-[#00d4ff]" : "text-[#4a5568] group-hover:text-[#94a3b8]"}`}
                />
                <AnimatePresence>
                  {!collapsed && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className={`relative z-10 text-sm font-medium whitespace-nowrap transition-colors ${isActive ? "text-white" : "text-[#4a5568] group-hover:text-[#94a3b8]"}`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center p-4 border-t border-[#1e2832] text-[#4a5568] hover:text-[#94a3b8] transition-colors"
      >
        <motion.div animate={{ rotate: collapsed ? 180 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 25 }}>
          <ChevronLeft size={18} />
        </motion.div>
      </button>
    </motion.nav>
  );
}