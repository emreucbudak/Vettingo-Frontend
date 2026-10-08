"use client";

import { useEffect, useState } from "react";
import {
  getLatestPersonalizedJobPostings,
  type PersonalizedJobPostingDto,
} from "../api/candidate-dashboard-api";

type RecommendationsState = {
  userId: string;
  jobs: PersonalizedJobPostingDto[];
  error: string | null;
};

export function useCandidateRecommendedJobs(userId: string) {
  const [state, setState] = useState<RecommendationsState | null>(null);

  useEffect(() => {
    if (!userId) return;
    const controller = new AbortController();

    async function load() {
      try {
        const jobs = await getLatestPersonalizedJobPostings(userId, controller.signal);
        if (!controller.signal.aborted) {
          setState({ userId, jobs, error: null });
        }
      } catch {
        if (!controller.signal.aborted) {
          setState({ userId, jobs: [], error: "Önerilen fırsatlar yüklenemedi. Lütfen daha sonra tekrar deneyin." });
        }
      }
    }

    void load();
    return () => controller.abort();
  }, [userId]);

  const current = state?.userId === userId ? state : null;
  return {
    jobs: current?.jobs ?? [],
    error: current?.error ?? null,
    isLoading: !current,
  };
}
