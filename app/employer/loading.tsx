import { EmployerShell } from "@/widgets/employer/shell";

function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <EmployerShell>
      <main aria-busy="true" aria-label="İşveren paneli yükleniyor" className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
        <header className="mb-8 flex items-end justify-between gap-4"><div className="w-full max-w-2xl"><Skeleton className="h-3 w-36" /><Skeleton className="mt-3 h-9 w-80 max-w-full" /><Skeleton className="mt-3 h-4 w-full" /></div><Skeleton className="h-10 w-36" /></header>
        <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <Skeleton className="h-32 border border-[#c5c6cd] bg-white" key={index} />)}</section>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3"><section className="lg:col-span-2"><Skeleton className="h-80 border border-[#c5c6cd] bg-white" /></section><aside className="space-y-6"><Skeleton className="h-44 border border-[#c5c6cd] bg-white" /><Skeleton className="h-44 border border-[#c5c6cd] bg-white" /></aside></div>
        <span className="sr-only">İşveren paneli yükleniyor...</span>
      </main>
    </EmployerShell>
  );
}
