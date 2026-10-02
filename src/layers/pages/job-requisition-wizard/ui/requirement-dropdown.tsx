"use client";

import { useEffect, useRef, useState } from "react";
import { MaterialIcon } from "@/shared/ui/material-icon";

type RequirementRow = { id: string; value: string; detail: string };
const fieldClass = "w-full rounded-lg border border-[#c5c6cd] bg-white px-4 py-2 text-sm text-[#0b1c30] outline-none focus:border-[#091426] focus:ring-1 focus:ring-[#091426]";
const departments = ["Bilgisayar Mühendisliği", "Yazılım Mühendisliği", "Elektrik-Elektronik Mühendisliği", "Endüstri Mühendisliği", "Makine Mühendisliği", "İşletme", "İktisat", "Matematik", "İstatistik", "Psikoloji", "Diğer"];

export function RequirementDropdown({ label, addLabel, name, options }: {
  label: string;
  addLabel: string;
  name: "education" | "skills";
  options: readonly string[];
}) {
  const isEducation = name === "education";
  const [rows, setRows] = useState<RequirementRow[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [degree, setDegree] = useState(options[0] ?? "");
  const [skill, setSkill] = useState("");
  const [years, setYears] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = previousOverflow; dialog.close(); };
    }
    dialog.close();
  }, [isOpen]);

  function addRow() {
    if (!isEducation && (!skill.trim() || (years !== "" && Number(years) < 0))) return;
    setRows((items) => [...items, {
      id: crypto.randomUUID(),
      value: isEducation ? "" : skill.trim(),
      detail: isEducation ? degree : years,
    }]);
    setSkill("");
    setYears("");
    setIsOpen(false);
  }

  function updateRow(id: string, field: "value" | "detail", value: string) {
    setRows((items) => items.map((item) => item.id === id ? { ...item, [field]: value } : item));
  }

  return (
    <>
      <details className="group rounded-lg border border-[#c5c6cd]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg p-4 text-sm font-semibold text-[#0b1c30] focus-visible:outline-[#091426] [&::-webkit-details-marker]:hidden">
          {label}
          <MaterialIcon className="text-[18px] transition-transform group-open:rotate-180">expand_more</MaterialIcon>
        </summary>
        <div className="border-t border-[#c5c6cd] p-4">
          <div className="flex justify-end">
            <button aria-haspopup="dialog" className="inline-flex items-center gap-1.5 rounded py-1 text-sm font-medium text-[#0d0093] hover:text-[#091426]" onClick={() => setIsOpen(true)} type="button">
              <MaterialIcon className="text-[16px]">add</MaterialIcon>
              {addLabel}
            </button>
          </div>
          <input name={name} type="hidden" value={rows.map((row) => isEducation ? `${row.value || "Bölüm seçilmedi"} — ${row.detail}` : `${row.value}${row.detail !== "" ? ` — ${row.detail} yıl` : ""}`).join("\n")} />
          <div className="mt-3 space-y-4">
            {rows.map((row) => (
              <div className="flex items-end gap-2" key={row.id}>
                <div className="grid min-w-0 flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase text-[#0b1c30]" htmlFor={`${name}-${row.id}-value`}>{isEducation ? "Üniversite Bölümü" : "Yetenek Adı"}</label>
                    {isEducation ? (
                      <div className="relative">
                        <select className={`${fieldClass} appearance-none pr-10`} id={`${name}-${row.id}-value`} onChange={(event) => updateRow(row.id, "value", event.target.value)} value={row.value}>
                          <option value="">Bölüm seçin</option>
                          {departments.map((department) => <option key={department}>{department}</option>)}
                        </select>
                        <MaterialIcon className="pointer-events-none absolute right-[14px] top-1/2 -translate-y-1/2 text-[18px]">expand_more</MaterialIcon>
                      </div>
                    ) : <input className={fieldClass} id={`${name}-${row.id}-value`} onChange={(event) => updateRow(row.id, "value", event.target.value)} placeholder="Yetenek adı" value={row.value} />}
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold uppercase text-[#0b1c30]" htmlFor={`${name}-${row.id}-detail`}>{isEducation ? "Eğitim Seviyesi" : "Tecrübe Yılı"}</label>
                    <input className={fieldClass} id={`${name}-${row.id}-detail`} min={isEducation ? undefined : "0"} onChange={(event) => updateRow(row.id, "detail", event.target.value)} placeholder={isEducation ? undefined : "Örn. 3"} readOnly={isEducation} step={isEducation ? undefined : "0.5"} type={isEducation ? "text" : "number"} value={row.detail} />
                  </div>
                </div>
                <button aria-label={`${label} satırını kaldır`} className="rounded p-2 text-[#45474c] hover:bg-[#eff4ff]" onClick={() => setRows((items) => items.filter((item) => item.id !== row.id))} type="button"><MaterialIcon className="text-[18px]">close</MaterialIcon></button>
              </div>
            ))}
          </div>
        </div>
      </details>

      <dialog aria-labelledby={`${name}-drawer-title`} className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-full max-w-md border-l border-[#c5c6cd] bg-[#f8f9ff] p-6 text-[#0b1c30] shadow-xl backdrop:bg-[#091426]/40 open:flex open:flex-col" onCancel={() => setIsOpen(false)} onKeyDown={(event) => {
        if (event.key === "Enter" && event.target instanceof HTMLInputElement && event.target.type !== "radio") {
          event.preventDefault();
          addRow();
        }
      }} ref={dialogRef}>
        <header className="mb-6 flex items-center justify-between gap-3 border-b border-[#c5c6cd] pb-4">
          <h2 className="text-xl font-semibold" id={`${name}-drawer-title`}>{addLabel}</h2>
          <button aria-label="Menüyü kapat" className="rounded p-2 hover:bg-[#eff4ff]" onClick={() => setIsOpen(false)} type="button"><MaterialIcon className="text-[20px]">close</MaterialIcon></button>
        </header>
        <div className="flex-1 space-y-5 overflow-y-auto">
          {isEducation ? (
            <div className="space-y-2">
              {options.map((option) => (
                <label className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-sm ${degree === option ? "border-[#091426] bg-[#eff4ff]" : "border-[#c5c6cd] bg-white"}`} key={option}>
                  <input checked={degree === option} name="education-level-choice" onChange={() => setDegree(option)} type="radio" value={option} />
                  {option}
                </label>
              ))}
            </div>
          ) : (
            <>
              <div>
                <label className="mb-2 block text-sm font-semibold" htmlFor="skill-drawer-name">Yetenek Adı</label>
                <input className={fieldClass} id="skill-drawer-name" list="skill-suggestions" onChange={(event) => setSkill(event.target.value)} placeholder="Yetenek adını yazın" value={skill} />
                <datalist id="skill-suggestions">{options.map((option) => <option key={option} value={option} />)}</datalist>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold" htmlFor="skill-drawer-years">Tecrübe Yılı</label>
                <input className={fieldClass} id="skill-drawer-years" min="0" onChange={(event) => setYears(event.target.value)} placeholder="Örn. 3" step="0.5" type="number" value={years} />
              </div>
            </>
          )}
        </div>
        <footer className="mt-6 flex justify-end border-t border-[#c5c6cd] pt-4">
          <button className="rounded-lg bg-[#091426] px-5 py-2 text-xs font-semibold uppercase text-white hover:bg-[#1e293b] disabled:opacity-50" disabled={!isEducation && (!skill.trim() || (years !== "" && Number(years) < 0))} onClick={addRow} type="button">Ekle</button>
        </footer>
      </dialog>
    </>
  );
}
