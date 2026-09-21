"use client";

import { useEffect, useState } from "react";
import { getEmployerJobStatistics, type EmployerJobStatistics } from "../api/employer-dashboard-api";

export function useEmployerJobStatistics() {
  const [statistics, setStatistics] = useState<EmployerJobStatistics | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    getEmployerJobStatistics(controller.signal)
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
