"use client";

import { useEffect } from "react";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  legalContent,
  type LegalDocument,
} from "../model/legal-content";

export function LegalModal({
  document,
  onClose,
}: {
  document: LegalDocument;
  onClose: () => void;
}) {
  const content = legalContent[document];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#091426]/45 px-4 py-6"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="relative max-h-[82vh] w-full max-w-lg overflow-y-auto rounded-lg border border-[#c5c6cd] bg-white p-6 shadow-[0_24px_80px_rgba(9,20,38,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Pencereyi kapat"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded border border-[#c5c6cd] text-[#45474c] transition-colors hover:bg-[#eff4ff] hover:text-[#091426]"
          onClick={onClose}
          type="button"
        >
          <MaterialIcon className="text-[18px]">close</MaterialIcon>
        </button>
        <h3 className="pr-10 text-xl font-semibold tracking-[-0.01em] text-[#091426]">
          {content.title}
        </h3>
        <div className="mt-4 space-y-4 text-sm leading-6 text-[#45474c]">
          {content.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
