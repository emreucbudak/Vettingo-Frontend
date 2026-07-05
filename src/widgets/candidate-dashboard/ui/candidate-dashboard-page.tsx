import Image from "next/image";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  activeApplications,
  candidateProfile,
  footerLinks,
  navigationItems,
  recommendedJobs,
  upcomingInterviews,
  utilityItems,
} from "../model/candidate-dashboard-data";

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
      className={`flex items-center gap-4 rounded px-4 py-2 transition-all ${
        active
          ? "bg-[#6cf8bb] font-semibold text-[#00714d]"
          : "text-[#45474c] hover:bg-[#dce9ff] hover:text-[#0b1c30]"
      }`}
      href="#"
    >
      <MaterialIcon className={active ? "[font-variation-settings:'FILL'_1]" : ""}>
        {icon}
      </MaterialIcon>
      <span className="text-xs font-semibold uppercase tracking-[0.05em]">
        {label}
      </span>
    </a>
  );
}

function Sidebar() {
  return (
    <nav className="fixed left-0 top-0 hidden h-screen w-60 flex-col border-r border-[#c5c6cd] bg-[#eff4ff] pt-16 md:flex">
      <div className="mb-4 border-b border-[#c5c6cd] px-6 pb-8">
        <div className="flex items-center gap-4">
          <Image
            className="h-12 w-12 rounded border border-[#c5c6cd] bg-white object-cover"
            src={candidateProfile.logoUrl}
            alt="Executive Recruitment logo"
            width={48}
            height={48}
          />
          <div>
            <h2 className="text-lg font-semibold leading-6 text-[#0b1c30]">
              {candidateProfile.companyLabel}
            </h2>
            <p className="mt-1 text-[11px] font-medium leading-4 text-[#45474c]">
              {candidateProfile.edition}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2">
        <ul className="space-y-1">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <SidebarLink {...item} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-[#c5c6cd] p-2">
        <ul className="space-y-1">
          {utilityItems.map((item) => (
            <li key={item.label}>
              <SidebarLink {...item} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-50 hidden h-16 w-full items-center justify-between border-b border-[#c5c6cd] bg-[#f8f9ff] px-6 text-[#091426] md:flex">
      <h1 className="text-2xl font-bold tracking-[-0.01em] text-[#091426]">
        Vettingo
      </h1>

      <div className="flex items-center gap-6">
        <div className="relative w-64">
          <MaterialIcon className="absolute left-2 top-1/2 text-[#45474c] -translate-y-1/2">
            search
          </MaterialIcon>
          <input
            className="w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] py-2 pl-8 pr-2 text-sm outline-none focus:border-[#091426] focus:ring-1 focus:ring-[#091426]"
            placeholder="Search..."
            type="text"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c] transition-colors hover:text-[#091426]">
            Switch to Employer
          </button>
          <div className="h-6 w-px bg-[#c5c6cd]" />
          {[
            { icon: "notifications", label: "Notifications" },
            { icon: "settings", label: "Settings" },
          ].map((item) => (
            <button
              aria-label={item.label}
              className="flex items-center justify-center rounded p-1 text-[#45474c] transition-colors hover:bg-[#eff4ff]"
              key={item.icon}
              type="button"
            >
              <MaterialIcon>{item.icon}</MaterialIcon>
            </button>
          ))}
          <Image
            alt="User profile avatar"
            className="ml-2 h-8 w-8 rounded-full border border-[#c5c6cd] object-cover"
            src={candidateProfile.avatarUrl}
            width={32}
            height={32}
          />
        </div>
      </div>
    </header>
  );
}

function MobileHeader() {
  return (
    <header className="flex items-center justify-between border-b border-[#c5c6cd] bg-[#f8f9ff] px-4 py-3 md:hidden">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
          Candidate Panel
        </p>
        <h1 className="text-xl font-bold text-[#091426]">Vettingo</h1>
      </div>
      <Image
        alt="User profile avatar"
        className="h-9 w-9 rounded-full border border-[#c5c6cd] object-cover"
        src={candidateProfile.avatarUrl}
        width={36}
        height={36}
      />
    </header>
  );
}

function ApplicationCard({ application }: { application: (typeof activeApplications)[number] }) {
  return (
    <article className="rounded border border-[#c5c6cd] bg-white p-4">
      <div className="mb-2 flex items-start justify-between gap-3">
        <div>
          <h4 className="text-xl font-semibold leading-7 text-[#0b1c30]">
            {application.role}
          </h4>
          <p className="text-sm leading-5 text-[#45474c]">
            {application.company} • {application.location}
          </p>
        </div>
        <span className="rounded bg-[#e5eeff] px-2 py-1 text-[11px] font-medium uppercase tracking-wider text-[#0b1c30]">
          {application.status}
        </span>
      </div>
      <div className="mt-4">
        <div className="h-1 w-full overflow-hidden rounded-full bg-[#d3e4fe]">
          <div className={`h-full bg-[#091426] ${application.progressClassName}`} />
        </div>
        <p className="mt-1 text-right text-[11px] font-medium leading-4 text-[#45474c]">
          {application.currentStep}
        </p>
      </div>
    </article>
  );
}

function RecommendedJobs() {
  return (
    <section>
      <h3 className="mb-4 flex items-center gap-1 text-lg font-medium leading-6 text-[#0b1c30]">
        <MaterialIcon className="text-[#006c49]">psychology</MaterialIcon>
        AI Recommended Opportunities
      </h3>
      <div className="overflow-hidden rounded border border-[#c5c6cd] bg-white">
        {recommendedJobs.map((job, index) => (
          <article
            className={`group flex cursor-pointer flex-col gap-4 p-4 transition-colors hover:bg-[#eff4ff] sm:flex-row sm:items-center sm:justify-between ${
              index === 0 ? "border-b border-[#c5c6cd]" : ""
            }`}
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
              <p className="text-[11px] font-medium leading-4 text-[#45474c]">
                {job.postedAt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function InterviewsCard() {
  return (
    <section className="rounded border border-[#c5c6cd] bg-white p-4">
      <h3 className="mb-4 text-lg font-medium leading-6 text-[#0b1c30]">
        Upcoming Interviews
      </h3>
      <div className="space-y-4">
        {upcomingInterviews.map((interview) => (
          <div className="flex gap-4" key={`${interview.month}-${interview.day}-${interview.title}`}>
            <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded border border-[#c5c6cd] bg-[#e5eeff]">
              <span className="text-[11px] font-medium uppercase leading-4 text-[#45474c]">
                {interview.month}
              </span>
              <span className="text-xl font-semibold leading-7 text-[#0b1c30]">
                {interview.day}
              </span>
            </div>
            <div>
              <h4 className="text-base font-medium leading-6 text-[#0b1c30]">
                {interview.title}
              </h4>
              <p className="text-sm leading-5 text-[#45474c]">{interview.company}</p>
              <p className="mt-1 text-[11px] font-medium leading-4 text-[#091426]">
                {interview.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillRadarCard() {
  return (
    <section className="flex h-64 flex-col rounded border border-[#c5c6cd] bg-white p-4">
      <h3 className="mb-2 text-lg font-medium leading-6 text-[#0b1c30]">
        Skill Competency Radar
      </h3>
      <div className="relative flex h-full w-full flex-1 items-center justify-center overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #091426 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />
        <p className="z-10 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
          [Chart Visualization Area]
        </p>
      </div>
    </section>
  );
}

function DashboardFooter() {
  return (
    <footer className="mt-auto flex flex-col gap-4 border-t border-[#c5c6cd] bg-[#f8f9ff] px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8">
      <span className="text-xs font-bold uppercase tracking-[0.05em] text-[#45474c]">
        © 2026 Vettingo. Tüm hakları saklıdır.
      </span>
      <ul className="flex flex-wrap gap-4 text-[11px] font-medium leading-4">
        {footerLinks.map((link) => (
          <li key={link}>
            <a className="text-[#45474c] transition-colors hover:text-[#091426]" href="#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export function CandidateDashboardPage() {
  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30]">
      <Sidebar />
      <div className="flex min-h-screen flex-col md:ml-60">
        <TopBar />
        <MobileHeader />

        <main className="mx-auto w-full max-w-[1440px] flex-1 overflow-x-hidden p-4 md:p-8">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
                Welcome back, {candidateProfile.name}.
              </h2>
              <p className="mt-2 text-base leading-6 text-[#45474c]">
                Here is your professional standing and activity overview for today.
              </p>
            </div>
            <button className="w-full rounded bg-[#091426] px-6 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#1e293b] md:w-auto">
              Update Profile
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="space-y-6 md:col-span-8">
              <section>
                <h3 className="mb-4 text-lg font-medium leading-6 text-[#0b1c30]">
                  Active Applications
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {activeApplications.map((application) => (
                    <ApplicationCard application={application} key={application.role} />
                  ))}
                </div>
              </section>

              <RecommendedJobs />
            </div>

            <div className="space-y-6 md:col-span-4">
              <InterviewsCard />
              <SkillRadarCard />
            </div>
          </div>
        </main>

        <DashboardFooter />
      </div>
    </div>
  );
}