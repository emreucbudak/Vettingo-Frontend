function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Değerlendirme oturumu yükleniyor" className="flex min-h-screen flex-col bg-[#f8f9ff]" role="status">
      <header className="flex h-16 items-center justify-between border-b border-[#c5c6cd] bg-white px-4 md:px-8"><Skeleton className="h-6 w-32" /><Skeleton className="h-9 w-28" /></header>
      <div className="flex min-h-[calc(100dvh-4rem)] items-center px-4 py-6 md:px-8">
        <div className="mx-auto flex w-full max-w-[1056px] flex-col gap-8 lg:flex-row lg:items-start">
          <main className="flex min-w-0 flex-1 flex-col gap-6"><section className="rounded border border-[#c5c6cd] bg-white p-6 md:p-8"><Skeleton className="h-3 w-24" /><Skeleton className="mt-5 h-6 w-full" /><Skeleton className="mt-2 h-6 w-4/5" /><div className="mt-8 space-y-3">{Array.from({ length: 4 }, (_, index) => <Skeleton className="h-14 w-full border border-[#c5c6cd] bg-[#f8f9ff]" key={index} />)}</div></section><div className="flex justify-between"><Skeleton className="h-10 w-24" /><Skeleton className="h-10 w-32" /></div></main>
          <aside className="w-full rounded border border-[#c5c6cd] bg-white p-5 lg:w-64"><Skeleton className="h-5 w-32" /><div className="mt-5 grid grid-cols-6 gap-2 lg:grid-cols-5">{Array.from({ length: 20 }, (_, index) => <Skeleton className="h-8 w-8" key={index} />)}</div></aside>
        </div>
      </div>
      <span className="sr-only">Değerlendirme oturumu yükleniyor...</span>
    </div>
  );
}
