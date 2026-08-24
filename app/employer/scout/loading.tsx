import { EmployerShell } from "@/widgets/employer/shell";

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
    <EmployerShell>
      <main
        aria-busy="true"
        aria-label="Scout yükleniyor"
        className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8"
        role="status"
      >
        <section className="mb-8 rounded border border-[#c5c6cd] bg-[#eff4ff] p-4 md:p-6">
          <Skeleton className="h-6 w-40" />
          <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-2">
            <Skeleton className="h-16 bg-[#f8f9ff]" />
            <Skeleton className="h-16 bg-[#f8f9ff]" />
          </div>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {Array.from({ length: 5 }, (_, index) => (
              <Skeleton className="h-16 bg-[#f8f9ff]" key={index} />
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-center justify-between">
            <Skeleton className="h-7 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="overflow-hidden rounded border border-[#c5c6cd]">
            {Array.from({ length: 5 }, (_, index) => (
              <div
                className="flex items-center gap-4 border-b border-[#c5c6cd] p-5 last:border-b-0"
                key={index}
              >
                <Skeleton className="h-10 w-10 rounded-full" />
                <Skeleton className="h-5 flex-1" />
                <Skeleton className="h-9 w-24" />
              </div>
            ))}
          </div>
        </section>

        <span className="sr-only">Scout yükleniyor...</span>
      </main>
    </EmployerShell>
  );
}
