import type { Metadata } from "next";
import { HrCandidatesPage } from "@/pages/hr-dashboard";

export const metadata: Metadata = {
  title: "Aday Havuzu",
};

export default function HrCandidatesRoute() {
  return <HrCandidatesPage />;
}
