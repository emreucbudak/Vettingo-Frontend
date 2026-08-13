import Link from "next/link";
import { talentCandidates } from "@/entities/employer-recruiting/employer-recruiting-data";
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

export function EmployerTalentList() {
  return (
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
  );
}
