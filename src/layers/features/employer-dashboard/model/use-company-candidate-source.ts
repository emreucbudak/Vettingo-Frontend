"use client";

import { useEffect, useState } from "react";
import { getCompanyCandidateSource, type CompanyCandidateSource } from "../api/employer-dashboard-api";

export function useCompanyCandidateSource() {
  const [result, setResult] = useState<{
    source: CompanyCandidateSource | null;
    error: boolean;
  }>({ source: null, error: false });

  useEffect(() => {
    const controller = new AbortController();
    getCompanyCandidateSource(controller.signal)
      .then((source) => {
        if (!controller.signal.aborted) setResult({ source, error: false });
      })
      .catch(() => {
        if (!controller.signal.aborted) setResult({ source: null, error: true });
      });
    return () => controller.abort();
  }, []);

  return result;
}
