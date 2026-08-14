import { EmployerShell } from "@/widgets/employer/shell";

function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <EmployerShell>
      <main aria-busy="true" aria-label="İşveren başvuruları yükleniyor" className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
        <header className="mb-8 border-b border-[#c5c6cd] pb-7"><Skeleton className="h-3 w-32" /><Skeleton className="mt-3 h-9 w-56" /><Skeleton className="mt-3 h-4 w-full max-w-2xl" /></header>
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <Skeleton className="h-32 border border-[#c5c6cd] bg-white" key={index} />)}</section>
        <section className="overflow-hidden rounded border border-[#c5c6cd] bg-white"><div className="border-b border-[#c5c6cd] p-5"><Skeleton className="h-5 w-44" /></div><div className="divide-y divide-[#c5c6cd]">{Array.from({ length: 6 }, (_, index) => <div className="flex items-center gap-4 p-5" key={index}><Skeleton className="h-11 w-11 rounded-full" /><div className="flex-1"><Skeleton className="h-5 w-48" /><Skeleton className="mt-2 h-3 w-3/4" /></div><Skeleton className="h-7 w-20" /></div>)}</div></section>
        <span className="sr-only">İşveren başvuruları yükleniyor...</span>
      </main>
    </EmployerShell>
  );
}
