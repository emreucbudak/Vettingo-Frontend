function Skeleton({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Sınav bilgileri yükleniyor" className="min-h-screen bg-[#f8f9ff] px-4 py-8 md:px-8 md:py-12" role="status">
      <main className="mx-auto w-full max-w-[1056px]">
        <section className="overflow-hidden rounded-lg border border-[#c5c6cd] bg-white">
          <header className="bg-[#091426] px-6 py-8 sm:px-10 sm:py-10">
            <Skeleton className="h-10 w-96 max-w-full bg-white/20" />
          </header>
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_320px]">
            <div className="flex flex-col gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:mt-auto">
                {Array.from({ length: 4 }, (_, index) => (
                  <Skeleton className="h-[90px] border border-[#c5c6cd] bg-[#f8f9ff]" key={index} />
                ))}
              </div>
            </div>
            <Skeleton className="h-[430px] border border-[#c5c6cd] bg-[#f8f9ff]" />
          </div>
        </section>
      </main>
      <span className="sr-only">Sınav bilgileri yükleniyor...</span>
    </div>
  );
}
