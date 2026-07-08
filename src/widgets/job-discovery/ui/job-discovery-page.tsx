import Image from "next/image";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  jobDiscoveryNavItems,
  jobDiscoveryProfile,
  jobFilters,
  jobFooterLinks,
  marketIntelligence,
  recommendedJobs,
} from "@/entities/job";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-[#c5c6cd] bg-[#f8f9ff] px-4 text-[#091426] md:px-6">
      <div className="flex w-1/3 items-center gap-4">
        <span className="text-2xl font-bold tracking-[-0.01em] text-[#091426]">
          {jobDiscoveryProfile.productName}
        </span>
      </div>

      <nav className="hidden h-full flex-1 items-center justify-center md:flex">
        <ul className="flex h-full items-center gap-8">
          {jobDiscoveryNavItems.map((item) => (
            <li className="flex h-full items-center" key={item.label}>
              <a
                className={`flex h-full items-center px-2 transition-colors hover:bg-[#eff4ff] ${
                  item.active
                    ? "border-b-2 border-[#091426] pt-1 font-bold text-[#091426]"
                    : "text-[#45474c]"
                }`}
                href="#"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex w-1/3 items-center justify-end gap-4">
        <div className="hidden items-center rounded-full border border-[#c5c6cd] bg-[#eff4ff] px-2 py-1 focus-within:border-[#091426] focus-within:ring-1 focus-within:ring-[#091426] lg:flex">
          <MaterialIcon className="mr-1 text-sm text-[#45474c]">search</MaterialIcon>
          <input
            className="w-32 border-none bg-transparent p-0 text-sm outline-none placeholder:text-[#45474c] focus:ring-0"
            placeholder="Ara..."
            type="text"
          />
        </div>
        <button className="rounded-full p-1 text-[#45474c] transition-colors hover:bg-[#eff4ff]" type="button">
          <MaterialIcon>notifications</MaterialIcon>
        </button>
        <button className="hidden rounded-full p-1 text-[#45474c] transition-colors hover:bg-[#eff4ff] sm:block" type="button">
          <MaterialIcon>settings</MaterialIcon>
        </button>
        <a
          className="ml-1 hidden border-l border-[#c5c6cd] pl-4 text-[11px] font-medium leading-4 text-[#45474c] transition-colors hover:text-[#091426] xl:block"
          href={ROUTES.employer}
        >
          İşveren Paneline Geç
        </a>
        <Image
          alt="Kullanıcı profil fotoğrafı"
          className="ml-1 h-8 w-8 rounded-full object-cover"
          height={32}
          src={jobDiscoveryProfile.avatarUrl}
          width={32}
        />
      </div>
    </header>
  );
}

function SearchHero() {
  return (
    <section className="mb-8">
      <h1 className="mb-4 text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#091426]">
        Sonraki Rolünü Keşfet
      </h1>
      <p className="mb-6 max-w-2xl text-base leading-6 text-[#45474c]">
        Yönetici profilin ve teknik uzmanlığınla örtüşen kurumsal fırsatları bulmak için yapay zeka destekli içgörülerden yararlan.
      </p>

      <div className="flex flex-col items-center gap-2 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-4 md:flex-row md:gap-4 md:p-6">
        <div className="flex w-full flex-1 items-center rounded border border-[#c5c6cd] bg-white px-2 py-2 transition-all focus-within:border-[#091426] focus-within:ring-1 focus-within:ring-[#091426]">
          <MaterialIcon className="mr-2 text-[#45474c]">search</MaterialIcon>
          <input
            className="w-full border-none bg-transparent p-0 text-sm outline-none placeholder:text-[#45474c] focus:ring-0"
            placeholder="İş unvanı, anahtar kelime veya şirket"
            type="text"
          />
        </div>
        <div className="flex w-full items-center rounded border border-[#c5c6cd] bg-white px-2 py-2 transition-all focus-within:border-[#091426] focus-within:ring-1 focus-within:ring-[#091426] md:w-1/3">
          <MaterialIcon className="mr-2 text-[#45474c]">location_on</MaterialIcon>
          <input
            className="w-full border-none bg-transparent p-0 text-sm outline-none placeholder:text-[#45474c] focus:ring-0"
            placeholder="Lokasyon veya uzaktan"
            type="text"
          />
        </div>
        <button className="flex w-full items-center justify-center rounded bg-[#091426] px-8 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90 md:w-auto" type="button">
          İşleri Bul
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {jobFilters.map((filter) => (
          <button
            className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium leading-4 transition-colors ${
              filter.active
                ? "border border-[#bcc7de] bg-[#bcc7de] text-[#091426]"
                : "border border-[#c5c6cd] text-[#0b1c30] hover:bg-[#eff4ff]"
            }`}
            key={filter.label}
            type="button"
          >
            {filter.label}
            {filter.hasMenu && <MaterialIcon className="text-[16px]">arrow_drop_down</MaterialIcon>}
          </button>
        ))}
      </div>
    </section>
  );
}

function JobCard({ job }: { job: (typeof recommendedJobs)[number] }) {
  return (
    <article className="group cursor-pointer rounded border border-[#c5c6cd] bg-[#f8f9ff] p-4 transition-colors hover:bg-[#eff4ff]">
      <div className="mb-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div className={`flex h-12 w-12 items-center justify-center rounded border border-[#c5c6cd] ${job.logoClassName}`}>
            <span className="text-2xl font-bold tracking-[-0.01em] text-[#091426]">
              {job.companyInitial}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-[#091426] group-hover:underline">
              {job.title}
            </h3>
            <p className="text-sm leading-5 text-[#45474c]">
              {job.company} - {job.location}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-2 sm:flex-col sm:items-end">
          <div className={`rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-[0.05em] ${job.matchStrong ? "bg-[#dcfce7] text-[#10b981]" : "bg-[#dce9ff] text-[#0b1c30]"}`}>
            {job.match}
          </div>
          <span className="text-[11px] font-medium leading-4 text-[#45474c]">
            {job.postedAt}
          </span>
        </div>
      </div>
      <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#0b1c30]">
        {job.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-1">
        {job.tags.map((tag) => (
          <span className="rounded border border-[#c5c6cd] bg-[#e5eeff] px-1 py-[2px] text-[11px] font-medium leading-4 text-[#45474c]" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function JobList() {
  return (
    <section className="flex flex-1 flex-col gap-4">
      <div className="mb-2 flex items-end justify-between border-b border-[#c5c6cd] pb-1">
        <h2 className="text-xl font-semibold leading-7 text-[#091426]">
          Önerilen Eşleşmeler
        </h2>
        <span className="text-[11px] font-medium uppercase leading-4 tracking-wider text-[#45474c]">
          Uygunluğa Göre Sıralandı
        </span>
      </div>
      {recommendedJobs.map((job) => (
        <JobCard job={job} key={job.title} />
      ))}
    </section>
  );
}

function MarketIntelligence() {
  return (
    <aside className="flex w-full flex-shrink-0 flex-col gap-4 lg:w-96">
      <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-4">
        <div className="mb-4 flex items-center gap-2 border-b border-[#c5c6cd] pb-2">
          <MaterialIcon className="text-[#091426]">analytics</MaterialIcon>
          <h3 className="text-lg font-medium leading-6 text-[#091426]">
            Pazar İçgörüsü
          </h3>
        </div>
        <p className="mb-4 text-[11px] font-medium uppercase leading-4 tracking-wider text-[#45474c]">
          Profiline göre ({marketIntelligence.profile})
        </p>

        <div className="flex flex-col gap-4">
          <div>
            <div className="mb-1 flex items-end justify-between">
              <span className="text-sm leading-5 text-[#0b1c30]">Talep Trendi</span>
              <span className="flex items-center text-xs font-semibold uppercase tracking-[0.05em] text-[#10b981]">
                <MaterialIcon className="text-[16px]">trending_up</MaterialIcon>
                {marketIntelligence.demandTrend}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[#dce9ff]">
              <div className={`h-full bg-[#091426] ${marketIntelligence.demandWidth}`} />
            </div>
            <p className="mt-1 text-[11px] font-medium leading-4 text-[#45474c]">
              {marketIntelligence.demandNote}
            </p>
          </div>

          <div className="border-t border-[#c5c6cd] pt-2">
            <span className="mb-2 block text-[11px] font-medium uppercase leading-4 tracking-wider text-[#45474c]">
              Maaş Yüzdelikleri
            </span>
            {marketIntelligence.salaryPercentiles.map((item) => (
              <div className="mb-1 flex items-center justify-between last:mb-0" key={item.label}>
                <span className={`text-sm leading-5 ${item.active ? "font-medium text-[#091426]" : "text-[#45474c]"}`}>
                  {item.label}
                </span>
                <span className={`text-xs font-semibold uppercase tracking-[0.05em] ${item.active ? "text-[#091426]" : "text-[#0b1c30]"}`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-4 text-center">
        <MaterialIcon className="mb-2 text-[32px] text-[#091426]">notifications_active</MaterialIcon>
        <h4 className="mb-1 text-lg font-medium leading-6 text-[#091426]">
          Hiçbir fırsatı kaçırma
        </h4>
        <p className="mb-4 text-sm leading-5 text-[#45474c]">
          YZ profiline uyan yeni yönetici rolleri yayınlandığında bildirim al.
        </p>
        <button className="w-full rounded border border-[#091426] bg-white py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#f8f9ff]" type="button">
          Uyarı Kur
        </button>
      </section>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="mt-auto flex w-full flex-col gap-4 border-t border-[#c5c6cd] bg-[#f8f9ff] px-4 py-6 text-[11px] font-medium leading-4 text-[#45474c] md:flex-row md:items-center md:justify-between md:px-8">
      <span className="text-xs font-bold uppercase tracking-[0.05em] text-[#091426]">Vettingo</span>
      <div className="flex flex-wrap gap-4">
        {jobFooterLinks.map((link) => (
          <a className="transition-colors hover:text-[#091426]" href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
      <span>(c) 2026 Vettingo. Tüm hakları saklıdır.</span>
    </footer>
  );
}

export function JobDiscoveryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff] text-[#0b1c30]">
      <Header />
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-8 md:px-8">
        <SearchHero />
        <div className="flex flex-col gap-8 lg:flex-row">
          <JobList />
          <MarketIntelligence />
        </div>
      </main>
      <Footer />
    </div>
  );
}

