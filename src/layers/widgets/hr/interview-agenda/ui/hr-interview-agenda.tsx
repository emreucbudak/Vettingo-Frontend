import Link from "next/link";
import { interviews } from "@/entities/hr-dashboard";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  HrAvatar,
  HrSectionHeading,
  HrStatusBadge,
} from "@/entities/hr-dashboard/ui";

const weekDays = [
  { day: "Pzt", date: "10", count: 3 },
  { day: "Sal", date: "11", count: 5 },
  { day: "Çar", date: "12", count: 4, active: true },
  { day: "Per", date: "13", count: 2 },
  { day: "Cum", date: "14", count: 2 },
] as const;

export function HrInterviewAgenda() {
  return (
    <>
      <section className="mb-8 rounded border border-[#c5c6cd] bg-[#eff4ff] p-4 md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.07em] text-[#006c49]">
              10–14 Ağustos
            </p>
            <h2 className="mt-1 text-lg font-semibold text-[#0b1c30]">Haftalık Takvim</h2>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {weekDays.map((item) => (
              <button
                aria-pressed={"active" in item && item.active}
                className={`min-w-14 rounded border px-3 py-2 text-center transition-colors ${
                  "active" in item && item.active
                    ? "border-[#091426] bg-[#091426] text-white"
                    : "border-[#c5c6cd] bg-[#f8f9ff] text-[#45474c] hover:bg-[#dce9ff]"
                }`}
                key={item.day}
                type="button"
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.05em]">
                  {item.day}
                </span>
                <span className="mt-0.5 block text-lg font-semibold">{item.date}</span>
                <span className="mt-0.5 block text-[9px]">{item.count} görüşme</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
        <section>
          <HrSectionHeading
            actionHref={ROUTES.hrCandidates}
            actionLabel="Aday Havuzu"
            title="Bugünün Ajandası"
          />
          <div className="space-y-4">
            {interviews.map((interview) => (
              <article
                className="grid grid-cols-1 gap-4 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 transition-all hover:border-[#091426] hover:shadow-[0_10px_24px_rgba(9,20,38,0.06)] md:grid-cols-[88px_minmax(0,1fr)_auto] md:items-center"
                key={`${interview.time}-${interview.candidate}`}
              >
                <div className="border-b border-[#c5c6cd] pb-3 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                  <p className="text-xl font-semibold text-[#091426]">{interview.time}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.05em] text-[#75777d]">
                    {interview.duration}
                  </p>
                </div>
                <div className="flex min-w-0 items-start gap-3">
                  <HrAvatar initials={interview.initials} />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-sm font-semibold text-[#0b1c30]">
                        {interview.candidate}
                      </h2>
                      <HrStatusBadge status={interview.status} />
                    </div>
                    <p className="mt-1 text-sm text-[#45474c]">{interview.role}</p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-[#75777d]">
                      <span className="inline-flex items-center gap-1">
                        <MaterialIcon className="text-[16px]">record_voice_over</MaterialIcon>
                        {interview.type}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MaterialIcon className="text-[16px]">location_on</MaterialIcon>
                        {interview.location}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MaterialIcon className="text-[16px]">group</MaterialIcon>
                        {interview.interviewers.join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded border border-[#9aa6bc] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#dce9ff]"
                  href={ROUTES.hrCandidates}
                >
                  Adayı Aç
                  <MaterialIcon className="text-[16px]">arrow_forward</MaterialIcon>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
          <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5">
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded bg-[#6cf8bb] text-[#00714d]">
                <MaterialIcon className="text-[21px]">fact_check</MaterialIcon>
              </span>
              <span className="text-2xl font-semibold text-[#0b1c30]">5/6</span>
            </div>
            <h2 className="mt-5 text-lg font-semibold text-[#0b1c30]">Panel Hazırlığı</h2>
            <p className="mt-2 text-sm leading-6 text-[#45474c]">
              Soru setleri ve rol beklentileri panel üyeleriyle paylaşıldı.
            </p>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#dce9ff]">
              <div className="h-full w-[83%] rounded-full bg-[#006c49]" />
            </div>
            <Link
              className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] hover:underline"
              href={ROUTES.hrReports}
            >
              Hazırlık özetini gör
              <MaterialIcon className="text-[17px]">arrow_forward</MaterialIcon>
            </Link>
          </section>

          <section className="rounded border border-l-4 border-[#c5c6cd] border-l-[#e0a62b] bg-[#fffaf0] p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.07em] text-[#795900]">
              Geri Bildirim Hatırlatması
            </p>
            <h2 className="mt-2 text-lg font-semibold text-[#0b1c30]">5 değerlendirme açık</h2>
            <p className="mt-2 text-sm leading-6 text-[#45474c]">
              Aday deneyimini korumak için görüşme notlarını 24 saat içinde tamamla.
            </p>
          </section>
        </aside>
      </div>
    </>
  );
}
