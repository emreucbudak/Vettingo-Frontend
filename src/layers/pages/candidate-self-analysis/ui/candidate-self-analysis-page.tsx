"use client";

import Image from "next/image";
import Link from "next/link";
import {
  defaultCandidateAnalysisProfile,
  type CandidateRatingAttribute,
} from "@/entities/candidate-analysis/candidate-analysis-profile";
import { useCandidateEvaluationAnalysis } from "@/features/candidate-analysis";
import { ROUTES } from "@/shared/config/routes";
import { CandidateShell } from "@/widgets/candidate/shell";
import { MaterialIcon } from "@/shared/ui/material-icon";
import { user, useUserInformation } from "@/shared/useUserInformation";
function ScoreRing({
  isLoading,
  score,
}: {
  isLoading: boolean;
  score: number;
}) {
  return (
    <div
      aria-label={"Genel profil puanı " + score + "/100"}
      className="flex h-36 w-36 shrink-0 items-center justify-center rounded-full p-3"
      role="img"
      style={{
        background:
          "conic-gradient(#006c49 " +
          score * 3.6 +
          "deg, #d3e4fe 0deg)",
      }}
    >
      <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-[#f8f9ff]">
        <span className="text-4xl font-semibold leading-none tracking-[-0.03em] text-[#0b1c30]">
          {isLoading ? "—" : score}
        </span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#45474c]">
          Genel Puan
        </span>
      </div>
    </div>
  );
}

function InsightList({
  icon,
  items,
  title,
  tone,
}: {
  icon: string;
  items: readonly string[];
  title: string;
  tone: "positive" | "growth";
}) {
  const iconClassName =
    tone === "positive" ? "text-[#006c49]" : "text-[#b45309]";
  const surfaceClassName =
    tone === "positive"
      ? "border-[#b7e4d1] bg-[#edfff7]"
      : "border-[#f2d39c] bg-[#fff8eb]";

  return (
    <div className={"rounded-lg border p-4 " + surfaceClassName}>
      <h3 className="text-xs font-semibold uppercase tracking-[0.05em] text-[#45474c]">
        {title}
      </h3>
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li
            className="flex items-start gap-2 text-sm leading-5 text-[#0b1c30]"
            key={item}
          >
            <MaterialIcon
              className={"mt-0.5 text-[18px] " + iconClassName}
            >
              {icon}
            </MaterialIcon>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CompetencyBreakdown({
  attributes,
  isLoading,
}: {
  attributes: readonly CandidateRatingAttribute[];
  isLoading: boolean;
}) {
  return (
    <section className="rounded-lg border border-[#c5c6cd] bg-white p-5 md:p-6">
      <div className="flex items-start justify-between gap-4 border-b border-[#c5c6cd] pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]">
            Yetkinlik Haritan
          </p>
          <h2 className="mt-1 text-xl font-semibold text-[#0b1c30]">
            Puan dağılımı
          </h2>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eff4ff] text-[#091426]">
          <span className="relative block h-8 w-8 overflow-hidden" aria-hidden="true">
            <Image
              alt=""
              className="absolute left-[-4px] top-[-4px] h-10 w-10 max-w-none"
              height={392}
              src="/icons/candidate-competency-transparent.png"
              width={411}
            />
          </span>
        </div>
      </div>

      {isLoading ? (
        <div className="mt-5 h-64 animate-pulse rounded bg-[#eff4ff]" />
      ) : (
        <div className="mt-5 space-y-4">
          {attributes.slice(0, 6).map((attribute) => (
            <div key={attribute.label}>
              <div className="mb-1.5 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.04em] text-[#45474c]">
                  {attribute.label}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d]">
                    {attribute.value >= 85
                      ? "Güçlü"
                      : attribute.value >= 70
                        ? "İyi"
                        : "Geliştir"}
                  </span>
                  <span className="w-7 text-right text-sm font-bold text-[#0b1c30]">
                    {attribute.value}
                  </span>
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[#dce9ff]">
                <div
                  className="h-full rounded-full bg-[#006c49]"
                  style={{ width: attribute.value + "%" }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function GrowthPlan({
  developmentAreas,
  strengths,
}: {
  developmentAreas: readonly string[];
  strengths: readonly string[];
}) {
  const actions = [
    {
      icon: "checklist_edit",
      eyebrow: "Öncelikli Alan",
      title: developmentAreas[0] ?? "Yeni bir gelişim alanı belirle",
      description:
        "Bu başlık için ölçülebilir bir öğrenme hedefi oluştur ve ilerlemeni profilinde güncel tut.",
    },
    {
      icon: "auto_awesome",
      eyebrow: "Öne Çıkan Gücün",
      title: strengths[0] ?? "Güçlü yönlerini görünür kıl",
      description:
        "Bu yetkinliği destekleyen proje ve sonuçları özgeçmişinde somut örneklerle anlat.",
    },
    {
      icon: "trending_up",
      eyebrow: "Sonraki Adım",
      title: "Profil verilerini güncel tut",
      description:
        "Yeni deneyim, sertifika ve değerlendirmeler eklendikçe analiz sonuçların daha isabetli olur.",
    },
  ] as const;

  return (
    <section className="mt-6">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]">
          Kişisel Yol Haritan
        </p>
        <h2 className="mt-1 text-2xl font-semibold tracking-[-0.01em] text-[#0b1c30]">
          Önerilen sonraki adımlar
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {actions.map((action, index) => (
          <article
            className="rounded-lg border border-[#c5c6cd] bg-white p-5"
            key={action.eyebrow}
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#eff4ff] text-[#091426]">
                <MaterialIcon className="text-[22px]">
                  {action.icon}
                </MaterialIcon>
              </div>
              <span className="text-[11px] font-bold text-[#75777d]">
                0{index + 1}
              </span>
            </div>
            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#006c49]">
              {action.eyebrow}
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-6 text-[#0b1c30]">
              {action.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#45474c]">
              {action.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function CandidateSelfAnalysisPage() {
  useUserInformation();
  
  const remoteAnalysis = useCandidateEvaluationAnalysis(
    user!.Sub
  );
  const profile = defaultCandidateAnalysisProfile;
  const hasRemoteAnalysis = remoteAnalysis.evaluationCount > 0;
  const score = hasRemoteAnalysis
    ? remoteAnalysis.overallScore
    : profile.rating;
  const attributes = hasRemoteAnalysis
    ? remoteAnalysis.categories
    : profile.ratingAttributes;
  const strengths = hasRemoteAnalysis
    ? remoteAnalysis.strengths
    : profile.strengths;
  const developmentAreas = hasRemoteAnalysis
    ? remoteAnalysis.risks
    : profile.risks;
  const displayName = user!.GivenName + user!.FamilyName
  const displayEmail = user!.Email;
  const roleScore = hasRemoteAnalysis
    ? Math.round((score + profile.roleSuitability) / 2)
    : profile.roleSuitability;
  const summary = hasRemoteAnalysis
    ? "Tamamladığın " +
      remoteAnalysis.evaluationCount +
      " güncel yetkinlik değerlendirmesine göre genel profil puanın " +
      score +
      "/100. Sonuçların güçlü yönlerini görünür kılarken gelişime açık alanlarını önceliklendirmen için hazırlandı."
    : "Profil verilerin; stratejik düşünme, problem çözme, iletişim ve liderlik sinyallerinin güçlü olduğunu gösteriyor. Aşağıdaki sonuçları kariyer hedeflerini netleştirmek ve gelişim planını oluşturmak için kullanabilirsin.";

  return (
    <CandidateShell>
      <main className="mx-auto w-full max-w-[1440px] flex-1 px-4 pb-4 pt-3 md:px-8 md:pb-8 md:pt-6">
        <header className="mb-6 flex flex-col gap-5 border-b border-[#c5c6cd] pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.06em] text-[#006c49]">
              Kişisel Değerlendirme
            </p>
            <h1 className="mt-2 text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
              Yapay Zeka Analizim
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#45474c]">
              Yetkinliklerini, güçlü yönlerini ve gelişim fırsatlarını kendi
              kariyer hedeflerin için tek ekranda incele.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex items-center justify-center gap-2 rounded border border-[#75777d] bg-[#f8f9ff] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#eff4ff]"
              type="button"
            >
              <MaterialIcon className="text-[18px]">download</MaterialIcon>
              Analizi İndir
            </button>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded bg-[#091426] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.05em] text-white transition-opacity hover:opacity-90"
              href={ROUTES.resumeUpload}
            >
              Profili Güncelle
              <MaterialIcon className="text-[18px]">
                arrow_forward
              </MaterialIcon>
            </Link>
          </div>
        </header>

        {remoteAnalysis.error ? (
          <div
            className="mb-6 rounded border border-[#ba1a1a] bg-[#ffdad6] px-4 py-3 text-sm text-[#93000a]"
            role="alert"
          >
            {remoteAnalysis.error}
          </div>
        ) : null}

        <section className="mb-6 grid grid-cols-1 gap-6 rounded-xl border border-[#c5c6cd] bg-white p-5 md:p-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <Image
              alt={displayName + " profil fotoğrafı"}
              className="h-24 w-24 rounded-full border-2 border-[#dce9ff] object-cover"
              height={96}
              src={profile.photoUrl}
              width={96}
            />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-semibold tracking-[-0.01em] text-[#0b1c30]">
                  {displayName}
                </h2>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#dcfce7] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.05em] text-[#006c49]">
                  <MaterialIcon className="text-[15px]">
                    verified
                  </MaterialIcon>
                  Kendi Raporun
                </span>
              </div>
              <p className="mt-1 text-base font-medium text-[#45474c]">
                {profile.targetRole}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#45474c]">
                <span className="flex items-center gap-1.5">
                  <MaterialIcon className="text-[17px]">
                    mail
                  </MaterialIcon>
                  {displayEmail}
                </span>
                <span className="flex items-center gap-1.5">
                  <MaterialIcon className="text-[17px]">
                    work_history
                  </MaterialIcon>
                  {profile.experience}
                </span>
                <span className="flex items-center gap-1.5">
                  <MaterialIcon className="text-[17px]">
                    location_on
                  </MaterialIcon>
                  {profile.location}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center border-t border-[#c5c6cd] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <ScoreRing
              isLoading={remoteAnalysis.isLoading}
              score={score}
            />
          </div>
        </section>

        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.65fr)]">
          <section className="rounded-lg border border-[#c5c6cd] bg-white p-5 md:p-6">
            <div className="flex items-center gap-3 border-b border-[#c5c6cd] pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dce9ff] text-[#091426]">
                <MaterialIcon className="text-[23px]">
                    search
                </MaterialIcon>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.06em] text-[#006c49]">
                  Sana Özel İçgörü
                </p>
                <h2 className="mt-1 text-xl font-semibold text-[#0b1c30]">
                  Analiz özeti
                </h2>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[#45474c]">
              {remoteAnalysis.isLoading
                ? "Değerlendirme sonuçların yükleniyor..."
                : summary}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <InsightList
                icon="check_circle"
                items={strengths}
                title="Güçlü Yönlerin"
                tone="positive"
              />
              <InsightList
                icon="warning"
                items={developmentAreas}
                title="Gelişim Fırsatların"
                tone="growth"
              />
            </div>
          </section>

          <section className="rounded-lg border border-[#c5c6cd] bg-[#eff4ff] p-5 md:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[#006c49]">
              Kariyer Odağın
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[#0b1c30]">
              {profile.targetRole}
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#45474c]">
              Profil sinyallerinin hedeflediğin rolle olan güncel uyumu.
            </p>

            <div className="mt-7 rounded-lg border border-[#c5c6cd] bg-white p-4">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#75777d]">
                    Rol Uyumu
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-[#0b1c30]">
                    {remoteAnalysis.isLoading ? "—" : roleScore}
                    <span className="text-sm text-[#75777d]">/100</span>
                  </p>
                </div>
                <MaterialIcon className="text-3xl text-[#006c49]">
                  trending_up
                </MaterialIcon>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#dce9ff]">
                <div
                  className="h-full rounded-full bg-[#006c49]"
                  style={{ width: roleScore + "%" }}
                />
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-lg border border-[#c5c6cd] bg-white p-4">
              <MaterialIcon className="mt-0.5 text-[20px] text-[#091426]">
                lightbulb
              </MaterialIcon>
              <p className="text-xs leading-5 text-[#45474c]">
                Rol uyumunu artırmak için gelişim alanlarını güncel proje ve
                eğitimlerle destekle.
              </p>
            </div>
          </section>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)]">
          <CompetencyBreakdown
            attributes={attributes}
            isLoading={remoteAnalysis.isLoading}
          />

          <aside className="rounded-lg border border-[#c5c6cd] bg-white p-5 md:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6cf8bb] text-[#00714d]">
              <MaterialIcon className="text-[22px]">
                workspace_premium
              </MaterialIcon>
            </div>
            <h2 className="mt-5 text-xl font-semibold text-[#0b1c30]">
              Analizin nasıl oluştu?
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#45474c]">
              Sonuçlar yalnızca senin profil ve değerlendirme sinyallerinden
              hazırlanır.
            </p>

            <dl className="mt-6 divide-y divide-[#c5c6cd] border-y border-[#c5c6cd]">
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-xs font-medium text-[#45474c]">
                  Değerlendirme
                </dt>
                <dd className="text-sm font-bold text-[#0b1c30]">
                  {hasRemoteAnalysis
                    ? remoteAnalysis.evaluationCount
                    : attributes.length}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-xs font-medium text-[#45474c]">
                  Yetkinlik sinyali
                </dt>
                <dd className="text-sm font-bold text-[#0b1c30]">
                  {attributes.length}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-xs font-medium text-[#45474c]">
                  Veri kapsamı
                </dt>
                <dd className="text-sm font-bold text-[#006c49]">
                  Yalnızca sen
                </dd>
              </div>
            </dl>

            <p className="mt-5 text-[11px] leading-5 text-[#75777d]">
              Profilin veya değerlendirmelerin güncellendiğinde raporun yeniden
              hesaplanabilir.
            </p>
          </aside>
        </div>

        <GrowthPlan
          developmentAreas={developmentAreas}
          strengths={strengths}
        />
      </main>

    </CandidateShell>
  );
}
