"use client";

import { CandidateShell } from "@/widgets/candidate/shell";
import { useId, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
import { IoAddOutline } from "react-icons/io5";

type CvEntry = {
  id: number;
  firstValue: string;
  secondValue: string;
};

type CvSectionProps = {
  title: string;
  addLabel: string;
  fields: readonly [string, string];
};

const cvSections: CvSectionProps[] = [
  {
    title: "Yetenekler",
    addLabel: "Yetenek Ekle",
    fields: ["Yetenek Adı", "Tecrübe Yılı"],
  },
  {
    title: "Eğitim",
    addLabel: "Eğitim Ekle",
    fields: ["Okul / Üniversite", "Bölüm / Program"],
  },
  {
    title: "Tecrübe",
    addLabel: "Tecrübe Ekle",
    fields: ["Şirket Adı", "Pozisyon / Görev"],
  },
  {
    title: "Dil",
    addLabel: "Dil Ekle",
    fields: ["Dil Adı", "Seviye (A1–C2)"],
  },
];

function CvSection({ title, addLabel, fields }: CvSectionProps) {
  const [expanded, setExpanded] = useState(false);
  const [entries, setEntries] = useState<CvEntry[]>([]);
  const nextId = useRef(0);
  const sectionId = useId();
  const headingId = `${sectionId}-heading`;
  const panelId = `${sectionId}-panel`;

  const addEntry = () => {
    const entry: CvEntry = {
      id: nextId.current++,
      firstValue: "",
      secondValue: "",
    };
    setEntries((previous) => [...previous, entry]);
  };

  const deleteEntry = (id: number) => {
    setEntries((previous) => previous.filter((entry) => entry.id !== id));
  };

  const updateEntry = (
    id: number,
    field: "firstValue" | "secondValue",
    value: string,
  ) => {
    setEntries((previous) =>
      previous.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry,
      ),
    );
  };

  return (
    <section
      aria-labelledby={headingId}
      className="w-full min-w-0 overflow-hidden rounded-md"
    >
      <div className="flex h-12 w-full items-center justify-between gap-2 bg-slate-200 px-3 sm:px-4">
        <h2 id={headingId} className="min-w-0 text-lg sm:text-xl">
          {title}
        </h2>
        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-blue-400"
          aria-label={`${title} alanını aç veya kapat`}
          aria-expanded={expanded}
          aria-controls={panelId}
          onClick={() => setExpanded((previous) => !previous)}
        >
          <IoIosArrowDropdown
            className={`h-6 w-6 transition-transform duration-300 motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>
      <div
        id={panelId}
        aria-hidden={!expanded}
        inert={!expanded}
        className={`w-full min-w-0 overflow-hidden transition-[height] duration-500 ease-in-out motion-reduce:transition-none ${expanded ? "h-96" : "h-0"}`}
      >
        <div className={`h-96 w-full min-w-0 overflow-y-auto overscroll-contain bg-white px-3 pb-3 pt-0 transition-transform duration-500 ease-in-out motion-reduce:transition-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-4 sm:pb-4 ${expanded ? "translate-y-0" : "-translate-y-96"}`}>
        <div className="flex justify-end">
          <button
            type="button"
            className="mb-3 flex min-h-11 items-center gap-1 rounded-md px-2 text-sm text-blue-400 focus-visible:outline-2 focus-visible:outline-blue-400 sm:text-base"
            onClick={addEntry}
          >
            <IoAddOutline className="h-5 w-5 shrink-0" aria-hidden="true" />
            {addLabel}
          </button>
        </div>
        <div className="flex w-full min-w-0 flex-col gap-3">
          {entries.map((entry, index) => (
            <div
              key={entry.id}
              className="grid min-w-0 grid-cols-[minmax(0,1fr)_2.75rem] items-center gap-3 rounded-md border border-slate-100 p-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_2.75rem] sm:p-4"
            >
              <input
                type="text"
                className="col-start-1 row-start-1 h-11 w-full min-w-0 rounded-md bg-slate-200 px-3 text-base focus-visible:outline-2 focus-visible:outline-blue-400"
                aria-label={`${title}, ${index + 1}. kayıt: ${fields[0]}`}
                placeholder={fields[0]}
                value={entry.firstValue}
                onChange={(event) =>
                  updateEntry(entry.id, "firstValue", event.target.value)
                }
              />
              <input
                type="text"
                className="col-start-1 row-start-2 h-11 w-full min-w-0 rounded-md bg-slate-200 px-3 text-base focus-visible:outline-2 focus-visible:outline-blue-400 sm:col-start-2 sm:row-start-1"
                aria-label={`${title}, ${index + 1}. kayıt: ${fields[1]}`}
                placeholder={fields[1]}
                value={entry.secondValue}
                onChange={(event) =>
                  updateEntry(entry.id, "secondValue", event.target.value)
                }
              />
              <button
                type="button"
                className="col-start-2 row-span-2 row-start-1 flex h-11 w-11 items-center justify-center rounded-md hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-red-400 sm:col-start-3 sm:row-span-1"
                aria-label={`${title}, ${index + 1}. kaydı sil`}
                onClick={() => deleteEntry(entry.id)}
              >
                <FaTrash className="h-4 w-4 text-red-400" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}

export function CreateCvPage() {
  return (
    <CandidateShell>
      <div className="grid w-full min-w-0 flex-1 grid-cols-1 content-start items-start gap-6 p-3 sm:p-6 lg:p-8 xl:grid-cols-2 xl:gap-8">
        <div className="flex w-full min-w-0 flex-col gap-4 xl:gap-6">
          {cvSections.map((section) => (
            <CvSection key={section.title} {...section} />
          ))}
        </div>
        <div
          role="img"
          aria-label="Boş CV sayfası önizlemesi"
          className="aspect-[210/297] w-full min-w-0 border border-slate-200 bg-white shadow-md"
        />
      </div>
    </CandidateShell>
  );
}
