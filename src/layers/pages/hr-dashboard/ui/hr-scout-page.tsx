import { HrPageHeader } from "@/entities/hr-dashboard/ui";
import { HrScoutDirectory } from "@/widgets/hr/scout-directory";

export function HrScoutPage() {
  return (
    <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
      <HrPageHeader
        title="Scout Merkezi"
      />

      <HrScoutDirectory />
    </main>
  );
}
