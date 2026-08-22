"use client";

import { useMemo, useState, type FormEvent } from "react";
import {
  hrScoutCandidates,
  type HrScoutCandidate,
} from "@/entities/hr-dashboard";
import { HrAvatar } from "@/entities/hr-dashboard/ui";
import { MaterialIcon } from "@/shared/ui/material-icon";

const PAGE_SIZE = 5;

type ScoutFilters = {
  category: string;
  experience: string;
  location: string;
  query: string;
  workModel: string;
};

const emptyFilters: ScoutFilters = {
  category: "all",
  experience: "all",
  location: "",
  query: "",
  workModel: "all",
};

const fieldClassName =
  "w-full rounded border border-[#c5c6cd] bg-[#f8f9ff] px-3 py-2.5 text-sm text-[#0b1c30] outline-none transition-colors placeholder:text-[#75777d] focus:border-[#091426]";

function normalize(value: string) {
  return value.trim().toLocaleLowerCase("tr-TR");
}

function matchesExperience(candidate: HrScoutCandidate, filter: string) {
  if (filter === "junior") return candidate.experienceYears <= 3;
  if (filter === "mid") {
    return candidate.experienceYears >= 4 && candidate.experienceYears <= 6;
  }
  if (filter === "senior") return candidate.experienceYears >= 7;
  return true;
}

function availabilityTone(availability: HrScoutCandidate["availability"]) {
  if (availability === "Aktif arayışta") {
    return "text-[#006c49]";
  }

  if (availability === "Görüşmeye açık") {
    return "text-[#42358f]";
  }

  return "text-[#75777d]";
}

function matchTone(score: number) {
  if (score >= 90) return "bg-[#dcfce7] text-[#006c49]";
  if (score >= 84) return "bg-[#dce9ff] text-[#091426]";
  return "bg-[#eff4ff] text-[#45474c]";
}

export function HrScoutDirectory() {
  const [draftFilters, setDraftFilters] = useState<ScoutFilters>(emptyFilters);
  const [filters, setFilters] = useState<ScoutFilters>(emptyFilters);
  const [page, setPage] = useState(1);
  const [shortlistedIds, setShortlistedIds] = useState<Set<string>>(
    () => new Set(),
  );

  const filteredCandidates = useMemo(() => {
    const query = normalize(filters.query);
    const location = normalize(filters.location);

    return hrScoutCandidates.filter((candidate) => {
      const searchableText = normalize(
        [
          candidate.name,
          candidate.role,
          candidate.company,
          candidate.category,
          candidate.skills.join(" "),
        ].join(" "),
      );

      return (
        (!query || searchableText.includes(query)) &&
        (!location || normalize(candidate.location).includes(location)) &&
        (filters.category === "all" ||
          candidate.category === filters.category) &&
        (filters.workModel === "all" ||
          candidate.workModel === filters.workModel) &&
        matchesExperience(candidate, filters.experience)
      );
    });
  }, [filters]);

  const pageCount = Math.max(
    1,
    Math.ceil(filteredCandidates.length / PAGE_SIZE),
  );
  const pageStart = (page - 1) * PAGE_SIZE;
  const visibleCandidates = filteredCandidates.slice(
    pageStart,
    pageStart + PAGE_SIZE,
  );
  const visibleStart = filteredCandidates.length === 0 ? 0 : pageStart + 1;
  const visibleEnd = Math.min(
    pageStart + PAGE_SIZE,
    filteredCandidates.length,
  );

  function updateFilter<Key extends keyof ScoutFilters>(
    key: Key,
    value: ScoutFilters[Key],
  ) {
    setDraftFilters((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFilters(draftFilters);
    setPage(1);
  }

  function clearFilters() {
    setDraftFilters(emptyFilters);
    setFilters(emptyFilters);
    setPage(1);
  }

  function toggleShortlist(candidateId: string) {
    setShortlistedIds((current) => {
      const next = new Set(current);

      if (next.has(candidateId)) {
        next.delete(candidateId);
      } else {
        next.add(candidateId);
      }

      return next;
    });
  }

  return (
    <>
      <section className="mb-8 rounded border border-[#c5c6cd] bg-[#eff4ff] p-4 md:p-6">
        <div className="mb-5 flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#dce9ff] text-[#091426]">
            <MaterialIcon className="text-[22px]">binoculars</MaterialIcon>
          </span>
          <div>
            <h2 className="text-lg font-semibold text-[#0b1c30]">
              Yetenek Araması
            </h2>
            <p className="mt-1 text-xs leading-5 text-[#45474c]">
              Aradığın rolü, yetkinliği ve lokasyonu tanımlayarak uygun
              profilleri daralt.
            </p>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.06em] text-[#45474c]">
                Rol, yetkinlik veya aday
              </span>
              <span className="relative block">
                <MaterialIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[19px] text-[#75777d]">
                  search
                </MaterialIcon>
                <input
                  className={`${fieldClassName} pl-10`}
                  onChange={(event) => updateFilter("query", event.target.value)}
                  placeholder="Örn. React, ürün tasarımcısı, Derya"
                  type="search"
                  value={draftFilters.query}
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.06em] text-[#45474c]">
                Lokasyon
              </span>
              <input
                className={fieldClassName}
                onChange={(event) =>
                  updateFilter("location", event.target.value)
                }
                placeholder="Şehir ara"
                type="search"
                value={draftFilters.location}
              />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_auto_auto] xl:items-end">
            <label className="block">
              <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.06em] text-[#45474c]">
                Uzmanlık alanı
              </span>
              <select
                className={fieldClassName}
                onChange={(event) =>
                  updateFilter("category", event.target.value)
                }
                value={draftFilters.category}
              >
                <option value="all">Tüm alanlar</option>
                <option value="Mühendislik">Mühendislik</option>
                <option value="Ürün & Tasarım">Ürün & Tasarım</option>
                <option value="Veri">Veri</option>
                <option value="Satış">Satış</option>
                <option value="İnsan Kaynakları">İnsan Kaynakları</option>
                <option value="Pazarlama">Pazarlama</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.06em] text-[#45474c]">
                Deneyim
              </span>
              <select
                className={fieldClassName}
                onChange={(event) =>
                  updateFilter("experience", event.target.value)
                }
                value={draftFilters.experience}
              >
                <option value="all">Tüm seviyeler</option>
                <option value="junior">0–3 yıl</option>
                <option value="mid">4–6 yıl</option>
                <option value="senior">7+ yıl</option>
              </select>
            </label>

            <label className="block sm:col-span-2 xl:col-span-1">
              <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.06em] text-[#45474c]">
                Çalışma modeli
              </span>
              <select
                className={fieldClassName}
                onChange={(event) =>
                  updateFilter("workModel", event.target.value)
                }
                value={draftFilters.workModel}
              >
                <option value="all">Tüm modeller</option>
                <option value="Hibrit">Hibrit</option>
                <option value="Uzaktan">Uzaktan</option>
                <option value="Ofis">Ofis</option>
              </select>
            </label>

            <button
              className="inline-flex h-[42px] items-center justify-center gap-2 rounded bg-[#091426] px-5 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-colors hover:bg-[#172d49]"
              type="submit"
            >
              <MaterialIcon className="text-[18px]">search</MaterialIcon>
              Aday Ara
            </button>
            <button
              className="inline-flex h-[42px] items-center justify-center gap-2 rounded border border-[#9aa6bc] bg-[#f8f9ff] px-4 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#dce9ff]"
              onClick={clearFilters}
              type="button"
            >
              Temizle
            </button>
          </div>
        </form>
      </section>

      <section>
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#006c49]">
              Scout Sonuçları
            </p>
            <h2 className="mt-1 text-xl font-semibold text-[#0b1c30]">
              Keşfedilen Adaylar
            </h2>
          </div>
          <p
            aria-live="polite"
            className="text-xs font-medium text-[#45474c]"
          >
            {filteredCandidates.length} uygun profil bulundu
          </p>
        </div>

        <div className="overflow-hidden rounded border border-[#c5c6cd] bg-[#f8f9ff]">
          <div className="hidden grid-cols-12 gap-3 border-b border-[#c5c6cd] bg-[#eff4ff] px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.07em] text-[#45474c] xl:grid">
            <span className="col-span-3">Aday</span>
            <span className="col-span-2">Güncel Rol</span>
            <span className="col-span-2">Yetkinlikler</span>
            <span className="col-span-2">Lokasyon</span>
            <span className="col-span-1">Eşleşme</span>
            <span className="col-span-2 text-right">Aksiyon</span>
          </div>

          {visibleCandidates.length > 0 ? (
            <div className="divide-y divide-[#c5c6cd]">
              {visibleCandidates.map((candidate) => {
                const isShortlisted = shortlistedIds.has(candidate.id);

                return (
                  <article
                    className="grid grid-cols-1 gap-4 px-5 py-5 transition-colors hover:bg-[#eff4ff] xl:grid-cols-12 xl:items-center xl:gap-3 xl:px-6"
                    key={candidate.id}
                  >
                    <div className="flex items-center gap-3 xl:col-span-3">
                      <HrAvatar initials={candidate.initials} />
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-[#0b1c30]">
                          {candidate.name}
                        </h3>
                        <p className="mt-1 truncate text-[11px] text-[#75777d]">
                          {candidate.source}
                        </p>
                      </div>
                    </div>

                    <div className="xl:col-span-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#75777d] xl:hidden">
                        Güncel Rol
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#0b1c30] xl:mt-0">
                        {candidate.role}
                      </p>
                      <p className="mt-1 text-[11px] text-[#75777d]">
                        {candidate.company} · {candidate.experienceYears} yıl
                      </p>
                    </div>

                    <div className="xl:col-span-2">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#75777d] xl:hidden">
                        Yetkinlikler
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {candidate.skills.map((skill) => (
                          <span
                            className="rounded bg-[#eff4ff] px-2 py-1 text-[10px] font-medium text-[#45474c]"
                            key={skill}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="xl:col-span-2">
                      <p className="text-sm font-medium text-[#0b1c30]">
                        {candidate.location} · {candidate.workModel}
                      </p>
                      <p
                        className={`mt-1 text-[11px] font-medium ${availabilityTone(candidate.availability)}`}
                      >
                        {candidate.availability}
                      </p>
                    </div>

                    <div className="xl:col-span-1">
                      <span
                        className={`inline-flex min-w-12 justify-center rounded px-2 py-1 text-sm font-semibold ${matchTone(candidate.matchScore)}`}
                      >
                        %{candidate.matchScore}
                      </span>
                    </div>

                    <div className="flex xl:col-span-2 xl:justify-end">
                      <button
                        aria-label={`${candidate.name} adayını ${isShortlisted ? "kısa listeden çıkar" : "kısa listeye al"}`}
                        aria-pressed={isShortlisted}
                        className={`inline-flex items-center justify-center gap-2 rounded border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.05em] transition-colors ${
                          isShortlisted
                            ? "border-[#34d399] bg-[#dcfce7] text-[#006c49]"
                            : "border-[#9aa6bc] bg-[#f8f9ff] text-[#091426] hover:bg-[#dce9ff]"
                        }`}
                        onClick={() => toggleShortlist(candidate.id)}
                        type="button"
                      >
                        <MaterialIcon className="text-[16px]">
                          {isShortlisted ? "check" : "person_add"}
                        </MaterialIcon>
                        {isShortlisted ? "Kısa Listede" : "Listeye Al"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="px-6 py-14 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eff4ff] text-[#75777d]">
                <MaterialIcon className="text-[25px]">search</MaterialIcon>
              </span>
              <h3 className="mt-4 text-base font-semibold text-[#0b1c30]">
                Eşleşen aday bulunamadı
              </h3>
              <p className="mt-1 text-sm text-[#45474c]">
                Arama terimini veya filtreleri değiştirerek yeniden dene.
              </p>
            </div>
          )}

          <div className="flex flex-col gap-4 border-t border-[#c5c6cd] bg-[#eff4ff] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-[#45474c]">
              <span className="font-semibold text-[#0b1c30]">
                {visibleStart}–{visibleEnd}
              </span>{" "}
              / {filteredCandidates.length} aday
            </p>

            <nav
              aria-label="Scout sonuçları sayfalama"
              className="flex items-center gap-1.5"
            >
              <button
                aria-label="Önceki sayfa"
                className="inline-flex h-9 items-center justify-center gap-1 rounded border border-[#9aa6bc] bg-[#f8f9ff] px-2.5 text-xs font-semibold text-[#091426] transition-colors hover:bg-[#dce9ff] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-[#f8f9ff]"
                disabled={page === 1}
                onClick={() => setPage((current) => Math.max(1, current - 1))}
                type="button"
              >
                <MaterialIcon className="text-[17px]">chevron_left</MaterialIcon>
                <span className="hidden sm:inline">Önceki</span>
              </button>

              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    aria-current={page === pageNumber ? "page" : undefined}
                    aria-label={`${pageNumber}. sayfaya git`}
                    className={`h-9 min-w-9 rounded border px-2 text-xs font-semibold transition-colors ${
                      page === pageNumber
                        ? "border-[#091426] bg-[#091426] text-white"
                        : "border-[#9aa6bc] bg-[#f8f9ff] text-[#091426] hover:bg-[#dce9ff]"
                    }`}
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    type="button"
                  >
                    {pageNumber}
                  </button>
                ),
              )}

              <button
                aria-label="Sonraki sayfa"
                className="inline-flex h-9 items-center justify-center gap-1 rounded border border-[#9aa6bc] bg-[#f8f9ff] px-2.5 text-xs font-semibold text-[#091426] transition-colors hover:bg-[#dce9ff] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-[#f8f9ff]"
                disabled={page === pageCount}
                onClick={() =>
                  setPage((current) => Math.min(pageCount, current + 1))
                }
                type="button"
              >
                <span className="hidden sm:inline">Sonraki</span>
                <MaterialIcon className="text-[17px]">
                  chevron_right
                </MaterialIcon>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
