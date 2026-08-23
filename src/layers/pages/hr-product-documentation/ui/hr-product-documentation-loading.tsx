import { landingPage } from "@/entities/landing";
import { ROUTES } from "@/shared/config/routes";
import { PublicSiteShell } from "@/shared/ui/public-site-chrome";

function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={"animate-pulse rounded bg-[#dce9ff] motion-reduce:animate-none " + className}
    />
  );
}

export function HrProductDocumentationLoading() {
  return (
    <PublicSiteShell
      homeHref={ROUTES.landing}
      links={landingPage.footerLinks}
      productName={landingPage.productName}
    >
      <div
        aria-busy="true"
        aria-label="Ürün dokümantasyonu yükleniyor"
        role="status"
      >
        <section className="border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-16 md:py-24">
          <div className="mx-auto max-w-[1180px]">
            <Skeleton className="h-4 w-48" />
            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
              <div>
                <Skeleton className="h-3 w-44" />
                <Skeleton className="mt-5 h-12 w-full max-w-3xl" />
                <Skeleton className="mt-3 h-12 w-4/5 max-w-2xl" />
                <Skeleton className="mt-7 h-5 w-full max-w-3xl" />
                <Skeleton className="mt-3 h-5 w-3/4 max-w-2xl" />
              </div>
              <Skeleton className="h-36 w-36 lg:ml-auto" />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-[960px] px-6 py-16 md:py-24">
          <Skeleton className="h-3 w-32" />
          <Skeleton className="mt-4 h-10 w-2/3" />
          <div className="mt-8 space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {Array.from({ length: 4 }, (_, index) => (
              <Skeleton className="h-44 border border-[#c5c6cd]" key={index} />
            ))}
          </div>
        </section>
        <span className="sr-only">Ürün dokümantasyonu yükleniyor...</span>
      </div>
    </PublicSiteShell>
  );
}
