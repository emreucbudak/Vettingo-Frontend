"use client";

import { useEffect, useState } from "react";
import {
  getCandidateApplications,
  getJobPosting,
  getUpcomingInterviews,
  type InterviewDto,
  type JobApplicationDto,
  type JobPostingDto,
} from "../api/candidate-dashboard-api";

export type CandidateApplication = {
  id: string;
  role: string;
  location: string;
  status: string;
  appliedAtLabel: string;
  progress: number;
  currentStep: string;
  statusClassName: string;
};

export type UpcomingInterview = {
  id: string;
  title: string;
  description: string;
  type: "AI" | "Human";
  typeLabel: string;
  typeClassName: string;
  month: string;
  day: string;
  time: string;
};

type CandidateDashboardData = {
  applications: CandidateApplication[];
  interviews: UpcomingInterview[];
};

const initialData: CandidateDashboardData = {
  applications: [],
  interviews: [],
};

const applicationStatusConfig = {
  Submitted: {
    label: "Başvuru Alındı",
    progress: 20,
    currentStep: "4 adımın 1.'si: Başvuru alındı",
    statusClassName: "bg-[#e5eeff] text-[#0b1c30]",
  },
  UnderReview: {
    label: "Değerlendiriliyor",
    progress: 45,
    currentStep: "4 adımın 2.'si: Değerlendirme",
    statusClassName: "bg-[#fff3cd] text-[#664d03]",
  },
  Interview: {
    label: "Mülakat Aşamasında",
    progress: 70,
    currentStep: "4 adımın 3.'sü: Mülakat",
    statusClassName: "bg-[#eee8ff] text-[#4f378b]",
  },
  Offer: {
    label: "Teklif Alındı",
    progress: 100,
    currentStep: "4 adımın 4.'sü: Teklif",
    statusClassName: "bg-[#d7f3e7] text-[#006c49]",
  },
  Rejected: {
    label: "Olumsuz Sonuçlandı",
    progress: 100,
    currentStep: "Başvuru süreci tamamlandı",
    statusClassName: "bg-[#ffdad6] text-[#93000a]",
  },
  Withdrawn: {
    label: "Geri Çekildi",
    progress: 100,
    currentStep: "Başvuru geri çekildi",
    statusClassName: "bg-[#e2e2e9] text-[#45474c]",
  },
} as const;

type ApplicationStatusKey = keyof typeof applicationStatusConfig;

const numericApplicationStatuses: Record<number, ApplicationStatusKey> = {
  1: "Submitted",
  2: "UnderReview",
  3: "Interview",
  4: "Offer",
  5: "Rejected",
  6: "Withdrawn",
};

function getApplicationStatus(status: string | number) {
  const statusKey =
    typeof status === "number"
      ? numericApplicationStatuses[status]
      : (status as ApplicationStatusKey);

  return applicationStatusConfig[statusKey ?? "Submitted"] ?? applicationStatusConfig.Submitted;
}

function toApplicationView(
  application: JobApplicationDto,
  jobPosting?: JobPostingDto,
): CandidateApplication {
  const status = getApplicationStatus(application.status);
  const appliedAt = new Date(application.appliedAt);

  return {
    id: application.id,
    role: jobPosting?.title || "İş ilanı",
    location: jobPosting?.location || "Konum belirtilmedi",
    status: status.label,
    appliedAtLabel: Number.isNaN(appliedAt.getTime())
      ? "Başvuru tarihi belirtilmedi"
      : `Başvuru: ${new Intl.DateTimeFormat("tr-TR", { dateStyle: "medium" }).format(appliedAt)}`,
    progress: status.progress,
    currentStep: status.currentStep,
    statusClassName: status.statusClassName,
  };
}

function normalizeInterviewType(type: InterviewDto["type"]): "AI" | "Human" {
  return type === "Human" || type === 2 ? "Human" : "AI";
}

function formatTime(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function toInterviewView(interview: InterviewDto): UpcomingInterview {
  const startDate = new Date(interview.startDate);
  const endDate = interview.endDate ? new Date(interview.endDate) : null;
  const type = normalizeInterviewType(interview.type);
  const month = new Intl.DateTimeFormat("tr-TR", { month: "short" })
    .format(startDate)
    .replace(".", "");

  return {
    id: interview.id,
    title: interview.title,
    description: interview.description,
    type,
    typeLabel: type === "AI" ? "AI Mülakatı" : "İnsan Mülakatı",
    typeClassName:
      type === "AI"
        ? "bg-[#e5eeff] text-[#0b1c30]"
        : "bg-[#d7f3e7] text-[#006c49]",
    month,
    day: new Intl.DateTimeFormat("tr-TR", { day: "2-digit" }).format(startDate),
    time:
      endDate && !Number.isNaN(endDate.getTime())
        ? `${formatTime(startDate)} - ${formatTime(endDate)}`
        : formatTime(startDate),
  };
}

export function useCandidateDashboardData(candidateId: string | null) {
  const [data, setData] = useState<CandidateDashboardData>(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!candidateId) {
      return;
    }
    const activeCandidateId = candidateId;

    const abortController = new AbortController();

    async function loadDashboard() {
      try {
        const [applications, interviews] = await Promise.all([
          getCandidateApplications(activeCandidateId, abortController.signal),
          getUpcomingInterviews(activeCandidateId, abortController.signal),
        ]);

        const jobPostings = await Promise.all(
          applications.map(async (application) => {
            try {
              return await getJobPosting(application.jobPostingId, abortController.signal);
            } catch {
              return undefined;
            }
          }),
        );

        const applicationViews = applications
          .map((application, index) => toApplicationView(application, jobPostings[index]))
          .sort((first, second) => {
            const firstApplication = applications.find((item) => item.id === first.id);
            const secondApplication = applications.find((item) => item.id === second.id);
            return (
              new Date(secondApplication?.appliedAt ?? 0).getTime() -
              new Date(firstApplication?.appliedAt ?? 0).getTime()
            );
          });

        const now = Date.now();
        const interviewViews = interviews
          .filter((interview) => new Date(interview.startDate).getTime() >= now)
          .sort(
            (first, second) =>
              new Date(first.startDate).getTime() - new Date(second.startDate).getTime(),
          )
          .slice(0, 2)
          .map(toInterviewView);

        if (!abortController.signal.aborted) {
          setData({ applications: applicationViews, interviews: interviewViews });
          setError(null);
        }
      } catch (loadError) {
        if (!abortController.signal.aborted) {
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Panel verileri alınamadı. Lütfen tekrar deneyin.",
          );
        }
      } finally {
        if (!abortController.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    void loadDashboard();
    return () => abortController.abort();
  }, [candidateId]);

  return { ...data, error, isLoading };
}
