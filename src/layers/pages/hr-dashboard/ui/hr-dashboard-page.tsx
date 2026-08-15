import Link from "next/link";
import {
  funnelStages,
  hrDashboardStats,
  hrPriorities,
  interviews,
  requisitions,
} from "@/entities/hr-dashboard";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  HrAvatar,
  HrPageHeader,
  HrPrimaryLink,
  HrSectionHeading,
  HrStatGrid,
  HrStatusBadge,
} from "@/entities/hr-dashboard/ui";

function PriorityCards() {
  return (
    <section className="mb-8">
      <HrSectionHeading
        description="Bugün ilerletilmesi gereken onay ve değerlendirmeler."
        title="Öncelikli İşler"
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {hrPriorities.map((priority) => (
          <Link
            className="group flex items-start gap-4 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 transition-all hover:-translate-y-0.5 hover:border-[#091426] hover:shadow-[0_12px_30px_rgba(9,20,38,0.08)]"
            href={priority.href}
            key={priority.title}
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-[#dce9ff] text-[#091426]">
              <MaterialIcon className="text-[22px]">{priority.icon}</MaterialIcon>
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-start justify-between gap-3">
                <span className="text-sm font-semibold leading-5 text-[#0b1c30]">
                  {priority.title}
                </span>
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#6cf8bb] px-2 text-[11px] font-bold text-[#00714d]">
                  {priority.count}
                </span>
              </span>
              <span className="mt-2 block text-xs leading-5 text-[#45474c]">
                {priority.description}
              </span>
              <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#091426] group-hover:underline">
                İncele
                <MaterialIcon className="text-[16px]">arrow_forward</MaterialIcon>
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function RequisitionOverview() {
  return (
    <section className="min-w-0 lg:col-span-2">
      <HrSectionHeading
        actionHref={ROUTES.hrRequisitions}
        actionLabel="Tüm Talepler"
        description="En son hareket gören açık işe alım talepleri."
        title="Aktif Talepler"
      />
      <div className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
        <div className="hidden grid-cols-12 gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.07em] text-[#45474c] lg:grid">
          <span className="col-span-5">Pozisyon</span>
          <span className="col-span-3">Yönetici</span>
          <span className="col-span-2">Aday</span>
          <span className="col-span-2 text-right">Durum</span>
        </div>
        <div className="divide-y divide-[#c5c6cd]">
          {requisitions.slice(0, 4).map((requisition) => (
            <Link
              className="grid grid-cols-1 gap-3 px-5 py-4 transition-colors hover:bg-[#eff4ff] lg:grid-cols-12 lg:items-center"
              href={ROUTES.hrRequisitions}
              key={requisition.id}
            >
              <span className="lg:col-span-5">
                <span className="block text-sm font-semibold text-[#0b1c30]">
                  {requisition.title}
                </span>
                <span className="mt-1 block text-[11px] text-[#75777d]">
                  {requisition.id} · {requisition.department}
                </span>
              </span>
              <span className="text-sm text-[#45474c] lg:col-span-3">
                {requisition.hiringManager}
              </span>
              <span className="text-sm font-semibold text-[#0b1c30] lg:col-span-2">
                {requisition.candidates} aday
              </span>
              <span className="lg:col-span-2 lg:text-right">
                <HrStatusBadge status={requisition.status} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function TodayInterviews() {
  return (
    <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 lg:p-6">
      <HrSectionHeading
        actionHref={ROUTES.hrInterviews}
        actionLabel="Takvim"
        title="Bugünün Mülakatları"
      />
      <div className="space-y-4">
        {interviews.slice(0, 3).map((interview) => (
          <Link
            className="flex items-start gap-3 border-b border-[#c5c6cd] pb-4 last:border-0 last:pb-0"
            href={ROUTES.hrInterviews}
            key={`${interview.time}-${interview.candidate}`}
          >
            <span className="w-12 shrink-0 text-sm font-semibold text-[#091426]">
              {interview.time}
            </span>
            <HrAvatar initials={interview.initials} size="sm" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-semibold text-[#0b1c30]">
                {interview.candidate}
              </span>
              <span className="mt-0.5 block text-[11px] text-[#75777d]">
                {interview.type} · {interview.duration}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FunnelPreview() {
  return (
    <section className="mt-8 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6">
      <HrSectionHeading
        actionHref={ROUTES.hrReports}
        actionLabel="Detaylı Rapor"
        description="Son 90 gündeki aday dönüşümünün kısa görünümü."
        title="İşe Alım Hunisi"
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-5">
        {funnelStages.map((stage, index) => (
          <article
            className="relative overflow-hidden rounded border border-[#c5c6cd] bg-[#eff4ff] p-4"
            key={stage.label}
          >
            <span
              aria-hidden="true"
              className={`absolute inset-y-0 left-0 ${index === funnelStages.length - 1 ? "bg-[#6cf8bb]" : "bg-[#dce9ff]"}`}
              style={{ width: stage.width }}
            />
            <div className="relative">
              <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#45474c]">
                {stage.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-[#0b1c30]">{stage.value}</p>
              <p className="mt-1 text-[11px] font-medium text-[#006c49]">
                {stage.conversion} dönüşüm
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HrDashboardPage() {
  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrPageHeader
        action={<HrPrimaryLink href={ROUTES.hrRequisitions}>Yeni Talep</HrPrimaryLink>}
        description="Açık kadroları, aday akışını, mülakat planını ve bekleyen ekip aksiyonlarını tek çalışma alanından yönet."
        eyebrow="İnsan Kaynakları Operasyonu"
        title="İşe Alım Kontrol Merkezi"
      />

      <HrStatGrid items={hrDashboardStats} />
      <PriorityCards />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <RequisitionOverview />
        <TodayInterviews />
      </div>

      <FunnelPreview />
    </main>
  );
}
