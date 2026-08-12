import Link from "next/link";
import { requisitions } from "@/entities/hr-dashboard";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  HrPageHeader,
  HrPrimaryLink,
  HrSectionHeading,
  HrStatGrid,
  HrStatusBadge,
} from "./hr-page-elements";

function PriorityBadge({ priority }: { priority: string }) {
  return priority === "Yüksek" ? (
    <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#a63d32]">
      <MaterialIcon className="symbol-filled text-[14px]">flag</MaterialIcon>
      Yüksek
    </span>
  ) : (
    <span className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d]">
      Normal
    </span>
  );
}

export function HrRequisitionsPage() {
  const totalCandidates = requisitions.reduce(
    (total, requisition) => total + requisition.candidates,
    0,
  );

  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrPageHeader
        action={
          <HrPrimaryLink href={ROUTES.hrCandidates} icon="groups">
            Aday Havuzunu Aç
          </HrPrimaryLink>
        }
        description="Departmanlardan gelen kadro ihtiyaçlarını, işe alım sahiplerini, aday yoğunluğunu ve süreç yaşını birlikte takip et."
        eyebrow="Kadro Planlama"
        title="İşe Alım Talepleri"
      />

      <HrStatGrid
        items={[
          {
            label: "Toplam Talep",
            value: String(requisitions.length),
            helper: "Tüm açık ve taslak talepler",
            icon: "assignment",
            tone: "blue",
          },
          {
            label: "Toplam Kadro",
            value: String(requisitions.reduce((total, item) => total + item.headcount, 0)),
            helper: "Onaylanan ihtiyaç",
            icon: "group_add",
            tone: "green",
          },
          {
            label: "Bağlı Aday",
            value: String(totalCandidates),
            helper: "Taleplerdeki toplam aday",
            icon: "person_search",
            tone: "purple",
          },
          {
            label: "Onay Bekleyen",
            value: "4",
            helper: "Yönetici aksiyonu gerekiyor",
            icon: "approval",
            tone: "amber",
          },
        ]}
      />

      <section className="mb-6 rounded border border-[#c5c6cd] bg-[#eff4ff] p-4 md:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#6cf8bb] text-[#00714d]">
              <MaterialIcon className="text-[21px]">filter_alt</MaterialIcon>
            </span>
            <div>
              <p className="text-sm font-semibold text-[#0b1c30]">Talep görünümü</p>
              <p className="mt-1 text-xs leading-5 text-[#45474c]">
                Departman ve duruma göre işe alım taleplerini daralt.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <select
              aria-label="Departman filtresi"
              className="rounded border border-[#c5c6cd] bg-[#f8f9ff] px-3 py-2.5 text-xs text-[#0b1c30] outline-none focus:border-[#091426]"
              defaultValue="all"
            >
              <option value="all">Tüm Departmanlar</option>
              <option value="engineering">Mühendislik</option>
              <option value="product">Ürün</option>
              <option value="sales">Satış</option>
            </select>
            <select
              aria-label="Durum filtresi"
              className="rounded border border-[#c5c6cd] bg-[#f8f9ff] px-3 py-2.5 text-xs text-[#0b1c30] outline-none focus:border-[#091426]"
              defaultValue="all"
            >
              <option value="all">Tüm Durumlar</option>
              <option value="active">Aktif</option>
              <option value="interview">Mülakat</option>
              <option value="approval">Onay Bekliyor</option>
            </select>
            <button
              className="inline-flex items-center justify-center gap-2 rounded border border-[#9aa6bc] bg-[#f8f9ff] px-4 py-2.5 text-xs font-semibold text-[#091426] transition-colors hover:bg-[#dce9ff]"
              type="button"
            >
              <MaterialIcon className="text-[18px]">sort</MaterialIcon>
              Öncelik
            </button>
          </div>
        </div>
      </section>

      <section>
        <HrSectionHeading
          actionHref={ROUTES.hrReports}
          actionLabel="Kapasite Raporu"
          description="Talepler örnek verilerle sunulur; bu ekranda herhangi bir API çağrısı yapılmaz."
          title="Açık Talepler"
        />
        <div className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
          <div className="hidden grid-cols-12 gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.07em] text-[#45474c] xl:grid">
            <span className="col-span-4">Pozisyon</span>
            <span className="col-span-2">İşe Alım Yöneticisi</span>
            <span className="col-span-2">Kapasite</span>
            <span className="col-span-1">Yaş</span>
            <span className="col-span-1">Öncelik</span>
            <span className="col-span-2 text-right">Durum</span>
          </div>
          <div className="divide-y divide-[#c5c6cd]">
            {requisitions.map((requisition) => (
              <article
                className="grid grid-cols-1 gap-4 px-5 py-5 transition-colors hover:bg-[#eff4ff] xl:grid-cols-12 xl:items-center xl:gap-3 xl:px-6"
                key={requisition.id}
              >
                <div className="xl:col-span-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#dce9ff] text-[#091426]">
                      <MaterialIcon className="text-[20px]">work</MaterialIcon>
                    </span>
                    <div>
                      <h2 className="text-sm font-semibold leading-5 text-[#0b1c30]">
                        {requisition.title}
                      </h2>
                      <p className="mt-1 text-[11px] text-[#75777d]">
                        {requisition.id} · {requisition.department}
                      </p>
                      <p className="mt-1 text-[11px] text-[#75777d]">
                        {requisition.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-sm text-[#45474c] xl:col-span-2">
                  <p className="font-medium text-[#0b1c30]">{requisition.hiringManager}</p>
                  <p className="mt-1 text-[11px] text-[#75777d]">Talep sahibi</p>
                </div>
                <div className="grid grid-cols-2 gap-3 xl:col-span-2">
                  <div>
                    <p className="text-lg font-semibold text-[#0b1c30]">{requisition.headcount}</p>
                    <p className="text-[10px] uppercase tracking-[0.05em] text-[#75777d]">Kadro</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[#0b1c30]">{requisition.candidates}</p>
                    <p className="text-[10px] uppercase tracking-[0.05em] text-[#75777d]">Aday</p>
                  </div>
                </div>
                <p className="text-sm text-[#45474c] xl:col-span-1">{requisition.age}</p>
                <div className="xl:col-span-1">
                  <PriorityBadge priority={requisition.priority} />
                </div>
                <div className="flex items-center justify-between gap-3 xl:col-span-2 xl:justify-end">
                  <HrStatusBadge status={requisition.status} />
                  <Link
                    aria-label={`${requisition.title} adaylarını aç`}
                    className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#dce9ff] hover:text-[#091426]"
                    href={ROUTES.hrCandidates}
                  >
                    <MaterialIcon>arrow_forward</MaterialIcon>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
