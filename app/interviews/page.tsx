import type { Metadata } from "next";
import { interviewsDocumentation } from "@/entities/hr-product-documentation";
import { HrProductDocumentationPage } from "@/pages/hr-product-documentation";

export const metadata: Metadata = {
  title: "Mülakatlar Hakkında | Vettingo",
  description:
    "Vettingo ile mülakat planlama, panel hazırlığı ve yapılandırılmış geri bildirim akışını nasıl yöneteceğinizi öğrenin.",
};

export default function InterviewsDocumentationRoute() {
  return <HrProductDocumentationPage content={interviewsDocumentation} />;
}
