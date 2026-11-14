"use client";

import {
  MdOutlineAdd,
  MdOutlineAddCircle,
  MdOutlineArrowForward,
  MdOutlineClose,
  MdOutlineDeleteOutline,
  MdOutlineExpandMore,
} from "react-icons/md";

import { Fragment, useId, useRef, useState } from "react";
import { RequirementDropdown } from "./requirement-dropdown";
import { EmployerShell } from "@/widgets/employer/shell";
import {
  assistantInsights,
  requisitionForm,
  requisitionSteps,
} from "@/entities/job-requisition";

const inputClass =
  "w-full rounded-lg border border-[#c5c6cd] bg-white px-4 py-2 text-sm leading-5 text-[#0b1c30] outline-none transition-all placeholder:text-[#c5c6cd] focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";

const scrollableStepCardClass =
  "h-[60svh] max-h-[600px] shrink-0 overflow-y-scroll rounded-lg border border-[#c5c6cd] bg-white p-6 shadow-sm scrollbar-none lg:h-[80svh]";

function Stepper({ activeStep }: { activeStep: number }) {
  return (
    <div className="mb-2 flex flex-wrap items-center justify-center gap-2 lg:col-span-full">
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
      <div className="flex flex-col gap-4">
        <RequirementDropdown addLabel="Eğitim Ekle" label="Eğitim" name="education" options={["Ön Lisans", "Lisans", "Yüksek Lisans", "Doktora"]} />
        <RequirementDropdown addLabel="Yetenek Ekle" label="Yetenekler" name="skills" />
      </div>
    </section>
  );
}

const stageOptions = ["Sınav", "Mülakat"] as const;

type StageType = (typeof stageOptions)[number];
type JobStage = { id: string; type: StageType; name: string; detail: string };

function JobFlowCard({ stages, onAddStage, onRemoveStage }: {
  stages: readonly JobStage[];
  onAddStage: (stage: JobStage) => void;
  onRemoveStage: (index: number) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [selectedStage, setSelectedStage] = useState<StageType | null>(null);
  const [stageName, setStageName] = useState("");
  const [stageDetail, setStageDetail] = useState("");
  const validDetail = selectedStage !== "Sınav" || !stageDetail ||
    (Number.isInteger(Number(stageDetail)) && Number(stageDetail) > 0);

  function selectStage(stage: StageType | null) {
    setSelectedStage(stage);
    setStageName("");
    setStageDetail("");
  }

  function addStage() {
    if (!selectedStage || !stageName.trim() || !validDetail) return;

    onAddStage({ id: crypto.randomUUID(), type: selectedStage, name: stageName.trim(), detail: stageDetail });
    dialogRef.current?.close();
  }

  return (
    <section className={scrollableStepCardClass}>
      <div className="flex justify-end">
        <button
          aria-haspopup="dialog"
          className="flex items-center gap-1.5 rounded-lg border border-[#c5c6cd] px-4 py-2 text-sm font-semibold text-[#091426] hover:bg-[#eff4ff]"
          onClick={() => dialogRef.current?.showModal()}
          type="button"
        >
          <MdOutlineAdd aria-hidden="true" />
          Aşama Ekle
        </button>
      </div>

      {stages.length > 0 && (
        <ol aria-label="İlan aşamaları" className="mt-4 space-y-2">
          {stages.map((stage, index) => (
            <li className="flex items-center gap-3 rounded-lg border border-[#c5c6cd] px-4 py-3 text-sm font-medium text-[#0b1c30]" key={stage.id ?? index}>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eff4ff] text-xs font-semibold">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1 break-words">
                <p>{stage.name}</p>
                <p className="mt-1 text-xs font-normal text-[#45474c]">
                  {stage.type}{stage.detail && (stage.type === "Sınav" ? ` · ${stage.detail} dk` : ` · ${stage.detail}`)}
                </p>
              </div>
              <button
                aria-label={`${index + 1}. aşamayı kaldır`}
                className="shrink-0 rounded bg-red-100 p-2 text-red-700 hover:bg-red-200 focus-visible:outline-[#091426]"
                onClick={() => onRemoveStage(index)}
                type="button"
              >
                <MdOutlineDeleteOutline aria-hidden="true" className="text-xl" />
              </button>
            </li>
          ))}
        </ol>
      )}

      <dialog
        aria-labelledby={titleId}
        className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-md overflow-y-auto border-l border-[#c5c6cd] bg-[#f8f9ff] p-6 text-[#0b1c30] shadow-xl backdrop:bg-[#091426]/40"
        onClose={() => selectStage(null)}
        onKeyDown={(event) => {
          if (event.key !== "Enter" || event.nativeEvent.isComposing || !(event.target instanceof HTMLInputElement)) return;
          event.preventDefault();
          addStage();
        }}
        ref={dialogRef}
      >
        <header className="mb-6 flex items-center justify-between gap-3 border-b border-[#c5c6cd] pb-4">
          <h2 className="text-xl font-semibold" id={titleId}>Aşama Ekle</h2>
          <button
            aria-label="Menüyü kapat"
            className="rounded p-2 hover:bg-[#eff4ff]"
            onClick={() => dialogRef.current?.close()}
            type="button"
          >
            <MdOutlineClose aria-hidden="true" className="text-xl" />
          </button>
        </header>
        <fieldset className="space-y-3">
          <legend className="mb-3 text-sm font-semibold">Aşama türü</legend>
          {stageOptions.map((label, index) => {
            const isOpen = selectedStage === label;
            const panelId = `${titleId}-stage-${index}`;

            return (
              <div className={`rounded-lg border bg-white ${isOpen ? "border-[#091426]" : "border-[#c5c6cd]"}`} key={label}>
                <button
                  aria-controls={panelId}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 rounded-lg p-3 text-left text-sm font-semibold hover:bg-[#eff4ff]"
                  onClick={() => selectStage(isOpen ? null : label)}
                  type="button"
                >
                  {label}
                  <MdOutlineExpandMore aria-hidden="true" className={`text-lg transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div hidden={!isOpen} id={panelId}>
                  {isOpen && (
                    <div className="space-y-4 border-t border-[#c5c6cd] p-3">
                      <label className="block text-sm font-medium">
                        {label} Adı
                        <input className={`mt-1 ${inputClass}`} onChange={(event) => setStageName(event.target.value)} type="text" value={stageName} />
                      </label>
                      {label === "Sınav" ? (
                        <label className="block text-sm font-medium">
                          Süre (dakika)
                          <input className={`mt-1 ${inputClass}`} aria-invalid={!validDetail} min={1} onChange={(event) => setStageDetail(event.target.value)} type="number" value={stageDetail} />
                        </label>
                      ) : (
                        <label className="block text-sm font-medium">
                          Mülakat Biçimi
                          <select className={`mt-1 ${inputClass}`} onChange={(event) => setStageDetail(event.target.value)} value={stageDetail}>
                            <option value="">Biçim seçin</option>
                            <option>Çevrim içi</option>
                            <option>Yüz yüze</option>
                          </select>
                        </label>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </fieldset>
        <div className="mt-6 flex justify-end border-t border-[#c5c6cd] pt-4">
          <button
            className="rounded-lg bg-[#091426] px-5 py-2 text-xs font-semibold uppercase text-white hover:bg-[#1e293b] disabled:opacity-50"
            disabled={!selectedStage || !stageName.trim() || !validDetail}
            onClick={addStage}
            type="button"
          >
            Ekle
          </button>
        </div>
      </dialog>
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
    <section className={scrollableStepCardClass}>
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
      {activeStep < requisitionSteps.length && <button className="flex items-center gap-1 rounded-lg bg-[#091426] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#1e293b]" type="submit">
        {activeStep === 3 ? "Sonraki adıma geç" : "Devam Et"}
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
  const [stages, setStages] = useState<JobStage[]>([]);
  const isFlowStep = activeStep === 3;
  const showAssistant = activeStep < 3;
  return (
    <Shell>
      <div className="flex flex-1 overflow-hidden">
        <main className="employer-dashboard-theme flex flex-1 justify-center overflow-y-auto bg-[#f8f9ff] p-4 md:p-8">
          <div className="grid w-full max-w-[1440px] grid-cols-1 content-start gap-8 lg:grid-cols-12">
            {embedded && (
              <div className="lg:col-span-8">
                <PageIntro />
              </div>
            )}
            <Stepper activeStep={activeStep} />
            <section className={`flex min-w-0 flex-col gap-6 lg:col-span-8 ${showAssistant ? "" : "lg:col-start-3"}`}>
              <form className="flex flex-col gap-6" onSubmit={(event) => {
                event.preventDefault();
                if (activeStep === 3) {
                  const data = new FormData(event.currentTarget);
                  setReviewValues(Object.fromEntries(Array.from(data.entries(), ([name, value]) => [name, String(value)])));
                }
                setActiveStep((step) => Math.min(step + 1, requisitionSteps.length));
              }}>
                <div className={activeStep === 1 ? "flex flex-col gap-6" : "hidden"}>
                  <CoreDetailsCard />
                  <ResponsibilitiesCard />
                </div>
                <div className={activeStep === 2 ? "block" : "hidden"}>
                  <RequirementsCard />
                </div>
                {isFlowStep && (
                  <JobFlowCard
                    onAddStage={(stage) => setStages((items) => [...items, stage])}
                    onRemoveStage={(index) => setStages((items) => items.filter((_, itemIndex) => itemIndex !== index))}
                    stages={stages}
                  />
                )}
                {activeStep === 4 && <ReviewCard values={reviewValues} />}
                <ActionRow activeStep={activeStep} onBack={() => setActiveStep((step) => Math.max(step - 1, 1))} />
              </form>
            </section>
            {showAssistant && <AssistantSidebar />}
          </div>
        </main>
      </div>
    </Shell>
  );
}

