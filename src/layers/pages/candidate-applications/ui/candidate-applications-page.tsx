"use client";

import { useSyncExternalStore } from "react";
import {
  useCandidateDashboardData,
  type CandidateApplication,
} from "@/features/candidate-dashboard";
import { getAuthToken, getTokenSessionUser, isTokenExpired } from "@/shared/auth";
import { CandidateShell } from "@/widgets/app-shell";
import { MaterialIcon } from "@/shared/ui/material-icon";

const subscribeToBrowserState = () => () => undefined;
const getServerToken = (): string | null => null;

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
          <MaterialIcon>{icon}</MaterialIcon>
        </div>
      </div>
    </article>
  );
}

function ApplicationsTable({
  applications,
  isLoading,
}: {
  applications: CandidateApplication[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="space-y-3 p-5" aria-label="Başvurular yükleniyor">
        {[0, 1, 2].map((item) => (
          <div className="h-16 animate-pulse rounded bg-[#eff4ff]" key={item} />
        ))}
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="px-6 py-14 text-center">
        <MaterialIcon className="text-4xl text-[#75777d]">assignment_ind</MaterialIcon>
        <h2 className="mt-3 text-lg font-semibold text-[#0b1c30]">
          Henüz bir başvurun bulunmuyor
        </h2>
        <p className="mt-1 text-sm text-[#45474c]">
          Başvurduğun ilanlar ve süreç durumları burada listelenecek.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[860px] border-collapse text-left">
        <thead className="bg-[#eff4ff]">
          <tr className="border-b border-[#c5c6cd]">
            {["Pozisyon", "Başvuru Tarihi", "Süreç", "İlerleme", "Durum"].map(
              (heading) => (
                <th
                  className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]"
                  key={heading}
                  scope="col"
                >
                  {heading}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#c5c6cd]">
          {applications.map((application) => (
            <tr className="bg-white transition-colors hover:bg-[#f8f9ff]" key={application.id}>
              <td className="px-5 py-4">
                <p className="font-semibold text-[#0b1c30]">{application.role}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-[#45474c]">
                  <MaterialIcon className="text-[16px]">location_on</MaterialIcon>
                  {application.location}
                </p>
              </td>
              <td className="px-5 py-4 text-sm text-[#45474c]">
                {application.appliedAtLabel.replace("Başvuru: ", "")}
              </td>
              <td className="max-w-56 px-5 py-4 text-sm text-[#45474c]">
                {application.currentStep}
              </td>
              <td className="px-5 py-4">
                <div className="flex min-w-28 items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dce9ff]">
                    <div
                      className="h-full rounded-full bg-[#091426]"
                      style={{ width: `${application.progress}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-xs font-semibold text-[#45474c]">
                    {application.progress}%
                  </span>
                </div>
              </td>
              <td className="px-5 py-4">
                <span
                  className={`inline-flex whitespace-nowrap rounded px-2.5 py-1 text-[11px] font-semibold ${application.statusClassName}`}
                >
                  {application.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CandidateApplicationsPage() {
  const token = useSyncExternalStore<string | null>(
    subscribeToBrowserState,
    getAuthToken,
    getServerToken,
  );
  const sessionUser =
    token && !isTokenExpired(token) ? getTokenSessionUser(token) : null;
  const { applications, error, isLoading } = useCandidateDashboardData(
    sessionUser?.id ?? null,
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
        <header className="mb-8 border-b border-[#c5c6cd] pb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]">
            Kariyer Sürecin
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
            Başvurularım
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#45474c]">
            Yaptığın tüm iş başvurularını, güncel durumlarını ve ilerleme
            aşamalarını tek yerden takip et.
          </p>
        </header>

        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard icon="assignment_ind" label="Toplam Başvuru" value={applications.length} />
          <StatCard icon="hourglass_top" label="Devam Eden" value={inProgress} />
          <StatCard icon="forum" label="Mülakat" value={interviews} />
          <StatCard icon="task_alt" label="Sonuçlanan" value={completed} />
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
              <p className="mt-1 text-xs text-[#45474c]">
                En güncel başvurudan başlayarak listelenir.
              </p>
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
              {isLoading ? "Yükleniyor" : `${applications.length} kayıt`}
            </span>
          </div>
          <ApplicationsTable applications={applications} isLoading={isLoading} />
        </section>
      </main>
    </CandidateShell>
  );
}
