import { EmployerShell } from "@/widgets/employer/shell";

function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <EmployerShell>
      <main aria-busy="true" aria-label="İşveren ayarları yükleniyor" className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
        <header className="mb-8 border-b border-[#c5c6cd] pb-7"><Skeleton className="h-3 w-32" /><Skeleton className="mt-3 h-9 w-56" /></header>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]"><div className="space-y-6"><section className="rounded border border-[#c5c6cd] bg-white p-6"><Skeleton className="h-6 w-48" /><div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">{Array.from({ length: 7 }, (_, index) => <div className={index === 6 ? "sm:col-span-2" : ""} key={index}><Skeleton className="mb-2 h-3 w-24" /><Skeleton className="h-10 w-full" /></div>)}</div><Skeleton className="mt-6 h-10 w-36" /></section><Skeleton className="h-52 border border-[#c5c6cd] bg-white" /></div><aside className="space-y-6"><section className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-6"><Skeleton className="h-14 w-14" /><Skeleton className="mt-5 h-5 w-40" /><Skeleton className="mt-3 h-4 w-full" /><Skeleton className="mt-7 h-2 w-full rounded-full" /></section><Skeleton className="h-56 border border-[#c5c6cd] bg-white" /></aside></div>
        <span className="sr-only">İşveren ayarları yükleniyor...</span>
      </main>
    </EmployerShell>
  );
}
