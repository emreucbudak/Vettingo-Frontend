import type { Metadata } from "next";
import { LandingPage } from "@/pages/landing-page";

export const metadata: Metadata = {
  title: "Vettingo",
};

export default function Home() {
  return <LandingPage />;
}

