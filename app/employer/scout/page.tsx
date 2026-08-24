import type { Metadata } from "next";
import { EmployerScoutPage } from "@/pages/employer-scout";

export const metadata: Metadata = {
  title: "Scout | Vettingo",
  description:
    "Açık roller için uygun adayları keşfedin, filtreleyin ve kısa listeye alın.",
};

export default function EmployerScoutRoute() {
  return <EmployerScoutPage />;
}
