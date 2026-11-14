import Image from "next/image";
import { CompanyJobPostingsOverview, EmployerStatistics } from "@/features/employer-dashboard";
import { ROUTES } from "@/shared/config/routes";
import { EmployerShell } from "@/widgets/employer/shell";
import {
  employerProfile,
  funnelStages,
  monthlyBars,
} from "@/entities/employer-dashboard";

function MobileBrand() {
  return (
    <div className="flex items-center gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-4 py-3 md:hidden">
      <Image
        alt='Vettingo logosu'
        className="h-9 w-9 rounded object-cover"
        height={36}
        src={employerProfile.logoUrl}
        width={36}
      />
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
          İşveren Paneli
        </p>
        <h1 className="text-xl font-bold text-[#091426]">Vettingo</h1>
      </div>
    </div>
  );
}

function FunnelMetrics() {
  return (
    <section className="mt-8 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-6">
      <h3 className="mb-6 text-lg font-medium leading-6 text-[#0b1c30]">
        İşe Alım Hunisi Metrikleri
      </h3>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <div className="flex w-full flex-col items-center gap-1 md:w-1/2">
          {funnelStages.map((stage) => (
            <div
              className={`${stage.width} ${stage.className} flex h-10 items-center justify-between rounded px-4`}
              key={stage.label}
            >
              <span className="text-[11px] font-medium uppercase leading-4">
                {stage.label}
              </span>
              <span className="text-sm font-medium leading-5">{stage.value}</span>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex h-32 items-end justify-between gap-2 border-b border-l border-[#c5c6cd] p-4">
            {monthlyBars.map((bar) => (
              <div
                aria-label={`${bar.label} funnel volume`}
                className={`w-1/6 rounded-t-sm transition-colors ${bar.height} ${
                  ("active" in bar && bar.active) ? "bg-[#091426]" : "bg-[#dce9ff] hover:bg-[#bcc7de]"
                }`}
                key={bar.label}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between px-4 text-[11px] font-medium leading-4 text-[#45474c]">
            {monthlyBars.map((bar) => (
              <span className={("active" in bar && bar.active) ? "font-bold text-[#091426]" : ""} key={bar.label}>
                {bar.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export function EmployerDashboardPage() {
  return (
    <EmployerShell>
      <MobileBrand />

      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">

        <EmployerStatistics />

        <CompanyJobPostingsOverview allJobsHref={ROUTES.employerJobs} showRetry={false} />

        <FunnelMetrics />
      </main>

    </EmployerShell>
  );
}
