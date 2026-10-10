"use client";

import { MdOutlineAdd, MdOutlineAddCircle, MdOutlineArrowForward, MdOutlineExpandMore } from "react-icons/md";

import { Fragment, useState } from "react";
import { RequirementDropdown } from "./requirement-dropdown";
import { EmployerShell } from "@/widgets/employer/shell";
import {
  assistantInsights,
  requisitionForm,
  requisitionSteps,
} from "@/entities/job-requisition";

const inputClass =
  "w-full rounded-lg border border-[#c5c6cd] bg-white px-4 py-2 text-sm leading-5 text-[#0b1c30] outline-none transition-all placeholder:text-[#c5c6cd] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";

function Stepper({ activeStep }: { activeStep: number }) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      {requisitionSteps.map((step, index) => (
        <div className="flex items-center gap-2" key={step.label}>
          <div aria-current={index + 1 === activeStep ? "step" : undefined} className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.05em] ${index + 1 === activeStep ? "text-[#091426]" : "text-[#45474c]"}`}>
            <div className={`flex h-6 w-6 items-center justify-center rounded-full ${index + 1 === activeStep ? "bg-[#091426] text-white" : "border border-[#c5c6cd] text-[#45474c]"}`}>
              {step.value}
            </div>
            <span>{step.label}</span>
          </div>
          {index < requisitionSteps.length - 1 && <div className="h-px w-8 bg-[#c5c6cd]" />}
        </div>
      ))}
    </div>
  );
}

function PageIntro() {
  return (
    <div className="mb-2">
      <h1 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#091426]">
        {requisitionForm.title}
      </h1>
      <p className="mt-1 text-base leading-6 text-[#45474c]">
        {requisitionForm.description}
      </p>
    </div>
  );
}

function CoreDetailsCard() {
  return (
    <section className="rounded-lg border border-[#c5c6cd] bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-medium leading-6 text-[#091426]">Temel Bilgiler</h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
            İş Unvanı
          </label>
          <input className={inputClass} defaultValue={requisitionForm.jobTitle} name="jobTitle" type="text" />
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
              Çalışma Türü
            </label>
            <div className="relative">
              <select className={`${inputClass} appearance-none pr-10`} defaultValue={requisitionForm.locationTypeOptions[0]} name="workingModel">
                {requisitionForm.locationTypeOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <MdOutlineExpandMore aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2 text-[18px] text-[#0b1c30]" />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]" htmlFor="job-salary">
              Maaş
            </label>
            <input className={inputClass} id="job-salary" min="0" name="salary" placeholder="Maaş tutarını girin" step="0.01" type="number" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ResponsibilitiesCard() {
  return (
    <section className="rounded-lg border border-[#c5c6cd] bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-medium leading-6 text-[#091426]">Temel Sorumluluklar</h2>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
        Açıklama
      </label>
      <textarea className={`${inputClass} h-40 resize-none`} defaultValue={requisitionForm.responsibilities} name="description" rows={7} />
    </section>
  );
}

function RequirementsCard() {
  return (
    <section className="rounded-lg border border-[#c5c6cd] bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-medium leading-6 text-[#091426]">Gereksinimler</h2>
      <div className="flex flex-col gap-4">
        <RequirementDropdown addLabel="Eğitim Ekle" label="Eğitim" name="education" options={["Ön Lisans", "Lisans", "Yüksek Lisans", "Doktora"]} />
        <RequirementDropdown addLabel="Yetenek Ekle" label="Yetenekler" name="skills" options={[...assistantInsights.skills, "İletişim", "Takım Çalışması", "Problem Çözme", "Proje Yönetimi", "Liderlik"]} />
      </div>
    </section>
  );
}

function ReviewCard({ values }: { values: Record<string, string> }) {
  const fields = [
    ["jobTitle", "İş Unvanı"],
    ["workingModel", "Çalışma Türü"],
    ["salary", "Maaş"],
    ["description", "Açıklama"],
    ["education", "Eğitim"],
    ["skills", "Yetenekler"],
  ];

  return (
    <section className="rounded-lg border border-[#c5c6cd] bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-medium leading-6 text-[#091426]">İnceleme ve Yayın</h2>
      <dl className="flex flex-col gap-5">
        {fields.map(([name, label]) => (
          <div key={name}>
            <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">{label}</dt>
            <dd className="whitespace-pre-wrap break-words text-sm leading-6 text-[#45474c]">{values[name]?.trim() || "Belirtilmedi"}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function ActionRow({ activeStep, onBack }: { activeStep: number; onBack: () => void }) {
  return (
    <div className="mt-4 flex justify-end gap-2">
      {activeStep > 1 && (
        <button className="rounded-lg border border-[#c5c6cd] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30] transition-colors hover:bg-[#eff4ff]" onClick={onBack} type="button">
          Geri
        </button>
      )}
      {activeStep < 3 && <button className="flex items-center gap-1 rounded-lg bg-[#091426] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#1e293b]" type="submit">
        Devam Et
        <MdOutlineArrowForward aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] text-[16px]" />
      </button>}
    </div>
  );
}

function AssistantSidebar() {
  return (
    <aside className="hidden flex-col gap-4 lg:col-span-4 lg:flex">
      <div className="sticky top-24 rounded-lg border border-[#c5c6cd] bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-2 border-b border-[#c5c6cd] pb-2">
          <h3 className="text-xl font-semibold leading-7 text-[#091426]">
            {assistantInsights.title}
          </h3>
        </div>

        <div className="flex flex-col gap-2">
          <section className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-2">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
                Önerilen Yetkinlikler
              </span>
              <button className="flex items-center gap-[2px] text-[12px] text-[#0d0093] transition-colors hover:text-[#091426]" type="button">
                <MdOutlineAddCircle aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] text-[14px]" />
                Tümünü Ekle
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {assistantInsights.skills.map((skill) => (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#6cf8bb] px-2 py-[2px] text-[11px] font-medium leading-4 text-[#00714d]" key={skill}>
                  {skill}
                  <button className="text-[12px] hover:text-[#091426]" type="button">
                    <MdOutlineAdd aria-hidden="true" focusable="false"  className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em]" />
                  </button>
                </span>
              ))}
            </div>
          </section>

          <section className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-2">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
                Pazar Ücret Aralığı
              </span>
            </div>
            <div className="mt-1 text-sm leading-5 text-[#0b1c30]">
              {assistantInsights.compensation} <span className="text-[12px] text-[#45474c]">{assistantInsights.compensationUnit}</span>
            </div>
          </section>
        </div>
      </div>
    </aside>
  );
}

export function JobRequisitionWizardPage({ embedded = false }: { embedded?: boolean }) {
  const Shell = embedded ? Fragment : EmployerShell;
  const [activeStep, setActiveStep] = useState(1);
  const [reviewValues, setReviewValues] = useState<Record<string, string>>({});
  return (
    <Shell>
      <div className="flex flex-1 overflow-hidden">
        <main className="employer-dashboard-theme flex flex-1 justify-center overflow-y-auto bg-[#f8f9ff] p-4 md:p-8">
          <div className="grid w-full max-w-[1440px] grid-cols-1 gap-8 lg:grid-cols-12">
            <section className="flex flex-col gap-6 lg:col-span-8">
              <PageIntro />
              <Stepper activeStep={activeStep} />
              <form className="flex flex-col gap-6" onSubmit={(event) => {
                event.preventDefault();
                if (activeStep === 2) {
                  const data = new FormData(event.currentTarget);
                  setReviewValues(Object.fromEntries(Array.from(data.entries(), ([name, value]) => [name, String(value)])));
                }
                setActiveStep((step) => Math.min(step + 1, 3));
              }}>
                <div className={activeStep === 1 ? "flex flex-col gap-6" : "hidden"}>
                  <CoreDetailsCard />
                  <ResponsibilitiesCard />
                </div>
                <div className={activeStep === 2 ? "block" : "hidden"}>
                  <RequirementsCard />
                </div>
                {activeStep === 3 && <ReviewCard values={reviewValues} />}
                <ActionRow activeStep={activeStep} onBack={() => setActiveStep((step) => Math.max(step - 1, 1))} />
              </form>
            </section>
            <AssistantSidebar />
          </div>
        </main>
      </div>
    </Shell>
  );
}

