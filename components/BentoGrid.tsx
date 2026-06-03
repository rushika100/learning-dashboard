"use client";
import { motion } from "framer-motion";
import type { Course } from "@/types";
import HeroTile from "./HeroTile";
import CourseCard from "./CourseCard";
import ActivityTile from "./ActivityTile";
import StatsTile from "./StatsTile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const tile = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 24 } },
};

interface Props { courses: Course[]; }

export default function BentoGrid({ courses }: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pb-20 md:pb-4"
    >
      <motion.div variants={tile} className="sm:col-span-2">
        <HeroTile />
      </motion.div>

      <motion.div variants={tile}>
        <StatsTile />
      </motion.div>

      {courses.map((course, i) => (
        <motion.div key={course.id} variants={tile}>
          <CourseCard course={course} index={i} />
        </motion.div>
      ))}

      <motion.div variants={tile} className="sm:col-span-2 lg:col-span-1">
        <ActivityTile />
      </motion.div>
    </motion.div>
  );
}
