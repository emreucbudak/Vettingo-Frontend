import type { Metadata } from "next";
import { LandingPage } from "@/widgets/landing-page";

export const metadata: Metadata = {
  title: "Vettingo",
};

export default function Home() {
  return <LandingPage />;
}

