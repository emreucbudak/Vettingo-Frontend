"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { landingPage } from "@/entities/landing";
import { getAuthenticatedRoute } from "@/shared/auth";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";

function Header() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#c5c6cd] bg-white">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6">
        <a className="text-2xl font-bold tracking-[-0.01em] text-[#091426]" href={ROUTES.landing}>
          {landingPage.productName}
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  const router = useRouter();

  return (
    <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-8 px-6 py-24 md:grid-cols-2">
      <div className="space-y-6">
        <h1 className="max-w-2xl text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#091426] md:text-4xl md:leading-[48px]">
          {landingPage.hero.title}
        </h1>
        <p className="max-w-xl text-base leading-6 text-[#45474c]">
          {landingPage.hero.description}
        </p>
        <div className="flex flex-col gap-4 pt-2 sm:flex-row">
          <button
            className="flex items-center justify-center gap-2 rounded bg-[#091426] px-8 py-4 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#1e293b]"
            onClick={() => router.push(getAuthenticatedRoute())}
            type="button"
          >
            {landingPage.hero.primaryCta}
            <MaterialIcon className="text-[18px]">arrow_forward</MaterialIcon>
          </button>
        </div>
      </div>

      <div className="grid h-[400px] w-full grid-cols-3 gap-2 overflow-hidden rounded-lg bg-transparent p-2 sm:gap-3 sm:p-3">
        {landingPage.hero.people.map((person, index) => (
          <div
            className={`flex min-w-0 flex-col ${index === 1 ? "mt-8" : "mb-8"}`}
            key={person.profession}
          >
            <div className="relative min-h-0 flex-1 overflow-hidden rounded-md">
              <Image
                alt={`${person.profession} çalışma ortamı`}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 768px) 30vw, 16vw"
                src={person.imageUrl}
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}


type NetworkCardProps = {
  className: string;
  children: ReactNode;
};

function NetworkCard({ className, children }: NetworkCardProps) {
  return (
    <div
      className={`absolute flex items-center justify-center rounded-2xl border border-[#e2e7f1] bg-white shadow-[0_18px_45px_rgba(9,20,38,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}


function HrPlatformSection() {
  return (
    <section className="overflow-hidden bg-[#f8f9ff] px-6 py-24">
      <div className="mx-auto max-w-[1180px] text-center">
        <div className="relative mx-auto h-[320px] max-w-[1160px] sm:h-[390px]">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full overflow-visible"
            fill="none"
            preserveAspectRatio="none"
            shapeRendering="geometricPrecision"
            viewBox="0 0 1160 390"
          >
            <g
              stroke="#dfe4ee"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
              vectorEffect="non-scaling-stroke"
            >
              <path d="M112 183H508" />
              <path d="M652 183H1048" />
              <path d="M249 79H342L420 183" />
              <path d="M249 289H365L420 183" />
              <path d="M911 79H818L740 183" />
              <path d="M911 289H795L740 183" />
            </g>
            <g fill="#8b5cf6">
              <circle cx="342" cy="79" r="4.5" />
              <circle cx="365" cy="289" r="4.5" />
              <circle cx="818" cy="79" r="4.5" />
              <circle cx="795" cy="289" r="4.5" />
            </g>
          </svg>

          <NetworkCard className="left-0 top-[33%] h-20 w-20 bg-white text-[#091426] sm:h-28 sm:w-28">
            <span className="text-2xl font-semibold text-[#091426] sm:text-3xl">
              HR
            </span>
          </NetworkCard>
          <NetworkCard className="left-[18%] top-[10%] h-16 w-16 rounded-2xl bg-[#ffd94d] text-[#091426] sm:h-20 sm:w-20">
            <MaterialIcon className="text-[30px] sm:text-[36px]">search</MaterialIcon>
          </NetworkCard>
          <NetworkCard className="left-[18%] bottom-[16%] h-16 w-16 rounded-2xl bg-white text-[#091426] sm:h-20 sm:w-20">
            <MaterialIcon className="text-[30px] sm:text-[36px]">person</MaterialIcon>
          </NetworkCard>

          <div className="absolute left-1/2 top-[44%] flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-gradient-to-br from-[#b08cff] to-[#6f42e8] text-white shadow-[0_24px_65px_rgba(111,66,232,0.34)] sm:h-36 sm:w-36">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-[5px] border-white/80 sm:h-20 sm:w-20">
              <MaterialIcon className="text-[38px] sm:text-[48px]">check</MaterialIcon>
            </div>
          </div>

          <NetworkCard className="right-[18%] top-[10%] h-16 w-16 rounded-2xl bg-white text-[#091426] sm:h-20 sm:w-20">
            <MaterialIcon className="text-[30px] sm:text-[36px]">work</MaterialIcon>
          </NetworkCard>
          <NetworkCard className="right-[18%] bottom-[16%] h-16 w-16 text-[#091426] sm:h-20 sm:w-20">
            <MaterialIcon className="text-[30px] sm:text-[36px]">auto_awesome</MaterialIcon>
          </NetworkCard>
          <NetworkCard className="right-0 top-[33%] h-20 w-20 overflow-hidden sm:h-28 sm:w-28">
            <Image
              alt="Çalışan portresi"
              className="h-full w-full rounded-[inherit] object-cover"
              height={112}
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=480&q=90"
              width={112}
            />
          </NetworkCard>
        </div>

        <div className="mx-auto max-w-2xl space-y-5">
          <h2 className="text-4xl font-semibold leading-[44px] tracking-[-0.02em] text-[#091426] md:text-6xl md:leading-[68px]">
            All-in-one işe alım platformu
          </h2>
          <p className="mx-auto max-w-md text-base leading-6 text-[#8590a6]">
            Vettingo, aday değerlendirme, kısa liste ve ekip kararlarını tek akışta birleştiren modern bir işe alım merkezidir.
          </p>
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
            {[...landingPage.trustedCompanies, ...landingPage.trustedCompanies].map((company, index) => (
              <div
                className="flex h-14 w-36 shrink-0 items-center justify-center rounded border border-[#c5c6cd] bg-white px-5 shadow-sm"
                key={`${company.name}-${index}`}
              >
                <span className="relative block h-8 w-[120px]">
                  <Image
                    alt={`${company.name} logosu`}
                    className="object-contain"
                    fill
                    sizes="120px"
                    src={company.logoUrl}
                    unoptimized
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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


function CompactStatsSection() {
  return (
    <section className="bg-[#eff4ff] px-6 py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 text-center sm:flex-row sm:gap-14 md:gap-20">
        {landingPage.valueCards.map((card) => (
          <div className="min-w-[130px]" key={card.title}>
            <div className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#091426]">
              <AnimatedStatValue suffix={card.suffix} target={card.value} />
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function TalentHighlightsSection() {
  return (
    <section className="bg-[#f8f9ff] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[1240px] space-y-20 md:space-y-28">
        {landingPage.talentHighlights.map((highlight, index) => (
          <article
            className="talent-highlight grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(360px,1fr)] md:gap-24 lg:gap-32"
            key={highlight.title}
          >
            <div className={index % 2 === 1 ? "md:order-2" : undefined}>
              <h2 className="max-w-xl text-4xl font-bold leading-[46px] text-[#091426] md:text-5xl md:leading-[58px]">
                {highlight.title}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#45474c]">
                {highlight.description}
              </p>
            </div>
            <div
              className={`relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-md ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <Image
                alt={highlight.imageAlt}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 520px"
                src={highlight.imageUrl}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-[#c5c6cd] bg-white py-8">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-xl font-bold leading-7 text-[#091426]">
          {landingPage.productName}
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:justify-end">
          {landingPage.footerLinks.map((link) => (
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


export function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff] text-[#0b1c30]">
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <TrustBar />
        <HrPlatformSection />
        <CompactStatsSection />
        <TalentHighlightsSection />
      </main>
      <Footer />
    </div>
  );
}











