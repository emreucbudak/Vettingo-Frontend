function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Yeni iş ilanı sayfası yükleniyor" className="min-h-screen bg-[#f8f9ff]" role="status">
      <header className="flex h-16 items-center justify-between border-b border-[#c5c6cd] bg-white px-4 md:px-6"><Skeleton className="h-7 w-28" /><div className="flex gap-3"><Skeleton className="h-8 w-8 rounded-full" /><Skeleton className="h-8 w-8 rounded-full" /></div></header>
      <main className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-8 p-4 md:p-8 lg:grid-cols-12"><section className="space-y-6 lg:col-span-8"><div><Skeleton className="h-4 w-36" /><Skeleton className="mt-3 h-9 w-72 max-w-full" /><Skeleton className="mt-3 h-4 w-full max-w-xl" /></div><div className="flex gap-3">{Array.from({ length: 3 }, (_, index) => <Skeleton className="h-7 w-28" key={index} />)}</div><section className="rounded-lg border border-[#c5c6cd] bg-white p-6"><Skeleton className="mb-6 h-6 w-40" /><div className="grid grid-cols-1 gap-5 sm:grid-cols-2">{Array.from({ length: 5 }, (_, index) => <div className={index === 4 ? "sm:col-span-2" : ""} key={index}><Skeleton className="mb-2 h-3 w-24" /><Skeleton className="h-10 w-full" /></div>)}</div></section><Skeleton className="h-44 border border-[#c5c6cd] bg-white" /></section><aside className="hidden lg:col-span-4 lg:block"><Skeleton className="h-[420px] border border-[#c5c6cd] bg-white" /></aside></main>
      <span className="sr-only">Yeni iş ilanı sayfası yükleniyor...</span>
    </div>
  );
}
