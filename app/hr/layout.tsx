import type { Metadata } from "next";
import type { ReactNode } from "react";
import { HrShell } from "@/widgets/hr-dashboard";

export const metadata: Metadata = {
  title: {
    default: "HR Paneli | Vettingo",
    template: "%s | Vettingo",
  },
  description: "Vettingo insan kaynakları işe alım çalışma alanı.",
};

export default function HrLayout({ children }: { children: ReactNode }) {
  return <HrShell>{children}</HrShell>;
}
