function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <div aria-busy="true" aria-label="CV yükleme sayfası yükleniyor" className="min-h-screen bg-[#f8f9ff]" role="status">
      <header className="flex h-16 items-center justify-between border-b border-[#c5c6cd] bg-white px-4 md:px-6"><Skeleton className="h-7 w-28" /><Skeleton className="h-8 w-8 rounded-full" /></header>
      <main className="mx-auto w-full max-w-4xl px-4 pb-24 pt-8 md:px-8"><div className="mb-10 flex items-center justify-center gap-3"><Skeleton className="h-8 w-8 rounded-full" /><Skeleton className="h-1 w-40" /><Skeleton className="h-8 w-8 rounded-full" /></div><section className="rounded-lg border border-[#c5c6cd] bg-white p-6 md:p-10"><Skeleton className="mx-auto h-9 w-72 max-w-full" /><Skeleton className="mx-auto mt-3 h-4 w-96 max-w-full" /><div className="mt-8 flex h-64 flex-col items-center justify-center rounded border-2 border-dashed border-[#c5c6cd] bg-[#f8f9ff]"><Skeleton className="h-14 w-14 rounded-full" /><Skeleton className="mt-5 h-5 w-48" /><Skeleton className="mt-3 h-4 w-64 max-w-[80%]" /></div><Skeleton className="ml-auto mt-6 h-11 w-36" /></section></main>
      <span className="sr-only">CV yükleme sayfası yükleniyor...</span>
    </div>
  );
}
