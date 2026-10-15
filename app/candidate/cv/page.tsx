
import { CreateCvPage } from "@/pages/cv";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Sihirbazı | Vettingo",
  description:
    "Vettingo aday profilinizi, deneyimlerinizi, yetkinliklerinizi ve özgeçmişinizi etkili biçimde nasıl yöneteceğinizi öğrenin.",
};

export default function CvCreatorPage(){
  return <CreateCvPage/>;
}
