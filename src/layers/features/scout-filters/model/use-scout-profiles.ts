"use client";

import { useEffect, useState } from "react";
import { getScoutProfiles, type ScoutProfile, type ScoutSearchRequest } from "../api/scout-api";

export function useScoutProfiles() {
  const [request, setRequest] = useState<ScoutSearchRequest | null>(null);
  const [result, setResult] = useState<{
    profiles: ScoutProfile[] | null;
    error: string | null;
  }>({ profiles: null, error: null });

  useEffect(() => {
    if (request === null) return;

    const controller = new AbortController();
    getScoutProfiles(request, controller.signal)
      .then((profiles) => {
        if (!controller.signal.aborted) setResult({ profiles, error: null });
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setResult({
            profiles: null,
            error: "Adaylar yüklenemedi. Lütfen yeniden deneyin.",
          });
        }
      });
    return () => controller.abort();
  }, [request]);

  function search(nextRequest: ScoutSearchRequest) {
    setResult({ profiles: null, error: null });
    setRequest({ ...nextRequest });
  }

  function reset() {
    setRequest(null);
    setResult({ profiles: null, error: null });
  }

  return {
    ...result,
    hasSearched: request !== null,
    loading: request !== null && result.profiles === null && result.error === null,
    search,
    reset,
  };
}
