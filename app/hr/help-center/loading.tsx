function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <main aria-busy="true" aria-label="HR yardım merkezi yükleniyor" className="employer-dashboard-theme mx-auto w-full max-w-[1200px] flex-1 p-4 md:p-8" role="status">
      <header className="mb-8 flex items-end justify-between gap-4 border-b border-[#c5c6cd] pb-7"><div><Skeleton className="h-3 w-32" /><Skeleton className="mt-3 h-9 w-64" /><Skeleton className="mt-3 h-4 w-full max-w-2xl" /></div><Skeleton className="h-10 w-32" /></header>
      <section><Skeleton className="h-6 w-80 max-w-full" /><div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <Skeleton className="h-48 border border-[#c5c6cd] bg-white" key={index} />)}</div></section>
      <section className="mt-10 space-y-3"><Skeleton className="mb-5 h-7 w-52" />{Array.from({ length: 5 }, (_, index) => <Skeleton className="h-14 w-full border border-[#c5c6cd] bg-white" key={index} />)}</section>
      <span className="sr-only">HR yardım merkezi yükleniyor...</span>
    </main>
  );
}
