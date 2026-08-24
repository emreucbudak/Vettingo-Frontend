import Link from "next/link";
import { employerJobs } from "@/entities/employer-recruiting/employer-recruiting-data";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { EmployerApplicationList } from "@/widgets/employer/application-list";
import { EmployerJobList } from "@/widgets/employer/job-list";
import { EmployerShell } from "@/widgets/employer/shell";
import { EmployerTalentList } from "@/widgets/employer/talent-list";

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
  items: readonly { label: string; value: string; helper?: string; icon: string }[];
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
          {item.helper ? (
            <p className="mt-1 text-[11px] font-medium text-[#006c49]">{item.helper}</p>
          ) : null}
        </article>
      ))}
    </section>
  );
}

export function EmployerJobsPage() {
  const activeJobs = employerJobs.filter((job) => job.status === "Aktif");
  const totalApplicants = employerJobs.reduce((total, job) => total + job.applicants, 0);
  const totalShortlisted = employerJobs.reduce((total, job) => total + job.shortlisted, 0);

  return (
    <EmployerShell>
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

        <EmployerJobList />
      </main>
    </EmployerShell>
  );
}

export function EmployerApplicationsPage() {
  return (
    <EmployerShell>
      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <StatStrip
          items={[
            { label: "Yeni Başvuru", value: "38", icon: "person_add" },
            { label: "İnceleniyor", value: "24", icon: "search" },
            { label: "Görüşme", value: "11", icon: "forum" },
            { label: "Ortalama Rating", value: "89", icon: "monitoring" },
          ]}
        />

        <EmployerApplicationList />
      </main>
    </EmployerShell>
  );
}

export function EmployerTalentsPage() {
  return (
    <EmployerShell>
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

        <EmployerTalentList />
      </main>
    </EmployerShell>
  );
}
