import { ROUTES } from "@/shared/config/routes";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  parsedEducation,
  parsedExperiences,
  parsedResume,
  wizardSteps,
} from "../model/resume-upload-data";

function WizardStep({ step }: { step: (typeof wizardSteps)[number] }) {
  const stateClasses = {
    completed: "border-[#006c49] text-[#006c49]",
    active: "border-[#091426] font-semibold text-[#091426]",
    inactive: "border-[#c5c6cd] text-[#75777d]",
  } as const;

  return (
    <div className="flex flex-col items-center gap-2 bg-[#f8f9ff] px-2">
      <div className={`flex h-8 w-8 items-center justify-center rounded-full border-2 bg-[#f8f9ff] ${stateClasses[step.state]}`}>
        {step.state === "completed" ? (
          <MaterialIcon className="text-sm">{step.icon}</MaterialIcon>
        ) : (
          <span className="text-xs font-semibold uppercase tracking-[0.05em]">
            {step.value}
          </span>
        )}
      </div>
      <span className={`bg-[#f8f9ff] px-1 text-[11px] font-medium leading-4 ${stateClasses[step.state]}`}>
        {step.label}
      </span>
    </div>
  );
}

function WizardProgress() {
  return (
    <div className="relative mb-8 flex items-center justify-between">
      <div className="absolute left-0 top-1/2 -z-10 h-px w-full -translate-y-1/2 bg-[#c5c6cd]" />
      {wizardSteps.map((step) => (
        <WizardStep key={step.label} step={step} />
      ))}
    </div>
  );
}

function SummaryCard() {
  return (
    <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-4">
      <h2 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
        <MaterialIcon className="text-sm">person</MaterialIcon>
        Summary
      </h2>
      <p className="text-sm leading-6 text-[#0b1c30]">{parsedResume.summary}</p>
    </section>
  );
}

function SkillsCard() {
  return (
    <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-4">
      <h2 className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
        <MaterialIcon className="text-sm">bolt</MaterialIcon>
        Core Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {parsedResume.skills.map((skill) => (
          <span
            className={`flex items-center gap-1 rounded-full border px-3 py-1 text-[11px] font-medium leading-4 ${
              skill.highlighted
                ? "border-[#10b981] bg-[#dcfce7] text-[#10b981]"
                : "border-[#c5c6cd] bg-[#dce9ff] text-[#091426]"
            }`}
            key={skill.label}
          >
            {skill.highlighted && <MaterialIcon className="text-xs">auto_awesome</MaterialIcon>}
            {skill.label}
          </span>
        ))}
      </div>
    </section>
  );
}

function ExperienceCard() {
  return (
    <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
          <MaterialIcon className="text-sm">work</MaterialIcon>
          Professional Experience
        </h2>
        <button className="text-[11px] font-medium leading-4 text-[#091426] hover:underline" type="button">
          Edit
        </button>
      </div>

      <div className="space-y-6">
        {parsedExperiences.map((experience, index) => (
          <article
            className="relative pl-6 before:absolute before:left-[11px] before:top-2 before:bottom-[-24px] before:w-px before:bg-[#c5c6cd] last:before:hidden"
            key={`${experience.title}-${experience.period}`}
          >
            <div className={`absolute left-0 top-1.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border-2 ${experience.current ? "border-[#f8f9ff] bg-[#dce9ff]" : "border-[#c5c6cd] bg-white"}`}>
              {experience.current && <div className="h-2 w-2 rounded-full bg-[#091426]" />}
            </div>
            <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">
                {experience.title}
              </h3>
              <span className="text-[11px] font-medium leading-4 text-[#45474c]">
                {experience.period}
              </span>
            </div>
            <p className="mb-2 text-sm leading-5 text-[#091426]">
              {experience.company} - {experience.location}
            </p>
            <ul className="ml-4 list-outside list-disc space-y-1 text-sm leading-5 text-[#45474c]">
              {experience.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {index === parsedExperiences.length - 1 && null}
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationCard() {
  return (
    <section className="rounded border border-[#c5c6cd] bg-[#f8f9ff] p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
          <MaterialIcon className="text-sm">school</MaterialIcon>
          Education
        </h2>
        <button className="text-[11px] font-medium leading-4 text-[#091426] hover:underline" type="button">
          Edit
        </button>
      </div>
      <div>
        <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">
          {parsedEducation.degree}
        </h3>
        <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-5 text-[#45474c]">{parsedEducation.school}</p>
          <span className="text-[11px] font-medium leading-4 text-[#45474c]">
            {parsedEducation.period}
          </span>
        </div>
      </div>
    </section>
  );
}

function ParsedDataPanel() {
  return (
    <section className="mb-6 rounded border border-[#c5c6cd] bg-white p-6 md:p-8">
      <div className="mb-6">
        <h1 className="mb-1 text-xl font-semibold leading-7 text-[#091426]">
          Review Parsed Data
        </h1>
        <p className="text-sm leading-5 text-[#45474c]">
          Our AI has extracted the following information from your resume. Please verify its accuracy.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-6 md:col-span-1">
          <SummaryCard />
          <SkillsCard />
        </div>
        <div className="flex flex-col gap-6 md:col-span-2">
          <ExperienceCard />
          <EducationCard />
        </div>
      </div>
    </section>
  );
}

function ActionBar() {
  return (
    <div className="flex flex-col gap-4 border-t border-[#c5c6cd] pt-6 sm:flex-row sm:items-center sm:justify-between">
      <button className="rounded border border-[#091426] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#eff4ff]" type="button">
        Back
      </button>
      <div className="flex flex-col gap-2 sm:flex-row">
        <button className="rounded border border-[#c5c6cd] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c] transition-colors hover:bg-[#eff4ff]" type="button">
          Re-upload Resume
        </button>
        <button className="flex items-center justify-center gap-2 rounded bg-[#091426] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#1e293b]" type="button">
          Continue to Analysis
          <MaterialIcon className="text-sm">arrow_forward</MaterialIcon>
        </button>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-[#c5c6cd] bg-[#f8f9ff] px-4 md:px-6">
      <div className="text-2xl font-bold tracking-[-0.01em] text-[#091426]">Vettingo</div>
      <a
        className="flex items-center gap-2 rounded p-2 text-[#45474c] transition-colors hover:bg-[#eff4ff]"
        href={ROUTES.candidate}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.05em]">Save & Exit</span>
        <MaterialIcon>close</MaterialIcon>
      </a>
    </header>
  );
}

export function ResumeUploadWizardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f8f9ff] text-[#0b1c30] antialiased">
      <Header />
      <main className="flex flex-grow flex-col items-center justify-start px-4 pb-24 pt-8 md:px-8">
        <div className="w-full max-w-4xl">
          <WizardProgress />
          <ParsedDataPanel />
          <ActionBar />
        </div>
      </main>
    </div>
  );
}