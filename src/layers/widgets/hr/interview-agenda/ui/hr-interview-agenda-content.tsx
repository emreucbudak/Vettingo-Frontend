"use client";

import { MdOutlineArrowForward, MdOutlineLocationOn, MdOutlineRecordVoiceOver } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";
import { useInterviewsByDate } from "@/features/hr-interviews";
import { ROUTES } from "@/shared/config/routes";
import {
  HrAvatar,
  HrSectionHeading,
} from "@/entities/hr-dashboard/ui";

type InterviewCalendar = {
  days: { key: string; day: string; date: string; active: boolean }[];
  dateRange: string;
};

export function HrInterviewAgendaContent({ calendar }: { calendar: InterviewCalendar }) {
  const { days, dateRange } = calendar;
  const today = days.find((day) => day.active)!.key;
  const [selectedDate, setSelectedDate] = useState(today);
  const { interviews, error } = useInterviewsByDate(selectedDate);
  const selectedDateLabel = new Intl.DateTimeFormat("tr-TR", {
    day: "numeric", month: "long", timeZone: "UTC",
  }).format(new Date(`${selectedDate}T00:00:00Z`));

  return (
    <>
      <section className="mb-8 rounded border border-[#c5c6cd] bg-[#eff4ff] p-4 md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.07em] text-[#006c49]">
              {dateRange}
            </p>
            <h2 className="mt-1 text-lg font-semibold text-[#0b1c30]">Haftalık Takvim</h2>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {days.map((item) => (
              <button
                aria-label={`${item.key} mülakatlarını göster`}
                aria-pressed={item.key === selectedDate}
                className={`min-w-14 rounded border px-3 py-2 text-center transition-colors ${
                  item.key === selectedDate
                    ? "border-[#091426] bg-[#091426] text-white"
                    : "border-[#c5c6cd] bg-[#f8f9ff] text-[#45474c] hover:bg-[#dce9ff]"
                }`}
                key={item.key}
                onClick={() => setSelectedDate(item.key)}
                type="button"
              >
                <span className="block text-[10px] font-semibold uppercase tracking-[0.05em]">
                  {item.day}
                </span>
                <span className="mt-0.5 block text-lg font-semibold">{item.date}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)]">
        <section aria-busy={interviews === null && !error}>
          <HrSectionHeading
            title={selectedDate === today ? "Bugünün Ajandası" : `${selectedDateLabel} Ajandası`}
          />
          <div className="space-y-4" aria-live="polite">
            {error ? (
              <div className="rounded border border-[#c5c6cd] p-5">
                <p className="text-sm text-red-700" role="alert">Mülakatlar yüklenemedi.</p>
              </div>
            ) : interviews === null ? (
              <p className="rounded border border-[#c5c6cd] p-5 text-sm text-[#45474c]" role="status">Mülakatlar yükleniyor…</p>
            ) : interviews.length === 0 ? (
              <p className="rounded border border-[#c5c6cd] p-5 text-sm text-[#45474c]" role="status">Seçilen gün için planlanmış mülakat bulunmuyor.</p>
            ) : interviews.map((interview) => (
              <article
                className="grid grid-cols-1 gap-4 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 transition-all hover:border-[#091426] hover:shadow-[0_10px_24px_rgba(9,20,38,0.06)] md:grid-cols-[88px_minmax(0,1fr)_auto] md:items-center"
                key={interview.id}
              >
                <div className="border-b border-[#c5c6cd] pb-3 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                  <time className="text-xl font-semibold text-[#091426]" dateTime={`${interview.interviewDate}T${interview.startedTime}`}>
                    {interview.startedTime.slice(0, 5).replace(":", ".")}
                  </time>
                </div>
                <div className="flex min-w-0 items-start gap-3">
                  <HrAvatar initials={`${interview.name.trim().charAt(0)}${interview.surname.trim().charAt(0)}`.toLocaleUpperCase("tr-TR")} />
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-sm font-semibold text-[#0b1c30]">
                        {interview.name} {interview.surname}
                      </h2>
                    </div>
                    <p className="mt-1 text-sm text-[#45474c]">{interview.role || "Rol belirtilmedi"}</p>
                    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-[#75777d]">
                      <span className="inline-flex items-center gap-1">
                        <MdOutlineRecordVoiceOver aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] text-[16px]" />
                        {interview.chapter || "Aşama belirtilmedi"}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MdOutlineLocationOn aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] text-[16px]" />
                        {interview.whereIsMeeting || "Konum belirtilmedi"}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded border border-[#9aa6bc] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#dce9ff]"
                  href={ROUTES.hrCandidates}
                >
                  Adayı Aç
                  <MdOutlineArrowForward aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] text-[16px]" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-6">
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
