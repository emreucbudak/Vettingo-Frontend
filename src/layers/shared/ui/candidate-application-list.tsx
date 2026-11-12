import { MdOutlineArrowForward } from "react-icons/md";
import Link from "next/link";

type CandidateApplicationRow = {
  id: string;
  name: string;
  location: string;
  targetRole: string;
  status: string;
  expectedSalary?: string;
  rating: number;
  detailHref: string;
  detailLabel: string;
};

function Score({ value }: { value: number }) {
  return (
    <div className="min-w-16">
      <p className="text-lg font-semibold text-[#0b1c30]">{value}</p>
    </div>
  );
}

export function CandidateApplicationList({ candidates }: { candidates: readonly CandidateApplicationRow[] }) {
  return (
    <section className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
      <div className="hidden grid-cols-12 gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c] lg:grid">
        <span className="col-span-3">Aday</span>
        <span className="col-span-3">Başvurduğu Rol</span>
        <span className="col-span-2">Aşama</span>
        <span className="col-span-2">Maaş</span>
        <div className="col-span-2 flex items-center justify-between">
          <span className="-translate-x-1">Rating</span>
          <span>Detay</span>
        </div>
      </div>
      <div className="divide-y divide-[#c5c6cd]">
        {candidates.map((candidate) => (
          <Link
            aria-label={candidate.detailLabel}
            className="group grid grid-cols-1 gap-4 px-5 py-5 transition-colors hover:bg-[#eff4ff] focus-visible:bg-[#eff4ff] focus-visible:outline-none lg:grid-cols-12 lg:items-center lg:gap-3 lg:px-6"
            href={candidate.detailHref}
            key={candidate.id}
          >
            <div className="lg:col-span-3">
              <h2 className="text-sm font-semibold text-[#0b1c30] group-hover:underline">
                {candidate.name}
              </h2>
              <p className="mt-1 text-[11px] text-[#75777d]">{candidate.location}</p>
            </div>
            <div className="lg:col-span-3">
              <p className="text-sm font-medium text-[#0b1c30]">{candidate.targetRole}</p>
            </div>
            <div className="lg:col-span-2">
              <span className="inline-flex rounded-full bg-[#dce9ff] px-2.5 py-1 text-[11px] font-semibold text-[#091426]">
                {candidate.status}
              </span>
            </div>
            <div className="lg:col-span-2">
              <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d] lg:hidden">
                Maaş
              </p>
              <p className="mt-1 text-sm text-[#45474c] lg:mt-0">
                {candidate.expectedSalary || "Belirtilmedi"}
              </p>
            </div>
            <div className="flex items-center justify-between lg:col-span-2">
              <Score value={candidate.rating} />
              <MdOutlineArrowForward aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] text-[#45474c] transition-transform group-hover:translate-x-1 lg:mr-2" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
