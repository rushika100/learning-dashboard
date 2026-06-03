import { Suspense } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import BentoGrid from "@/components/BentoGrid";
import SkeletonCard from "@/components/SkeletonCard";
import { getCourses } from "@/lib/supabase";
import type { Course } from "@/types";

const MOCK_COURSES: Course[] = [
  { id: "1", title: "Advanced React Patterns", progress: 75, icon_name: "Layers", created_at: "" },
  { id: "2", title: "System Design Fundamentals", progress: 42, icon_name: "GitBranch", created_at: "" },
  { id: "3", title: "TypeScript Deep Dive", progress: 91, icon_name: "Code2", created_at: "" },
  { id: "4", title: "Data Structures & Algorithms", progress: 28, icon_name: "Binary", created_at: "" },
];

async function CoursesSection() {
  let courses: Course[] = [];
  try {
    courses = await getCourses();
    if (!courses?.length) courses = MOCK_COURSES;
  } catch {
    courses = MOCK_COURSES;
  }
  return <BentoGrid courses={courses} />;
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#080b0f]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Suspense fallback={<LoadingSkeleton />}>
          <CoursesSection />
        </Suspense>
      </main>
      <MobileNav />
    </div>
  );
}