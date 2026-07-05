import type { Metadata } from "next";
import { JobDiscoveryPage } from "@/widgets/job-discovery";

export const metadata: Metadata = {
  title: "Jobs | Vettingo",
};

export default function JobsRoute() {
  return <JobDiscoveryPage />;
}