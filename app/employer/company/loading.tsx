import { EmployerCompanySkeleton } from "@/shared/ui/dashboard-loading/dashboard-page-skeleton";
import { EmployerShell } from "@/widgets/employer/shell";

export default function Loading() {
  return <EmployerShell><EmployerCompanySkeleton /></EmployerShell>;
}
