import { benchmarkingProfile, sidebarItems, supportItems } from "@/entities/talent-benchmark";
import { DashboardShell } from "@/shared/ui/dashboard-shell";

function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <DashboardShell navigationItems={sidebarItems} sidebarSubtitle={benchmarkingProfile.planName} sidebarTitle={benchmarkingProfile.organizationName} utilityItems={supportItems}>
      <main aria-busy="true" aria-label="Yetenek karşılaştırması yükleniyor" className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
        <header className="mb-6 flex items-end justify-between gap-4"><div><Skeleton className="h-9 w-72 max-w-full" /><Skeleton className="mt-3 h-4 w-96 max-w-full" /></div><Skeleton className="h-10 w-36" /></header>
        <section className="overflow-hidden rounded border border-[#c5c6cd] bg-white"><div className="grid min-w-[720px] grid-cols-4 border-b border-[#c5c6cd]">{Array.from({ length: 4 }, (_, index) => <div className="border-r border-[#c5c6cd] p-5 last:border-0" key={index}>{index > 0 ? <><Skeleton className="mx-auto h-14 w-14 rounded-full" /><Skeleton className="mx-auto mt-3 h-4 w-28" /></> : null}</div>)}</div><div className="min-w-[720px] divide-y divide-[#c5c6cd]">{Array.from({ length: 7 }, (_, row) => <div className="grid grid-cols-4" key={row}>{Array.from({ length: 4 }, (_, column) => <div className="border-r border-[#c5c6cd] p-5 last:border-0" key={column}><Skeleton className="mx-auto h-4 w-24" /></div>)}</div>)}</div></section>
        <span className="sr-only">Yetenek karşılaştırması yükleniyor...</span>
      </main>
    </DashboardShell>
  );
}
