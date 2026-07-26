import type { Metadata } from "next";
import { EmployerTalentsPage } from "@/widgets/employer-recruiting";

export const metadata: Metadata = {
  title: "Yetenekler | Vettingo",
};

export default function EmployerTalentsRoute() {
  return <EmployerTalentsPage />;
}
