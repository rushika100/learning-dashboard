export default function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-[#1e2832] bg-[#0d1117] p-5 flex flex-col gap-4 animate-pulse">
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-xl bg-[#1e2832]" />
        <div className="w-10 h-6 rounded-lg bg-[#1e2832]" />
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-[#1e2832] rounded w-3/4" />
        <div className="h-1.5 bg-[#1e2832] rounded-full w-full mt-3" />
        <div className="h-3 bg-[#1e2832] rounded w-1/3" />
      </div>
    </div>
  );
}