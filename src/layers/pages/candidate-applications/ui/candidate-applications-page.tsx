"use client";
import { useCandidateDashboardData } from "@/features/candidate-dashboard";
import { CandidateApplicationHistory } from "@/widgets/candidate/application-history";
import { CandidateShell } from "@/widgets/candidate/shell";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { useUserInformation } from "@/shared/useUserInformation";

function StatCard({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: number;
}) {
  return (
    <article className="rounded border border-[#c5c6cd] bg-white p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
            {label}
          </p>
          <p className="mt-2 text-3xl font-semibold tracking-[-0.02em] text-[#0b1c30]">
            {value}
          </p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded bg-[#eff4ff] text-[#091426]">
          <MaterialIcon className="text-[26px]">{icon}</MaterialIcon>
        </div>
      </div>
    </article>
  );
}

export function CandidateApplicationsPage() {
  const user = useUserInformation();
  const { applications, error, isLoading } = useCandidateDashboardData(
    user?.Sub ?? "",
  );
  const inProgress = applications.filter(
    (application) => application.progress < 100,
  ).length;
  const interviews = applications.filter((application) =>
    application.status.includes("Mülakat"),
  ).length;
  const completed = applications.filter(
    (application) => application.progress === 100,
  ).length;

  return (
    <CandidateShell>
      <main className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8">
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard icon="assignment" label="Toplam Başvuru" value={applications.length} />
          <StatCard icon="monitoring" label="Devam Eden" value={inProgress} />
          <StatCard icon="groups" label="Mülakat" value={interviews} />
          <StatCard icon="check_circle" label="Sonuçlanan" value={completed} />
        </section>

        {error ? (
          <div
            className="mb-6 rounded border border-[#ba1a1a] bg-[#ffdad6] px-4 py-3 text-sm text-[#93000a]"
            role="alert"
          >
            {error}
          </div>
        ) : null}

        <section className="overflow-hidden rounded border border-[#c5c6cd] bg-white">
          <div className="flex flex-col gap-2 border-b border-[#c5c6cd] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-[#0b1c30]">
                Başvuru Geçmişi
              </h2>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
              {isLoading ? "Yükleniyor" : `${applications.length} başvuru`}
            </span>
          </div>
          <CandidateApplicationHistory applications={applications} isLoading={isLoading} />
        </section>
      </main>
    </CandidateShell>
  );
}
