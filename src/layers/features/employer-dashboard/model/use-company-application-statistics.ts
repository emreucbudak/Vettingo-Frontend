"use client";

import { useEffect, useState } from "react";
import { getCompanyApplicationStatistics, type CompanyApplicationStatistics } from "../api/employer-dashboard-api";

export function useCompanyApplicationStatistics() {
  const [result, setResult] = useState<{
    statistics: CompanyApplicationStatistics | null;
    error: boolean;
  }>({ statistics: null, error: false });

  useEffect(() => {
    const controller = new AbortController();
    getCompanyApplicationStatistics(controller.signal)
      .then((statistics) => {
        if (!controller.signal.aborted) setResult({ statistics, error: false });
      })
      .catch(() => {
        if (!controller.signal.aborted) setResult({ statistics: null, error: true });
      });
    return () => controller.abort();
  }, []);

  return result;
}
