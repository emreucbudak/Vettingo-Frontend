"use client";

import React, {useEffect, useState } from "react";
import {
  searchJobPostings,
  type EmploymentType,
  type ExperienceLevel,
  type JobPostingSearchDto,
  type JobSearchFilters,
  type WorkingModel,
} from "@/features/job-search";
import { CandidateShell } from "@/widgets/candidate/shell";
import { MaterialIcon } from "@/shared/ui/material-icon";

const selectClassName =
  "appearance-none rounded-full border border-[#c5c6cd] bg-white py-2 pl-3 pr-9 text-[11px] font-medium text-[#0b1c30] outline-none transition-colors hover:bg-[#eff4ff] focus:border-[#091426]";

const employmentTypeLabels: Record<EmploymentType, string> = {
  1: "Tam Zamanlı",
  2: "Yarı Zamanlı",
  3: "Staj",
  4: "Sözleşmeli",
};

const workingModelLabels: Record<WorkingModel, string> = {
  1: "İşyerinde",
  2: "Uzaktan",
  3: "Hibrit",
};

const experienceLevelLabels: Record<ExperienceLevel, string> = {
  1: "Stajyer",
  2: "Junior",
  3: "Mid",
  4: "Senior",
  5: "Lead",
};

type SearchFormState = {
  title: string;
  location: string;
  employmentType: "" | `${EmploymentType}`;
  workingModel: "" | `${WorkingModel}`;
  experienceLevel: "" | `${ExperienceLevel}`;
  salaryRange: "" | "0-50000" | "50000-100000" | "100000-150000" | "150000-";
};

const initialSearchForm: SearchFormState = {
  title: "",
  location: "",
  employmentType: "",
  workingModel: "",
  experienceLevel: "",
  salaryRange: "",
};

function toSearchFilters(form: SearchFormState): JobSearchFilters {
  const filters: JobSearchFilters = {
    title: form.title.trim() || undefined,
    location: form.location.trim() || undefined,
    employmentType: form.employmentType
      ? (Number(form.employmentType) as EmploymentType)
      : undefined,
    workingModel: form.workingModel
      ? (Number(form.workingModel) as WorkingModel)
      : undefined,
    experienceLevel: form.experienceLevel
      ? (Number(form.experienceLevel) as ExperienceLevel)
      : undefined,
  };

  if (form.salaryRange) {
    const [minimum, maximum] = form.salaryRange.split("-");
    filters.minSalary = Number(minimum);
    filters.maxSalary = maximum ? Number(maximum) : undefined;
  }

  return filters;
}

function SearchHero({
  form,
  isLoading,
  onChange,
  onReset,
  onSubmit,
}: {
  form: SearchFormState;
  isLoading: boolean;
  onChange: <Key extends keyof SearchFormState>(key: Key, value: SearchFormState[Key]) => void;
  onReset: () => void;
  onSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
}) {
  const hasFilters = Object.values(form).some(Boolean);

  return (
    <section className="mb-8">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center gap-2 rounded border border-[#c5c6cd] bg-[#f8f9ff] p-4 md:flex-row md:gap-4 md:p-6">
          <label className="flex w-full flex-1 items-center rounded border border-[#c5c6cd] bg-white px-2 py-2 transition-all focus-within:border-[#091426] focus-within:ring-1 focus-within:ring-[#091426]">
            <MaterialIcon className="mr-2 text-[#45474c]">search</MaterialIcon>
            <span className="sr-only">İş adı</span>
            <input
              className="w-full border-none bg-transparent p-0 text-sm text-[#0b1c30] outline-none placeholder:text-[#45474c]"
              onChange={(event) => onChange("title", event.target.value)}
              placeholder="İş unvanı veya anahtar kelime"
              type="text"
              value={form.title}
            />
          </label>
          <label className="flex w-full items-center rounded border border-[#c5c6cd] bg-white px-2 py-2 transition-all focus-within:border-[#091426] focus-within:ring-1 focus-within:ring-[#091426] md:w-1/3">
            <MaterialIcon className="mr-2 text-[#45474c]">location_on</MaterialIcon>
            <span className="sr-only">Lokasyon</span>
            <input
              className="w-full border-none bg-transparent p-0 text-sm text-[#0b1c30] outline-none placeholder:text-[#45474c]"
              onChange={(event) => onChange("location", event.target.value)}
              placeholder="Şehir veya bölge"
              type="text"
              value={form.location}
            />
          </label>
          <button
            className="flex w-full items-center justify-center rounded bg-[#091426] px-8 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60 md:w-auto"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? "Aranıyor..." : "İşleri Bul"}
          </button>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="relative inline-flex">
            <select
              aria-label="Maaş aralığı"
              className={selectClassName}
              onChange={(event) => onChange("salaryRange", event.target.value as SearchFormState["salaryRange"])}
              value={form.salaryRange}
            >
              <option value="">Maaş Aralığı</option>
              <option value="0-50000">0 - 50.000</option>
              <option value="50000-100000">50.000 - 100.000</option>
              <option value="100000-150000">100.000 - 150.000</option>
              <option value="150000-">150.000 ve üzeri</option>
            </select>
            <MaterialIcon className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-[18px] text-[#091426]">
              expand_more
            </MaterialIcon>
          </span>
          <span className="relative inline-flex">
            <select
              aria-label="İş türü"
              className={selectClassName}
              onChange={(event) => onChange("employmentType", event.target.value as SearchFormState["employmentType"])}
              value={form.employmentType}
            >
              <option value="">İş Türü</option>
              <option value="1">Tam Zamanlı</option>
              <option value="2">Yarı Zamanlı</option>
              <option value="3">Staj</option>
              <option value="4">Sözleşmeli</option>
            </select>
            <MaterialIcon className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-[18px] text-[#091426]">
              expand_more
            </MaterialIcon>
          </span>
          <span className="relative inline-flex">
            <select
              aria-label="Çalışma modeli"
              className={selectClassName}
              onChange={(event) => onChange("workingModel", event.target.value as SearchFormState["workingModel"])}
              value={form.workingModel}
            >
              <option value="">Çalışma Modeli</option>
              <option value="2">Uzaktan</option>
              <option value="1">İşyerinde</option>
              <option value="3">Hibrit</option>
            </select>
            <MaterialIcon className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-[18px] text-[#091426]">
              expand_more
            </MaterialIcon>
          </span>
          <span className="relative inline-flex">
            <select
              aria-label="Deneyim seviyesi"
              className={selectClassName}
              onChange={(event) => onChange("experienceLevel", event.target.value as SearchFormState["experienceLevel"])}
              value={form.experienceLevel}
            >
              <option value="">Deneyim Seviyesi</option>
              <option value="1">Stajyer</option>
              <option value="2">Junior</option>
              <option value="3">Mid</option>
              <option value="4">Senior</option>
              <option value="5">Lead</option>
            </select>
            <MaterialIcon className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-[18px] text-[#091426]">
              expand_more
            </MaterialIcon>
          </span>
          {hasFilters ? (
            <button
              className="rounded-full px-3 py-2 text-[11px] font-semibold text-[#45474c] hover:bg-[#eff4ff]"
              onClick={onReset}
              type="button"
            >
              Filtreleri Temizle
            </button>
          ) : null}
        </div>
      </form>
    </section>
  );
}

function formatPostedAt(createdAt: string) {
  const created = new Date(createdAt).getTime();
  const elapsedHours = Math.max(0, Math.floor((Date.now() - created) / 3_600_000));
  if (!Number.isFinite(created)) return "Yayın tarihi bilinmiyor";
  if (elapsedHours < 24) return `${Math.max(1, elapsedHours)} saat önce yayınlandı`;
  return `${Math.floor(elapsedHours / 24)} gün önce yayınlandı`;
}

function formatSalary(job: JobPostingSearchDto) {
  const formatter = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 });
  if (job.minSalary !== null && job.maxSalary !== null) {
    return `${formatter.format(job.minSalary)} - ${formatter.format(job.maxSalary)}`;
  }
  if (job.minSalary !== null) return `${formatter.format(job.minSalary)}+`;
  if (job.maxSalary !== null) return `${formatter.format(job.maxSalary)}'e kadar`;
  return "Maaş belirtilmedi";
}

function JobCard({ job }: { job: JobPostingSearchDto }) {
  return (
    <article className="group rounded border border-[#c5c6cd] bg-[#f8f9ff] p-4 transition-colors hover:bg-[#eff4ff]">
      <div className="mb-2 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded border border-[#c5c6cd] bg-[#dce9ff]">
            <span className="text-2xl font-bold text-[#091426]">{job.title.charAt(0)}</span>
          </div>
          <div>
            <h3 className="text-lg font-medium leading-6 text-[#091426] group-hover:underline">
              {job.title}
            </h3>
            <p className="text-sm leading-5 text-[#45474c]">
              Vettingo İş Ortağı - {job.location}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between gap-2 sm:flex-col sm:items-end">
          <span className="rounded-full bg-[#dce9ff] px-2 py-1 text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
            {workingModelLabels[job.workingModel]}
          </span>
          <span className="text-[11px] font-medium leading-4 text-[#45474c]">
            {formatPostedAt(job.createdAt)}
          </span>
        </div>
      </div>
      <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#0b1c30]">{job.description}</p>
      <div className="mt-4 flex flex-wrap gap-1">
        {[
          employmentTypeLabels[job.employmentType],
          experienceLevelLabels[job.experienceLevel],
          formatSalary(job),
        ].map((tag) => (
          <span
            className="rounded border border-[#c5c6cd] bg-[#e5eeff] px-2 py-1 text-[11px] font-medium text-[#45474c]"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

function JobList({
  error,
  isLoading,
  jobs,
}: {
  error: string | null;
  isLoading: boolean;
  jobs: JobPostingSearchDto[];
}) {
  return (
    <section className="flex flex-1 flex-col gap-4">
      <div className="mb-2 flex items-end justify-between border-b border-[#c5c6cd] pb-1">
        <h2 className="text-xl font-semibold leading-7 text-[#091426]">Arama Sonuçları</h2>
        <span className="text-[11px] font-medium uppercase tracking-wider text-[#45474c]">
          {isLoading ? "Yükleniyor" : `${jobs.length} ilan`}
        </span>
      </div>
      {error ? (
        <div className="rounded border border-[#ba1a1a] bg-[#ffdad6] px-4 py-3 text-sm text-[#93000a]" role="alert">
          {error}
        </div>
      ) : isLoading ? (
        [0, 1, 2].map((item) => (
          <div className="h-40 animate-pulse rounded border border-[#c5c6cd] bg-[#eff4ff]" key={item} />
        ))
      ) : jobs.length > 0 ? (
        jobs.map((job) => <JobCard job={job} key={job.id} />)
      ) : (
        <div className="rounded border border-dashed border-[#c5c6cd] bg-[#f8f9ff] px-6 py-12 text-center">
          <MaterialIcon className="text-4xl text-[#75777d]">search_off</MaterialIcon>
          <p className="mt-2 text-sm text-[#45474c]">Bu arama ve filtrelerle eşleşen ilan bulunamadı.</p>
        </div>
      )}
    </section>
  );
}

export function JobDiscoveryPage() {
  const [form, setForm] = useState<SearchFormState>(initialSearchForm);
  const [jobs, setJobs] = useState<JobPostingSearchDto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function runSearch(filters: JobSearchFilters) {
    setIsLoading(true);
    try {
      setJobs(await searchJobPostings(filters));
      setError(null);
    } catch (searchError) {
      setJobs([]);
      setError(searchError instanceof Error ? searchError.message : "İş ilanları aranamadı.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    const abortController = new AbortController();

    async function loadInitialJobs() {
      try {
        const results = await searchJobPostings({}, abortController.signal);
        if (!abortController.signal.aborted) {
          setJobs(results);
          setError(null);
        }
      } catch (searchError) {
        if (!abortController.signal.aborted) {
          setJobs([]);
          setError(searchError instanceof Error ? searchError.message : "İş ilanları aranamadı.");
        }
      } finally {
        if (!abortController.signal.aborted) setIsLoading(false);
      }
    }

    void loadInitialJobs();
    return () => abortController.abort();
  }, []);

  function updateForm<Key extends keyof SearchFormState>(key: Key, value: SearchFormState[Key]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    void runSearch(toSearchFilters(form));
  }

  function resetFilters() {
    setForm(initialSearchForm);
    void runSearch({});
  }

  return (
    <CandidateShell>
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 py-8 md:px-8">
        <SearchHero
          form={form}
          isLoading={isLoading}
          onChange={updateForm}
          onReset={resetFilters}
          onSubmit={handleSubmit}
        />
        <JobList error={error} isLoading={isLoading} jobs={jobs} />
      </main>
    </CandidateShell>
  );
}
