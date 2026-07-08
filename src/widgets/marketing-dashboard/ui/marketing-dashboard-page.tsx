"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: (typeof marketingDashboard.features)[number] }) {
  return (
    <article className="group flex min-h-40 flex-col justify-between rounded-lg border border-[#c5c6cd] bg-white p-6 transition-colors hover:border-[#bcc7de]">
      <div className="space-y-3">
        <h3 className="text-lg font-medium leading-6 text-[#091426]">{feature.title}</h3>
        <p className="text-sm leading-5 text-[#45474c]">{feature.description}</p>
      </div>
    </article>
  );
}

function AnimatedStatValue({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const duration = 1200;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target]);

  return <>{value}{suffix}</>;
}

function StatsSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-24">
      <div className="mb-12 space-y-2 text-center">
        <h2 className="text-2xl font-semibold leading-8 tracking-[-0.01em] text-[#091426]">
          Sayılarla Vettingo
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-5 text-[#45474c]">
          İşe alım ekiplerinin daha hızlı, ölçülebilir ve tutarlı karar almasına yardımcı olan platform etkisi.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {marketingDashboard.valueCards.map((card) => (
          <article
            className="group flex min-h-40 flex-col justify-between rounded-lg border border-[#c5c6cd] bg-white p-6 text-[#091426] transition-colors hover:border-[#bcc7de]"
            key={card.title}
          >
            <div className="text-3xl font-semibold leading-10 tracking-[-0.02em]">
              <AnimatedStatValue suffix={card.suffix} target={card.value} />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.05em] text-[#091426]">
                {card.title}
              </h3>
              <p className="text-sm leading-5 text-[#45474c]">{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
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
        {marketingDashboard.features.map((feature) => (
          <FeatureCard feature={feature} key={feature.title} />
        ))}
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
        <div className="flex flex-wrap justify-center gap-4 md:justify-end">
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
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}
