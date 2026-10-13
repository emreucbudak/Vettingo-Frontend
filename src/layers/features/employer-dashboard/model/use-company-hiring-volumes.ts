"use client";

import { useEffect, useState } from "react";
import { getCompanyHiringVolumes, type CompanyHiringVolume } from "../api/employer-dashboard-api";

export function useCompanyHiringVolumes() {
  const [result, setResult] = useState<{
    volumes: CompanyHiringVolume[] | null;
    error: boolean;
  }>({ volumes: null, error: false });

  useEffect(() => {
    const controller = new AbortController();
    getCompanyHiringVolumes(controller.signal)
      .then((volumes) => {
        if (!controller.signal.aborted) setResult({ volumes, error: false });
      })
      .catch(() => {
        if (!controller.signal.aborted) setResult({ volumes: null, error: true });
      });
    return () => controller.abort();
  }, []);

  return result;
}
