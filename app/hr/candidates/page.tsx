import type { Metadata } from "next";
import { HrCandidatesPage } from "@/widgets/hr-dashboard";

export const metadata: Metadata = {
  title: "Aday Havuzu",
};

export default function HrCandidatesRoute() {
  return <HrCandidatesPage />;
}
