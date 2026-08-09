import { ROUTES } from "@/shared/config/routes";

export const candidateProfile = {
  companyLabel: "Vettingo",
  edition: "",
} as const;

export const navigationItems = [
  { label: "Panel", icon: "space_dashboard", active: true, href: ROUTES.candidate },
  { label: "Başvurular", icon: "assignment_ind", href: `${ROUTES.candidate}#applications` },
  { label: "Yapay Zeka Analizi", icon: "auto_awesome", href: ROUTES.candidateAnalysis },
  { label: "İşler", icon: "business_center", href: ROUTES.jobs },
] as const;

export const utilityItems = [
  { label: "Yardım Merkezi", icon: "support_agent", href: ROUTES.candidateHelpCenter },
  { label: "Ayarlar", icon: "settings" },
  { label: "Çıkış Yap", icon: "door_open", action: "logout" },
] as const;

export const recommendedJobs = [
  {
    role: "UX Direktörü",
    company: "Creative Dynamics",
    location: "New York, NY",
    icon: "domain",
    match: "98% Eşleşme",
    postedAt: "2 gün önce yayınlandı",
  },
  {
    role: "Tasarım Direktörü",
    company: "Fintech Partners",
    location: "Londra, Birleşik Krallık",
    icon: "account_balance",
    match: "94% Eşleşme",
    postedAt: "5 saat önce yayınlandı",
  },
] as const;
