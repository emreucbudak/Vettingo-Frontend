function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`}
    />
  );
}

export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-label="Plan seçim sayfası yükleniyor"
      className="min-h-screen bg-[#f8f9ff] px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
      role="status"
    >
      <section className="mx-auto w-full max-w-[1180px]">
        <Skeleton className="mx-auto h-12 w-52" />
        <Skeleton className="mx-auto mt-8 h-12 w-full max-w-[380px] rounded-full" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              className="min-h-[420px] rounded-[28px] border-2 border-[#e3e5e9] bg-white p-7"
              key={index}
            >
              <Skeleton className="h-8 w-24" />
              <Skeleton className="mt-3 h-4 w-4/5" />
              <Skeleton className="mt-8 h-10 w-36" />
              <div className="mt-8 space-y-4">
                {Array.from({ length: 4 }, (_, featureIndex) => (
                  <Skeleton className="h-4 w-full" key={featureIndex} />
                ))}
              </div>
              <Skeleton className="mt-10 h-12 w-full rounded-xl" />
            </div>
          ))}
        </div>
      </section>
      <span className="sr-only">Plan seçim sayfası yükleniyor...</span>
    </main>
  );
}
