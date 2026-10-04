"use client";

import { MdOutlineDownload } from "react-icons/md";

import { AppIcon } from "@/shared/ui/icon";

import Image from "next/image";
import { Oswald } from "next/font/google";
import { useId } from "react";
import {
  defaultCandidateAnalysisProfile,
  type CandidateRatingAttribute,
} from "@/entities/candidate-analysis/candidate-analysis-profile";
import { useCandidateEvaluationAnalysis } from "@/features/candidate-analysis";
import { CandidateShell } from "@/widgets/candidate/shell";
import { useUserInformation } from "@/shared/useUserInformation";
const cardFont = Oswald({
  subsets: ["latin", "latin-ext"],
  weight: "500",
  display: "swap",
});

function skillCode(label: string) {
  const codes: Record<string, string> = {
    "Takım Çalışması": "TKM", "Alan Hakimiyeti": "ALN", "Liderlik": "LDR",
    "İletişim": "İLT", "Problem Çözme": "PRB", "Uyum Yeteneği": "UYM",
  };
  return codes[label] ?? label.slice(0, 3).toLocaleUpperCase("tr-TR");
}

function CandidatePlayerCard({ name, photoUrl, score, attributes, isLoading }: {
  name: string;
  photoUrl: string;
  score: number;
  attributes: readonly CandidateRatingAttribute[];
  isLoading: boolean;
}) {
  const gradientId = useId();
  const outline = "M190 10 C174 34 155 39 143 18 C97 20 53 82 8 91 L8 487 Q8 509 32 516 C89 533 146 548 190 578 C234 548 291 533 348 516 Q372 509 372 487 L372 91 C327 82 283 20 237 18 C225 39 206 34 190 10 Z";

  return (
    <article aria-label={name + " yetenek kartı"} className="relative isolate mx-auto aspect-[380/590] w-full max-w-[380px] text-[#44350e] drop-shadow-[0_18px_24px_rgba(106,77,12,0.18)] [container-type:inline-size]">
      <svg aria-hidden="true" viewBox="0 0 380 590" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="380" y2="590" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff5bd" />
            <stop offset="0.28" stopColor="#f5df85" />
            <stop offset="0.49" stopColor="#d0a94b" />
            <stop offset="0.5" stopColor="#fff0a3" />
            <stop offset="0.72" stopColor="#f1d775" />
            <stop offset="1" stopColor="#c49b3e" />
          </linearGradient>
        </defs>
        <path d={outline} fill={`url(#${gradientId})`} stroke="#8c702e" strokeWidth="5" />
        <path d={outline} transform="translate(190 294) scale(.975) translate(-190 -294)" stroke="#fff0a3" strokeWidth="2" />
      </svg>

      <div className="absolute left-[10%] top-[15%] z-20 text-center">
        <p className={cardFont.className + " text-[17cqw] font-medium leading-none tracking-tight"}>{isLoading ? "—" : score}</p>
        <p className="mt-2 text-[2.3cqw] font-bold uppercase tracking-[0.12em]">Genel puan</p>
      </div>

      <div className="absolute right-[10%] top-[15%] h-[41%] w-[54%] overflow-hidden mix-blend-multiply" style={{
        maskImage: "linear-gradient(to bottom, black 0%, black 72%, transparent 100%), linear-gradient(to right, transparent 0%, black 14%, black 88%, transparent 100%)",
        maskComposite: "intersect",
      }}>
        <Image alt={name + " profil fotoğrafı"} src={photoUrl} fill sizes="(max-width: 420px) 50vw, 206px" className="object-cover object-[center_60%]" />
      </div>

      <div className="absolute inset-x-[12%] top-[58%] text-center">
        <h2 className="break-words text-[7cqw] font-extrabold uppercase leading-tight tracking-tight">{name}</h2>
      </div>

      <dl className={cardFont.className + " absolute left-[17%] right-[11%] top-[67%] bottom-[14%] grid content-center grid-flow-col grid-cols-2 grid-rows-[repeat(3,auto)] gap-x-[8cqw] gap-y-[1.5cqw]"}>
        {attributes.slice(0, 6).map(attribute => (
          <div key={attribute.label} title={attribute.label} className="flex items-baseline gap-[2cqw]">
            <dd className="min-w-[8cqw] text-[8.5cqw] font-medium leading-none tabular-nums">{isLoading ? "—" : attribute.value}</dd>
            <dt className="text-[6.5cqw] font-medium leading-none tracking-tight"><abbr title={attribute.label} className="no-underline">{skillCode(attribute.label)}</abbr></dt>
          </div>
        ))}
      </dl>
      <p className="absolute inset-x-0 top-[90%] text-center text-[2.3cqw] font-bold tracking-[0.35em]">VETTINGO</p>
    </article>
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
            <AppIcon
              className={"mt-0.5 text-[18px] " + iconClassName}
            >
              {icon}
            </AppIcon>
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
    <section className="h-full rounded-xl border border-[#c5c6cd] bg-white p-5 md:p-8">
      <div className="border-b border-[#c5c6cd] pb-4">
        <h2 className="text-xl font-semibold text-[#0b1c30]">
          Yeteneklerin
        </h2>
        <p className="mt-2 text-sm text-[#75777d]">Kartındaki yeteneklerin 100 üzerinden puan dağılımı.</p>
      </div>

      {isLoading ? (
        <div className="mt-5 h-64 animate-pulse rounded bg-[#eff4ff]" />
      ) : (
        <div className="mt-6 space-y-6">
          {attributes.map((attribute) => (
            <div key={attribute.label}>
              <div className="mb-1.5 flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.04em] text-[#45474c]">
                  <span className="mr-2 inline-block min-w-10 text-[#997621]">{skillCode(attribute.label)}</span>
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
                  <span className="whitespace-nowrap text-right text-lg font-bold tabular-nums text-[#0b1c30]">
                    {attribute.value}<span className="ml-1 text-xs font-normal text-[#75777d]">/100</span>
                  </span>
                </div>
              </div>
              <div role="progressbar" aria-label={attribute.label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={attribute.value} className="h-2.5 overflow-hidden rounded-full bg-[#f1eee5]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#b28c35] to-[#e4c76d]"
                  style={{ width: Math.min(100, Math.max(0, attribute.value)) + "%" }}
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
      title: developmentAreas[0] ?? "Yeni bir gelişim alanı belirle",
      description:
        "Bu başlık için ölçülebilir bir öğrenme hedefi oluştur ve ilerlemeni profilinde güncel tut.",
    },
    {
      title: strengths[0] ?? "Güçlü yönlerini görünür kıl",
      description:
        "Bu yetkinliği destekleyen proje ve sonuçları özgeçmişinde somut örneklerle anlat.",
    },
    {
      title: "Profil verilerini güncel tut",
      description:
        "Yeni deneyim, sertifika ve değerlendirmeler eklendikçe analiz sonuçların daha isabetli olur.",
    },
  ] as const;

  return (
    <section className="mt-6">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold tracking-[-0.01em] text-[#0b1c30]">
          Önerilen sonraki adımlar
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {actions.map((action, index) => (
          <article
            className="rounded-lg border border-[#c5c6cd] bg-white p-5"
            key={action.title}
          >
            <div className="flex justify-end">
              <span className="text-[11px] font-bold text-[#75777d]">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold leading-6 text-[#0b1c30]">
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
  const user = useUserInformation();
  const remoteAnalysis = useCandidateEvaluationAnalysis(
    user?.Sub ?? null,
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
  const displayName =
    [user?.GivenName, user?.FamilyName]
      .filter(Boolean)
      .join(" ") || "Aday Kullanıcı";
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
            <h1 className="text-3xl font-semibold leading-10 tracking-[-0.02em] text-[#0b1c30]">
              Yapay Zeka Analizi
            </h1>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              className="inline-flex items-center justify-center gap-2 rounded border border-[#75777d] bg-[#f8f9ff] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.05em] text-[#091426] transition-colors hover:bg-[#eff4ff]"
              type="button"
            >
              <MdOutlineDownload aria-hidden="true" focusable="false" className="inline-block h-[1em] w-[1em] shrink-0 align-[-0.125em] text-[18px]" />
              Analizi İndir
            </button>

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
        <section className="mb-8 grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(280px,380px)_minmax(0,1fr)] lg:gap-12">
          <CandidatePlayerCard name={displayName} photoUrl={profile.photoUrl}
            score={score} attributes={attributes} isLoading={remoteAnalysis.isLoading} />
          <CompetencyBreakdown attributes={attributes} isLoading={remoteAnalysis.isLoading} />
        </section>

        <div className="grid grid-cols-1 gap-6">
          <section className="flex flex-col rounded-lg border border-[#c5c6cd] bg-white p-5 md:p-6">
            <div className="border-b border-[#c5c6cd] pb-4">
              <h2 className="text-xl font-semibold text-[#0b1c30]">
                Analiz özeti
              </h2>
            </div>

            <p className="mt-5 text-sm leading-7 text-[#45474c]">
              {remoteAnalysis.isLoading
                ? "Değerlendirme sonuçların yükleniyor..."
                : summary}
            </p>

            <div className="mt-auto grid grid-cols-1 gap-4 pt-6 md:grid-cols-2">
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


        </div>

        <div className="mt-6">
          <aside className="flex flex-col rounded-lg border border-[#c5c6cd] bg-white p-5 md:p-6">
            <h2 className="text-xl font-semibold text-[#0b1c30]">
              Analizin nasıl oluştu?
            </h2>

            <dl className="mt-6 flex flex-1 flex-col divide-y divide-[#c5c6cd] border-y border-[#c5c6cd]">
              <div className="flex min-h-16 flex-1 items-center justify-between gap-4 py-5">
                <dt className="text-xs font-medium text-[#45474c]">
                  Değerlendirme
                </dt>
                <dd className="text-sm font-bold text-[#0b1c30]">
                  {hasRemoteAnalysis
                    ? remoteAnalysis.evaluationCount
                    : attributes.length}
                </dd>
              </div>
              <div className="flex min-h-16 flex-1 items-center justify-between gap-4 py-5">
                <dt className="text-xs font-medium text-[#45474c]">
                  Yetkinlik
                </dt>
                <dd className="text-sm font-bold text-[#0b1c30]">
                  {attributes.length}
                </dd>
              </div>
              <div className="flex min-h-16 flex-1 items-center justify-between gap-4 py-5">
                <dt className="text-xs font-medium text-[#45474c]">
                  Veri kapsamı
                </dt>
                <dd className="text-sm font-bold text-[#006c49]">
                  Yalnızca sen
                </dd>
              </div>
            </dl>

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
