import { EmployerShell } from "@/widgets/employer/shell";
import { ScoutDirectory } from "@/features/scout-filters";

export function EmployerScoutPage() {
  return (
    <EmployerShell>
      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <ScoutDirectory />
      </main>
    </EmployerShell>
  );
}
