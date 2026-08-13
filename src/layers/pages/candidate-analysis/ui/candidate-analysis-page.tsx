"use client";

import Image from "next/image";
import Link from "next/link";
import {
  type CandidateAnalysisProfile,
  type CandidateRatingAttribute,
} from "@/entities/candidate-analysis/candidate-analysis-profile";
import { analysisProfile, analysisUtilityItems } from "@/entities/candidate-analysis";
import { ROUTES } from "@/shared/config/routes";
import { DashboardShell } from "@/widgets/app-shell";
import { EmployerDashboardFooter } from "@/widgets/app-shell";
import { MaterialIcon } from "@/shared/ui/material-icon";


type DetailKind = "application" | "talent";

const employerNavigation = [
  { key: "dashboard", label: "Panel", icon: "space_dashboard", href: ROUTES.employer },
  { key: "jobs", label: "İlanlarım", icon: "business_center", href: ROUTES.employerJobs },
  {
    key: "applications",
    label: "Başvurular",
    icon: "assignment_ind",
    href: ROUTES.employerApplications,
  },
  { key: "talents", label: "Yetenekler", icon: "auto_awesome", href: ROUTES.employerTalents },
] as const;

function getNavigationItems(detailKind: DetailKind) {
  const activeKey = detailKind === "application" ? "applications" : "talents";
  return employerNavigation.map(({ key, ...item }) => ({
    ...item,
    active: key === activeKey,
  }));
}

function BreadcrumbActions({
  candidate,
  detailKind,
}: {
  candidate: CandidateAnalysisProfile;
  detailKind: DetailKind;
}) {
  const isTalent = detailKind === "talent";
  const collectionLabel = isTalent ? "Yetenekler" : "Başvurular";
  const collectionHref = isTalent ? ROUTES.employerTalents : ROUTES.employerApplications;

  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-wrap items-center gap-2 text-sm leading-5 text-[#45474c]">
        <Link className="transition-colors hover:text-[#091426]" href={collectionHref}>
          {collectionLabel}
        </Link>
        <MaterialIcon className="text-[16px]">chevron_right</MaterialIcon>
        <span>{candidate.targetRole}</span>
        <MaterialIcon className="text-[16px]">chevron_right</MaterialIcon>
        <span className="font-semibold text-[#0b1c30]">{candidate.name}</span>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          className="flex items-center justify-center gap-2 rounded border border-[#75777d] bg-[#f8f9ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#eff4ff]"
          type="button"
        >
          <MaterialIcon className="text-[18px]">download</MaterialIcon>
          PDF Dışa Aktar
        </button>
        <button
          className="rounded bg-[#091426] px-4 py-2 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90"
          type="button"
        >
          {isTalent ? "İletişime Geç" : "Mülakat Planla"}
        </button>
      </div>
    </div>
  );
}

function CandidateHeader({
  candidate,
  isLoading,
  rating,
}: {
  candidate: CandidateAnalysisProfile;
  isLoading: boolean;
  rating: number;
}) {
  return (
    <section className="mb-8 flex flex-col items-start gap-6 rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6 md:flex-row md:items-center">
      <Image
        alt={`${candidate.name} profil fotoğrafı`}
        className="h-24 w-24 rounded-full border-2 border-[#dce9ff] object-cover"
        height={96}
        src={candidate.photoUrl}
        width={96}
      />

      <div className="flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-4">
          <h1 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
            {candidate.name}
          </h1>
          <span className="flex items-center gap-1 rounded-full bg-[#dcfce7] px-4 py-1 text-[11px] font-semibold leading-4 text-[#006c49]">
            <span className="h-2 w-2 rounded-full bg-[#10b981]" />
            {isLoading ? "Rating yükleniyor" : `Vettingo Rating ${rating}/100`}
          </span>
        </div>
        <p className="mb-4 text-lg font-medium leading-6 text-[#45474c]">{candidate.title}</p>
        <div className="flex flex-wrap gap-6 text-sm leading-5 text-[#45474c]">
          {[
            { icon: "location_on", label: candidate.location },
            { icon: "mail", label: candidate.email },
            { icon: "work_history", label: candidate.experience },
          ].map((item) => (
            <div className="flex items-center gap-1" key={item.icon}>
              <MaterialIcon className="text-[18px]">{item.icon}</MaterialIcon>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full min-w-[220px] flex-col gap-2 md:w-auto">
        <div className="flex items-center justify-between gap-4 rounded border border-[#c5c6cd] bg-[#eff4ff] p-3">
          <span className="text-[11px] font-medium leading-4 text-[#45474c]">Mevcut Durum</span>
          <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
            <span className="h-2 w-2 rounded-full bg-[#3b82f6]" />
            {candidate.status}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 rounded border border-[#c5c6cd] bg-[#eff4ff] p-3">
          <span className="text-[11px] font-medium leading-4 text-[#45474c]">Beklenen Maaş</span>
          <span className="text-xs font-semibold uppercase tracking-[0.05em] text-[#0b1c30]">
            {candidate.expectedSalary}
          </span>
        </div>
      </div>
    </section>
  );
}

function SummaryList({
  icon,
  iconClassName,
  items,
  title,
}: {
  icon: string;
  iconClassName: string;
  items: readonly string[];
  title: string;
}) {
  return (
    <div className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-4">
      <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li className="flex items-start gap-1 text-sm leading-5 text-[#0b1c30]" key={item}>
            <MaterialIcon className={`mt-[2px] text-[16px] ${iconClassName}`}>{icon}</MaterialIcon>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExecutiveSummaryCard({
  detailKind,
  isLoading,
  profile,
  risks,
  strengths,
  summary,
}: {
  detailKind: DetailKind;
  isLoading: boolean;
  profile: CandidateAnalysisProfile;
  risks: readonly string[];
  strengths: readonly string[];
  summary: string;
}) {
  const isTalent = detailKind === "talent";

  return (
    <section className="flex flex-col rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6 lg:col-span-2">
      <div className="mb-4 flex items-center gap-2 border-b border-[#c5c6cd] pb-2">
        <MaterialIcon className="text-[#040057]">{isTalent ? "auto_awesome" : "psychology"}</MaterialIcon>
        <h2 className="text-lg font-medium leading-6 text-[#0b1c30]">
          {isTalent ? "Neden Öneriyoruz?" : "Aday Analizi Özeti"}
        </h2>
      </div>
      {isTalent && profile.recommendationReason ? (
        <p className="mb-3 rounded bg-[#dcfce7] px-3 py-2 text-sm font-medium leading-5 text-[#006c49]">
          {profile.recommendationReason}
        </p>
      ) : null}
      <p className="flex-1 text-sm leading-6 text-[#45474c]">
        {isLoading ? "Aday değerlendirmeleri yükleniyor..." : summary}
      </p>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <SummaryList
          icon="check_circle"
          iconClassName="text-[#10b981]"
          items={strengths}
          title="Temel Güçlü Yönler"
        />
        <SummaryList
          icon="warning"
          iconClassName="text-[#f59e0b]"
          items={risks}
          title="Gelişime Açık Alanlar"
        />
      </div>
    </section>
  );
}

function RoleSuitabilityCard({
  candidate,
  isLoading,
}: {
  candidate: CandidateAnalysisProfile;
  isLoading: boolean;
}) {
  const score = isLoading ? 0 : candidate.roleSuitability;

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_#d8e3fb,_transparent_70%)] opacity-40" />
      <h2 className="relative z-10 text-lg font-medium leading-6 text-[#0b1c30]">Role Uygunluk</h2>
      <p className="relative z-10 mb-7 mt-1 text-[11px] font-medium leading-4 text-[#45474c]">
        İlan gereksinimleriyle semantik eşleşme
      </p>
      <div
        aria-label={`Role uygunluk puanı ${score}/100`}
        className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full p-3"
        role="img"
        style={{
          background: `conic-gradient(#006c49 ${score * 3.6}deg, #d3e4fe 0deg)`,
        }}
      >
        <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#f8f9ff]">
          <span className="text-4xl font-semibold leading-none tracking-[-0.03em] text-[#0b1c30]">
            {isLoading ? "—" : score}
          </span>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.05em] text-[#45474c]">
            100 üzerinden
          </span>
        </div>
      </div>
      <p className="relative z-10 mt-6 text-xs leading-5 text-[#45474c]">
        Deneyim, rol kapsamı ve doğrulanmış beceriler birlikte hesaplandı.
      </p>
    </section>
  );
}

function RatingCard({
  attributes,
  isLoading,
  rating,
}: {
  attributes: readonly CandidateRatingAttribute[];
  isLoading: boolean;
  rating: number;
}) {
  return (
    <section className="rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6">
      <div className="mb-4 flex items-start justify-between gap-3 border-b border-[#c5c6cd] pb-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#006c49]">
            Vettingo Rating
          </p>
          <h2 className="mt-1 text-lg font-medium text-[#0b1c30]">Aday Özellikleri</h2>
        </div>
        <div className="rounded bg-[#091426] px-3 py-2 text-center text-white">
          <span className="block text-3xl font-bold leading-none">{isLoading ? "—" : rating}</span>
          <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.08em] text-[#dce9ff]">
            / 100
          </span>
        </div>
      </div>
      <div className="space-y-3">
        {isLoading ? (
          <div className="h-40 animate-pulse rounded bg-[#dce9ff]" />
        ) : (
          attributes.slice(0, 6).map((attribute) => (
            <div key={attribute.label}>
              <div className="mb-1 flex items-center justify-between gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.04em] text-[#45474c]">
                  {attribute.label}
                </span>
                <span className="text-sm font-bold text-[#0b1c30]">{attribute.value}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-[#d3e4fe]">
                <div
                  className="h-full rounded-full bg-[#006c49]"
                  style={{ width: `${attribute.value}%` }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function ExperienceCard({ candidate }: { candidate: CandidateAnalysisProfile }) {
  return (
    <section className="rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6">
      <div className="mb-6 flex items-center gap-2 border-b border-[#c5c6cd] pb-2">
        <MaterialIcon className="text-[#091426]">work</MaterialIcon>
        <h2 className="text-lg font-medium leading-6 text-[#0b1c30]">Profesyonel Deneyim</h2>
      </div>
      <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-[#d3e4fe]">
        {candidate.experienceTimeline.map((item) => (
          <article className="relative pl-8" key={`${item.title}-${item.period}`}>
            <div
              className={`absolute left-0 top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-[#f8f9ff] ${
                item.current ? "border-[#091426]" : "border-[#c5c6cd]"
              }`}
            >
              {item.current ? <div className="h-2 w-2 rounded-full bg-[#091426]" /> : null}
            </div>
            <h3 className="text-lg font-medium leading-6 text-[#0b1c30]">{item.title}</h3>
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
              {item.company} · {item.period}
            </p>
            <p className="my-2 text-sm leading-5 text-[#45474c]">{item.description}</p>
            <div className="flex flex-wrap gap-1">
              {item.tags.map((tag) => (
                <span
                  className="rounded border border-[#c5c6cd] bg-[#eff4ff] px-2 py-1 text-[10px] font-semibold text-[#45474c]"
                  key={tag}
                >
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

function CandidateContextCard({
  candidate,
  detailKind,
}: {
  candidate: CandidateAnalysisProfile;
  detailKind: DetailKind;
}) {
  const isTalent = detailKind === "talent";
  const talentSignals = [
    { icon: "event_available", label: "Müsaitlik", value: candidate.availability ?? "Görüşmede" },
    { icon: "location_on", label: "Çalışma Tercihi", value: candidate.workingPreference ?? candidate.location },
    { icon: "hub", label: "Kaynak", value: candidate.source ?? "Doğrudan başvuru" },
  ];

  return (
    <section className="flex flex-col gap-6 rounded-lg border border-[#c5c6cd] bg-[#f8f9ff] p-6">
      {isTalent ? (
        <div>
          <div className="mb-4 flex items-center gap-2 border-b border-[#c5c6cd] pb-2">
            <MaterialIcon className="text-[#006c49]">radar</MaterialIcon>
            <h2 className="text-lg font-medium leading-6 text-[#0b1c30]">Yetenek Sinyalleri</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {talentSignals.map((signal) => (
              <div className="rounded border border-[#c5c6cd] bg-[#eff4ff] p-3" key={signal.label}>
                <MaterialIcon className="text-[19px] text-[#45474c]">{signal.icon}</MaterialIcon>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d]">
                  {signal.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0b1c30]">{signal.value}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <div>
        <div className="mb-5 flex items-center gap-2 border-b border-[#c5c6cd] pb-2">
          <MaterialIcon className="text-[#091426]">school</MaterialIcon>
          <h2 className="text-lg font-medium leading-6 text-[#0b1c30]">Eğitim</h2>
        </div>
        <ul className="space-y-4">
          {candidate.educationItems.map((item) => (
            <li className="flex items-start gap-4" key={item.title}>
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#c5c6cd] bg-[#eff4ff]">
                <MaterialIcon className="text-[#45474c]">{item.icon}</MaterialIcon>
              </div>
              <div>
                <h3 className="text-base font-medium leading-6 text-[#0b1c30]">{item.title}</h3>
                <p className="text-sm leading-5 text-[#45474c]">{item.school}</p>
                <p className="mt-1 text-[11px] text-[#75777d]">{item.period}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <div className="mb-4 flex items-center gap-2 border-b border-[#c5c6cd] pb-2">
          <MaterialIcon className="text-[#091426]">workspace_premium</MaterialIcon>
          <h2 className="text-lg font-medium leading-6 text-[#0b1c30]">Sertifikalar</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {candidate.certifications.map((certification) => (
            <span
              className="rounded border border-[#c5c6cd] bg-[#eff4ff] px-2 py-1 text-[11px] font-semibold text-[#0b1c30]"
              key={certification}
            >
              {certification}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CandidateAnalysisPage({
  candidate,
  detailKind,
}: {
  candidate: CandidateAnalysisProfile;
  detailKind: DetailKind;
}) {
  const profile = candidate;
  const rating = profile.rating;
  const ratingAttributes = profile.ratingAttributes;
  const summary = profile.summary;
  const strengths = profile.strengths;
  const risks = profile.risks;
  const isLoading = false;

  return (
    <DashboardShell
      navigationItems={getNavigationItems(detailKind)}
      sidebarSubtitle={analysisProfile.edition}
      sidebarTitle={analysisProfile.companyLabel}
      topBarLeading={
        <Link
          aria-label="Listeye dön"
          className="rounded-full p-2 text-[#45474c] transition-colors hover:bg-[#eff4ff]"
          href={
            detailKind === "talent"
              ? ROUTES.employerTalents
              : ROUTES.employerApplications
          }
        >
          <MaterialIcon>arrow_back</MaterialIcon>
        </Link>
      }
      utilityItems={analysisUtilityItems}
    >
      <main className="candidate-analysis-theme mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8">
        <BreadcrumbActions candidate={profile} detailKind={detailKind} />
        <CandidateHeader
          candidate={profile}
          isLoading={isLoading}
          rating={rating}
        />

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ExecutiveSummaryCard
            detailKind={detailKind}
            isLoading={isLoading}
            profile={profile}
            risks={risks}
            strengths={strengths}
            summary={summary}
          />
          <RoleSuitabilityCard
            candidate={profile}
            isLoading={isLoading}
          />
          <RatingCard
            attributes={ratingAttributes}
            isLoading={isLoading}
            rating={rating}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ExperienceCard candidate={profile} />
          <CandidateContextCard
            candidate={profile}
            detailKind={detailKind}
          />
        </div>
      </main>
      <EmployerDashboardFooter />
    </DashboardShell>
  );
}
