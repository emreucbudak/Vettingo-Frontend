"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import {
  candidateProfile,
  footerLinks,
  navigationItems,
  recommendedJobs,
  utilityItems,
} from "@/entities/candidate-dashboard";
import {
  useCandidateDashboardData,
  type CandidateApplication,
  type UpcomingInterview,
} from "@/features/candidate-dashboard";
import {
  clearAuthToken,
  getAuthToken,
  getTokenSessionUser,
  isTokenExpired,
} from "@/shared/auth";
import { ROUTES } from "@/shared/config/routes";
import { DashboardProfileIcon, DashboardShell } from "@/shared/ui/dashboard-shell";
import { MaterialIcon } from "@/shared/ui/material-icon";

const subscribeToBrowserState = () => () => undefined;
const getServerToken = (): string | null => null;
const getBrowserReady = () => true;
const getServerReady = () => false;

function MobileHeader() {
  return (
    <header className="flex items-center justify-between border-b border-[#c5c6cd] bg-[#f8f9ff] px-4 py-3 md:hidden">
      <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
        Aday Paneli
      </p>
      <DashboardProfileIcon />
    </header>
  );
}

function ApplicationCard({ application }: { application: CandidateApplication }) {
  return (
    <article className="rounded border border-[#c5c6cd] bg-white p-4">
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h4 className="text-xl font-semibold leading-7 text-[#0b1c30]">
            {application.role}
          </h4>
          <p className="mt-1 text-sm leading-5 text-[#45474c]">{application.location}</p>
          <p className="mt-1 text-[11px] font-medium leading-4 text-[#75777d]">
            {application.appliedAtLabel}
          </p>
        </div>
        <span className={`shrink-0 rounded px-2 py-1 text-[11px] font-medium uppercase tracking-wider ${application.statusClassName}`}>
          {application.status}
        </span>
      </div>
      <div className="mt-4">
        <div className="h-1 w-full overflow-hidden rounded-full bg-[#d3e4fe]">
          <div className="h-full bg-[#091426]" style={{ width: `${application.progress}%` }} />
        </div>
        <p className="mt-1 text-right text-[11px] font-medium leading-4 text-[#45474c]">
          {application.currentStep}
        </p>
      </div>
    </article>
  );
}

function ApplicationsSection({
  applications,
  isLoading,
}: {
  applications: CandidateApplication[];
  isLoading: boolean;
}) {
  return (
    <section>
      <h3 className="mb-4 text-lg font-medium leading-6 text-[#0b1c30]">Başvurular</h3>
      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" aria-label="Başvurular yükleniyor">
          {[0, 1].map((item) => (
            <div className="h-36 animate-pulse rounded border border-[#c5c6cd] bg-white" key={item} />
          ))}
        </div>
      ) : applications.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {applications.map((application) => (
            <ApplicationCard application={application} key={application.id} />
          ))}
        </div>
      ) : (
        <div className="rounded border border-dashed border-[#c5c6cd] bg-white px-6 py-10 text-center">
          <MaterialIcon className="text-3xl text-[#75777d]">assignment_ind</MaterialIcon>
          <p className="mt-2 text-sm font-medium text-[#45474c]">Henüz bir başvurun bulunmuyor.</p>
        </div>
      )}
    </section>
  );
}

function RecommendedJobs() {
  return (
    <section>
      <h3 className="mb-4 flex items-center gap-1 text-lg font-medium leading-6 text-[#0b1c30]">
        <MaterialIcon className="text-[#006c49]">psychology</MaterialIcon>
        Yapay Zeka Önerili Fırsatlar
      </h3>
      <div className="overflow-hidden rounded border border-[#c5c6cd] bg-white">
        {recommendedJobs.map((job, index) => (
          <article
            className={`group flex cursor-pointer flex-col gap-4 p-4 transition-colors hover:bg-[#eff4ff] sm:flex-row sm:items-center sm:justify-between ${index === 0 ? "border-b border-[#c5c6cd]" : ""}`}
            key={job.role}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-[#c5c6cd] bg-[#d3e4fe]">
                <MaterialIcon className="text-[#45474c]">{job.icon}</MaterialIcon>
              </div>
              <div>
                <h4 className="text-xl font-semibold leading-7 text-[#0b1c30] transition-colors group-hover:text-[#091426]">
                  {job.role}
                </h4>
                <p className="text-sm leading-5 text-[#45474c]">
                  {job.company} • {job.location}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 sm:flex-col sm:items-end">
              <span className="rounded-full border border-[#34d399] bg-[#dcfce7] px-2 py-1 text-[11px] font-medium leading-4 text-[#10b981]">
                {job.match}
              </span>
              <p className="text-[11px] font-medium leading-4 text-[#45474c]">{job.postedAt}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function InterviewsCard({
  interviews,
  isLoading,
}: {
  interviews: UpcomingInterview[];
  isLoading: boolean;
}) {
  return (
    <section className="rounded border border-[#c5c6cd] bg-white p-4">
      <h3 className="mb-4 text-lg font-medium leading-6 text-[#0b1c30]">Yaklaşan Mülakatlar</h3>
      {isLoading ? (
        <div className="space-y-4" aria-label="Mülakatlar yükleniyor">
          {[0, 1].map((item) => (
            <div className="h-16 animate-pulse rounded bg-[#eff4ff]" key={item} />
          ))}
        </div>
      ) : interviews.length > 0 ? (
        <div className="space-y-5">
          {interviews.map((interview) => (
            <article className="flex gap-4" key={interview.id}>
              <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded border border-[#c5c6cd] bg-[#e5eeff]">
                <span className="text-[11px] font-medium uppercase leading-4 text-[#45474c]">{interview.month}</span>
                <span className="text-xl font-semibold leading-7 text-[#0b1c30]">{interview.day}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h4 className="text-base font-medium leading-6 text-[#0b1c30]">{interview.title}</h4>
                  <span className={`rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.05em] ${interview.typeClassName}`}>
                    {interview.typeLabel}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-[#45474c]">{interview.description}</p>
                <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[11px] font-medium leading-4 text-[#091426]">{interview.time}</p>
                  {interview.type === "AI" ? (
                    <Link className="text-[11px] font-semibold text-[#006c49] hover:underline" href={ROUTES.assessment}>
                      Sınav bilgileri
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="rounded bg-[#f8f9ff] px-4 py-6 text-center text-sm text-[#45474c]">
          Yaklaşan mülakat bulunmuyor.
        </p>
      )}
    </section>
  );
}

function SkillRadarCard() {
  return (
    <section className="flex h-64 flex-col rounded border border-[#c5c6cd] bg-white p-4">
      <h3 className="mb-2 text-lg font-medium leading-6 text-[#0b1c30]">Yetkinlik Radar Grafiği</h3>
      <div className="relative flex h-full w-full flex-1 items-center justify-center overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
        <div aria-hidden="true" className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #091426 1px, transparent 0)", backgroundSize: "16px 16px" }} />
        <p className="z-10 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
          [Grafik Görselleştirme Alanı]
        </p>
      </div>
    </section>
  );
}

function DashboardFooter() {
  return (
    <footer className="mt-auto flex flex-col gap-4 border-t border-[#c5c6cd] bg-[#f8f9ff] px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8">
      <span className="text-xs font-bold uppercase tracking-[0.05em] text-[#45474c]">© 2026 Vettingo. Tüm hakları saklıdır.</span>
      <ul className="flex flex-wrap gap-4 text-[11px] font-medium leading-4">
        {footerLinks.map((link) => (
          <li key={link}><a className="text-[#45474c] transition-colors hover:text-[#091426]" href="#">{link}</a></li>
        ))}
      </ul>
    </footer>
  );
}

export function CandidateDashboardPage() {
  const router = useRouter();
  const isBrowserReady = useSyncExternalStore(subscribeToBrowserState, getBrowserReady, getServerReady);
  const token = useSyncExternalStore<string | null>(subscribeToBrowserState, getAuthToken, getServerToken);
  const sessionUser = token && !isTokenExpired(token) ? getTokenSessionUser(token) : null;
  const { applications, interviews, error, isLoading } = useCandidateDashboardData(sessionUser?.id ?? null);

  useEffect(() => {
    if (isBrowserReady && !sessionUser) {
      if (token) clearAuthToken();
      router.replace(ROUTES.login);
    }
  }, [isBrowserReady, router, sessionUser, token]);

  return (
    <DashboardShell
      hideTopBarOnMobile
      navigationItems={navigationItems}
      sidebarSubtitle={candidateProfile.edition}
      sidebarTitle={candidateProfile.companyLabel}
      utilityItems={utilityItems}
    >
      <MobileHeader />
      <main className="mx-auto w-full max-w-[1440px] flex-1 overflow-x-hidden p-4 md:p-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
              Tekrar hoş geldin, {sessionUser?.firstName ?? "Aday"}.
            </h2>
            <p className="mt-2 text-base leading-6 text-[#45474c]">Bugünkü profesyonel durumun ve aktivite özetin burada.</p>
          </div>
          <button className="w-full rounded bg-[#091426] px-6 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#1e293b] md:w-auto" type="button">
            Profili Güncelle
          </button>
        </div>

        {error ? (
          <div className="mb-6 rounded border border-[#ba1a1a] bg-[#ffdad6] px-4 py-3 text-sm text-[#93000a]" role="alert">
            {error}
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <div className="space-y-6 md:col-span-8">
            <ApplicationsSection applications={applications} isLoading={isLoading} />
            <RecommendedJobs />
          </div>
          <div className="space-y-6 md:col-span-4">
            <InterviewsCard interviews={interviews} isLoading={isLoading} />
            <SkillRadarCard />
          </div>
        </div>
      </main>
      <DashboardFooter />
    </DashboardShell>
  );
}
