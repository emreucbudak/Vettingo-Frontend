import { decodeJwt } from "jose";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getToken } from "@/shared/auth";
import { ROUTES } from "@/shared/config/routes";
import { CandidateRecommendedJobs } from "@/widgets/candidate/recommended-jobs";
import { CandidateShell } from "@/widgets/candidate/shell";

export const metadata: Metadata = {
  title: "Kişiselleştirilmiş İlanlar | Vettingo",
};

export default async function PersonalizedJobPostingsPage() {
  const { sub: userId } = decodeJwt(await getToken());
  if (!userId) redirect(ROUTES.login);

  return (
    <CandidateShell>
      <main className="mx-auto w-full max-w-[1440px] flex-1 p-4 md:p-8">
        <h2 className="mb-6 text-3xl font-semibold leading-10 text-[#0b1c30]">
          Kişiselleştirilmiş İlanlar
        </h2>
        <CandidateRecommendedJobs userId={userId} showAll />
      </main>
    </CandidateShell>
  );
}
