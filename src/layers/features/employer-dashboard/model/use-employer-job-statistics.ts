"use client";

import { useEffect, useState } from "react";
import { getStats, type EmployerStats } from "../api/employer-dashboard-api";

export function useEmployerJobStatistics() {
  const [statistics, setStatistics] = useState<EmployerStats | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    getStats(controller.signal)
      .then((result) => {
        if (!controller.signal.aborted) setStatistics(result);
      })
      .catch(() => {
        if (!controller.signal.aborted) setError(true);
      });
    return () => controller.abort();
  }, []);

  return { statistics, error };
}
