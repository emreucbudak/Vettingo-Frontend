"use client";

import { useEffect, useState } from "react";
import { getCandidateEvaluations, type EvaluationDto } from "../api/candidate-analysis-api";

export type EvaluationCategory = {
  label: string;
  value: number;
};

type CandidateEvaluationAnalysis = {
  categories: EvaluationCategory[];
  evaluationCount: number;
  overallScore: number;
  risks: string[];
  strengths: string[];
  summary: string;
};

const emptyAnalysis: CandidateEvaluationAnalysis = {
  categories: [],
  evaluationCount: 0,
  overallScore: 0,
  risks: [],
  strengths: [],
  summary: "Bu aday için henüz Evaluation Service kaydı bulunmuyor.",
};

function clampScore(score: number) {
  return Math.min(100, Math.max(0, Math.round(score)));
}

function buildAnalysis(evaluations: EvaluationDto[]): CandidateEvaluationAnalysis {
  const latestBySkill = new Map<string, EvaluationDto>();

  [...evaluations]
    .sort(
      (first, second) =>
        new Date(second.updatedAt ?? second.createdAt).getTime() -
        new Date(first.updatedAt ?? first.createdAt).getTime(),
    )
    .forEach((evaluation) => {
      const key = evaluation.skillName.trim().toLocaleLowerCase("tr-TR");
      if (key && !latestBySkill.has(key)) {
        latestBySkill.set(key, evaluation);
      }
    });

  const latestEvaluations = [...latestBySkill.values()];
  if (latestEvaluations.length === 0) return emptyAnalysis;

  const overallScore = clampScore(
    latestEvaluations.reduce((total, evaluation) => total + evaluation.overallScore, 0) /
      latestEvaluations.length,
  );
  const ranked = [...latestEvaluations].sort(
    (first, second) => second.skillLevel - first.skillLevel,
  );
  const strengths = ranked
    .slice(0, 2)
    .map((evaluation) => `${evaluation.skillName} (%${clampScore(evaluation.skillLevel)})`);
  const riskCandidates = [...ranked]
    .reverse()
    .filter((evaluation) => evaluation.skillLevel < 70)
    .slice(0, 2);

  return {
    categories: ranked.slice(0, 6).map((evaluation) => ({
      label: evaluation.skillName,
      value: clampScore(evaluation.skillLevel),
    })),
    evaluationCount: latestEvaluations.length,
    overallScore,
    risks:
      riskCandidates.length > 0
        ? riskCandidates.map(
            (evaluation) => `${evaluation.skillName} (%${clampScore(evaluation.skillLevel)})`,
          )
        : ["Evaluation puanlarında kritik bir risk alanı görünmüyor."],
    strengths,
    summary: `Evaluation Service'den alınan ${latestEvaluations.length} güncel yetkinlik kaydına göre adayın genel puanı %${overallScore}. Güçlü ve gelişime açık alanlar en güncel beceri puanlarından oluşturuldu.`,
  };
}

export function useCandidateEvaluationAnalysis(candidateId: string | null) {
  const [result, setResult] = useState<{
    analysis: CandidateEvaluationAnalysis;
    candidateId: string | null;
    error: string | null;
  }>({ analysis: emptyAnalysis, candidateId: null, error: null });

  useEffect(() => {
    if (!candidateId) return;

    const activeCandidateId = candidateId;
    const abortController = new AbortController();

    async function loadEvaluations() {
      try {
        const evaluations = await getCandidateEvaluations(
          activeCandidateId,
          abortController.signal,
        );
        if (!abortController.signal.aborted) {
          setResult({
            analysis: buildAnalysis(evaluations),
            candidateId: activeCandidateId,
            error: null,
          });
        }
      } catch (loadError) {
        if (!abortController.signal.aborted) {
          setResult({
            analysis: emptyAnalysis,
            candidateId: activeCandidateId,
            error:
              loadError instanceof Error
                ? loadError.message
                : "Aday değerlendirmeleri alınamadı.",
          });
        }
      }
    }

    void loadEvaluations();
    return () => abortController.abort();
  }, [candidateId]);

  if (!candidateId) return { ...emptyAnalysis, error: null, isLoading: false };
  if (result.candidateId !== candidateId) {
    return { ...emptyAnalysis, error: null, isLoading: true };
  }
  return { ...result.analysis, error: result.error, isLoading: false };
}
