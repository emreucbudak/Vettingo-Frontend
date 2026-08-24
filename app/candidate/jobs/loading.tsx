import { CandidateShell } from "@/widgets/candidate/shell";

function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <CandidateShell>
      <main aria-busy="true" aria-label="İş ilanları yükleniyor" className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-8 md:px-8" role="status">
        <header className="mb-8"><Skeleton className="h-9 w-64" /><Skeleton className="mt-3 h-4 w-full max-w-2xl" /></header>
        <section className="mb-6 rounded border border-[#c5c6cd] bg-white p-5"><div className="grid grid-cols-1 gap-3 md:grid-cols-4"><Skeleton className="h-10 md:col-span-2" /><Skeleton className="h-10" /><Skeleton className="h-10" /></div><div className="mt-4 flex flex-wrap gap-2">{Array.from({ length: 5 }, (_, index) => <Skeleton className="h-7 w-24 rounded-full" key={index} />)}</div></section>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_300px]"><section className="overflow-hidden rounded border border-[#c5c6cd] bg-white"><div className="border-b border-[#c5c6cd] p-5"><Skeleton className="h-5 w-44" /></div><div className="divide-y divide-[#c5c6cd]">{Array.from({ length: 5 }, (_, index) => <div className="p-5" key={index}><Skeleton className="h-5 w-56 max-w-full" /><Skeleton className="mt-3 h-4 w-4/5" /><div className="mt-4 flex gap-2"><Skeleton className="h-7 w-20 rounded-full" /><Skeleton className="h-7 w-24 rounded-full" /></div></div>)}</div></section><aside className="space-y-4 rounded border border-[#c5c6cd] bg-white p-5"><Skeleton className="h-5 w-40" /><Skeleton className="h-28 w-full" /><Skeleton className="h-3 w-full" /><Skeleton className="h-24 w-full" /></aside></div>
        <span className="sr-only">İş ilanları yükleniyor...</span>
      </main>
    </CandidateShell>
  );
}
