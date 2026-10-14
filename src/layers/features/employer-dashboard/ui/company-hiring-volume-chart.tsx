"use client";

import { LoadingSkeleton } from "@/shared/ui/dashboard-loading/loading-skeleton";

import { HrSectionHeading } from "@/entities/hr-dashboard/ui";
import { getHiringVolumeHeight, getMonthAbbreviation } from "../model/hiring-volume";
import { useCompanyHiringVolumes } from "../model/use-company-hiring-volumes";

export function CompanyHiringVolumeChart() {
  const { volumes, error } = useCompanyHiringVolumes();
  const scale = Math.max(100, ...(volumes ?? []).map((volume) => volume.hireCount));

  return (
    <section
      className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6 xl:col-span-2"
      aria-busy={volumes === null && !error}
      aria-live="polite"
    >
      <HrSectionHeading title="Aylık İşe Alım Hacmi" />
      {volumes && volumes.length > 0 ? (
        <>
          <div className="mt-8 flex h-56 items-end gap-3 border-b border-l border-[#c5c6cd] px-3 pt-8 sm:gap-6 sm:px-6">
            {volumes.map((volume, index) => (
              <div
                className="flex h-full min-w-0 flex-1 items-end justify-center"
                key={`${volume.year}-${volume.month}-${index}`}
                aria-label={`${getMonthAbbreviation(volume.month)} ${volume.year}: ${volume.hireCount} işe alım`}
              >
                <div
                  className={`relative w-full max-w-14 rounded-t transition-colors ${
                    index === volumes.length - 1
                      ? "bg-[#006c49]"
                      : "bg-[#dce9ff] hover:bg-[#9cb7e8]"
                  }`}
                  style={{ height: `${getHiringVolumeHeight(volume.hireCount, scale)}%` }}
                >
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-[#0b1c30]">
                    {volume.hireCount.toLocaleString("tr-TR")}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 px-3 pt-3 sm:gap-6 sm:px-6">
            {volumes.map((volume, index) => (
              <span
                className="flex-1 text-center text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d]"
                key={`${volume.year}-${volume.month}-${index}`}
                title={`${getMonthAbbreviation(volume.month)} ${volume.year}`}
              >
                {getMonthAbbreviation(volume.month)}
              </span>
            ))}
          </div>
        </>
      ) : (
        <p className={`mt-8 flex h-56 items-center justify-center text-sm ${error ? "text-red-700" : "text-[#75777d]"}`} role={error ? "alert" : "status"}>
          {error
            ? "İşe alım hacmi yüklenemedi, lütfen tekrar deneyiniz."
            : volumes === null ? <LoadingSkeleton className="h-full w-full" /> : "Henüz işe alım hacmi kaydı bulunmuyor."}
        </p>
      )}
    </section>
  );
}
