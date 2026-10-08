"use client";

import { useEffect, useState } from "react";
import { getTodayInterviews, type TodayInterview } from "../api/hr-interviews-api";

export function useTodayInterviews() {
  const [result, setResult] = useState<{
    interviews: TodayInterview[] | null;
    error: boolean;
  }>({ interviews: null, error: false });
  const [revision, setRevision] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    getTodayInterviews(controller.signal)
      .then((interviews) => {
        if (!controller.signal.aborted) setResult({ interviews, error: false });
      })
      .catch(() => {
        if (!controller.signal.aborted) setResult({ interviews: null, error: true });
      });
    return () => controller.abort();
  }, [revision]);

  function retry() {
    setResult({ interviews: null, error: false });
    setRevision((value) => value + 1);
  }

  return { ...result, retry };
}
