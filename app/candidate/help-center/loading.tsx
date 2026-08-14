import { CandidateShell } from "@/widgets/candidate/shell";

function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <CandidateShell>
      <main aria-busy="true" aria-label="Yardım merkezi yükleniyor" className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
        <header className="mb-8 border-b border-[#c5c6cd] pb-7"><Skeleton className="h-3 w-36" /><Skeleton className="mt-3 h-9 w-64" /><Skeleton className="mt-3 h-4 w-full max-w-2xl" /></header>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(260px,1fr)]"><section className="rounded border border-[#c5c6cd] bg-white p-6"><Skeleton className="h-6 w-48" /><div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">{Array.from({ length: 5 }, (_, index) => <div className={index === 4 ? "sm:col-span-2" : ""} key={index}><Skeleton className="mb-2 h-3 w-24" /><Skeleton className="h-10 w-full" /></div>)}</div><Skeleton className="mt-6 h-10 w-36" /></section><aside className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-6"><Skeleton className="h-11 w-11" /><Skeleton className="mt-5 h-5 w-32" /><Skeleton className="mt-3 h-4 w-full" /><Skeleton className="mt-2 h-4 w-4/5" /><Skeleton className="mt-8 h-20 w-full" /></aside></div>
        <section className="mt-8 space-y-3"><Skeleton className="mb-5 h-7 w-52" />{Array.from({ length: 4 }, (_, index) => <Skeleton className="h-14 w-full border border-[#c5c6cd] bg-white" key={index} />)}</section>
        <span className="sr-only">Yardım merkezi yükleniyor...</span>
      </main>
    </CandidateShell>
  );
}
