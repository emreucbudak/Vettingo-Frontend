import { departmentMetrics, funnelStages, monthlyHiring } from "@/entities/hr-dashboard";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  HrPageHeader,
  HrPrimaryLink,
  HrSectionHeading,
  HrStatGrid,
} from "@/shared/ui/hr-page-elements";

function HiringTrendChart() {
  return (
    <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6 xl:col-span-2">
      <HrSectionHeading
        description="Son altı ayda tamamlanan işe alım süreçlerinin eğilimi."
        title="Aylık İşe Alım Hacmi"
      />
      <div className="mt-8 flex h-56 items-end gap-3 border-b border-l border-[#c5c6cd] px-3 pt-4 sm:gap-6 sm:px-6">
        {monthlyHiring.map((month, index) => (
          <div className="flex h-full flex-1 flex-col items-center justify-end gap-2" key={month.label}>
            <span className="text-xs font-semibold text-[#0b1c30]">{month.value}</span>
            <div
              className={`w-full max-w-14 rounded-t transition-colors ${
                index === monthlyHiring.length - 1
                  ? "bg-[#006c49]"
                  : "bg-[#dce9ff] hover:bg-[#9cb7e8]"
              }`}
              style={{ height: `${month.value}%` }}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-3 px-3 pt-3 sm:gap-6 sm:px-6">
        {monthlyHiring.map((month) => (
          <span
            className="flex-1 text-center text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d]"
            key={month.label}
          >
            {month.label}
          </span>
        ))}
      </div>
    </section>
  );
}

function SourceMixCard() {
  const sources = [
    { label: "Doğrudan Başvuru", value: 46, color: "bg-[#091426]" },
    { label: "Referans", value: 24, color: "bg-[#006c49]" },
    { label: "Kariyer Platformları", value: 18, color: "bg-[#9cb7e8]" },
    { label: "Yetenek Havuzu", value: 12, color: "bg-[#e0a62b]" },
  ] as const;

  return (
    <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6">
      <HrSectionHeading title="Aday Kaynakları" />
      <div
        aria-label="Aday kaynaklarının yüzdesel dağılımı"
        className="relative mx-auto mt-4 h-40 w-40 rounded-full"
        role="img"
        style={{
          background:
            "conic-gradient(#091426 0 46%, #006c49 46% 70%, #9cb7e8 70% 88%, #e0a62b 88% 100%)",
        }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#f8f9ff]">
          <span className="text-2xl font-semibold text-[#0b1c30]">428</span>
          <span className="text-[10px] uppercase tracking-[0.05em] text-[#75777d]">Aday</span>
        </div>
      </div>
      <div className="mt-6 space-y-3">
        {sources.map((source) => (
          <div className="flex items-center justify-between gap-3" key={source.label}>
            <span className="flex items-center gap-2 text-xs text-[#45474c]">
              <span className={`h-2.5 w-2.5 rounded-full ${source.color}`} />
              {source.label}
            </span>
            <span className="text-xs font-semibold text-[#0b1c30]">%{source.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function FunnelReport() {
  return (
    <section className="mt-8 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-5 md:p-6">
      <HrSectionHeading
        description="Başvurudan teklife kadar aday dönüşüm oranları."
        title="Dönüşüm Hunisi"
      />
      <div className="space-y-3">
        {funnelStages.map((stage, index) => (
          <article
            className="grid grid-cols-[110px_minmax(0,1fr)_56px] items-center gap-3 sm:grid-cols-[150px_minmax(0,1fr)_70px]"
            key={stage.label}
          >
            <div>
              <p className="text-xs font-semibold text-[#0b1c30]">{stage.label}</p>
              <p className="mt-0.5 text-[10px] text-[#75777d]">{stage.value} aday</p>
            </div>
            <div className="h-9 overflow-hidden rounded bg-[#eff4ff]">
              <div
                className={`flex h-full items-center px-3 ${
                  index === funnelStages.length - 1 ? "bg-[#006c49] text-white" : "bg-[#dce9ff] text-[#091426]"
                }`}
                style={{ width: stage.width }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.05em]">
                  {stage.conversion}
                </span>
              </div>
            </div>
            <span className="text-right text-xs font-semibold text-[#45474c]">
              {stage.conversion}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

function DepartmentTable() {
  return (
    <section className="mt-8">
      <HrSectionHeading
        actionHref={ROUTES.hrRequisitions}
        actionLabel="Taleplere Git"
        description="Departman bazında açık rol, aday hacmi ve teklif kabul görünümü."
        title="Departman Performansı"
      />
      <div className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
        <div className="hidden grid-cols-12 gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.07em] text-[#45474c] lg:grid">
          <span className="col-span-3">Departman</span>
          <span className="col-span-2">Açık Rol</span>
          <span className="col-span-2">Aday</span>
          <span className="col-span-2">Ort. Süre</span>
          <span className="col-span-3">Teklif Kabul</span>
        </div>
        <div className="divide-y divide-[#c5c6cd]">
          {departmentMetrics.map((metric) => (
            <article
              className="grid grid-cols-2 gap-4 px-5 py-5 lg:grid-cols-12 lg:items-center lg:px-6"
              key={metric.department}
            >
              <div className="col-span-2 flex items-center gap-3 lg:col-span-3">
                <span className="flex h-9 w-9 items-center justify-center rounded bg-[#dce9ff] text-[#091426]">
                  <MaterialIcon className="text-[19px]">domain</MaterialIcon>
                </span>
                <span className="text-sm font-semibold text-[#0b1c30]">{metric.department}</span>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg font-semibold text-[#0b1c30]">{metric.openRoles}</p>
                <p className="text-[10px] uppercase text-[#75777d] lg:hidden">Açık Rol</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-lg font-semibold text-[#0b1c30]">{metric.candidates}</p>
                <p className="text-[10px] uppercase text-[#75777d] lg:hidden">Aday</p>
              </div>
              <div className="lg:col-span-2">
                <p className="text-sm font-medium text-[#45474c]">{metric.avgDays}</p>
                <p className="text-[10px] uppercase text-[#75777d] lg:hidden">Ort. Süre</p>
              </div>
              <div className="col-span-2 lg:col-span-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#dce9ff]">
                    <div
                      className="h-full rounded-full bg-[#006c49]"
                      style={{ width: `${metric.progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-[#006c49]">{metric.offerRate}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HrReportsPage() {
  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrPageHeader
        action={
          <HrPrimaryLink href={ROUTES.hrRequisitions} icon="assignment">
            Talepleri İncele
          </HrPrimaryLink>
        }
        description="İşe alım hızını, dönüşüm oranlarını, aday kaynaklarını ve departman kapasitesini tek rapor görünümünde değerlendir."
        eyebrow="İşe Alım Analitiği"
        title="Raporlar"
      />

      <HrStatGrid
        items={[
          {
            label: "Toplam Başvuru",
            value: "428",
            helper: "Geçen döneme göre +14%",
            icon: "description",
            tone: "blue",
          },
          {
            label: "Mülakata Dönüşüm",
            value: "%21",
            helper: "Hedefin 3 puan üzerinde",
            icon: "conversion_path",
            tone: "green",
          },
          {
            label: "Teklif Kabul",
            value: "%72",
            helper: "Son 90 gün",
            icon: "handshake",
            tone: "purple",
          },
          {
            label: "Ort. İşe Alım Süresi",
            value: "28 gün",
            helper: "3 gün iyileşme",
            icon: "speed",
            tone: "amber",
          },
        ]}
      />

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
        <HiringTrendChart />
        <SourceMixCard />
      </div>
      <FunnelReport />
      <DepartmentTable />
    </main>
  );
}
