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
        aria-label="HR atama sayfası yükleniyor"
        className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8"
        role="status"
      >
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
          <div className="space-y-6">
            {[4, 2].map((fieldCount) => (
              <section className="rounded border border-[#c5c6cd] bg-white p-6" key={fieldCount}>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {Array.from({ length: fieldCount }, (_, index) => (
                    <div key={index}>
                      <Skeleton className="mb-2 h-3 w-24" />
                      <Skeleton className="h-11 w-full" />
                    </div>
                  ))}
                </div>
              </section>
            ))}
            <Skeleton className="h-32 border border-[#c5c6cd] bg-[#eff4ff]" />
          </div>
          <aside className="space-y-6">
            <Skeleton className="h-72 border border-[#c5c6cd] bg-[#eff4ff]" />
          </aside>
        </div>
        <span className="sr-only">HR atama sayfası yükleniyor...</span>
      </main>
    </EmployerShell>
  );
}
