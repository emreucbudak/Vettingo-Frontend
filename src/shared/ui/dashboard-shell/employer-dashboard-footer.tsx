import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";

const footerLinks = [
  { label: "Gizlilik Politikası", href: "#" },
  { label: "Kullanım Şartları", href: "#" },
  { label: "Yardım Merkezi", href: ROUTES.employerHelpCenter },
  { label: "Destek", href: ROUTES.employerHelpCenter },
] as const;

export function EmployerDashboardFooter() {
  return (
    <footer className="mt-auto flex flex-col gap-4 border-t border-[#c5c6cd] bg-[#f8f9ff] px-4 py-6 md:flex-row md:items-center md:justify-between md:px-8">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-medium leading-4 text-[#45474c]">
        <span className="text-xs font-bold uppercase tracking-[0.05em] text-[#0b1c30]">
          Vettingo
        </span>
        <span>© 2026 Vettingo. Tüm hakları saklıdır.</span>
      </div>
      <nav aria-label="Alt navigasyon">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium leading-4">
          {footerLinks.map((link) => (
            <li key={link.label}>
              <Link
                className="text-[#45474c] transition-colors hover:text-[#091426] hover:underline"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
