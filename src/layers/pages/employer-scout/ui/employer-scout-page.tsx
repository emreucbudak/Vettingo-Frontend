import { EmployerShell } from "@/widgets/employer/shell";
import { HrScoutDirectory } from "@/widgets/hr/scout-directory";

export function EmployerScoutPage() {
  return (
    <EmployerShell>
      <main className="employer-dashboard-theme mx-auto w-full max-w-[1440px] flex-1 bg-[#f8f9ff] p-4 md:p-8">
        <HrScoutDirectory />
      </main>
    </EmployerShell>
  );
}
