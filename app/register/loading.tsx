function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <main aria-busy="true" aria-label="Kayıt sayfası yükleniyor" className="flex min-h-screen items-center justify-center bg-[#f8f9ff] p-4 lg:p-8" role="status">
      <section className="mx-auto flex min-h-[760px] w-full max-w-[1440px] overflow-hidden rounded-lg border border-[#c5c6cd] bg-white">
        <aside className="hidden w-1/2 flex-col justify-end bg-[#091426] p-8 lg:flex"><Skeleton className="h-10 w-4/5 bg-white/20" /><Skeleton className="mt-4 h-4 w-full bg-white/20" /><Skeleton className="mt-2 h-4 w-3/4 bg-white/20" /></aside>
        <div className="flex w-full flex-col p-6 lg:w-1/2 lg:p-8"><Skeleton className="h-7 w-28" /><Skeleton className="mt-12 h-9 w-52" /><Skeleton className="mt-3 h-4 w-72 max-w-full" /><div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">{Array.from({ length: 6 }, (_, index) => <div className={index > 3 ? "sm:col-span-2" : ""} key={index}><Skeleton className="mb-2 h-3 w-24" /><Skeleton className="h-11 w-full" /></div>)}<Skeleton className="h-12 w-full sm:col-span-2" /></div></div>
      </section>
      <span className="sr-only">Kayıt sayfası yükleniyor...</span>
    </main>
  );
}
