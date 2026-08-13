import type { CandidateApplication } from "@/features/candidate-dashboard";
import { MaterialIcon } from "@/shared/ui/material-icon";

export function CandidateApplicationHistory({
  applications,
  isLoading,
}: {
  applications: CandidateApplication[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="space-y-3 p-5" aria-label="Başvurular yükleniyor">
        {[0, 1, 2].map((item) => (
          <div className="h-16 animate-pulse rounded bg-[#eff4ff]" key={item} />
        ))}
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="px-6 py-14 text-center">
        <MaterialIcon className="text-4xl text-[#75777d]">assignment_ind</MaterialIcon>
        <h2 className="mt-3 text-lg font-semibold text-[#0b1c30]">
          Henüz bir başvurun bulunmuyor
        </h2>
        <p className="mt-1 text-sm text-[#45474c]">
          Başvurduğun ilanlar ve süreç durumları burada listelenecek.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[860px] border-collapse text-left">
        <thead className="bg-[#eff4ff]">
          <tr className="border-b border-[#c5c6cd]">
            {["Pozisyon", "Başvuru Tarihi", "Süreç", "İlerleme", "Durum"].map(
              (heading) => (
                <th
                  className="px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]"
                  key={heading}
                  scope="col"
                >
                  {heading}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#c5c6cd]">
          {applications.map((application) => (
            <tr className="bg-white transition-colors hover:bg-[#f8f9ff]" key={application.id}>
              <td className="px-5 py-4">
                <p className="font-semibold text-[#0b1c30]">{application.role}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-[#45474c]">
                  <MaterialIcon className="text-[16px]">location_on</MaterialIcon>
                  {application.location}
                </p>
              </td>
              <td className="px-5 py-4 text-sm text-[#45474c]">
                {application.appliedAtLabel.replace("Başvuru: ", "")}
              </td>
              <td className="max-w-56 px-5 py-4 text-sm text-[#45474c]">
                {application.currentStep}
              </td>
              <td className="px-5 py-4">
                <div className="flex min-w-28 items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#dce9ff]">
                    <div
                      className="h-full rounded-full bg-[#091426]"
                      style={{ width: `${application.progress}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-xs font-semibold text-[#45474c]">
                    {application.progress}%
                  </span>
                </div>
              </td>
              <td className="px-5 py-4">
                <span
                  className={`inline-flex whitespace-nowrap rounded px-2.5 py-1 text-[11px] font-semibold ${application.statusClassName}`}
                >
                  {application.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
