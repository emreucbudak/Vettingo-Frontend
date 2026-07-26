import Link from "next/link";
import {
  applicationCandidates,
  employerJobs,
  talentCandidates,
  type EmployerJob,
} from "@/entities/employer-recruiting/employer-recruiting-data";
import { employerProfile, employerUtilityItems } from "@/entities/employer-dashboard";
import { ROUTES } from "@/shared/config/routes";
import { DashboardShell } from "@/shared/ui/dashboard-shell";
import { EmployerDashboardFooter } from "@/shared/ui/dashboard-shell/employer-dashboard-footer";
import { MaterialIcon } from "@/shared/ui/material-icon";

type ActivePage = "jobs" | "applications" | "talents";

const navigation = [
  { key: "dashboard", label: "Panel", icon: "space_dashboard", href: ROUTES.employer },
  { key: "jobs", label: "İlanlarım", icon: "business_center", href: ROUTES.employerJobs },
  {
    key: "applications",
    label: "Başvurular",
    icon: "assignment_ind",
    href: ROUTES.employerApplications,
  },
  { key: "talents", label: "Yetenekler", icon: "auto_awesome", href: ROUTES.employerTalents },
] as const;

function getNavigationItems(activePage: ActivePage) {
  return navigation.map(({ key, ...item }) => ({
    ...item,
    active: key === activePage,
  }));
}

function PageHeader({
  action,
  eyebrow,
  title,
  description,
}: {
  action?: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="mb-8 flex flex-col gap-5 border-b border-[#c5c6cd] pb-7 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]">
          {eyebrow}
        </p>
        <h1 className="mt-2 text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
          {title}
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[#45474c]">{description}</p>
      </div>
      {action}
    </header>
  );
}

function StatStrip({
  items,
}: {
  items: readonly { label: string; value: string; helper: string; icon: string }[];
}) {
  return (
    <section className="mb-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <article
          className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-4"
          key={item.label}
        >
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
              {item.label}
            </p>
            <MaterialIcon className="text-[20px] text-[#45474c]">{item.icon}</MaterialIcon>
          </div>
          <p className="mt-3 text-2xl font-semibold text-[#0b1c30]">{item.value}</p>
          <p className="mt-1 text-[11px] font-medium text-[#006c49]">{item.helper}</p>
        </article>
      ))}
    </section>
  );
}

function StatusBadge({ status }: { status: EmployerJob["status"] }) {
  const className =
    status === "Aktif"
      ? "border-[#34d399] bg-[#dcfce7] text-[#006c49]"
      : status === "Taslak"
        ? "border-[#c5c6cd] bg-[#eff4ff] text-[#45474c]"
        : "border-[#f2c94c] bg-[#fff7d6] text-[#7a5d00]";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.05em] ${className}`}
    >
      {status}
    </span>
  );
}

function JobRow({ job }: { job: EmployerJob }) {
  return (
    <article className="grid grid-cols-1 gap-4 px-5 py-5 transition-colors hover:bg-[#eff4ff] lg:grid-cols-12 lg:items-center lg:gap-3 lg:px-6">
      <div className="lg:col-span-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#dce9ff] text-[#091426]">
            <MaterialIcon className="text-[21px]">work</MaterialIcon>
          </div>
          <div className="min-w-0">
            <h2 className="text-base font-semibold leading-6 text-[#0b1c30]">{job.title}</h2>
            <p className="mt-0.5 text-[11px] font-medium text-[#75777d]">
              {job.requisition} · {job.department}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:contents">
        <div className="lg:col-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d] lg:hidden">
            Çalışma
          </p>
          <p className="text-sm text-[#45474c]">{job.location}</p>
          <p className="text-[11px] text-[#75777d]">{job.workingModel}</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d] lg:hidden">
            Aday Akışı
          </p>
          <p className="text-sm font-semibold text-[#0b1c30]">{job.applicants} başvuru</p>
          <p className="text-[11px] text-[#75777d]">{job.shortlisted} kısa liste</p>
        </div>
        <div className="lg:col-span-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d] lg:hidden">
            Tarih
          </p>
          <p className="text-sm text-[#45474c]">{job.publishedAt}</p>
          <p className="text-[11px] text-[#75777d]">Bitiş: {job.closesAt}</p>
        </div>
        <div className="flex items-center justify-between gap-3 lg:col-span-2 lg:justify-end">
          <StatusBadge status={job.status} />
          <button
            aria-label={`${job.title} ilan seçenekleri`}
            className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#dce9ff] hover:text-[#091426]"
            type="button"
          >
            <MaterialIcon>more_horiz</MaterialIcon>
          </button>
        </div>
      </div>
    </article>
  );
}

export function EmployerJobsPage() {
  const activeJobs = employerJobs.filter((job) => job.status === "Aktif");
  const totalApplicants = employerJobs.reduce((total, job) => total + job.applicants, 0);
  const totalShortlisted = employerJobs.reduce((total, job) => total + job.shortlisted, 0);

  return (
    <DashboardShell
      navigationItems={getNavigationItems("jobs")}
      sidebarSubtitle={employerProfile.edition}
      sidebarTitle={employerProfile.companyLabel}
      utilityItems={employerUtilityItems}
    >
      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <PageHeader
          action={
            <Link
              className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-6 py-3 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90 sm:w-auto"
              href={ROUTES.newJob}
            >
              <MaterialIcon className="text-[18px]">add</MaterialIcon>
              Yeni İş İlanı
            </Link>
          }
          description="Yayındaki, taslaktaki ve duraklatılmış tüm ilanlarını tek ekrandan takip et."
          eyebrow="İşveren Paneli"
          title="İlanlarım"
        />

        <StatStrip
          items={[
            { label: "Toplam İlan", value: String(employerJobs.length), helper: "Tüm durumlar", icon: "list_alt" },
            { label: "Aktif İlan", value: String(activeJobs.length), helper: "Şu anda yayında", icon: "campaign" },
            { label: "Toplam Başvuru", value: String(totalApplicants), helper: "Tüm açık roller", icon: "group" },
            { label: "Kısa Liste", value: String(totalShortlisted), helper: "İncelenmeye hazır", icon: "verified" },
          ]}
        />

        <section className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
          <div className="hidden grid-cols-12 gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c] lg:grid">
            <span className="col-span-4">İlan</span>
            <span className="col-span-2">Lokasyon</span>
            <span className="col-span-2">Aday Akışı</span>
            <span className="col-span-2">Yayın / Bitiş</span>
            <span className="col-span-2 text-right">Durum</span>
          </div>
          <div className="divide-y divide-[#c5c6cd]">
            {employerJobs.map((job) => (
              <JobRow job={job} key={job.id} />
            ))}
          </div>
        </section>
      </main>
      <EmployerDashboardFooter />
    </DashboardShell>
  );
}

function CandidateAvatar({
  initials,
  tone = "blue",
}: {
  initials: string;
  tone?: "blue" | "green";
}) {
  return (
    <div
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
        tone === "green"
          ? "border-[#34d399] bg-[#dcfce7] text-[#006c49]"
          : "border-[#c5c6cd] bg-[#dce9ff] text-[#091426]"
      }`}
    >
      {initials}
    </div>
  );
}

function Score({ label, value }: { label: string; value: number }) {
  return (
    <div className="min-w-16">
      <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d]">{label}</p>
      <p className="mt-1 text-lg font-semibold text-[#0b1c30]">
        {value}
        <span className="text-[11px] font-medium text-[#75777d]">/100</span>
      </p>
    </div>
  );
}

export function EmployerApplicationsPage() {
  return (
    <DashboardShell
      navigationItems={getNavigationItems("applications")}
      sidebarSubtitle={employerProfile.edition}
      sidebarTitle={employerProfile.companyLabel}
      utilityItems={employerUtilityItems}
    >
      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <PageHeader
          description="Gelen başvuruları aşamalarına, role uygunluklarına ve Vettingo Rating puanlarına göre incele."
          eyebrow="Aday Yönetimi"
          title="Başvurular"
        />
        <StatStrip
          items={[
            { label: "Yeni Başvuru", value: "38", helper: "+12 bu hafta", icon: "person_add" },
            { label: "İnceleniyor", value: "24", helper: "Ekip değerlendirmesinde", icon: "manage_search" },
            { label: "Görüşme", value: "11", helper: "Bu hafta 6 görüşme", icon: "forum" },
            { label: "Ortalama Rating", value: "89", helper: "100 üzerinden", icon: "speed" },
          ]}
        />

        <section className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
          <div className="hidden grid-cols-12 gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c] lg:grid">
            <span className="col-span-3">Aday</span>
            <span className="col-span-3">Başvurduğu Rol</span>
            <span className="col-span-2">Aşama</span>
            <span className="col-span-2">Aktivite</span>
            <span className="col-span-1">Uygunluk</span>
            <span className="col-span-1">Rating</span>
          </div>
          <div className="divide-y divide-[#c5c6cd]">
            {applicationCandidates.map((candidate) => (
              <Link
                aria-label={`${candidate.name} başvuru detayını aç`}
                className="group grid grid-cols-1 gap-4 px-5 py-5 transition-colors hover:bg-[#eff4ff] focus-visible:bg-[#eff4ff] focus-visible:outline-none lg:grid-cols-12 lg:items-center lg:gap-3 lg:px-6"
                href={`${ROUTES.employerApplications}/${candidate.id}`}
                key={candidate.id}
              >
                <div className="flex items-center gap-3 lg:col-span-3">
                  <CandidateAvatar
                    initials={candidate.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  />
                  <div>
                    <h2 className="text-sm font-semibold text-[#0b1c30] group-hover:underline">
                      {candidate.name}
                    </h2>
                    <p className="mt-1 text-[11px] text-[#75777d]">{candidate.location}</p>
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-sm font-medium text-[#0b1c30]">{candidate.targetRole}</p>
                  <p className="mt-1 text-[11px] text-[#75777d]">{candidate.appliedAt} tarihinde başvurdu</p>
                </div>
                <div className="lg:col-span-2">
                  <span className="inline-flex rounded-full bg-[#dce9ff] px-2.5 py-1 text-[11px] font-semibold text-[#091426]">
                    {candidate.status}
                  </span>
                </div>
                <p className="text-sm text-[#45474c] lg:col-span-2">{candidate.lastActivity}</p>
                <div className="grid grid-cols-2 gap-4 lg:contents">
                  <div className="lg:col-span-1">
                    <Score label="Role" value={candidate.roleSuitability} />
                  </div>
                  <div className="flex items-center justify-between lg:col-span-1">
                    <Score label="Rating" value={candidate.rating} />
                    <MaterialIcon className="text-[#45474c] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </MaterialIcon>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <EmployerDashboardFooter />
    </DashboardShell>
  );
}

export function EmployerTalentsPage() {
  return (
    <DashboardShell
      navigationItems={getNavigationItems("talents")}
      sidebarSubtitle={employerProfile.edition}
      sidebarTitle={employerProfile.companyLabel}
      utilityItems={employerUtilityItems}
    >
      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <PageHeader
          description="Açık rollerine göre Vettingo tarafından önerilen, iletişime geçmeye hazır yüksek potansiyelli adaylar."
          eyebrow="Akıllı Yetenek Havuzu"
          title="Yetenekler"
        />
        <div className="mb-7 rounded border border-l-4 border-[#c5c6cd] border-l-[#006c49] bg-[#eff4ff] p-5">
          <div className="flex items-start gap-3">
            <MaterialIcon className="mt-0.5 text-[#006c49]">auto_awesome</MaterialIcon>
            <div>
              <h2 className="text-sm font-semibold text-[#0b1c30]">Öneriler nasıl oluşuyor?</h2>
              <p className="mt-1 max-w-3xl text-sm leading-6 text-[#45474c]">
                Rol gereksinimleri; doğrulanmış beceriler, deneyim derinliği, çalışma tercihi ve güncel müsaitlik sinyalleriyle birlikte değerlendiriliyor.
              </p>
            </div>
          </div>
        </div>

        <section className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
          <div className="hidden grid-cols-12 gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c] xl:grid">
            <span className="col-span-3">Yetenek</span>
            <span className="col-span-2">Önerilen Rol</span>
            <span className="col-span-3">Neden Öneriyoruz?</span>
            <span className="col-span-2">Öne Çıkan Beceriler</span>
            <span className="col-span-1">Uygunluk</span>
            <span className="col-span-1">Rating</span>
          </div>
          <div className="divide-y divide-[#c5c6cd]">
            {talentCandidates.map((candidate) => (
              <Link
                aria-label={`${candidate.name} yetenek detayını aç`}
                className="group grid grid-cols-1 gap-4 px-5 py-5 transition-colors hover:bg-[#eff4ff] focus-visible:bg-[#eff4ff] focus-visible:outline-none xl:grid-cols-12 xl:items-center xl:gap-3 xl:px-6"
                href={`${ROUTES.employerTalents}/${candidate.id}`}
                key={candidate.id}
              >
                <div className="flex items-center gap-3 xl:col-span-3">
                  <CandidateAvatar
                    initials={candidate.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                    tone="green"
                  />
                  <div>
                    <h2 className="text-sm font-semibold text-[#0b1c30] group-hover:underline">
                      {candidate.name}
                    </h2>
                    <p className="mt-1 text-[11px] text-[#75777d]">
                      {candidate.experience} · {candidate.availableIn}
                    </p>
                  </div>
                </div>
                <div className="xl:col-span-2">
                  <p className="text-sm font-medium text-[#0b1c30]">{candidate.targetRole}</p>
                  <p className="mt-1 text-[11px] text-[#75777d]">{candidate.workingPreference}</p>
                </div>
                <p className="text-sm leading-5 text-[#45474c] xl:col-span-3">
                  {candidate.recommendedBecause}
                </p>
                <div className="flex flex-wrap gap-1.5 xl:col-span-2">
                  {candidate.primarySkills.map((skill) => (
                    <span
                      className="rounded border border-[#c5c6cd] bg-[#eff4ff] px-2 py-1 text-[10px] font-semibold text-[#45474c]"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 xl:contents">
                  <div className="xl:col-span-1">
                    <Score label="Role" value={candidate.roleSuitability} />
                  </div>
                  <div className="flex items-center justify-between xl:col-span-1">
                    <Score label="Rating" value={candidate.rating} />
                    <MaterialIcon className="text-[#45474c] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </MaterialIcon>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <EmployerDashboardFooter />
    </DashboardShell>
  );
}
