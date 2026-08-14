import { EmployerShell } from "@/widgets/employer/shell";

function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <EmployerShell>
      <main aria-busy="true" aria-label="Yetenekler yükleniyor" className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
        <header className="mb-8 border-b border-[#c5c6cd] pb-7"><Skeleton className="h-3 w-40" /><Skeleton className="mt-3 h-9 w-56" /><Skeleton className="mt-3 h-4 w-full max-w-2xl" /></header>
        <Skeleton className="mb-7 h-24 border border-[#c5c6cd] bg-[#eff4ff]" />
        <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">{Array.from({ length: 6 }, (_, index) => <article className="rounded border border-[#c5c6cd] bg-white p-5" key={index}><div className="flex items-center gap-4"><Skeleton className="h-14 w-14 rounded-full" /><div className="flex-1"><Skeleton className="h-5 w-44" /><Skeleton className="mt-2 h-3 w-3/4" /></div><Skeleton className="h-10 w-14" /></div><div className="mt-5 flex gap-2"><Skeleton className="h-7 w-20 rounded-full" /><Skeleton className="h-7 w-24 rounded-full" /><Skeleton className="h-7 w-16 rounded-full" /></div></article>)}</section>
        <span className="sr-only">Yetenekler yükleniyor...</span>
      </main>
    </EmployerShell>
  );
}
