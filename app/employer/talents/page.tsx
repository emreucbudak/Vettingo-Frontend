import type { Metadata } from "next";
import { EmployerTalentsPage } from "@/pages/employer-recruiting";

export const metadata: Metadata = {
  title: "Yetenekler | Vettingo",
};

export default function EmployerTalentsRoute() {
  return <EmployerTalentsPage />;
}
