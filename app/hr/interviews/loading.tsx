function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <main aria-busy="true" aria-label="HR mülakatları yükleniyor" className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
      <header className="mb-8 flex items-end justify-between gap-4 border-b border-[#c5c6cd] pb-7"><div><Skeleton className="h-3 w-32" /><Skeleton className="mt-3 h-9 w-56" /><Skeleton className="mt-3 h-4 w-full max-w-2xl" /></div><Skeleton className="h-10 w-36" /></header>
      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <Skeleton className="h-32 border border-[#c5c6cd] bg-white" key={index} />)}</section>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_320px]"><section className="rounded border border-[#c5c6cd] bg-white p-5"><Skeleton className="h-6 w-48" /><div className="mt-5 space-y-4">{Array.from({ length: 6 }, (_, index) => <div className="flex gap-4 border-t border-[#c5c6cd] pt-4" key={index}><Skeleton className="h-10 w-16" /><Skeleton className="h-10 w-10 rounded-full" /><div className="flex-1"><Skeleton className="h-4 w-44" /><Skeleton className="mt-2 h-3 w-3/4" /></div></div>)}</div></section><Skeleton className="h-[420px] border border-[#c5c6cd] bg-white" /></div>
      <span className="sr-only">HR mülakatları yükleniyor...</span>
    </main>
  );
}
