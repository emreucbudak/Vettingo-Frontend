import { MdOutlineApartment, MdOutlineLanguage } from "react-icons/md";
import { AppIcon } from "@/shared/ui/icon";
import { exampleCompany } from "@/entities/company";
import { EmployerShell } from "@/widgets/employer/shell";

function CompanyDetail({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-[#eff4ff] text-[#45474c]">
        <AppIcon className="text-[22px]">{icon}</AppIcon>
      </span>
      <div className="min-w-0">
        <dt className="mb-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#75777d]">
          {label}
        </dt>
        <dd className="text-sm leading-6 text-[#0b1c30]">{value}</dd>
      </div>
    </div>
  );
}

export function EmployerCompanyPage() {
  const company = exampleCompany;

  return (
    <EmployerShell>
      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <section aria-labelledby="company-name" className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
          <header className="flex flex-col items-start gap-6 border-b border-[#c5c6cd] bg-[#eff4ff] p-6 md:flex-row md:items-center md:p-8">
            <div
              aria-label="Şirket logo alanı"
              className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-[#c5c6cd] bg-[#f8f9ff] text-[#091426]"
              role="img"
            >
              <MdOutlineApartment aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] text-[60px]" />
            </div>
            <div className="min-w-0">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#75777d]">Şirket Profili</p>
              <h1 className="break-words text-3xl font-semibold leading-tight text-[#0b1c30] md:text-4xl" id="company-name">
                {company.companyName}
              </h1>
              <p className="mt-3 text-sm text-[#45474c]">{company.companySector}</p>
            </div>
          </header>

          <div className="p-6 md:p-8">
            <h3 className="mb-6 text-lg font-semibold text-[#0b1c30]">Şirket Bilgileri</h3>
            <dl className="grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2">
              <CompanyDetail icon="business_center" label="Sektör" value={company.companySector} />
              <CompanyDetail icon="groups" label="Şirket Büyüklüğü" value={company.companySize} />
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded bg-[#eff4ff] text-[#45474c]">
                  <MdOutlineLanguage aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] text-[22px]" />
                </span>
                <div className="min-w-0">
                  <dt className="mb-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#75777d]">Web Sitesi</dt>
                  <dd className="text-sm leading-6">
                    <a className="break-all text-[#0b1c30] underline decoration-[#c5c6cd] underline-offset-4 hover:decoration-[#091426]" href={company.companyWebsite} rel="noreferrer" target="_blank">
                      {company.companyWebsite}
                    </a>
                  </dd>
                </div>
              </div>
              <CompanyDetail icon="location_on" label="Şirket Adresi" value={company.companyAddress} />
            </dl>

            <section aria-labelledby="company-about" className="mt-8 border-t border-[#c5c6cd] pt-7">
              <h3 className="mb-4 text-lg font-semibold text-[#0b1c30]" id="company-about">Şirket Hakkında</h3>
              <p className="max-w-4xl whitespace-pre-line text-sm leading-7 text-[#45474c]">
                {company.companyDescription}
              </p>
            </section>
          </div>
        </section>
      </main>
    </EmployerShell>
  );
}
