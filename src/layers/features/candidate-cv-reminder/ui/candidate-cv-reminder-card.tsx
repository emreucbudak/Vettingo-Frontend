"use client";

import { useEffect, useState } from "react";
import { MdOutlineContactPage } from "react-icons/md";
import { getCandidateHasCv } from "../api/candidate-cv-api";

type CandidateCvReminderCardProps = {
  userId: string;
};

export function CandidateCvReminderCard({ userId }: CandidateCvReminderCardProps) {
  const [hasCv, setHasCv] = useState<boolean | null>(null);

  useEffect(() => {
    if (!userId) return;

    async function load() {
      try {
        setHasCv(await getCandidateHasCv(userId));
      } catch {
        setHasCv(null);
      }
    }

    void load();
  }, [userId]);

  if (!userId || hasCv !== false) {
    return null;
  }

  return (
    <section
      aria-labelledby="cv-reminder-title"
      className="mb-6 rounded border border-[#b4d9c6] bg-[#effaf3] p-5 md:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-[#d8efdf] text-[#006c49]">
          <MdOutlineContactPage aria-hidden="true" focusable="false" className="h-7 w-7" />
        </div>
        <div className="min-w-0">
          <h3 id="cv-reminder-title" className="text-xl font-semibold leading-7 text-[#0b1c30]">
            Henüz bir CV’n yok
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#45474c]">
            Kariyerinde yeni bir adım atmaya hazır mısın? Sana uygun iş fırsatlarını keşfetmek,
            Scout ağında işverenlerin karşısına çıkmak ve iş ilanlarında değerlendirmeye alınmak
            için hemen CV’ni doldur. Eğitimini, deneyimlerini ve yeteneklerini paylaşarak
            işverenlerin seni daha yakından tanımasını sağla, güçlü yönlerini öne çıkar ve
            hayalindeki işe uzanan iş arama yolculuğuna bugün başla.
          </p>
        </div>
      </div>
    </section>
  );
}
