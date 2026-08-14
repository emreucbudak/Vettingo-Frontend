import { CandidateShell } from "@/widgets/candidate/shell";

function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <CandidateShell>
      <main aria-busy="true" aria-label="Başvurular yükleniyor" className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
        <header className="mb-8 border-b border-[#c5c6cd] pb-7"><Skeleton className="h-3 w-32" /><Skeleton className="mt-3 h-9 w-64" /><Skeleton className="mt-3 h-4 w-full max-w-2xl" /></header>
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <article className="rounded border border-[#c5c6cd] bg-white p-4" key={index}><Skeleton className="h-3 w-24" /><Skeleton className="mt-4 h-8 w-16" /><Skeleton className="mt-3 h-3 w-32" /></article>)}</section>
        <section className="overflow-hidden rounded border border-[#c5c6cd] bg-white"><div className="border-b border-[#c5c6cd] px-5 py-4"><Skeleton className="h-5 w-44" /><Skeleton className="mt-2 h-3 w-64" /></div><div className="divide-y divide-[#c5c6cd]">{Array.from({ length: 6 }, (_, index) => <div className="flex items-center gap-4 px-5 py-5" key={index}><Skeleton className="h-10 w-10 rounded-full" /><div className="flex-1"><Skeleton className="h-4 w-48" /><Skeleton className="mt-2 h-3 w-3/4" /></div><Skeleton className="hidden h-7 w-20 sm:block" /></div>)}</div></section>
        <span className="sr-only">Başvurular yükleniyor...</span>
      </main>
    </CandidateShell>
  );
}
