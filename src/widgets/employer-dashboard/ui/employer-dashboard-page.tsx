import Image from "next/image";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  activeRequisitions,
  employerFooterLinks,
  employerNavigationItems,
  employerProfile,
  employerStats,
  employerUtilityItems,
  funnelStages,
  monthlyBars,
  topAiMatches,
} from "@/entities/employer-dashboard";

function SidebarLink({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      className={`flex items-center gap-4 rounded-lg px-4 py-3 text-xs font-semibold uppercase tracking-[0.05em] transition-all ${
        active
          ? "bg-[#6cf8bb] text-[#00714d]"
          : "text-[#45474c] hover:bg-[#dce9ff] hover:text-[#0b1c30]"
      }`}
      href="#"
    >
      <MaterialIcon className="text-[22px] leading-none">{icon}</MaterialIcon>
      {label}
    </a>
  );
}

function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 z-40 hidden h-screen w-60 flex-col border-r border-[#c5c6cd] bg-[#eff4ff] md:flex">
      <div className="px-6 pb-6 pt-5">
        <h1 className="text-xl font-semibold leading-7 text-[#0b1c30]">
          {employerProfile.companyLabel}
        </h1>
        <p className="mt-1 text-[11px] font-medium leading-4 text-[#45474c]">
          {employerProfile.edition}
        </p>
      </div>

      <div className="flex flex-1 items-center overflow-y-auto px-4 py-6">
        <div className="w-full space-y-2">
          {employerNavigationItems.map((item) => (
            <SidebarLink {...item} key={item.label} />
          ))}
        </div>
      </div>

      <div className="mt-auto space-y-2 px-4 pb-6 pt-4">
        {employerUtilityItems.map((item) => (
          <SidebarLink {...item} key={item.label} />
        ))}
      </div>
    </nav>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-end border-b border-[#c5c6cd] bg-[#f8f9ff] px-4 text-[#091426] md:px-6">
      <div className="flex items-center gap-3 md:gap-4">
        <div className="flex items-center gap-2">
          {[
            { icon: "notifications", label: "Bildirimler" },
          ].map((item) => (
            <button
              aria-label={item.label}
              className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#eff4ff]"
              key={item.icon}
              type="button"
            >
              <MaterialIcon>{item.icon}</MaterialIcon>
            </button>
          ))}
        </div>
        <div
          aria-label="Kullanıcı profili"
          className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-[#c5c6cd] bg-[#eff4ff] text-[#45474c]"
          role="img"
        >
          <MaterialIcon className="text-[22px]">person_silhouette</MaterialIcon>
        </div>
      </div>
    </header>
  );
}

function MobileBrand() {
  return (
    <div className="flex items-center gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-4 py-3 md:hidden">
      <Image
        alt="Executive Recruitment logosu"
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

function StatCard({ stat }: { stat: (typeof employerStats)[number] }) {
  return (
    <article className="flex flex-col justify-between rounded border border-[#c5c6cd] bg-[#f8f9ff] p-6">
      <div className="flex items-start justify-between">
        <h3 className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
          {stat.label}
        </h3>
        <MaterialIcon className="text-[#091426]">{stat.icon}</MaterialIcon>
      </div>
      <div className="mt-4">
        <span className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
          {stat.value}
        </span>
        <div className="mt-1 flex items-center gap-1 text-[11px] font-medium leading-4 text-[#006c49]">
          <MaterialIcon className="text-[14px]">trending_up</MaterialIcon>
          <span>{stat.helper}</span>
        </div>
      </div>
    </article>
  );
}

function AiProcessingCard() {
  return (
    <article className="col-span-1 flex flex-col justify-between rounded border border-l-4 border-[#c5c6cd] border-l-[#091426] bg-gradient-to-br from-[#eff4ff] to-[#f8f9ff] p-6 md:col-span-2">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
            Yapay Zeka Aday İşleme
          </h3>
          <p className="mt-1 text-sm leading-5 text-[#45474c]">
            Kısa listeye alma süresi %40 azaldı
          </p>
        </div>
        <MaterialIcon className="text-[#040057]">psychology</MaterialIcon>
      </div>
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#0b1c30]">
            18
          </span>
          <span className="ml-2 text-sm leading-5 text-[#45474c]">
            Bugünün En İyi Eşleşmeleri
          </span>
        </div>
        <button className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] hover:underline">
          Eşleşmeleri İncele
          <MaterialIcon className="text-[16px]">arrow_forward</MaterialIcon>
        </button>
      </div>
    </article>
  );
}

function RequisitionsTable() {
  return (
    <section className="flex flex-col gap-4 lg:col-span-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">
          Aktif İlan Talepleri
        </h3>
        <a className="text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] hover:underline" href="#">
          Tümünü Gör
        </a>
      </div>

      <div className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
        <div className="hidden grid-cols-12 gap-2 border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c] md:grid">
          <div className="col-span-5">Rol Unvanı</div>
          <div className="col-span-2">Departman</div>
          <div className="col-span-2">Adaylar</div>
          <div className="col-span-3 text-right">Durum</div>
        </div>

        <div className="divide-y divide-[#c5c6cd]">
          {activeRequisitions.map((role) => (
            <article
              className="grid grid-cols-1 gap-3 px-6 py-3 transition-colors hover:bg-[#eff4ff] md:grid-cols-12 md:items-center md:gap-2"
              key={role.requisition}
            >
              <div className="md:col-span-5">
                <div className="text-sm font-medium leading-5 text-[#0b1c30]">
                  {role.title}
                </div>
                <div className="mt-1 text-[11px] font-medium leading-4 text-[#45474c]">
                  {role.requisition} - {role.location}
                </div>
              </div>
              <div className="text-sm leading-5 text-[#45474c] md:col-span-2">
                {role.department}
              </div>
              <div className="text-sm leading-5 text-[#0b1c30] md:col-span-2">
                {role.applicants}
              </div>
              <div className="flex items-center gap-2 md:col-span-3 md:justify-end">
                <span className={`h-2 w-2 rounded-full ${role.active ? "bg-[#006c49]" : "bg-[#75777d]"}`} />
                <span className="text-[11px] font-medium leading-4 text-[#45474c]">
                  {role.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AiMatchesCard() {
  return (
    <section className="flex h-full flex-col rounded border border-[#c5c6cd] bg-[#f8f9ff] p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-lg font-medium leading-6 text-[#0b1c30]">
          <MaterialIcon className="text-[#040057]">auto_awesome</MaterialIcon>
          En İyi YZ Eşleşmeleri
        </h3>
      </div>

      <div className="flex-1 space-y-4">
        {topAiMatches.map((candidate, index) => (
          <article
            className={`flex items-start gap-4 ${index === 0 ? "border-b border-[#c5c6cd] pb-4" : ""}`}
            key={candidate.name}
          >
            {"avatarUrl" in candidate ? (
              <Image
                alt={`${candidate.name} avatar`}
                className="h-10 w-10 rounded-full object-cover"
                height={40}
                src={candidate.avatarUrl}
                width={40}
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dce9ff] text-lg font-medium leading-6 text-[#45474c]">
                {candidate.initials}
              </div>
            )}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="text-sm font-medium leading-5 text-[#0b1c30]">
                  {candidate.name}
                </div>
                <span className="rounded-full bg-[#dcfce7] px-2 py-1 text-[11px] font-medium leading-4 text-[#10b981]">
                  {candidate.match}
                </span>
              </div>
              <div className="mt-1 text-[11px] font-medium leading-4 text-[#45474c]">
                {candidate.role} için
              </div>
            </div>
          </article>
        ))}
      </div>

      <button className="mt-4 w-full rounded border border-[#c5c6cd] py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c] transition-colors hover:bg-[#eff4ff]">
        Tümünü Gör AI Insights
      </button>
    </section>
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

function DashboardFooter() {
  return (
    <footer className="mt-auto flex flex-col gap-4 border-t border-[#c5c6cd] bg-[#f8f9ff] px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8">
      <div className="text-[11px] font-medium leading-4 text-[#45474c]">
        <span className="mr-2 text-xs font-bold uppercase tracking-[0.05em] text-[#0b1c30]">
          Vettingo
        </span>
        © 2026 Vettingo. Tüm hakları saklıdır.
      </div>
      <div className="flex flex-wrap gap-4 text-[11px] font-medium leading-4">
        {employerFooterLinks.map((link) => (
          <a className="text-[#45474c] transition-colors hover:text-[#091426]" href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}

export function EmployerDashboardPage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
      <Sidebar />
      <div className="flex min-h-screen flex-col md:ml-60">
        <TopBar />
        <MobileBrand />

        <main className="mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
                Panel Özeti
              </h2>
              <p className="mt-1 text-sm leading-5 text-[#45474c]">
                Açık pozisyonlar ve başvuru akışı için gerçek zamanlı metrikler.
              </p>
            </div>
            <button className="flex w-full items-center justify-center gap-2 rounded bg-[#091426] px-6 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90 md:w-auto">
              <MaterialIcon>add</MaterialIcon>
              Yeni İş İlanı Talebi
            </button>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {employerStats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
            <AiProcessingCard />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <RequisitionsTable />
            <AiMatchesCard />
          </div>

          <FunnelMetrics />
        </main>

        <DashboardFooter />
      </div>
    </div>
  );
}

