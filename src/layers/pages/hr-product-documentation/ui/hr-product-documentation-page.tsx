import Link from "next/link";
import type { HrProductDocumentation } from "@/entities/hr-product-documentation";
import { landingPage } from "@/entities/landing";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { PublicSiteShell } from "@/shared/ui/public-site-chrome";

export function HrProductDocumentationPage({
  content,
}: {
  content: HrProductDocumentation;
}) {
  return (
    <PublicSiteShell
      homeHref={ROUTES.landing}
      productName={landingPage.productName}
    >
      {content.showHero !== false ? (
        <section className="border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-16 md:py-24">
          <div className="mx-auto max-w-[1180px]">
            <Link
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] text-[#006c49] transition-colors hover:text-[#091426]"
              href={ROUTES.hrHelpCenter}
            >
              <MaterialIcon className="text-[17px]">arrow_back</MaterialIcon>
              HR Yardım Merkezine Dön
            </Link>

            <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#006c49]">
                  {content.eyebrow}
                </p>
                <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[46px] tracking-[-0.025em] text-[#091426] md:text-6xl md:leading-[68px]">
                  {content.title}
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#45474c]">
                  {content.description}
                </p>
              </div>
              <span className="flex h-28 w-28 items-center justify-center rounded-2xl bg-[#dce9ff] text-[#091426] shadow-[0_18px_45px_rgba(9,20,38,0.1)] lg:ml-auto lg:h-36 lg:w-36">
                <MaterialIcon className="text-[52px] lg:text-[64px]">
                  {content.icon}
                </MaterialIcon>
              </span>
            </div>
          </div>
        </section>
      ) : null}

      <article className="mx-auto grid max-w-[1180px] gap-12 px-6 py-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:py-24">
        <aside className="hidden lg:block">
          <nav
            aria-label="Sayfa içeriği"
            className="sticky top-24 rounded border border-[#c5c6cd] bg-white p-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#45474c]">
              Bu sayfada
            </p>
            <ol className="mt-4 space-y-3 text-sm font-medium text-[#45474c]">
              <li>
                <a className="transition-colors hover:text-[#091426]" href="#genel-bakis">
                  Genel bakış
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-[#091426]" href="#yetenekler">
                  Neler sağlar?
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-[#091426]" href="#is-akisi">
                  İş akışı
                </a>
              </li>
              {content.detailedSections.map((section, index) => (
                <li key={section.title}>
                  <a
                    className="transition-colors hover:text-[#091426]"
                    href={"#bolum-" + index}
                  >
                    {section.title}
                  </a>
                </li>
              ))}
              <li>
                <a className="transition-colors hover:text-[#091426]" href="#iyi-uygulamalar">
                  İyi uygulamalar
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        <div className="min-w-0">
          <section className="scroll-mt-24" id="genel-bakis">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#006c49]">
              Genel Bakış
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#091426] md:text-4xl">
              Bölümü doğru bağlamla kullanın
            </h2>
            <div className="mt-6 space-y-5">
              {content.introduction.map((paragraph) => (
                <p className="text-base leading-8 text-[#45474c]" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="scroll-mt-24 pt-16" id="yetenekler">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#006c49]">
              Temel Yetenekler
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#091426] md:text-4xl">
              Bu bölüm size neler sağlar?
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {content.capabilities.map((capability) => (
                <section
                  className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-6"
                  key={capability.title}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded bg-[#dce9ff] text-[#006c49]">
                    <MaterialIcon className="text-[19px]">check</MaterialIcon>
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[#091426]">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#45474c]">
                    {capability.description}
                  </p>
                </section>
              ))}
            </div>
          </section>

          <section className="scroll-mt-24 pt-16" id="is-akisi">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#006c49]">
              Önerilen İş Akışı
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-[#091426] md:text-4xl">
              Baştan sona nasıl ilerlenir?
            </h2>
            <ol className="mt-8 divide-y divide-[#c5c6cd] border-y border-[#c5c6cd]">
              {content.workflow.map((step, index) => (
                <li className="grid gap-4 py-6 sm:grid-cols-[52px_minmax(0,1fr)]" key={step.title}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#091426] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#091426]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#45474c]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {content.detailedSections.map((section, index) => (
            <section className="scroll-mt-24 pt-16" id={"bolum-" + index} key={section.title}>
              <h2 className="text-3xl font-bold leading-10 tracking-[-0.02em] text-[#091426]">
                {section.title}
              </h2>
              <div className="mt-6 space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p className="text-base leading-8 text-[#45474c]" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <ul className="mt-7 space-y-3 rounded border border-[#c5c6cd] bg-white p-6">
                {section.points.map((point) => (
                  <li className="flex items-start gap-3 text-sm leading-6 text-[#45474c]" key={point}>
                    <MaterialIcon className="mt-1 text-[17px] text-[#006c49]">check</MaterialIcon>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className="scroll-mt-24 pt-16" id="iyi-uygulamalar">
            <div className="rounded-lg bg-[#091426] p-7 text-white md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6cf8bb]">
                Kontrol Listesi
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.02em]">
                İyi uygulamalar
              </h2>
              <ul className="mt-7 space-y-4">
                {content.bestPractices.map((practice) => (
                  <li className="flex items-start gap-3 text-sm leading-6 text-[#e5eeff]" key={practice}>
                    <MaterialIcon className="mt-1 text-[17px] text-[#6cf8bb]">check</MaterialIcon>
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </article>

      {content.showClosingSections !== false ? (
        <>
          <section className="border-y border-[#c5c6cd] bg-[#eff4ff] px-6 py-14">
            <div className="mx-auto grid max-w-[1000px] gap-8 text-center sm:grid-cols-3">
              {content.outcomes.map((outcome) => (
                <div key={outcome.label}>
                  <p className="text-2xl font-bold text-[#091426]">{outcome.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.06em] text-[#45474c]">
                    {outcome.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="px-6 py-16 text-center md:py-20">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-[-0.02em] text-[#091426] md:text-4xl">
                Vettingo ile işe alım akışını güçlendirin
              </h2>
              <p className="mt-4 text-base leading-7 text-[#45474c]">
                {content.ctaDescription ??
                  "Ekibinizin ortak ölçütlerle çalıştığı, aday bağlamının korunduğu ve her adımın görünür olduğu bir süreç oluşturun."}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  className="inline-flex items-center justify-center gap-2 rounded bg-[#091426] px-7 py-4 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#213145]"
                  href={ROUTES.login}
                >
                  Vettingo’ya Başla
                  <MaterialIcon className="text-[17px]">arrow_forward</MaterialIcon>
                </Link>
                {content.showHelpCenterCta !== false ? (
                  <Link
                    className="inline-flex items-center justify-center rounded border border-[#091426] bg-white px-7 py-4 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#eff4ff]"
                    href={ROUTES.hrHelpCenter}
                  >
                    Yardım Merkezine Dön
                  </Link>
                ) : null}
              </div>
            </div>
          </section>
        </>
      ) : null}
    </PublicSiteShell>
  );
}
