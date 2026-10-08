"use client";

import { useEffect, useState } from "react";
import { getCompanyJobPostings, type CompanyJobPosting } from "../api/employer-dashboard-api";

export function useCompanyJobPostings(limit?: number) {
  const [result, setResult] = useState<{
    postings: CompanyJobPosting[] | null;
    error: boolean;
  }>({ postings: null, error: false });
  const [revision, setRevision] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    getCompanyJobPostings(controller.signal, limit)
      .then((postings) => {
        if (!controller.signal.aborted) setResult({ postings, error: false });
      })
      .catch(() => {
        if (!controller.signal.aborted) setResult({ postings: null, error: true });
      });
    return () => controller.abort();
  }, [limit, revision]);

  function retry() {
    setResult({ postings: null, error: false });
    setRevision((value) => value + 1);
  }

  return { ...result, retry };
}
