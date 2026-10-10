"use client";

import { useEffect, useState } from "react";
import { getInterviewsByDate, type ScheduledInterview } from "../api/hr-interviews-api";

export function useInterviewsByDate(date: string) {
  const [result, setResult] = useState<{
    date: string;
    interviews: ScheduledInterview[] | null;
    error: boolean;
  }>({ date, interviews: null, error: false });

  useEffect(() => {
    const controller = new AbortController();
    getInterviewsByDate(date, controller.signal)
      .then((interviews) => {
        if (!controller.signal.aborted) setResult({ date, interviews, error: false });
      })
      .catch(() => {
        if (!controller.signal.aborted) setResult({ date, interviews: null, error: true });
      });
    return () => controller.abort();
  }, [date]);

  return {
    interviews: result.date === date ? result.interviews : null,
    error: result.date === date && result.error,
  };
}
