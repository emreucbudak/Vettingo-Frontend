"use client";

import { useState, type ReactNode } from "react";

type SettingsSection = {
  id: string;
  label: string;
  content?: ReactNode;
};

const sectionItemClass =
  "shrink-0 rounded-full px-2.5 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#091426] sm:px-5 sm:text-sm";
const activeSectionClass = `${sectionItemClass} bg-[#091426] text-white hover:bg-[#213145]`;
const inactiveSectionClass = `${sectionItemClass} text-[#091426] hover:bg-[#eff4ff]`;

export function SettingsSections({
  sections,
}: {
  sections: readonly [SettingsSection, ...SettingsSection[]];
}) {
  const [activeId, setActiveId] = useState(sections[0].id);
  const activeSection = sections.find(({ id }) => id === activeId) ?? sections[0];

  return (
    <>
      <div
        aria-label="Ayar bölümleri"
        className="mx-auto mb-6 flex w-fit max-w-full items-center gap-1 overflow-x-auto rounded-full border border-[#c5c6cd] bg-white p-1.5 shadow-sm"
        role="group"
      >
        {sections.map(({ id, label }) => {
          const isActive = id === activeSection.id;
          return (
            <button
              key={id}
              aria-pressed={isActive}
              className={isActive ? activeSectionClass : inactiveSectionClass}
              onClick={() => setActiveId(id)}
              type="button"
            >
              {label}
            </button>
          );
        })}
      </div>
      <div key={activeSection.id} className="mx-auto w-full max-w-3xl">
        {activeSection.content ?? (
          <section
            aria-label={activeSection.label}
            className="min-h-40 rounded border border-[#c5c6cd] bg-white"
          />
        )}
      </div>
    </>
  );
}
