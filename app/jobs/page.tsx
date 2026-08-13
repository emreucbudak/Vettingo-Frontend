import type { Metadata } from "next";
import { JobDiscoveryPage } from "@/pages/job-discovery";

export const metadata: Metadata = {
  title: "İşler | Vettingo",
};

export default function JobsRoute() {
  return <JobDiscoveryPage />;
}