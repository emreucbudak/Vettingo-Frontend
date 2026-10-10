"use client";

import { useEffect, useState } from "react";
import { getInterviewStatistics, type InterviewStatistics } from "../api/hr-interviews-api";

export function useInterviewStatistics() {
  const [result, setResult] = useState<{
    statistics: InterviewStatistics | null;
    error: boolean;
  }>({ statistics: null, error: false });

  useEffect(() => {
    const controller = new AbortController();
    getInterviewStatistics(controller.signal)
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
