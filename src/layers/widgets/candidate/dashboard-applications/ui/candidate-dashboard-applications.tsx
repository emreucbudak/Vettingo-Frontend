import Link from "next/link";
import type { CandidateApplication } from "@/features/candidate-dashboard";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";

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

export function CandidateDashboardApplications({
  applications,
  isLoading,
}: {
  applications: CandidateApplication[];
  isLoading: boolean;
}) {
  return (
    <section id="applications">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">Başvurular</h3>
        <Link
          className="text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49] hover:underline"
          href={ROUTES.candidateApplications}
        >
          Tümünü Gör
        </Link>
      </div>
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
