import Image from "next/image";
import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  assistantInsights,
  requisitionForm,
  requisitionProfile,
  requisitionSteps,
} from "../model/job-requisition-data";

const inputClass =
  "w-full rounded-lg border border-[#c5c6cd] bg-white px-4 py-2 text-sm leading-5 text-[#0b1c30] outline-none transition-all placeholder:text-[#c5c6cd] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";

function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-[#c5c6cd] bg-white px-4 md:px-6">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold tracking-[-0.01em] text-[#091426]">
          {requisitionProfile.productName}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a className="rounded-lg px-2 py-1 text-sm leading-5 text-[#45474c] transition-colors hover:bg-[#eff4ff]" href={ROUTES.employer}>
          Switch to Employer
        </a>
        <button className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#eff4ff]" type="button">
          <MaterialIcon>notifications</MaterialIcon>
        </button>
        <button className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#eff4ff]" type="button">
          <MaterialIcon>settings</MaterialIcon>
        </button>
        <div className="h-8 w-8 overflow-hidden rounded-full border border-[#c5c6cd] bg-[#dce9ff]">
          <Image
            alt="User profile avatar"
            className="h-full w-full object-cover"
            height={32}
            src={requisitionProfile.avatarUrl}
            width={32}
          />
        </div>
      </div>
    </header>
  );
}

function Stepper() {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      {requisitionSteps.map((step, index) => (
        <div className="flex items-center gap-2" key={step.label}>
          <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.05em] ${step.active ? "text-[#091426]" : "text-[#45474c]"}`}>
            <div className={`flex h-6 w-6 items-center justify-center rounded-full ${step.active ? "bg-[#091426] text-white" : "border border-[#c5c6cd] text-[#45474c]"}`}>
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
      <div className="mb-1 flex items-center gap-2">
        <a className="flex items-center gap-1 text-sm leading-5 text-[#45474c] transition-colors hover:text-[#091426]" href={ROUTES.employer}>
          <MaterialIcon className="text-[16px]">arrow_back</MaterialIcon>
          Back to Requisitions
        </a>
      </div>
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
      <h2 className="mb-4 text-lg font-medium leading-6 text-[#091426]">Core Details</h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
            Job Title
          </label>
          <div className="relative">
            <input className={inputClass} defaultValue={requisitionForm.jobTitle} type="text" />
            <MaterialIcon className="absolute right-2 top-1/2 text-[#006c49] -translate-y-1/2">
              check_circle
            </MaterialIcon>
          </div>
          <p className="mt-1 flex items-center gap-1 text-[11px] font-medium leading-4 text-[#45474c]">
            <MaterialIcon className="text-[14px] text-[#0d0093]">auto_awesome</MaterialIcon>
            {requisitionForm.suggestionHint}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
              Department
            </label>
            <select className={inputClass} defaultValue={requisitionForm.departmentOptions[0]}>
              {requisitionForm.departmentOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
              Location Type
            </label>
            <select className={inputClass} defaultValue={requisitionForm.locationTypeOptions[0]}>
              {requisitionForm.locationTypeOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResponsibilitiesCard() {
  return (
    <section className="rounded-lg border border-[#c5c6cd] bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-lg font-medium leading-6 text-[#091426]">Key Responsibilities</h2>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
        Description
      </label>
      <textarea className={inputClass} defaultValue={requisitionForm.responsibilities} rows={4} />
    </section>
  );
}

function ActionRow() {
  return (
    <div className="mt-4 flex justify-end gap-2">
      <button className="rounded-lg border border-[#c5c6cd] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30] transition-colors hover:bg-[#eff4ff]" type="button">
        Save Draft
      </button>
      <button className="flex items-center gap-1 rounded-lg bg-[#091426] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#1e293b]" type="button">
        Continue
        <MaterialIcon className="text-[16px]">arrow_forward</MaterialIcon>
      </button>
    </div>
  );
}

function AssistantSidebar() {
  return (
    <aside className="hidden flex-col gap-4 lg:col-span-4 lg:flex">
      <div className="sticky top-24 rounded-lg border border-[#c5c6cd] bg-white p-4 shadow-sm">
        <div className="mb-4 flex items-center gap-2 border-b border-[#c5c6cd] pb-2">
          <MaterialIcon className="text-[24px] text-[#0d0093]">psychology</MaterialIcon>
          <h3 className="text-xl font-semibold leading-7 text-[#091426]">
            {assistantInsights.title}
          </h3>
        </div>
        <p className="mb-4 text-sm leading-5 text-[#45474c]">{assistantInsights.intro}</p>

        <div className="flex flex-col gap-2">
          <section className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-2">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
                Suggested Skills
              </span>
              <button className="flex items-center gap-[2px] text-[12px] text-[#0d0093] transition-colors hover:text-[#091426]" type="button">
                <MaterialIcon className="text-[14px]">add_circle</MaterialIcon>
                Add All
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {assistantInsights.skills.map((skill) => (
                <span className="inline-flex items-center gap-1 rounded-full bg-[#6cf8bb] px-2 py-[2px] text-[11px] font-medium leading-4 text-[#00714d]" key={skill}>
                  {skill}
                  <button className="material-symbols-outlined text-[12px] hover:text-[#091426]" type="button">
                    add
                  </button>
                </span>
              ))}
            </div>
          </section>

          <section className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-2">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
                Market Comp Range
              </span>
            </div>
            <div className="mt-1 text-sm leading-5 text-[#0b1c30]">
              {assistantInsights.compensation} <span className="text-[12px] text-[#45474c]">{assistantInsights.compensationUnit}</span>
            </div>
            <p className="mt-1 text-[11px] font-medium leading-4 text-[#45474c]">
              {assistantInsights.compensationNote}
            </p>
          </section>
        </div>
      </div>
    </aside>
  );
}

export function JobRequisitionWizardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff] text-[#0b1c30] antialiased">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <main className="flex flex-1 justify-center overflow-y-auto bg-[#f8f9ff] p-4 md:p-8">
          <div className="grid w-full max-w-[1440px] grid-cols-1 gap-8 lg:grid-cols-12">
            <section className="flex flex-col gap-6 lg:col-span-8">
              <PageIntro />
              <Stepper />
              <form className="flex flex-col gap-6">
                <CoreDetailsCard />
                <ResponsibilitiesCard />
                <ActionRow />
              </form>
            </section>
            <AssistantSidebar />
          </div>
        </main>
      </div>
    </div>
  );
}