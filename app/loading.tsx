function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Ana sayfa yükleniyor" className="min-h-screen bg-[#f8f9ff]" role="status">
      <header className="h-16 border-b border-[#c5c6cd] bg-white"><div className="mx-auto flex h-full max-w-[1440px] items-center px-6"><Skeleton className="h-7 w-28" /></div></header>
      <main>
        <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-6 py-24 md:grid-cols-2">
          <div><Skeleton className="h-10 w-full max-w-xl" /><Skeleton className="mt-3 h-10 w-4/5 max-w-lg" /><Skeleton className="mt-7 h-4 w-full max-w-xl" /><Skeleton className="mt-2 h-4 w-3/4 max-w-lg" /><Skeleton className="mt-8 h-12 w-44" /></div>
          <div className="grid h-[400px] grid-cols-3 gap-3"><Skeleton className="mb-8" /><Skeleton className="mt-8" /><Skeleton className="mb-8" /></div>
        </section>
        <section className="border-y border-[#c5c6cd] bg-[#eff4ff] px-6 py-8"><Skeleton className="mx-auto h-3 w-72 max-w-full" /><div className="mx-auto mt-6 flex max-w-4xl justify-center gap-6 overflow-hidden">{Array.from({ length: 5 }, (_, index) => <Skeleton className="h-14 w-36 shrink-0 bg-white" key={index} />)}</div></section>
      </main>
      <span className="sr-only">Ana sayfa yükleniyor...</span>
    </div>
  );
}
