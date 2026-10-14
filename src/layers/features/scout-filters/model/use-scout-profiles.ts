"use client";

import { useEffect, useState } from "react";
import { getScoutProfiles, type ScoutProfile, type ScoutSearchRequest } from "../api/scout-api";

export function useScoutProfiles() {
  const [request, setRequest] = useState<ScoutSearchRequest>({});
  const [result, setResult] = useState<{
    profiles: ScoutProfile[] | null;
    error: string | null;
  }>({ profiles: null, error: null });

  useEffect(() => {
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

  return {
    ...result,
    loading: result.profiles === null && result.error === null,
    search,
  };
}
