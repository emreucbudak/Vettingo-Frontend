"use client";

import { useEffect, useState } from "react";
import { getCities, type City } from "@/entities/city";

export function useCities() {
  const [result, setResult] = useState<{ cities: City[] | null; error: boolean }>({
    cities: null,
    error: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    getCities(controller.signal)
      .then((cities) => {
        if (!controller.signal.aborted) {
          setResult({
            cities: [...cities].sort((first, second) => first.cityName.localeCompare(second.cityName, "tr-TR")),
            error: false,
          });
        }
      })
      .catch(() => {
        if (!controller.signal.aborted) setResult({ cities: null, error: true });
      });
    return () => controller.abort();
  }, []);

  return result;
}
