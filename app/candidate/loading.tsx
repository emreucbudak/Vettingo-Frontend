import { CandidateShell } from "@/widgets/candidate/shell";

function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <CandidateShell>
      <main aria-busy="true" aria-label="Aday paneli yükleniyor" className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
        <header className="mb-8 flex items-end justify-between gap-4"><div className="w-full max-w-2xl"><Skeleton className="h-9 w-80 max-w-full" /><Skeleton className="mt-3 h-4 w-full" /></div><Skeleton className="h-10 w-36" /></header>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12"><div className="space-y-6 md:col-span-8"><section className="rounded border border-[#c5c6cd] bg-white p-5"><Skeleton className="h-6 w-52" /><div className="mt-5 space-y-4">{Array.from({ length: 4 }, (_, index) => <div className="flex items-center gap-4 border-t border-[#c5c6cd] pt-4" key={index}><Skeleton className="h-10 w-10 rounded-full" /><div className="flex-1"><Skeleton className="h-4 w-48" /><Skeleton className="mt-2 h-3 w-3/4" /></div></div>)}</div></section><Skeleton className="h-56 border border-[#c5c6cd] bg-white" /></div><div className="space-y-6 md:col-span-4"><Skeleton className="h-64 border border-[#c5c6cd] bg-white" /><Skeleton className="h-56 border border-[#c5c6cd] bg-white" /></div></div>
        <span className="sr-only">Aday paneli yükleniyor...</span>
      </main>
    </CandidateShell>
  );
}
