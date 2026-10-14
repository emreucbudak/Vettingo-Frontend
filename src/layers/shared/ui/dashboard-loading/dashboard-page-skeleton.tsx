import type { CSSProperties, ReactNode } from "react";


function SkeletonPage({ children, label, className = "employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8" }: {
  children: ReactNode;
  label: string;
  className?: string;
}) {
  return <main aria-busy="true" aria-label={label + " yükleniyor"} className={className} role="status">
    {children}
    <span className="sr-only">
      {label + " yükleniyor..."}
    </span>
  </main>;
}

function SectionTitle({ action = false }: {
  action?: boolean;
}) {
  return <div className="mb-5 flex items-center justify-between gap-4">
    <Skeleton className="h-7 w-48" />
    {action && <Skeleton className="h-4 w-20" />}
  </div>;
}

function TextLines({ count = 3 }: {
  count?: number;
}) {
  return <div className="space-y-3">
    {Array.from({ length: count }, (_, index) => <Skeleton className={"h-4 " + (index === count - 1 ? "w-3/4" : "w-full")} key={index} />)}
  </div>;
}

function StatCards({ compact = false, dashboard = false, candidate = false }: {
  compact?: boolean;
  dashboard?: boolean;
  candidate?: boolean;
}) {
  const gridClass = compact ? "mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4" : dashboard ? "mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4" : (candidate ? "mb-6" : "mb-8") + " grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4";
  const cardClass = (candidate ? "bg-white" : "bg-[#f8f9ff]") + (dashboard ? " p-6" : compact || candidate ? " p-4" : " p-5");
  return <section className={gridClass}>
    {Array.from({ length: 4 }, (_, index) => <article className={"rounded border border-[#c5c6cd] " + cardClass} key={index}>
      <Skeleton className="h-4 w-28" />
      <Skeleton className={dashboard ? "mt-4 h-10 w-16" : compact ? "mt-3 h-8 w-16" : "mt-3 h-9 w-16"} />
    </article>)}
  </section>;
}

function TableSkeleton({ avatar = false, rows = 5, columns = [4, 2, 2, 2, 2, 2], breakpoint = "lg" }: {
  avatar?: boolean;
  rows?: number;
  columns?: readonly number[];
  breakpoint?: "lg" | "xl";
}) {
  const gridClass = breakpoint === "xl" ? "xl:grid-cols-[var(--skeleton-columns)]" : "lg:grid-cols-[var(--skeleton-columns)]";
  const gridStyle = { "--skeleton-columns": columns.map(width => "minmax(0," + width + "fr)").join(" ") } as CSSProperties;
  return (<section className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
    <div className={"hidden gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-3 " + gridClass + (breakpoint === "xl" ? " xl:grid" : " lg:grid")} style={gridStyle}>
      {columns.map((_, index) => <Skeleton className="h-4 w-20" key={index} />)}
    </div>
    <div className="divide-y divide-[#c5c6cd]">
      {Array.from({ length: rows }, (_, index) => (<div className={"grid grid-cols-1 items-center gap-3 px-5 py-5 lg:px-6 " + gridClass} style={gridStyle} key={index}>
        <div className="flex items-center gap-3">
          {avatar && <Skeleton className="h-11 w-11 shrink-0 rounded-full" />}
          <div className="min-w-0 flex-1">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="mt-2 h-3 w-20" />
          </div>
        </div>
        {columns.slice(1).map((_, cell) => <Skeleton className={cell === columns.length - 2 ? "h-8 w-20" : "h-4 w-24"} key={cell} />)}
      </div>))}
    </div>
  </section>);
}

function FormFields({ count = 4, singleColumn = false }: {
  count?: number;
  singleColumn?: boolean;
}) {
  return <div className={singleColumn ? "space-y-5" : "grid grid-cols-1 gap-5 md:grid-cols-2"}>
    {Array.from({ length: count }, (_, index) => <div key={index}>
      <Skeleton className="mb-2 h-4 w-24" />
      <Skeleton className="h-12 w-full" />
    </div>)}
  </div>;
}

function FormCard({ children, password = false, white = false }: {
  children?: ReactNode;
  password?: boolean;
  white?: boolean;
}) {
  return <section className={"rounded border border-[#c5c6cd] p-5 md:p-6 " + (white ? "bg-white" : "bg-[#f8f9ff]")}>
    <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#c5c6cd] pb-5">
      <Skeleton className="h-6 w-36" />
      <Skeleton className="h-10 w-28" />
    </div>
    {children ?? <FormFields count={password ? 3 : 4} singleColumn={password} />}
  </section>;
}

function HelpCenter({ label, faqCount }: {
  label: string;
  faqCount: number;
}) {
  return <SkeletonPage label={label} className="mx-auto w-full max-w-[1200px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
    <section className="mb-10">
      <SectionTitle />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => <article className="flex min-h-[11.125rem] flex-col justify-center rounded border border-[#c5c6cd] p-5" key={index}>
          <Skeleton className="h-5 w-32" />
          <div className="mt-2">
            <TextLines count={2} />
          </div>
          <Skeleton className="mt-4 h-4 w-36" />
        </article>)}
      </div>
    </section>
    <section>
      <SectionTitle />
      <div className="space-y-3">
        {Array.from({ length: faqCount }, (_, index) => <div className="flex items-center justify-between rounded border border-[#c5c6cd] px-5 py-4 md:px-6" key={index}>
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-5 w-5" />
        </div>)}
      </div>
    </section>
  </SkeletonPage>;
}

function JobsSkeleton() {
  return <SkeletonPage label="İş ilanları">
    <header className="mb-8 flex flex-col gap-5 border-b border-[#c5c6cd] pb-7 lg:flex-row lg:items-end lg:justify-between">
      <Skeleton className="h-10 w-32" />
      <Skeleton className="h-11 w-full sm:w-44" />
    </header>
    <StatCards compact />
    <TableSkeleton />
  </SkeletonPage>;
}

function Skeleton({ className = "" }: {
  className?: string;
}) {
  return <div aria-hidden="true" className={`max-w-full animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none ${className}`} />;
}

export function HrCandidatesSkeleton() {
  return <SkeletonPage label="HR aday havuzu">
    <StatCards />
    <section className="mb-6 rounded border border-[#c5c6cd] bg-[#eff4ff] p-4 md:p-5">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(240px,1fr)_repeat(3,minmax(150px,auto))]">
        {Array.from({ length: 4 }, (_, index) => <Skeleton className="h-10 w-full" key={index} />)}
      </div>
    </section>
    <SectionTitle />
    <TableSkeleton avatar columns={[4, 4, 2, 1, 1]} breakpoint="xl" />
  </SkeletonPage>;
}

export function HrHelpCenterSkeleton() {
  return <HelpCenter label="HR yardım merkezi" faqCount={6} />;
}

export function HrInterviewsSkeleton() {
  return <SkeletonPage label="HR mülakatları">
    <StatCards />
    <section className="mb-8 rounded border border-[#c5c6cd] bg-[#eff4ff] p-4 md:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Skeleton className="h-4 w-32" />
          <Skeleton className="mt-1 h-7 w-40" />
        </div>
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 5 }, (_, index) => <Skeleton className="h-16 w-14" key={index} />)}
        </div>
      </div>
    </section>
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
      <section>
        <SectionTitle />
        <div className="space-y-4">
          {Array.from({ length: 3 }, (_, index) => <article className="flex items-center gap-4 rounded border border-[#c5c6cd] p-5" key={index}>
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-11 w-11 shrink-0 rounded-full" />
            <div className="flex-1">
              <TextLines />
            </div>
            <Skeleton className="h-10 w-24" />
          </article>)}
        </div>
      </section>
      <aside>
        <section className="rounded border border-l-4 border-[#c5c6cd] border-l-[#e0a62b] bg-[#fffaf0] p-5">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="mt-2 h-7 w-48" />
          <div className="mt-2">
            <TextLines count={2} />
          </div>
        </section>
      </aside>
    </div>
  </SkeletonPage>;
}

export function HrJobsSkeleton() {
  return <JobsSkeleton />;
}

export function HrSkeleton() {
  return <SkeletonPage label="HR paneli">
    <StatCards />
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <section className="min-w-0 lg:col-span-2">
        <SectionTitle action />
        <TableSkeleton rows={4} />
      </section>
      <section className="rounded border border-[#c5c6cd] p-5 lg:p-6">
        <SectionTitle action />
        <div className="space-y-4">
          {Array.from({ length: 3 }, (_, index) => <div className="flex items-center gap-3 border-b border-[#c5c6cd] pb-4 last:border-0" key={index}>
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
            <Skeleton className="h-5 w-32" />
          </div>)}
        </div>
      </section>
    </div>
    <section className="mt-8 rounded border border-[#c5c6cd] p-5 md:p-6">
      <SectionTitle action />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
        {Array.from({ length: 5 }, (_, index) => <article className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-4" key={index}>
          <Skeleton className="h-4 w-20" />
          <Skeleton className="mt-3 h-8 w-14" />
        </article>)}
      </div>
    </section>
  </SkeletonPage>;
}

export function HrReportsSkeleton() {
  return <SkeletonPage label="HR raporları">
    <StatCards />
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
      <section className="rounded border border-[#c5c6cd] p-5 md:p-6 xl:col-span-2">
        <SectionTitle />
        <div className="mt-8 flex h-56 items-end gap-3 border-b border-l border-[#c5c6cd] px-3 sm:gap-6 sm:px-6">
          {[35, 55, 40, 70, 60, 85].map((height, index) => <div aria-hidden="true" className="w-full animate-pulse rounded-t bg-[#dce9ff] motion-reduce:animate-none" style={{ height: height + "%" }} key={index} />)}
        </div>
        <div className="mt-3 flex justify-around">
          {Array.from({ length: 6 }, (_, index) => <Skeleton className="h-3 w-8" key={index} />)}
        </div>
      </section>
      <section className="rounded border border-[#c5c6cd] p-5 md:p-6">
        <SectionTitle />
        <Skeleton className="mx-auto mt-4 h-40 w-40 rounded-full" />
        <div className="mt-6 space-y-3">
          {[0, 1].map(index => <div className="flex justify-between" key={index}>
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-10" />
          </div>)}
        </div>
      </section>
    </div>
    <section className="mt-8 rounded border border-[#c5c6cd] p-5 md:p-6">
      <SectionTitle />
      <div className="space-y-3">
        {Array.from({ length: 5 }, (_, index) => <div className="grid grid-cols-[110px_minmax(0,1fr)_56px] items-center gap-3 sm:grid-cols-[150px_minmax(0,1fr)_70px]" key={index}>
          <div>
            <Skeleton className="h-4 w-20" />
            <Skeleton className="mt-1 h-3 w-16" />
          </div>
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-4 w-10" />
        </div>)}
      </div>
    </section>
  </SkeletonPage>;
}

export function HrSettingsSkeleton() {
  return <SkeletonPage label="HR ayarları" className="employer-dashboard-theme mx-auto w-full max-w-[1200px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
      <FormCard />
      <aside>
        <FormCard password />
      </aside>
    </div>
  </SkeletonPage>;
}

export function EmployerApplicationsSkeleton() {
  return <SkeletonPage label="İşveren başvuruları">
    <StatCards compact />
    <TableSkeleton avatar columns={[3, 3, 2, 2, 2, 2]} />
  </SkeletonPage>;
}

export function EmployerApplicationsDetailSkeleton() {
  return (<main aria-busy="true" aria-label="Başvuru detayı yükleniyor" className="candidate-analysis-theme mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
    <header className="mb-6 flex items-center justify-between">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-10 w-32" />
    </header>
    <section className="mb-8 rounded border border-[#c5c6cd] bg-white p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-7 w-56" />
          <Skeleton className="mt-3 h-4 w-72 max-w-full" />
          <div className="mt-4 flex gap-2">
            <Skeleton className="h-7 w-24 rounded-full" />
            <Skeleton className="h-7 w-28 rounded-full" />
          </div>
        </div>
        <Skeleton className="h-20 w-24" />
      </div>
    </section>
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Skeleton className="h-72 border border-[#c5c6cd] bg-white lg:col-span-2" />
      <Skeleton className="h-72 border border-[#c5c6cd] bg-white" />
      <Skeleton className="h-72 border border-[#c5c6cd] bg-white" />
    </div>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Skeleton className="h-72 border border-[#c5c6cd] bg-white" />
      <Skeleton className="h-72 border border-[#c5c6cd] bg-white" />
    </div>
    <span className="sr-only">
      Başvuru detayı yükleniyor...
    </span>
  </main>);
}

export function EmployerHelpCenterSkeleton() {
  return <HelpCenter label="İşveren yardım merkezi" faqCount={8} />;
}

export function EmployerHrAssignmentSkeleton() {
  return <SkeletonPage label="HR atama sayfası">
    <div className="space-y-6">
      <section className="rounded border border-[#c5c6cd] p-5 md:p-6">
        <FormFields />
      </section>
      <section className="flex flex-col gap-5 rounded border border-[#c5c6cd] bg-[#eff4ff] p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
        <div className="flex-1">
          <Skeleton className="h-6 w-64" />
          <Skeleton className="mt-1 h-6 w-full max-w-xl" />
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-11 w-24" />
          <Skeleton className="h-11 w-36" />
        </div>
      </section>
    </div>
  </SkeletonPage>;
}

export function EmployerJobsSkeleton() {
  return <JobsSkeleton />;
}

export function EmployerSkeleton() {
  return <SkeletonPage label="İşveren paneli">
    <StatCards dashboard />
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <section className="min-w-0 lg:col-span-2">
        <SectionTitle action />
        <TableSkeleton rows={4} />
      </section>
      <section className="flex h-full flex-col rounded border border-[#c5c6cd] p-6">
        <SectionTitle />
        <div className="flex-1 space-y-4">
          {Array.from({ length: 3 }, (_, index) => <div className="flex items-start gap-4 border-b border-[#c5c6cd] pb-4 last:border-0" key={index}>
            <Skeleton className="h-10 w-10 shrink-0 rounded-full" />
            <div className="flex-1">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="mt-1 h-4 w-24" />
            </div>
          </div>)}
        </div>
        <Skeleton className="mt-4 h-9 w-full" />
      </section>
    </div>
    <section className="mt-8 rounded border border-[#c5c6cd] p-6">
      <SectionTitle />
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="flex w-full flex-col items-center gap-1 md:w-1/2">
          {[100, 85, 70, 55].map(width => <div aria-hidden="true" className="h-10 animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none" style={{ width: width + "%" }} key={width} />)}
        </div>
        <Skeleton className="h-40 w-full md:w-1/2" />
      </div>
    </section>
  </SkeletonPage>;
}

export function EmployerScoutSkeleton() {
  return <SkeletonPage label="Scout">
    <section className="mb-8 rounded border border-[#c5c6cd] bg-[#eff4ff] p-4 md:p-6">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {[0, 1].map(index => <div key={index}>
          <Skeleton className="mb-2 h-3 w-24" />
          <Skeleton className="h-11 w-full" />
        </div>)}
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_auto_auto] xl:items-end">
        {[0, 1, 2].map(index => <div key={index}>
          <Skeleton className="mb-2 h-3 w-24" />
          <Skeleton className="h-11 w-full" />
        </div>)}
        <Skeleton className="h-11 w-28" />
        <Skeleton className="h-11 w-24" />
      </div>
    </section>
    <div className="mb-5 flex justify-end">
      <Skeleton className="h-4 w-40" />
    </div>
    <TableSkeleton avatar columns={[3, 2, 2, 2, 2, 1, 2]} breakpoint="xl" />
  </SkeletonPage>;
}

export function EmployerSettingsSkeleton() {
  return <SkeletonPage label="İşveren ayarları">
    <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
      <div className="space-y-6">
        <FormCard />
        <FormCard>
          <FormFields />
          <div className="mt-5 space-y-5">
            <div>
              <Skeleton className="mb-2 h-4 w-32" />
              <Skeleton className="h-32 w-full" />
            </div>
            <div>
              <Skeleton className="mb-2 h-4 w-32" />
              <Skeleton className="h-24 w-full" />
            </div>
          </div>
        </FormCard>
      </div>
      <aside>
        <FormCard password />
      </aside>
    </div>
  </SkeletonPage>;
}

export function EmployerTalentsSkeleton() {
  return <SkeletonPage label="Yetenekler">
    <header className="mb-8 border-b border-[#c5c6cd] pb-7">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="mt-2 h-10 w-48" />
      <Skeleton className="mt-2 h-6 w-full max-w-2xl" />
    </header>
    <section className="mb-7 rounded border border-l-4 border-[#c5c6cd] border-l-[#006c49] bg-[#eff4ff] p-5">
      <Skeleton className="h-5 w-48" />
      <Skeleton className="mt-1 h-6 w-full max-w-3xl" />
    </section>
    <TableSkeleton avatar columns={[3, 2, 3, 2, 1, 1]} breakpoint="xl" />
  </SkeletonPage>;
}

export function EmployerTalentsDetailSkeleton() {
  return (<main aria-busy="true" aria-label="Yetenek detayı yükleniyor" className="candidate-analysis-theme mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8" role="status">
    <header className="mb-6 flex items-center justify-between">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-10 w-32" />
    </header>
    <section className="mb-8 rounded border border-[#c5c6cd] bg-white p-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-7 w-56" />
          <Skeleton className="mt-3 h-4 w-72 max-w-full" />
          <div className="mt-4 flex gap-2">
            <Skeleton className="h-7 w-24 rounded-full" />
            <Skeleton className="h-7 w-28 rounded-full" />
          </div>
        </div>
        <Skeleton className="h-20 w-24" />
      </div>
    </section>
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Skeleton className="h-72 border border-[#c5c6cd] bg-white lg:col-span-2" />
      <Skeleton className="h-72 border border-[#c5c6cd] bg-white" />
      <Skeleton className="h-72 border border-[#c5c6cd] bg-white" />
    </div>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Skeleton className="h-72 border border-[#c5c6cd] bg-white" />
      <Skeleton className="h-72 border border-[#c5c6cd] bg-white" />
    </div>
    <span className="sr-only">
      Yetenek detayı yükleniyor...
    </span>
  </main>);
}

export function CandidateApplicationsSkeleton() {
  return <SkeletonPage label="Başvurular" className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8">
    <StatCards candidate />
    <section className="overflow-hidden rounded border border-[#c5c6cd] bg-white">
      <div className="flex justify-between gap-4 border-b border-[#c5c6cd] px-5 py-4">
        <Skeleton className="h-7 w-44" />
        <Skeleton className="h-4 w-24" />
      </div>
      <div className="space-y-3 p-5">
        {Array.from({ length: 4 }, (_, index) => <article className="rounded border border-[#c5c6cd] p-4" key={index}>
          <div className="flex justify-between gap-4">
            <div>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="mt-2 h-4 w-32" />
            </div>
            <Skeleton className="h-7 w-24" />
          </div>
          <Skeleton className="mt-4 h-4 w-48" />
        </article>)}
      </div>
    </section>
  </SkeletonPage>;
}

export function CandidateHelpCenterSkeleton() {
  return <HelpCenter label="Yardım merkezi" faqCount={6} />;
}

export function CandidateJobsSkeleton() {
  return <SkeletonPage label="İş ilanları" className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-8 md:px-8">
    <section className="mb-8">
      <div className="flex flex-col gap-2 rounded border border-[#c5c6cd] p-4 md:flex-row md:gap-4 md:p-6">
        <Skeleton className="h-10 w-full md:flex-1" />
        <Skeleton className="h-10 w-full md:w-1/3" />
        <Skeleton className="h-10 w-full md:w-36" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {Array.from({ length: 4 }, (_, index) => <Skeleton className="h-8 w-32 rounded-full" key={index} />)}
      </div>
    </section>
    <section className="flex flex-col gap-4">
      <div className="mb-2 flex justify-between border-b border-[#c5c6cd] pb-1">
        <Skeleton className="h-7 w-40" />
        <Skeleton className="h-4 w-20" />
      </div>
      {Array.from({ length: 3 }, (_, index) => <article className="rounded border border-[#c5c6cd] p-4" key={index}>
        <div className="mb-2 flex justify-between gap-4">
          <div className="flex gap-4">
            <Skeleton className="h-12 w-12" />
            <div>
              <Skeleton className="h-6 w-48" />
              <Skeleton className="mt-1 h-5 w-32" />
            </div>
          </div>
          <Skeleton className="h-4 w-20" />
        </div>
        <TextLines count={2} />
        <div className="mt-4 flex flex-wrap gap-2">
          {[0, 1, 2].map(tag => <Skeleton className="h-6 w-24 rounded-full" key={tag} />)}
        </div>
      </article>)}
    </section>
  </SkeletonPage>;
}

export function CandidateSkeleton() {
  return <SkeletonPage label="Aday paneli" className="mx-auto w-full max-w-[1440px] flex-1 overflow-x-hidden p-4 md:p-8">
    <div className="mb-8">
      <Skeleton className="h-10 w-80" />
      <Skeleton className="mt-2 h-6 w-full max-w-xl" />
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
      <div className="space-y-6 md:col-span-8">
        <section>
          <SectionTitle action />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[0, 1].map(index => <article className="rounded border border-[#c5c6cd] bg-white p-4" key={index}>
              <Skeleton className="h-6 w-40" />
              <Skeleton className="mt-2 h-4 w-28" />
              <Skeleton className="mt-4 h-7 w-24" />
              <Skeleton className="mt-4 h-4 w-32" />
            </article>)}
          </div>
        </section>
        <section>
          <SectionTitle action />
          <div className="overflow-hidden rounded border border-[#c5c6cd] bg-white">
            {[0, 1].map(index => <div className="flex justify-between gap-4 border-b border-[#c5c6cd] p-4 last:border-0" key={index}>
              <div>
                <Skeleton className="h-7 w-48" />
                <Skeleton className="mt-1 h-5 w-28" />
              </div>
              <Skeleton className="h-4 w-24" />
            </div>)}
          </div>
        </section>
      </div>
      <div className="space-y-6 md:col-span-4">
        <section>
          <SectionTitle />
          <div className="space-y-4">
            {[0, 1].map(index => <article className="rounded border border-[#c5c6cd] bg-white p-4" key={index}>
              <Skeleton className="h-5 w-40" />
              <Skeleton className="mt-3 h-4 w-32" />
              <Skeleton className="mt-4 h-9 w-full" />
            </article>)}
          </div>
        </section>
        <section>
          <SectionTitle />
          <div className="grid grid-cols-2 gap-4 rounded border border-[#c5c6cd] bg-white p-4">
            {Array.from({ length: 4 }, (_, index) => <div className="rounded bg-[#f8f9ff] p-3" key={index}>
              <Skeleton className="h-4 w-24" />
              <Skeleton className="mt-2 h-8 w-12" />
            </div>)}
          </div>
        </section>
      </div>
    </div>
  </SkeletonPage>;
}

export function CandidateMycandidateSkeleton() {
  return <SkeletonPage label="Yapay zeka analizi" className="mx-auto w-full max-w-[1440px] flex-1 px-4 pb-4 pt-3 md:px-8 md:pb-8 md:pt-6">
    <header className="mb-6 flex flex-col gap-5 border-b border-[#c5c6cd] pb-6 lg:flex-row lg:items-end lg:justify-between">
      <Skeleton className="h-10 w-72" />
      <Skeleton className="h-10 w-36" />
    </header>
    <section className="mb-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(280px,380px)_minmax(0,1fr)] lg:gap-12">
      <Skeleton className="mx-auto aspect-[380/590] w-full max-w-[380px] rounded-[48px]" />
      <section className="h-full rounded-xl border border-[#c5c6cd] bg-white p-5 md:p-8">
        <SectionTitle />
        <Skeleton className="mx-auto h-64 w-64 rounded-full" />
        <div className="mt-6 space-y-4">
          {Array.from({ length: 6 }, (_, index) => <div className="flex items-center gap-4" key={index}>
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 flex-1 rounded-full" />
            <Skeleton className="h-4 w-10" />
          </div>)}
        </div>
      </section>
    </section>
    <section className="rounded-lg border border-[#c5c6cd] bg-white p-5 md:p-6">
      <div className="mb-5 border-b border-[#c5c6cd] pb-4">
        <Skeleton className="h-7 w-40" />
      </div>
      <TextLines />
      <div className="grid grid-cols-1 gap-4 pt-6 md:grid-cols-2">
        {[0, 1].map(index => <div className="rounded border border-[#c5c6cd] p-4" key={index}>
          <Skeleton className="mb-4 h-5 w-36" />
          <TextLines />
        </div>)}
      </div>
    </section>
    <section className="mt-6 rounded-lg border border-[#c5c6cd] bg-white p-5 md:p-6">
      <Skeleton className="h-7 w-48" />
      <div className="mt-6 divide-y divide-[#c5c6cd] border-y border-[#c5c6cd]">
        {Array.from({ length: 3 }, (_, index) => <div className="flex min-h-16 justify-between py-5" key={index}>
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-5 w-16" />
        </div>)}
      </div>
    </section>
    <section className="mt-6">
      <SectionTitle />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {Array.from({ length: 3 }, (_, index) => <article className="rounded-lg border border-[#c5c6cd] bg-white p-5" key={index}>
          <Skeleton className="h-10 w-10" />
          <Skeleton className="mt-5 h-7 w-40" />
          <div className="mt-3">
            <TextLines />
          </div>
        </article>)}
      </div>
    </section>
  </SkeletonPage>;
}

export function CandidateSettingsSkeleton() {
  return <SkeletonPage label="Aday ayarları" className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8">
    <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
      <FormCard white />
      <aside>
        <FormCard white password />
      </aside>
    </div>
  </SkeletonPage>;
}

export function CandidateCvSkeleton() {
  return <SkeletonPage label="CV" className="w-full flex-1">
    <div className="flex gap-4">
      <section className="flex-1 space-y-2 p-2 xl:p-8">
        {Array.from({ length: 6 }, (_, index) => <div className="flex items-center justify-between rounded-md bg-slate-200 p-3" key={index}>
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-6 w-6" />
        </div>)}
      </section>
      <section className="w-1/2 p-4">
        <div className="mt-2 h-[650px] rounded-md border border-slate-200 bg-white p-6">
          <Skeleton className="mx-auto h-12 w-64" />
          <div className="mt-8 space-y-8">
            {Array.from({ length: 4 }, (_, index) => <div key={index}>
              <Skeleton className="mx-auto mb-4 h-5 w-28" />
              <TextLines />
            </div>)}
          </div>
        </div>
      </section>
    </div>
  </SkeletonPage>;
}

export function EmployerCompanySkeleton() {
  return <SkeletonPage label="Şirket profili">
    <section className="overflow-hidden rounded border border-[#c5c6cd]">
      <header className="flex flex-col items-start gap-6 border-b border-[#c5c6cd] bg-[#eff4ff] p-6 md:flex-row md:items-center md:p-8">
        <Skeleton className="h-32 w-32 shrink-0 rounded-full" />
        <div>
          <Skeleton className="mb-3 h-4 w-32" />
          <Skeleton className="h-10 w-48" />
          <Skeleton className="mt-3 h-5 w-32" />
        </div>
      </header>
      <div className="p-6 md:p-8">
        <SectionTitle />
        <div className="grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2">
          {Array.from({ length: 4 }, (_, index) => <div className="flex gap-4" key={index}>
            <Skeleton className="h-11 w-11" />
            <div className="flex-1">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="mt-2 h-6 w-40" />
            </div>
          </div>)}
        </div>
        <section className="mt-8 border-t border-[#c5c6cd] pt-7">
          <SectionTitle />
          <TextLines />
        </section>
      </div>
    </section>
  </SkeletonPage>;
}

export function JobEditSkeleton() {
  return <SkeletonPage label="İlan düzenleme">
    <Skeleton className="mb-6 h-5 w-32" />
    <header className="mb-7 border-b border-[#c5c6cd] pb-6">
      <Skeleton className="mb-2 h-4 w-28" />
      <Skeleton className="h-10 w-64" />
    </header>
    <div className="space-y-6">
      <section className="rounded-xl border border-[#c5c6cd] bg-white p-5 md:p-6">
        <Skeleton className="mb-4 h-7 w-36" />
        <Skeleton className="h-64 w-full" />
      </section>
      <section className="rounded-xl border border-[#c5c6cd] bg-white p-5 md:p-6">
        <SectionTitle action />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }, (_, index) => <Skeleton className="h-16 w-full" key={index} />)}
        </div>
      </section>
    </div>
  </SkeletonPage>;
}

export function NewJobSkeleton() {
  return <SkeletonPage label="Yeni iş ilanı sayfası">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
      <section className="space-y-6 lg:col-span-8">
        <div>
          <Skeleton className="h-10 w-72" />
          <Skeleton className="mt-2 h-6 w-full max-w-xl" />
        </div>
        <div className="flex gap-3">
          {[0, 1, 2].map(step => <Skeleton className="h-8 w-28" key={step} />)}
        </div>
        <section className="rounded-lg border border-[#c5c6cd] bg-white p-6">
          <SectionTitle />
          <FormFields count={3} singleColumn />
        </section>
        <section className="rounded-lg border border-[#c5c6cd] bg-white p-6">
          <SectionTitle />
          <Skeleton className="h-32 w-full" />
        </section>
        <div className="flex justify-end">
          <Skeleton className="h-11 w-32" />
        </div>
      </section>
      <aside className="lg:col-span-4">
        <Skeleton className="h-[420px] w-full" />
      </aside>
    </div>
  </SkeletonPage>;
}

const skeletons = [
  { route: "/employer/jobs/[id]/post", component: JobEditSkeleton },
  { route: "/hr/jobs/[id]/post", component: JobEditSkeleton },
  { route: "/hr/jobs/new", component: NewJobSkeleton },
  { route: "/jobs/new", component: NewJobSkeleton },
  { route: "/candidate/cv", component: CandidateCvSkeleton },
  { route: "/employer/company", component: EmployerCompanySkeleton },
  { route: "/employer/applications/[id]", component: EmployerApplicationsDetailSkeleton },
  { route: "/employer/hr-assignment", component: EmployerHrAssignmentSkeleton },
  { route: "/candidate/applications", component: CandidateApplicationsSkeleton },
  { route: "/employer/applications", component: EmployerApplicationsSkeleton },
  { route: "/employer/talents/[id]", component: EmployerTalentsDetailSkeleton },
  { route: "/candidate/help-center", component: CandidateHelpCenterSkeleton },
  { route: "/candidate/mycandidate", component: CandidateMycandidateSkeleton },
  { route: "/employer/help-center", component: EmployerHelpCenterSkeleton },
  { route: "/candidate/settings", component: CandidateSettingsSkeleton },
  { route: "/employer/settings", component: EmployerSettingsSkeleton },
  { route: "/employer/talents", component: EmployerTalentsSkeleton },
  { route: "/hr/help-center", component: HrHelpCenterSkeleton },
  { route: "/employer/scout", component: EmployerScoutSkeleton },
  { route: "/candidate/jobs", component: CandidateJobsSkeleton },
  { route: "/hr/candidates", component: HrCandidatesSkeleton },
  { route: "/hr/interviews", component: HrInterviewsSkeleton },
  { route: "/employer/jobs", component: EmployerJobsSkeleton },
  { route: "/hr/settings", component: HrSettingsSkeleton },
  { route: "/hr/reports", component: HrReportsSkeleton },
  { route: "/candidate", component: CandidateSkeleton },
  { route: "/employer", component: EmployerSkeleton },
  { route: "/hr/jobs", component: HrJobsSkeleton },
  { route: "/hr/scout", component: EmployerScoutSkeleton },
  { route: "/hr", component: HrSkeleton },
];

export function DashboardPageSkeleton({ pathname }: {
  pathname: string;
}) {
  const match = skeletons.find(({ route }) => {
    const pattern = route.split("/");
    const segments = pathname.split("/");
    return pattern.every((segment, index) => segment === "[id]" ? Boolean(segments[index]) : segment === segments[index]);
  });
  const PageSkeleton = match?.component ?? EmployerSkeleton;
  return <PageSkeleton />;
}
