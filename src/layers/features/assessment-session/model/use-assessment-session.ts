"use client";

import { useEffect, useMemo, useState } from "react";
import type { AssessmentAnswerId } from "@/entities/assessment";

export function useAssessmentSession(
  initialDuration: number,
  initialAnswer: AssessmentAnswerId,
) {
  const [remainingSeconds, setRemainingSeconds] = useState(initialDuration);
  const [selectedAnswer, setSelectedAnswer] = useState<AssessmentAnswerId>(initialAnswer);
  const [isFlagged, setIsFlagged] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished || remainingSeconds <= 0) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setRemainingSeconds((seconds) => Math.max(0, seconds - 1));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [isFinished, remainingSeconds]);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, [remainingSeconds]);

  return {
    formattedTime,
    isFinished,
    isFlagged,
    selectedAnswer,
    finishAssessment: () => setIsFinished(true),
    setSelectedAnswer,
    toggleFlag: () => setIsFlagged((flagged) => !flagged),
  };
}
