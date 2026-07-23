"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { useCandidateEvaluationAnalysis, type EvaluationCategory } from "@/features/candidate-analysis";
import { getAuthToken, getTokenSessionUser, isTokenExpired } from "@/shared/auth";
import { DashboardShell } from "@/shared/ui/dashboard-shell";
import { MaterialIcon } from "@/shared/ui/material-icon";
import {
  analysisFooterLinks,
  analysisNavigationItems,
  analysisProfile,
  analysisUtilityItems,
  candidateDetails,
  certifications,
  educationItems,
  experienceTimeline,
} from "@/entities/candidate-analysis";

const subscribeToBrowserState = () => () => undefined;
const getServerToken = (): string | null => null;

function BreadcrumbActions() {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-2 text-sm leading-5 text-[#45474c]">
        <a className="transition-colors hover:text-[#091426]" href="#">
          Başvurular
        </a>
        <MaterialIcon className="text-[16px]">chevron_right</MaterialIcon>
        <a className="transition-colors hover:text-[#091426]" href="#">
          Kıdemli Ürün Yöneticisi
        </a>
        <MaterialIcon className="text-[16px]">chevron_right</MaterialIcon>
        <span className="font-semibold text-[#0b1c30]">{candidateDetails.name}</span>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button className="flex items-center justify-center gap-2 rounded border border-[#75777d] bg-[#f8f9ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#eff4ff]">
          <MaterialIcon className="text-[18px]">download</MaterialIcon>
          PDF Dışa Aktar
        </button>
        <button className="rounded bg-[#091426] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90">
          Mülakat Planla
        </button>
      </div>
    </div>
  );
}

function CandidateHeader({
  evaluationCount,
  isLoading,
  overallScore,
}: {
  evaluationCount: number;
  isLoading: boolean;
  overallScore: number;
}) {
  return (
    <section className="mb-8 flex flex-col items-start gap-6 rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6 md:flex-row md:items-center">
      <Image
        alt="Aday fotoğrafı"
        className="h-24 w-24 rounded-full border-2 border-[#dce9ff] object-cover"
        height={96}
        src={candidateDetails.photoUrl}
        width={96}
      />

      <div className="flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-4">
          <h2 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
            {candidateDetails.name}
          </h2>
          <span className="flex items-center gap-1 rounded-full bg-[#dcfce7] px-4 py-1 text-[11px] font-medium leading-4 text-[#10b981]">
            <span className="h-2 w-2 rounded-full bg-[#10b981]" />
            {isLoading
              ? "Puan yükleniyor"
              : evaluationCount > 0
                ? `%${overallScore} Evaluation Puanı`
                : "Değerlendirme yok"}
          </span>
        </div>
        <p className="mb-4 text-lg font-medium leading-6 text-[#45474c]">
          {candidateDetails.title}
        </p>
        <div className="flex flex-wrap gap-6 text-sm leading-5 text-[#45474c]">
          {[
            { icon: "location_on", label: candidateDetails.location },
            { icon: "mail", label: candidateDetails.email },
            { icon: "work_history", label: candidateDetails.experience },
          ].map((item) => (
            <div className="flex items-center gap-1" key={item.icon}>
              <MaterialIcon className="text-[18px]">{item.icon}</MaterialIcon>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full min-w-[200px] flex-col gap-2 md:w-auto">
        <div className="flex items-center justify-between rounded border border-[#c5c6cd] bg-[#eff4ff] p-2">
          <span className="text-[11px] font-medium leading-4 text-[#45474c]">
            Current Durum
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
            <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
            {candidateDetails.status}
          </span>
        </div>
        <div className="flex items-center justify-between rounded border border-[#c5c6cd] bg-[#eff4ff] p-2">
          <span className="text-[11px] font-medium leading-4 text-[#45474c]">
            Beklenen Maaş
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
            {candidateDetails.expectedSalary}
          </span>
        </div>
      </div>
    </section>
  );
}

function ÖzetList({
  title,
  items,
  icon,
  iconClassName,
}: {
  title: string;
  items: readonly string[];
  icon: string;
  iconClassName: string;
}) {
  return (
    <div className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-4">
      <h4 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
        {title}
      </h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li className="flex items-start gap-1 text-sm leading-5 text-[#0b1c30]" key={item}>
            <MaterialIcon className={`mt-[2px] text-[16px] ${iconClassName}`}>
              {icon}
            </MaterialIcon>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExecutiveSummaryCard({
  isLoading,
  risks,
  strengths,
  summary,
}: {
  isLoading: boolean;
  risks: string[];
  strengths: string[];
  summary: string;
}) {
  const visibleStrengths = strengths.length > 0
    ? strengths
    : ["Henüz güçlü yön değerlendirmesi bulunmuyor."];
  const visibleRisks = risks.length > 0
    ? risks
    : ["Henüz risk değerlendirmesi bulunmuyor."];

  return (
    <section className="flex flex-col rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6 lg:col-span-2">
      <div className="mb-4 flex items-center gap-2 border-b border-[#c5c6cd] pb-2">
        <MaterialIcon className="text-[#040057]">psychology</MaterialIcon>
        <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">
          Evaluation Service Özeti
        </h3>
      </div>
      <p className="flex-1 text-sm leading-6 text-[#45474c]">
        {isLoading ? "Aday değerlendirmeleri yükleniyor..." : summary}
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ÖzetList
          icon="check_circle"
          iconClassName="text-[#10b981]"
          items={visibleStrengths}
          title="Temel Güçlü Yönler"
        />
        <ÖzetList
          icon="warning"
          iconClassName="text-[#f59e0b]"
          items={visibleRisks}
          title="Gelişime Açık Alanlar"
        />
      </div>
    </section>
  );
}

function SuitabilityScoreCard({
  categories,
  isLoading,
  overallScore,
}: {
  categories: EvaluationCategory[];
  isLoading: boolean;
  overallScore: number;
}) {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_#d8e3fb,_transparent_70%)] opacity-40" />
      <h3 className="relative z-10 mb-1 text-lg font-medium leading-6 text-[#0b1c30]">
        Role Uygunluk
      </h3>
      <p className="relative z-10 mb-6 text-[11px] font-medium leading-4 text-[#45474c]">
        İş tanımı semantik eşleşmesine göre
      </p>

      <div className="relative z-10 mb-4 flex h-32 w-32 items-center justify-center">
        <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
          <path
            className="stroke-[#d3e4fe]"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            strokeWidth="3"
          />
          <path
            className="stroke-[#006c49]"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            strokeDasharray={`${overallScore}, 100`}
            strokeWidth="3"
          />
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-3xl font-semibold leading-none tracking-[-0.02em] text-[#0b1c30]">
            {overallScore}
          </span>
          <span className="text-[11px] font-medium leading-4 text-[#45474c]">%</span>
        </div>
      </div>

      <div className="relative z-10 mt-auto w-full space-y-2">
        {isLoading ? (
          <div className="h-14 animate-pulse rounded bg-[#dce9ff]" />
        ) : categories.length > 0 ? (
          categories.map((score) => (
            <div key={score.label}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
                  {score.label}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
                  {score.value}%
                </span>
              </div>
              <div className="mt-1 h-1.5 w-full rounded-full bg-[#d3e4fe]">
                <div
                  className="h-1.5 rounded-full bg-[#006c49]"
                  style={{ width: `${score.value}%` }}
                />
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-[#45474c]">Yetkinlik puanı bulunmuyor.</p>
        )}
      </div>
    </section>
  );
}

function ExperienceCard() {
  return (
    <section className="rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6">
      <div className="mb-6 flex items-center gap-2 border-b border-[#c5c6cd] pb-2">
        <MaterialIcon className="text-[#091426]">work</MaterialIcon>
        <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">
          Profesyonel Deneyim
        </h3>
      </div>
      <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-[#d3e4fe]">
        {experienceTimeline.map((item) => (
          <article className="relative pl-8" key={`${item.title}-${item.period}`}>
            <div className={`absolute left-0 top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-[#f8f9ff] ${item.current ? "border-[#091426]" : "border-[#c5c6cd]"}`}>
              {item.current && <div className="h-2 w-2 rounded-full bg-[#091426]" />}
            </div>
            <div className="mb-1 flex flex-col">
              <h4 className="text-lg font-medium leading-6 text-[#0b1c30]">{item.title}</h4>
              <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
                {item.company} - {item.period}
              </span>
            </div>
            <p className="mb-2 text-sm leading-5 text-[#45474c]">{item.description}</p>
            <div className="flex flex-wrap gap-1">
              {item.tags.map((tag) => (
                <span className="rounded border border-[#c5c6cd] bg-[#eff4ff] px-2 py-1 text-[10px] font-semibold text-[#45474c]" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationCard() {
  return (
    <section className="flex flex-col gap-6 rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6">
      <div>
        <div className="mb-6 flex items-center gap-2 border-b border-[#c5c6cd] pb-2">
          <MaterialIcon className="text-[#091426]">school</MaterialIcon>
          <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">Eğitim</h3>
        </div>
        <ul className="space-y-4">
          {educationItems.map((item) => (
            <li className="flex items-start gap-4" key={item.title}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#c5c6cd] bg-[#eff4ff]">
                <MaterialIcon className="text-[#45474c]">{item.icon}</MaterialIcon>
              </div>
              <div>
                <h4 className="text-lg font-medium leading-6 text-[#0b1c30]">{item.title}</h4>
                <p className="text-sm leading-5 text-[#45474c]">{item.school}</p>
                <p className="mt-1 text-[11px] font-medium leading-4 text-[#45474c]">
                  {item.period}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <div className="mb-4 flex items-center gap-2 border-b border-[#c5c6cd] pb-2">
          <MaterialIcon className="text-[#091426]">workspace_premium</MaterialIcon>
          <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">Sertifikalar</h3>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {certifications.map((certification) => (
            <div className="flex items-center gap-2 rounded border border-[#c5c6cd] bg-[#eff4ff] p-2" key={certification}>
              <MaterialIcon className="text-[16px] text-[#091426]">verified</MaterialIcon>
              <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
                {certification}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardFooter() {
  return (
    <footer className="mt-auto flex flex-col gap-4 border-t border-[#c5c6cd] bg-[#f8f9ff] px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8">
      <span className="text-xs font-bold uppercase tracking-[0.05em] text-[#45474c]">
        (c) 2026 Vettingo. Tüm hakları saklıdır.
      </span>
      <div className="flex flex-wrap gap-4">
        {analysisFooterLinks.map((link) => (
          <a className="text-[11px] font-medium leading-4 text-[#45474c] transition-colors hover:text-[#091426]" href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}

export function CandidateAnalysisPage({ candidateId }: { candidateId: string | null }) {
  const token = useSyncExternalStore<string | null>(
    subscribeToBrowserState,
    getAuthToken,
    getServerToken,
  );
  const sessionUser = token && !isTokenExpired(token) ? getTokenSessionUser(token) : null;
  const resolvedCandidateId = candidateId ?? sessionUser?.id ?? null;
  const {
    categories,
    error,
    evaluationCount,
    isLoading,
    overallScore,
    risks,
    strengths,
    summary,
  } = useCandidateEvaluationAnalysis(resolvedCandidateId);

  return (
    <DashboardShell
      navigationItems={analysisNavigationItems}
      sidebarSubtitle={analysisProfile.edition}
      sidebarTitle={analysisProfile.companyLabel}
      topBarLeading={
        <button
          aria-label="Menüyü aç"
          className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#eff4ff] md:hidden"
          type="button"
        >
          <MaterialIcon>menu</MaterialIcon>
        </button>
      }
      utilityItems={analysisUtilityItems}
    >
      <main className="candidate-analysis-theme mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8">
        <BreadcrumbActions />
        {error ? (
          <div
            className="mb-6 rounded border border-[#ba1a1a] bg-[#ffdad6] px-4 py-3 text-sm text-[#93000a]"
            role="alert"
          >
            {error}
          </div>
        ) : null}
        <CandidateHeader
          evaluationCount={evaluationCount}
          isLoading={isLoading}
          overallScore={overallScore}
        />

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ExecutiveSummaryCard
            isLoading={isLoading}
            risks={risks}
            strengths={strengths}
            summary={summary}
          />
          <SuitabilityScoreCard
            categories={categories}
            isLoading={isLoading}
            overallScore={overallScore}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ExperienceCard />
          <EducationCard />
        </div>
      </main>
      <DashboardFooter />
    </DashboardShell>
  );
}