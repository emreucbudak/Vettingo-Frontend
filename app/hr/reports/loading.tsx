function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <main aria-busy="true" aria-label="HR raporları yükleniyor" className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
      <header className="mb-8 flex items-end justify-between gap-4 border-b border-[#c5c6cd] pb-7"><div><Skeleton className="h-3 w-32" /><Skeleton className="mt-3 h-9 w-56" /><Skeleton className="mt-3 h-4 w-full max-w-2xl" /></div><Skeleton className="h-10 w-36" /></header>
      <section className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <Skeleton className="h-32 border border-[#c5c6cd] bg-white" key={index} />)}</section>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3"><Skeleton className="h-72 border border-[#c5c6cd] bg-white xl:col-span-2" /><Skeleton className="h-72 border border-[#c5c6cd] bg-white" /></div><div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2"><Skeleton className="h-64 border border-[#c5c6cd] bg-white" /><Skeleton className="h-64 border border-[#c5c6cd] bg-white" /></div>
      <span className="sr-only">HR raporları yükleniyor...</span>
    </main>
  );
}
