function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <main aria-busy="true" aria-label="İş ilanları yükleniyor" className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
      <header className="mb-8 flex flex-col justify-between gap-4 border-b border-[#c5c6cd] pb-7 sm:flex-row sm:items-end">
        <Skeleton className="h-9 w-56" />
        <Skeleton className="h-10 w-36" />
      </header>
      <section className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => <Skeleton className="h-24 border border-[#c5c6cd]" key={index} />)}
      </section>
      <section className="overflow-hidden rounded border border-[#c5c6cd]">
        <div className="border-b border-[#c5c6cd] p-5"><Skeleton className="h-5 w-44" /></div>
        <div className="divide-y divide-[#c5c6cd]">
          {Array.from({ length: 6 }, (_, index) => (
            <div className="flex items-center gap-4 p-5" key={index}>
              <div className="flex-1"><Skeleton className="h-5 w-56 max-w-full" /></div>
              <Skeleton className="h-7 w-20" />
              <Skeleton className="h-8 w-8" />
            </div>
          ))}
        </div>
      </section>
      <span className="sr-only">İş ilanları yükleniyor...</span>
    </main>
  );
}
