"use client";

import { useEffect, useState } from "react";
import { getCandidateDashboardStatistics, type CandidateDashboardStatistics } from "../api/candidate-dashboard-api";

type StatisticsState = {
  userId: string;
  statistics: CandidateDashboardStatistics | null;
  error: string | null;
};

export function useCandidateApplicationStatistics(userId: string) {
  const [state, setState] = useState<StatisticsState | null>(null);

  useEffect(() => {
    if (!userId) return;
    const controller = new AbortController();
    async function load() {
      try {
        const statistics = await getCandidateDashboardStatistics(userId, controller.signal);
        if (!controller.signal.aborted) setState({ userId, statistics, error: null });
      } catch {
        if (!controller.signal.aborted) {
          setState({ userId, statistics: null, error: "Başvuru istatistikleri yüklenemedi. Lütfen daha sonra tekrar deneyin." });
        }
      }
    }
    void load();
    return () => controller.abort();
  }, [userId]);

  const current = state?.userId === userId ? state : null;
  return {
    statistics: current?.statistics ?? null,
    error: current?.error ?? null,
    isLoading: !current,
  };
}
