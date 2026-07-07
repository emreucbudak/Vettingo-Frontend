import Image from "next/image";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { marketingDashboard } from "../model/marketing-dashboard-data";

function Header() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#c5c6cd] bg-white">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6">
        <a className="text-2xl font-bold tracking-[-0.01em] text-[#091426]" href={ROUTES.dashboard}>
          {marketingDashboard.productName}
        </a>
        <div className="hidden items-center space-x-6 md:flex">
          {marketingDashboard.navItems.map((item) => (
            <a
              className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c] transition-colors hover:text-[#006c49]"
              href={item.href}
              key={item.label}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <a className="text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:text-[#006c49]" href={ROUTES.login}>
            Giriş Yap
          </a>
          <a className="rounded bg-[#091426] px-6 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90" href={ROUTES.register}>
            Başla
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-6 py-24 md:grid-cols-2">
      <div className="space-y-6">
        <h1 className="max-w-2xl text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#091426] md:text-4xl md:leading-[48px]">
          {marketingDashboard.hero.title}
        </h1>
        <p className="max-w-xl text-base leading-6 text-[#45474c]">
          {marketingDashboard.hero.description}
        </p>
        <div className="flex flex-col gap-4 pt-2 sm:flex-row">
          <a className="flex items-center justify-center gap-2 rounded bg-[#091426] px-8 py-4 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#1e293b]" href={ROUTES.employer}>
            {marketingDashboard.hero.primaryCta}
            <MaterialIcon className="text-[18px]">arrow_forward</MaterialIcon>
          </a>
          <a className="rounded border border-[#c5c6cd] bg-white px-8 py-4 text-center text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#d3e4fe]" href={ROUTES.jobs}>
            {marketingDashboard.hero.secondaryCta}
          </a>
        </div>
      </div>

      <div className="relative h-[400px] w-full overflow-hidden rounded-lg border border-[#c5c6cd] bg-white">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#d3e4fe] to-[#e5eeff]">
          <Image
            alt="Veri analitiği ve profesyonel işe alım görseli"
            className="h-full w-full object-cover opacity-80 mix-blend-multiply"
            height={400}
            src={marketingDashboard.hero.imageUrl}
            width={720}
            priority
          />
        </div>
        <div className="absolute bottom-6 right-6 flex items-center gap-4 rounded border border-[#c5c6cd] bg-white p-4 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6cf8bb] text-[#00714d]">
            <MaterialIcon>trending_up</MaterialIcon>
          </div>
          <div>
            <div className="text-[11px] font-medium uppercase leading-4 tracking-wider text-[#45474c]">
              {marketingDashboard.hero.metricLabel}
            </div>
            <div className="text-xl font-semibold leading-7 text-[#091426]">
              {marketingDashboard.hero.metricValue}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-[#c5c6cd] bg-[#eff4ff] py-8">
      <div className="mx-auto max-w-[1440px] px-6 text-center">
        <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#45474c]">
          Dünyanın önde gelen şirketleri tarafından güveniliyor
        </h3>
        <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="logo-marquee flex w-max items-center gap-10">
            {[...marketingDashboard.trustedCompanies, ...marketingDashboard.trustedCompanies].map((company, index) => (
              <div
                className="flex h-14 w-36 shrink-0 items-center justify-center rounded border border-[#c5c6cd] bg-white px-5 shadow-sm"
                key={`${company.name}-${index}`}
              >
                <Image
                  alt={`${company.name} logosu`}
                  className="max-h-8 w-auto object-contain"
                  height={32}
                  src={company.logoUrl}
                  width={120}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardSnippet() {
  return (
    <div className="relative flex flex-1 flex-col gap-2 overflow-hidden rounded border border-[#c5c6cd] bg-[#e5eeff] p-4">
      <div className="flex items-center justify-between border-b border-[#c5c6cd] pb-2">
        <span className="text-[11px] font-medium uppercase leading-4 text-[#45474c]">
          Aday Hattı Durumu
        </span>
        <span className="text-[11px] font-medium leading-4 text-[#006c49]">Aktif</span>
      </div>
      <div className="mt-2 flex gap-2">
        <div className="h-16 flex-1 rounded-sm bg-[#091426] opacity-20" />
        <div className="h-24 flex-1 rounded-sm bg-[#091426] opacity-40" />
        <div className="h-12 flex-1 rounded-sm bg-[#091426] opacity-60" />
        <div className="h-32 flex-1 rounded-sm bg-[#091426] opacity-80" />
      </div>
    </div>
  );
}

function WideDashboardFeature() {
  const feature = marketingDashboard.features[0];

  return (
    <article className="group flex flex-col gap-6 rounded-lg border border-[#c5c6cd] bg-white p-6 transition-colors hover:border-[#bcc7de] md:col-span-2 md:flex-row">
      <div className="flex-1 space-y-4">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-[#1e293b] text-[#8590a6]">
          <MaterialIcon>{feature.icon}</MaterialIcon>
        </div>
        <h3 className="text-lg font-medium leading-6 text-[#091426]">{feature.title}</h3>
        <p className="text-sm leading-5 text-[#45474c]">{feature.description}</p>
      </div>
      <DashboardSnippet />
    </article>
  );
}

function SmartCvFeature() {
  const feature = marketingDashboard.features[1];

  return (
    <article className="group rounded-lg border border-[#c5c6cd] bg-white p-6 transition-colors hover:border-[#bcc7de]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-[#d3e4fe] text-[#091426]">
        <MaterialIcon>{feature.icon}</MaterialIcon>
      </div>
      <h3 className="mb-2 text-lg font-medium leading-6 text-[#091426]">{feature.title}</h3>
      <p className="mb-6 text-sm leading-5 text-[#45474c]">{feature.description}</p>
      <div className="inline-flex items-center gap-2 rounded border border-[#c5c6cd] bg-[#f8f9ff] px-4 py-2">
        <span className="h-2 w-2 rounded-full bg-[#006c49]" />
        <span className="text-[11px] font-medium uppercase leading-4 text-[#0b1c30]">
          {feature.badge}
        </span>
      </div>
    </article>
  );
}

function BenchmarkFeature() {
  const feature = marketingDashboard.features[2];

  return (
    <article className="group rounded-lg border border-[#c5c6cd] bg-white p-6 transition-colors hover:border-[#bcc7de]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded bg-[#d3e4fe] text-[#091426]">
        <MaterialIcon>{feature.icon}</MaterialIcon>
      </div>
      <h3 className="mb-2 text-lg font-medium leading-6 text-[#091426]">{feature.title}</h3>
      <p className="text-sm leading-5 text-[#45474c]">{feature.description}</p>
    </article>
  );
}

function ValueCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:col-span-2 sm:grid-cols-2">
      {marketingDashboard.valueCards.map((card) => (
        <article
          className={`flex flex-col justify-center rounded-lg p-6 ${
            card.featured
              ? "bg-[#091426] text-white"
              : "border border-[#c5c6cd] bg-white text-[#091426]"
          }`}
          key={card.title}
        >
          <div className="mb-2 text-3xl font-semibold leading-10 tracking-[-0.02em]">
            {card.title}
          </div>
          <div className={`text-xs font-semibold uppercase tracking-[0.05em] ${card.featured ? "text-[#bcc7de]" : "text-[#45474c]"}`}>
            {card.description}
          </div>
        </article>
      ))}
    </div>
  );
}

function Features() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24">
      <div className="mb-16 space-y-2 text-center">
        <h2 className="text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#091426]">
          Kurumsal Ölçekli Mimari
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-5 text-[#45474c]">
          Yoğun bilgi işleme ve nesnel aday değerlendirmesi için tasarlandı.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <WideDashboardFeature />
        <SmartCvFeature />
        <BenchmarkFeature />
        <ValueCards />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-[#c5c6cd] bg-[#e5eeff] py-8">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-xl font-bold leading-7 text-[#091426]">
          {marketingDashboard.productName}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {marketingDashboard.footerLinks.map((link) => (
            <a
              className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c] transition-colors hover:text-[#091426] hover:underline"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
          {marketingDashboard.copyright}
        </div>
      </div>
    </footer>
  );
}

export function MarketingDashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff] text-[#0b1c30]">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <TrustBar />
        <Features />
      </main>
      <Footer />
    </div>
  );
}