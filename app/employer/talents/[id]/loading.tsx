import { EmployerShell } from "@/widgets/employer/shell";

function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <EmployerShell>
      <main aria-busy="true" aria-label="Yetenek detayı yükleniyor" className="candidate-analysis-theme mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
        <header className="mb-6 flex items-center justify-between"><Skeleton className="h-4 w-40" /><Skeleton className="h-10 w-32" /></header>
        <section className="mb-8 rounded border border-[#c5c6cd] bg-white p-6"><div className="flex flex-col gap-5 sm:flex-row sm:items-center"><Skeleton className="h-20 w-20 rounded-full" /><div className="flex-1"><Skeleton className="h-7 w-56" /><Skeleton className="mt-3 h-4 w-72 max-w-full" /><div className="mt-4 flex gap-2"><Skeleton className="h-7 w-24 rounded-full" /><Skeleton className="h-7 w-28 rounded-full" /></div></div><Skeleton className="h-20 w-24" /></div></section>
        <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <Skeleton className="h-56 border border-[#c5c6cd] bg-white" key={index} />)}</div><div className="grid grid-cols-1 gap-6 lg:grid-cols-2"><Skeleton className="h-72 border border-[#c5c6cd] bg-white" /><Skeleton className="h-72 border border-[#c5c6cd] bg-white" /></div>
        <span className="sr-only">Yetenek detayı yükleniyor...</span>
      </main>
    </EmployerShell>
  );
}
