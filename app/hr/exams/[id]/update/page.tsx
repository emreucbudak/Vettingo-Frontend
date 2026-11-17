import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sınavı Düzenle" };

export default function HrUpdateExamRoute() {
  return (
    <main
      aria-label="Sınavı düzenle"
      className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8"
    />
  );
}
