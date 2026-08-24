import { CandidateShell } from "@/widgets/candidate/shell";

function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <CandidateShell>
      <main aria-busy="true" aria-label="Yardım merkezi yükleniyor" className="mx-auto w-full max-w-[1200px] flex-1 p-4 md:p-8" role="status">
        <section><Skeleton className="h-7 w-80 max-w-full" /><div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <Skeleton className="h-40 border border-[#c5c6cd] bg-white" key={index} />)}</div></section>
        <section className="mt-10 space-y-3"><Skeleton className="mb-5 h-7 w-52" />{Array.from({ length: 6 }, (_, index) => <Skeleton className="h-14 w-full border border-[#c5c6cd] bg-white" key={index} />)}</section>
        <span className="sr-only">Yardım merkezi yükleniyor...</span>
      </main>
    </CandidateShell>
  );
}
