import Link from "next/link";
import { applicationCandidates } from "@/entities/employer-recruiting/employer-recruiting-data";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";

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

export function EmployerApplicationList() {
  return (
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
  );
}
