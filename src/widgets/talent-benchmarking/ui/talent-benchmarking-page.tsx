import Image from "next/image";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  benchmarkCandidates,
  benchmarkRows,
  benchmarkingProfile,
  sidebarItems,
  supportItems,
  type CandidateMetric,
} from "@/entities/talent-benchmark";

function Header() {
  return (
    <nav className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-[#c5c6cd] bg-[#f8f9ff] px-4 text-sm leading-5 text-[#091426] md:px-6">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold leading-8 text-[#091426]">
          {benchmarkingProfile.productName}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#eff4ff]" type="button">
          <MaterialIcon>notifications</MaterialIcon>
        </button>
        <div className="ml-1 h-8 w-8 overflow-hidden rounded-full border border-[#c5c6cd] bg-[#d3e4fe]">
          <Image
            alt="Kullanıcı profil fotoğrafı"
            className="h-full w-full object-cover"
            height={32}
            src={benchmarkingProfile.avatarUrl}
            width={32}
          />
        </div>
      </div>
    </nav>
  );
}

function SidebarLink({
  active,
  href,
  icon,
  label,
}: {
  active: boolean;
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <a
      className={`mb-1 flex items-center gap-4 rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] transition-all ${active ? "bg-[#6cf8bb] text-[#00714d]" : "text-[#45474c] hover:bg-[#dce9ff] hover:text-[#0b1c30]"}`}
      href={href}
    >
      <MaterialIcon className="text-[20px]">{icon}</MaterialIcon>
      {label}
    </a>
  );
}

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-full w-60 flex-col border-r border-[#c5c6cd] bg-[#eff4ff] pt-16 text-[#091426] md:flex">
      <div className="mb-2 flex items-center gap-2 border-b border-[#c5c6cd] p-4">
        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-[#c5c6cd] bg-white">
          <Image
            alt="Kurum logosu"
            className="h-full w-full object-contain p-1"
            height={40}
            src={benchmarkingProfile.organizationLogoUrl}
            width={40}
          />
        </div>
        <div>
          <div className="text-lg font-semibold leading-6 text-[#0b1c30]">
            {benchmarkingProfile.organizationName}
          </div>
          <div className="text-[11px] font-medium leading-[14px] text-[#45474c]">
            {benchmarkingProfile.planName}
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-2 py-2">
        {sidebarItems.map((item) => (
          <SidebarLink active={item.active} href={item.href} icon={item.icon} key={item.label} label={item.label} />
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-1 border-t border-[#c5c6cd] p-2">
        {supportItems.map((item) => (
          <SidebarLink active={false} href={item.href} icon={item.icon} key={item.label} label={item.label} />
        ))}
      </div>
    </aside>
  );
}

function PageHeader() {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
          {benchmarkingProfile.title}
        </h1>
        <p className="mt-1 text-sm leading-5 text-[#45474c]">
          {benchmarkingProfile.subtitle}
        </p>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-1 rounded-lg border border-[#c5c6cd] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#f8f9ff]" type="button">
          <MaterialIcon className="text-[18px]">download</MaterialIcon>
          PDF Dışa Aktar
        </button>
        <button className="flex items-center gap-1 rounded-lg bg-[#091426] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#1e293b]" type="button">
          <MaterialIcon className="text-[18px]">share</MaterialIcon>
          Görünümü Paylaş
        </button>
      </div>
    </div>
  );
}

function CandidateHeader() {
  return (
    <div className="grid min-w-[900px] grid-cols-4 border-b border-[#c5c6cd] bg-[#f8f9ff]">
      <div className="flex flex-col justify-end p-4">
        <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
          Metrikler
        </span>
      </div>
      {benchmarkCandidates.map((candidate) => (
        <div className="flex flex-col items-center border-l border-[#c5c6cd] p-4 text-center" key={candidate.name}>
          <div className="mb-2 h-16 w-16 overflow-hidden rounded-full border border-[#c5c6cd]">
            <Image
              alt={`${candidate.name} avatar`}
              className="h-full w-full object-cover"
              height={64}
              src={candidate.avatarUrl}
              width={64}
            />
          </div>
          <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">
            {candidate.name}
          </h3>
          <p className="mb-2 text-sm leading-5 text-[#45474c]">
            {candidate.role}
          </p>
          <span className="mb-1 rounded-full bg-[#dcfce7] px-2 py-1 text-[11px] font-medium leading-[14px] text-[#10b981]">
            {candidate.match}
          </span>
          <a className="mt-2 text-[11px] font-medium leading-[14px] text-[#091426] hover:underline" href={ROUTES.candidateAnalysis}>
            Profili Gör
          </a>
        </div>
      ))}
    </div>
  );
}

function MetricValue({ value }: { value: CandidateMetric }) {
  if (value.kind === "skill") {
    return (
      <div className="flex w-full items-center justify-center">
        <div className="relative h-2 w-full overflow-hidden rounded-full bg-[#e5eeff]">
          <div className="absolute left-0 top-0 h-full bg-[#091426]" style={{ width: `${value.percent}%` }} />
        </div>
        <span className="ml-2 text-[11px] font-medium leading-[14px] text-[#0b1c30]">
          {value.label}
        </span>
      </div>
    );
  }

  if (value.kind === "status") {
    return (
      <div className={`text-center text-sm leading-5 ${value.positive ? "text-[#10b981]" : "text-[#75777d]"}`}>
        <MaterialIcon className={value.positive ? "symbol-filled" : ""}>{value.icon}</MaterialIcon>
        <div className="mt-1 text-[11px] font-medium leading-[14px] text-[#45474c]">
          {value.label}
        </div>
      </div>
    );
  }

  if (value.kind === "text") {
    return (
      <div className={`text-center text-sm leading-5 ${value.tone === "error" ? "text-[#ba1a1a]" : "text-[#0b1c30]"}`}>
        {value.label}
        <div className={`mt-1 text-[11px] font-medium leading-[14px] ${value.tone === "error" ? "text-[#ba1a1a]" : "text-[#45474c]"}`}>
          {value.note}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-1 text-center text-sm leading-5 text-[#0b1c30]">
      <span className={`h-2 w-2 rounded-full ${value.dotClassName}`} />
      {value.label}
    </div>
  );
}

function ComparisonGrid() {
  return (
    <div className="overflow-x-auto rounded-lg border border-[#c5c6cd] bg-white">
      <CandidateHeader />
      <div className="min-w-[900px]">
        {benchmarkRows.map((row) => (
          <div key={`${row.section}-${row.metric}`}>
            {row.showSection && (
              <div className="grid grid-cols-4 border-b border-[#c5c6cd]">
                <div className="col-span-4 bg-[#eff4ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
                  {row.section}
                </div>
              </div>
            )}
            <div className="grid grid-cols-4 border-b border-[#c5c6cd] transition-colors last:border-b-0 hover:bg-[#f8f9ff]">
              <div className="flex items-center p-4 text-sm font-medium leading-5 text-[#0b1c30]">
                {row.metric}
              </div>
              {row.values.map((value, index) => (
                <div className="flex items-center justify-center border-l border-[#c5c6cd] p-4" key={`${row.metric}-${index}`}>
                  <MetricValue value={value} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export function TalentBenchmarkingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff] text-[#0b1c30]">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="mx-auto w-full max-w-[1440px] flex-1 overflow-y-auto p-4 md:ml-60 md:p-8">
          <PageHeader />
          <ComparisonGrid />
        </main>
      </div>
    </div>
  );
}

