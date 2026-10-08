"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { MdOutlineAdd, MdOutlineArrowBack, MdOutlineClose } from "react-icons/md";
import type { EmployerJob } from "@/entities/employer-recruiting/employer-recruiting-data";
import { ROUTES } from "@/shared/config/routes";
import { EmployerShell } from "@/widgets/employer/shell";

type SkillField = { id: number; value: string };

const fieldClass =
  "w-full rounded-lg border border-[#c5c6cd] bg-white px-4 py-3 text-sm leading-6 text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#006c49] focus:ring-1 focus:ring-[#006c49]";

export function EmployerJobEditPage({ job }: { job: EmployerJob }) {
  const [skills, setSkills] = useState<SkillField[]>([
    { id: 1, value: "" },
    { id: 2, value: "" },
    { id: 3, value: "" },
  ]);
  const nextSkillId = useRef(4);

  function addSkill() {
    const id = nextSkillId.current++;
    setSkills((items) => [...items, { id, value: "" }]);
  }

  return (
    <EmployerShell>
      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <Link
          className="mb-6 inline-flex items-center gap-2 rounded text-sm font-medium text-[#45474c] transition-colors hover:text-[#006c49] focus-visible:outline-[#006c49]"
          href={ROUTES.employerJobs}
        >
          <MdOutlineArrowBack aria-hidden="true" className="text-lg" />
          İlanlarıma dön
        </Link>

        <header className="mb-7 border-b border-[#c5c6cd] pb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]">
            İlan düzenle
          </p>
          <h1 className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-[#0b1c30] md:text-3xl md:leading-10">
            {job.title}
          </h1>
        </header>

        <div className="space-y-6">
          <section aria-labelledby="role-description-label" className="rounded-xl border border-[#c5c6cd] bg-white p-5 md:p-6">
            <h2 className="mb-4 text-lg font-semibold text-[#0b1c30]">
              <label htmlFor="role-description" id="role-description-label">Rolün tanımı</label>
            </h2>
            <textarea
              className={`${fieldClass} block min-h-64 resize-y`}
              id="role-description"
              name="description"
              placeholder="Rolün sorumluluklarını, beklentilerini ve çalışma kapsamını yazın..."
              rows={10}
            />
          </section>

          <section aria-labelledby="role-skills-heading" className="rounded-xl border border-[#c5c6cd] bg-white p-5 md:p-6">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-semibold text-[#0b1c30]" id="role-skills-heading">Yetenekler</h2>
              <button
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#c5c6cd] px-3 py-2 text-xs font-semibold text-[#006c49] transition-colors hover:bg-[#eff4ff] focus-visible:outline-[#006c49]"
                onClick={addSkill}
                type="button"
              >
                <MdOutlineAdd aria-hidden="true" className="text-lg" />
                Yetenek ekle
              </button>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill, index) => (
                <div className="flex min-w-0 items-center gap-2 rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-3" key={skill.id}>
                  <input
                    aria-label={`Yetenek ${index + 1}`}
                    className="min-w-0 flex-1 rounded border border-transparent bg-transparent px-2 py-2 text-sm text-[#0b1c30] outline-none placeholder:text-[#75777d] focus:border-[#006c49] focus:bg-white"
                    name="skills"
                    onChange={(event) => setSkills((items) => items.map((item) => item.id === skill.id ? { ...item, value: event.target.value } : item))}
                    placeholder="Yetenek adı"
                    type="text"
                    value={skill.value}
                  />
                  <button
                    aria-label={`Yetenek ${index + 1} kutusunu kaldır`}
                    className="shrink-0 rounded p-2 text-[#75777d] transition-colors hover:bg-[#eff4ff] hover:text-[#0b1c30] focus-visible:outline-[#006c49]"
                    onClick={() => setSkills((items) => items.filter((item) => item.id !== skill.id))}
                    type="button"
                  >
                    <MdOutlineClose aria-hidden="true" className="text-lg" />
                  </button>
                </div>
              ))}
            </div>
            {skills.length === 0 && <p className="text-sm text-[#75777d]">Bu rol için yetenek ekleyin.</p>}
          </section>
        </div>
      </main>
    </EmployerShell>
  );
}
